## Corrections sur la page /proprietes (PropertiesPage.tsx)

### Modification 1 — Ajouter Chelsea au tableau `sectors`

Insérer la carte Chelsea en position 2 (après Aylmer) pour passer de 5 à 6 cartes et équilibrer la grille 2×3 :

```typescript
const sectors = [
  { name: "Aylmer", href: "/aylmer", detail: "Lac, quartiers établis, qualité de vie" },
  { name: "Chelsea", href: "/chelsea", detail: "Parc de la Gatineau, tranquillité, bilingue" },
  { name: "Plateau", href: "/plateau", detail: "Familles, développements récents" },
  { name: "Hull", href: "/hull", detail: "Urbain, condos, plex, proximité Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Espace, nature, prix accessibles" },
  { name: "Gatineau centre", href: "/gatineau", detail: "Résidentiel, services, banlieue" },
];
```

### Modification 2 — Corriger la signature line du CTASection final

Remplacer la prop `trustLine` :

```jsx
trustLine="Je vous donne les chiffres et les options, vous décidez."
```

### Hors scope
- Aucun autre tableau modifié (`profileCards`, `faq`, `related`)
- Aucun autre composant modifié (`HeroSection`, `ContentBlock`, `SectionHeading`, etc.)
- Le `trustLine` du `HeroSection` reste "Accompagnement stratégique."
- Les grilles des sections "Mes propriétés à vendre" et "Propriétés vendues" restent inchangées.