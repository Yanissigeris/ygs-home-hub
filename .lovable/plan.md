# Plan — Contraste AAA sur overline & subtitle (SectionHeading global)

## Problème mesuré

| Élément | Couleur actuelle | Sur fond | Ratio | WCAG |
|---|---|---|---|---|
| `.label-overline` (« Articles ») | `var(--gold)` #A88A5A | cream #F7F4EE | ~2.94:1 | ❌ AA |
| `.prose-body` subtitle | `text-muted-foreground` | cream | ~4.5:1 | ❌ AAA |
| H2 « Derniers articles » | `var(--ink)` #17303B | cream | ~12:1 | ✅ AAA (déjà OK) |

Cible : **AAA partout (≥7:1 pour body, ≥4.5:1 pour large text 18pt+)**.

## Changements (2 fichiers)

### 1. `src/index.css` — `.label-overline` (L.284-303)

Préserver l'identité dorée via le **trait** uniquement, passer le **texte en ink** :

```css
.label-overline {
  font-family: var(--sans);
  font-size: .62rem;
  font-weight: 600;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--ink);            /* était: var(--gold) — AAA ~12:1 */
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.label-overline::before {
  content: '';
  display: inline-block;
  width: 22px;
  height: 1px;
  background: var(--gold);       /* trait doré conservé = identité préservée */
  flex-shrink: 0;
}
```

### 2. `src/index.css` — `.prose-body` (L.278-282)

Remplacer `text-muted-foreground` (variable) par la variable canonique du body article déjà utilisée (`--article-body-color` = #17303B ou équivalent), avec un léger allègement contrôlé :

```css
.prose-body {
  @apply text-[1rem] leading-[1.8];
  color: var(--ink);              /* AAA ~12:1 sur cream */
  max-width: 38rem;
  font-weight: 300;
}
```

> Si `--article-body-color` existe déjà (créée lors d'une itération précédente), l'utiliser à la place de `var(--ink)` pour cohérence avec les articles de blogue.

## Ce qui reste intact

- H1, H2, H3 (déjà ink, AAA)
- Boutons CTA dorés (texte ink déjà corrigé)
- Liens « Lire → » (déjà ink + hover gold)
- Trait doré décoratif de l'overline (identité dorée préservée)
- Dark mode / hero overlays (overrides existants `[data-hero-dark]`)

## Vérification post-implémentation

Mesurer via DevTools sur `/blogue` :
1. « ARTICLES » overline → `#17303B` sur `#F7F4EE` → **12.47:1** ✅ AAA
2. Subtitle prose-body (sur n'importe quelle page utilisant SectionHeading avec subtitle) → **12.47:1** ✅ AAA
3. Non-régression : trait doré toujours visible avant l'overline
4. Non-régression : overlines blanches dans les hero sombres (via `[data-hero-dark] p.label-overline` L.712)
