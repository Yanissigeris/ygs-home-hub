import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-cote-dazur.webp";

const CoteDazurPage = () => (
  <NeighborhoodTemplate
    seoTitle="Côte-d'Azur Gatineau — Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre dans le quartier Côte-d'Azur à Gatineau. Secteur résidentiel familial, bungalows, proximité services et accès Ottawa."
    ogImage="https://yanisgauthier.com/og/og-cote-dazur.jpg"
    jsonLd={{ name: "Côte-d'Azur", description: "Courtier immobilier dans le quartier Côte-d'Azur à Gatineau. Secteur résidentiel familial.", lat: 45.4700, lng: -75.7000, url: "/cote-dazur-gatineau" }}
    hero={{ overline: "Guide de quartier · Côte-d'Azur", title: "Vivre, acheter ou vendre à Côte-d'Azur", subtitle: "Quartier résidentiel mature du secteur Gatineau, entre les boulevards Maloney et La Vérendrye. Bungalows des années 60-90, rues paisibles, accès Ottawa en 15-20 minutes.", image: heroImg }}
    trustSpecialty="Spécialiste Côte-d'Azur et environs"
    lifestyle={{ image: heroImg, imageAlt: "Quartier Côte-d'Azur, Gatineau", title: "Pourquoi Côte-d'Azur est apprécié", subtitle: "Côte-d'Azur attire surtout les familles qui cherchent un quartier établi près des services, sans payer le prix d'Aylmer ou du Plateau. La majorité des propriétés sont des bungalows et split-levels, plusieurs sur des terrains de 4 000 à 6 000 pi². Le secteur reste l'un des plus accessibles du centre de Gatineau pour entrer dans une maison unifamiliale." }}
    reasons={[
      "Quartier résidentiel établi avec arbres matures et rues paisibles",
      "Bungalows, split-levels et maisons rénovées entre 500 000 $ et 730 000 $ selon la superficie et l'état (données Centris, mai 2026)",
      "Commerces de proximité sur le boulevard Maloney : IGA, Metro, Jean Coutu, Tim Hortons, Poulet Rouge et plusieurs autres",
      "Écoles primaires et secondaires francophones et anglophones à distance de marche ou courte voiture",
      "15-20 minutes d'Ottawa par l'autoroute 50 et le pont Macdonald-Cartier",
      "Transport en commun STO avec lignes vers Hull et le centre-ville d'Ottawa",
      "Délai de vente moyen observé : 30 à 45 jours pour un bungalow bien préparé au bon prix",
      "Potentiel de plus-value pour les acheteurs qui modernisent une propriété des années 60-80",
    ]}
    profilesTitle="Côte-d'Azur est idéal pour…"
    profiles={[
      { icon: Users, title: "Familles", text: "Quartier calme avec écoles, parcs et services à distance de marche. Voisinage stable où plusieurs résidents sont là depuis 20-30 ans." },
      { icon: Home, title: "Premiers acheteurs", text: "Bungalows à partir de 500 000 $ — accessible pour entrer dans le marché unifamilial à Gatineau sans aller en banlieue éloignée." },
      { icon: MapPin, title: "Retraités", text: "Plain-pied sans escalier, services et pharmacie sur Maloney, voisinage paisible. Idéal pour rester chez soi longtemps." },
      { icon: Coffee, title: "Acheteurs de revente", text: "Bungalows des années 60-80 avec bons os : terrain, brique, structure solide. Plus-value réelle avec une rénovation cuisine et salle de bain bien faite." },
    ]}
    inlineCta={{ text: "Propriétaire à Côte-d'Azur? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur Côte-d'Azur",
      items: [
        { q: "Où se situe le quartier Côte-d'Azur à Gatineau?", a: "Dans le secteur Gatineau (ancienne ville), entre le boulevard Maloney au nord et le boulevard La Vérendrye au sud. Central, bien desservi, à 15-20 minutes du centre-ville d'Ottawa." },
        { q: "Quel est le prix d'une maison à Côte-d'Azur en 2026?", a: "Selon les inscriptions actives sur Centris en mai 2026, les bungalows et semi-détachés se vendent généralement entre 500 000 $ et 730 000 $ selon la superficie habitable, l'état de la propriété et la grandeur du terrain. Les bungalows non rénovés se situent dans le bas de la fourchette, les propriétés modernisées avec garage dans le haut." },
        { q: "Combien de temps prend une vente à Côte-d'Azur?", a: "D'après les ventes récentes dans le secteur, un bungalow bien préparé et au bon prix se vend généralement en 30 à 45 jours. Le délai moyen pour une unifamiliale dans la région métropolitaine de Gatineau était de 32 jours au quatrième trimestre 2025 selon la Chambre immobilière de l'Outaouais." },
        { q: "Quels commerces et services sont accessibles?", a: "Le boulevard Maloney concentre les services essentiels : épiceries IGA et Metro, pharmacie Jean Coutu, Tim Hortons, restaurant Poulet Rouge, plus plusieurs autres commerces, restaurants et services. Tout est accessible à pied ou en quelques minutes de voiture." },
        { q: "Côte-d'Azur est-il un bon quartier pour les familles?", a: "Oui — le quartier attire principalement des familles qui cherchent un secteur résidentiel mature, des écoles à proximité, des parcs et un voisinage stable. Plusieurs résidents y vivent depuis 20-30 ans, ce qui crée une vie de quartier établie." },
        { q: "Faut-il prévoir des rénovations sur un bungalow Côte-d'Azur?", a: "Souvent oui, et c'est même l'un des avantages du secteur. Les propriétés datent généralement des années 60 à 90 et plusieurs ont conservé leur cuisine, salle de bain ou planchers d'origine. C'est l'objection numéro un en visite — mais c'est aussi ce qui permet d'entrer dans le marché à bon prix avec un potentiel de plus-value." },
      ],
    }}
    sectors={{ list: [
      { name: "Limbour", href: "/limbour", detail: "Familial, parcs, banlieue moderne — voisin direct de Côte-d'Azur" },
      { name: "Gatineau (centre)", href: "/gatineau", detail: "Centre du secteur Gatineau, services, condos et résidentiel" },
      { name: "Hull", href: "/hull", detail: "Urbain, culture, condos, projet Zibi — accès direct à Ottawa" },
    ]}}
    related={{ pages: [
      { title: "Côte-d'Azur : quartier abordable", text: "Découvrez ce quartier accessible.", href: "/blogue/cote-dazur-gatineau-quartier-abordable" },
      { title: "Acheter un bungalow à Côte-d'Azur", text: "Guide pratique pour acheteurs.", href: "/blogue/acheter-bungalow-cote-dazur-gatineau" },
      { title: "Rénover à Côte-d'Azur", text: "Potentiel et conseils.", href: "/blogue/renover-cote-dazur-potentiel" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — Côte-d'Azur", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur à Côte-d'Azur?", text: "Je connais le quartier — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default CoteDazurPage;
