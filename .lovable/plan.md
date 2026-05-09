## Cause racine

Netlify Pretty URLs 301-redirige `/foo` → `/foo/`. Le code génère partout des URLs SANS slash final dans hreflang/canonical/sitemap → Screaming Frog voit des 301 et marque "Canonicalised", "Non-Indexable Canonical", "Missing Return Links" sur ~123 URLs.

## Fichiers à modifier (5)

| # | Fichier | Modifs |
|---|---|---|
| 1 | `src/lib/url-utils.ts` | **Nouveau** — exporte `withTrailingSlash(path)` |
| 2 | `scripts/prerender.mjs` | Helper local `withSlash` + 10 lignes patchées |
| 3 | `src/components/PageMeta.tsx` | Normalise canonical (entrant + dérivé) + 3 hreflangs |
| 4 | `src/components/LangMeta.tsx` | Normalise frPath/enPath avant construction |
| 5 | `src/pages/BlogArticlePage.tsx` | Slash final L. 128-129 + canonical L. 383 |

**Contraintes respectées :** mapping `frToEn` intact, `<Link>` intacts, routes intactes. La fonction retourne le path tel quel s'il contient `?` ou `#`, donc les paramètres `?secteur=` sont préservés.

## Diff exact

### 1. Nouveau `src/lib/url-utils.ts`
```ts
/** Add a trailing slash to a path, preserving root, query strings and fragments. */
export function withTrailingSlash(path: string): string {
  if (!path) return "/";
  if (path === "/") return "/";
  if (path.includes("?") || path.includes("#")) return path;
  return path.endsWith("/") ? path : path + "/";
}
```

### 2. `scripts/prerender.mjs`

Ajout en haut (après imports) :
```js
const withSlash = (p) => {
  if (!p) return "/";
  if (p === "/") return "/";
  if (p.includes("?") || p.includes("#")) return p;
  return p.endsWith("/") ? p : p + "/";
};
```

Modifications ligne par ligne :
- L. 280 : `const canonical = \`${SITE_URL}${withSlash(route)}\`;`
- L. 300 : `href="${SITE_URL}${withSlash(frPath)}"`
- L. 301 : `href="${SITE_URL}${withSlash(enPath)}"`
- L. 302 : `href="${SITE_URL}${withSlash(frPath)}"`
- L. 387 : `const loc = \`${SITE_URL}${withSlash(route)}\`;`
- L. 395 : `href="${xmlEscape(SITE_URL + withSlash(frPath))}"`
- L. 396 : `href="${xmlEscape(SITE_URL + withSlash(enPath))}"`
- L. 397 : `href="${xmlEscape(SITE_URL + withSlash(frPath))}"`
- L. 511 : `const frUrl = \`${SITE_URL}/blogue/${slug}/\`;`
- L. 512 : `const enUrl = \`${SITE_URL}/en/blog/${slugEn}/\`;`

### 3. `src/components/PageMeta.tsx`

Importer : `import { withTrailingSlash } from "@/lib/url-utils";`

Bloc canonical :
```ts
/* ── Canonical URL (self-referencing, normalised with trailing slash) ── */
const normaliseCanonical = (input: string | undefined): string => {
  if (!input) return `${BASE_URL}${withTrailingSlash(pathname)}`;
  if (input.startsWith(BASE_URL)) {
    const rest = input.slice(BASE_URL.length) || "/";
    const hashIdx = rest.search(/[?#]/);
    const pathPart = hashIdx >= 0 ? rest.slice(0, hashIdx) : rest;
    const tail = hashIdx >= 0 ? rest.slice(hashIdx) : "";
    return `${BASE_URL}${withTrailingSlash(pathPart)}${tail}`;
  }
  return input;
};
const canonicalUrl = normaliseCanonical(canonical);
ensureCanonicalLink().setAttribute("href", canonicalUrl);
```

Hreflang : wrapper les 3 `setAttribute("href", ...)` :
- `\`${BASE_URL}${withTrailingSlash(frPath)}\``
- `\`${BASE_URL}${withTrailingSlash(enPath)}\``
- `\`${BASE_URL}${withTrailingSlash(frPath)}\`` (x-default)

### 4. `src/components/LangMeta.tsx`

- Importer : `import { withTrailingSlash } from "@/lib/url-utils";`
- Avant `const frUrl = ...` (≈ L. 119) :
  ```ts
  frPath = withTrailingSlash(frPath);
  enPath = withTrailingSlash(enPath);
  ```
- Les 3 `setHreflang(...)` héritent automatiquement.

### 5. `src/pages/BlogArticlePage.tsx`

- L. 128 : `const frUrl = \`${BASE_URL}/blogue/${post.slug}/\`;`
- L. 129 : `const enUrl = \`${BASE_URL}/en/blog/${post.slugEn}/\`;`
- L. 383 (canonical) :
  ```tsx
  canonical={`${BASE_URL}${isFr ? `/blogue/${post.slug}/` : `/en/blog/${post.slugEn}/`}`}
  ```

## Tests

Aucun test/audit existant à modifier (vérifié par `rg`) :
- `audit-seo.mjs` : vérifie présence + préfixe `SITE_URL` uniquement.
- `no-js-prerender.spec.ts` L. 93-96 : `.toBeTruthy()` sans valeur.
- `language-integrity`, `faq-jsonld`, `navigation-flows`, `accessibility` : pas d'assertion sur valeur exacte de canonical/hreflang.

## Validation post-implémentation

```bash
npm run build && node scripts/audit-seo.mjs
grep -E 'canonical|hreflang' dist/hull/index.html | head
grep '<loc>' dist/sitemap.xml | head -10
```

Attendu : tous les hrefs/locs hors home se terminent par `/`. Puis re-crawl Screaming Frog avec : 0 hreflang non-200, <15 Canonicalised (≤ 7-8 paramètres `?secteur=`), <5 Non-Indexable Canonical, 0-1 Missing Return Links.