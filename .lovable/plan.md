# Diagnostic clé

Avant le plan, deux causes racines confirmées par lecture du code :

1. **FAQ absente du rendu** — Le markdown contient bien `## FAQ` + 5 paires, mais sous la forme `**Q : ...**` / `R : ...`. Le parser `BlogArticlePage.tsx` (ligne 244) attend `^Q\s*[:：]` sans gérer le `**` markdown. Les questions ne sont donc jamais capturées → `faqItems` reste vide → la section ET le schéma JSON-LD sont supprimés (gate `faqItems.length > 0`).
2. **H3 visuellement plats** — Stylés en `var(--ink)` 22px weight 500, identiques visuellement à l'oeil par rapport au body. Style à différencier.
3. **Reading time** — Calculé automatiquement (mots / 200). Ne stocke pas. Pour harmoniser FR/EN à 6 min : ajouter un override optionnel `readingTimeOverride`.
4. **Bio** — Code en dur dit "Plus de 300 transactions". À corriger en "Plus de 200 transactions" (FR + EN).

# Fichiers modifiés (2)

- `src/data/blog-posts.ts` — ajout des champs optionnels + population sur ce slug uniquement
- `src/pages/BlogArticlePage.tsx` — parser FAQ tolérant au `**`, style H3, drop cap gold, support `ctaOverride`/`readingTimeOverride`, bio 200 (au lieu 300)

Aucun autre fichier touché. Aucun autre article modifié dans son contenu.

# Détail des 7 corrections

### #1 — H3 stylés (template global)
Modifier le rendu H3 dans `renderBody` :
- Cormorant Garamond, **gold `var(--gold)`**, 28px (mobile)/32px (desktop) via `clamp(1.75rem, 3vw, 2rem)`
- Weight 500, line-height 1.3, `mt: 48px`, `mb: 16px`
- Impact rétro-actif sur articles existants ayant des H3 (`###`) — vérifié : style cohérent avec l'identité éditoriale (gold accent déjà utilisé partout). Pas de régression visuelle attendue ; les autres articles bénéficient du même upgrade.

### #2 — Parser FAQ tolérant
Dans `BlogArticlePage.tsx` autour des lignes 244-245, remplacer les regex par :
```ts
const stripped = line.replace(/^\*\*\s*/, "").replace(/\s*\*\*$/, "").trim();
const qMatch = stripped.match(/^Q\d*\s*[:：]\s*(.+)$/i);
const aMatch = stripped.match(/^[RA]\s*[:：]\s*(.+)$/i);
```
Cela gère `**Q : ...**`, `**Q1 : ...**`, `Q : ...`. Une fois capturés, la section FAQ visible (lignes 456-490) ET le schéma JSON-LD `FaqPageJsonLd` (ligne 366) s'émettent automatiquement avec les 5 paires exactes.

Style FAQ existant déjà conforme (H2 Cormorant, numérotation gold, séparateurs). Aucun changement de style nécessaire — la section sera simplement visible.

### #3 — CTA override (par-article)
Ajout `BlogPost.ctaOverride?: { eyebrow, title, text, buttonLabel, buttonHref, eyebrowEn, titleEn, textEn, buttonLabelEn, buttonHrefEn }`. Lecture dans la section CTA full-width (lignes 578-611) : si `post.ctaOverride` présent, rendu avec ces valeurs ; sinon fallback "Vous regardez un plex" inchangé. Population uniquement sur l'article cible avec les copies fournies (FR vers `/vendre`, EN vers `/en/sell`).

### #4 — Date
`publishDate: "2026-05-06"` (déjà à 2026-05-06 actuellement — vérifier et confirmer ; si besoin re-set).

### #5 — Reading time 6 min FR/EN
Ajout `BlogPost.readingTimeOverride?: number`. Lecture : `const readingTime = post.readingTimeOverride ?? autoCalculated;`. Set à `6` sur cet article uniquement.

### #6 — Bio 200 transactions
Ligne 643-644 de `BlogArticlePage.tsx` : remplacer "Plus de 300 transactions" → "Plus de 200 transactions complétées dans la région" (FR) et "Over 300 transactions" → "Over 200 transactions completed in the region" (EN). Ce texte est en dur dans le template → s'applique à tous les articles. Conforme aux specs (200 est le bon chiffre selon le brief).

### #7 — Drop cap visible
Ligne 332 : changer `color: "var(--ink)"` → `color: "var(--gold)"` pour la lettrine. Conserve 80px desktop, ajout media query non nécessaire (taille déjà responsive via float). Affecte tous les articles — cohérence éditoriale renforcée (gold accent partout).

# Non-régression

- 4 nouveaux champs OPTIONNELS sur `BlogPost` → fallback inchangé sur les 13 autres articles
- Style H3 + drop cap + bio = changements globaux assumés et cohérents
- Parser FAQ : plus tolérant, ne casse aucun article existant (les anciens patterns continuent de matcher)
- Schémas JSON-LD : émission FAQPage uniquement si `emitFaqSchema: true` (déjà en place)

# Vérification post-impl

1. Naviguer `/blogue/3-erreurs-prix-vendeur-gatineau-2026` → vérifier H3 gold, FAQ visible, CTA "Évaluation gratuite", bio "200 transactions", drop cap "L" gold
2. Idem version EN `/en/blog/3-pricing-mistakes-gatineau-sellers-2026`
3. Inspecter 2 articles existants (ex: market 2026, plex) → confirmer rendu cohérent
4. Vérifier `<script type="application/ld+json">` FAQPage présent dans le DOM avec 5 paires
