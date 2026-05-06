## Objectif

Sur mobile (`<640px`), remplacer la bande défilante des awards par une **grille statique 2×2** lisible et premium. Garder le marquee animé inchangé sur tablette/desktop (≥640px).

## Fichier modifié

- `src/components/AwardsMarquee.tsx` (uniquement)

## Approche

Rendre les **deux versions** dans le DOM et alterner la visibilité via Tailwind responsive (`sm:hidden` / `hidden sm:block`). Pas de JS, pas de hook viewport, pas de CLS — c'est purement CSS et SSR-safe (important pour le prerender).

### Version mobile (nouvelle, `<640px`)

- Grille 2 colonnes × 2 lignes, gap ~10px, padding horizontal cohérent avec `section-container`.
- Chaque cellule = mini-carte sobre :
  - fond `rgba(255,255,255,.03)`, bordure 1px `rgba(168,138,90,.22)`, radius 0 (cohérent avec le style éditorial du site).
  - Padding `12px 14px`, alignement vertical centré.
  - Pastille dorée `●` 9px en haut (var `--stats-gold` + glow réduit).
  - **Ligne 1** : titre court en gras, blanc, 11px, `letter-spacing:.12em`, uppercase — ex. `CLUB 100% OR`, `HALL OF FAME`, `CLUB PLATINE`, `CLUB 100%`.
  - **Ligne 2** : meta en doré clair, 10px, regular — ex. `RE/MAX Québec · 2020, 2022–2025`, `RE/MAX, LLC · 2024`, etc.
- Nouveau tableau de données local au fichier :
  ```ts
  const itemsStatic = [
    { title: "Club 100% OR", meta: "RE/MAX Québec · 2020, 2022–2025" },
    { title: "Hall of Fame",  meta: "RE/MAX, LLC · 2024" },
    { title: "Club Platine",  meta: "RE/MAX Québec · 2021" },
    { title: "Club 100%",     meta: "RE/MAX Québec · 2019" },
  ];
  ```
  (Ordre identique au marquee actuel : 100% OR → Hall of Fame → Platine → 100%.)
- Marqué `aria-label="Distinctions RE/MAX"` sur la grille.

### Version desktop/tablette (existante, ≥640px)

- Bloc marquee actuel intégralement conservé, simplement enveloppé dans un wrapper `hidden sm:block`.
- Le `<style>` media-query existant reste valide (il ne s'applique qu'au marquee visible).

### Conteneur `<section>`

- Inchangé : mêmes `defaultVars`, même background, mêmes bordures haut/bas, même padding vertical.
- On garde un seul `<section>` racine pour ne pas casser le rythme entre `ValuationWidget`, `QuickActionStrip` et la suite.

## Accessibilité

- Mobile : texte rendu directement (pas d'animation), donc lisible par screen readers et indexable. Suppression du besoin de `aria-hidden` sur le duplicata (il n'existe pas en mobile).
- Desktop : marquee inchangé, déjà avec pause au hover et duplicata `aria-hidden`.
- Respect implicite de `prefers-reduced-motion` côté mobile (statique). Sur desktop on laisse tel quel — pourra être traité dans un sprint séparé si demandé.

## Hors scope

- Aucun changement aux contenus listés (mêmes 4 distinctions, même ordre).
- Aucun changement aux tokens couleur, à `Index.tsx`, ni au reste du site.
- Pas de modification du test e2e `awards-marquee.spec.ts` sauf si nécessaire — à vérifier en build mode et ajuster si le test cible un sélecteur disparu en mobile (dans ce cas, scoper le test au breakpoint desktop).
