## Objectif

Ajouter un nouvel article bilingue au blog dans `src/data/blog-posts.ts`, sans toucher à aucun autre fichier.

## Fichier modifié

- `src/data/blog-posts.ts` — ajouter un seul nouvel objet `BlogPost` en tête de tableau (position la plus récente par date), en réutilisant l'image `blogMarket` déjà importée.

## Contenu de l'article (FR)

- `slug`: `inventaire-gatineau-2026-30-pourcent-inscriptions`
- `category`: `MARCHÉ · UPDATE T2 2026`
- `publishDate`: `2026-07-24`
- `seoTitle` / `metaDescription`: exactement les valeurs fournies
- `titleLines`: ligne 1 « 2 007 propriétés à vendre », ligne 2 « à Gatineau », ligne 3 « ce que ça change pour votre prix » (italic via convention existante)
- `heroStats`: `2 007` / `+30 %` / `27 j` avec les 3 labels fournis
- `excerpt`: le lead fourni
- `body`: markdown contenant, dans l'ordre :
  - Lead
  - Phrase GEO en italique/citation
  - 3 sections `## H3` avec titres et corps exacts fournis, y compris le lien interne markdown `[évaluation de propriété à Gatineau](/evaluation-gratuite-gatineau/)` et le paragraphe downsizer
  - Bloc « Regard YGS »
  - Section `## FAQ` avec 3 paires Q/R au format `**Q : …**` / `**R : …**` (compatible avec `extractFaqPairs` de `scripts/blog-extractor.mjs`)
  - Signature bio
- `emitFaqSchema`: `true`
- `h3Style`: `"prominent"`
- `readingTimeOverride`: `4`
- `sources`: entrée « Chambre immobilière de l'Outaouais / APCIQ — Statistiques T2 2026, RMR de Gatineau, publiées le 14 juillet 2026 » (FR + EN)
- `ctaOverride`: eyebrow/title/text repris du bloc CTA fourni, bouton « Demander VALEUR » → `/evaluation-gratuite-gatineau/`

## Contenu de l'article (EN)

Traduction fidèle et localisée en anglais canadien :

- `slugEn`: `gatineau-inventory-2026-30-percent-listings`
- `categoryEn`: `MARKET · Q2 2026 UPDATE`
- `titleEn` + `titleLinesEn`: « 2,007 homes for sale » / « in Gatineau » / « what it means for your price »
- `seoTitleEn`: « Gatineau listings up 30%: what it means for your price »
- `metaDescriptionEn`: équivalent EN sous 160 caractères
- `heroStats` EN: `2,007` / `+30%` / `27 d` avec labels traduits
- `excerptEn`, `bodyEn` : traduction complète (lead, phrase GEO, 3 H3, downsizer, Regard YGS = « What I'm seeing », FAQ 3 Q/A, bio)
- Lien interne EN : `[home valuation in Gatineau](/en/home-valuation/)` (route EN équivalente existante)
- `ctaOverride` EN : version anglaise du CTA

## Détails techniques

- Insérer l'objet **avant** l'article d'avril 2026 pour que le tri par `publishDate` place le nouvel article en tête / featured.
- `featured`: pas activé (l'article d'avril reste featured) — sauf indication contraire.
- Format markdown FAQ vérifié compatible avec le parser (`**Q : …**` / `**R : …**`) pour émettre correctement le JSON-LD `FAQPage`.
- Aucun nouvel import d'image : `featuredImage: blogMarket`.
- Aucun autre fichier touché : pas de changement à `_redirects`, `sitemap`, `breadcrumbs`, etc. (les listes de blog et le sitemap sont générés automatiquement à partir de `blog-posts.ts`).

## Vérifications post-édition

- `tsgo` sur le fichier modifié.
- Confirmer visuellement le rendu FR (`/blogue/inventaire-gatineau-2026-30-pourcent-inscriptions/`) et EN (`/en/blog/gatineau-inventory-2026-30-percent-listings/`) via lecture du fichier — pas de build manuel requis.
