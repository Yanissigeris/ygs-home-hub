# Add RE/MAX Pin Logo to Header

## Asset
Copy `user-uploads://remax_ballon_2.png` → `src/assets/remax-balloon.png`. Import in `SiteHeader.tsx` as ES6 module.

## Placement strategy
The header is permanently transparent over a dark hero with white text, so the colorful pin will pop nicely. To keep the existing YGS brand prominence, the RE/MAX pin sits **after** the YGS logo + "Yanis Gauthier-Sigeris" name, separated by a thin vertical divider — signaling brokerage affiliation, the standard editorial pattern for agent sites.

```
[YGS logo] | Yanis Gauthier-Sigeris  | [pin]    ...nav...    [lang] [CTA]
```

### Sizes (proportional to existing logo height)
- **Desktop** (`md+`): pin height ~28–32px, divider already exists, add 2nd divider before pin
- **Tablet** (`sm–md`): pin height ~26–30px, after the YGS logo (no name shown on tablet)
- **Mobile** (`<sm`): pin height ~22px, placed to the right of the inline name; only shown if it doesn't crowd the hamburger. If space is tight (very narrow phones), name takes priority — pin can sit between logo and name at ~20px.

The pin is `loading="eager"` `decoding="async"`, no filter (full color), `alt="RE/MAX courtier immobilier"` (FR) / `alt="RE/MAX real estate broker"` (EN) using `lang` from `useLanguage()`.

## Files changed
- **new**: `src/assets/remax-balloon.png`
- **edit**: `src/components/SiteHeader.tsx` — import asset, render `<img>` in all three layout blocks (desktop / tablet / mobile) with appropriate sizing and a subtle vertical divider before it. Localized alt text.

## Out of scope
No changes to footer, no nav changes, no CSS variables, no other pages. Pure visual addition in header only.
