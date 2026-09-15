# Correctif ponctuel : barres finales, objective rétabli, deux-points EN, cookies, index.html

Correctif sur des lignes précises, rien d'autre. Aucune recherche-remplacement globale. Aucun fichier hors liste. Vérification : typecheck seulement.

## 1. src/components/AwardsStrip.tsx (2 lignes)
- Ligne 53 : `href: "/en/testimonials"` → `href: "/en/testimonials/"`.
- Ligne 59 : `href: "/temoignages"` → `href: "/temoignages/"`.
Raison : URL canoniques avec barre finale, évite une redirection 301 à chaque clic.

## 2. src/components/ValuationWidget.tsx (1 ligne)
- Ligne 138 : `objective: \`Évaluation, ${propertyType}\`` → `objective: \`Évaluation — ${propertyType}\``.
Donnée envoyée à la fonction send-email, jamais affichée : valeur d'origine rétablie (exception volontaire à la règle des tirets, hors périmètre visible).

## 3. src/data/blog-posts-neighborhoods.ts (5 lignes, metaDescriptionEn seulement)
- Ligne 215 : `...large lots and regulations, local broker advice.` → `...large lots and regulations: local broker advice.`
- Ligne 333 : `...Space, nature, schools and community, find out why.` → `...Space, nature, schools and community: find out why.`
- Ligne 595 : `...New construction, competitive prices and families, complete analysis.` → `...New construction, competitive prices and families: complete analysis.`
- Ligne 1138 : `...Recent homes, parks, schools and quality of life, complete guide.` → `...Recent homes, parks, schools and quality of life: complete guide.`
- Ligne 1256 : `...Parks, schools, safety and proximity, find out why.` → `...Parks, schools, safety and proximity: find out why.`
Aucune autre ligne du fichier.

## 4. src/data/blog-posts.ts (4 lignes)
- Ligne 597, seoTitleEn : `Plex in Gatineau: March 2026 Market in Numbers, YGS Analysis` → `Plex in Gatineau: March 2026 Market in Numbers | YGS Analysis` (chaîne exacte fournie).
- Ligne 823, metaDescriptionEn : `...inspection, everything a first-time buyer needs to know...` → `...inspection: everything a first-time buyer needs to know...`
- Ligne 1400, metaDescriptionEn : `...Kitchen, bathroom, basement, real numbers analyzed.` → `...Kitchen, bathroom, basement: real numbers analyzed.`
- Ligne 1605, metaDescriptionEn : `...raise a family in Gatineau, schools, parks...` → `...raise a family in Gatineau: schools, parks, safety and median prices.`
Aucune autre ligne du fichier.

## 5. src/components/CookieConsent.tsx (2 lignes)
- Ligne 108 (EN) : `Google Analytics, helps us understand...` → `Google Analytics: helps us understand how you use the site.`
- Ligne 118 (FR) : `Google Analytics, nous aide à comprendre...` → `Google Analytics : nous aide à comprendre comment vous utilisez le site.` (espace avant le deux-points).
Aucun autre texte de consentement.

## 6. index.html (2 lignes)
- Ligne 94 (description JSON-LD RealEstateAgent) : `en Outaouais — stratégie claire` → `en Outaouais : stratégie claire`.
- Ligne 322 (`<p>` noscript du héro) : `Yanis Gauthier-Sigeris — Courtier immobilier à Gatineau` → `Yanis Gauthier-Sigeris, courtier immobilier à Gatineau`.
Intacts : og:site_name (ligne 33), tous les champs `name` des JSON-LD.

## Vérification
- `bunx tsgo -p tsconfig.app.json --noEmit` (typecheck seulement, pas de build).
- `grep -n "—" src/components/AwardsStrip.tsx src/components/CookieConsent.tsx` → 0 résultat.
- `grep -c "—" src/components/ValuationWidget.tsx` → 1 (la valeur objective rétablie).
