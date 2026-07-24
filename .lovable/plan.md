# Confirmation — Template appliqué à `inventaire-gatineau-2026-30-pourcent-inscriptions`

L'article utilise la route partagée `BlogArticlePage.tsx` (`/blogue/:slug`), donc tous les éléments du template s'appliquent automatiquement, sans changement de code.

## Vérification (référence `src/pages/BlogArticlePage.tsx`)

| Élément demandé | Statut | Emplacement |
|---|---|---|
| Hero split 2 colonnes (gauche `#17303B` crème / droite `#F7F4EF` border-left 3px `#A88A5A`) avec H1 Cormorant 56px, ligne 3 italic dorée, lead, stats 3 col | Appliqué | l.417, l.437, l.445-452 (stats bordées `#E0DBD1`, valeurs Cormorant 22px) |
| Barre de progression 3px `#A88A5A` en haut | Appliqué | l.84-115 (`background: var(--gold)`, hauteur 3px, top viewport) |
| Drop cap Cormorant 80px `#17303B` float left sur 1er paragraphe | Appliqué | l.481 (renderer markdown, premier `<p>` reçoit le drop cap) |
| Blockquotes fond `#ECEAE2`, border-left 3px `#A88A5A`, Cormorant italic 20px `#17303B` | Appliqué | l.303-305 |
| Sidebar 220px : source (border-left 2px `#A88A5A` + fond `#ECEAE2`) + CTA fond `#17303B` (eyebrow doré, titre Cormorant 22px italic `#C9A25A`, bouton border `#A88A5A`) | Appliqué | l.513-578 |
| CTA full width `#17303B`, titre Cormorant 36px, bouton border doré | Appliqué | l.604, l.630 |
| Bio auteur : avatar cercle 52px fond `#17303B` border 1.5px `#A88A5A` initiales YG + nom Cormorant 20px + bio 13px | Appliqué | l.666-689 |
| Nav article suivant border-top `#E0DBD1` | Appliqué | l.707 |

## Contenu spécifique à cet article

- `titleLines[2]` (« ce que ça change pour votre prix ») rendu en italic doré via la ligne 3 du hero.
- `h3Style: "prominent"` déclenche le style H3 doré Cormorant 32px (l.274), utilisé pour les 3 sections `##`.
- `ctaOverride` FR/EN alimente le CTA sidebar et le CTA full-width.
- `sources[0]` alimente le bloc source de la sidebar.
- `emitFaqSchema: true` émet le JSON-LD `FAQPage` à partir des paires `**Q : …**` / `**R : …**` de la section `## FAQ`.

## Action

Aucune modification requise. Le rendu FR (`/blogue/inventaire-gatineau-2026-30-pourcent-inscriptions/`) et EN (`/en/blog/gatineau-inventory-2026-30-percent-listings/`) hérite intégralement du template.