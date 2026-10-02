import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-cote-dazur.webp";

const CoteDazurPage = () => (
  <NeighborhoodTemplate
    seoTitle="Côte-d'Azur Gatineau, Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre dans le quartier Côte-d'Azur à Gatineau. Secteur résidentiel familial, bungalows, proximité services et accès Ottawa."
    ogImage="https://yanisgauthier.com/og/og-cote-dazur.jpg"
    jsonLd={{ name: "Côte-d'Azur", description: "Courtier immobilier dans le quartier Côte-d'Azur à Gatineau. Secteur résidentiel familial.", lat: 45.4700, lng: -75.7000, url: "/cote-dazur-gatineau/" }}
    hero={{ overline: "Guide de quartier · Côte-d'Azur", title: "Vivre, acheter ou vendre à Côte-d'Azur", subtitle: "Quartier résidentiel mature du secteur Gatineau, autour du parc Saint-Exupéry. Bungalows des années 60-90, rues paisibles.", image: heroImg }}
    trustSpecialty="Spécialiste Côte-d'Azur et environs"
    lifestyle={{ image: heroImg, imageAlt: "Quartier Côte-d'Azur, Gatineau", title: "Pourquoi Côte-d'Azur est apprécié", subtitle: "Côte-d'Azur attire surtout les familles qui cherchent un quartier établi près des services, sans payer le prix d'Aylmer ou du Plateau. La majorité des propriétés sont des bungalows et split-levels, plusieurs sur des terrains de 4 000 à 6 000 pi². Le secteur reste une porte d'entrée accessible vers l'unifamiliale au centre de Gatineau." }}
    reasons={[
      "Quartier résidentiel établi avec arbres matures et rues paisibles",
      "Bungalows, split-levels et maisons rénovées, avec un prix médian d'une unifamiliale de 490 000 $ au 2e trimestre 2026 dans le secteur Gatineau de l'APCIQ, qui inclut Côte-d'Azur",
      "Commerces de proximité sur le boulevard Maloney : IGA, Metro, Jean Coutu, Tim Hortons, Poulet Rouge et plusieurs autres",
      "Écoles primaires et secondaires francophones et anglophones à distance de marche ou courte voiture",
      "À environ 11 km du centre-ville d'Ottawa par la route. Prévoyez plus de temps aux heures de pointe.",
      "Transport en commun STO avec lignes vers Hull et le centre-ville d'Ottawa",
      "Délai de vente moyen de 22 jours pour une unifamiliale dans le secteur Gatineau au 2e trimestre 2026 (APCIQ)",
      "Potentiel de plus-value pour les acheteurs qui modernisent une propriété des années 60-80",
    ]}
    profilesTitle="Côte-d'Azur convient surtout à ces profils"
    profiles={[
      { icon: Users, title: "Familles", text: "Quartier calme avec écoles, parcs et services à distance de marche. Voisinage stable où plusieurs résidents sont là depuis 20-30 ans." },
      { icon: Home, title: "Premiers acheteurs", text: "Bungalows à partir de 500 000 $, accessible pour entrer dans le marché unifamilial à Gatineau sans aller en banlieue éloignée." },
      { icon: MapPin, title: "Retraités", text: "Plain-pied sans escalier dans un voisinage calme, avec services et pharmacie sur Maloney. Un bon choix pour rester chez soi longtemps." },
      { icon: Coffee, title: "Acheteurs de revente", text: "Bungalows des années 60-80 avec bons os : terrain, brique, structure solide. Plus-value réelle avec une rénovation cuisine et salle de bain bien faite." },
    ]}
    inlineCta={{ text: "Propriétaire à Côte-d'Azur? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau/" }}
    faq={{
      title: "Questions sur Côte-d'Azur",
      items: [
        { q: "Où se situe le quartier Côte-d'Azur à Gatineau?", a: "Dans le secteur Gatineau (ancienne ville), autour du parc Saint-Exupéry et près de la rue Saint-Louis. Ses rues portent des noms de la Côte d'Azur française : rue de Cannes, rue de Monte-Carlo, rue de Menton, rue de Saint-Tropez. Le centre-ville d'Ottawa est à environ 11 km par la route, et le temps de trajet dépend surtout de l'heure de départ." },
        { q: "Quel est le prix d'une maison à Côte-d'Azur en 2026?", a: "Côte-d'Azur fait partie du secteur Gatineau dans les statistiques de l'APCIQ. Au 2e trimestre 2026, le prix médian d'une unifamiliale y était de 490 000 $ (données Centris). À Côte-d'Azur, le prix dépend ensuite de la superficie habitable, de l'état de la propriété et de la grandeur du terrain : les bungalows non rénovés se situent plus bas, les propriétés modernisées avec garage plus haut. Pour un chiffre précis, je compare les ventes récentes de maisons semblables à la vôtre." },
        { q: "Combien de temps prend une vente à Côte-d'Azur?", a: "Au 2e trimestre 2026, une unifamiliale s'est vendue en 22 jours en moyenne dans le secteur Gatineau de l'APCIQ, qui inclut Côte-d'Azur, contre 27 jours pour l'ensemble de la région métropolitaine (données Centris). Le délai dépend surtout du prix et de la préparation de la maison." },
        { q: "Quels commerces et services sont accessibles?", a: "Le boulevard Maloney regroupe les services du quotidien : épiceries IGA et Metro, pharmacie Jean Coutu, Tim Hortons, restaurant Poulet Rouge, et d'autres commerces. Selon votre rue, tout se fait à pied ou en voiture sur une courte distance." },
        { q: "Côte-d'Azur est-il un bon quartier pour les familles?", a: "Oui, le quartier attire principalement des familles qui cherchent un secteur résidentiel mature, des écoles à proximité, des parcs et un voisinage stable. Plusieurs résidents y vivent depuis 20-30 ans, ce qui crée une vie de quartier établie." },
        { q: "Faut-il prévoir des rénovations sur un bungalow Côte-d'Azur?", a: "Souvent oui, et c'est même l'un des avantages du secteur. Les propriétés datent généralement des années 60 à 90 et plusieurs ont conservé leur cuisine, salle de bain ou planchers d'origine. C'est l'objection que j'entends le plus souvent en visite, mais c'est aussi ce qui vous fait entrer dans le marché à bon prix, avec un potentiel de plus-value." },
      ],
    }}
    sectors={{ list: [
      { name: "Limbour", href: "/limbour/", detail: "Familial, parcs, banlieue moderne, voisin direct de Côte-d'Azur" },
      { name: "Gatineau (centre)", href: "/gatineau/", detail: "Centre du secteur Gatineau, services, condos et résidentiel" },
      { name: "Hull", href: "/hull/", detail: "Urbain, culture, condos, projet Zibi, accès direct à Ottawa" },
    ]}}
    related={{ pages: [
      { title: "Côte-d'Azur : quartier abordable", text: "Découvrez ce quartier accessible.", href: "/blogue/cote-dazur-gatineau-quartier-abordable/" },
      { title: "Acheter un bungalow à Côte-d'Azur", text: "Guide pratique pour acheteurs.", href: "/blogue/acheter-bungalow-cote-dazur-gatineau/" },
      { title: "Rénover à Côte-d'Azur", text: "Potentiel et conseils.", href: "/blogue/renover-cote-dazur-potentiel/" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau/" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau/" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit : Côte-d'Azur", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit, recevez-le par courriel" }}
    brokerPerspective={{
      observation: "Ce que je vois à Côte-d'Azur en ce moment : les acheteurs ont plus de choix qu'avant, donc une mise en marché efficace au bon prix devient déterminante. La majorité de mes acheteurs dans le secteur sont des familles qui cherchent un quartier mature et familial. Le secteur reste en demande.",
      dataPoint: "Au 2e trimestre 2026, une unifamiliale s'est vendue en 22 jours en moyenne dans le secteur Gatineau de l'APCIQ, qui inclut Côte-d'Azur. Quand le prix est trop optimiste au départ, le délai s'allonge nettement.",
      takeaway: "Mon conseil aux propriétaires de Côte-d'Azur qui pensent vendre : préparez bien votre maison, petits détails compris, et inscrivez-la au bon prix dès le départ. Sinon, la vente prend plus de temps et le prix final en souffre."
    }}
    cta={{ title: "Acheteur ou vendeur à Côte-d'Azur?", text: "Je connais le quartier, parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }, { label: "Réserver une consultation", href: "/consultation-acheteur/", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default CoteDazurPage;
