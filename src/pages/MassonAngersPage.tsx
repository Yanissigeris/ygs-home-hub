import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-masson-angers-gen.webp";

const MassonAngersPage = () => (
  <NeighborhoodTemplate
    seoTitle="Masson-Angers — Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre à Masson-Angers, Gatineau. Secteur familial en plein essor, constructions neuves et prix compétitifs."
    ogImage="https://yanisgauthier.com/og/og-masson-angers.jpg"
    jsonLd={{ name: "Masson-Angers", description: "Courtier immobilier à Masson-Angers. Secteur familial, constructions neuves et prix accessibles.", lat: 45.5328, lng: -75.4170, url: "/masson-angers/" }}
    hero={{ overline: "Guide de quartier · Masson-Angers", title: "Vivre, acheter ou vendre à Masson-Angers", subtitle: "Secteur familial à l'est de Gatineau, avec des constructions neuves et des prix d'entrée parmi les plus bas de la ville. À environ 36 km du centre-ville d'Ottawa et à une trentaine de kilomètres des Promenades Gatineau par la route.", image: heroImg }}
    trustSpecialty="Spécialiste Masson-Angers"
    lifestyle={{ image: heroImg, imageAlt: "Quartier résidentiel Masson-Angers", title: "Pourquoi Masson-Angers est en plein essor", subtitle: "Masson-Angers attire principalement les jeunes familles et les premiers acheteurs qui cherchent une maison neuve ou récente sans payer le prix de Hull ou d'Aylmer. Le secteur compte deux sous-secteurs distincts, Masson et Angers, avec plusieurs développements résidentiels actifs et des promoteurs qui livrent du neuf en 2026. C'est l'un des meilleurs rapports qualité-prix dans Gatineau pour qui accepte un déplacement quotidien plus long vers le centre-ville d'Ottawa." }}
    reasons={[
      "Prix médian d'une unifamiliale de 419 545 $ au 2e trimestre 2026 dans le secteur Buckingham/Masson-Angers, le plus bas des quatre secteurs de la ville de Gatineau (APCIQ)",
      "Constructions neuves actives : plusieurs promoteurs livrent en 2026 avec possession printemps disponible",
      "Deux sous-secteurs distincts : Masson (côté ouest, plus mature) et Angers (côté est, plus en développement)",
      "Écoles primaires francophones du Centre de services scolaire au Cœur-des-Vallées : Aux Quatre-Vents, du Ruisseau, du Sacré-Cœur, St-Jean-de-Brébeuf",
      "École du Sacré-Cœur a fait l'objet d'un agrandissement majeur de 20 M$ annoncé par le gouvernement du Québec",
      "École secondaire Hormisdas-Gamelin à Buckingham (12 km, programme international IB et option sport)",
      "Accès direct à l'autoroute 50",
      "Rivière du Lièvre et marais aux Grenouillettes, accès à la nature en zone résidentielle",
      "Marché actif avec plusieurs développements en cours et demande croissante des premiers acheteurs",
    ]}
    profilesTitle="Masson-Angers est idéal pour…"
    profiles={[
      { icon: Users, title: "Jeunes familles", text: "Maisons neuves abordables, 4 écoles primaires CSSCV à proximité, parcs et sentiers dans les nouveaux développements. La rivière du Lièvre et les espaces verts ajoutent à la qualité de vie." },
      { icon: Home, title: "Premiers acheteurs", text: "Prix d'entrée accessibles entre 400 000 $ et 490 000 $ pour un jumelé ou une maison neuve. Programmes RAP/CELIAPP applicables. Financement plus facile qu'à Hull ou Aylmer." },
      { icon: TrendingUp, title: "Investisseurs", text: "Secteur en croissance avec demande locative stable et plusieurs développements neufs en livraison 2026-2027. Potentiel de plus-value à moyen terme." },
      { icon: MapPin, title: "Travailleurs de l'est", text: "Accès direct aux zones d'emploi de Gatineau-est, Buckingham et Thurso. Le centre de Buckingham est à environ 5 km par la route." },
    ]}
    inlineCta={{ text: "Propriétaire à Masson-Angers? Découvrez la valeur actuelle de votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau/" }}
    faq={{
      title: "Questions sur Masson-Angers",
      items: [
        { q: "Masson-Angers est-il loin du centre de Gatineau?", a: "Les Promenades Gatineau sont à une trentaine de kilomètres par la route (de 28 à 33 km selon l'itinéraire), et le centre-ville d'Ottawa à environ 36 km. Le trajet dépend de l'heure et du pont utilisé." },
        { q: "Quel est le prix d'une maison à Masson-Angers en 2026?", a: "Masson-Angers fait partie du secteur Buckingham/Masson-Angers dans les statistiques de l'APCIQ. Au 2e trimestre 2026, le prix médian d'une unifamiliale y était de 419 545 $, le plus bas des quatre secteurs de la ville de Gatineau (données Centris). Le prix varie ensuite selon le type, l'année de construction et le sous-secteur : je vous montre les ventes récentes comparables." },
        { q: "Y a-t-il des maisons neuves à Masson-Angers?", a: "Oui, plusieurs promoteurs sont actifs à Masson-Angers. Les dates de possession varient d'un projet à l'autre : je vérifie avec vous celles des projets disponibles." },
        { q: "Quelles écoles desservent Masson-Angers?", a: "Quatre écoles primaires francophones du Centre de services scolaire au Cœur-des-Vallées : Aux Quatre-Vents, du Ruisseau, du Sacré-Cœur (qui a fait l'objet d'un agrandissement majeur de 20 M$ annoncé par le gouvernement du Québec) et St-Jean-de-Brébeuf. Pour le secondaire, l'École secondaire Hormisdas-Gamelin à Buckingham (12 km) avec programme IB et option sport." },
        { q: "Le marché est-il en hausse à Masson-Angers?", a: "Les prix sont stables et l'offre augmente. Au 2e trimestre 2026, dans le secteur Buckingham/Masson-Angers, le prix médian d'une unifamiliale est resté au même niveau qu'un an plus tôt (419 545 $), les ventes ont baissé de 20 % et les unifamiliales en vigueur ont augmenté de 31 %. Une unifamiliale s'y est vendue en 27 jours en moyenne (APCIQ, données Centris)." },
        { q: "Quels sont les sous-secteurs de Masson-Angers?", a: "Le territoire se divise en deux : Masson (côté ouest, plus mature, près de la rivière du Lièvre) et Angers (côté est, plus en développement avec les constructions neuves récentes). Chaque sous-secteur a sa propre dynamique de prix et d'inventaire." },
      ],
    }}
    sectors={{ list: [
      { name: "Buckingham", href: "/buckingham-masson-angers/", detail: "Voisin direct à l'est, rivière du Lièvre, école secondaire Hormisdas-Gamelin" },
      { name: "Gatineau (centre)", href: "/gatineau/", detail: "Centre du secteur Gatineau, services, condos et résidentiel" },
      { name: "Limbour", href: "/limbour/", detail: "Familial, parcs, banlieue moderne, alternative à environ 29 km à l'ouest" },
    ]}}
    related={{ pages: [
      { title: "Masson-Angers en plein essor", text: "Pourquoi ce secteur explose.", href: "/blogue/masson-angers-secteur-en-essor/" },
      { title: "Premier achat à Masson-Angers", text: "Pourquoi c'est le bon moment.", href: "/blogue/premier-achat-masson-angers/" },
      { title: "Constructions neuves", text: "Ce qu'il faut savoir sur le neuf.", href: "/blogue/constructions-neuves-masson-angers/" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau/" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau/" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Masson-Angers", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit, recevez-le par courriel" }}
    brokerPerspective={{
      observation: "Ce que je vois à Masson-Angers en ce moment : c'est devenu un secteur parfait pour un premier achat à Gatineau. Mes acheteurs sont surtout des jeunes familles et des couples 25-35 ans qui veulent une maison neuve ou récente avec un budget de 400-500k$. Beaucoup viennent d'Ottawa où ils ne peuvent pas acheter, ou sont des premiers acheteurs gatinois qui voulaient Aylmer mais se rabattent ici pour le prix. Le côté Angers est plus en développement avec les constructions neuves, le côté Masson est plus mature avec des reventes.",
      dataPoint: "Sur les ventes que je conclus à Masson-Angers, les jumelés neufs et les maisons récentes bien préparées partent généralement en 25-40 jours. Les promoteurs livrent des modèles entre 400-490k$ avec possession rapide, et la concurrence pour les premiers acheteurs reste forte malgré l'augmentation de l'offre.",
      takeaway: "Mon conseil aux acheteurs qui considèrent Masson-Angers : compare bien Masson vs Angers avant de te décider, ce sont deux dynamiques différentes. Et si tu vises une construction neuve, vérifie le promoteur, les délais réels de livraison, et négocie les inclusions. Mon conseil aux propriétaires qui pensent vendre : ton prix doit refléter ton sous-secteur et l'offre concurrente du neuf, pas une moyenne globale du quartier."
    }}
    cta={{ title: "Acheteur ou vendeur à Masson-Angers?", text: "Je connais le secteur, parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }, { label: "Réserver une consultation", href: "/consultation-acheteur/", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default MassonAngersPage;
