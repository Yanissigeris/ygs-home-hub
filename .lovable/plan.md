# Remplacer l'encart d'évaluation de l'accueil par un bloc menant à la page d'évaluation

## Ce qui change
- Sur les accueils FR et EN, l'encart d'évaluation en 3 étapes est remplacé par un bloc simple : titre, texte, bouton « Obtenir mon évaluation » / « Get my valuation » vers la page d'évaluation.
- La carte « Vendre » de la section parcours mène aussi à la page d'évaluation, avec le même libellé.
- « Évaluation Gratuite » devient « Évaluation gratuite » dans le bas de l'accueil et le bouton mobile collant.

## Détails techniques (5 fichiers, rien d'autre)
1. Créer `src/components/ValuationCTA.tsx` avec le contenu exact fourni.
2. `src/pages/Index.tsx` : import et usage `ValuationWidget` → `ValuationCTA` ; libellé « Évaluation gratuite » (ligne 120).
3. `src/pages/en/IndexEn.tsx` : import et usage → `<ValuationCTA lang="en" />`.
4. `src/components/PathwaySection.tsx` : lignes 31-32 et 61-62 (libellés et liens indiqués).
5. `src/components/StickyMobileCTA.tsx` ligne 23 : « Évaluation gratuite → ».

`ValuationWidget.tsx` et ses tests sont conservés. Aucun `npm run build` ; vérification par typecheck et coup d'œil FR/EN à 390 et 1440 px.

Textes du bloc sans délai chiffré : FR « Je compare votre propriété aux ventes récentes de votre secteur et je vous reviens avec une réponse personnalisée. » ; EN « I compare your property to recent sales in your area and get back to you with a personalized answer. »
