# Étendre "Mes propriétés" 3 → 5 cartes

## Changement unique
`src/components/FeaturedProperties.tsx` lignes 166-168 : remplacer le filtre `sold/active` par un ordre stratégique fixe par ID.

```ts
const strategicOrder = [
  "11366995", // Triplex Hull/Plateau (vendu, flagship 949 900 $)
  "20453879", // Condo Hull (active, 359 900 $)
  "17113358", // Maison Aylmer (active, 424 900 $)
  "15163372", // Maison Limbour (active, 649 900 $)
  "28743871", // Split Cantley (vendu, 559 800 $)
];
const featured = strategicOrder
  .map((id) => allProps.find((p) => p.id === id))
  .filter((p): p is PropertyLike => p !== undefined);
```

## Non modifié
- Classes Tailwind de la grille (le pattern `lg:grid-cols-3` gère 3+2 naturellement, mobile snap-x mandatory inchangé).
- `PropertyCard`, `properties.ts`, `properties-en.ts`.
- H1/H2, JSON-LD, meta, design tokens.

## Fichiers
- `src/components/FeaturedProperties.tsx` (3 lignes remplacées par 12)
