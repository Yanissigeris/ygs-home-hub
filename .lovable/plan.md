## Hero — Improve text contrast (left-side gradient overlay)

**Note:** Your message appears truncated after point #1 (it ends mid-sentence at "compen…"). This plan covers point #1 exactly as specified. If you have additional points (2, 3, …), please paste them and I'll extend the plan before implementing.

### Scope
- **File touched:** `src/components/HeroSection.tsx` only
- **Page affected:** Home (`/` and `/en`) — the full hero variant (lines 451+)
- **No changes to:** brand colors, fonts, images, component structure, or any other section

### Change

Add one new gradient overlay layer inside the hero `<section>`, positioned:
- **Above** the background image/video/poster (which sit at `zIndex: 1–2`)
- **Below** the portrait of Yanis (which sits at `zIndex: 4`)
- **Below** the text content (`zIndex: 3`) — so text contrast improves without color shift on the text itself

So the new overlay goes at `zIndex: 2` (alongside the existing main gradient overlays at lines 533–551), as a sibling layer.

### Specs

**Desktop (≥768px):**
```
background: linear-gradient(
  to right,
  rgba(23, 48, 59, 0.70) 0%,
  rgba(23, 48, 59, 0.00) 55%
);
```

**Mobile (<768px):**
```
background: linear-gradient(
  to right,
  rgba(23, 48, 59, 0.80) 0%,
  rgba(23, 48, 59, 0.00) 55%
);
```

Implementation: add **two sibling `<div>` overlays** (one with `hidden md:block`, one with `md:hidden`), mirroring the existing pattern at lines 534–551. Both `pointer-events-none`, `absolute inset-0`, `z-[2]`, `aria-hidden`.

### What this achieves
- Text column (left ~50% of hero on desktop, full width on mobile) gets a darker ink wash behind it → eyebrow, headline, subtitle, descriptive paragraph become noticeably more readable on busy parts of the living-room photo.
- Portrait of Yanis (right side) and the right portion of the background remain fully visible — gradient fades to 0% by ~55% width.
- No text color, font, or layout changes — purely a background contrast lift.

### Out of scope (waiting on truncated message)
Points 2+ from your brief — likely covering the trust strip (`MicroTrustStrip`) contrast and possibly text shadow tweaks — are not included. Send the rest of the brief and I'll fold them in.
