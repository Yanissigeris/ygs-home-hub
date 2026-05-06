## Goal

Réduire l'effet "embrouillé" du mega-menu **Acheter** en limitant le nombre de colonnes et de liens visibles. C'est le seul menu en `columns` (3 colonnes, 14 liens). Tous les autres dropdowns sont déjà épurés (5-9 liens en une seule colonne).

## Changement proposé

### Mega-menu "Acheter" — passer de 3 colonnes / 14 liens → 2 colonnes / 8 liens

**Colonne 1 — Acheter** (5 → 4 liens)
- Acheter à Gatineau
- Consultation acheteur
- Premier achat
- Acheter depuis Ottawa

(Retiré du menu visible: *Guide acheteur* — accessible depuis la page Acheter et le footer.)

**Colonne 2 — Plex & Relocalisation** (fusionnée, 9 → 4 liens)
- Investir dans un plex
- Ottawa → Gatineau
- Montréal → Gatineau
- Militaire à Gatineau (page hub qui couvre mutation/achat/vente)

(Retirés du menu visible: *Analyse plex*, *Vendre un plex*, *Guide relocalisation*, *Militaire — achat*, *Militaire — vente*. Toutes ces pages restent accessibles via leurs pages parent, le footer, et les liens internes — aucune URL supprimée, aucun impact SEO.)

### Résultat

- Largeur du panneau réduite de ~42rem → ~28rem.
- Moins de bruit visuel, hiérarchie évidente: 2 colonnes claires au lieu de 3 colonnes denses.
- Aucune page supprimée — uniquement le menu allégé.

## Portée

- Fichiers modifiés:
  - `src/data/navigation.ts` (FR)
  - `src/data/navigation-en.ts` (EN, miroir parfait)
- Aucune modification du composant `SiteHeader.tsx`, des routes, du footer, du sitemap, ou du JSON-LD.
- Aucun impact SEO: toutes les pages restent indexées et liées depuis le footer et les pages parent.
