# Conformité RE/MAX p.41 — barre NAP du Hero

Modification chirurgicale : ajouter le numéro principal de l'agence (Bureau : 819-684-0000) à côté du cellulaire dans la barre du bas du Hero, sans toucher au reste.

## Fichiers modifiés (2)

### 1. `src/config/heroBottomInfo.tsx`
Ajouter les champs pour le numéro de l'agence à côté du cellulaire existant. Aucun champ supprimé (pour rétro-compat éventuelle).

```ts
export const heroContact = {
  city: "Gatineau, QC",
  officePhoneDisplay: "819-684-0000",
  officePhoneHref: "tel:+18196840000",
  phoneDisplay: "819-210-3044",
  phoneHref: "tel:+18192103044",
  emailDisplay: "yanis@martywaite.com",
  emailHref: "mailto:yanis@martywaite.com",
};
```

### 2. `src/components/HeroSection.tsx` — uniquement les 2 blocs NAP du bas

**Desktop (lignes ~1078–1091)** — remplacer `Ville | Cell | Email` par :

```
{city} · Bureau : <a tel:+18196840000>819-684-0000</a> · Cellulaire : <a tel:+18192103044>819-210-3044</a> · <a mailto>email</a>
```

- Séparateur `·` (cohérence footer) au lieu de `|`.
- Labels `Bureau :` / `Cellulaire :` localisés via la prop `lang` déjà disponible (`Office`/`Mobile` en EN).
- Strictement même classe, taille, couleur, opacité, font — aucune classe CSS modifiée, aucun token changé.
- Liens `tel:` sur les deux numéros, conservation des classes hover existantes sur le numéro cellulaire et application identique sur le numéro bureau.
- Le `<a mailto>` email garde toutes ses classes existantes.

**Mobile (lignes ~1105–1112)** — même substitution :

```
{city} · Bureau : 819-684-0000 · Cellulaire : 819-210-3044
<br />
{email}
```

- Mêmes labels localisés, séparateur `·` déjà présent.
- Wrap naturel autorisé, aucune réduction de taille de police.

## Hors-scope (intacts)

- Footer (`SiteFooter.tsx`)
- Header, nav, CTAs, trust badges, Framer Motion
- H1/H2/headings, JSON-LD, meta, schema.org, URLs, routes
- Couleurs, tokens Tailwind, typographie, line-height, assets, images, logos
- Toutes les autres pages utilisant `819-210-3044`

## Validation

1. Hero desktop affiche : `Gatineau, QC · Bureau : 819-684-0000 · Cellulaire : 819-210-3044 · yanis@martywaite.com`
2. Hero mobile : même contenu, wrap naturel.
3. Les deux numéros : taille/couleur/typo identiques (héritées du même `<address>`/`<span>`).
4. Clic sur 819-684-0000 → `tel:+18196840000`. Clic sur 819-210-3044 → `tel:+18192103044`.
5. Footer inchangé. EN affiche `Office :` / `Mobile :`.
