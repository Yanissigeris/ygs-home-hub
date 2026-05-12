## Fichier ciblé
`src/components/PropertyCard.tsx` — uniquement.

## Partie A — Placeholder cream sur le wrapper image

Ligne 43 actuelle :
```tsx
<div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
```

Devient :
```tsx
<div className="relative overflow-hidden bg-[var(--cream-deep)]" style={{ aspectRatio: "4/3" }}>
```

- Ajout d'UNE seule classe : `bg-[var(--cream-deep)]`
- L'inline style `aspectRatio: "4/3"` reste **inchangé**
- Aucune classe `aspect-*` ajoutée

## Partie B — Fade-in image avec gestion cache

### B.1 Imports (haut du fichier)
Ajout d'une ligne au-dessus des imports existants :
```tsx
import { useState, useRef, useEffect } from "react";
```

### B.2 State local dans PropertyCard (après `const t = i18n[lang];`)
```tsx
const imgRef = useRef<HTMLImageElement>(null);
const [imageLoaded, setImageLoaded] = useState(false);

useEffect(() => {
  if (imgRef.current?.complete) {
    setImageLoaded(true);
  }
}, []);
```

`useState` / `useRef` / `useEffect` sont **locaux à chaque instance** de `PropertyCard`.

### B.3 Image (lignes 44-57 actuelles)
Modifications sur le `<img>` existant :

- Ajout `ref={imgRef}`
- `transition-transform` → `transition-all`
- Ajout conditionnel `${imageLoaded ? "opacity-100" : "opacity-0"}`
- Ajout `onLoad={() => setImageLoaded(true)}` (en plus du `onError` existant qui reste)
- Tout le reste inchangé : `src`, `alt`, `loading="lazy"`, `decoding="async"`, `width`, `height`, `onError`

className final :
```
h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"}
```

## Zones explicitement non touchées

- Inline style `aspectRatio: "4/3"` du wrapper — préservé
- `filter: saturate(0.88)` (défini hors composant) — non touché
- Wrapper `<a>` ligne 41 avec hover (`hover:-translate-y-1`, `hover:shadow-[…]`) — préservé
- `group-hover:bg-[#A88A5A]` (bordure dorée) — préservé
- `group-hover:translate-x-1` (flèche) — préservé
- `group-hover:scale-105` sur l'image — préservé (toujours présent dans la nouvelle className)
- `onError` handler de l'image — préservé
- `loading="lazy"` et `decoding="async"` — préservés

## Vérifications demandées
- (a) Wrapper reçoit uniquement `bg-[var(--cream-deep)]` ✓
- (b) Inline `aspect-ratio: 4/3` non modifié ✓
- (c) `useRef` + `useEffect` (cache) + `onLoad` (network) tous présents ✓
- (d) Hooks locaux à `PropertyCard.tsx` ✓
- (e) `saturate(0.88)` non touché ✓
- (f) Hover du card non touché ✓
- (g) `transition-transform` → `transition-all` ✓
