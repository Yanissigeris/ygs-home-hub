# Refonte éditoriale du PathwaySection

Transformation du `PathwaySection` actuel (fond dark uni, header en haut, 3 cards en dessous) vers une composition asymétrique style magazine print : fond split (cream à gauche + photo lifestyle à droite), header éditorial sur le cream, et bloc des 3 cards en dark petrol qui flotte avec ombre profonde par-dessus la photo.

## Fichier modifié

Un seul fichier : `src/components/PathwaySection.tsx`. Aucun autre fichier touché.

## Ce qui reste intact (verbatim)

- Imports `cardVendreImg`, `cardAcheterImg`, `cardPlexImg`, `setAvatarIntent`, `AvatarIntent`, `trackEvent`, `Link`
- Tableaux `pathwaysFr` et `pathwaysEn` (data, badges, intents, hrefs, alt text)
- Interface `Pathway` et `PathwaySectionProps`
- `forwardRef<HTMLElement>` + `displayName`
- Logique `onClick` : `setAvatarIntent(p.intent)` + `trackEvent("avatar_router_select", { avatar: p.intent })`
- Hover handlers verbatim (translateY -5px, boxShadow gold, image saturate 0.95, h3 color #BFA476)
- Structure interne de chaque card : aspect-[16/9], `<img>` avec lazy/decoding/onLoad/onError/img-shimmer, numéro `{p.num}` absolu top-left, badge `{p.badge}` absolu top-right, `<h3>`, `<p>`, span CTA avec border-bottom gold

## Changements

### 1. Enrichir `headingFr` et `headingEn`

Remplacer `title: "..."` par 3 nouveaux champs :

```ts
const headingFr = {
  overline: "Choisissez votre prochaine étape",
  titleFirst: "Où en êtes-vous dans",
  titleAccent: "votre projet?",
  subtitle: "Trois chemins selon votre situation. Choisissez celui qui vous correspond — vous serez accompagné de A à Z.",
};

const headingEn = {
  overline: "Choose your next step",
  titleFirst: "Where are you in",
  titleAccent: "your project?",
  subtitle: "Three paths depending on your situation. Choose the one that fits — you'll be guided from A to Z.",
};
```

### 2. Ajouter import image lifestyle

```ts
import lifestyleBgImg from "@/assets/service-vendre.webp";
```

(Réutilise `service-vendre.webp` — salon résidentiel moderne, déjà dans le repo.)

### 3. Nouvelle structure JSX

La `<section>` devient un conteneur `relative` sur fond cream `#F5F1EA`. À l'intérieur :

```text
<section bg=cream relative overflow=hidden>
  ├─ [DESKTOP md+] <div absolute right-0 top-0 w-[55%] h-full> photo lifestyle + overlay petrol 0.25
  ├─ [MOBILE]      <div md:hidden h-[200px]> photo lifestyle full-width en haut
  └─ <div section-container relative z-10>
       ├─ Header éditorial (max-w-[580px], texte sur cream)
       │    ├─ overline gold #A88A5A uppercase
       │    ├─ <h2> two-tone : titleFirst en #17303B + <span> titleAccent en #A88A5A
       │    └─ subtitle ink/70
       └─ Cards wrapper flottant (mt-12)
            ├─ filet doré 2px en haut (#A88A5A)
            ├─ background petrol gradient (#0c1f28 → #17303B)
            ├─ boxShadow: 0 30px 80px rgba(23,48,59,0.35)
            └─ grid 1 col / md:[1.5fr_1fr_1fr] avec les 3 <Link> verbatim
```

### 4. Détails techniques de la nouvelle section

- Conteneur racine : `<section ref={ref} className="section-pathway section-rhythm section-gold-divider relative overflow-hidden" style={{ background: "#F5F1EA" }}>`
- Photo desktop : `<div aria-hidden className="hidden md:block absolute top-0 right-0 h-full w-[55%]" style={{ backgroundImage: \`url(${lifestyleBgImg})\`, backgroundSize: "cover", backgroundPosition: "center" }}>` + un overlay enfant `absolute inset-0` avec `background: "linear-gradient(90deg, rgba(245,241,234,0.4) 0%, rgba(23,48,59,0.25) 100%)"` pour fondre vers le cream à gauche.
- Photo mobile : `<div className="md:hidden w-full h-[200px] -mt-4 mb-8 relative" style={{ backgroundImage, backgroundSize: cover, backgroundPosition: center }}>`
- Header bloc : `<div className="relative z-10 max-w-[580px]">`
  - overline `<p className="label-overline mb-3" style={{ color: "#A88A5A" }}>`
  - titre `<h2 style={{ color: "#17303B" }}>{titleFirst} <span style={{ color: "#A88A5A", fontStyle: "italic" }}>{titleAccent}</span></h2>`
  - subtitle `<p className="prose-body mt-4" style={{ color: "rgba(23,48,59,0.7)", maxWidth: 520 }}>`
- Cards wrapper : `<div className="relative z-10 mt-10 md:mt-14" style={{ borderRadius: 3, overflow: "hidden", boxShadow: "0 30px 80px rgba(23,48,59,0.35)", background: "linear-gradient(175deg, #0c1f28, #17303B)" }}>`
  - filet doré : `<div aria-hidden style={{ height: 2, background: "#A88A5A" }} />`
  - grid : `<div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-[0.75rem] md:gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>` puis `pathways.map(...)` avec les `<Link>` verbatim depuis le code actuel (lignes 140-269).

### 5. Comportement responsive

| Viewport  | Photo                              | Header                       | Cards            |
|-----------|------------------------------------|------------------------------|------------------|
| ≥ 768px   | absolue à droite (55% width, full h) | sur cream à gauche, max 580px | flottent par-dessus la photo, 3 col |
| < 768px   | bandeau 200px en haut full-width    | sur cream pleine largeur     | stack vertical 1 col |

## Critères d'acceptation

- Export par défaut `PathwaySection` avec `forwardRef` et `displayName` inchangés.
- FR + EN affichent correctement `titleFirst` (ink) + `titleAccent` (gold italique) + `subtitle`.
- Desktop ≥ 768px : split visuel cream/photo, cards flottantes avec ombre profonde.
- Mobile < 768px : photo 200px → header cream → cards en stack.
- Filet doré 2px visible en haut du bloc cards.
- `boxShadow: 0 30px 80px rgba(23,48,59,0.35)` sur le wrapper cards.
- Les 3 cards conservent : structure interne, hover (translateY-5, gold shadow, image saturate, h3 gold), badge "Priorité investisseurs" sur card 01, numéros 01/02/03.
- `onClick` continue de tracker `avatar_router_select` et set le cookie avatar.
- Aucun import inutilisé, TypeScript propre.
- Aucun autre fichier modifié.
