# Ajouter la section « Quatre façons d'estimer la valeur » aux pages d'évaluation

Trois fichiers seulement. Hero, formulaire et autres sections inchangés. Textes copiés exactement, sans reformulation. Pas de `npm run build`.

## 1. Nouveau fichier `src/components/ValuationOptions.tsx`
Contenu copié tel quel depuis le document fourni, avec un seul ajustement au libellé au-dessus de chaque carte :
- `uppercase` et `tracking-[0.12em]` retirés ; taille `text-[13px]` ; `font-semibold` conservé.
- Couleur : `var(--gold-text)` sur les trois cartes claires, `var(--gold2)` sur la carte foncée « L'analyse du courtier ».
- Aucun texte ni autre style modifié.

## 2. `src/pages/ValuationPage.tsx` (/evaluation-gratuite-gatineau/)
- Import `ValuationOptions` ajouté sous l'import de `ValuationForm`.
- `<ValuationOptions lang="fr" />` inséré juste avant `<FunnelNextStep overline="Et ensuite?" ...>`.

## 3. `src/pages/en/ValuationPageEn.tsx` (/en/home-valuation/)
- Import ajouté sous celui de `ValuationForm`.
- `<ValuationOptions lang="en" />` inséré entre `<BenefitsList ... />` et `<FunnelNextStep overline="What's next?" ...>`.

## Vérification
Typecheck, puis aperçu des deux pages à 390 et 1440 px : section au bon endroit, sans débordement.
