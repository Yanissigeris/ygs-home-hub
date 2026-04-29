## Plan: Refonte FeaturedProperties — track record + propriété actuelle

Modifier uniquement `src/components/FeaturedProperties.tsx` selon la spec fournie.

### Changements

**1. Strings (`t.fr` / `t.en`)**
- `t.fr.title`: "Propriétés récentes" → "Mes propriétés"
- `t.en.title`: "Recent Properties" → "My Properties"
- Tous les autres champs inchangés.

**2. Sélection des propriétés (dans le forwardRef)**
Remplacer:
```ts
const featured = allProps.filter((p) => p.status === "active").slice(0, 3);
```
par:
```ts
const sold = allProps.filter((p) => p.status === "sold").slice(0, 2);
const active = allProps.filter((p) => p.status === "active").slice(0, 1);
const featured = [...sold, ...active];
```
Le `if (featured.length === 0) return null;` existant gère le fallback vide.

**3. PropertyCard — déplacer le badge vers l'image**
- Supprimer le `<span>` badge actuel dans le card body (juste avant `{p.price}`).
- Ajouter dans la `<div>` image (après `<img>`, avant le gradient overlay) un badge absolute top-left:
  - `position: absolute; top: 12px; left: 12px; zIndex: 2`
  - `background: p.status === "sold" ? "#A88A5A" : "#17303B"` (gold pour VENDU, ink pour EN VEDETTE)
  - `color: #FFFFFF; padding: 4px 10px; fontSize: 9.5px; fontWeight: 700; letterSpacing: 0.16em; textTransform: uppercase`
  - `boxShadow: 0 2px 8px rgba(23,48,59,0.25)`
  - Texte: `p.status === "sold" ? strings.statusSold : strings.statusFeatured`
- Le `{p.price}` devient le premier élément du card body (padding existant conservé).

**4. Stats line — mention "Vendu" conditionnelle**
Sur la ligne `{bedrooms} | {bathrooms}`, ajouter conditionnellement si `p.status === "sold"`:
```
| <span style={{ color: "#A88A5A", fontWeight: 600 }}>Vendu / Sold</span>
```

**5. View link conditionnel**
Remplacer `{strings.viewProperty}` par:
```ts
{p.status === "sold" 
  ? (lang === "fr" ? "Voir la fiche" : "View listing") 
  : strings.viewProperty}
```

### Préservé (non modifié)

- Hover: translateY(-8px), gold shadow, image scale, gold border top intensifié.
- Scroll horizontal mobile, viewAll link (desktop + mobile centré).
- Aspect ratio image 4/3, gradient overlay bas, clic vers `remaxUrl` (target=_blank).
- Toutes les autres classes CSS / props.
- Données dans `properties.ts` / `properties-en.ts` intactes.
- Interface `Property` intacte.

### Résultat attendu

- 3 cards: **7 Rue du Chinook** (VENDU gold), **10 Rue Laviolette** (VENDU gold), **154 Lucerne** (EN VEDETTE ink).
- Badge sur l'image en haut-gauche, plus dans le body.
- Prix en haut du body, stats line avec "| Vendu" gold pour les vendus.
- CTA "Voir la fiche →" pour les vendus, "Voir la propriété →" pour l'active.
- Titre section: "Mes propriétés" / "My Properties".

### Fichiers modifiés

- `src/components/FeaturedProperties.tsx` (seul fichier touché)
