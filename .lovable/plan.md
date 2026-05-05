## Phase 2 — Homepage Token Consolidation

Surgical literal-to-var replacements in 5 homepage component files. Zero visual change, zero structural refactor.

### Scope (5 files)

- `src/components/CTASection.tsx`
- `src/components/FeaturedProperties.tsx`
- `src/components/PathwaySection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/HomeFAQTeaser.tsx`

### Steps

1. **Baseline verify** — Run the per-file occurrence count (`grep -o … | wc -l`) for each of the 5 hex literals. Confirm exact match with the expected baseline matrix (totals: `#A88A5A`=23, `#17303B`=6, `#0c1f28`=2, `#F7F4EE`=3, `#BFA476`=4, plus 2× `rgba(168,138,90,0.12)` and 1× `"#fff"`). **If any count differs, STOP and report — do not edit.**

2. **Apply replacements** (case-sensitive, in scope files only) via `code--line_replace`:

   | Literal | Replacement |
   |---|---|
   | `#A88A5A` | `var(--gold)` |
   | `#17303B` | `var(--ink)` |
   | `#0c1f28` | `var(--ink-deep)` |
   | `#F7F4EE` | `var(--cream)` |
   | `#BFA476` | `var(--gold-warm-light)` |
   | `#fff` (HomeFAQTeaser:62 only) | `var(--white)` |
   | `rgba(168,138,90,0.12)` | `var(--gold3)` |

   Replacements apply across all contexts: inline `style={{...}}` props, embedded `<style>{`...`}</style>` template strings (AboutSection lines 40-54), boxShadow concatenated strings, and inline event-handler bodies. Multiple hits per line are expected and all must be replaced.

3. **Post-edit verify**:
   - `rg -o "#A88A5A|#17303B|#0c1f28|#F7F4EE|#BFA476" <5 files>` → 0
   - `rg -o '"#fff"' src/components/HomeFAQTeaser.tsx` → 0
   - `rg -o "rgba\(168,138,90,0\.12\)" FeaturedProperties.tsx PathwaySection.tsx` → 0
   - Out-of-scope sentinels still present: `#FAF8F3` in FeaturedProperties (1+), `#F5F1EA` in PathwaySection (3+), `rgba(168,138,90,.1)` in CTASection (1), `rgba(168,138,90,0.1)` in AboutSection (1).

### Explicitly NOT touched

- Cream variants `#FAF8F3`, `#F5F1EA` and their alpha rgba forms
- `rgba(255,255,255,…)` — Phase 5+ (text-on-dark stack)
- `rgba(23,48,59,…)` — Phase 5+ (ink-veil stack)
- Gold alphas other than 0.12: `rgba(168,138,90,.1)`, `rgba(168,138,90,0.1)`, `rgba(168,138,90,0.2)`, `rgba(168,138,90,.3)` — different tokens, different phases
- `--gold2` and any other existing token
- `src/index.css` — no edits in Phase 2
- All files outside the 5-file scope

### Success criteria

41 targeted values replaced, all out-of-scope sentinels intact, `src/index.css` untouched, build passes, pixel-identical visual diff.
