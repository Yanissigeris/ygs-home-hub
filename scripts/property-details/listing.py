#!/usr/bin/env python3
"""Outils pour les fiches de propriétés de yanisgauthier.com (source : RE/MAX Québec).

Commandes (depuis la racine du dépôt) :
  python3 scripts/property-details/listing.py fetch ULS [ULS ...]
      Télécharge les fiches FR/EN, les photos (WebP 1600/800 + photo de carte)
      et affiche un résumé JSON (prix, type, adresse, pièces, description...).
  python3 scripts/property-details/listing.py add ULS --desc-fr "..." --desc-en "..."
      Après fetch : écrit l'inscription dans les 7 fichiers du site
      (properties.ts, properties-en.ts, property-images.ts, property-pages.ts,
      property-slugs.json, seo-routes.json, list_properties.ts). Refuse si
      l'ULS existe déjà ou si un champ clé manque.
  python3 scripts/property-details/listing.py details
      Régénère src/data/property-details.json pour toutes les propriétés
      actives de src/data/properties.ts (télécharge les fiches manquantes).
  python3 scripts/property-details/listing.py audit
      Compare le prix et la présence de chaque propriété active du site
      avec RE/MAX Québec et liste les écarts.

Requiert : beautifulsoup4, pillow, curl.
"""
import json
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
CACHE = os.path.join(ROOT, ".cache", "property-details")
HTML = os.path.join(CACHE, "html")
sys.path.insert(0, HERE)

URL = {
    "fr": "https://www.remax-quebec.com/fr/proprietes/maison-a-vendre-outaouais/x-{u}",
    "en": "https://www.remax-quebec.com/en/properties/house-for-sale-outaouais/x-{u}",
}


def sh(*args):
    return subprocess.run(args, check=True, capture_output=True, text=True).stdout


def fetch_html(uls, force=False):
    os.makedirs(HTML, exist_ok=True)
    final = {}
    for lang in ("fr", "en"):
        path = os.path.join(HTML, f"{lang}-{uls}.html")
        if force or not os.path.exists(path):
            final[lang] = sh("curl", "-sSL", "-o", path, "-w", "%{url_effective}", URL[lang].format(u=uls)).strip()
        else:
            final[lang] = None
    return final


def text_of(path):
    from bs4 import BeautifulSoup

    s = BeautifulSoup(open(path, encoding="utf-8").read(), "html.parser")
    return s, re.sub(r"\s+", " ", s.get_text(" ", strip=True))


def summary(uls, lang):
    s, t = text_of(os.path.join(HTML, f"{lang}-{uls}.html"))
    title = s.title.get_text(strip=True) if s.title else ""
    out = {"title": title}
    m = re.search(r"(\d+) ([\d\s ,$]+?\$|\$[\d,]+) (?:Calculez|Calculate)", t)
    if m:
        out["photos"] = int(m.group(1))
        out["price"] = m.group(2).strip()
    m = re.search(r"ULS ?: ?\d+ (.+?) (?:Voir sur la carte|See on the map)", t)
    if m:
        out["typeAndAddress"] = m.group(1)
    m = re.search(r"(?:Télé \+ Internet|TV \+ Internet) (.+?) (?:Nb de pièces|Number of rooms)", t)
    if m:
        out["description"] = m.group(1)
    m = re.search(r"(?:Caractéristiques de la propriété|Property features) (.+?) (?:Prochaines|Upcoming|Contacter|Contact)", t)
    if m:
        out["features"] = m.group(1)
    out["notListing"] = "ULS" not in t
    return out


def photos(uls):
    from PIL import Image

    html = open(os.path.join(HTML, f"fr-{uls}.html"), encoding="utf-8").read()
    # La page donne la 1re photo en www_full et les autres en www_medium : on
    # reconstruit l'URL pleine grandeur de chaque photo, dans l'ordre de la fiche.
    urls, seen = [], set()
    for folder, name in re.findall(r"img/www_\w+/(\d+)/m%s-([a-z\-]+\d\d-\d\d)\.jpg" % uls, html):
        if name not in seen:
            seen.add(name)
            urls.append(f"https://media.remax-quebec.com/img/www_full/{folder}/m{uls}-{name}.jpg")
    raw = os.path.join(CACHE, "photos", uls)
    out = os.path.join(ROOT, "public", "photos-proprietes", uls)
    os.makedirs(raw, exist_ok=True)
    os.makedirs(out, exist_ok=True)
    for k, u in enumerate(urls, 1):
        n = f"{k:02d}"
        jpg = os.path.join(raw, f"{n}.jpg")
        if not os.path.exists(jpg):
            sh("curl", "-sSfL", "-o", jpg, u)
        im = Image.open(jpg).convert("RGB")
        for w, q, tag in ((1600, 84, "1600"), (800, 80, "800")):
            x = im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
            x.save(os.path.join(out, f"{n}-{tag}.webp"), "WEBP", quality=q, method=6)
        if k == 1:
            card = im.resize((1094, round(im.height * 1094 / im.width)), Image.LANCZOS)
            card.save(os.path.join(ROOT, "src", "assets", f"property-{uls}.webp"), "WEBP", quality=85, method=6)
    return len(urls)


def site_listings():
    """(id, status, price) de src/data/properties.ts."""
    s = open(os.path.join(ROOT, "src", "data", "properties.ts"), encoding="utf-8").read()
    rows = []
    for m in re.finditer(r'\{\s*id: "(\d+)".*?\n  \},', s, re.S):
        b = m.group(0)
        st = re.search(r'status: "(\w+)"', b)
        pr = re.search(r'price: "([^"]+)"', b)
        ad = re.search(r'address: "([^"]+)"', b)
        rows.append((m.group(1), st.group(1) if st else "", pr.group(1) if pr else "", ad.group(1) if ad else ""))
    return rows


def digits(v):
    return re.sub(r"[^\d]", "", v or "")


class Invalid(SystemExit):
    pass


def fail(msg):
    print("ARRÊT : " + msg, file=sys.stderr)
    raise Invalid(1)


TYPE_FR = {
    "Maison à étages": "Maison à étages",
    "Maison de plain-pied": "Maison de plain-pied",
    "Appartement - Condominium": "Appartement",
    "Terrain": "Terrain (résidentiel)",
    "Triplex": "Triplex",
    "Quadruplex": "Quadruplex",
    "Duplex": "Duplex",
    "Maison à paliers multiples": "Split level - Paliers multiples",
}
TYPE_EN = {
    "Two or more storey house": "Two-storey house",
    "Bungalow": "Bungalow",
    "One-storey house": "Bungalow",
    "Apartment - Condominium": "Condominium apartment",
    "Lot": "Residential lot",
    "Land": "Residential lot",
    "Triplex": "Triplex",
    "Quadruplex": "Quadruplex",
    "Duplex": "Duplex",
    "Split-level house": "Split level",
}


def map_type(raw, table):
    for k, v in table.items():
        if raw.lower().startswith(k.lower()):
            return v, True
    return raw, False


def parse_title(title):
    """'Maison à étages à vendre - Gatineau (Aylmer) (Plateau de la Capitale) - 18600312'"""
    parts = [x.strip() for x in title.split(" - ")]
    if len(parts) < 3:
        return None, None, None
    raw_type = re.sub(r"\s+(à vendre|for sale)$", "", " - ".join(parts[:-2]))
    place = parts[-2]
    city = place.split("(")[0].strip()
    subs = re.findall(r"\(([^)]+)\)", place)
    return raw_type, city, subs


def slugify(address):
    import unicodedata

    a = unicodedata.normalize("NFKD", address).encode("ascii", "ignore").decode().lower()
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", a)).strip("-")


def fr_money(n):
    return f"{n:,}".replace(",", " ") + " $"


def en_money(n):
    return f"${n:,}"


def facts_kv(uls, lang):
    import parse_rq

    d = parse_rq.parse(os.path.join(HTML, f"{lang}-{uls}.html"), lang)
    return {k: v for k, v in d["building"] + d["land"] + d["features"]}


def build_entry(uls):
    fr, en = summary(uls, "fr"), summary(uls, "en")
    if fr.get("notListing"):
        fail(f"{uls} n'est pas une inscription en vigueur sur RE/MAX.")
    rtf, city, subs = parse_title(fr["title"])
    rte, city_en, subs_en = parse_title(en["title"])
    if not (rtf and city):
        fail(f"titre RE/MAX illisible : {fr['title']!r}")
    type_fr, ok1 = map_type(rtf, TYPE_FR)
    type_en, ok2 = map_type(rte or "", TYPE_EN)
    warnings = []
    if not ok1:
        warnings.append(f"type FR inconnu « {rtf} », repris tel quel : à valider")
    if not ok2:
        warnings.append(f"type EN inconnu « {rte} », repris tel quel : à valider")
    price = int(digits(fr.get("price")) or 0)
    if not price:
        fail("prix introuvable sur la fiche RE/MAX.")
    m = re.search(r"(?:à vendre|for sale) (.+?), " + re.escape(city), fr.get("typeAndAddress", ""))
    if not m:
        fail("adresse introuvable sur la fiche RE/MAX.")
    address = re.sub(r"\s+app\.\s*", ", app. ", m.group(1)).replace(",,", ",")
    feat = fr.get("features", "")
    num = lambda pat: (re.search(pat, feat) or [None, ""])[1]
    bedrooms, baths, powder = num(r"(\d+) Chambres?"), num(r"(\d+) Salles? de bains?"), num(r"(\d+) Salles? d'eau")
    kfr, ken = facts_kv(uls, "fr"), facts_kv(uls, "en")
    is_land = type_fr.startswith("Terrain")
    area_fr = kfr.get("Superficie habitable", "")
    area_en = ken.get("Living area", "").replace("ft²", "sq ft")
    lot_fr = kfr.get("Superficie du terrain", "")
    lot_en = ken.get("Lot area", "").replace("ft²", "sq ft")
    year = kfr.get("Année de construction", "")
    if not is_land and not (bedrooms and area_fr):
        fail("chambres ou superficie habitable manquantes sur la fiche RE/MAX.")
    n_photos = len(os.listdir(os.path.join(ROOT, "public", "photos-proprietes", uls))) // 2 if os.path.isdir(os.path.join(ROOT, "public", "photos-proprietes", uls)) else 0
    if not n_photos or n_photos != fr.get("photos"):
        fail(f"photos : {n_photos} converties pour {fr.get('photos')} annoncées. Relancer fetch.")
    if not os.path.exists(os.path.join(ROOT, "src", "assets", f"property-{uls}.webp")):
        fail("photo de carte absente. Relancer fetch.")
    sector = subs[0] if subs else city
    return {
        "uls": uls, "slug": slugify(address), "address": address,
        "city_fr": f"{city} ({', '.join(subs)})" if subs else city,
        "city_en": f"{city_en} ({', '.join(subs_en)})" if subs_en else (city_en or city),
        "sector": sector, "price": price, "type_fr": type_fr, "type_en": type_en,
        "bedrooms": bedrooms or "—", "bathrooms": baths or "—", "powder": powder,
        "area_fr": area_fr or "—", "area_en": area_en or "—", "lot_fr": lot_fr or "—", "lot_en": lot_en or "—",
        "year": year or "—", "remaxUrl": fetch_html(uls).get("fr") or remax_url(uls), "photos": n_photos,
        "warnings": warnings,
    }


def remax_url(uls):
    return sh("curl", "-sSL", "-o", "/dev/null", "-w", "%{url_effective}", URL["fr"].format(u=uls)).strip()


def js(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')


def insert_before_first(text, patterns, block, what):
    idx = [text.find(p) for p in patterns if text.find(p) >= 0]
    if not idx:
        fail(f"point d'insertion introuvable dans {what}")
    i = min(idx)
    return text[:i] + block + text[i:]


def write_entry(e, desc_fr, desc_en):
    U = e["uls"]
    path = lambda *p: os.path.join(ROOT, *p)
    for f in ("properties.ts", "properties-en.ts"):
        if f'id: "{U}"' in open(path("src", "data", f), encoding="utf-8").read():
            fail(f"{U} existe déjà dans {f} : utiliser la procédure de mise à jour.")
    for f, lang in (("properties.ts", "fr"), ("properties-en.ts", "en")):
        p = path("src", "data", f)
        s = open(p, encoding="utf-8").read()
        imp = f'import property{U} from "@/assets/property-{U}.webp";\n'
        last = list(re.finditer(r'^import property\d+ from "[^"]+";\n', s, re.M))
        if not last:
            fail(f"imports introuvables dans {f}")
        s = s[: last[-1].end()] + imp + s[last[-1].end():]
        fr = lang == "fr"
        lines = [
            "  {",
            f'    id: "{U}",',
            f'    address: "{js(e["address"])}",',
            f'    city: "{js(e["city_fr"] if fr else e["city_en"])}",',
            f'    price: "{fr_money(e["price"]) if fr else en_money(e["price"])}",',
            f'    type: "{js(e["type_fr"] if fr else e["type_en"])}",',
            f'    bedrooms: "{e["bedrooms"]}",',
            f'    bathrooms: "{e["bathrooms"]}",',
        ]
        if e["powder"]:
            lines.append(f'    powderRooms: "{e["powder"]}",')
        lines += [
            f'    area: "{js(e["area_fr"] if fr else e["area_en"])}",',
            f'    lotSize: "{js(e["lot_fr"] if fr else e["lot_en"])}",',
            f'    yearBuilt: "{e["year"]}",',
            "    description:",
            f'      "{js(desc_fr if fr else desc_en)}",',
            f"    image: property{U},",
            "    remaxUrl:",
            f'      "{e["remaxUrl"]}",',
            f'    mls: "{U}",',
            '    status: "active",',
            "  },",
            "",
        ]
        block = "\n".join(lines)
        first = re.search(r'\n  \{\n    id: "\d+",(?:(?!\n  \},).)*?status: "(active|rent|rented|pending)"', s, re.S)
        if not first:
            fail(f"aucune propriété active trouvée dans {f}")
        i = first.start() + 1
        s = s[:i] + block + s[i:]
        open(p, "w", encoding="utf-8").write(s)

    p = path("src", "data", "property-images.ts")
    s = open(p, encoding="utf-8").read()
    last = list(re.finditer(r"^import p\d+ from \"[^\"]+\";\n", s, re.M))
    s = s[: last[-1].end()] + f'import p{U} from "@/assets/property-{U}.webp?w=400;440;560;640;760;900&format=avif;webp&as=picture";\n' + s[last[-1].end():]
    m = re.search(r"export const propertyImages: Record<string, PropertyImageSet> = \{\n", s)
    if not m:
        fail("table propertyImages introuvable")
    s = s[: m.end()] + f'  "{U}": toSet(p{U} as PictureImport),\n' + s[m.end():]
    open(p, "w", encoding="utf-8").write(s)

    p = path("src", "data", "property-pages.ts")
    s = open(p, encoding="utf-8").read()
    m = re.search(r"export const PHOTO_COUNTS: Record<string, number> = \{\n", s)
    if not m:
        fail("PHOTO_COUNTS introuvable")
    s = s[: m.end()] + f'  "{U}": {e["photos"]},\n' + s[m.end():]
    open(p, "w", encoding="utf-8").write(s)

    p = path("src", "data", "property-slugs.json")
    d = json.load(open(p, encoding="utf-8"))
    if e["slug"] in d.values():
        fail(f"l'adresse de page {e['slug']} est déjà utilisée")
    d[U] = e["slug"]
    open(p, "w", encoding="utf-8").write(json.dumps(d, indent=2, ensure_ascii=False) + "\n")

    p = path("src", "data", "seo-routes.json")
    s = open(p, encoding="utf-8").read()
    t_fr = e["type_fr"].replace("Appartement", "Condo").replace("Terrain (résidentiel)", "Terrain")
    t_en = e["type_en"].replace("Condominium apartment", "Condo").replace("Residential lot", "Lot")
    block = (
        f'  "/proprietes/{e["slug"]}": {{\n'
        f'    "title": "{js(e["address"])}, {js(e["sector"])} · {js(t_fr)} | YGS",\n'
        f'    "description": "{js(t_fr)} à vendre à {js(e["sector"])}, {fr_money(e["price"])}. Photos, détails et demande de visite avec Yanis Gauthier-Sigeris.",\n'
        f'    "ogImage": "https://yanisgauthier.com/og/og-ygs.jpg"\n'
        f"  }},\n"
        f'  "/en/properties/{e["slug"]}": {{\n'
        f'    "title": "{js(e["address"])}, {js(e["sector"])} · {js(t_en)} | YGS",\n'
        f'    "description": "{js(t_en)} for sale in {js(e["sector"])}, {en_money(e["price"])}. Photos, details and visit requests with Yanis Gauthier-Sigeris.",\n'
        f'    "ogImage": "https://yanisgauthier.com/og/og-ygs.jpg"\n'
        f"  }},\n"
    )
    s = insert_before_first(s, ['  "/proprietes/'], block, "seo-routes.json")
    json.loads(s)
    open(p, "w", encoding="utf-8").write(s)

    p = path("src", "lib", "mcp", "tools", "list_properties.ts")
    s = open(p, encoding="utf-8").read()
    short = lambda t: (t.split(". ")[0].rstrip(".") + ".")
    block = (
        "  {\n"
        f'    id: "{U}", mls: "{U}",\n'
        f'    address: "{js(e["address"])}", city: "{js(e["city_fr"])}",\n'
        f'    price_fr: "{fr_money(e["price"])}", price_en: "{en_money(e["price"])}",\n'
        f'    type: "{js(e["type_fr"])} / {js(e["type_en"])}", bedrooms: "{e["bedrooms"]}", bathrooms: "{e["bathrooms"]}", area: "{js(e["area_fr"])} / {js(e["area_en"])}", year_built: "{e["year"]}",\n'
        '    status: "active",\n'
        f'    remax_url: "{e["remaxUrl"]}",\n'
        f'    description_fr: "{js(short(desc_fr))}",\n'
        f'    description_en: "{js(short(desc_en))}",\n'
        "  },\n"
    )
    m = re.search(r"const listings: Listing\[\] = \[\n", s)
    if not m:
        fail("tableau listings introuvable dans list_properties.ts")
    s = s[: m.end()] + block + s[m.end():]
    open(p, "w", encoding="utf-8").write(s)


def cmd_add(argv):
    import argparse

    ap = argparse.ArgumentParser(prog="listing.py add")
    ap.add_argument("uls")
    ap.add_argument("--desc-fr", required=True)
    ap.add_argument("--desc-en", required=True)
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args(argv)
    e = build_entry(a.uls)
    print(json.dumps(e, ensure_ascii=False, indent=1))
    if a.dry_run:
        return
    write_entry(e, a.desc_fr.strip(), a.desc_en.strip())
    print(f"Inscription {a.uls} écrite dans les 7 fichiers. Page : /proprietes/{e['slug']}/")
    for w in e["warnings"]:
        print("À VALIDER : " + w)


def validate_details(data):
    """Arrête si une propriété active non-terrain sort sans pièces ni taxes (page RE/MAX changée?)."""
    bad = []
    for u, langs in data.items():
        for lang, d in langs.items():
            land = not d["levels"] and any(k in ("Vue", "View") or "Aucun" in v or "No services" in v for k, v in d["facts"]) or u in LAND_IDS
            if not d["taxes"]:
                bad.append(f"{u} {lang} : taxes absentes")
            if not land and not d["levels"]:
                bad.append(f"{u} {lang} : aucune pièce")
            if not d["facts"]:
                bad.append(f"{u} {lang} : aucune caractéristique")
    if bad:
        fail("données incomplètes, la page RE/MAX a peut-être changé de format. Rien n'a été écrit.\n  " + "\n  ".join(bad))


LAND_IDS = set()


def cmd_fetch(ids):
    for u in ids:
        final = fetch_html(u, force=True)
        n = photos(u)
        sm = summary(u, "fr")
        if sm.get("notListing"):
            fail(f"{u} n'est pas une inscription en vigueur sur RE/MAX.")
        if not sm.get("price") or not n or n != sm.get("photos"):
            fail(f"{u} : prix ou photos manquants (prix {sm.get('price')!r}, {n} photos converties sur {sm.get('photos')}).")
        print(json.dumps({"uls": u, "remaxUrl": final["fr"], "photosConverted": n,
                          "fr": summary(u, "fr"), "en": summary(u, "en")}, ensure_ascii=False, indent=1))


def cmd_details():
    ids = [i for i, st, _, _ in site_listings() if st == "active"]
    for u in ids:
        fetch_html(u, force=True)
    import build_details

    s = open(os.path.join(ROOT, "src", "data", "properties.ts"), encoding="utf-8").read()
    for m in re.finditer(r'\{\s*id: "(\d+)".*?\n  \},', s, re.S):
        if re.search(r'type: "Terrain', m.group(0)):
            LAND_IDS.add(m.group(1))
    tmp = os.path.join(CACHE, "property-details.tmp.json")
    data = build_details.run(ids, HTML, tmp)
    validate_details(data)
    os.replace(tmp, os.path.join(ROOT, "src", "data", "property-details.json"))
    print("property-details.json :", len(ids), "propriétés actives :", ", ".join(ids))


def cmd_audit():
    problems = 0
    for u, st, price, addr in site_listings():
        if st != "active":
            continue
        fetch_html(u, force=True)
        sm = summary(u, "fr")
        if sm.get("notListing"):
            print(f"[ABSENTE] {addr} ({u}) n'est plus sur RE/MAX : vendue, expirée ou retirée ?")
            problems += 1
        elif digits(sm.get("price")) != digits(price):
            print(f"[PRIX] {addr} ({u}) : site {price} / RE/MAX {sm.get('price')}")
            problems += 1
        else:
            print(f"[OK] {addr} ({u}) {price}")
    print("Écarts :", problems)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    c = sys.argv[1]
    if c == "fetch":
        cmd_fetch(sys.argv[2:])
    elif c == "add":
        cmd_add(sys.argv[2:])
    elif c == "details":
        cmd_details()
    elif c == "audit":
        cmd_audit()
    else:
        print(__doc__)
        sys.exit(1)
