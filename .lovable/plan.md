# Phase 4 — Blog cluster token consolidation

Baseline verified ✓ (BlogArticlePage: #A88A5A=22, #17303B=18, rgba(168,138,90,0.12)=1; BlogPage: 9/7/0; BlogPageEn: 9/7/0). Total 73.

## Replacements (3 files)

| Literal | Token | Files |
|---|---|---|
| `#A88A5A` | `var(--gold)` | BlogArticlePage (22), BlogPage (9), BlogPageEn (9) |
| `#17303B` | `var(--ink)` | BlogArticlePage (18), BlogPage (7), BlogPageEn (7) |
| `rgba(168,138,90,0.12)` | `var(--gold3)` | BlogArticlePage (1) |

Method: `sed -i` on the 3 files for each of the 3 exact patterns. The "multi-hit lines" (BlogArticlePage:456, BlogPage:173, BlogPageEn:169 each containing both `#A88A5A` and `#ECEAE2`) are safe — the sed pattern matches `#A88A5A` only and leaves `#ECEAE2` untouched.

## Out-of-scope (NOT touched)

- Editorial palette: `#E0DBD1`, `#ECEAE2`, `#3A4D55`, `#C9A25A`, `#5C6B73` (20 hits total)
- Alpha drift: `rgba(247,244,239,*)` (13), `rgba(23,48,59,*)` (8)
- All other rgba(), all !important, src/index.css, any file outside the 3 listed
- No handler/logic/structural changes

## Post-edit verification

- `grep -ho "#A88A5A\|#17303B"` across 3 files → 0
- `grep -ho "rgba(168,138,90,0.12)"` BlogArticlePage → 0
- Editorial sentinel grep → 20
- `rgba(247,244,239,*)` → 13; `rgba(23,48,59,*)` → 8
- Build passes
