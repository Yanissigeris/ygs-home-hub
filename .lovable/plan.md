## Fichier modifié
- `src/components/HeroSection.tsx` (seul fichier touché)

## Bloc supprimé — lignes 1089–1160

Deux blocs rendent le NAP en bas du hero (un par breakpoint, FR + EN partagés via `lang`):

1. **Lignes 1089–1134** — `<address>` desktop (visible `md:`) positionné `absolute bottom: 8px`, contenant `city · Bureau/Office · 819-684-0000 · Cellulaire/Mobile · 819-210-3044 · yanis@martywaite.com`.

2. **Lignes 1137–1160** — `<section className="md:hidden">` mobile contenant la même info NAP (header "Contact" doré + adresse).

Les deux sont supprimés intégralement. La fermeture `</section>` du hero (ligne 1136) et le fragment `</>` (ligne 1161) restent en place.

## Imports orphelins
- `import { heroContact } from "@/config/heroBottomInfo";` (ligne 36) devient inutilisé après le retrait → supprimé pour éviter le warning TS.
- Le fichier `src/config/heroBottomInfo.tsx` est conservé tel quel (peut servir ailleurs, hors scope).

## Padding / spacing
- Desktop : le NAP est en `position: absolute` → son retrait n'affecte pas le flux. La bande de credentials garde son spacing exact. Aucun ajustement requis.
- Mobile : la `<section className="md:hidden">` NAP suit la `</section>` du hero (hors hero). Son retrait raccourcit la page sous le hero mais ne touche pas à la bande de credentials mobile (lignes 1038–1083, à l'intérieur du hero). Aucun ajustement requis.

## Confirmation — non touché
- H1, eyebrow, sous-titre, CTAs, bande de credentials (Depuis 2017 · 300+ · 5★ · Hall of Fame) : intacts.
- Header, Footer, JSON-LD, meta, canonical, hreflang, routes, bouton téléphone flottant, sticky CTA mobile : intacts.
- Aucun autre fichier modifié.