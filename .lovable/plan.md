## Résumé
Activer `scroll-behavior: smooth` global via CSS, avec fallback instantané sur la navigation inter-routes et respect de `prefers-reduced-motion`.

## Changement 1 — `src/index.css`

Insérer ce bloc immédiatement après `* { @apply border-border; }` (ligne 139) et avant la règle `button, [role="button"], a, input, select, textarea` :

```css
  html {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
```

## Changement 2 — `src/components/ScrollToTop.tsx`

Remplacer le contenu du `useEffect` pour désactiver temporairement le smooth scroll lors d'un changement de route. Fichier final :

```typescript
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on PUSH (link click) or REPLACE navigation.
    // POP (back/forward) keeps the browser's native scroll restoration.
    if (navigationType !== "POP") {
      const root = document.documentElement;
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      root.style.scrollBehavior = prev;
    }
  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;
```

## Contraintes respectées
- Aucune librairie JS ajoutée.
- Aucun autre fichier touché (HeroSection, sticky hero, prerender, etc. inchangés).
- Aucune classe `.reveal*` modifiée.
- `overflow-x: hidden` mobile inchangé.

## Validation post-deploy
1. Ancres (chevron hero) : scroll fluide natif.
2. Navigation menu (route → route) : scroll en haut instantané.
3. Back/forward : restauration native inchangée.
4. Sticky hero sur `/` : se relâche normalement.
5. `prefers-reduced-motion: reduce` : scroll instantané partout.
6. Build : aucune erreur TS / runtime.