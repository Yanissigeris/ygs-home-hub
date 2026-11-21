# Détails des fiches de propriétés

Génère `src/data/property-details.json` (pièces, bâtiment, terrain, évaluation, taxes, inclusions, visites libres) à partir des fiches RE/MAX Québec, en français et en anglais.

1. Mettre à jour la liste `IDS` dans `build_details.py` (propriétés actives).
2. Télécharger les fiches :
   `for u in <IDS>; do curl -sSL -o html/fr-$u.html "https://www.remax-quebec.com/fr/proprietes/maison-a-vendre-outaouais/x-$u"; curl -sSL -o html/en-$u.html "https://www.remax-quebec.com/en/properties/house-for-sale-outaouais/x-$u"; done`
3. `python3 scripts/property-details/build_details.py src/data/property-details.json html/` (requiert `beautifulsoup4`).
