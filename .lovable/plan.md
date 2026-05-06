## Goal

Améliorer la lisibilité de deux éléments du header global, sur toutes les pages où il est transparent par-dessus une image:

1. Les **labels de navigation** (Accueil, Propriétés, Vendre, Acheter, Quartiers, À propos) en blanc sur photo.
2. Les **items des dropdowns/accordéons** (Aylmer, Hull, Plateau, Gatineau centre, Chelsea, Cantley, Buckingham, Pontiac, etc.) dans le panneau crème qui s'ouvre par-dessus la photo.

Aucun changement de structure, de copy, de routes, ou de SEO. Seulement du style dans `src/components/SiteHeader.tsx`.

## Changements proposés

### 1. Labels du header (état transparent uniquement)

Dans `SiteHeader.tsx` (ligne ~310-323):
- Renforcer le `textShadow` actuel `"0 1px 4px rgba(0,0,0,0.4)"` → `"0 1px 3px rgba(0,0,0,0.75), 0 0 12px rgba(0,0,0,0.45)"` (double ombre: nette + halo doux).
- Passer le poids des liens nav de `500` → `600` quand le header est transparent (les labels gardent leur look quand scrolled).
- Idem pour le nom "Yanis Gauthier-Sigeris" et "Courtier immobilier" sous le logo (ombre seulement, poids inchangé).
- Quand `scrolled === true` (barre opaque foncée), retirer l'ombre — pas nécessaire.

### 2. Items des dropdowns (panneau crème)

Dans `DesktopNavItem` (lignes ~117-167 et 197-217):
- Couleur des liens: `#4A5568` → `#1f2d3a` (gris-bleu foncé, contraste AAA sur crème).
- Poids: `500` → `600` par défaut, `700` pour l'item actif.
- Augmenter légèrement l'opacité du panneau: `rgba(247,244,238,.98)` → `rgba(247,244,238,1)` (totalement opaque) + ombre un peu plus forte pour bien décoller le panneau de la photo derrière.
- Conserver l'effet hover gold (`var(--gold3)` background).

### 3. Mobile drawer

Le `MobileNavDrawer` (lazy chunk séparé) utilise déjà un fond opaque sombre — pas concerné par le problème "par-dessus la photo". À vérifier rapidement; sinon aucune modif nécessaire.

## Portée

- Un seul fichier modifié: `src/components/SiteHeader.tsx`.
- S'applique automatiquement sur **toutes les pages** (le header est global via `SiteLayout`).
- Pas d'impact SEO, JSON-LD, ARIA, ou structure DOM.
- Pas d'impact sur l'état `scrolled` (barre opaque foncée), seulement sur l'état transparent et sur les panneaux dropdown.

## Vérification

Après l'édition, je vérifie visuellement la home (`/`) et `/vendre-ma-maison-gatineau` (la page actuelle), avec et sans dropdown ouvert, en desktop.