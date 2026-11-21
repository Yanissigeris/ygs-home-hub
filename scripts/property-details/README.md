# Fiches de propriétés (yanisgauthier.com)

Outils utilisés par le skill `ygs-fiche-propriete`. La source des données est la fiche RE/MAX Québec de chaque inscription (retrouvée à partir du numéro Centris seul).

| Commande | Ce qu'elle fait |
|---|---|
| `python3 scripts/property-details/listing.py fetch ULS` | Télécharge les fiches FR/EN, convertit toutes les photos (WebP 1600/800 dans `public/photos-proprietes/ULS/`, photo de carte `src/assets/property-ULS.webp`) et affiche un résumé JSON (prix, type, adresse, description, pièces). |
| `python3 scripts/property-details/listing.py add ULS --desc-fr "…" --desc-en "…"` | Après `fetch` : écrit l'inscription dans les 7 fichiers du site (listes FR/EN, images, nombre de photos, adresse de page, routes SEO, outil MCP). `--dry-run` pour voir sans écrire. Refuse si l'ULS existe déjà ou si un champ clé manque. |
| `python3 scripts/property-details/listing.py details` | Régénère `src/data/property-details.json` pour toutes les propriétés `status: "active"` de `src/data/properties.ts`. |
| `python3 scripts/property-details/listing.py audit` | Compare le prix et la présence de chaque propriété active avec RE/MAX et liste les écarts. |
| `node scripts/property-details/check-pages.mjs <url> <slug> ...` | Vérifie les pages FR/EN à 390 px (statut, débordement, sections, calculatrice) et prend des captures. |

Requiert `beautifulsoup4`, `pillow`, `curl` et Puppeteer (déjà dans le projet). Les téléchargements vont dans `.cache/` (ignoré par git).

Garde-fous : chaque commande s'arrête (« ARRÊT : … ») sans rien écrire si l'inscription n'est plus en vigueur, si le prix, l'adresse ou les photos manquent, ou si une propriété active (hors terrain) sort sans pièces, taxes ou caractéristiques. C'est le signe que la page RE/MAX a changé de format : corriger `parse_rq.py` avant de continuer.
