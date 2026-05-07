# Plan: Better spacing under portrait + RE/MAX logo alignment

## Scope
Two files only — purely visual, no logic, no copy changes.

- `src/components/ProfileSection.tsx` — spacing/rhythm of the column under the portrait
- `src/components/RemaxAgencyBlock.tsx` — alignment only of the RE/MAX logotype + balloon inside the cream card

Keep the three blocks **separate** (portrait → YGS logo → RE/MAX agency card), just better spaced and better aligned.

## Fix 1 — RE/MAX logotype + balloon alignment (inside the cream card)

**Sizing is preserved** to respect RE/MAX brand guidelines:
- Logotype stays at `h-7`
- Balloon stays at `h-9`

Only alignment changes:
- Wrapper changes from `flex items-center gap-3` → `flex items-end gap-4 mb-4`
  - `items-end` puts both marks on the same bottom baseline (RE/MAX brand convention).
  - `gap-4` gives a touch more breathing room between the wordmark and the balloon.
  - `mb-4` (vs `mb-3`) lets the lockup breathe before the "RE/MAX Direct inc." line.

No size, color, or asset change inside `RemaxAgencyBlock.tsx`. Address text and phone untouched.

## Fix 2 — Spacing rhythm under the portrait (`ProfileSection.tsx`)

Current: column uses `space-y-8` uniformly, which makes the small YGS logo float at equal distance between the portrait and the RE/MAX card → feels disconnected.

Change to explicit per-block margins so the hierarchy reads cleanly:
- Portrait: unchanged.
- YGS logo wrapper: replace `text-center` with `text-center mt-6` and bump the logo size slightly via `clamp(80px, 11vw, 100px)` (currently 70–90px — a touch small next to the portrait). RE/MAX brand guidelines do not constrain the YGS personal mark.
- RE/MAX card slot (`affiliationSlot`): wrap in a `mt-8` spacer so it sits clearly as its own block, not merged with the YGS logo.
- Drop `space-y-8` from the column wrapper since we now control spacing per block.

Result: portrait → tight YGS mark → clear breathing room → RE/MAX agency card. Three distinct, well-spaced blocks.

## Out of scope
- No copy changes (address, phone, names stay).
- No color / token changes.
- No size change to RE/MAX logotype or balloon.
- No changes to `ContactPage.tsx` or other pages that consume `ProfileSection`.
- No changes to the right-hand text column.

## Verification
- Visual check at 1131px (current) and at mobile (375px) — both columns should stack cleanly with the same rhythm.
- Confirm RE/MAX logotype + balloon share the same bottom baseline and keep their guideline sizes.
- Confirm no other pages using `ProfileSection` (e.g. About / French + EN home pages) regress — the spacing changes are additive and only affect the portrait column.
