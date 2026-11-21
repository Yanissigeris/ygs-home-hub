#!/usr/bin/env python3
"""Outils pour les fiches de propriétés de yanisgauthier.com (source : RE/MAX Québec).

Commandes (depuis la racine du dépôt) :
  python3 scripts/property-details/listing.py fetch ULS [ULS ...]
      Télécharge les fiches FR/EN, les photos (WebP 1600/800 + photo de carte)
      et affiche un résumé JSON (prix, type, adresse, pièces, description...).
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


def cmd_fetch(ids):
    for u in ids:
        final = fetch_html(u, force=True)
        n = photos(u)
        print(json.dumps({"uls": u, "remaxUrl": final["fr"], "photosConverted": n,
                          "fr": summary(u, "fr"), "en": summary(u, "en")}, ensure_ascii=False, indent=1))


def cmd_details():
    ids = [i for i, st, _, _ in site_listings() if st == "active"]
    for u in ids:
        fetch_html(u, force=True)
    import build_details

    build_details.run(ids, HTML, os.path.join(ROOT, "src", "data", "property-details.json"))
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
    elif c == "details":
        cmd_details()
    elif c == "audit":
        cmd_audit()
    else:
        print(__doc__)
        sys.exit(1)
