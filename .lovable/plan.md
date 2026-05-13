## Plan : Sitemap lastmod fix (5 étapes)

### Étape 1 — `scripts/seo-routes.mjs`
- Ajouter `export const SITE_LAST_UPDATE = "2026-05-13";` sous les exports existants (`SITE_URL`, `DEFAULT_OG`).
- Mettre à jour le JSDoc en haut du fichier pour documenter :
  - `SITE_LAST_UPDATE` : à bumper manuellement lors des changements site-wide (header, footer, template global).
  - `lastmod` optionnel par route : à ajouter dans une entrée `SEO_ROUTES` quand une page reçoit une modif significative de contenu.
- Le type `@type` de `SEO_ROUTES` reste inchangé pour l'instant ; le champ `lastmod` n'est pas ajouté aux entrées existantes.

### Étape 2 — `scripts/prerender.mjs` (import)
- Modifier l'import ligne 24 pour inclure `SITE_LAST_UPDATE` :
  `import { SEO_ROUTES, SITE_URL, DEFAULT_OG, SITE_LAST_UPDATE } from "./seo-routes.mjs";`

### Étape 3 — `scripts/prerender.mjs` (logique sitemap)
- Dans le bloc `Object.keys(SEO_ROUTES)` (vers ligne 487), ajouter `const meta = SEO_ROUTES[route];` pour accéder à la meta de la route.
- Remplacer ligne 508 `<lastmod>${today}</lastmod>` par `<lastmod>${meta?.lastmod || SITE_LAST_UPDATE}</lastmod>`.
- NE PAS supprimer `const today = new Date()...` ligne 462 : elle sert encore de fallback pour les blogues ligne 623.
- NE PAS toucher à la section blogues (lignes ~580-650).

### Étape 4 — Build
- Exécuter `npm run build` pour valider que le build passe sans erreur.

### Étape 5 — Vérification post-build
- Confirmer que `dist/sitemap.xml` existe et contient les ~208 URLs.
- Confirmer que la majorité des URLs statiques ont `<lastmod>2026-05-13</lastmod>` (valeur de `SITE_LAST_UPDATE`).
- Confirmer que les URLs de blogues conservent leur `<lastmod>` respective (`publishDate` ou fallback `today`).
- Confirmer zéro régression TypeScript / ESLint.

---

**Fichiers modifiés :** `scripts/seo-routes.mjs`, `scripts/prerender.mjs`
**Aucun changement** aux composants React, pages, styles, ni aux scripts `audit-*.mjs`.