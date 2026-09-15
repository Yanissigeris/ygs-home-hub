# Correctif CTA mobile + espace insécable (1 fichier)

Correctif visuel ciblé, deux lignes dans un seul fichier. Aucun changement : slugs, navigation, H1, meta, formulaire, trackEvent/trackCTAClick, consentement, prerender.mjs, JSON-LD, tokens de src/index.css, dépendances, animations.

## 1. `src/components/GuideOffersSection.tsx`

- Ligne ~91 (grille mobile `md:hidden`, cellules ~160 px) : remplacer `{g.cta}` par `{lang === "en" ? "Get it →" : "Recevoir →"}` pour que le CTA tienne sur une ligne. Le rendu desktop (ligne ~71) garde `{g.cta}`.
- Ligne 11 (tableau `guidesFr`, sous-titre du guide vendeur) : remplacer `"Vendre au meilleur prix : prix, mise en marché, négociation."` par `"Vendre au meilleur prix\u00a0: prix, mise en marché, négociation."` (espace insécable avant le deux-points). La ligne 18 EN reste inchangée (pas d'espace avant le deux-points en anglais).
- Intacts : tableaux `guidesFr` / `guidesEn` (sauf la ligne 11 ci-dessus), `aria-label` du bouton, prop `lang` (ligne 27), grilles desktop et mobile par ailleurs.

## Vérifications
- Typecheck OK.
- Captures Playwright à 390 px : les quatre CTA de la grille des guides sur une seule ligne, deux-points collé à « prix » dans le sous-titre vendeur.
- Capture à 1440 px : les quatre « Recevoir le guide → » (desktop) inchangés.
