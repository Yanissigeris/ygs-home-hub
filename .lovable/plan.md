# Refonte asymétrie : photo encadrée flottante + cards 62%

Un seul fichier modifié : `src/components/PathwaySection.tsx`. Aucune logique métier touchée.

## Changements

### 1. Photo lifestyle desktop (encadrée + flottante)

Remplacer le bloc actuel `<div aria-hidden className="hidden md:block absolute top-0 right-0 h-full w-[55%]">` (avec son overlay gradient horizontal) par une version encadrée :

- Position : `top: 80px`, `right: 4%`, `width: 50%`, `height: calc(100% - 160px)`
- Background image inchangé (`lifestyleBgImg`, cover, center)
- Box-shadow profonde : `0 20px 60px rgba(23,48,59,0.30), 0 8px 20px rgba(23,48,59,0.15)`
- `zIndex: 1` (sous le wrapper cards qui est `z-10`)
- Overlay interne remplacé par un gradient diagonal léger : `linear-gradient(135deg, rgba(245,241,234,0.15) 0%, rgba(23,48,59,0.10) 100%)`

Résultat : la photo apparaît comme un tableau accroché, détachée des bords.

### 2. Wrapper cards : largeur 62% desktop

Sur le `<div className="relative z-10 mt-10 md:mt-14">` (background petrol, boxShadow profonde, borderRadius 3, gold filet 2px) :

- Ajouter `md:w-[62%]` → `className="relative z-10 mt-10 md:mt-14 md:w-[62%]"`
- Mobile : pleine largeur (inchangé)
- Desktop : 62% aligné à gauche, libère ~38% à droite pour la photo flottante avec léger chevauchement central

Tous les styles inline (gradient, boxShadow `0 30px 80px rgba(23,48,59,0.35)`, borderRadius 3, overflow hidden, filet doré 2px) restent **inchangés**.

### 3. Padding vertical desktop accru

La section actuelle utilise les classes `section-pathway section-rhythm section-gold-divider`. Pour donner de l'air autour de la photo flottante (qui fait `calc(100% - 160px)` = nécessite 80px de respiration top/bottom), ajouter `md:py-24` au className de la section :

`className="section-pathway section-rhythm section-gold-divider relative overflow-hidden md:py-24"`

Mobile inchangé (gouverné par `section-rhythm`).

### 4. Mobile band 200px

Aucun changement sur `<div className="md:hidden w-full h-[200px] mb-8">`.

## Ce qui reste intact (verbatim)

- Imports : `lifestyleBgImg`, `cardVendreImg`, `cardAcheterImg`, `cardPlexImg`, `setAvatarIntent`, `AvatarIntent`, `trackEvent`, `Link`, `React`
- `pathwaysFr`, `pathwaysEn`, interface `Pathway`, `PathwaySectionProps`
- `headingFr`, `headingEn`
- `forwardRef`, `displayName`, export
- Background section cream `#F5F1EA`
- Header éditorial two-tone (`#17303B` + `#A88A5A` italic) + subtitle
- Wrapper cards : gradient `linear-gradient(175deg, #0c1f28, #17303B)`, boxShadow `0 30px 80px rgba(23,48,59,0.35)`, borderRadius 3, overflow hidden, filet doré 2px, border 1px gold
- Grid `grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-px`
- Structure interne complète des cards (badge, numéro serif italique, h3, description, CTA, hover translateY/shadow/title color shift, onClick avec `setAvatarIntent` + `trackEvent("avatar_router_select", …)`)

## Critères d'acceptation

- Desktop ≥ 768px : photo lifestyle = rectangle flottant (top 80px, bottom 80px, right 4%, width 50%) avec box-shadow visible, ne touche aucun bord. Wrapper cards 62% à gauche, asymétrie franche, léger chevauchement central avec la photo.
- Mobile < 768px : photo band 200px inchangée, header cream, cards full width stack.
- Box-shadow `0 30px 80px rgba(23,48,59,0.35)` du wrapper cards inchangée.
- Filet doré 2px inchangé.
- Hover et onClick (avatar tracking) inchangés.
- FR + EN OK.
- Aucun autre fichier modifié, TypeScript propre.
