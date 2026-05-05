## Sprint A — RE/MAX Utility Bar

### 1. Copy uploaded brand assets to `src/assets/`
- `user-uploads://remax_logotype_noir-2.png` → `src/assets/remax-logotype-black.png`
- `user-uploads://remax_ballon-3.png` → `src/assets/remax-balloon-official.png`

Originals only — no recoloring, no filters.

### 2. Create `src/components/RemaxUtilityBar.tsx`

Top-of-page banner, normal flow, full-width:
- Outer: `background: #F7F4EE` (cream), `border-bottom: 1px solid var(--ygs-border)`, `min-height: 44px` (md+), auto on mobile.
- Inner: `section-container` with `flex flex-col gap-1.5 py-2 md:py-0 md:flex-row md:items-center md:justify-between md:h-11`.
- Left: `<div class="flex items-center gap-3">` with two `<img>` at `height={28} width="auto"`:
  1. Black RE/MAX wordmark, `alt="RE/MAX"`
  2. Color balloon, `alt=""` `aria-hidden`
  - No `filter`, no `invert`, no `transform`.
- Right: text block, DM Sans, `text-xs md:text-sm`, color `#222831`:
  - Mobile: 2 lines (legal name on line 1; address + phone on line 2).
  - Desktop: single line joined by `·`.
  - Phone wrapped in `<a href="tel:+18196840000">819-684-0000</a>`.
- Static markup (prerender-friendly), no client state.

### 3. Wire into `src/components/SiteLayout.tsx`
- Import and render `<RemaxUtilityBar />` as the **first child** of the root `<div>`, before the dark-gradient overlay and before `<SiteHeader />`.

### 4. Update `src/components/SiteHeader.tsx`
- Change `top: 0` → `top: var(--ygs-utility-bar-height, 44px)` in `headerStyle`.
- **Remove the RE/MAX balloon `<img>`** currently rendered in the desktop header (lines ~347–358 — the divider+balloon block to the right of the name). Also remove the divider span that immediately precedes it.
- Check the tablet (sm–md) and mobile sections (lines 398+) for the same balloon and remove it there too if present.
- Keep the YGS logo, name, nav, language switch, and CTA button untouched.

### 5. Update `src/index.css`
Add to `:root`:
```css
:root { --ygs-utility-bar-height: 44px; }
@media (max-width: 767.98px) {
  :root { --ygs-utility-bar-height: 68px; }
}
```

### 6. Update the dark-gradient overlay in `SiteLayout.tsx`
The overlay `<div>` currently positioned `top: 0` (the one with the dark gradient behind the fixed header) → change to `top: var(--ygs-utility-bar-height, 44px)` so it sits under the cream bar.

### Out of scope
- No changes to `HeroSection`, `Index.tsx`, hero portrait, or LCP work.
- No FR/EN translation of the agency line (legal name + address are identical).
- Bilingual parity: identical bar on `/` and `/en/` (rendered globally via `SiteLayout`).

### Verification
- Cream bar visible at top of every page; logos render in original colors.
- Fixed YGS header now starts 44px (desktop) / 68px (mobile) below top.
- `tel:` link works on mobile.
- Above-the-fold: utility bar fully within first 400px (Guide p.41).
