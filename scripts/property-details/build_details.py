import json, re, sys
import os; sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
import parse_rq as P
from highlights import H
IDS="18600312 26501194 21600052 21358006 15191323 14821222 12304022 18249217 15159365".split()
LEVEL={'fr':{'1er niveau/RDC':'Rez-de-chaussée','2e niveau':'Étage','3e niveau':'3e étage','Sous-sol 1':'Sous-sol'},
       'en':{'1st level/Ground floor':'Ground floor','2nd level':'Upper floor','3rd level':'3rd floor','Basement 1':'Basement'}}
LEVEL_IF3={'fr':{'2e niveau':'2e étage'},'en':{'2nd level':'2nd floor'}}
SKIP={'fr':{'Année de construction','Superficie habitable','Superficie du terrain','Proximité'},
      'en':{'Year constructed','Living area','Lot area','Proximity'}}
def num(v):
    v=re.sub(r'[^\d]','',v); return int(v) if v else None
def clean(v): return v.replace(' X ',' × ').strip()
out={}
for u in IDS:
    out[u]={}
    for lang in ('fr','en'):
        d=P.parse(os.path.join(sys.argv[2],f'{lang}-{u}.html'),lang)
        lvkey='Niveau' if lang=='fr' else 'Level'; fl='Revêtement' if lang=='fr' else 'Flooring'; dt='Détails' if lang=='fr' else 'Details'
        has3=any(r.get(lvkey,'').startswith(('3e','3rd')) for r in d['rooms'])
        groups=[]
        for r in d['rooms']:
            raw=r.get(lvkey,'')
            name=(LEVEL_IF3[lang].get(raw) if has3 else None) or LEVEL[lang].get(raw,raw)
            g=next((g for g in groups if g['level']==name),None)
            if not g: g={'level':name,'rooms':[]}; groups.append(g)
            nm=r['name']; nm=nm[0].upper()+nm[1:]
            g['rooms'].append({'name':nm,'dim':clean(r.get('Dimensions','')),'floor':r.get(fl,''),'note':r.get(dt,'')})
        order={'Sous-sol':9,'Basement':9}
        groups.sort(key=lambda g: order.get(g['level'],0))  # stable: keep RDC/étages order, basement last
        bld=[[k,clean(v)] for k,v in d['building']+d['features'] if k not in SKIP[lang] and v]
        land=[[k,clean(v)] for k,v in d['land'] if k not in SKIP[lang] and v and not v.rstrip().endswith('X')]
        near=next((v for k,v in d['land']+d['building']+d['features'] if k in ('Proximité','Proximity')),'')
        fin=d['financial']; ev=tx=ex=None
        for k,rows in fin.items():
            yr=re.search(r'\((\d{4})\)',k)
            if k.startswith(('Évaluation','Municipal assessment')): ev={'year':yr.group(1) if yr else '','rows':rows,'total':num(rows[-1][1])}
            elif k=='Taxes': tx={'rows':rows,'total':num(rows[-1][1])}
            elif k.startswith(('Dépenses','Annual')): ex={'rows':rows,'total':num(rows[-1][1])}
        oh=[]
        for date,s,e in d['openhouse']:
            p=date.split('/')
            dd,mm=(p[0],p[1]) if lang=='fr' else (p[1],p[0])
            oh.append({'date':f'20{p[2]}-{mm}-{dd}','start':s,'end':e})
        out[u][lang]={'highlights':H[u][lang],'levels':groups,'building':bld,'land':land,
            'near':[x.strip() for x in near.split(',') if x.strip()],
            'assessment':ev,'taxes':tx,'expenses':ex,
            'inclusions':d['inclusions'].get('Inclusions',''),'exclusions':d['inclusions'].get('Exclusions',''),
            'openHouses':oh}
json.dump(out,open(sys.argv[1],'w'),ensure_ascii=False,indent=1)
print('ok', {u:(len(out[u]['fr']['levels']),out[u]['fr']['taxes']['total'] if out[u]['fr']['taxes'] else None, out[u]['fr']['openHouses']) for u in out})
