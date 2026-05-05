# Phase 2A — Refine vite.config.ts manualChunks

## Goal
Shrink the vendor chunk (~423 KB / 134 KB gz) by isolating motion-dom/utils, zod + react-hook-form + @hookform, react-router, and react-helmet-async into their own chunks loaded only when needed.

## Single file change: `vite.config.ts`

Inside `build.rollupOptions.output.manualChunks`, only the node_modules section is touched.

**Modify** the existing motion rule:
```ts
// Before
if (id.includes("framer-motion")) return "motion";
// After
if (id.includes("framer-motion") || id.includes("motion-dom") || id.includes("motion-utils")) return "motion";
```

**Insert** three new rules immediately after the motion rule (before `lucide-react`):
```ts
if (id.includes("zod") || id.includes("react-hook-form") || id.includes("@hookform")) return "forms";
if (id.includes("react-router") || id.includes("@remix-run/router")) return "router";
if (id.includes("react-helmet-async")) return "helmet";
```

Final order inside the node_modules block:
`charts → supabase → data (@tanstack) → motion (expanded) → forms → router → helmet → icons → carousel → radix → vendor (fall-through)`

## Guardrails
- No edits outside `vite.config.ts`.
- `htmlOptimizePlugin`, `resolve.alias`, `chunkSizeWarningLimit`, application-code branch (`blog-data`), and all other existing rules untouched.
- No changes to `src/`, JSON-LD, meta, routes, or DOM.

## Expected post-build
- New chunks: `forms-*.js` (~83/23 gz), `router-*.js` (~21/8 gz), `helmet-*.js` (~14/5 gz)
- `motion` grows ~32 → ~128 KB (now includes motion-dom/utils)
- `vendor` drops ~423 → ~207 KB
- App chunks (Index, OutaouaisHubPage, …) unchanged
