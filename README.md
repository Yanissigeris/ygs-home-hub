# YGS — yanisgauthier.com

Site marketing pour Yanis Gauthier-Sigeris, courtier immobilier RE/MAX en Outaouais. SPA React/Vite bilingue (FR/EN) déployée sur Netlify avec prerender SEO et edge function de meta-injection.

## Stack

- Vite 5 + TypeScript 5 + React 18
- Tailwind CSS v3 + shadcn-ui
- Supabase (Lovable Cloud) — Edge Functions, formulaires, stockage
- Netlify — hébergement, edge functions SEO, prerender statique

## Scripts

```bash
npm run dev      # Dev server (port 8080)
npm run build    # Build production (+ prerender + SEO inject)
npm run lint     # ESLint
npm run test     # Vitest (tests unitaires)
npx playwright test   # E2E Playwright (multi-viewport)
```

## Architecture

- `src/pages/` — pages FR servies à la racine `/`
- `src/pages/en/` — pages EN servies sous `/en/...`
- `src/components/` — composants partagés (HeroSection, FormSection, etc.)
- `src/data/` — contenu statique (blog, propriétés, témoignages, navigation)
- `src/contexts/LanguageContext.tsx` — détection FR/EN
- `supabase/functions/` — edge functions (envoi email, génération image)
- `scripts/prerender.mjs` — prerender SEO de toutes les routes au build
- `netlify/edge-functions/seo-inject.ts` — injection meta côté edge

## Déploiement

Push sur `main` → build Netlify → prerender HTML pour chaque route → publication. Domaine de production : `yanisgauthier.com`.
