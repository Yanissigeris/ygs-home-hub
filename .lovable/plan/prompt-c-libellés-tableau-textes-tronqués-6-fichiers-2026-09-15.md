# Prompt C — Libellés, tableau, textes tronqués (6 fichiers)

Correctif visuel ciblé. Aucun changement : slugs, redirections, navigation, H1, title, meta, champs de formulaire, trackEvent/trackCTAClick, consentement, prerender.mjs, JSON-LD, tokens de index.css, dépendances, animations.

## 1. `src/components/PathwaySection.tsx`
- Ligne 31 : `cta: "Estimer ma propriété"` → `"Estimer"`.
- Ligne 61 : `cta: "Get a free valuation"` → `"Get a valuation"`.

## 2. `src/components/GuideOffersSection.tsx`
- Lignes 11–14 (FR) : les quatre `cta` deviennent `"Recevoir le guide →"`.
- Lignes 18–21 (EN) : les quatre `cta` deviennent `"Get the guide →"`.
- Ligne 11 : sous-titre FR `Vendre au meilleur prix — prix, mise en marché, négociation.` → `Vendre au meilleur prix : prix, mise en marché, négociation.`
- Ligne 18 : sous-titre EN `Sell at the best price — pricing, marketing, negotiation.` → `Sell at the best price: pricing, marketing, negotiation.`
- Grille mobile (~ligne 89) : retirer `line-clamp-2` du sous-titre.
- Grille mobile (~ligne 91) : remplacer `{g.cta.replace(/ →$/, "").replace(/Recevoir le guide /i, "").replace(/Get the /i, "")} →` par `{g.cta}` tel quel.

## 3. `src/components/HomeFAQTeaser.tsx`
- Supprimer le second lien « Voir toutes les questions → » : le bloc `<div className="mt-2 text-right">` avec le `cta-arrow-link` (lignes 110–115, commentaire inclus). Le bouton contour sous le titre est conservé.
- Noter : la variable `linkLabel` ne sera peut-être plus utilisée ; vérifier et retirer uniquement si elle devient orpheline (sans toucher `linkHref` si utilisé ailleurs).

## 4. `src/components/AreasServicesSection.tsx`
- Bloc desktop `hidden md:grid` : colonne gauche = `areas.slice(0, 6).map(...)` au lieu de `areas.map(...)` (6 rangées + lien « Voir tous les quartiers → » = 7 rangées).
- Colonne droite : après `services.map(...)` (6 rangées), ajouter une 7e rangée du même style que le lien quartiers : FR « Réserver une consultation → » → `/contact-yanis/` ; EN « Book a consultation → » → `/en/contact/`. Libellé ajouté à `cfgFr`/`cfgEn`.
- Mobile (onglets) et données `areasFr/areasEn/servicesFr/servicesEn` : inchangés.

## 5. `src/components/FeaturedProperties.tsx` (~ligne 198)
- Retirer `className="truncate"` de la ligne adresse.
- Afficher `{p.address}, {sector}` via un helper partagé.

## 6. `src/components/PropertyCard.tsx` (~ligne 125)
- Retirer `className="truncate"` de la ligne adresse.
- Afficher `{property.address}, {sector}` avec le même helper.

Helper partagé (nouveau petit utilitaire, p. ex. `src/lib/format-sector.ts`, réexporté ou importé par les deux composants) :
```ts
export const formatSector = (city: string): string =>
  (city.match(/\(([^—)]+)/)?.[1] ?? city).trim();
```
Attendu : « 7 Rue du Chinook, Hull », « 312 Rue Le Gallois, Gatineau », « 32 Rue de Laperrière, Limbour ». Attributs alt et `src/data/properties.ts` intacts.

## Vérifications
- Typecheck / build OK.
- Captures Playwright (desktop 1440 px + mobile 390 px) : colonne 02 du parcours, guides desktop et mobile, section FAQ, tableau Secteurs / Services (7 rangées de chaque côté), deux fiches de propriétés avec secteur visible.
