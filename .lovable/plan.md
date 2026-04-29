## Effet de débord PathwaySection → FeaturedProperties

Créer un overlap éditorial : le bloc dark des cards pathway flotte par-dessus le haut de la section "Mes propriétés" sur desktop, créant une continuité visuelle entre les deux sections.

### Fichiers modifiés (3)

**1. `src/components/PathwaySection.tsx`**
- `<section>` racine : `md:py-24` → `md:pt-24 md:pb-12` (réduire padding-bottom pour absorber le débord sans casser la photo flottante qui dépend de la hauteur de section).
- Wrapper cards-flottant : ajouter `md:mb-[-80px]` à la className existante `relative z-10 mt-10 md:mt-14 md:w-[62%]`.
- `relative z-10` déjà présent → suffit à faire flotter le bloc au-dessus de la section suivante.
- Aucun changement à la photo flottante (50% droite, marges 80px top/bottom, 4% right), ni à l'intérieur des cards (badge, numéro, hover, onClick, intent tracking).

**2. `src/pages/Index.tsx`**
- Supprimer uniquement le `<div className="section-fade-bridge section-fade-bridge--dark-to-cream" />` situé entre `<PathwaySection />` et `<FeaturedProperties />`.
- Tous les autres `section-fade-bridge` de la page restent intacts (FeaturedProperties→About, About→Testimonials, etc.).
- Note : `src/pages/en/IndexEn.tsx` n'a actuellement PAS de fade-bridge entre ces deux sections — aucun changement nécessaire côté EN.

**3. `src/components/FeaturedProperties.tsx`**
- `<section>` racine ligne 136 : ajouter `md:pt-32` à la className → `"section-rhythm section-gold-divider md:pt-32"`.
- 128px de padding-top desktop = 80px pour le débord pathway + 48px d'air avant le titre "Mes propriétés".
- Aucun changement au filtering (2 sold + 1 active), aux badges, à l'aspect des cards, ou aux hover.

### Comportement

Desktop ≥ 768px :
- Bloc cards pathway dépasse de 80px en bas, chevauche le haut cream de FeaturedProperties.
- Box-shadow profonde (0 30px 80px) du bloc reste visible sur la frontière.
- Titre "Mes propriétés" reste correctement aéré sous le débord.

Mobile < 768px :
- Aucun débord (`md:mb-[-80px]` ne s'active qu'à partir de md).
- Photo band 200px et stack vertical des cards inchangés.
- Padding desktop-only (`md:pt-32`, `md:pb-12`) → mobile inchangé.

### Préservé

Photo flottante asymétrique, titre two-tone, badge/numéro/CTA/hover des pathway cards, `setAvatarIntent` + `trackEvent`, filtering et badges de FeaturedProperties, hover des property cards, `remaxUrl`, autres fade-bridges, parité FR/EN.