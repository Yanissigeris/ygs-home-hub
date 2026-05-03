# SEO surgery on Hero (rich variant only)

Single-file edit: `src/components/HeroSection.tsx`. No other files touched.

## Goal

- Make the homepage have exactly **one `<h1>`**, containing SEO-optimized copy.
- That `<h1>` is the existing gold "cities" eyebrow, rewritten as `Courtier immobilier · Gatineau · Aylmer · Hull · Outaouais` (FR) / `Real estate broker · Gatineau · Aylmer · Hull · Outaouais` (EN).
- Remove the decorative slogan "Les chiffres. / Les options. / Vous décidez." (and its English equivalent) from the DOM entirely.

## Scope

Only the **rich** variant block at lines ~671–745 of `HeroSection.tsx`. The **compact** variant (lines 471–525) and its `<h1>{title}</h1>` stay untouched. All props, JSON-LD (VideoObject), animations, conditional logic, subtitles, and CTAs remain as-is.

## Changes

### Change 1 — lines 671–685 (cities eyebrow → h1)

Replace the `<p>` (with inner `<span>{cities.join(" · ")}</span>`) by an `<h1>` with hardcoded bilingual SEO copy driven by the existing `lang` variable (declared line 189 via `useLanguage()`).

- Tag: `<p>` → `<h1>`
- Drop `whitespace-nowrap` so it can wrap on very narrow viewports
- Drop the inner `<span>` wrapper
- Replace `{cities.join(" · ")}` with:
  - FR: `"Courtier immobilier · Gatineau · Aylmer · Hull · Outaouais"`
  - EN: `"Real estate broker · Gatineau · Aylmer · Hull · Outaouais"`
- Add `margin: 0` and `lineHeight: 1.4` for safe wrapping

The `: overline ? (...)` fallback branch is preserved unchanged.

### Change 2 — lines 700–745 (delete slogan h1)

Delete the entire `<h1 className="hero-fade-in" ...>` block that renders the three italic/regular gold/white spans. Also remove the blank line immediately following so the subsequent `<p>` subtitle (mobile-only `mt-4 sm:mt-6 block md:hidden ...`) sits cleanly after the new `<h1>` from Change 1.

## Preservations (explicitly untouched)

- Compact variant `<h1>{title}</h1>` (lines 471–525)
- All `<p>` subtitle/description blocks after the deleted slogan
- `hero-fade-in` animation class
- Outer conditional `{(cities && cities.length > 0) ? ... : overline ? ... : null}`
- VideoObject JSON-LD (lines ~380–400) — still uses `title` / `subtitle` props
- All other components, schemas, meta, canonical, sitemap, hreflang
- Props `title`, `subtitle`, `subtitleShort`, `cities` remain in signature (used elsewhere and by compact variant)
- No edits to `src/pages/Index.tsx`, `src/pages/en/IndexEn.tsx`, `index.html`, `PageMeta.tsx`, routing, or URLs

## Expected results

- Homepage `/` and `/en` each render exactly **one** `<h1>` in the DOM.
- FR `<h1>` text: `COURTIER IMMOBILIER · GATINEAU · AYLMER · HULL · OUTAOUAIS` (uppercase via CSS), gold `#A88A5A`, top of hero.
- EN `<h1>` text: `REAL ESTATE BROKER · GATINEAU · AYLMER · HULL · OUTAOUAIS`.
- Slogan strings absent from the rendered hero in both languages.
- Visual hierarchy intact: small gold eyebrow (now h1) → white subtitle (mobile) → description → CTAs. Desktop loses the large serif slogan; subtitle/description/CTAs remain in place.
- Build passes; no TS or React warnings introduced.
