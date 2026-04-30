## Hero — Mobile vertical restructure (mobile only, <768px)

**File touched:** `src/components/HeroSection.tsx` only (full hero variant, lines 451-902). FR + EN auto-covered (single shared component).

**Desktop (≥768px):** ZERO changes. All current absolute positioning, gradients, portrait placement, and text column width stay byte-identical via `md:` Tailwind breakpoints and `(min-width: 768px)` media queries.

---

### Changes

#### 1. Section sizing — mobile becomes auto-height
- Currently the `<section>` enforces `minHeight: 100svh` for both mobile and desktop, which is what forces the portrait to be absolute-overlapping on mobile.
- Move the `100svh` min-height to a `md:` class so it only applies on desktop. On mobile the section grows to fit the 3 stacked blocks naturally.
- Apply the same `md:` gating to the inner text-column wrapper (`minHeight: 100svh` at line 576).

#### 2. Background layers — keep desktop, rescope to text block on mobile
- The bg image (line 462), poster (line 484), video (line 502) all use `absolute inset-0`. On mobile (auto-height section) `inset-0` will still cover the section — that's fine, the image/poster will tile across the new taller mobile section. We add `object-position: center top` on mobile via Tailwind responsive classes so the living-room frame stays anchored.
- Top header gradient (line 524): unchanged.
- Desktop overlays at z-[2] (lines 534-551): unchanged (already `hidden md:block`).
- **Replace the two mobile overlays** (lines 553-571 — the existing `md:hidden` left-to-right + main mobile gradients):
  - Remove them.
  - Add ONE new mobile-only top-to-bottom ink overlay positioned to cover only the text-block region (top of section down to where the portrait starts). Implementation: an `absolute left-0 right-0 top-0 md:hidden z-[2]` div with `bottom: auto` and a `height` that matches the text block — easiest is to make the text block itself `relative` and put this gradient as an absolute child of the text block instead of the section, so it auto-sizes.
  - Gradient spec: `linear-gradient(to bottom, rgba(23,48,59,0.85) 0%, rgba(23,48,59,0.70) 60%, rgba(23,48,59,0.40) 100%)`.

#### 3. Convert the inner column wrapper into a mobile vertical flex
- Current structure (lines 574-713): one `relative z-[3] flex flex-col` wrapper holding only the text. The portrait (lines 719-824) and trust strip (lines 841-899) are siblings positioned absolutely.
- New mobile behavior: turn the section into a normal vertical stack on mobile, while desktop keeps the absolute-positioning model.

Approach (no DOM reordering needed for SEO/desktop parity):
- **Block 1 (text):** keep current text wrapper. On mobile add `padding: 48px 24px` (py-12 px-6) and `position: relative` so the new ink gradient (point #2) can be its child. Desktop padding/positioning preserved via `md:` overrides.
- **Block 2 (portrait):** the existing mobile `<picture>` (lines 775-822) is `absolute bottom-0 left-50% maxHeight 60vh`. Wrap it (or change its classes) so on mobile it becomes `relative` (in normal flow), full-width, `max-h-[50vh]`, `object-cover object-top`, centered. Desktop `<picture>` (lines 726-767) keeps its `absolute` styles untouched.
  - Because the mobile `<picture>` element is a sibling of the text wrapper (not inside it), and the section is no longer `100svh` on mobile, switching it to `position: static / relative` will place it directly under the text wrapper in normal flow → exactly the stacked layout requested.
  - Remove `bottom-0 left-50% translate-x-50% absolute maxHeight 60vh` on mobile; replace with `relative w-full h-auto max-h-[50vh] mx-auto block`.
  - Keep the radial mask + drop-shadow for visual continuity.
  - Background behind the portrait: the section's bg `#17303B` already shows through (since the bg image only covers the section with `inset-0` and gets darkened). To guarantee a clean ink panel behind the portrait on mobile, add a mobile-only ink solid background to the portrait `<picture>` wrapper (`md:bg-transparent bg-[#17303B]`).
- **Block 3 (trust strip, lines 841-899):** keep desktop `absolute bottom-0`. On mobile change to `relative` (in normal flow) so it sits naturally after the portrait. Add `md:absolute relative` and remove `absolute` on mobile.
  - All inner content (credibility line, NAP, links, pointer-events) stays identical.

#### 4. Bottom mobile gradient (lines 826-835)
- This gradient currently darkens the bottom of the hero behind the trust strip. Since the trust strip now has its own opaque background and sits in normal flow on mobile, this overlay is redundant on mobile and can stay scoped to nothing (remove the `md:hidden` block, or keep but it'll have no visual impact). Remove for cleanliness.

#### 5. Eyebrow geo line — fix orphan separator
- Line 596: `{overline.replace(/[·•]/g, "  ·  ")}`. The Index pages pass `"GATINEAU · AYLMER · HULL · CHELSEA · CANTLEY · "` with a trailing `· `.
- Fix: trim trailing separator + spaces before rendering: `overline.replace(/[·•]\s*$/, "").replace(/[·•]/g, "  ·  ")`.
- Also add a small mobile font-size reduction on the eyebrow if needed (current `max(.6rem, .62rem)` is already tiny — trimming the orphan should be sufficient).
- No change to the source strings in `Index.tsx` / `IndexEn.tsx` (avoids touching SEO copy).

#### 6. Cleanup
- Remove the previous mobile portrait `maxHeight: 60vh` absolute logic (replaced by point #3).
- Remove obsolete mobile overlays from point #2.
- Scroll chevron (line 838): keep as-is; on mobile it now sits at the bottom of the (taller) section above the trust strip — its `bottom: 84px` may need to become `md:bottom-[84px] bottom-[120px]` so it clears the now in-flow trust strip. Verify and adjust if it overlaps.

---

### Preserved (critical)
- All text in DOM: eyebrow, H1 (both spans incl. "Votre courtier immobilier" / "en Outaouais"), strategy paragraph, bio paragraph, both CTAs.
- Brand colors, fonts, all link `href`s — untouched.
- VideoObject JSON-LD, SEO meta, sitemap, schema — untouched.
- WhatsApp button, sticky mobile CTA, cookie banner — untouched (separate components).
- Desktop layout pixel-for-pixel identical (all changes gated by `md:hidden` / mobile-only media).

### Verification checklist
- 375px: 3 distinct stacked blocks, no overflow, no orphan dot in eyebrow.
- 768px: clean transition into desktop horizontal layout.
- 1024px+: identical to current.
- H1 still contains both keyword spans in DOM.
- All CTAs / phone / email links remain clickable.
- Living-room background still visible behind text block (with new top-to-bottom ink wash).
