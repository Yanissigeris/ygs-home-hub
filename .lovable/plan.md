## Sprint — Conformité RE/MAX page Contact (À propos)

Routes inchangées: `/contact-yanis` (FR) et `/en/contact` (EN).

### 1. Nouveau composant `src/components/RemaxAgencyBlock.tsx`

Carte d'affiliation agence, fond crème `#F7F4EE`, texte foncé. Props: `lang: "fr" | "en"`.

Contenu (ordre vertical):
- Ligne logos: `remaxLogotypeBlack` (h ~32px) + montgolfière (h ~36px) côte à côte
- Nom agence: **RE/MAX Direct inc.** (DM Sans, ~20px, semibold) — taille ≥ 50% du H2
- Sous-titre: « Agence immobilière » (FR) / « Real estate agency » (EN), ~13px, opacity 70%
- Adresse: `216, chemin d'Aylmer, Gatineau (Québec) J9H 1A4`
- Téléphone bureau: `Bur. : 819-684-0000` (FR) / `Office: 819-684-0000` (EN), `tel:+18196840000`

Import montgolfière (placeholder temporaire, sera switché sur signal utilisateur):
```ts
// TODO: replace with @/assets/remax-balloon-color.svg once uploaded by user
import remaxBalloonColor from "@/assets/remax-balloon-official.png";
```

### 2. `src/components/ContactCard.tsx` — hiérarchie téléphone (Règlement 2.4.3)

Refactor `items` en `{ icon, label, value, href? }` (rétrocompat).

Ordre fixe:
1. **Bur. / Office** : 819-684-0000 → `tel:+18196840000`
2. **Cell. / Mobile** : 819-210-3044 → `tel:+18192103044` (≤ taille Bur.)
3. **Email** : `yanis@martywaite.com` → `mailto:yanis@martywaite.com` (≤ taille Bur.)
4. **Région / Area** : Gatineau, Aylmer, Hull, Plateau

Toutes les lignes: même couleur, police, taille.

### 3. `src/components/ProfileSection.tsx`

- Logo YGS: `clamp(145px, 20vw, 180px)` → `clamp(70px, 10vw, 90px)` (≈50%)
- Nouveau prop `affiliationSlot?: ReactNode` rendu sous photo + logo YGS

### 4. Pages

**`src/pages/ContactPage.tsx`** (FR):
- `contactItems` restructurés (Bur. / Cell. / Email / Région) avec `yanis@martywaite.com`
- `affiliationSlot={<RemaxAgencyBlock lang="fr" />}`

**`src/pages/en/ContactPageEn.tsx`** (EN):
- Mirror avec `lang="en"`, labels Office / Mobile / Email / Area, même email `yanis@martywaite.com`

### 5. Responsive

- Desktop ≥ md: colonne gauche (38%) empile photo → logo YGS → bloc agence. Coordonnées à droite.
- Mobile: empilage vertical, bloc agence pleine largeur.

### Checklist conformité

- [x] Logos officiels RE/MAX (logotype noir + montgolfière couleur après upload)
- [x] RE/MAX Direct inc. + « Agence immobilière »
- [x] Adresse complète agence
- [x] Bur. en premier, Cell. en second, même typo/couleur/taille
- [x] Email `yanis@martywaite.com` ≤ taille Bur.
- [x] Logo YGS ≤ 50% logo RE/MAX
- [x] Nom agence ≥ 50% nom courtier
- [x] Parité FR/EN
- [x] Aucune régression: H1, méta, JSON-LD, bio, photo, nav, CTA, formulaire, reviews

### Fichiers touchés

- `src/components/RemaxAgencyBlock.tsx` (nouveau)
- `src/components/ContactCard.tsx`
- `src/components/ProfileSection.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/en/ContactPageEn.tsx`

### Étapes post-implémentation

1. Tu uploades `src/assets/remax-balloon-color.svg`
2. Tu me dis « go » → je change l'import (`.png` → `.svg`) — 1 ligne
3. Vérif visuelle FR + EN, desktop + mobile
4. Push prod sur ton signal final (pas avant)

### Mémoire à mettre à jour

- `mem://project/contact-info`: email pro = `yanis@martywaite.com` (remplace ancienne valeur si présente)
