## Goal

Replace the bulky mobile cookie banner (~165px, ~30% of viewport) with a compact ~56px slim bar so Yanis's hero portrait and primary CTA are no longer covered. Desktop rendering stays byte-identical. All Loi 25 logic (3 actions, granular toggles in the modal, GA4 conditional load, localStorage persistence) is preserved.

## File to change

`src/components/CookieConsent.tsx` — single edit inside the `CookieConsent` component (the `/* ── Main Banner ── */` section, lines ~175–290). No other file is touched.

## Changes

1. **Mobile detection**: import the existing `useIsMobile` hook from `@/hooks/use-mobile` and call it inside `CookieConsent`. (Already in the codebase — uses a 768px breakpoint, matches the spec's `< 768px` requirement.)

2. **Branch the banner JSX** based on `isMobile`:
   - `!isMobile` → render the existing desktop banner block exactly as it is today (lines 237–284). Zero style changes.
   - `isMobile` → render the new compact slim bar (provided in the request): single horizontal flex row, `var(--ink)` bg, gold top border, `padding: 10px 12px` + `safe-area-inset-bottom`, short copy ("Cookies. Loi 25 du Québec." / "Cookies. Quebec Law 25."), and three inline buttons (Refuser/Refuse, Options, OK) each with `minHeight: 36px`. Same `transform: translateY(...)` slide animation driven by `visible`.

3. **Reuse handlers as-is**: mobile buttons call the existing `handleRefuse`, `setShowPrefs(true)`, and `handleAccept` (the spec's `handleRefuseAll`/`handleAcceptAll`/`setPreferencesOpen` map to these existing names — no rename, no duplicate logic).

4. **Re-open cookie button** (the floating 🍪 at bottom-left for users who already consented): keep as-is, works on both layouts.

5. **PreferencesModal**: rendered once at the end, unchanged. Opens identically from desktop "Customize" and mobile "Options". Granular analytics/marketing toggles + `saveConsent("partial", prefs)` flow untouched.

## Out of scope (not touched)

- `PreferencesModal`, `Toggle` components
- `STORAGE_KEY`, `STORAGE_PREFS_KEY`, `GA_ID`
- `loadGA`, `applyConsent`, `getConsent`, `getPrefs`, `saveConsent`
- Desktop banner markup and styling
- The dismissed-state floating reopen button
- Any other component, page, or route

## Acceptance

- Mobile (<768px): single ~56px bar at bottom, 3 inline buttons, 36px min touch target, safe-area padding for notched iPhones.
- Mobile copy: "Cookies. Loi 25 du Québec." (FR) / "Cookies. Quebec Law 25." (EN).
- Tapping "Options" opens the existing PreferencesModal with analytics/marketing toggles.
- "Refuser" / "OK" persist consent and slide the bar out via the existing transform transition.
- GA4 still loads conditionally via `applyConsent()` after Accept (full or partial-with-analytics).
- Desktop rendering is byte-identical to current.
- Hero portrait and primary CTA on `/` and `/en` are no longer obscured on mobile.
