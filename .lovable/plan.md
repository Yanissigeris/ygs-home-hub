## Plan: passer FeaturedProperties à 4 propriétés (layout 2×2)

Fichier unique modifié : `src/components/FeaturedProperties.tsx`

### Modification 1 — strategicOrder
Retirer l'entrée `"20453879"` (condo 154 Lucerne) du tableau `strategicOrder`. Résultat : 4 ids dans l'ordre Chinook (vendu) → Brook (active) → Laperrière (active) → Laviolette (vendu).

### Modification 2 — Grid desktop
Remplacer la className conditionnelle du desktop grid par une logique à 3 cas :
- `featured.length === 4` → `lg:grid-cols-2` (layout 2×2)
- `featured.length >= 3` → `lg:grid-cols-3`
- sinon → vide (md:grid-cols-2 hérité)

### Hors scope (strictement non touché)
- `src/data/properties.ts` et `properties-en.ts` (Lucerne reste pour /proprietes)
- Structure des cards, hover, badges, fade-in image
- Grid mobile (scroll horizontal)
- Ligne `maxWidth: 900` (toujours valide car 4 ≥ 3)

### Validation visuelle
- `/` desktop ≥1024px : 2×2
- `/` tablette 768-1023px : 2×2 (md:grid-cols-2 inchangé)
- `/` mobile : scroll horizontal inchangé
- `/proprietes` : 5 propriétés toujours présentes
