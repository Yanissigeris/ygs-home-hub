## Objectif

Appliquer uniquement le correctif visuel demandé sur les pages d’accueil française et anglaise : supprimer les bandes de fondu entre sections et faire fonctionner les utilitaires Tailwind `font-serif` / `font-sans` avec les polices déjà présentes.

## Plan fichier par fichier

### `src/pages/Index.tsx`
- Supprimer les 6 éléments décoratifs `section-fade-bridge`.
- Ne modifier ni l’ordre, ni le contenu, ni la structure des sections elles-mêmes.

### `src/pages/en/IndexEn.tsx`
- Supprimer les 5 éléments décoratifs `section-fade-bridge` équivalents.
- Conserver strictement tous les contenus et l’ordre des sections.

### `src/index.css`
- Supprimer le bloc `.section-fade-bridge`, ses 6 variantes de transition et le commentaire « Sprint 4 » associé.
- Préserver l’accolade fermante du `@layer components`.
- Ne modifier aucune valeur de token, aucune autre règle et aucune animation.

### `tailwind.config.ts`
- Ajouter dans `theme.extend.fontFamily`, sans toucher aux entrées `heading` et `body` :
  - `serif: ['Cormorant Garamond', 'Georgia', 'serif']`
  - `sans: ['DM Sans', 'system-ui', 'sans-serif']`
- Les usages existants de `font-serif` et `font-sans` adopteront ainsi les familles attendues sans modification de composant.

### `src/components/CookieConsent.tsx` — uniquement si nécessaire après contrôle visuel
- Aucun changement prévu par défaut.
- Si la capture montre que le titre de la bannière est réellement trop petit une fois Cormorant appliquée, changer uniquement `text-[1rem]` en `text-[1.15rem]` sur ce titre.

## Vérifications

- Rechercher `section-fade-bridge` dans tout le projet et confirmer qu’il ne reste aucune occurrence.
- Vérifier l’absence d’erreurs TypeScript et de compilation.
- Contrôler à 1440 px et 390 px :
  - la jonction « Parcours / Mes propriétés » ;
  - la jonction « Guides / FAQ » ;
  - le titre « Suivez le marché » dans la section Instagram ;
  - la bannière de consentement, avec l’ajustement conditionnel ci-dessus seulement si nécessaire.
- Confirmer visuellement que les sections se touchent net et qu’aucun autre aspect n’a changé.

## Hors périmètre garanti

Aucun changement aux slugs, redirections, libellés de navigation, H1, métadonnées, formulaire, suivi analytique, consentement, prérendu, JSON-LD, tokens, dépendances ou animations.
