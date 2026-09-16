# Correction ciblée du contenu et de la navigation

## État vérifié

- Les destinations demandées existent déjà : `/analyse-plex-gatineau/`, `/en/plex-analysis/`, `/proprietes/` et `/en/properties/`.
- Les deux appels à l’action de l’accueil sont définis dans `src/components/PathwaySection.tsx` pour le français et l’anglais.
- Les affirmations 2025-2026 des pages vendeur et plex citent actuellement des organismes, mais sans lien direct ni rattachement précis de chaque affirmation à une période et une géographie vérifiables.
- Le texte TAL à 3,1 % est présent une fois sur chaque page plex. Les blocs concernés ne sont pas dupliqués entre les versions ordinateur et mobile.
- Des promesses de réponse en 24 h, 48 h ou 24-48 h sont réparties dans des formulaires, pages d’évaluation, pages de remerciement, pages de contact, ressources, articles et courriels de confirmation.

## Modifications prévues

### 1. Accueil français et anglais

**`src/components/PathwaySection.tsx`**
- Remplacer « Calculer mon rendement » par « Demander une analyse plex » et sa destination par `/analyse-plex-gatineau/`.
- Remplacer l’équivalent anglais par « Request a plex analysis » et `/en/plex-analysis/`.
- Faire pointer « Voir les propriétés » directement vers `/proprietes/`.
- Utiliser « View properties » et `/en/properties/` en anglais.
- Ne modifier ni la présentation, ni le suivi existant, ni les autres cartes.

### 2. Correction TAL sur les pages plex

**`src/pages/PlexPage.tsx`**
- Remplacer le paragraphe du taux de 3,1 % par le texte français fourni.
- Ajouter le lien descriptif « Consulter les critères du TAL » vers l’adresse officielle fournie.

**`src/pages/en/PlexPageEn.tsx`**
- Appliquer la traduction naturelle équivalente : l’ajustement dépend des critères et de l’immeuble; le calculateur du TAL aide les parties et ne constitue pas un taux universel.
- Ajouter « Review the TAL criteria » vers la même page officielle.

### 3. Affirmations de marché vendeur et investisseur

**`src/pages/SellerPage.tsx` et `src/pages/en/SellerPageEn.tsx`**
- Remplacer le bloc « Contexte 2026 » et les affirmations non directement sourcées sur la stabilisation, l’inventaire et la vitesse de vente par un conseil neutre : les conditions et délais varient selon le secteur, le type de propriété, le prix et la préparation.
- Neutraliser dans la FAQ les généralisations non vérifiées sur les délais moyens et la demande provenant d’Ottawa.
- Retirer la ligne de sources générique devenue sans objet.

**`src/pages/PlexPage.tsx` et `src/pages/en/PlexPageEn.tsx`**
- Remplacer les affirmations non directement vérifiables sur l’activité du marché, la demande locative, les nouvelles constructions et les « bonnes opportunités » par des conseils neutres selon le secteur, le type d’immeuble, les loyers, les dépenses et l’état du bâtiment.
- Retirer la ligne de sources générique devenue sans objet, tout en conservant le lien officiel du TAL.

Aucune statistique, tendance, date ou source de remplacement ne sera inventée. Les titres des blocs « Contexte 2026 » seront adaptés pour annoncer un conseil général plutôt qu’une analyse datée. Les autres titres et les routes resteront inchangés.

La structure SEO et les métadonnées existantes seront préservées par défaut. Si une métadonnée ou une donnée structurée reprend une promesse chiffrée ou une affirmation neutralisée dans le contenu visible, même avec une formulation équivalente plutôt qu’identique, son texte sera harmonisé sans ajouter d’affirmation, notamment dans les réponses FAQ utilisées pour les données structurées.

### 4. Cohérence des délais de réponse

Remplacer uniquement les promesses de service chiffrées par « Réponse personnalisée » ou « Personalized response », avec adaptation grammaticale de la phrase. Ne pas modifier les durées qui décrivent une transaction immobilière, un délai de vente, une date de publication ou une statistique de marché.

**Composants partagés**
- `src/components/ValuationWidget.tsx`
- `src/components/ValuationForm.tsx`
- `src/pages/BlogArticlePage.tsx`

**Pages d’évaluation et pages locales associées**
- `src/pages/ValuationPage.tsx`
- `src/pages/ValuationAylmerPage.tsx`
- `src/pages/ValuationHullPage.tsx`
- `src/pages/en/ValuationPageEn.tsx`
- `src/pages/en/ValuationAylmerPageEn.tsx`
- `src/pages/en/ValuationHullPageEn.tsx`
- `src/pages/AylmerPage.tsx`
- `src/pages/PontiacPage.tsx`
- `src/pages/en/AylmerPageEn.tsx`
- `src/pages/en/PontiacPageEn.tsx`
- `src/pages/en/BuckinghamPageEn.tsx`

**Pages de conversion, ressources et remerciement**
- `src/pages/BuyerConsultationPage.tsx`
- `src/pages/en/BuyerConsultationPageEn.tsx`
- `src/pages/en/PlexAnalysisPageEn.tsx`
- `src/pages/en/SellerPlanPageEn.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/en/ContactPageEn.tsx`
- `src/pages/MarketReportPage.tsx`
- `src/pages/en/MarketReportPageEn.tsx`
- `src/pages/ResourcesPage.tsx`
- `src/pages/en/ResourcesPageEn.tsx`
- `src/pages/SellerGuidePage.tsx`
- `src/pages/en/SellerGuidePageEn.tsx`
- `src/pages/CourtierOuVendreSoiMemePage.tsx`
- `src/pages/en/RealtorVsSellingByOwnerPageEn.tsx`
- `src/pages/ThankYouPage.tsx`
- `src/pages/en/ThankYouPageEn.tsx`
- `src/pages/ThankYouValuationPage.tsx`
- `src/pages/en/ThankYouValuationPageEn.tsx`

**Articles et courriels automatiques**
- `src/data/blog-posts.ts` : modifier seulement les appels à l’action qui promettent un délai de réponse; conserver les mentions de durée décrivant une vente ou un événement de marché.
- `supabase/functions/send-email/index.ts` : retirer les délais chiffrés des confirmations FR/EN sans changer la logique, les destinataires ni les données transmises.

Après modification, déployer uniquement la fonction `send-email` afin que ses formulations soient réellement mises à jour indépendamment du déploiement du site. Le bilan distinguera le code modifié, le déploiement effectif de la fonction et ce qui reste à confirmer en production.

## Vérification

- Contrôler les pages rendues avant et après sur ordinateur et mobile afin de confirmer qu’aucun texte responsive légitime n’a été supprimé.
- Vérifier les quatre destinations depuis les cartes de l’accueil en français et en anglais.
- Vérifier les pages vendeur et plex FR/EN, le lien TAL, les formulaires et les états de confirmation.
- Vérifier la cohérence des métadonnées et des réponses FAQ structurées avec les corrections visibles.
- Rechercher les promesses de réponse chiffrées restantes et distinguer explicitement les durées immobilières légitimes.
- Exécuter le contrôle TypeScript et le contrôle de compilation disponible.
- Ne soumettre aucun formulaire et ne déclencher aucun courriel de test.
- Fournir la liste exacte des textes modifiés, des routes touchées et des affirmations qui n’ont pas pu être vérifiées.
