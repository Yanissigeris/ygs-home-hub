## Objectif

Supprimer tout mouvement « bouncy » au chargement de la page d'accueil, sur toutes les versions (FR/EN, desktop/mobile) — le contenu du hero apparaît directement en place.

## Changements

**1. `src/index.css` — neutraliser les animations d'entrée du hero**
- `.hero-fade-in` : retirer l'animation (plus de `translateY(12px) → 0`), l'élément reste à sa position finale.
- `.hero-h1-reveal` : idem (plus de `translateY(24px) → 0`).
- `@keyframes hero-chevron-bounce` : supprimer le rebond (le chevron reste fixe).
- Nettoyer les keyframes devenues inutilisées et les blocs `prefers-reduced-motion` correspondants.

**2. `src/components/HeroSection.tsx` — chevron**
- Retirer la propriété `animation: "hero-chevron-bounce …"` du bouton `ScrollChevron`.
- Le chevron reste visible, cliquable, et conserve son fondu à l'opacité au scroll.

## Notes techniques

- Les classes `hero-fade-in` / `hero-h1-reveal` restent en place dans le JSX (aucun risque de casse, aucune modification de structure ou de texte) ; seules leurs règles CSS deviennent inertes. Les `animationDelay` inline n'ont alors plus d'effet.
- Les animations d'entrée étaient déjà transform-only (opacité à 1 dès t=0), donc aucun impact sur le LCP ni sur le CLS.
- Aucun changement de texte, de meta, de JSON-LD ni de route. Les autres animations du site (reveal au scroll, hovers, marquee) ne sont pas touchées.
