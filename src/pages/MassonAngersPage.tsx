import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-masson-angers-gen.webp";

const MassonAngersPage = () => (
  <NeighborhoodTemplate
    updated={{ date: "2026-11-04", source: "Chiffres de marché : APCIQ, 3e trimestre 2026" }}
    seoTitle="Masson-Angers | Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre à Masson-Angers, Gatineau. Secteur familial avec des constructions neuves et des prix d'entrée parmi les plus bas de la ville."
    ogImage="https://yanisgauthier.com/og/og-masson-angers.jpg"
    jsonLd={{ name: "Masson-Angers", description: "Courtier immobilier à Masson-Angers. Secteur familial, constructions neuves et prix accessibles.", lat: 45.5328, lng: -75.4170, url: "/masson-angers/" }}
    hero={{ overline: "Guide de quartier · Masson-Angers", title: "Vivre, acheter ou vendre à Masson-Angers", subtitle: "Secteur familial à l'est de Gatineau, avec des constructions neuves et des prix d'entrée parmi les plus bas de la ville. À environ 36 km du centre-ville d'Ottawa et à une trentaine de kilomètres des Promenades Gatineau par la route.", image: heroImg }}
    trustSpecialty="Spécialiste Masson-Angers"
    lifestyle={{ image: heroImg, imageAlt: "Quartier résidentiel Masson-Angers", title: "Pourquoi choisir Masson-Angers", subtitle: "Le secteur compte deux sous-secteurs distincts, Masson et Angers, avec de la construction neuve et de la revente. Côté prix, le secteur Buckingham/Masson-Angers affiche le prix médian unifamilial le plus bas de la ville, à 395 000 $ (APCIQ, 3e trimestre 2026), en échange d'un trajet plus long vers le centre-ville d'Ottawa." }}
    reasons={[
      "Prix médian d'une unifamiliale de 395 000 $ au 3e trimestre 2026 dans le secteur Buckingham/Masson-Angers, le plus bas des quatre secteurs de la ville de Gatineau (APCIQ)",
      "Constructions neuves et reventes : je compare chacune avec des propriétés du même type",
      "Deux sous-secteurs distincts : Masson (côté ouest, plus mature) et Angers (côté est, plus en développement)",
      "Écoles primaires francophones du Centre de services scolaire au Cœur-des-Vallées : Aux Quatre-Vents, du Ruisseau, du Sacré-Cœur, St-Jean-de-Brébeuf",
      "École secondaire Hormisdas-Gamelin à Buckingham (programme d'éducation intermédiaire PEI et option sport)",
      "Accès direct à l'autoroute 50",
      "Rivière du Lièvre et marais aux Grenouillettes, accès à la nature en zone résidentielle",
      "Au 3e trimestre 2026, il y avait en moyenne 138 unifamiliales à vendre dans le secteur Buckingham/Masson-Angers, 47 % de plus qu'un an plus tôt (APCIQ)",
    ]}
    profilesTitle="À qui s'adresse Masson-Angers"
    profiles={[
      { icon: Users, title: "Jeunes familles", text: "Maisons neuves abordables, 4 écoles primaires CSSCV à proximité, parcs et sentiers dans les nouveaux développements. La rivière du Lièvre et les espaces verts ajoutent à la qualité de vie." },
      { icon: Home, title: "Premiers acheteurs", text: "Au 3e trimestre 2026, le prix médian d'une unifamiliale était de 395 000 $ dans le secteur Buckingham/Masson-Angers (APCIQ), le plus bas des quatre secteurs de Gatineau. Le RAP et le CELIAPP s'appliquent." },
      { icon: TrendingUp, title: "Investisseurs", text: "Des prix d'entrée plus bas qu'ailleurs à Gatineau et des projets neufs. Avant une offre, je vous montre les loyers récents du secteur." },
      { icon: MapPin, title: "Travailleurs de l'est", text: "Accès direct aux zones d'emploi de Gatineau-est, Buckingham et Thurso. Le centre de Buckingham est à environ 5 km par la route." },
    ]}
    inlineCta={{ text: "Propriétaire à Masson-Angers? Découvrez la valeur actuelle de votre propriété.", label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau/" }}
    faq={{
      title: "Questions sur Masson-Angers",
      items: [
        { q: "Masson-Angers est-il loin du centre de Gatineau?", a: "Les Promenades Gatineau sont à une trentaine de kilomètres par la route (de 28 à 33 km selon l'itinéraire), et le centre-ville d'Ottawa à environ 36 km. Le trajet dépend de l'heure et du pont utilisé." },
        { q: "Quel est le prix d'une maison à Masson-Angers en 2026?", a: "Masson-Angers fait partie du secteur Buckingham/Masson-Angers dans les statistiques de l'APCIQ. Au 3e trimestre 2026, le prix médian d'une unifamiliale y était de 395 000 $, le plus bas des quatre secteurs de la ville de Gatineau (données Centris). Le prix varie ensuite selon le type, l'année de construction et le sous-secteur : je vous montre les ventes récentes comparables." },
        { q: "Y a-t-il des maisons neuves à Masson-Angers?", a: "Oui, il y a de la construction neuve à Masson-Angers. Les dates de possession varient d'un projet à l'autre : je vérifie avec vous celles des projets disponibles." },
        { q: "Une maison neuve est-elle couverte par une garantie?", a: "Oui, quand elle est construite par un entrepreneur accrédité. Au Québec, le plan de garantie obligatoire des bâtiments résidentiels neufs est administré par GCR, et la durée de couverture varie selon le type de défaut. Consultez le site de GCR avant de signer. Je peux aussi vous représenter auprès du constructeur : demandez dès le départ qui paie ma rémunération." },
        { q: "Quelles écoles desservent Masson-Angers?", a: "Quatre écoles primaires francophones du Centre de services scolaire au Cœur-des-Vallées : Aux Quatre-Vents, du Ruisseau, du Sacré-Cœur et St-Jean-de-Brébeuf. Pour le secondaire, l'École secondaire Hormisdas-Gamelin à Buckingham, qui offre le programme d'éducation intermédiaire (PEI) et une option sport." },
        { q: "Le marché est-il en hausse à Masson-Angers?", a: "Les prix sont stables et l'offre augmente. Au 3e trimestre 2026, dans le secteur Buckingham/Masson-Angers, le prix médian d'une unifamiliale est resté au même niveau qu'un an plus tôt (395 000 $). Les ventes d'unifamiliales ont baissé de 23 % et les unifamiliales en vigueur ont augmenté de 47 %. Une unifamiliale s'y est vendue en 34 jours en moyenne (APCIQ, données Centris)." },
        { q: "Quels sont les sous-secteurs de Masson-Angers?", a: "Le territoire se divise en deux : Masson (côté ouest, plus mature, près de la rivière du Lièvre) et Angers (côté est, plus en développement avec les constructions neuves récentes). Les prix et l'inventaire diffèrent d'un sous-secteur à l'autre." },
      ],
    }}
    sectors={{ list: [
      { name: "Buckingham", href: "/buckingham-masson-angers/", detail: "Voisin direct à l'est, rivière du Lièvre, école secondaire Hormisdas-Gamelin" },
      { name: "Gatineau (centre)", href: "/gatineau/", detail: "Centre du secteur Gatineau, services, condos et résidentiel" },
      { name: "Limbour", href: "/limbour/", detail: "Familial, parcs, banlieue moderne, alternative à environ 29 km à l'ouest" },
    ]}}
    related={{ pages: [
      { title: "Premier achat", text: "Mise de fonds, préapprobation et étapes.", href: "/premier-achat-gatineau/" },
      { title: "Buckingham", text: "Le secteur voisin, à l'est.", href: "/buckingham-masson-angers/" },
      { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau/" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau/" },
      { title: "Vendre à Gatineau", text: "Prix et mise en marché.", href: "/vendre-ma-maison-gatineau/" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit : acheter à Masson-Angers", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit, recevez-le par courriel" }}
    brokerPerspective={{
      observation: "Ce que je regarde à Masson-Angers : je compare une maison neuve avec d'autres maisons neuves, et une revente avec d'autres reventes. La garantie et le délai de livraison ne sont pas les mêmes.",
      dataPoint: "Au 3e trimestre 2026, le secteur Buckingham/Masson-Angers comptait 47 % plus d'unifamiliales en vigueur qu'un an plus tôt, et les ventes d'unifamiliales avaient baissé de 23 % (APCIQ, données Centris).",
      takeaway: "Mon conseil aux acheteurs qui considèrent Masson-Angers : comparez bien Masson et Angers avant de vous décider, parce que ce sont deux marchés différents. Si vous visez une construction neuve, vérifiez le promoteur et les délais de livraison, et négociez les inclusions. Mon conseil aux propriétaires qui pensent vendre : votre prix doit refléter votre sous-secteur et l'offre concurrente du neuf, pas une moyenne du quartier."
    }}
    cta={{ title: "Acheteur ou vendeur à Masson-Angers?", text: "Je connais le secteur, parlons de votre projet.", buttons: [{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" }, { label: "Réserver une consultation", href: "/consultation-acheteur/", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default MassonAngersPage;
