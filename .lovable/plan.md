## Objectif
Améliorer la lisibilité de 3 éléments du hero (mobile + desktop) sans toucher au design, à la mise en page, aux couleurs, aux polices ou à la structure.

## Fichiers modifiés (2)

### 1. `src/index.css` — Fix 1
Dans le bloc `@media (max-width: 767px)` autour de la ligne 728, **supprimer uniquement la ligne `font-size: 0.8rem !important;`** (ligne 731) du sélecteur `[data-hero-dark] .hero-cta-btn`. Toutes les autres règles (`width`, `padding`, `align-self`, `margin-right`, `white-space`) restent intactes. Effet : le bouton hérite désormais du `font-size: .95rem` défini sur `.hero-cta-btn` inline (15.2 px au lieu de 12.8 px).

### 2. `src/components/HeroSection.tsx` — Fix 2 & 3

**Fix 2 — Subtitle (mobile + desktop), 2 occurrences**
- Ligne 756 (paragraphe `block md:hidden`) : `fontSize: ".95rem"` → `fontSize: "1rem"`
- Ligne 770 (paragraphe `hidden md:block`) : `fontSize: ".95rem"` → `fontSize: "1rem"`
- Tout le reste (color, fontFamily, fontWeight, lineHeight, textShadow, animationDelay, className) reste inchangé.
- La ligne 793 (CTA primary `fontSize: ".95rem"`) **n'est PAS touchée**.

**Fix 3 — Credibility strip mobile**
- Ligne 1065 : `fontSize: "0.78rem"` → `fontSize: "0.875rem"`
- Tout le reste du div (color `rgba(247,244,238,0.95)`, fontWeight 500, letterSpacing `0.04em`, textTransform `none`) reste intact.
- Le label "Essentiel/Highlights" au-dessus (`fontSize: "0.55rem"`) n'est PAS touché.

## Strictement non touché
Eyebrow tagline cities, H1 hero (clamp 2.25→4rem), secondary CTA (.85rem), mobile trust strip gold (text-[11.5px]), credibility bar desktop avec icônes, gradients, overlays, mask, video, picture, JSX structure, branche compact, SEO/JSON-LD/meta/canonical/robots/sitemap/llms, AboutSection, imports, hooks.

## Vérification post-build
- Mobile <768 px : CTA primary à ~15.2 px (au lieu de 12.8 px), subtitle à 16 px, credibility strip "Depuis 2017 · 300+ transactions" à 14 px.
- Desktop ≥768 px : subtitle à 16 px ; tout le reste pixel-identique.
- FR et EN : changements appliqués via le composant partagé `HeroSection`, donc parité automatique.
