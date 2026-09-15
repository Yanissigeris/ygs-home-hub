# Guides vendeur (FR/EN) : JSON-LD côté serveur

Objectif : les pages `/guide-vendeur-gatineau/` et `/en/seller-guide/` servent leur
schéma **HowTo** et **FAQPage** dans le HTML initial (comme `/faq`), au lieu de
dépendre du JavaScript. L'injection cliente reste comme repli en aperçu.

## Fichier par fichier

**1. `scripts/guide-extractor.mjs` (nouveau)**
- Lit `src/pages/SellerGuidePage.tsx` et `src/pages/en/SellerGuidePageEn.tsx`.
- Exporte `extractSellerGuideFr()` / `extractSellerGuideEn()` retournant
  `{ steps: [{name, text}], faq: [{q, a}] }`, parsés depuis les constantes
  existantes `sellerSteps` et `faq` (même technique de regex + décodage que
  `scripts/faq-extractor.mjs`).
- Aucun contenu réécrit : les textes viennent des fichiers sources.

**2. `scripts/prerender.mjs`**
- Importer les deux extracteurs.
- Ajouter `injectHowToJsonLd(html, { name, description, steps, totalTime })`,
  qui produit exactement le même objet que `src/components/HowToJsonLd.tsx`
  (`@type: HowTo`, `step[]` avec `position`, `author` RealEstateAgent `#realestateagent`),
  avec l'id `ygs-jsonld-howto` et l'échappement `</` → `<\/` déjà utilisé.
- Dans la boucle des routes : pour `/guide-vendeur-gatineau` et `/en/seller-guide`,
  injecter le `FAQPage` (via `injectFaqPageJsonLd`, id `ygs-faqpage-jsonld`) et le
  `HowTo`. `name` / `description` du HowTo repris mot pour mot des pages.
- Si l'extraction retourne 0 étape ou 0 question, lever une erreur explicite
  (le build casse au lieu de perdre le schéma en silence).

**3. `src/components/HowToJsonLd.tsx`**
- Sortir du `useEffect` si `document.getElementById("ygs-jsonld-howto")` existe
  déjà (schéma serveur présent) — pas de doublon, pas de suppression du bloc serveur.

**4. `src/components/FAQSection.tsx`**
- Sortir du `useEffect` d'injection si `document.getElementById("ygs-faqpage-jsonld")`
  existe (schéma FAQPage déjà servi côté serveur). L'accordéon visible ne change pas.

## Hors périmètre
Routes, slugs, meta, H1, textes des questions et des étapes, autres pages,
scripts `audit-*.mjs`.

## Vérification
`bunx tsgo -p tsconfig.app.json --noEmit` et exécution directe de l'extracteur
(6 étapes + 4 questions par langue). Pas de build local (Puppeteer) — la preuve
finale se fait sur Netlify.
