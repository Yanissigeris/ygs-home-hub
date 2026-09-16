# Canonical trailing slashes, blog language-switch fix, and small link corrections

Scope: exactly 6 files, exact edits as specified. No renames, no other files, no build run, no refactoring. Keep every existing string, class and style.

## 1. `src/lib/url-utils.ts` (append only)
Append the new exported `canonicalPath(href)` function verbatim at the very end of the file. Nothing already in the file changes. Behavior: internal hrefs get the trailing slash before any query/fragment; external URLs, `mailto:`/`tel:`/`sms:`, anchors and file paths (anything with an extension) are returned untouched.

## 2. `src/components/LanguageSwitch.tsx` (exact diff)
- Add `import { useEffect, useState } from "react";` and change the url-utils import to `{ stripTrailingSlash, withTrailingSlash }`.
- The `frToEn` / `enToFr` maps stay byte-identical.
- Add a `blogTwin` state plus effect: on paths matching `/blogue/:slug/` or `/en/blog/:slug/`, lazily `import("@/data/blog-posts")`, resolve `getPostBySlug(m[2])`, and set the twin link (`/en/blog/${post.slugEn}/` from FR, `/blogue/${post.slug}/` from EN). Reset when the pathname doesn't match.
- `targetPath` becomes `blogTwin ?? withTrailingSlash(map lookup or fallback)`, so every switch target ends with `/` (avoids the Netlify 301).

## 3. `src/components/CookieConsent.tsx` (two one-character edits)
- `privacyHref: "/en/privacy-policy"` → `"/en/privacy-policy/"` (line 265)
- `privacyHref: "/politique-de-confidentialite"` → `"/politique-de-confidentialite/"` (line 273)

## 4. `src/components/AreasServicesSection.tsx` (two href swaps)
- areasFr "Aylmer / Plateau": `href: "/plateau-aylmer/"` → `"/aylmer/"`
- areasEn "Aylmer / Plateau": `href: "/en/plateau-aylmer/"` → `"/en/aylmer/"`
Name and detail strings unchanged.

## 5. `src/data/blog-posts.ts` (one value)
In the `ctaOverride` of the « rapport mensuel » post (slug `marche-immobilier-gatineau-avril-2026`, line 245): `buttonHref: "/contact/"` → `buttonHref: "/contact-yanis/"`. The EN `buttonHrefEn: "/en/contact/"` is already correct and untouched.

## 6. `src/test/url-utils.test.ts` (new file)
Create with exactly the provided content (BEGIN/END FILE block): tests for `canonicalPath` (adds slash, keeps canonical, slash before query/fragment, leaves external/protocol/file links) and `withTrailingSlash` root behavior.

## Verification
- Run the new test file with vitest (plus existing suites untouched) and a TypeScript-only typecheck; no `npm run build`, no form submissions, no emails.
- Spot-check in the preview: FR|EN switch on a blog article lands on the translated article; on a normal page the target URL ends with `/`.
