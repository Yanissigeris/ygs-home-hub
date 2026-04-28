## Surgical CSS edits — 2 components, 5 changes

All changes are CSS / className / inline-style only. No structural changes, no route/SEO/schema/heading-hierarchy changes. Only the two named files are touched.

Note: the user's message contained partially-rendered JSX (the `<style>` block in MOD A and the new `className` in MOD D were truncated by the chat renderer). I'll use the standard interpretation below — please confirm or correct before I implement.

---

### File 1 — `src/components/AboutSection.tsx`

**MOD A — Cormorant drop cap on the body paragraph**

1. On the existing body `<p>` (currently around line 83, the one with `whiteSpace: "pre-line"`), add `className="about-body-text"`. All inline styles preserved unchanged.

2. Immediately inside the `<section>` opening (before the radial-glow div / `.section-container`), inject a scoped `<style>` tag:

```tsx
<style>{`
  .about-body-text::first-letter {
    font-family: var(--serif);
    font-size: 4em;
    font-weight: 500;
    color: #BFA476;
    float: left;
    line-height: 0.9;
    padding: 0.05em 0.12em 0 0;
    margin-right: 0.04em;
  }
  @media (max-width: 640px) {
    .about-body-text::first-letter { font-size: 3.2em; }
  }
`}</style>
```

Effect: leading "C" (FR) / "R" (EN) becomes a ~4-line gold drop cap that floats text around it. The pull-quote and overline are untouched.

---

### File 2 — `src/components/AreasServicesSection.tsx`

**MOD B — TableRow padding + minHeight (line ~73)**

Replace the `<Link>` `style` inside `TableRow`:
- padding → `clamp(0.65rem, 1.2vw, 0.85rem) clamp(1.25rem, 2vw, 1.5rem)`
- borderBottom alpha → `0.08`
- minHeight → `44`
- add `transition: "background 200ms ease, box-shadow 200ms ease"`

**MOD C — TableRow hover gets 3px gold left accent (lines ~75-76)**

Replace the two handlers so onMouseEnter sets background `rgba(168,138,90,0.06)` AND `boxShadow: "inset 3px 0 0 var(--gold)"`, and onMouseLeave clears both.

**MOD D — Header spacing slightly tighter (line 98)**

Reduce header bottom margin from `mb-8 sm:mb-12` → `mb-6 sm:mb-8` (keeping `text-center max-w-[44rem] mx-auto`). This is my inferred value — the user's message truncated the new className. Confirm if a different value is intended.

**MOD E — "Voir tous les quartiers" link padding aligned (line 116)**

Replace its inline `style` padding to `clamp(0.75rem, 1.2vw, 0.95rem) clamp(1.25rem, 2vw, 1.5rem)`. Keep `background: "var(--gold3)"` and `minHeight: 44`. Hover handlers unchanged.

---

### What stays untouched

- AboutSection: pull-quote, overline, credentials, CTA link, image column, all motion/structure.
- AreasServicesSection: column headers, mobile tab switcher logic, all hrefs, the TableRow JSX body, gold divider, JSON-LD, prerender scripts, sitemap, robots, tailwind config.
- No changes to `src/index.css` or any other file.

### Post-change checks I'll run

1. Visual screenshot at desktop (1366px) and mobile (390px) of `/` and `/en`.
2. Confirm drop cap renders as gold serif on the first letter of the body paragraph in both languages.
3. Confirm AreasServices section is ~80–100px shorter and rows have 44px minimum tap target.
4. Hover one TableRow → 3px gold inset bar appears on the left.
5. Console clean.
