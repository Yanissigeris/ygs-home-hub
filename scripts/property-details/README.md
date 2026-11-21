# Fiches de propriétés (yanisgauthier.com)

Outils utilisés par le skill `ygs-fiche-propriete`. La source des données est la fiche RE/MAX Québec de chaque inscription (retrouvée à partir du numéro Centris seul).

| Commande | Ce qu'elle fait |
|---|---|
| `python3 scripts/property-details/listing.py fetch ULS` | Télécharge les fiches FR/EN, convertit toutes les photos (WebP 1600/800 dans `public/photos-proprietes/ULS/`, photo de carte `src/assets/property-ULS.webp`) et affiche un résumé JSON (prix, type, adresse, description, pièces). |
| `python3 scripts/property-details/listing.py details` | Régénère `src/data/property-details.json` pour toutes les propriétés `status: "active"` de `src/data/properties.ts`. |
| `python3 scripts/property-details/listing.py audit` | Compare le prix et la présence de chaque propriété active avec RE/MAX et liste les écarts. |
| `node scripts/property-details/check-pages.mjs <url> <slug> ...` | Vérifie les pages FR/EN à 390 px (statut, débordement, sections, calculatrice) et prend des captures. |

Requiert `beautifulsoup4`, `pillow`, `curl` et Puppeteer (déjà dans le projet). Les téléchargements vont dans `.cache/` (ignoré par git).
