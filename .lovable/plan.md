## Goal

Épurer les titres de colonnes en or (ACHETER, PLEX / INVESTISSEMENT, RELOCALISATION) qui apparaissent dans le mega-menu "Acheter" du header. Actuellement: doré (`var(--gold)`), majuscules, lettres très espacées, soulignement doré — visuellement chargé.

## Changement

Dans `src/components/SiteHeader.tsx` (lignes 130-145), remplacer le style des titres de colonnes par une version épurée:

- Couleur: `var(--gold)` → `var(--ink)` (gris-bleu foncé, sobre)
- `textTransform: "uppercase"` → retiré (casse normale: "Acheter", "Plex / Investissement", "Relocalisation")
- `letterSpacing: 0.12em` → `0.01em`
- `fontSize: 11px` → `12px`
- `fontWeight: 600` → `600` (inchangé)
- `borderBottom` doré retiré (ou remplacé par séparateur très discret `1px solid var(--border)`)
- Léger `opacity: .55` pour bien marquer la hiérarchie sans crier

Résultat: titres de section discrets, modernes, type "label de catégorie" — les liens cliquables restent l'élément dominant du panneau.

## Portée

- Un seul fichier: `src/components/SiteHeader.tsx`, bloc lignes 132-145.
- Affecte uniquement le mega-menu multi-colonnes (actuellement: "Acheter" FR / "Buy" EN).
- Aucun impact SEO, structure, routes, ou autres composants.
- Les dropdowns simples (Vendre, Quartiers, À propos) n'ont pas de titre de colonne — non concernés.

## Vérification

Ouvrir le menu "Acheter" sur la home et confirmer visuellement que les titres sont épurés et la hiérarchie claire.
