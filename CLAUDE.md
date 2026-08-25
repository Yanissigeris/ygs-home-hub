# CLAUDE.md

Guidance for AI assistants working in this repository.

## What this is

Marketing site for **Yanis Gauthier-Sigeris (YGS)**, a RE/MAX real estate broker in the
Outaouais region (Gatineau, Hull, Aylmer, Plateau, Chelsea…). Production domain:
**https://yanisgauthier.com**.

It is a **bilingual (FR/EN) React SPA that is statically prerendered at build time**. SEO is
the product: nearly every architectural decision here exists to serve unique, crawlable HTML
per route. Treat the SEO/prerender pipeline as load-bearing — breaking it fails CI and the
Netlify build.

Site content is written in **Canadian French first**, with a hand-maintained English
counterpart for most routes. Code, comments and commit messages are mixed FR/EN; match the
file you're editing.

## Stack

| Layer | Choice |
|---|---|
| Build | Vite 5, `@vitejs/plugin-react-swc`, TypeScript 5 |
| UI | React 18, React Router 6 (`BrowserRouter`), Tailwind CSS 3, shadcn/ui (Radix) |
| Backend | Supabase (Lovable Cloud) — Edge Functions + Postgres |
| Hosting | Netlify (static `dist/`, no edge functions in the request path) |
| Tests | Vitest + Testing Library (unit), Playwright (E2E), axe-core (a11y), Lighthouse CI |
| Analytics | GA4 (`G-P4Y8089EGB`) with Consent Mode v2 |

`node_modules/` is not checked in — run `npm ci` (or `npm install`) first. Node 20+ is what CI
and Netlify use.

## Commands

```bash
npm run dev              # Vite dev server on http://localhost:8080
npm run build            # vite build → prerender → audit-prerender → audit-headings → audit-hreflang
SKIP_PUPPETEER=1 npm run build   # much faster: meta-only prerender, skips the Puppeteer DOM pass
npm run lint             # ESLint (flat config)
npm run test             # Vitest, single run
npm run test:watch       # Vitest watch
npm run preview          # Serve dist/

# Audits standalone (need a dist/ built first)
npm run audit:prerender  # every page's #root has ≥5 KB of real HTML
npm run audit:headings   # exactly one <h1>, no skipped levels (auto-skipped when NETLIFY=true)
npm run audit:hreflang   # exactly one fr-CA / en-CA / x-default link per page
node scripts/audit-seo.mjs   # title/description/canonical presence + length (runs in CI)

npx playwright test      # E2E — see caveat below
node scripts/a11y-audit.mjs  # axe-core sweep over a deployed URL
```

**Package manager:** `package-lock.json` is the source of truth (Netlify and CI run `npm ci`).
`bun.lock`/`bun.lockb` are Lovable leftovers — do not regenerate them, and do not add
dependencies with bun. There is a `Fix lockfile` GitHub Action (`workflow_dispatch`) that
regenerates `package-lock.json` if it drifts.

**Playwright caveat:** `playwright.config.ts` has `baseURL` pointed at a **Lovable preview
URL**, not localhost, and pins `executablePath: /bin/chromium`. E2E specs therefore test a
deployed build, not your working tree. Run a local server and override `baseURL` if you need
to test local changes.

## Repository map

```
src/
  App.tsx                  # ALL routes; FR at /, EN under /en/. Also the hero-preload logic.
  main.tsx                 # createRoot (not hydrateRoot — see prerender notes)
  index.css                # design tokens (HSL CSS vars) + global classes like .section-container
  pages/                   # 63 FR pages
  pages/en/                # 60 EN pages, suffixed *PageEn.tsx
  components/              # shared sections (HeroSection, FormSection, CTASection, FAQSection…)
  components/ui/           # shadcn/ui primitives — generated; avoid hand-editing
  data/                    # static content: blog posts, properties, reviews, nav, breadcrumbs
  contexts/LanguageContext.tsx   # lang derived from pathname.startsWith("/en")
  hooks/                   # useFormSubmit, usePageView, useHeadingHierarchyGuard, use-mobile…
  integrations/supabase/   # generated client + Database types — do not hand-edit
  lib/                     # analytics (GA4), a11y labels, url-utils, avatar, mcp tools
  test/, components/__tests__/   # Vitest specs
scripts/                   # the SEO/prerender pipeline (see below)
supabase/functions/        # Deno edge functions: send-email, generate-image, mcp
supabase/migrations/       # SQL migrations
e2e/                       # Playwright specs
public/_redirects          # Netlify 301s + admin SPA fallback. No global SPA fallback.
netlify.toml               # build command, cache headers, CSP and security headers
index.html                 # static <head>: fonts, GA4 consent bootstrap, site-wide JSON-LD
```

## The build pipeline (read before touching anything SEO-related)

`npm run build` runs, in order:

1. **`vite build`** — plus an inline `htmlOptimizePlugin` in `vite.config.ts` that injects
   conditional LCP image preloads, makes the CSS non-render-blocking, and inlines critical CSS.
   `manualChunks` splits supabase, framer-motion, radix, blog data, etc.
2. **`scripts/prerender.mjs`** — for every route in the SEO map, writes
   `dist/<route>/index.html` with route-specific `<title>`, description, OG/Twitter tags,
   canonical, and `fr-CA`/`en-CA`/`x-default` hreflangs. Also writes `dist/sitemap.xml`
   (with `<lastmod>` derived from git history per route) and injects FAQPage JSON-LD.
   Then, unless `SKIP_PUPPETEER=1`, it serves `dist/` with sirv and uses Puppeteer to render
   each route, writing the real DOM back into the empty `<div id="root">`.
3. **`audit-prerender.mjs`**, **`audit-headings.mjs`**, **`audit-hreflang.mjs`** — each exits 1
   on violation, failing the build.

Notes that matter:

- The app uses `createRoot`, **not** `hydrateRoot`. Prerendered HTML is a
  crawler/paint fallback that React re-renders over. Hydration mismatches are silent by design.
- `audit-headings.mjs` self-skips when `NETLIFY=true`.
- Meta tags are written **twice**: at build time by `prerender.mjs`, and at runtime by
  `<PageMeta>`. Both must agree, or the crawler and the user see different pages.

### Source-of-truth files that must stay in sync

- `scripts/seo-routes.mjs` — `SEO_ROUTES` map (route → title/description/ogImage/lastmod),
  `SITE_URL`, `SITE_LAST_UPDATE`. Blog routes are **not** listed; they are appended by
  `getAllSeoRoutes()` from `blog-extractor.mjs`.
- `src/components/LangMeta.tsx` — `frToEn` map (runtime hreflang; `enToFr` is derived).
- `scripts/prerender.mjs` — its own `frToEn` map (build-time hreflang). **This duplicates
  LangMeta's map; update both.**
- `src/data/breadcrumbs.ts` — `breadcrumbMap`, used by both `BreadcrumbJsonLd` and
  `VisibleBreadcrumb`.
- `src/data/navigation.ts` / `navigation-en.ts` — header/footer nav.

## Adding a route — checklist

1. Create `src/pages/FooPage.tsx` and, if translated, `src/pages/en/FooPageEn.tsx`.
2. Register both in `src/App.tsx` (`React.lazy` + a `<Route>` inside the `<SiteLayout />`
   route). Only `Index` is eagerly imported.
3. Add both paths to `SEO_ROUTES` in `scripts/seo-routes.mjs` (title ≤ 60 chars,
   description ≤ 160).
4. Add the FR→EN pair to `frToEn` in **both** `src/components/LangMeta.tsx` and
   `scripts/prerender.mjs`. If a route has no counterpart, leave it out — LangMeta
   deliberately emits no hreflang rather than a broken one.
5. Add a `breadcrumbMap` entry in `src/data/breadcrumbs.ts`.
6. Add nav/footer links in `src/data/navigation*.ts` if the page should be discoverable.
7. In the page component, render `<PageMeta title description ogImage />` and the relevant
   JSON-LD component (`ServiceJsonLd`, `NeighborhoodJsonLd`, `HowToJsonLd`, `FAQSection`…).
8. Run `SKIP_PUPPETEER=1 npm run build` and confirm the three audits pass.

## Conventions

**Routing & URLs**
- Canonical URLs carry a **trailing slash**. Internal `<Link to>`/`href` values point at the
  slashed form (`/hull/`), normalised via `withTrailingSlash` in `src/lib/url-utils.ts`.
- FR slugs are keyword-rich French (`/vendre-ma-maison-gatineau`); EN slugs are short English
  under `/en/` (`/en/sell`). They are not mechanical translations — keep the existing map.
- Legacy/guessable URLs are 301'd in `public/_redirects`, not in React Router. There is no
  global SPA fallback: unknown URLs get Netlify's `public/404.html` with a real 404.

**Meta / SEO components**
- Prefer `<PageMeta>`. `<SEO>` is a thin backward-compat alias for it; its `hreflangFr`/
  `hreflangEn`/`lang` props are ignored. Some pages still render both — that's legacy, and
  the last-rendered values win.
- Hreflang ownership: `LangMeta` for normal routes, `BlogArticlePage` for blog routes.
  Never emit hreflangs from a page component.
- Global JSON-LD (Organization/Person/WebSite) lives statically in `index.html`. Per-page
  JSON-LD comes from the dedicated components.

**i18n**
- Language is derived from the pathname only (`useLanguage()` → `"fr" | "en"`). There is no
  i18n library and no locale files; FR and EN pages are separate components with hardcoded copy.
- Bilingual aria-labels go through `getA11yLabel(key, lang)` in `src/lib/a11y.ts` rather than
  inline ternaries.
- `e2e/language-integrity.spec.ts` fails if French copy leaks into `/en/` pages (and vice
  versa) — a real risk when copy-pasting a FR page to build its EN twin.

**Accessibility & headings**
- Exactly one `<h1>` per page, no skipped levels. Enforced at runtime in dev by
  `useHeadingHierarchyGuard` and at build time by `audit-headings.mjs`.
- Keep the skip link, landmarks and focus styles in `SiteLayout` intact.

**Styling**
- Tailwind only; colors come from HSL CSS variables in `src/index.css` (`--ink`, `--gold`,
  `--cream`, plus the shadcn token set). Don't hardcode hex values in components.
- Fonts: `font-heading` = Cormorant Garamond, `font-body` = DM Sans.
- `.section-container` is the standard page-width wrapper.

**Performance**
- The hero portrait preload logic in `App.tsx` + `vite.config.ts` is finely tuned to emit
  exactly one image request matching what `<picture>` renders. Read the comments before
  changing hero images, and keep `HERO_ROUTES` in `App.tsx` accurate.
- Non-critical UI (footer, cookie consent, WhatsApp button, scroll progress) is deferred to
  `requestIdleCallback` in `SiteLayout`.
- Supabase is lazily imported (`useFormSubmit`) so form-less routes don't pay ~127 KB.

**Forms & backend**
- All lead forms go through `useFormSubmit()` → `supabase.functions.invoke("send-email")`.
  It is also the single place that fires the GA4 `generate_lead` event; don't fire it elsewhere.
- Analytics-only fields (`avatar`, `offer`, `sourcePage`) are stripped before the edge call.
- Edge functions are Deno (`supabase/functions/*/index.ts`) and use `Deno.env` secrets
  (`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, …). They are deployed via Lovable/Supabase, not by
  the Netlify build.
- `src/integrations/supabase/client.ts` and `types.ts` are generated — regenerate rather than
  edit.

**Content data**
- Listings live in `src/data/properties.ts` / `properties-en.ts` (keep both in sync; `status`
  is `active | sold | pending | rent | rented`). Images are imported from `src/assets/`.
- Blog posts live in `src/data/blog-posts.ts` and `blog-posts-neighborhoods.ts` as typed
  objects with markdown-ish `body`/`bodyEn` strings and both slugs. `scripts/blog-extractor.mjs`
  parses these files **with regex, not the TS compiler** — so keep the object shape regular:
  plain string literals for `slug`, `slugEn`, `title`, `publishDate`, `published`, straightforward
  `import x from "@/assets/blog/y.webp"` lines, and no clever computed fields. A post only ships
  when `published: true`.
- The `ygs-blog`, `ygs-social` and `ygs-evaluation` skills carry the brand voice rules for
  authoring French real-estate content; use them for content work rather than writing generic copy.

## Deployment

Push to `main` → Netlify runs `npm ci --include=dev && npx puppeteer browsers install chrome &&
npm run build` → publishes `dist/`. Cache headers, HSTS and the CSP live in `netlify.toml`; the
CSP allowlist is tight, so adding any third-party script/font/API host means editing it there.

CI (`.github/workflows/seo-audit.yml`) builds on every push/PR to `main` and runs
`audit-seo.mjs` + `audit-headings.mjs`, then Lighthouse CI against production URLs
(`.lighthouserc*.json`; SEO ≥ 0.90 is an error, perf/a11y are warnings).

## Gotchas

- Two hreflang maps and two meta-writing paths exist (build-time and runtime). Changing one
  without the other produces audit failures or, worse, silent SEO drift.
- `SITE_LAST_UPDATE` in `seo-routes.mjs` is manual; per-route `lastmod` overrides it. Git-derived
  dates are disabled on shallow clones (CI), falling back to `SITE_LAST_UPDATE`.
- `@typescript-eslint/no-unused-vars` is off and `vite.config.ts` starts with `// @ts-nocheck`.
  Lint passing does not mean the types are clean.
- `src/components/ui/chart.tsx` (and its recharts/d3 chunk) is currently unused but intentionally
  kept and code-split.
- `.env` is committed and holds only public Supabase keys (`VITE_*` publishable + URL). Never add
  a service-role key or any secret to it — edge-function secrets belong in Supabase.
- `.lovable/` and `lovable-tagger` exist because this project is edited through Lovable as well as
  git. Don't delete them; expect occasional generated commits.
- `README.md` still mentions `netlify/edge-functions/seo-inject.ts` — that directory no longer
  exists; prerendered HTML is served straight from the CDN.
