Modifier le fichier `public/_redirects` uniquement.

1. Ajouter un nouveau bloc après "# 301 — Anciennes URLs propriétés vers la page canonique" pour les URLs courtes devinées :
   - `/plex` → `/investir-plex-gatineau/`
   - `/plex/` → `/investir-plex-gatineau/`
   - `/contact` → `/contact-yanis/`
   - `/contact/` → `/contact-yanis/`
   - `/vendre` → `/vendre-ma-maison-gatineau/`
   - `/vendre/` → `/vendre-ma-maison-gatineau/`

2. Nettoyer les destinations existantes sans slash final :
   - `/blog` → `/blogue/` (ligne 2)
   - `/blog/*` → `/blogue/:splat` (inchangé, car le splat conserve le chemin interne)
   - `/proprietes-vedettes` → `/proprietes/` (ligne 12)
   - `/nouvelles-inscriptions` → `/proprietes/` (ligne 13)
   - `/nouvelles-inscriptions-gatineau` → `/proprietes/` (ligne 14)
   - `/vendu-recemment` → `/proprietes/` (ligne 15)
   - `/vendues-recemment-gatineau` → `/proprietes/` (ligne 16)
   - `/outaouais` → `/courtier-immobilier-outaouais/` (ligne 19)
   - `/en/outaouais` → `/en/outaouais-real-estate-agent/` (ligne 20)

Les règles `/admin` (200) restent inchangées.