# Refonte typographique des cards du PathwaySection

Suppression du bloc image 16:9 dans chaque card et adoption d'une présentation purement éditoriale (numéros serif italiques, titre, description, CTA), sans toucher à la structure asymétrique de la section ni à la logique métier.

## Fichier modifié

Un seul : `src/components/PathwaySection.tsx`.

## Ce qui reste intact (verbatim)

- Imports : `lifestyleBgImg`, `setAvatarIntent`, `AvatarIntent`, `trackEvent`, `Link`, `React`
- Imports `cardVendreImg` / `cardAcheterImg` / `cardPlexImg` : conservés (les objets `pathways` y font toujours référence via `image` / `imageSm`, donc TypeScript ne signalera pas unused)
- Tableaux `pathwaysFr` / `pathwaysEn` (champs `image`, `imageSm`, `imageAlt` gardés dans les objets)
- Interface `Pathway`, `PathwaySectionProps`
- `headingFr` / `headingEn` (overline, titleFirst, titleAccent, subtitle)
- `forwardRef`, `displayName`, export
- Section : background cream `#F5F1EA`, photo lifestyle absolute right 55% desktop, band 200px mobile
- Header éditorial two-tone (`#17303B` + `#A88A5A` italic) + subtitle
- Wrapper cards flottant : gradient `linear-gradient(175deg, #0c1f28, #17303B)`, boxShadow `0 30px 80px rgba(23,48,59,0.35)`, borderRadius 3, overflow hidden, filet doré 2px en haut
- Grid `grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr]`
- `onClick` → `setAvatarIntent(p.intent)` + `trackEvent("avatar_router_select", { avatar: p.intent })`

## Changement précis

Dans `pathways.map((p, i) => (...))`, remplacer l'intégralité du contenu interne du `<Link>` (actuellement : div image 16:9 avec `<img>`, span numéro absolute, span badge absolute + div body) par un seul body purement typographique.

### Nouveau contenu interne du `<Link>`

```tsx
<Link
  key={p.href}
  to={p.href}
  onClick={() => {
    setAvatarIntent(p.intent);
    trackEvent("avatar_router_select", { avatar: p.intent });
  }}
  className="group flex flex-col transition-all duration-300 relative overflow-hidden p-[1.5rem] md:p-[1.75rem_1.5rem]"
  style={{
    background: "rgba(255,255,255,0.03)",
    borderRight: i < pathways.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
    minHeight: "270px",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.zIndex = "2";
    e.currentTarget.style.boxShadow = "0 4px 0 #A88A5A, 0 24px 48px rgba(168,138,90,0.12)";
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
    const title = e.currentTarget.querySelector('h3');
    if (title) title.style.color = "#BFA476";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.zIndex = "";
    e.currentTarget.style.boxShadow = "";
    e.currentTarget.style.transform = "";
    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
    const title = e.currentTarget.querySelector('h3');
    if (title) title.style.color = "#F5F1EA";
  }}
>
  {p.badge && (
    <span style={{
      fontSize: "0.56rem", color: "#A88A5A", textTransform: "uppercase",
      letterSpacing: "0.12em", fontWeight: 600, marginBottom: "0.75rem",
      display: "block",
    }}>
      — {p.badge}
    </span>
  )}
  <span aria-hidden="true" style={{
    fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(2.25rem, 4vw, 2.75rem)",
    lineHeight: 1, color: "#A88A5A", opacity: 0.7, marginBottom: "0.75rem",
    display: "block",
  }}>
    {p.num}
  </span>
  <h3 style={{
    fontFamily: "var(--serif)", fontStyle: "italic",
    fontSize: "clamp(1.05rem, 2vw, 1.2rem)", fontWeight: 600,
    color: "#F5F1EA", letterSpacing: "-.01em", marginBottom: "0.5rem",
  }}>
    {p.title}
  </h3>
  <p className="flex-1" style={{
    fontSize: "0.8rem", color: "rgba(245,241,234,0.55)", lineHeight: 1.55,
  }}>
    {p.text}
  </p>
  <span className="mt-4 inline-flex items-center gap-2 transition-all group-hover:gap-3"
    style={{
      fontSize: ".72rem", fontWeight: 600, color: "#A88A5A",
      letterSpacing: ".06em", textTransform: "uppercase",
      borderBottom: "1px solid rgba(168,138,90,.3)",
      paddingBottom: 2, alignSelf: "flex-start",
      minHeight: 44, display: "inline-flex", alignItems: "center",
    }}>
    {p.cta} →
  </span>
</Link>
```

### Notes techniques

- Suppression complète du `<div className="aspect-[16/9] img-shimmer">` et de son `<img>`.
- Numéro et badge migrent dans le body (plus d'`absolute top-4`).
- Hover : suppression des deux blocs `const img = ... saturate(...)` (puisqu'il n'y a plus d'image dans la card).
- Padding appliqué directement sur le `<Link>` (plus besoin du wrapper body intérieur).

## Critères d'acceptation

- Plus aucune `<img>` rendue dans les cards.
- Ordre vertical : badge optionnel → numéro serif italique gold (~44px) → h3 italique cream (~19px) → description 0.8rem → CTA gold underline.
- Card 01 affiche le badge "— Priorité investisseurs" / "— Investors first".
- Cards `minHeight: 270px`, padding `p-[1.5rem] md:p-[1.75rem_1.5rem]`.
- Hover : `translateY(-5px)`, gold shadow, background lighten, h3 → `#BFA476`. Aucune référence à `<img>` dans le hover.
- FR et EN rendent correctement.
- Section asymétrique (cream + photo 55% droite + cards flottantes) inchangée.
- Wrapper conserve : gradient petrol, boxShadow profonde, borderRadius 3, filet doré 2px.
- `onClick` → `setAvatarIntent` + `trackEvent("avatar_router_select", ...)` inchangé.
- TypeScript propre, aucun fichier autre que `PathwaySection.tsx` modifié.
