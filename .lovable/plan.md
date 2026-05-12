## Objectif
Améliorer la lisibilité de 3 logos dans le bloc "AFFILIATIONS & RECONNAISSANCES" du footer (`src/components/SiteFooter.tsx`).

## Modifications dans le tableau `affiliationLogos`

**1. RE/MAX** (entrée `custom`) — ajouter un wrapper cream :
```jsx
<div className="flex items-center gap-1.5" style={{ background: "var(--cream)", padding: "8px 12px", borderRadius: 3 }}>
```

**2. Marty Waite** — `filter: "brightness-[1.6]"` → `filter: "brightness-0 invert"`

**3. Tranquilli-T** — `filter: "brightness-[1.5]"` → `filter: "brightness-0 invert"`

## Hors scope (intouchable)
- Autres entrées : SIRVA, Temple/Trophy, Enfant Soleil
- `tileStyle` (wrapper externe avec `rgba(255,255,255,.04)`)
- Tous les attributs alt/width/height/loading/decoding/caption/href
- Le reste du composant (CTA, brand row, columns, popular links, badge, NAP, copyright)
- Aucun autre fichier

## Validation
Footer → bloc Affiliations : RE/MAX sur sceau cream, MW et Tranquilli-T en blanc pur, les 3 autres logos inchangés.
