import json, re, sys
import os; sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
import parse_rq as P
IDS="18600312 26501194 21600052 21358006 15191323 14821222 12304022 18249217 15159365".split()
LEVEL={'fr':{'1er niveau/RDC':'Rez-de-chaussée','2e niveau':'Étage','3e niveau':'3e étage','Sous-sol 1':'Sous-sol'},
       'en':{'1st level/Ground floor':'Ground floor','2nd level':'Upper floor','3rd level':'3rd floor','Basement 1':'Basement'}}
LEVEL_IF3={'fr':{'2e niveau':'2e étage'},'en':{'2nd level':'2nd floor'}}
SKIP={'fr':{'Année de construction','Superficie habitable','Superficie du terrain','Proximité'},
      'en':{'Year constructed','Living area','Lot area','Proximity'}}
def num(v):
    v=re.sub(r'[^\d]','',v); return int(v) if v else None
def clean(v): return v.replace(' X ',' × ').strip()

def low(v):
    parts=[x.strip() for x in v.split(',')]
    return ', '.join([parts[0]]+[x[:1].lower()+x[1:] for x in parts[1:]])
def facts(lang, kv, ev, ex):
    fr=lang=='fr'; out=[]
    g=lambda *ks: next((kv[k] for k in ks if kv.get(k)),'')
    mode=g('Mode de chauffage','Heating System'); en=g('Énergie pour le chauffage','Heating Energy')
    mode={'Air soufflé (pulsé)':'Air pulsé','Electric baseboard units':'Electric baseboards'}.get(mode,mode)
    if mode:
        heat=mode if (not en or 'lectri' in mode) else f"{mode}, {en[:1].lower()+en[1:]}"
        out.append(['Chauffage' if fr else 'Heating', heat])
    am=[x.strip() for x in g("Commodités de la propriété ou de l'unité",'Property or unit amenity').split(',')]
    clim=[x for x in am if any(w in x.lower() for w in ('climatis','thermopompe','échangeur','air condition','heat pump','air exchange'))]
    if clim: out.append(['Climatisation' if fr else 'Cooling', low(', '.join(clim))])
    if g('Foyer-Poêle','Fireplace-Stove'):
        fp=g('Foyer-Poêle','Fireplace-Stove')
        out.append(['Foyer' if fr else 'Fireplace', (fp[6:7].upper()+fp[7:]) if fr and fp.startswith('Foyer ') else fp])
    if g('Sous-sol','Basement'): out.append(['Sous-sol' if fr else 'Basement', low(g('Sous-sol','Basement'))])
    if g('Garage'): out.append(['Garage', low(g('Garage'))])
    pk=g('Stationnement (total)','Parking (total)')
    if pk:
        items=re.findall(r'([^,(]+)\((\d+)\)',pk); tot=sum(int(n) for _,n in items)
        det=', '.join(f"{k.strip().lower()} {n}" for k,n in items)
        out.append(['Stationnement' if fr else 'Parking', f"{tot} ({det})" if len(items)>1 else f"{tot} ({items[0][0].strip().lower()})"])
    if g('Piscine','Pool'): out.append(['Piscine' if fr else 'Pool', g('Piscine','Pool')])
    dims=g('Dimensions du terrain','Lot size')
    if dims and not dims.rstrip().endswith('X'): out.append(['Dimensions du terrain' if fr else 'Lot size', clean(dims)])
    for k in ('Particularités du bâtiment',"Building's distinctive features",'Particularités du site','Distinctive Features'):
        if kv.get(k): out.append(['Particularité' if fr else 'Feature', kv[k]])
    if g('Vue','View'): out.append(['Vue' if fr else 'View', low(g('Vue','View'))])
    w=g('Approvisionnement en eau','Water Supply'); sw=g("Système d'égouts",'Sewage System')
    if w or sw:
        if w==sw and w in ('Municipalité','Municipality'): v='Municipaux' if fr else 'Municipal'
        elif w==sw and w in ('Aucun','None'): v='Aucun service' if fr else 'No services'
        else: v=(f"eau : {w}, égout : {sw}" if fr else f"water: {w}, sewer: {sw}").capitalize()
        out.append(['Eau et égout' if fr else 'Water and sewer', v])
    if g('Appareils en location (mensuel)','Rented Equipment (monthly)'):
        out.append(['En location' if fr else 'Rented', re.sub(r'\s*\(\d+\)','',g('Appareils en location (mensuel)','Rented Equipment (monthly)'))])
    if ev and ev.get('total'):
        lbl=(f"Évaluation municipale ({ev['year']})" if fr else f"Municipal assessment ({ev['year']})")
        out.append([lbl, money(ev['total'],lang)])
    if ex and ex.get('total'):
        out.append(['Frais de copropriété' if fr else 'Condo fees', money(ex['total'],lang)+(' / an' if fr else ' / yr')])
    return out
def money(n,lang):
    s=f"{n:,}"
    return s.replace(',',' ')+' $' if lang=='fr' else '$'+s
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
        kv={k:v for k,v in d['building']+d['land']+d['features']}
        out[u][lang]={'levels':groups,'facts':facts(lang,kv,ev,ex),
            'near':[x.strip() for x in near.split(',') if x.strip()],
            'assessment':ev,'taxes':tx,'expenses':ex,
            'inclusions':d['inclusions'].get('Inclusions',''),'exclusions':d['inclusions'].get('Exclusions',''),
            'openHouses':oh}
json.dump(out,open(sys.argv[1],'w'),ensure_ascii=False,indent=1)
print('ok')
