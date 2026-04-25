## Pass 1 — Surgical removal of conflicting JSON-LD blocks (homepage)

### Findings: where each block lives

All 4 blocks to remove are injected by a single file: **`public/jsonld-routes.js`** (loaded via `<script src="/jsonld-routes.js" defer>` in `index.html`).

| Block ID | Location | Action |
|---|---|---|
| `ygs-localbusiness-jsonld` | `public/jsonld-routes.js` line 11 (only injected when path is `""` or `"/en"` — homepage only) | **Remove** |
| `ygs-organization-jsonld` | `public/jsonld-routes.js` line 12 (injected on every route) | **Remove** |
| `ygs-faq-jsonld-pre` | `public/jsonld-routes.js` line 9 (injected on routes with FAQ data, including homepage `""` and `"/en"`) | **Remove** |
| `ygs-website-jsonld` (duplicate) | `public/jsonld-routes.js` line 13 (re-injects after the static one in `index.html` line 178) | **Remove duplicate from jsonld-routes.js** — keep the static one in `index.html` |

Blocks kept untouched:
- `ygs-jsonld-static` (RealEstateAgent) — `index.html`
- `ygs-person-jsonld` (Person) — `index.html`
- `ygs-website-jsonld` (WebSite) — `index.html` (the kept one)
- `ygs-faq-teaser-jsonld` (FAQPage) — injected at runtime by `src/components/HomeFAQTeaser.tsx`
- `ygs-jsonld-video` (VideoObject) — injected at runtime by `src/components/HeroSection.tsx`

### Cross-reference risk analysis

- The `@id` anchors `#localbusiness` and `#organization` are **not referenced anywhere else** in the codebase (verified with grep across `*.html`, `*.js`, `*.ts`, `*.tsx`, `*.mjs`).
- The kept `ygs-website-jsonld` in `index.html` has `@id: "https://yanisgauthier.com/#website"` and **does not reference** `#organization`, so removing the org block does not orphan any reference.
- The kept `ygs-jsonld-static` (RealEstateAgent) is self-contained and references only `#realestateagent`.
- The kept `ygs-person-jsonld` references `#realestateagent` (still present) — safe.
- **No risk** of orphaned references after removal.

### Scope of changes

**Important nuance vs the original spec:** The 4 blocks live in a shared file (`public/jsonld-routes.js`) but 3 of the 4 are *already homepage-only* by their own `if (p==="" || p==="/en")` guard or only fire when FAQ data exists. The `ygs-organization-jsonld` block is currently injected on every route, so removing it from the shared file removes it from every route. Per Pass 1's intent (eliminate conflicts with the static `RealEstateAgent` schema), this is the correct outcome — `Organization` is redundant with `RealEstateAgent` site-wide, not just on the homepage. Confirming this is acceptable; if you want to keep it on inner pages, say so and I will instead scope the removal to only homepage paths.

### Edits (single file)

**`public/jsonld-routes.js`** — remove these 4 statements only:
- Line 9: the `inj("ygs-faq-jsonld-pre", …)` call
- Line 11: the `if(p===""||p==="/en"){inj("ygs-localbusiness-jsonld", …)}` block
- Line 12: the `inj("ygs-organization-jsonld", …)` call
- Line 13: the `inj("ygs-website-jsonld", …)` call

Everything else in the file (breadcrumbs, neighborhood schema, FAQ data table, socials array, IIFE wrapper) stays as-is.

`index.html` is **not modified** — its `ygs-website-jsonld` (the kept one), `ygs-jsonld-static`, and `ygs-person-jsonld` remain untouched.

No component, page, CSS, image, or layout file is touched.

### Acceptance check after implementation

- Visual diff = 0 (no DOM/CSS/content change).
- Homepage head schemas remaining: RealEstateAgent, Person, WebSite, FAQPage (from `HomeFAQTeaser`), VideoObject (from `HeroSection`).
- No `LocalBusiness` or `Organization` standalone schema in any route.
- No duplicate `ygs-website-jsonld` script.
- Kept blocks unchanged → no new validation errors possible on them.