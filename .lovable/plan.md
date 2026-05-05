# Phase 0.1 — Token additions + literal swaps

Baseline verified ✓ (matches expected exactly: FeaturedProperties #FAF8F3=1; TestimonialGrid #FAF8F3=1, rgba(...,0.08)=2; AreasServicesSection #F5F1EA=3; PathwaySection #F5F1EA=3; AwardsMarquee #112E3A=3 total).

## Part 1 — Add 4 tokens to `src/index.css`

Insert immediately after line 67 (`--ink-soft: #1C3A47;`) and before line 69 (`--white: #FFFFFF;`):

```css
    /* === Token additions (Phase 0.1 — closes Phase 2/3 carve-outs) === */
    --cream-light: #FAF8F3;
    --cream-deep: #F5F1EA;
    --ink-mid-deep: #112E3A;
    --gold-veil-faint: rgba(168,138,90,.08);
```

No existing tokens modified.

## Part 2 — Swap 11 literals across 5 files

| File | Replacement | Count |
|---|---|---|
| `FeaturedProperties.tsx` | `#FAF8F3` → `var(--cream-light)` | 1 |
| `TestimonialGrid.tsx` | `#FAF8F3` → `var(--cream-light)` | 1 |
| `TestimonialGrid.tsx` | `rgba(168,138,90,0.08)` → `var(--gold-veil-faint)` | 2 |
| `AreasServicesSection.tsx` | `#F5F1EA` → `var(--cream-deep)` | 3 |
| `PathwaySection.tsx` | `#F5F1EA` → `var(--cream-deep)` | 3 |
| `AwardsMarquee.tsx` line 34 ONLY | `#112E3A` → `var(--ink-mid-deep)` | 1 |

**AwardsMarquee carve-out**: WCAG comment block (lines 8–15) untouched. Only the gradient stop on line 34 is rewritten via targeted `code--line_replace`, leaving the 2 `#112E3A` occurrences inside comments intact.

Other files (incl. `PlexPage.tsx`, `PlexPageEn.tsx`) and all other deferred alpha variants untouched.

## Verification after edit

- `rg -o "#FAF8F3"` in 2 files → 0
- `rg -o "#F5F1EA"` in 2 files → 0
- `rg -o "rgba\(168,138,90,0?\.08\)"` in TestimonialGrid → 0
- `rg -o "#112E3A"` in AwardsMarquee → 2 (comments)
- 4 token grep-checks → 1 each
- Out-of-scope sentinels (PlexPage 0.08, CTASection .1, PathwaySection .15) intact
- Build passes
