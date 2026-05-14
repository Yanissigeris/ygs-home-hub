## Objectif

Injecter le schema JSON-LD `FAQPage` côté serveur pour `/faq/` et `/en/faq/` afin que Googlebot le voie dans le HTML pré-rendu (actuellement injecté seulement via `useEffect`, invisible aux crawlers).

## Plan (3 étapes)

### 1. Créer `scripts/faq-extractor.mjs` (nouveau fichier)

Module qui lit `src/pages/FAQPage.tsx` et `src/pages/en/FAQPageEn.tsx` via regex (sans compilation TS) et extrait les 4 tableaux (`sellerFaq`, `buyerFaq`, `plexFaq`, `militaryFaq`) en une liste plate `{q, a}` par langue. Exporte `extractFaqFr()` et `extractFaqEn()`. Suit le même pattern que `blog-extractor.mjs`.

### 2. Modifier `scripts/prerender.mjs` (2 hunks, ~12 lignes)

- **Hunk 1** (après ligne 25) : importer `extractFaqFr, extractFaqEn` depuis `./faq-extractor.mjs`.
- **Hunk 2** (lignes 432-439) : changer `const html` → `let html`, et après `assertFallbackInjected(...)` ajouter un bloc qui appelle `injectFaqPageJsonLd(html, faqItems)` quand `route === "/faq"` ou `"/en/faq"`. Le helper `injectFaqPageJsonLd` existe déjà ligne 156 et est déjà utilisé pour les blogues (lignes 573/609).

### 3. Vérifications post-build

- `npx tsc --noEmit` (0 erreur)
- `npx vite build` (succès)
- `node scripts/prerender.mjs` (succès)
- `dist/faq/index.html` et `dist/en/faq/index.html` contiennent `<script id="ygs-faqpage-jsonld">` avec `"@type":"FAQPage"` et 16 entrées `"@type":"Question"`
- `dist/index.html` ne contient AUCUN `"@type":"FAQPage"`
- Diff scope : 1 nouveau fichier + 1 fichier modifié, aucun autre

## Fichiers touchés

- **Nouveau** : `scripts/faq-extractor.mjs`
- **Modifié** : `scripts/prerender.mjs`

Aucun changement à `FAQSection.tsx`, `FAQPage.tsx`, `FAQPageEn.tsx` (le useEffect client continue de fonctionner ; Google tolère plusieurs blocs `FAQPage` sur la même page).
