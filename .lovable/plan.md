# Prompt D1 : héro allégé et bandeau de confiance statique

Vérification préalable demandée : le texte « 5/5 Google & Facebook » actuel est remplacé par « 5,0 sur Google et Facebook » / « 5.0 on Google and Facebook » dans le nouveau bandeau statique (le héro garde « 5/5 » dans ses stats — hors périmètre). Cela reste exact tant que la moyenne est 5,0.

## src/components/HeroSection.tsx
- Supprimer le composant `ScrollChevron` (lignes 102 à 147) et son rendu `<ScrollChevron lang={lang} />` (ligne 952). Retire aussi l'écouteur `window.addEventListener("scroll")`.
- Supprimer le bandeau mobile sous les CTA (lignes 807 à 822, `<div className="hero-fade-in mt-8 md:mt-6 flex md:hidden …">` avec « Depuis 2017 · Hall of Fame »).
- Supprimer le bloc « Credibility bar (Layer 5) » au complet : lignes 954 à 1073 (commentaire + `<div className="hero-fade-in hidden md:block absolute left-0 z-[5] w-[58%] …">` et ses variantes desktop/mobile).
- Supprimer le dégradé bas mobile (lignes 940 à 949, commentaire « Bottom gradient — mobile only »).
- Conservés : portrait, overlays, H1, CTA, stats, JSON-LD. Le `</section>` final et les conteneurs restants ne sont pas touchés.
- Éventuels imports devenus orphelins (IconCalendar/IconHome/IconStar/IconTrophy) retirés seulement si plus utilisés ailleurs dans le fichier (vérification au grep avant).

## src/components/AwardsMarquee.tsx
Réécriture en bandeau statique :
- Nouvelle prop `lang?: "fr" | "en"` (défaut `"fr"`).
- Quatre éléments FR : « Depuis 2017 », « 300+ transactions », « 5,0 sur Google et Facebook » (lien `/temoignages/`), « Hall of Fame RE/MAX, LLC, 2024 ». EN : « Since 2017 », « 300+ transactions », « 5.0 on Google and Facebook » (lien `/en/testimonials/`), « RE/MAX, LLC Hall of Fame 2024 ».
- Desktop (≥sm) : une rangée centrée en flex ; séparateurs = trait vertical de 1 px `rgba(255,255,255,.18)` ; aucun point, aucune animation, aucune liste dupliquée.
- Mobile : grille 2 × 2 existante conservée, avec ces quatre éléments.
- Conservés : variables de couleur (`defaultVars`), bordures haut/bas, ombre interne, structure `<section>`.
- Supprimés : `animate-marquee`, masques de fondu, liste dupliquée, `motion-reduce`, le `<style>` de taille de police (remplacé par la taille unique) — ou conservé si encore utile à la rangée statique (décision : retirer, tailles via variables existantes).
- La classe de section `awards-marquee` est renommée ou retirée afin que `grep -rn marquee src` retourne 0 (renommage en `awards-strip`).

## src/index.css
- Supprimer le bloc `.animate-marquee { --marquee-speed: 40s; }` et son commentaire (lignes 450 à 452 environ).

## src/pages/en/IndexEn.tsx
- Ligne 81 : `<AwardsMarquee lang="en" />`.

## Hors périmètre
- Slugs, redirections, navigation, H1/H2/H3, champs de formulaire, trackEvent/trackCTAClick/trackContactTap, consentement, prerender.mjs, faq-extractor.mjs, JSON-LD, tokens de couleur dans index.css, nouvelles dépendances, animations.
- Les trois autres distinctions (Club 100 % Or, Club Platine, Club 100 %) restent dans le texte À propos et le pied de page.
- tailwind.config.ts inchangé (entrées marquee inutilisées, sans effet).

## Vérification
- `bunx tsgo -p tsconfig.app.json --noEmit` (typecheck seulement, pas de build).
- `grep -rn marquee src` doit retourner 0.
- Captures Playwright : héro à 1440, 1280 et 390 px (H1, sous-titre, deux CTA, aucun bandeau ni chevron) ; bandeau statique desktop et mobile.
