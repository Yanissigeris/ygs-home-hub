## Plan : Fix soft 404 + règles bots IA

### 1. Créer `public/404.html`
Nouveau fichier HTML statique avec page 404 bilingue (FR/EN), styles inline, meta noindex, canonical vers /.

### 2. Remplacer `public/_redirects`
- Conserve les 301 /blog → /blogue
- Ajoute les 301 anciennes URLs propriétés → /proprietes
- Ajoute les 301 anciennes URLs Outaouais → hubs canoniques
- Ajoute les 200 SPA-only pour /admin et /admin/*
- **Retire** le SPA fallback global `/* /index.html 200`
  → Netlify servira alors automatiquement `public/404.html` avec status 404 pour les URLs invalides.

### 3. Remplacer `public/robots.txt`
- Règles par défaut : Allow / + Disallow thank-you + /admin
- Blocs explicites par bot IA : Claude, OpenAI (GPTBot, OAI-SearchBot, ChatGPT-User), Perplexity, Google-Extended, Meta-ExternalAgent, Applebot-Extended, CCBot
- Bloque Bytedance (Bytespider, Bytedance) en entier
- Sitemap inchangé

### Contraintes respectées
- Aucun autre fichier touché (pas de prerender.mjs, App.tsx, netlify.toml, index.html)
- Build `npm run build` inchangé — ces fichiers sont statiques dans public/

### Livrables
- 1 fichier créé : public/404.html
- 2 fichiers remplacés : public/_redirects, public/robots.txt