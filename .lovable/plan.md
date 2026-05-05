## Plan — RE/MAX compliance overhaul (5 sprints)

### Sprint 1 — Revert the utility bar
- **Delete** `src/components/RemaxUtilityBar.tsx`.
- **`src/components/SiteLayout.tsx`**: remove `import RemaxUtilityBar` and the `<RemaxUtilityBar />` element. Change the dark-gradient overlay's `top: var(--ygs-utility-bar-height, 44px)` back to `top: 0`.
- **`src/components/SiteHeader.tsx`**: change `top: "var(--ygs-utility-bar-height, 44px)"` back to `top: 0` in `headerStyle`.
- **`src/index.css`** (lines 8 + 12): remove the `--ygs-utility-bar-height` declarations from `:root` and from the mobile media query.
- **Keep** `src/assets/remax-logotype-black.png` and `src/assets/remax-balloon-official.png` (reused in Sprint 2).

### Sprint 2 — RE/MAX cream pill in `SiteHeader`
Add a cream pill (RE/MAX logotype + balloon) immediately to the right of the "Yanis Gauthier-Sigeris" name in all three header variants (desktop ≥md, tablet sm–md, mobile <sm).

- Import the two assets at the top of `SiteHeader.tsx`.
- Pill JSX: `inline-flex items-center gap-2 px-2.5 py-1 rounded-full`, `background: var(--ygs-cream, #F7F4EE)`, border `1px solid rgba(34,40,49,0.06)`, `role="img"` + `aria-label="Affilié RE/MAX Direct Inc."` (EN: `RE/MAX Direct Inc. affiliate`). Logotype `alt="Logo RE/MAX"`, balloon `alt=""` `aria-hidden`. No filter / invert.
- Sizing per breakpoint:
  - Desktop (~line 344, after the name `<span>`): logos 18 / 20 px, `px-2.5 py-1`.
  - Tablet (~line 388, inside the `<Link>` after the logo): logos 16 / 18 px, `px-2 py-0.5`.
  - Mobile (~line 426, after the name span): logos 14 / 16 px, `px-1.5 py-0.5`. Always render — never hide.
- Add `shrink-0` so the pill never collapses; keep the existing name `text-overflow: ellipsis` for layout safety.

### Sprint 3 — Footer agency block + RE/MAX Québec mention
In `src/components/SiteFooter.tsx`, replace the current single NAP `<p>` (line containing "819-210-3044 · yanis@martywaite.com · 216 chemin d'Aylmer …") with a 2-line block:

- **Line 1** (medium weight, same color as today): `RE/MAX Direct Inc. — Agence immobilière · 216 Chemin d'Aylmer, Gatineau, QC J9H 1A4` (EN: `RE/MAX Direct Inc. — Real estate agency · 216 Chemin d'Aylmer, Gatineau, QC J9H 1A4`).
- **Line 2** (regular): `Bureau : 819-684-0000  ·  Cellulaire : 819-210-3044  ·  yanis@martywaite.com`. Wrap each:
  - `tel:+18196840000`
  - `tel:+18192103044`
  - `mailto:yanis@martywaite.com`
  Links inherit color, no underline. EN labels: `Office:` / `Mobile:`.
- Below the copyright `<p>`, add a new `<p>` in `text-xs` matching the existing legal color: `Franchisé indépendant et autonome de RE/MAX Québec` (EN: `Independently owned and operated franchisee of RE/MAX Québec`).

### Sprint 4 — Reformat distinctions (every Hall of Fame mention compliant)

**4.1 Hero trust strip** (`src/components/HeroSection.tsx`):
- Lines ~837 + 1015 + 1037: replace `Hall of Fame RE/MAX` / `RE/MAX Hall of Fame` with `HALL OF FAME RE/MAX, LLC, 2024` (EN identical).
- Mobile shortened lines 1045/1047: change to `Hall of Fame 2024` (compact, but year carried; the full "RE/MAX, LLC" appears in the awards bar just below).

**4.2 StatsSection gold tiles** (`src/components/StatsSection.tsx` lines 6 + 12 AND HeroSection `statsFr` / `statsEn` lines 91–100, kept in sync):
- Adopt **Option B (single-line tile)** to match the existing tile typography (large serif `value`, tiny uppercase `label`):
  - `value: "Hall of Fame 2024"` (FR + EN identical)
  - `label: "RE/MAX, LLC"` (FR + EN identical)
- Keep `ghost: "H"`, no other typography or layout changes. The serif value already wraps gracefully at the existing `clamp()` font size; if "Hall of Fame 2024" wraps to two lines on mobile that's acceptable and matches the editorial tone.

**4.3 AwardsMarquee** (`src/components/AwardsMarquee.tsx`):
- Replace the `items` array with the 4 mandated mentions, in order:
  1. `Hall of Fame, RE/MAX, LLC, 2024`
  2. `Club Platine, RE/MAX Québec, 2021`
  3. `Club 100% OR, RE/MAX Québec, 2020, 2022-2025`
  4. `Club 100%, RE/MAX Québec, 2019`
- Keep the existing uppercase, gold bullet, marquee animation, font sizing, and duplicated set for seamless scroll.
- Responsive: marquee already scrolls horizontally on all viewports — meets the "1 mention per line on mobile" intent via continuous scroll, the most elegant fit with the existing design.

### Sprint 5 — Compliance touch-ups

**5.1 "Courtier immobilier" visible on `/`**:
- Wrap the name + a new title `<span>` in a flex column inside the existing `<Link>`:
  - Desktop header (`SiteHeader.tsx` ~line 344): name + title stacked.
  - Mobile header (~line 426): same, smaller.
- Title text: `Courtier immobilier` (EN: `Real estate broker`).
- Style: `font-size: 10px` desktop / `9px` mobile, `letter-spacing: 0.08em`, `text-transform: uppercase`, `color: rgba(255,255,255,0.7)`, `font-family: var(--sans)`. No change to H1/H2/H3.

**5.2 RE/MAX Québec link from footer**:
- In `SiteFooter.tsx` `affiliationLogos` map (around line 167), wrap the first logo's `<img>` (the `logoRemaxDirect` tile) in `<a href="https://www.remax-quebec.com" target="_blank" rel="noopener noreferrer" aria-label="Visiter remax-quebec.com">` while keeping the tile's existing background, border, padding, and hover styling. Implementation: add an optional `href` field on the logo entry and conditionally wrap.

### Out of scope / preserved
- HeroSection portrait, video, CTAs, NAP at hero bottom — untouched.
- `Index.tsx`, `PathwaySection`, `FeaturedProperties`, `ValuationForm` — untouched.
- All H1/H2/H3, meta tags, JSON-LD, routes, sitemap — untouched.
- YGS color tokens — untouched.

### Files touched
```text
delete  src/components/RemaxUtilityBar.tsx
edit    src/components/SiteLayout.tsx
edit    src/components/SiteHeader.tsx
edit    src/components/SiteFooter.tsx
edit    src/components/HeroSection.tsx
edit    src/components/StatsSection.tsx
edit    src/components/AwardsMarquee.tsx
edit    src/index.css
keep    src/assets/remax-logotype-black.png
keep    src/assets/remax-balloon-official.png
```
