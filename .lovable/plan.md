## Améliorations chirurgicales — page Évaluation gratuite

Cible : `src/pages/ValuationPage.tsx` (route `/evaluation-gratuite-gatineau`).
Hors scope : hero, `ValuationForm`, FAQ, footer, `RelatedPages`, JSON-LD.

---

### Fix #1 — Section « Votre évaluation inclut » (2 colonnes + widget fourchette)

Remplacer l'usage actuel de `<BenefitsList overline title items />` par une section custom inline dans `ValuationPage.tsx` (le composant `BenefitsList` reste intact pour les autres pages — pas de refactor partagé).

Layout :
- Section : `bg-background`, padding vertical réduit ~30 % vs `section-padding` actuel → utiliser `py-16 md:py-20` (au lieu du `py-24 md:py-32` typique).
- Container : `grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`.
- Eyebrow + titre passent en alignement gauche (override du `centered` actuel de `SectionHeading` — on ne passe simplement pas `centered`).
- Colonne 1 : `SectionHeading` (overline « Ce que vous recevez », titre « Votre évaluation inclut ») + 5 puces existantes (réutiliser le markup `CheckCircle2 + texte` de `BenefitsList`).
- Colonne 2 : widget fourchette (voir ci-dessous).
- Mobile : empilement vertical (puces puis widget).

Widget fourchette (statique, pas de dataviz) :
- Carte `bg-[var(--ink)] text-[var(--cream)] rounded-lg p-8 border border-[var(--gold)]/30 shadow-sm`.
- Étiquette top : `EXEMPLE D'ANALYSE` — DM Sans 11px uppercase tracking-[0.14em] gold.
- Sous-titre : `Fourchette de valeur — secteur Aylmer` — DM Sans regular cream/85.
- Bloc 3 valeurs : flex row `justify-between items-end`, avec une ligne horizontale gold 1px en arrière-plan reliant les 3 dots (positionnée via pseudo ou simple `<div>` absolu derrière les dots).
  - Gauche : dot 8px gold/40 + `615 000 $` Cormorant Garamond ~24px cream + label `Conservateur` DM Sans 12px uppercase tracking-wide cream/70.
  - Centre : dot 12px gold plein + `645 000 $` Cormorant Garamond ~28px gold + label `Prix recommandé`.
  - Droite : dot 8px gold/40 + `680 000 $` cream + label `Optimiste`.
- Note bas : `Exemple illustratif. Votre analyse sera basée sur les ventes comparables réelles de votre secteur.` — DM Sans 12px cream/60.
- Aucune animation au scroll.

### Fix #4 — Section « Après votre évaluation » (hiérarchie primaire/secondaire)

Modifier `src/components/FunnelNextStep.tsx` pour que la prop `highlight` produise un traitement éditorial fort (au lieu du léger ring actuel), sans casser les autres pages qui utilisent ce composant — la version sans `highlight` reste identique au rendu actuel.

Carte `highlight` :
- Fond : `bg-[var(--ink)]`, texte cream.
- `relative` + badge `absolute top-4 right-4` : `RECOMMANDÉ` — DM Sans 11px uppercase tracking-widest, `bg-[var(--gold)] text-[var(--cream)] px-3 py-1 rounded-full`.
- Titre Cormorant Garamond cream, sous-texte DM Sans cream/85.
- Lien CTA + flèche en `text-[var(--gold)]`.
- Hover : `hover:shadow-lg` (pas de scale), transition 200 ms.

Carte non-`highlight` (secondaire) :
- Fond cream/transparent (hérite section), bordure `border-[#D9E1E5]`.
- Texte ink (couleurs actuelles).
- CTA + flèche en `text-[var(--ink)]`.
- Hover : `hover:border-[var(--gold)]/40`, transition 200 ms.

Aucun changement aux props passées depuis `ValuationPage` (`afterSteps` reste tel quel — `highlight: true` est déjà sur Plan vendeur).

### Fix #5 — Nouvelle section témoignage (derrière feature flag, désactivée par défaut)

Insérer entre `FunnelNextStep` et `RelatedPages` dans `ValuationPage.tsx`.

Comme l'attribution est encore en placeholders (`[Sylvie.]`, `[Aylmer]`, `[2026]` — Yanis doit valider), la section est gardée derrière une constante locale `const SHOW_TESTIMONIAL = false;` au sommet du fichier, avec commentaire indiquant : « Activer après validation des vraies valeurs (prénom, secteur, année). »

Markup (rendu uniquement si `SHOW_TESTIMONIAL`) :
- `<section>` `bg-[var(--cream)] py-20 md:py-20 [py-14 mobile]` — pas de divider visuel, flow continu avec sections cream voisines.
- Container `max-w-3xl mx-auto text-center`.
- Avant la citation : `<div className="mx-auto h-px w-10 bg-[var(--gold)] mb-4" />` (barre 40×1 px gold centrée).
- `<blockquote>` : citation Cormorant Garamond italic ink, `text-[22px] md:text-[28px] leading-[1.4]`, max-width 720 px.
- Texte : « C'est la 2e fois que je fais appel à ses services et je suis toujours très satisfaite de son service. Yanis est très professionnel et respectueux, très honnête, un être de confiance. »
- `<cite>` à l'intérieur du blockquote (a11y), DM Sans 14px ink/70, mt-6, `not-italic` : `— [Sylvie.], [Aylmer], [2026]`.
- Pas de gros guillemets décoratifs, pas de photo, aucun JSON-LD `Review`.
- Respecte `prefers-reduced-motion` (aucune animation ajoutée).

---

### Fichiers touchés
- `src/pages/ValuationPage.tsx` — refonte section #1 inline, ajout section témoignage flaggée.
- `src/components/FunnelNextStep.tsx` — variante `highlight` éditoriale (badge + fond ink + CTA gold).

### Validation
- Aucun changement aux pages qui consomment `BenefitsList` (intact) et aux pages qui consomment `FunnelNextStep` sans `highlight` (rendu inchangé).
- Tester 375 / 768 / 1024 / 1440 px.
- Aucun nouveau composant orphelin, aucun emoji icône, aucun JSON-LD modifié.