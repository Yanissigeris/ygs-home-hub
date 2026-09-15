# Prompt C : numéros, lettrine, ornements, filigrane, points

Correctif visuel ciblé, 6 fichiers. Aucun autre changement.

## 1. src/components/PathwaySection.tsx
- Supprimer le `<span>` qui rend `{p.num}` (lignes ~262–274). Les valeurs `num` restent dans les données.

## 2. src/components/GuideOffersSection.tsx
- Grille desktop : supprimer le `<div className="flex items-baseline gap-3" aria-hidden="true">` complet (lignes ~65–69 : numéro et filet).
- Grille mobile : supprimer le `<span>` du numéro (ligne ~87).
- Le H3 devient le premier élément de chaque tuile.

## 3. src/components/AboutSection.tsx
- Supprimer le bloc `{c.credentials && ( … )}` (lignes ~114–160 : deux traits, losange, ligne « Depuis 2017 · Club Platine · … »).
- Supprimer les règles `.about-body-text::first-letter` (lignes ~41–52) pour retirer la lettrine.
- Les paragraphes ne changent pas.

## 4. src/components/TestimonialGrid.tsx
- Supprimer le guillemet décoratif (ligne ~32, `<span className="text-[3rem] md:text-[4.5rem]" …>`).
- Supprimer le guillemet géant en filigrane (lignes ~98–104, `fontSize: "clamp(24rem, 38vw, 36rem)"`).
- Remplacer les deux « ★★★★★ » (lignes ~29 et ~139) par cinq icônes Lucide `Star` (`size={12}`, `strokeWidth={1.5}`, `fill="currentColor"`) dans un `<span role="img" aria-label="5 étoiles sur 5">` (EN « 5 out of 5 stars »), même couleur `var(--gold-dark)`.

## 5. src/components/AreasServicesSection.tsx
- Supprimer les deux `<span style={{ color: "var(--gold)", marginRight: 8 }}>●</span>` (lignes ~122 et ~133).
- Les intitulés « Secteurs desservis » et « Services offerts » restent.

## 6. src/components/InstagramGrid.tsx
- Supprimer la tagline (lignes ~23–25) et son rendu `{t.tagline}` (ligne ~112).

## Interdits
Slugs, redirections, libellés de navigation, H1/H2/H3, champs du formulaire, trackEvent / trackCTAClick / trackContactTap, textes de consentement, prerender.mjs, faq-extractor.mjs, JSON-LD, valeurs des tokens dans src/index.css, nouvelles dépendances (Lucide déjà installé), animations.

## Vérification
- `bunx tsgo -p tsconfig.app.json --noEmit` (typecheck seulement, pas de npm run build).
- Captures desktop et mobile des sections parcours, guides, À propos, témoignages, secteurs, Instagram : aucun « 01 », « ● », losange ni guillemet géant.
