## Phase 3 — Trust + Service Surfaces Token Consolidation

Baseline verified — all 5 files match expected hex counts exactly. Ready to apply 26 surgical literal-to-var replacements.

### Scope (5 files)
- `src/components/SiteFooter.tsx` (6 replacements)
- `src/components/TestimonialGrid.tsx` (5 replacements)
- `src/components/AreasServicesSection.tsx` (4 replacements)
- `src/components/GuideOffersSection.tsx` (7 replacements)
- `src/components/AwardsMarquee.tsx` (4 replacements — code only, comments preserved)

### Replacement map (case-sensitive)

| Literal | Token |
|---|---|
| `#17303B` | `var(--ink)` |
| `#A88A5A` | `var(--gold)` |
| `#c4a878` | `var(--gold2)` |
| `#fff` | `var(--white)` |
| `#0c1f28` | `var(--ink-deep)` |
| `#BFA476` | `var(--gold-warm-light)` |
| `#7A6038` | `var(--gold-dark)` |
| `#0E2630` | `var(--ink-mid)` |
| `#D4AF6F` | `var(--gold-bright)` |

### Special handling

- **GuideOffersSection lines 53 & 83**: convert `ring-[#7A6038]` → `ring-[var(--gold-dark)]` (keep as Tailwind arbitrary value; do not move to inline style).
- **AwardsMarquee WCAG comment block (lines 8-15)**: untouched. Only code uses on lines 32, 34 (×2), 38 are replaced. The `#112E3A` on line 34 stays literal (no token exists).

### Method

Use `code--line_replace` per file with surgically scoped search blocks. For AwardsMarquee, target only the `defaultVars` object body (lines ~30-50), not the comment block.

### Post-edit verification

- `rg -o "#17303B|#A88A5A|#c4a878|#0c1f28|#BFA476|#7A6038"` across the 4 non-AwardsMarquee files → 0
- `rg -o '"#fff"'` in SiteFooter + TestimonialGrid → 0
- AwardsMarquee: `#0E2630` → 2 (comments only), `#D4AF6F` → 2 (comments only), `#FFFFFF` → 2 (unchanged), `#112E3A` → 3 (unchanged)
- Sentinels intact: `#FAF8F3` (TestimonialGrid:97), `#F5F1EA` ×3 (AreasServicesSection), `rgba(168,138,90,0.08)` ×2 (TestimonialGrid)
- `src/index.css` and `TestimonialSlider.tsx` untouched
- Build passes

### Success criteria

26 replacements applied, comment block + `#112E3A` + all out-of-scope sentinels preserved, pixel-identical visual diff.
