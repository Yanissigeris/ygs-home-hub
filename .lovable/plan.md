# Remplacer "9 ans" par "Depuis 2017"

## Cible

`src/components/HeroSection.tsx`, ligne 834 (variant mobile du trust strip).

## Changement

- FR : `"9 ans"` → `"Depuis 2017"`
- EN : `"9 years"` → `"Since 2017"`

## Vérifier ailleurs

Recherche `"9 ans"` / `"9 yrs"` / `"9 years"` dans le repo pour confirmer s'il faut aussi mettre à jour le tableau `statsFr`/`statsEn` (lignes 92-99) qui alimente la barre de preuve. **À confirmer** : remplace-t-on uniquement le bandeau mobile, ou aussi la barre de preuve desktop "~9 ans d'expérience" ?

Par défaut du plan : **uniquement le bandeau mobile sélectionné** (lignes 833-835). Les stats restent inchangées sauf demande explicite.

## Préservé

- Structure DOM, classes, animation, couleurs.
- Bilingue FR/EN.
- Reste du composant.
