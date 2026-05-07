## Objectif
Retirer l'effet flou hérité (text-shadow) sur le contenu du menu mobile drawer, sans toucher au header ni au reste.

## Fichier modifié (1)

### `src/components/MobileNavDrawer.tsx`
Dans le `motion.div` principal du drawer (l'élément avec `id="mobile-navigation"`), ajouter `textShadow: "none"` à l'objet `style`.

Avant :
```tsx
style={{
  maxHeight: "calc(100dvh - 80px)",
  borderTop: "1px solid var(--border)",
  background: "var(--cream)",
  borderBottom: "1px solid var(--border)",
}}
```

Après :
```tsx
style={{
  maxHeight: "calc(100dvh - 80px)",
  borderTop: "1px solid var(--border)",
  background: "var(--cream)",
  borderBottom: "1px solid var(--border)",
  textShadow: "none",
}}
```

## Strictement non touché
- Header.tsx (text-shadow sur "Yanis Gauthier-Sigeris" préservé)
- HeroSection.tsx, AboutSection.tsx, autres composants
- Sous-composant `MobileNavGroup` et ses styles
- Animations framer-motion (initial/animate/exit/transition)
- className, imports, hooks, logique
- maxHeight (`calc(100dvh - 80px)` inchangé)
- SEO/JSON-LD/meta/robots/sitemap/llms

## Vérification
- Mobile, top of page : menu ouvert → "Évaluation gratuite" et liens en texte net, sans halo flou
- Animation slide-in, fond cream, accordion, language switch : inchangés
- Header : nom "Yanis Gauthier-Sigeris" garde son text-shadow
- Desktop : aucun changement (drawer caché)
- FR/EN : parité automatique via composant partagé
