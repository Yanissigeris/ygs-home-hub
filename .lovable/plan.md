## Goal
Improve readability of `AboutSection` text for older readers (45+). Strictly typography-size and body-opacity tweaks only — no layout, color tokens, fonts, structure, or content changes. Affects both FR and EN since they share the same JSX.

## File
`src/components/AboutSection.tsx` — the only file modified.

## Exact changes (4 inline-style values)

1. **Body paragraph** (`<p className="about-body-text" …>`)
   - `fontSize: "14px"` → `fontSize: "clamp(16px, 1.05vw, 17px)"`
   - `color: "rgba(247,244,238,0.70)"` → `color: "rgba(247,244,238,0.92)"`
   - Keep `lineHeight: 1.8`, fontFamily, fontWeight, marginBottom, whiteSpace, className unchanged.

2. **Overline** (`<p>` containing `{c.overline}`)
   - `fontSize: "11px"` → `fontSize: "12px"`
   - Everything else unchanged.

3. **Credentials** (`<p>` containing `{c.credentials}`)
   - `fontSize: "11px"` → `fontSize: "12px"`
   - Everything else unchanged.

4. **CTA Link** (`<Link>` containing `{c.cta}`)
   - `fontSize: "13px"` → `fontSize: "15px"`
   - Everything else (minHeight 44, hover handlers, etc.) unchanged.

## Strictly NOT touched
- Pull quote (`blockquote`) — already uses `clamp()`.
- Drop cap CSS (`::first-letter`) — scales via `em` units automatically.
- JSX structure, imports, Tailwind classes, grid layout, photo, overlays, gradients, glow.
- `contentFr` / `contentEn` text.
- Any SEO, JSON-LD, sitemap, robots, llms, or config files.
- No new imports, hooks, or logic.

## Verification (visual, post-implementation)
- Desktop (≥1024px): body renders ~17px, clearly more legible.
- Mobile (375–573px): body at 16px; drop cap (~4em) scales to ~64–68px and stays gold.
- Pull quote, photo, gradients, glow: pixel-identical.
- FR `/` and EN `/en`: identical typography, content untouched.
