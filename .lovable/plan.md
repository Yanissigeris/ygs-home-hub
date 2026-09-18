# Mise à jour des titres et descriptions SEO (2 fichiers de données)

## Portée
Deux fichiers uniquement, aucun autre fichier touché :
1. `src/data/seo-routes.json` — 7 clés (title + description), ogImage inchangé
2. `src/data/blog-posts.ts` — 4 articles (title et/ou metaDescription FR), titleEn/metaDescriptionEn et contenu inchangés

## 1. src/data/seo-routes.json

Les 7 clés existent, sans barre oblique finale. Remplacement de `title` et `description` uniquement :

| Clé | Nouveau title | Nouvelle description |
|---|---|---|
| /quartiers-a-considerer-a-gatineau | Quartiers de Gatineau : lequel choisir? Comparatif \| YGS | Aylmer, Hull, Plateau, Buckingham, Masson-Angers : prix médians, profil des familles, accès à Ottawa. Le comparatif secteur par secteur pour choisir. |
| /en/neighborhoods | Gatineau Neighbourhoods: Which One Is Right for You? \| YGS | Aylmer, Hull, Plateau, Buckingham, Masson-Angers: median prices, family profile, commute to Ottawa. A side-by-side guide to pick your area. |
| /verifier-un-courtier-immobilier-oaciq | Registre OACIQ : vérifier ou trouver un courtier \| YGS | Consulter le registre public de l'OACIQ pour vérifier le permis d'un courtier ou en trouver un dans votre secteur. Les étapes, et ce qu'il faut regarder. |
| /limbour | Limbour, Gatineau : prix, écoles, services du quartier \| YGS | Le quartier Limbour à Gatineau : fourchettes de prix, écoles, parcs et services, accès à l'autoroute 50. Ce qu'il faut savoir avant d'acheter ou de vendre. |
| /en/limbour | Limbour, Gatineau: Prices, Schools and What to Know \| YGS | The Limbour neighbourhood in Gatineau: price ranges, schools, parks and services, access to Highway 50. What to know before you buy or sell. |
| /cote-dazur-gatineau | Côte-d'Azur, Gatineau : maisons à vendre et prix \| YGS | Le quartier Côte-d'Azur à Gatineau : bungalows, fourchettes de prix, ce qui attire les familles, les premiers acheteurs et les retraités. |
| /en/cote-dazur | Côte-d'Azur, Gatineau: Homes for Sale and Prices \| YGS | The Côte-d'Azur neighbourhood in Gatineau: bungalows, price ranges, schools, and why families, first-time buyers and retirees pick it. |

Champ `ogImage` des 7 entrées : inchangé. Les 113 autres clés : inchangées.

## 2. src/data/blog-posts.ts

Pas de suffixe « | YGS » dans `title` (le script de build l'ajoute).

| Slug | Champ | Nouvelle valeur |
|---|---|---|
| guide-copropriete-gatineau-tout-savoir (ligne ~2475) | title | Copropriété à Gatineau : frais de condo et syndicat |
| | metaDescription | Frais de condo, rôle du syndicat, fonds de prévoyance, ce que vous achetez vraiment. Le guide de la copropriété à Gatineau avant de signer. |
| taxes-municipales-gatineau-vs-ottawa (ligne ~1487) | title | Taxes municipales : Gatineau ou Ottawa, qui paie plus? |
| | metaDescription | Taux de taxation, taxe scolaire, services inclus : la comparaison chiffrée entre Gatineau et Ottawa pour une maison de valeur équivalente. |
| meilleurs-quartiers-familles-gatineau (ligne ~1597) | title | Les meilleurs quartiers pour une famille à Gatineau |
| | metaDescription | Aylmer, Plateau, Hull ou Buckingham : écoles, parcs, sécurité et prix médians. Le comparatif des quartiers de Gatineau pour élever une famille. |
| inventaire-gatineau-2026-30-pourcent-inscriptions (ligne ~79) | title | Inventaire +30 % à Gatineau : baissez-vous votre prix? |
| | metaDescription | (inchangée) |

`titleEn`, `metaDescriptionEn` et tout le contenu des articles : inchangés.

## Vérifications après modification
- JSON valide : `python3 -m json.tool src/data/seo-routes.json` (ou équivalent)
- Les 7 clés et 4 articles relus pour confirmer les valeurs exactes et que rien d'autre n'a bougé
- Typecheck non requis (données) ; aucun build lancé
