# Hero mobile — portrait pleinement visible dès le chargement

## Problème

Sur la capture (iPhone, 390×844), le portrait de Yanis n'apparaît qu'en bas à droite, partiellement masqué par la barre Safari. Cause : dans `src/components/HeroSection.tsx` (lignes 934-945), le portrait mobile est limité à `width: 48vw` / `maxHeight: 75%`, et le hero utilise `100svh` qui inclut la zone potentiellement recouverte.

## Changements (mobile uniquement, < 768px)

**Cible : `src/components/HeroSection.tsx` — bloc mobile portrait (~lignes 924-949)**

1. **Agrandir le portrait** :
   - `width: 48vw` → `width: 62vw` (visage et torse bien visibles sans empiéter sur le titre)
   - `maxHeight: 75%` → `maxHeight: 68%` (laisse de la place à la barre safe-area en bas)
   - `right: 0` → `right: -2vw` (cadrage plus aéré façon agence)
   - Ajouter `paddingBottom: env(safe-area-inset-bottom)` via wrapper ou `bottom: env(safe-area-inset-bottom, 0px)` pour ne plus être avalé par la barre iOS.

2. **Hauteur du hero mobile** : passer le `minHeight: "100svh"` (lignes 501 et 664) en `min(100svh, 100dvh)` n'est pas nécessaire — `100svh` est déjà la "small viewport height" qui exclut la barre. **Garder tel quel.** Le vrai correctif est le portrait + safe-area.

3. **Z-index / lisibilité texte** : le texte est déjà en `z-20` à gauche et le portrait en `z-4` à droite — pas de chevauchement à craindre, le titre occupe la moitié gauche (~50vw) et le portrait la moitié droite (62vw avec léger débordement à droite).

4. **Mask doux côté gauche du portrait** (optionnel, premium) : ajouter un léger `WebkitMaskImage: linear-gradient(to left, black 70%, transparent 100%)` pour fondre la jonction texte/portrait sans halo dur.

## Préservé strictement

- Toute la logique desktop (≥768px) — picture, sources AVIF/WebP, mask radial, parallax.
- Tous les `srcSet`/`sizes`/DPR descriptors (LCP perf intacte).
- `loading="eager"`, `fetchpriority="high"`, `decoding="async"`.
- Texte, CTAs, gradients, vidéo, scroll chevron.
- FR + EN identiques (même composant).

## Vérification

Après implémentation : screenshot 390×844 pour confirmer que le visage est entier, le titre lisible, et la safe-area respectée.
