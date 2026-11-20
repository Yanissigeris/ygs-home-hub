import json, re, sys
from bs4 import BeautifulSoup
def T(el): return re.sub(r'\s+',' ',el.get_text(' ',strip=True)).strip() if el else ''
def section(s, title):
    for h in s.find_all('h2'):
        if T(h).lower()==title.lower() or (title.endswith('*') and T(h).lower().startswith(title[:-1].lower())):
            # accordion container: walk up until we find an ancestor containing content wrapper
            p=h
            for _ in range(6):
                p=p.parent
                if p.find(class_=re.compile('accordion__content')) or p.find('dl'): return p
            return h.parent
    return None
def chars(sec):
    out=[]
    if not sec: return out
    for c in sec.find_all(class_='characteristics__car'):
        k=T(c.find(class_=re.compile('__tcar'))); v=T(c.find(class_=re.compile('__scarac')))
        if k: out.append([k,v])
    return out
def parse(path, lang):
    s=BeautifulSoup(open(path).read(),'html.parser')
    L = (lambda fr,en: fr if lang=='fr' else en)
    d={}
    d['building']=chars(section(s, L('Particularités du bâtiment','Building*')))
    d['land']=chars(section(s, L('Particularités du terrain','Lot*')))
    seen={tuple(x) for x in d['building']+d['land']}
    d['features']=[x for x in chars(section(s, L('Caractéristiques','Characteristics'))) if tuple(x) not in seen]
    rooms=[]
    for t in s.find_all(class_='rooms-details-section__vertical-table'):
        name=T(t.find(class_=re.compile('vertical-table-name')))
        vals={}
        for div in t.find_all('div', recursive=False):
            sp=div.find_all('span')
            if len(sp)>=2: vals[T(sp[0]).rstrip(' :')]=T(sp[1])
        rooms.append({'name':name, **vals})
    d['rooms']=rooms
    fin={}
    for h3 in s.find_all('h3'):
        dl=h3.find_next_sibling('dl')
        if dl:
            fin[T(h3)]=[[T(x.find('dt')),T(x.find('dd'))] for x in dl.find_all('div')]
    d['financial']=fin
    inc={}
    for key in (['Inclusions','Exclusions']):
        for h3 in s.find_all('h3'):
            if T(h3)==key:
                nxt=h3.find_next_sibling()
                inc[key]=T(nxt) if nxt else ''
    d['inclusions']=inc
    full=T(s.body)
    d['openhouse']=[list(m) for m in re.findall(r'(\d\d/\d\d/\d\d) (?:de|from) (\d\d:\d\d) (?:à|to) (\d\d:\d\d)', full)]
    ad=section(s,L('Addenda','Addendum'))
    d['addenda']=ad.get_text('\n',strip=True) if ad else ''
    return d
if __name__=='__main__':
    print(json.dumps(parse(sys.argv[1], sys.argv[2]), ensure_ascii=False, indent=1))
