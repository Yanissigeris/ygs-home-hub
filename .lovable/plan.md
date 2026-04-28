## Objective

Make `netlify/edge-functions/seo-inject.ts` short-circuit to `context.next()` for SEO crawlers and AI agents, so the Netlify Prerender extension (next layer) can serve fully-rendered HTML. Real human visitors keep getting the existing meta-swap.

## Scope

Single file edited: `netlify/edge-functions/seo-inject.ts`.
No changes to `netlify.toml`, the `META` map, `escapeHtml`, `upsertTag`, the meta-swap pipeline, or the existing error-fallback `context.next()`.

## Changes

### 1. Add two UA regex constants (after line 494)

Insert immediately after `const SITE_ORIGIN = 'https://yanisgauthier.com'` and before `upsertTag`:

```ts
// Crawlers SEO + AI search agents that need fully-rendered HTML.
// When detected, we hand off to the Netlify Prerender extension (next layer)
// instead of returning the SPA shell with only meta-swapped tags.
const CRAWLER_UA = /Googlebot|Googlebot-Image|Googlebot-Video|AdsBot-Google|Bingbot|DuckDuckBot|Slurp|YandexBot|Baiduspider|facebookexternalhit|Twitterbot|LinkedInBot|WhatsApp|TelegramBot|Discordbot|Slackbot|Applebot|AhrefsBot|SemrushBot|MJ12bot|GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|anthropic-ai|Claude-Web|PerplexityBot|Google-Extended|Applebot-Extended|Meta-ExternalAgent|Amazonbot|Bytespider/i;

// The Prerender extension's own headless browser hits our SPA from inside.
// We must NOT detect it as a crawler — otherwise we'd loop or starve it.
const PRERENDER_SELF_UA = /Prerender|HeadlessChrome/i;
```

### 2. Add crawler short-circuit inside the handler

Inside `export default async (request, context)`, immediately after line 505 (`if (path.includes('.')) return context.next()`) and before line 507 (`const page = META[path]`):

```ts
// Crawler short-circuit: hand off to the Prerender extension (runs after us).
// Only humans + the Prerender extension's internal browser flow through to
// the meta-swap path below.
const ua = request.headers.get('user-agent') || '';
if (CRAWLER_UA.test(ua) && !PRERENDER_SELF_UA.test(ua)) {
  return context.next();
}
```

## Behavior after change

```text
request → edge function
   │
   ├─ static asset (path has ".")        → context.next()
   ├─ crawler UA & not Prerender/Headless → context.next()  ← NEW
   └─ everything else                     → existing meta-swap pipeline
```

## Acceptance

- `User-Agent: Googlebot` or `ClaudeBot` → returns `context.next()` right after path resolution.
- Normal browser UA → meta-swap runs unchanged.
- UA containing `Prerender` or `HeadlessChrome` → flows through meta-swap (not short-circuited), letting the extension's headless render see swapped tags.
- `netlify.toml` and all other files untouched.
