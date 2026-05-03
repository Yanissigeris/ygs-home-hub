# Hero Refinement: Editorial Italic + Dramatic Reveal + Softer Trust Strip

Three coordinated refinements to elevate the home page hero. Touches exactly **2 files**.

## Files modified
1. `src/index.css` — add 1 new keyframe + utility class (sibling to existing `hero-fade-in`)
2. `src/components/HeroSection.tsx` — 3 surgical edits

---

## File 1: `src/index.css`

Insert immediately after the existing `hero-fade-in` reduced-motion block (line 598). The existing `hero-fade-in` keyframe and class are NOT modified.

```css
/* Hero H1 dramatic reveal — slower + larger translate for editorial moment */
@keyframes hero-h1-reveal {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-h1-reveal {
  opacity: 0;
  animation: hero-h1-reveal 0.85s cubic-bezier(.22,.61,.36,1) forwards;
}
@media (prefers-reduced-motion: reduce) {
  .hero-h1-reveal { animation: none; opacity: 1; transform: none; }
}
```

---

## File 2: `src/components/HeroSection.tsx`

### Edit 2A — H1 className swap + italic `<em>` on "Outaouais"

On the new display H1 (~line 695):
- Change `className="hero-fade-in"` → `className="hero-h1-reveal"`
- Replace child `{title}` with regex-capture split that wraps every "Outaouais" occurrence in `<em>` with **both** `fontStyle: "italic"` and `fontWeight: 300` (lighter Cormorant Garamond italic 300 variant, already loaded):

```tsx
{title.split(/(Outaouais)/).map((part, i) =>
  part === "Outaouais" ? (
    <em key={i} style={{ fontStyle: "italic", fontWeight: 300 }}>{part}</em>
  ) : (
    <React.Fragment key={i}>{part}</React.Fragment>
  )
)}
```

Capture group preserves "Outaouais" in the array. Handles 0/1/many occurrences. Works identically in FR + EN (same spelling).

### Edit 2B — Desktop trust strip de-emphasis (~line 974, 976)

Two inline style values only:
- `color: "rgba(255,255,255,0.75)"` → `color: "rgba(255,255,255,0.62)"`
- `letterSpacing: "0.1em"` → `letterSpacing: "0.14em"`

`fontSize` and all other styles unchanged.

### Edit 2C — Eyebrow margin breathing room (~line 679)

Change className `mb-3 sm:mb-6` → `mb-5 sm:mb-8`. All other classes preserved in same order:
`hero-eyebrow hero-fade-in mb-5 sm:mb-8 uppercase font-semibold hidden md:block`

---

## Out of scope (will NOT touch)
- Existing `hero-fade-in` keyframe/class
- Compact-hero variant
- `src/pages/Index.tsx`, `src/pages/en/IndexEn.tsx`
- SEO meta, JSON-LD, schema, OG, hreflang, canonical, sitemap, robots
- Subtitles, CTAs, mobile trust strip, NAP, gradients, video, mobile portrait, mobile bottom contact

## SEO/GEO/AI search
Zero impact. `<em>` is semantic; "Outaouais" text content preserved identically. No keywords moved or lost.

## Reduced motion
New `hero-h1-reveal` includes `prefers-reduced-motion: reduce` guard mirroring existing pattern — H1 appears immediately at full opacity with no transform.
