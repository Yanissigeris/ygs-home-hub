## YGS Token Consolidation — Phase 0 + Phase 1

Pure design-token foundation work. Three atomic parts. Zero visual change except a deliberate cream warmth normalization (#F7F4EF typo → #F7F4EE canonical) in 5 files.

### Part 1 — Add 26 tokens to `src/index.css`

Insert a new block immediately after the existing `--gold3: rgba(168,138,90,.12);` line (currently line 56), before `--ease`. The block defines:

- **Gold scale** (3): `--gold-warm-light`, `--gold-dark`, `--gold-bright`
- **Ink scale** (3): `--ink-deep`, `--ink-mid`, `--ink-soft`
- **White** (1): `--white`
- **Text-on-dark stack** (5): `--text-on-dark-strong/-/-muted/-whisper/-faint`
- **Shadow stack** (3): `--shadow-soft/-mid/-strong`
- **Ink-veil stack** (4): `--ink-veil-strong/-/-soft/-whisper`
- **Radii** (5): `--radius-sm/-md/-lg/-pill/-circle`
- **Status** (2): `--success`, `--warning`

Existing tokens (including `--gold2`, which is referenced by gradients in TestimonialSlider and TestimonialGrid) are not touched.

### Part 2 — Fix `#F7F4EF` typo → `var(--cream)`

Replace every literal `#F7F4EF` with `var(--cream)` (canonical = `#F7F4EE`) across exactly 5 files, 17 hits total:

- `src/components/SiteFooter.tsx` (3)
- `src/components/MicroTrustStrip.tsx` (1)
- `src/pages/BlogArticlePage.tsx` (5)
- `src/pages/BlogPage.tsx` (4)
- `src/pages/en/BlogPageEn.tsx` (4)

Case-sensitive match. I will verify counts via `rg` before editing and after.

### Part 3 — Normalize white literals → `var(--white)`

Across `src/components/` and `src/pages/`, excluding `src/components/ui/`, `src/components/__tests__/`, `src/components/VideoPerfOverlay.tsx`, and `src/components/MarketContext2026.tsx`:

- `#fff` → `var(--white)` (inline style values)
- `#FFFFFF` → `var(--white)` (inline style values)
- `text-[#fff]` / `bg-[#fff]` / `text-[#FFFFFF]` / `bg-[#FFFFFF]` → `text-[var(--white)]` / `bg-[var(--white)]`

Approach: enumerate every occurrence with `rg -n` first, scoped to the allowed paths, then perform per-file replacements via `code--line_replace`. Bare hex matches will use word-boundary-aware patterns (`#fff\b`) to avoid clobbering `#fff0`, `#ffffff00`, etc.

### Out of scope (explicitly not touched)

- `--gold2` and all other existing tokens
- Any other hex literal (`#A88A5A`, `#17303B`, gold scale literals, etc. — later phases)
- Any `rgba(...)` value
- Inline-style → class refactors, hover handlers, framer-motion, `!important`
- `src/components/ui/`, `VideoPerfOverlay.tsx`, `MarketContext2026.tsx`, test files

### Verification

After edits:
- `rg -n "#F7F4EF" src/` → 0 hits
- `rg -nE "#[fF]{3}\b|#[fF]{6}\b" src/components src/pages` (excluding ui/__tests__/VideoPerfOverlay) → 0 hits
- `rg -n "text-\[#fff|bg-\[#fff|text-\[#FFFFFF|bg-\[#FFFFFF" src/` → 0 hits
- `index.css` `:root` block contains the 26 new declarations
- Build passes (auto-run by harness)
