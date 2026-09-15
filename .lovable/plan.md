# FAQPage de l'accueil injecté côté serveur (FR + EN)

Objectif : les quatre questions de l'accueil sont visibles par Google dans le HTML statique, comme sur /faq, sans doublon avec l'injection faite dans le navigateur.

## Fichier par fichier

### 1. Nouveau `src/data/home-faq.ts`
- `export const homeFaqFr = [ ... ]` : les 4 paires `{ q: "...", a: "..." }` copiées mot pour mot depuis `src/pages/Index.tsx` (lignes 112–115).
- `export const homeFaqEn = [ ... ]` : les 4 paires copiées depuis `src/pages/en/IndexEn.tsx` (lignes 95–98).
- Aucune annotation de type, aucun `satisfies`, chaînes à guillemets doubles, un objet par ligne — le format doit rester lisible par l'extracteur.

### 2. `src/pages/Index.tsx`
- Importer `homeFaqFr` et remplacer le tableau inline (lignes 111–116) par `items={homeFaqFr}`. Titre, `linkHref`, `linkLabel` inchangés.

### 3. `src/pages/en/IndexEn.tsx`
- Importer `homeFaqEn` et remplacer le tableau inline (lignes 94–99) par `items={homeFaqEn}`.

### 4. `scripts/faq-extractor.mjs`
- `extractFaqItemsFromSource(src, arrayNames = ["sellerFaq","buyerFaq","plexFaq","militaryFaq"])` : le tableau de noms devient un paramètre, valeur par défaut identique à aujourd'hui, donc `extractFaqFr()` / `extractFaqEn()` ne changent pas de comportement.
- Ajouter `extractHomeFaqFr()` et `extractHomeFaqEn()` qui lisent `src/data/home-faq.ts` avec `["homeFaqFr"]` / `["homeFaqEn"]`.

### 5. `scripts/prerender.mjs`
- Ajouter les deux nouvelles fonctions à l'import ligne 27.
- Dans la boucle des routes, juste après le bloc `/faq` / `/en/faq` (lignes 493–500) : pour `route === "/"` et `route === "/en"`, extraire les items et appeler `injectFaqPageJsonLd(html, items)`.
- Si l'extraction renvoie 0 item, lever une erreur explicite (même esprit que `assertFallbackInjected`) : une dérive du format casse le build au lieu de retirer le schéma en silence.

### 6. `src/components/HomeFAQTeaser.tsx`
- Au début du `useEffect` : sortir si `document.getElementById("ygs-faqpage-jsonld")` existe, ou si un `script[type="application/ld+json"]` contient déjà `"@type":"FAQPage"` — même logique que `src/pages/BlogArticlePage.tsx` (lignes 57–63). L'injection dans le navigateur reste comme repli en aperçu.

## Hors périmètre
Routes, meta, H1, contenu des questions, `audit-*.mjs`, tout autre fichier.

## Vérification
Typecheck seulement (`tsgo`). **Pas de build local** : `npm run build` lance `prerender.mjs`, qui requiert Chrome via Puppeteer — garanti au build Netlify, pas ici. Si un build échoue à l'étape Puppeteer : arrêt immédiat, sans toucher à `prerender.mjs`, `puppeteer-render.mjs`, `netlify.toml` ni aux scripts `audit-*`. La preuve de l'injection se fait sur Netlify (vérifier que les pages publiées `/` et `/en/` contiennent `ygs-faqpage-jsonld` avec 4 questions).
