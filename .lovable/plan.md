# Replace homepage hero background image

## Context

The homepage hero (`src/pages/Index.tsx` → `<HeroSection>`) shows a video with a static poster image as the visual background. That poster is what's visible:
- On desktop, before the video mounts (deferred via `requestIdleCallback` for performance)
- On mobile, where the video is intentionally not mounted at all
- As the LCP image preloaded for PageSpeed

The file currently used is `public/hero-video-poster.webp` (referenced as `heroVideoPoster="/hero-video-poster.webp"` in `Index.tsx`).

The user uploaded a new bright living-room photo and wants it used as the hero background.

## Plan

1. **Add the new image to `public/`** as `hero-living-room.webp` (copy from `user-uploads://Gemini_Generated_Image_9q7aob9q7aob9q7a.png`).
   - Convert PNG → WebP at ~82% quality, max width 1920px to keep LCP fast.
   - Also generate a smaller mobile variant `hero-living-room-mobile.webp` (max width 1080px) so mobile users (where there's no video) get a lighter file.

2. **Update `src/pages/Index.tsx`**:
   - Change `heroVideoPoster="/hero-video-poster.webp"` → `heroVideoPoster="/hero-living-room.webp"`.

3. **Update `index.html`** if it preloads the old poster:
   - Check for any `<link rel="preload" as="image" href="/hero-video-poster.webp">` and swap to the new file. (The hero preload optimization is critical for LCP.)

4. **QA**:
   - Verify the new image file is under `public/` and reachable.
   - Spot-check that the homepage hero shows the new photo (briefly visible before video, fully visible on mobile viewport).
   - Confirm no references to the old `hero-video-poster.webp` remain in pages we ship (other pages don't use it).

## Notes

- The English homepage (`src/pages/en/IndexEn.tsx`) likely uses the same poster — I'll update it in the same way if so.
- The old `hero-video-poster.webp` file is left in place for safety (not deleted) so any cached references don't 404.
- No layout, copy, or component-structure changes — purely an asset swap.
