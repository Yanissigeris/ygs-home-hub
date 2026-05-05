## Sprint 6 — Footer Affiliations compliance

Single file touched: `src/components/SiteFooter.tsx`. No other files modified, no asset additions (the two official RE/MAX assets `src/assets/remax-logotype-black.png` and `src/assets/remax-balloon-official.png` already exist from Sprint 2).

### 6.1 — Imports
At the top of `SiteFooter.tsx`, add:
```ts
import remaxLogotypeBlack from "@/assets/remax-logotype-black.png";
import remaxBalloonOfficial from "@/assets/remax-balloon-official.png";
```

### 6.2 — Extend the `affiliationLogos` data structure
Make the entries support optional `caption` and a custom `content` renderer for the RE/MAX Direct tile (which is no longer a single `<img>`). Concretely, change shape from `{ src, alt, filter, href? }` to allow either:
- standard tiles: `{ src, alt, filter, caption? }`
- override tile: `{ custom: ReactNode, alt, href, caption? }` (used only for the new RE/MAX Direct tile)

Update entries:

1. **RE/MAX Direct tile** (replaces the current `logoRemaxDirect` entry):
   - `href: "https://www.remax-quebec.com"` (kept from Sprint 5.2)
   - `alt: "RE/MAX Direct Inc. — agence immobilière"`
   - `caption: "RE/MAX Direct Inc."`
   - `custom`: a small flex row containing
     - `<img src={remaxLogotypeBlack} alt="Logo RE/MAX" />` — height `~18px`, `w-auto`, no filter/invert
     - `<img src={remaxBalloonOfficial} alt="" aria-hidden />` — same `~18px` height, `w-auto`, no filter
     - `gap-1.5`, `items-center`
   - Remove the old `logoRemaxDirect` import (no longer used) — but leave the file on disk untouched.

2. **Temple de la Renommée tile** (existing `logoTemple` entry):
   - Add `caption: "RE/MAX, LLC, 2024"`
   - Keep existing `src`, `alt`, `filter: "brightness-0 invert"` unchanged.

3. All other tiles (`logoMW`, `logoSirvaBgrs`, `logoTranquillit`, `logoEnfantSoleil`) — **unchanged**, no caption.

### 6.3 — Update the render map (around line 167)
Each tile is currently a flex container holding a single `<img>`. Refactor to:
- Render either the entry's `custom` node OR the standard `<img>` as before.
- Below the inner content, when `caption` is present, render:
  ```tsx
  <p
    className="mt-1 text-center"
    style={{
      fontSize: "10px",
      lineHeight: 1.3,
      color: "rgba(255,255,255,.55)",
      fontWeight: 400,
    }}
  >
    {caption}
  </p>
  ```
- Switch the tile's flex direction to `flex-col` (so logo stacks above caption). For tiles without caption, `flex-col` is visually identical to current `items-center justify-center`.
- Bump `tileStyle.minHeight` from `44` to `auto` (or keep 44 but allow content to grow) so caption doesn't push the logo off — use `minHeight: 56` to keep visual rhythm with the captioned tiles, or simply remove the fixed minHeight and let padding handle it. Plan: keep `minHeight: 56` and `padding: ".5rem .75rem"`.

The existing `<a>` wrapper for tiles with `href` is preserved; the captioned, non-linked Temple tile renders inside a `<div>` as today.

### 6.4 — Result per tile

```text
[ RE/MAX logotype + balloon ]   ← link to remax-quebec.com
   RE/MAX Direct Inc.

[ MW logo ]                     (unchanged)

[ SIRVA·BGRS logo ]             (unchanged)

[ Crown — Temple de la Renommée ]
   RE/MAX, LLC, 2024

[ Tranquilli-T logo ]           (unchanged, no caption per Guide p.30)

[ Enfant Soleil logo ]          (unchanged)
```

### Out of scope / preserved
- All other footer sections (CTA, brand row, columns, popular links, agency block, copyright, legal mentions from Sprint 3) — untouched.
- No changes to `logo-remax-direct.webp` asset file (left in repo, just no longer imported).
- No changes outside `SiteFooter.tsx`.
- No JSON-LD, route, meta, or i18n string changes (caption strings are language-neutral brand names / legal qualifiers).

### Files touched
```text
edit  src/components/SiteFooter.tsx
```
