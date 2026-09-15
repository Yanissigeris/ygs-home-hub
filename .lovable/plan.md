# Correctif typographique : aucun tiret cadratin/demi-cadratin (7 fichiers)

## Règle
Remplacer tout « — » / « – » dans les chaînes visibles, `alt` et `aria-label` par « : », « , » ou «. » selon la phrase. Commentaires de code intacts. Aucun autre changement. Interdits respectés (slugs, nav, H1/H2/H3, meta, formulaires, trackEvent/trackContactTap, consentement, prerender.mjs, faq-extractor.mjs, JSON-LD, tokens index.css, dépendances, animations).

## 1. src/components/PathwaySection.tsx
- Ligne 21 (pathwaysFr[0].text) : « timing — les vrais chiffres » → « timing : les vrais chiffres »
- Ligne 51 (pathwaysEn[0].text) : « timing — the real numbers » → « timing: the real numbers »
- Ligne 81 (headingFr.subtitle) : « correspond — vous serez » → « correspond, vous serez »
- Ligne 88 (headingEn.subtitle) : « fits — you'll be » → « fits, you'll be »
- Ligne 257 : `— {p.badge}` → `{p.badge}` (badge sans préfixe tiret)

## 2. src/components/AboutSection.tsx
- Ligne 10 (contentFr.body) : « reconnu par RE/MAX — Club Platine » → « reconnu par RE/MAX : Club Platine »
- Ligne 16 (contentFr.imgAlt) : « Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau » → « Yanis Gauthier-Sigeris, Courtier immobilier, Gatineau »
- Ligne 21 (contentEn.quote) : « the options — you decide. » → « the options, you decide. »
- Ligne 24 (contentEn.body) : « recognized by RE/MAX — Platinum Club » → « recognized by RE/MAX: Platinum Club »
- Ligne 202 : `alt={c.imgAlt + " — YGS"}` → `alt={c.imgAlt + ", YGS"}`

## 3. src/components/AreasServicesSection.tsx
- Ligne 51 (cfgFr.subtitle) : « l'Outaouais — vente, achat » → « l'Outaouais : vente, achat »
- Ligne 63 (cfgEn.subtitle) : « region — selling, buying » → « region: selling, buying »

## 4. src/components/GuideOffersSection.tsx
- Ligne 24 (headingFr.subtitle) : « à chaque étape — gratuites » → « à chaque étape : gratuites »
- Ligne 25 (headingEn.subtitle) : « every step — free » → « every step: free »
- Lignes 52 et 82 : `aria-label={`${g.title} — ${g.subtitle}`}` → `` aria-label={`${g.title} : ${g.subtitle}`} `` (bureau desktop et mobile)

## 5. src/components/SiteFooter.tsx
- Ligne 99 (tagline) : FR « Votre allié en immobilier en Outaouais. Stratégie claire. » ; EN « Your real estate ally in Outaouais. Clear strategy. » (tiret → point)
- Lignes 102–104 (legalText) : FR « © … Yanis Gauthier-Sigeris, courtier immobilier, Gatineau. … » ; EN « Yanis Gauthier-Sigeris, Real Estate Broker, Gatineau. … » (tiret → virgule)
- Lignes 108–110 (ctaSubtext) : FR « Obtenez votre évaluation gratuite, sans engagement. » ; EN « Get your free home valuation, no commitment. » (tiret → virgule)
- Ligne 309 : FR « Membre de RE/MAX, Équipe Marty Waite » ; EN « Member of RE/MAX, Marty Waite Team » (tiret → virgule)
- Lignes 316–318 (bloc agence) : le ternaire à chaîne unique devient deux fragments JSX avec `<br />` :
  - FR : « RE/MAX Direct Inc., agence immobilière » puis `<br />` « 216 Chemin d'Aylmer, Gatineau, QC J9H 1A4 »
  - EN : « RE/MAX Direct Inc., real estate agency » puis `<br />` « 216 Chemin d'Aylmer, Gatineau, QC J9H 1A4 »
  - Le point médian « · » entre les deux disparaît ; le `<p>` et ses styles restent. Les séparateurs « · » des lignes téléphone (323, 326) sont intacts.
- Attributs alt (tiret → virgule) :
  - Ligne 30 : « RE/MAX Direct Inc., agence immobilière »
  - Ligne 41 : « Équipe Marty Waite, courtiers immobiliers Gatineau »
  - Ligne 42 : « SIRVA BGRS, programme de relocalisation militaire »
  - Ligne 43 : « Temple de la renommée RE/MAX, distinction courtier »
  - Ligne 44 : « Programme Tranquilli-T RE/MAX, garantie immobilière »
  - Ligne 45 : « Opération Enfant Soleil, partenaire caritatif »
  - Ligne 142 : « YGS, Yanis Gauthier-Sigeris, courtier immobilier Gatineau »

## 6. src/components/InstagramGrid.tsx
- Ligne 82 : `` aria-label={`Instagram — ${altTexts[i]}`} `` → `` aria-label={`Instagram : ${altTexts[i]}`} ``

## 7. src/components/AwardsMarquee.tsx
- Ligne 76 (grille mobile) : `years: "2020, 22–25"` → `years: "2020, 2022-2025"` (trait d'union simple)

## Vérification
- `grep -n "—\|–"` sur les 7 fichiers : plus aucune occurrence hors commentaires (les « ─ » des commentaires d'ornement ne sont pas des tirets cadratins et restent).
- Typecheck : `bunx tsgo -p tsconfig.app.json --noEmit` seulement (pas de build).
- Captures : pied de page (deux lignes d'adresse) et section parcours.
