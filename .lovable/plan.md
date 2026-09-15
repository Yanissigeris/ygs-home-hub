# Retirer 8 eyebrows et tous les filets décoratifs

Conservés : « Évaluation gratuite » (ValuationWidget, intact), « Témoignages » / « Testimonials » (Index/IndexEn), « FAQ » (HomeFAQTeaser). Les chaînes de données restent, seuls les éléments rendus sont supprimés.

## Eyebrows (suppression d'éléments)

1. **src/pages/Index.tsx ligne 56** : supprimer la prop `cities={[...]}` de `<HeroSection>` (le héro n'affiche alors aucun eyebrow).
2. **src/pages/en/IndexEn.tsx ligne 55** : idem.
3. **src/pages/Index.tsx ligne 123** : supprimer `overline="Première étape"` de `<CTASection>`.
4. **src/pages/en/IndexEn.tsx ligne 106** : supprimer `overline="First step"`.
5. **src/components/PathwaySection.tsx lignes 176–178** : supprimer le `<p className="eyebrow-light mb-3">{heading.overline}</p>`.
6. **src/components/FeaturedProperties.tsx ligne 295** : supprimer le `<p className="label-overline mb-2" …>{strings.overline}</p>`.
7. **src/components/AboutSection.tsx lignes 61–73** : supprimer le `<p>` complet qui rend `{c.overline}` (avec le commentaire `{/* Overline */}` ligne 60).
8. **src/components/AreasServicesSection.tsx ligne 109** : supprimer le `<p className="label-overline mb-2 justify-center" …>{cfg.overline}</p>`.
9. **src/components/GuideOffersSection.tsx ligne 41** : supprimer le `<p className="label-overline mb-2" …>{heading.overline}</p>`.
10. **src/components/InstagramGrid.tsx lignes 34–36** : supprimer le `<span>` qui rend `{t.eyebrow}` (le H2 récupère son `mt-2` en tête de bloc, cohérent).

## Filets décoratifs

11. **src/index.css lignes 310–317** : supprimer le bloc `.label-overline::before` (trait de 22 px). `.label-overline` est conservé.
12. **src/index.css lignes ~429–440** : supprimer le commentaire « Gold section divider (Sprint 3) » et le bloc `.section-gold-divider::before`.
13. Retirer la classe `section-gold-divider` dans 7 composants : FeaturedProperties.tsx (274), AreasServicesSection.tsx (105), PathwaySection.tsx (103), TestimonialGrid.tsx (97), CTASection.tsx (18, simplification du template literal en chaîne fixe `relative overflow-hidden section-rhythm`), HomeFAQTeaser.tsx (54), GuideOffersSection.tsx (34).

## Vérification
- `grep -rn "section-gold-divider" src` → 0 ; typecheck `bunx tsgo -p tsconfig.app.json --noEmit`.
- Capture desktop : seuls trois libellés majuscules subsistent (formulaire, témoignages, FAQ), sans trait ; le héro commence par le H1.
