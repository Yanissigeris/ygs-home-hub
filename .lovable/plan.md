# Changement 3 : pages d'évaluation

Trois fichiers seulement, textes insérés tels quels. Pas de npm run build.

## 1. Nouveau : src/components/ValuationSteps.tsx
Contenu exact fourni (section « Comment je prépare votre évaluation » / « How I prepare your valuation », 5 étapes numérotées).

## 2. src/pages/ValuationPage.tsx
- Import de ValuationSteps sous celui de ValuationOptions (ligne 9).
- `<ValuationSteps lang="fr" />` juste après `<ValuationOptions lang="fr" />` (ligne 253).
- Widget « Aperçu illustratif » (lignes 185 à 240) :
  - Titre : « À quoi ressemblent vos trois prix d'affichage ».
  - 550 000 $ / Conservateur → 559 900 $ / Prix plus compétitif.
  - 570 000 $ / Prix recommandé → 569 900 $ / Recommandé.
  - 599 000 $ / Optimiste → 589 900 $ / Ambitieux.
  - Espace insécable des montants conservée.
- Correctif d'affichage : ligne horizontale (l. 210) et deux petits points latéraux (l. 213, 231) passent d'une classe `bg-[var(--gold)]/…` à un style en ligne rgba(168, 138, 90, 0.5) et 0.4. Point du milieu inchangé.

## 3. src/pages/en/ValuationPageEn.tsx
- Import sous ValuationOptions (ligne 9).
- `<ValuationSteps lang="en" />` juste après `<ValuationOptions lang="en" />` (ligne 90).

## Vérification
Typecheck, puis coup d'œil FR/EN à 390 et 1440 px : nouvelle section visible, ligne et points du widget affichés, aucun débordement.
