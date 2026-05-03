# Premium Hero Refinement (FR + EN, Desktop + Mobile)

Seven coordinated edits across exactly **3 files**. No CSS, schema, SEO meta, OG, hreflang, canonical, routing, sitemap, robots, or any other component touched. Compact-hero variant and the unreachable mobile-shortened credibility block (lines 1006–1012) will not be modified.

All "hide on mobile" behavior uses **Tailwind utility classes only** (`hidden`, `md:block`). Elements remain in the rendered DOM at every viewport — crawlers see all content.

---

## File 1 — `src/pages/Index.tsx` (FR home)

In `<HeroSection>` (lines ~45–47), change 3 props only:

- `title`: `"Votre courtier immobilier à Gatineau — Outaouais"` → `"Votre courtier immobilier en Outaouais"`
- `subtitle`: → `"Stratégie claire pour vendre, acheter ou investir."`
- `subtitleShort`: → `"Stratégie claire pour vendre, acheter ou investir."`

All other props unchanged.

## File 2 — `src/pages/en/IndexEn.tsx` (EN home)

In `<HeroSection>` (lines ~46–48), change 3 props only:

- `title`: `"Your real estate broker in Gatineau — Outaouais"` → `"Your real estate broker in Outaouais"`
- `subtitle`: → `"Clear strategy to sell, buy, or invest."`
- `subtitleShort`: → `"Clear strategy to sell, buy, or invest."`

All other props unchanged.

## File 3 — `src/components/HeroSection.tsx` (7 edits, main render path only)

- **3A — Add `IconHome` SVG** (after line 23, before `const Calendar = IconCalendar;`): inline SVG component matching the existing IconCalendar/IconStar/IconTrophy pattern.
- **3B — Demote eyebrow `<h1>` → `<p>`** (lines 672–688): change opening/closing tag, all inline styles preserved.
- **3F — Hide eyebrow on mobile** (combined with 3B): add `hidden md:block` to the eyebrow className. Final className: `"hero-eyebrow hero-fade-in mb-3 sm:mb-6 uppercase font-semibold hidden md:block"`. Element stays in DOM at all viewports.
- **3C — Insert new display `<h1>` + delete redundant credentials `<p>`**:
  - Insert new Cormorant Garamond `<h1>` (rendering `{title}`) immediately after the eyebrow `</p>` and before `) : overline ? (`. No responsive hide class — visible at all viewports.
  - Delete the entire redundant `<p>` block at lines 733–747 (the one containing "Yanis Gauthier-Sigeris … 9 ans … 300 transactions").
- **3D — Rebuild desktop trust strip as 4 items with middots** (lines 967–1004): replace FR/EN ternary with new 4-item structure (Calendar / Home / Star / Trophy), `·` separators (`mx-2 opacity-50`), Star item wrapped in `<a href="#avis">` for reviews link. Adds "300+ transactions" with new IconHome.
- **3E — Allow desktop trust strip wrap at md** (line 956): on the inner wrapper div, change `md:whitespace-nowrap` → `lg:whitespace-nowrap` and `md:[word-break:normal]` → `lg:[word-break:normal]`. No other classes change.
- **3G — Tighten mobile trust strip to 2 items** (lines 803–811): delete the trailing separator `<span aria-hidden="true">·</span>` and `<span>5★ Google</span>`. Keep "9 ans / 9 years" + middot + "Hall of Fame RE/MAX". Parent div and styles unchanged.

---

## SEO / GEO / AI search preservation

Every key phrase remains crawlable on the page:

- **Gatineau / Aylmer / Hull**: hidden eyebrow (still in DOM), JSON-LD address + areaServed, mobile bottom contact, other components
- **Outaouais**: new visible H1 (mobile + desktop), eyebrow, JSON-LD
- **9 ans / 9 years**: desktop + mobile trust strips, JSON-LD
- **Hall of Fame RE/MAX**: desktop + mobile trust strips, JSON-LD award
- **300+ transactions**: NEW desktop trust strip, ValuationForm, blog bios
- **5★ Google & Facebook**: kept in desktop trust strip
- **Yanis Gauthier-Sigeris / courtier immobilier RE/MAX**: JSON-LD, OG, AboutSection, footer, hidden eyebrow

## Out of scope (not touched)

Compact-hero variant (472–522), subtitle `<p>` blocks (704–731), CTA block (749–793), mobile-shortened credibility (1006–1012), mobile portrait `<picture>`, gradients, NAP `<address>`, mobile bottom contact, video code, `src/index.css`, `index.html` JSON-LD, Schema.org, SEO/OG/hreflang/canonical, routing, sitemap, robots.txt.
