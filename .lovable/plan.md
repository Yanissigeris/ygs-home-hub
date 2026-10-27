# Ajouter la section « Quatre façons d'estimer la valeur » aux pages d'évaluation

Trois fichiers seulement. Hero, formulaire et autres sections inchangés. Textes copiés exactement, sans reformulation. Pas de `npm run build`.

## 1. Nouveau fichier `src/components/ValuationOptions.tsx`
Contenu copié tel quel depuis le document fourni (textes FR/EN, quatre cartes, la 4e « L'analyse du courtier » sur fond foncé avec liseré doré).

## 2. `src/pages/ValuationPage.tsx` (/evaluation-gratuite-gatineau/)
- Import `ValuationOptions` ajouté sous l'import de `ValuationForm` (ligne 8).
- `<ValuationOptions lang="fr" />` inséré juste avant `<FunnelNextStep overline="Et ensuite?" ...>` (ligne 252).

## 3. `src/pages/en/ValuationPageEn.tsx` (/en/home-valuation/)
- Import ajouté sous celui de `ValuationForm` (ligne 8).
- `<ValuationOptions lang="en" />` inséré entre `<BenefitsList ... />` (ligne 88) et `<FunnelNextStep overline="What's next?" ...>` (ligne 89).

## Points à noter (aucune action sans votre accord)
- Les petits libellés dorés en majuscules au-dessus de chaque carte (« Pour vos taxes », etc.) ressemblent aux surtitres retirés ailleurs sur le site. Je les garde tels quels, comme demandé.
- Ces libellés utilisent l'or `--gold` (#A88A5A) sur fond clair, une combinaison dont le contraste est faible (environ 3:1) et qui a été remplacée par `--gold-text` ailleurs. Je le garde tel quel sauf si vous voulez la même correction.

## Vérification
Typecheck, puis aperçu des deux pages à 390 et 1440 px : section visible au bon endroit, sans débordement.
