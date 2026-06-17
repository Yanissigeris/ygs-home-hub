# Fix FOUC: Make main stylesheet render-blocking

## Problem
In `vite.config.ts`, the `htmlOptimizePlugin` rewrites Vite's `<link rel="stylesheet">` into an async pattern (`media="print" onload="this.media='all'"`) with a `<noscript>` fallback. Since the site is prerendered, HTML paints before the CSS loads → flash of unstyled content.

## Change
File: `vite.config.ts` (the regex replacement inside `htmlOptimizePlugin`, around the section that matches `<link rel="stylesheet" crossorigin href="...css">`).

Replace the current 3-line output (preload + async stylesheet + noscript) with:
- Keep: `<link rel="preload" as="style" href="$1" crossorigin>` (early download)
- Add back the normal render-blocking stylesheet: `<link rel="stylesheet" href="$1" crossorigin>`
- Remove the `<noscript>` duplicate
- Remove the `media="print" onload="this.media='all'"` attributes

Resulting injected markup:
```html
<link rel="preload" as="style" href="$1" crossorigin>
<link rel="stylesheet" href="$1" crossorigin>
```

## Not touched
- Prerendered HTML body content, meta tags, JSON-LD
- Critical inline CSS block (harmless to keep; can stay as a safety net)
- Image preload logic
- Any other plugin or prerender script

## Verification
Inspect a built `dist/**/index.html` and confirm:
- One `<link rel="preload" as="style" ...>` for the CSS
- One normal `<link rel="stylesheet" href="/assets/index-*.css" crossorigin>` (no `media="print"`, no `onload`)
- No `<noscript>` wrapping that stylesheet
