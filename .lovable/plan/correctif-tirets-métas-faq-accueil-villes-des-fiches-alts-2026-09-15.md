# Correctif tirets — métas, FAQ accueil, villes des fiches, alts

Correctif visuel et typographique ciblé. Aucun autre changement. Les tirets déjà remplacés par la passe précédente (Index.tsx ligne 125, IndexEn.tsx lignes 108 et 113) n'ont plus rien à corriger : vérifié, ils affichent déjà la forme virgule demandée.

## 1. src/data/home-faq.ts (2 lignes)
- Ligne 8 : « dans votre secteur, Aylmer, Hull » → « dans votre secteur : Aylmer, Hull »
- Ligne 15 : « in your area, Aylmer » → « in your area: Aylmer »
- Format figé conservé (guillemets doubles, un objet par ligne) pour faq-extractor.mjs.

## 2. src/pages/Index.tsx (3 lignes)
- Ligne 42 : « | Yanis Gauthier-Sigeris — YGS » → « | Yanis Gauthier-Sigeris, YGS »
- Ligne 43 : « en Outaouais — stratégie claire » → « en Outaouais : stratégie claire »
- Ligne 50 : « ou Plateau — stratégie claire » → « ou Plateau : stratégie claire »

## 3. src/pages/en/IndexEn.tsx (3 lignes)
- Ligne 43 : « | Yanis Gauthier-Sigeris — YGS » → « , YGS »
- Ligne 44 : « in Outaouais — clear strategy » → « in Outaouais: clear strategy »
- Ligne 51 : « or Plateau — clear strategy » → « or Plateau: clear strategy »

## 4. scripts/seo-routes.mjs (4 lignes)
- Ligne 33 : « YGS — Courtier immobilier Gatineau · Outaouais » → « YGS | Courtier immobilier Gatineau · Outaouais »
- Ligne 35 : « en Outaouais — stratégie claire » → « en Outaouais : stratégie claire »
- Ligne 333 : « YGS — Real Estate Broker » → « YGS | Real Estate Broker »
- Ligne 335 : « in Outaouais — clear strategy » → « in Outaouais: clear strategy »

## 5. src/data/properties.ts (8 lignes) et src/data/properties-en.ts (8 lignes)
- Dans les chaînes `city` uniquement : « (Secteur — Nom…) » → « (Secteur, Nom…) » (8 occurrences chacune).
- Les 14 tirets des descriptions (pages de fiches) : hors périmètre, intacts.

## 6. src/lib/format-sector.ts (1 ligne)
- Regex `/\(([^—)]+)/` → `/\(([^—,)]+)/` pour s'arrêter aussi à la virgule.

## 7. src/components/FeaturedProperties.tsx (2 lignes)
- Lignes 130 et 148 : alt `${p.type} à ${p.city} — ${p.address} — YGS…` → `${p.type} à ${p.city}, ${p.address}, YGS…`

## Vérification
- `bunx tsgo -p tsconfig.app.json --noEmit`
- grep : aucun « — » hors commentaires dans home-faq.ts, Index.tsx, IndexEn.tsx ; `city: ".*—` retourne 0 dans les deux properties.
- Capture des fiches : « 7 Rue du Chinook, Hull », « 312 Rue Le Gallois, Gatineau », « 32 Rue de Laperrière, Limbour » inchangés.
