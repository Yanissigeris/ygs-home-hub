# Hero Premium — Plan révisé v2 (intégrant les 6 ajustements)

## Pattern i18n confirmé

On garde le pattern existant `lang === "fr" ? FR : EN` (option a). Aucune nouvelle dépendance, aucun fichier JSON. Les chaînes haut-niveau passent en **props** depuis `Index.tsx` (FR) et `IndexEn.tsx` (EN). Les chaînes structurelles internes au hero (3 lignes du H1, trust strip, sentinelle eyebrow) utilisent le ternaire `lang` directement dans `HeroSection.tsx`.

## Fichiers touchés

```
src/pages/Index.tsx              ← subtitle FR, primaryCta label FR, nouvelle prop cities, title préservé pour JSON-LD
src/pages/en/IndexEn.tsx         ← subtitle EN, primaryCta label EN, prop cities (identique), title préservé
src/components/HeroSection.tsx   ← H1 tri-lignes, eyebrow array+responsive, CTA refondu (ArrowRight, full-width mobile, sentence case), trust strip flex-wrap, portrait mobile +60px, chevron hidden md:block
src/components/CookieConsent.tsx ← bouton 🍪 reopen mobile : bottom-right au-dessus sticky CTA, z-30, fade-cycle 6s + scroll
src/index.css                    ← --sticky-cta-height var + min-[381px] helper si besoin
```

Aucun autre fichier modifié.

---

## Changement 1 — H1 signature (3 lignes)

`HeroSection.tsx` lignes ~589-620 : remplacer le contenu du `<h1>` par 3 `<span className="block">`.

Style commun (identique FR/EN) :
- `font-family: var(--serif)` (Cormorant Garamond hérité)
- `font-size: clamp(2.4rem, 5.5vw, 5rem)` (taille de l'actuelle grosse ligne or)
- `line-height: 1.0`
- `letter-spacing: -0.01em`

Par ligne :
- L1 : `font-style: italic; font-weight: 400; color: #A88A5A`
- L2 : `font-style: normal; font-weight: 500; color: #FFFFFF`
- L3 : `font-style: italic; font-weight: 400; color: #A88A5A`

Animation : classe `hero-fade-in` conservée par span avec `animationDelay` inline `0.1s` / `0.18s` / `0.26s` (stagger 80 ms).

Contenu (ternaire `lang`) :
- FR : `Les chiffres.` / `Les options.` / `Vous décidez.`
- EN : `The numbers.` / `The options.` / `You decide.`

Reste **un seul `<h1>`** dans le DOM.

---

## Changement 2 — Sous-titre

Props mises à jour dans les deux pages :
- `Index.tsx` → `subtitle="Courtier immobilier en Outaouais et Gatineau. Stratégie claire pour vendre, acheter ou investir."`
- `IndexEn.tsx` → `subtitle="Real estate broker in the Outaouais and Gatineau region. Clear strategy to sell, buy or invest."`

Style du `<p>` (lignes 622-635) : DM Sans hérité, weight 400, white, **`line-height: 1.75` conservé** (pas réduit à 1.5 — ajustement #2).

---

## Changement 3 — Eyebrow régional (Option B : prop cities array)

Nouvelle prop sur `HeroSectionProps` :
```ts
cities?: string[]; // priorité sur overline si défini
```

Pages (identique FR/EN, noms propres) :
```tsx
cities={["GATINEAU", "AYLMER", "HULL", "CHELSEA", "CANTLEY"]}
```

Rendu dans `HeroSection.tsx` (remplace lignes 574-587, branche `if (cities)`) :
```tsx
<p className="hero-fade-in mb-3 sm:mb-6 uppercase font-semibold whitespace-nowrap"
   style={{ color: "var(--gold)", fontFamily: "var(--sans)",
            fontSize: "max(.6rem, .62rem)", letterSpacing: ".22em",
            opacity: 0.8, textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
  <span className="sm:hidden">{cities.slice(0, 3).join(" · ")}</span>
  <span className="hidden sm:inline">{cities.join(" · ")}</span>
</p>
```

- Aucun `·` orphelin (joint via `.join()`)
- Mobile (≤640px) : 3 villes
- Desktop (>640px) : 5 villes
- Couleur or `#A88A5A` opacity 0.8
- `whitespace-nowrap` (1 ligne mobile garantie)

**Rétrocompat** : si `cities` non défini mais `overline` défini, on rend l'ancien `{overline.replace(...)}` comme avant. Aucune autre page cassée.

---

## Changement 4 — CTA primaire

Refonte du `<Link>` primaire (`HeroSection.tsx` lignes 659-679).

Imports : ajouter `import { ArrowRight } from "lucide-react"` en haut du fichier (lucide déjà installé).

Props label dans pages :
- `Index.tsx` → `primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}`
- `IndexEn.tsx` → `primaryCta={{ label: "Free home valuation", href: "/en/home-valuation" }}`

Bouton :
```tsx
<Link
  to={primaryCta.href}
  className="hero-cta-btn inline-flex items-center justify-center gap-2
             w-full max-w-[360px] sm:w-auto sm:max-w-none
             py-4 px-6 sm:py-3.5 sm:px-8
             tracking-normal
             transition-opacity duration-200
             hover:opacity-90 active:scale-[0.98]
             focus-visible:outline-none focus-visible:ring-2
             focus-visible:ring-offset-2 focus-visible:ring-[#A88A5A]/50"
  style={{
    background: "#A88A5A",
    color: "#FFFFFF",
    fontFamily: "var(--sans)",
    fontWeight: 500,
    fontSize: ".95rem",
    borderRadius: 0,
    boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
  }}
  onClick={() => trackCTAClick(primaryCta.label, "hero-primary")}
>
  {primaryCta.label}
  <ArrowRight className="w-4 h-4" aria-hidden="true" />
</Link>
```

- Sentence case (label déjà ainsi dans la prop, **aucun `text-transform: uppercase`**)
- `tracking-normal` (pas widest)
- Hover = opacity uniquement, **aucun scale**
- Active = `scale-[0.98]`
- Focus ring or 50%
- Caractère `→` retiré

CTA secondaire `Consultation` : on retire aussi le `→` inline (remplacé par `<ArrowRight className="w-3.5 h-3.5" />` ou laissé sans icône — j'opte pour **sans icône** pour respecter la hiérarchie texte secondaire). Style sinon inchangé.

---

## Changement 5 — Trust strip sous CTA secondaire

Inséré juste après le bloc des CTAs (après ligne 697), à l'intérieur du même container `.hero-fade-in` parent :

```tsx
<div className="mt-8 md:mt-6 flex flex-wrap items-center justify-start gap-x-3 gap-y-2
                text-[11px] tracking-[0.15em] uppercase font-medium"
     style={{ color: "rgba(168, 138, 90, 0.7)", fontFamily: "var(--sans)" }}>
  <span className="hidden min-[381px]:inline">
    {lang === "fr" ? "9 ans" : "9 years"}
  </span>
  <span aria-hidden="true" className="hidden min-[381px]:inline">·</span>
  <span>{lang === "fr" ? "Hall of Fame RE/MAX" : "RE/MAX Hall of Fame"}</span>
  <span aria-hidden="true">·</span>
  <span>5★ Google</span>
</div>
```

Ajustement #4 appliqué :
- `flex-wrap` ajouté → wrap propre à 320 px au lieu d'overflow horizontal
- `justify-start` (alignement gauche cohérent avec le reste du hero)
- `gap-y-2` pour respirer si wrap effectif
- Premier item `9 ans / 9 years` masqué sous 381 px via `min-[381px]:inline` (Tailwind arbitrary breakpoint, zéro CSS supplémentaire) — comportement de fallback demandé

Caractères `·` (U+00B7) et `★` (U+2605) en UTF-8 réel, pas d'entités.

---

## Changement 6 — Cutout portrait mobile remonté

`HeroSection.tsx` ligne ~796-806 (l'`<img>` dans `<picture className="md:hidden">`) :
- `bottom: 0` → **`bottom: 60px`**
- Tout le reste inchangé (`right: 0`, `width: 48vw`, `maxHeight: 75%`, `objectPosition: "bottom right"`, `zIndex: 4`)
- Aucune Framer Motion existante à préserver sur le mobile portrait
- Desktop portrait (`<picture className="hidden md:block">`) : **aucun changement**

---

## Changement 7 — Cookie 🍪 reopen mobile (fade-cycle scroll-aware)

`CookieConsent.tsx` lignes 380-393. Ajustements #3 et #5 combinés.

Ajout dans `src/index.css` (ajustement #5) :
```css
:root {
  --sticky-cta-height: 56px; /* StickyMobileCTA mesuré : ~44px touch + 12px safe-area */
}
```

Je vérifierai la vraie hauteur de `StickyMobileCTA` au build (lecture du composant + screenshot DevTools). Si elle diffère, j'ajuste la valeur var. Fallback dynamique via `useRef` rejeté car la var statique est suffisamment stable et plus simple à maintenir.

Logique React (mobile uniquement, via `useIsMobile()` déjà utilisé) :

```tsx
const [reopenVisible, setReopenVisible] = React.useState(true);
const fadeTimerRef = React.useRef<number | null>(null);

const startFadeTimer = React.useCallback(() => {
  if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
  setReopenVisible(true);
  fadeTimerRef.current = window.setTimeout(() => setReopenVisible(false), 6000);
}, []);

React.useEffect(() => {
  if (!dismissed || visible || showPrefs) return;
  startFadeTimer();
  let lastShown = true;
  const onScroll = () => {
    if (window.scrollY > 200 && lastShown) {
      lastShown = false;
      setReopenVisible(false);
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    } else if (window.scrollY <= 50 && !lastShown) {
      lastShown = true;
      startFadeTimer(); // réapparition + reset 6s
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", onScroll);
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
  };
}, [dismissed, visible, showPrefs, startFadeTimer]);
```

Style du bouton (mobile) :
```tsx
style={{
  position: "fixed",
  bottom: isMobile
    ? `calc(var(--sticky-cta-height) + 1.5rem + env(safe-area-inset-bottom, 0px))`
    : "5.5rem",
  right: isMobile ? "1rem" : undefined,
  left: isMobile ? undefined : "1rem",
  width: 32, height: 32,
  background: "var(--ink)",
  border: "1px solid rgba(255,255,255,.1)",
  fontSize: "1rem", lineHeight: 1,
  zIndex: isMobile ? 30 : 9998,
  opacity: isMobile ? (reopenVisible ? 1 : 0) : 1,
  pointerEvents: isMobile && !reopenVisible ? "none" : "auto",
  transition: "opacity 0.5s ease",
}}
```

Comportement :
- Apparition initiale après dismissal du banner
- Visible 6s puis fade out
- Si scroll > 200 px : fade out immédiat
- Si scroll back ≤ 50 px : fade in + nouveau timer 6s
- Cycle infini possible (pas de cache permanent pour la session)
- Desktop : comportement actuel **inchangé** (bottom-left, opacity 1, z 9998)

---

## Changement 8 — Chevron scroll-down retiré sur mobile

`HeroSection.tsx` ligne 101 (composant `ScrollChevron`) : ajouter `hidden md:block` à la className du `<button>`. Desktop conserve l'animation bounce.

---

## Confirmation JSON-LD VideoObject (ajustement #6)

Vérifié dans le code actuel (`HeroSection.tsx` lignes 365-388) :

```ts
const schema = {
  "@type": "VideoObject",
  name: title,           // ← prop title de la page
  description: subtitle, // ← prop subtitle de la page
  thumbnailUrl: ...,
  contentUrl: ...,
};
```

**Garanties** :
- Prop `title` **préservée** dans `Index.tsx` : `title="Votre courtier immobilier à Gatineau — Outaouais"`
- Prop `title` **préservée** dans `IndexEn.tsx` : `title="Your real estate broker in Gatineau — Outaouais"`
- Cette prop alimente `schema.name` du VideoObject JSON-LD → SEO sémantique conservé
- Le `<h1>` visuel ignore complètement la prop `title` et rend les 3 spans signature
- La prop `subtitle` (mise à jour, voir §2) alimente `schema.description`

Vérification post-build :
1. DevTools → Elements → un seul `<h1>` contenant exactement 3 `<span class="block">`
2. DevTools → `<head>` → `<script type="application/ld+json" id="ygs-jsonld-video">` contient `"name": "Votre courtier immobilier à Gatineau — Outaouais"` (FR) ou EN équivalent

---

## Protections non négociables — checklist

- [x] `<h1>` reste un `<h1>` (1 seul, 3 spans block enfants)
- [x] JSON-LD VideoObject : `name` = title préservé (phrase longue)
- [x] JSON-LD RealEstateAgent / Person / BreadcrumbList / FAQ / HowTo : aucun touché
- [x] Meta SEO + hreflang (`<SEO>`, `<PageMeta>` dans pages) : inchangés
- [x] ARIA : chevron desktop garde `aria-label`, séparateurs trust strip `aria-hidden="true"`
- [x] Routes `/` et `/en` : non touchées
- [x] `hero-fade-in` animations : conservées + stagger ajouté
- [x] Vidéo desktop : aucun changement
- [x] Sections sous hero : aucun changement
- [x] Palette : `#17303B` `#A88A5A` `#FFFFFF` `#F7F4EE` `#222831` `#D9E1E5` uniquement
- [x] Fontes : `var(--serif)` Cormorant Garamond + `var(--sans)` DM Sans (identiques FR/EN)
- [x] UTF-8 réel : `É é · ★` (jamais `&eacute;` etc.)
- [x] `→` U+2192 supprimé partout, remplacé par `<ArrowRight />`
- [x] Aucune nouvelle dépendance npm (lucide-react déjà présent)

---

## Validation post-build (mode build)

1. Screenshots **320 / 375 / 390 / 768 / 1440 px** en FR puis EN (10 captures)
2. Capture DOM : `<h1>` avec 3 `<span class="block">`
3. Capture DOM : `<script type="application/ld+json" id="ygs-jsonld-video">` complet
4. Console : zéro `Ã©`, zéro `&#xxx;`, zéro glyphe carré
5. Vérifier que le bouton 🍪 mobile n'overlap pas le sticky "Appeler" et fait bien son cycle fade

---

## Prêt pour le go

Si tu approuves, je passe en build et j'exécute les modifications dans l'ordre suivant :
1. `Index.tsx` + `IndexEn.tsx` (props : cities, subtitle, primaryCta label)
2. `HeroSection.tsx` (H1 3-spans, eyebrow array, CTA ArrowRight, trust strip, portrait +60px, chevron hidden mobile)
3. `src/index.css` (`--sticky-cta-height`)
4. `CookieConsent.tsx` (bouton 🍪 fade-cycle scroll-aware)
5. Captures de validation

Confirme avec un "go" et j'enchaîne.
