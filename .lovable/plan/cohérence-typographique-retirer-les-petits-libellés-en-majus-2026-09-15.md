# Cohérence typographique : retirer les petits libellés en majuscules sur tout le site

Objectif : appliquer partout ce qui a été fait sur l'accueil. Les petits libellés dorés en
majuscules au-dessus des titres disparaissent, sauf les trois exceptions déjà validées
(formulaire d'évaluation, témoignages, FAQ). Aucun titre, texte de paragraphe, lien, champ de
formulaire, suivi ou donnée structurée n'est modifié.

## Composants partagés (le libellé n'est plus affiché, la prop reste acceptée)

- `src/components/HeroSection.tsx` (ligne 471) : le libellé au-dessus du titre des héros de
  pages intérieures n'est plus rendu, comme sur l'accueil.
- `src/components/SectionHeading.tsx` (ligne 13) : idem pour tous les titres de section qui
  passent par ce composant.
- `src/components/CTASection.tsx` (ligne 35), `src/components/ReviewSection.tsx` (ligne 39),
  `src/components/ProfileSection.tsx` (ligne 76), `src/components/HomeFAQTeaser.tsx` (ligne 60),
  `src/components/NeighborhoodTemplate.tsx` (ligne 158) : même retrait.

Conservés tels quels : `FAQSection.tsx` (« FAQ »), `TestimonialGrid.tsx` (« Témoignages » /
« Testimonials »), `ValuationWidget.tsx` (« Évaluation gratuite » / « Free valuation »).

## Pages (retrait des libellés écrits directement dans la page)

Toutes les occurrences `<p className="label-overline">…</p>` et `<div className="label-overline">…</div>`
sont retirées dans les pages secteurs, guides et témoignages, FR et EN :

Aylmer, Hull, Gatineau centre, Plateau, Buckingham, Cantley, Chelsea, Pontiac (FR + EN) ;
pages guides (frais de courtage, combien coûte un courtier, courtier ou vendre soi-même,
comment choisir un courtier, vérifier un courtier OACIQ, et leurs équivalents anglais) ;
pages évaluation Hull et Aylmer (FR + EN) ; pages témoignages (FR + EN).

## Feuille de style

- `src/index.css` : suppression de la règle résiduelle `.label-overline::before { width: 16px }`
  (le trait doré n'existe plus). La classe `.label-overline` reste, utilisée par les trois
  libellés conservés.

## Vérification

Typecheck, puis capture d'une page secteur et d'une page guide pour confirmer que les titres
arrivent en premier.
