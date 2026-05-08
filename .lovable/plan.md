## Plan : Enrichissement E-E-A-T de /masson-angers

### Contexte
La page `src/pages/MassonAngersPage.tsx` fait ~280 mots et est sous-indexée. Objectif : ~870 mots avec parité E-E-A-T, sans toucher au template ni aux autres pages.

### Modifications (7 exactes, 1 fichier)

| # | Cible | Action | Résultat |
|---|-------|--------|----------|
| 1 | `hero.subtitle` | Remplacer par version longue avec "20-25 minutes du centre de Gatineau par l'autoroute 50" | SEO local + contexte géo |
| 2 | `lifestyle.subtitle` | Remplacer par 3 phrases : acheteurs cibles, 2 sous-secteurs (Masson/Angers), rapport qualité-prix vs Hull/Aylmer | Contenu riche + différenciation |
| 3 | `reasons` | Passer de 5 à 9 entrées : prix Centris 400-490k$, constructions 2026, écoles CSSCV (4 noms), agrandissement 20 M$, secondaire Hormisdas-Gamelin, autoroute 50/Ottawa, rivière du Lièvre, marché actif | Preuves factuelles |
| 4 | `profiles` | Enrichir texte des 4 cartes : détails écoles, fourchettes prix 400-490k$, programmes RAP/CELIAPP, promoteurs 2026-2027, sous-secteurs | Ciblage précis |
| 5 | `faq` | Passer de 3 à 6 questions : prix 2026, écoles, sous-secteurs, délai de vente 32 jours Q4 2025 (CIO), trajet Ottawa | FAQPage JSON-LD à 6 entrées |
| 6 | `sectors` | Enrichir `detail` des 3 liens : Buckingham (Hormisdas-Gamelin), Gatineau centre (condos), Limbour (alternative 15 min) | Maillage interne qualifié |
| 7 | Ajouter `brokerPerspective` | Entre `guide` et `cta` : observation (jeunes familles 25-35 ans, Ottawa vs Gatineau), dataPoint (25-40 jours, 400-490k$), takeaway (comparer Masson/Angers, vérifier promoteur, prix vs neuf) | E-E-A-T core (Expérience) |

### Contraintes respectées
- Aucune ligne supprimée (remplacements exacts)
- Indentation 4 espaces préservée
- Props non modifiées inchangées : `seoTitle`, `metaDesc`, `ogImage`, `jsonLd`, `trustSpecialty`, `inlineCta`, `profilesTitle`, `related`, `guide`, `cta`
- Aucun impact sur les autres pages

### Validation attendue
- TS compile sans erreur
- Word count ~280 → ~870 mots
- Section "Mon regard sur Masson-Angers" visible entre InlineCTA et FAQ
- FAQPage JSON-LD à 6 entrées