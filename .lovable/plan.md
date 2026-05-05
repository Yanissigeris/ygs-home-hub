# Phase 6 — Alt-Section Bleed-Through Fix + Contrast Lift

Surgical token/class mop-up across 36 files. No logic changes.

## Edit 1 — Swap `bg-secondary/20` → `bg-[var(--cream)]` (34 occurrences)

Replace exact substring only; preserve all surrounding classes.

**Components (18):** ImageTextSplit:22, ContentBlock:19, ProcessSteps:28, ProfileSection:33, FormSection:24, CredibilitySection:24, CalculatorsSection:35, ReviewSection:30, LocalSEOCluster:20, LinkedCardGrid:29, SocialProofStrip:41, SectorLinks:38, CardGrid:30, ReviewStrip:14, FunnelNextStep:34, RelatedPages:25, TestimonialPlaceholder:23, GuideRequestForm:95.

**Pages (16):** VerifierCourtierOaciqPage:56, AylmerPage:151/207/275, AylmerPageEn:148/202/268, OutaouaisHubPageEn:79/123, TestimonialsPageEn:37, GatineauCentrePageEn:120, CommentChoisirCourtierPage:67, TestimonialsPage:49, GatineauCentrePage:120, OutaouaisHubPage:85/129.

## Edit 2 — Pontiac card divs → `bg-card` (2 occurrences)

These are cards inside an opaque cream parent; white keeps separation.

- `src/pages/PontiacPage.tsx:154`
- `src/pages/en/PontiacPageEn.tsx:154`

Find: `bg-secondary/20 border border-border rounded-lg p-6 space-y-3`
Replace: `bg-card border border-border rounded-lg p-6 space-y-3`

## Edit 3 — Lift muted-foreground contrast (1 line)

`src/index.css:26`
- From: `--muted-foreground: 200 12% 46%;`
- To:   `--muted-foreground: 200 30% 35%;`

Lifts contrast on cream from 4.05:1 → ~7:1 (AAA).

## Carve-outs (unchanged)

- All other `:root` tokens in `src/index.css`.
- All other `bg-secondary/N` classes (/25, /30, /40, /70, /80).
- All `bg-background`, `bg-card` (existing), `bg-[var(--ink)]`, `bg-primary`, `bg-foreground` references.
- `index.html` critical above-fold CSS (intentional anti-flash).
- `tailwind.config.ts`.
- All component logic, props, framer-motion, Suspense.

## Post-edit verification

Run all 6 grep checks and report:
1. `grep -rIn "bg-secondary/20" src/` → empty
2. `grep -rho "bg-\[var(--cream)\]" src/ | wc -l` → 34
3. `grep -n "bg-card border border-border rounded-lg p-6 space-y-3" src/pages/PontiacPage.tsx src/pages/en/PontiacPageEn.tsx` → 2 lines
4. `grep -n "muted-foreground: 200 30% 35%" src/index.css` → 1 hit at line 26
5. `grep -n "muted-foreground: 200 12% 46%" src/index.css` → empty
6. `grep -rho "bg-secondary/\(25\|30\|40\|70\|80\)" src/ | wc -l` → 5+

If any check fails, halt and report. Update `.lovable/plan.md` with Phase 6 log.

## Phase 6 — Applied
- 34× `bg-secondary/20` → `bg-[var(--cream)]` (18 components, 16 pages)
- 2× Pontiac card divs → `bg-card` (FR + EN)
- `--muted-foreground` lifted 200 12% 46% → 200 30% 35% (AA → AAA on cream)
- All 6 verification greps passed. Other `bg-secondary/N` (18 hits) untouched.
