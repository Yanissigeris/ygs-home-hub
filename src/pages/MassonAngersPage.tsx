import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-masson-angers-gen.webp";

const MassonAngersPage = () => (
  <NeighborhoodTemplate
    seoTitle="Masson-Angers — Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre à Masson-Angers, Gatineau. Secteur familial en plein essor, constructions neuves et prix compétitifs."
    ogImage="https://yanisgauthier.com/og/og-masson-angers.jpg"
    jsonLd={{ name: "Masson-Angers", description: "Courtier immobilier à Masson-Angers. Secteur familial, constructions neuves et prix accessibles.", lat: 45.5328, lng: -75.4170, url: "/masson-angers" }}
    hero={{ overline: "Guide de quartier · Masson-Angers", title: "Vivre, acheter ou vendre à Masson-Angers", subtitle: "Secteur familial en plein essor à l'est de Gatineau — constructions neuves, prix d'entrée accessibles et qualité de vie. À 20-25 minutes du centre de Gatineau par l'autoroute 50.", image: heroImg }}
    trustSpecialty="Spécialiste Masson-Angers"
    lifestyle={{ image: heroImg, imageAlt: "Quartier résidentiel Masson-Angers", title: "Pourquoi Masson-Angers est en plein essor", subtitle: "Masson-Angers attire principalement les jeunes familles et les premiers acheteurs qui cherchent une maison neuve ou récente sans payer le prix de Hull ou d'Aylmer. Le secteur compte deux sous-secteurs distincts — Masson et Angers — avec plusieurs développements résidentiels actifs et des promoteurs qui livrent du neuf en 2026. C'est l'un des meilleurs rapports qualité-prix dans Gatineau pour qui accepte un déplacement quotidien plus long vers le centre-ville d'Ottawa." }}
    reasons={[
      "Prix d'entrée parmi les plus accessibles de Gatineau — jumelés et maisons neuves entre 400 000 $ et 490 000 $+ selon le type et l'année (données Centris, mai 2026)",
      "Constructions neuves actives : plusieurs promoteurs livrent en 2026 avec possession printemps disponible",
      "Deux sous-secteurs distincts : Masson (côté ouest, plus mature) et Angers (côté est, plus en développement)",
      "Écoles primaires francophones de la Commission scolaire au Cœur-des-Vallées : Aux Quatre-Vents, du Ruisseau, du Sacré-Cœur, St-Jean-de-Brébeuf",
      "École du Sacré-Cœur a fait l'objet d'un agrandissement majeur de 20 M$ annoncé par le gouvernement du Québec",
      "École secondaire Hormisdas-Gamelin à Buckingham (12 km, programme international IB et option sport)",
      "Accès rapide à l'autoroute 50 — 20-25 minutes du centre de Gatineau, environ 35-40 minutes du centre-ville d'Ottawa",
      "Rivière du Lièvre et marais aux Grenouillettes — accès à la nature en zone résidentielle",
      "Marché actif avec plusieurs développements en cours et demande croissante des premiers acheteurs",
    ]}
    profilesTitle="Masson-Angers est idéal pour…"
    profiles={[
      { icon: Users, title: "Jeunes familles", text: "Maisons neuves abordables, 4 écoles primaires CSSCV à proximité, parcs et sentiers dans les nouveaux développements. La rivière du Lièvre et les espaces verts ajoutent à la qualité de vie." },
      { icon: Home, title: "Premiers acheteurs", text: "Prix d'entrée accessibles entre 400 000 $ et 490 000 $ pour un jumelé ou une maison neuve. Programmes RAP/CELIAPP applicables. Financement plus facile qu'à Hull ou Aylmer." },
      { icon: TrendingUp, title: "Investisseurs", text: "Secteur en croissance avec demande locative stable et plusieurs développements neufs en livraison 2026-2027. Potentiel de plus-value à moyen terme." },
      { icon: MapPin, title: "Travailleurs de l'est", text: "Accès direct aux zones d'emploi de Gatineau-est, Buckingham et Thurso. À 20-25 minutes du centre de Gatineau par l'autoroute 50." },
    ]}
    inlineCta={{ text: "Propriétaire à Masson-Angers? Découvrez la valeur actuelle de votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur Masson-Angers",
      items: [
        { q: "Masson-Angers est-il loin du centre de Gatineau?", a: "Environ 20-25 minutes par l'autoroute 50. L'accès est rapide et direct. Pour le centre-ville d'Ottawa, prévoir 35-40 minutes selon le trafic et le pont utilisé (Macdonald-Cartier ou Champlain)." },
        { q: "Quel est le prix d'une maison à Masson-Angers en 2026?", a: "Selon les inscriptions actives sur Centris en mai 2026, les jumelés et maisons unifamiliales se vendent généralement entre 400 000 $ et 490 000 $+ selon le type, l'année de construction et le sous-secteur. Les constructions neuves se positionnent souvent autour de 465 000 $ pour 5 chambres avec sous-sol fini." },
        { q: "Y a-t-il des maisons neuves à Masson-Angers?", a: "Oui, c'est l'un des secteurs avec le plus de constructions neuves à Gatineau. Plusieurs promoteurs sont actifs avec possession printemps 2026 dans certains projets." },
        { q: "Quelles écoles desservent Masson-Angers?", a: "Quatre écoles primaires francophones de la Commission scolaire au Cœur-des-Vallées : Aux Quatre-Vents, du Ruisseau, du Sacré-Cœur (qui a fait l'objet d'un agrandissement majeur de 20 M$ annoncé par le gouvernement du Québec) et St-Jean-de-Brébeuf. Pour le secondaire, l'École secondaire Hormisdas-Gamelin à Buckingham (12 km) avec programme IB et option sport." },
        { q: "Le marché est-il en hausse à Masson-Angers?", a: "Le marché reste actif avec une demande soutenue des premiers acheteurs et des jeunes familles. Le délai moyen de vente pour une unifamiliale dans la région métropolitaine de Gatineau était de 32 jours au quatrième trimestre 2025 (Chambre immobilière de l'Outaouais)." },
        { q: "Quels sont les sous-secteurs de Masson-Angers?", a: "Le territoire se divise en deux : Masson (côté ouest, plus mature, près de la rivière du Lièvre) et Angers (côté est, plus en développement avec les constructions neuves récentes). Chaque sous-secteur a sa propre dynamique de prix et d'inventaire." },
      ],
    }}
    sectors={{ list: [
      { name: "Buckingham", href: "/buckingham-masson-angers", detail: "Voisin direct à l'est, rivière du Lièvre, école secondaire Hormisdas-Gamelin" },
      { name: "Gatineau (centre)", href: "/gatineau", detail: "Centre du secteur Gatineau, services, condos et résidentiel" },
      { name: "Limbour", href: "/limbour", detail: "Familial, parcs, banlieue moderne — alternative à 15 minutes à l'ouest" },
    ]}}
    related={{ pages: [
      { title: "Masson-Angers en plein essor", text: "Pourquoi ce secteur explose.", href: "/blogue/masson-angers-secteur-en-essor" },
      { title: "Premier achat à Masson-Angers", text: "Pourquoi c'est le bon moment.", href: "/blogue/premier-achat-masson-angers" },
      { title: "Constructions neuves", text: "Ce qu'il faut savoir sur le neuf.", href: "/blogue/constructions-neuves-masson-angers" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Masson-Angers", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    brokerPerspective={{
      observation: "Ce que je vois à Masson-Angers en ce moment : c'est devenu un secteur parfait pour un premier achat à Gatineau. Mes acheteurs sont surtout des jeunes familles et des couples 25-35 ans qui veulent une maison neuve ou récente avec un budget de 400-500k$. Beaucoup viennent d'Ottawa où ils ne peuvent pas acheter, ou sont des premiers acheteurs gatinois qui voulaient Aylmer mais se rabattent ici pour le prix. Le côté Angers est plus en développement avec les constructions neuves, le côté Masson est plus mature avec des reventes.",
      dataPoint: "Sur les ventes que je conclus à Masson-Angers, les jumelés neufs et les maisons récentes bien préparées partent généralement en 25-40 jours. Les promoteurs livrent des modèles entre 400-490k$ avec possession rapide, et la concurrence pour les premiers acheteurs reste forte malgré l'augmentation de l'offre.",
      takeaway: "Mon conseil aux acheteurs qui considèrent Masson-Angers : compare bien Masson vs Angers avant de te décider — ce sont deux dynamiques différentes. Et si tu vises une construction neuve, vérifie le promoteur, les délais réels de livraison, et négocie les inclusions. Mon conseil aux propriétaires qui pensent vendre : ton prix doit refléter ton sous-secteur et l'offre concurrente du neuf, pas une moyenne globale du quartier."
    }}
    cta={{ title: "Acheteur ou vendeur à Masson-Angers?", text: "Je connais le secteur — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default MassonAngersPage;
