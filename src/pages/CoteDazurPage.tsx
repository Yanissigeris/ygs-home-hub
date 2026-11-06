import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-cote-dazur.webp";

const CoteDazurPage = () => (
  <NeighborhoodTemplate
    updated={{ date: "2026-11-04", source: "Chiffres de marché : APCIQ, 3e trimestre 2026" }}
    seoTitle="Côte-d'Azur Gatineau, Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre dans le quartier Côte-d'Azur à Gatineau. Secteur résidentiel familial, bungalows, proximité services et accès Ottawa."
    ogImage="https://yanisgauthier.com/og/og-cote-dazur.jpg"
    jsonLd={{ name: "Côte-d'Azur", description: "Courtier immobilier dans le quartier Côte-d'Azur à Gatineau. Secteur résidentiel familial.", lat: 45.4700, lng: -75.7000, url: "/cote-dazur-gatineau/" }}
    hero={{ overline: "Guide de quartier · Côte-d'Azur", title: "Vivre, acheter ou vendre à Côte-d'Azur", subtitle: "Quartier résidentiel mature du secteur Gatineau, autour du parc Saint-Exupéry. Bungalows des années 60-90, rues paisibles.", image: heroImg }}
    trustSpecialty="Spécialiste Côte-d'Azur et environs"
    lifestyle={{ image: heroImg, imageAlt: "Quartier Côte-d'Azur, Gatineau", title: "Pourquoi Côte-d'Azur est apprécié", subtitle: "Côte-d'Azur attire surtout les familles qui cherchent un quartier établi près des services, sans payer le prix d'Aylmer ou du Plateau. La majorité des propriétés sont des bungalows et des split-levels. Le secteur reste une porte d'entrée accessible vers l'unifamiliale au centre de Gatineau." }}
    reasons={[
      "Quartier résidentiel établi avec arbres matures et rues paisibles",
      "Bungalows, split-levels et maisons rénovées, avec un prix médian d'une unifamiliale de 464 900 $ au 3e trimestre 2026 dans le secteur Gatineau de l'APCIQ, qui inclut Côte-d'Azur",
      "Épiceries, pharmacie et restaurants à quelques minutes",
      "Écoles primaires et secondaires francophones dans le secteur. En anglais, les écoles secondaires du Western Quebec School Board sont à Hull",
      "À environ 11 km du centre-ville d'Ottawa par la route. Prévoyez plus de temps aux heures de pointe.",
      "Transport en commun de la STO",
      "Délai de vente moyen de 35 jours pour une unifamiliale dans le secteur Gatineau au 3e trimestre 2026 (APCIQ)",
      "Un point de départ pour les acheteurs prêts à moderniser une propriété plus ancienne",
    ]}
    profilesTitle="Côte-d'Azur convient surtout à ces profils"
    profiles={[
      { icon: Users, title: "Familles", text: "Quartier calme avec écoles, parcs et services à proximité." },
      { icon: Home, title: "Premiers acheteurs", text: "Au 3e trimestre 2026, le prix médian d'une unifamiliale était de 464 900 $ dans le secteur Gatineau de l'APCIQ, qui inclut Côte-d'Azur. Une porte d'entrée dans l'unifamilial sans s'éloigner du centre." },
      { icon: MapPin, title: "Retraités", text: "Plain-pied sans escalier dans un voisinage calme, avec les services à quelques minutes. Un bon choix pour rester chez soi longtemps." },
      { icon: Coffee, title: "Acheteurs de revente", text: "Des bungalows plus anciens, souvent à rénover. Je vous montre l'écart de prix entre les maisons rénovées et celles à rénover dans le secteur." },
    ]}
    inlineCta={{ text: "Propriétaire à Côte-d'Azur? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau/" }}
    faq={{
      title: "Questions sur Côte-d'Azur",
      items: [
        { q: "Où se situe le quartier Côte-d'Azur à Gatineau?", a: "Dans le secteur Gatineau (ancienne ville), autour du parc Saint-Exupéry et près de la rue Saint-Louis. Ses rues portent des noms de la Côte d'Azur française : rue de Cannes, rue de Monte-Carlo, rue de Menton, rue de Saint-Tropez. Le centre-ville d'Ottawa est à environ 11 km par la route, et le temps de trajet dépend surtout de l'heure de départ." },
        { q: "Quel est le prix d'une maison à Côte-d'Azur en 2026?", a: "Côte-d'Azur fait partie du secteur Gatineau dans les statistiques de l'APCIQ. Au 3e trimestre 2026, le prix médian d'une unifamiliale y était de 464 900 $ (données Centris). À Côte-d'Azur, le prix dépend ensuite de la superficie habitable, de l'état de la propriété et de la grandeur du terrain. Les bungalows non rénovés se situent plus bas, les propriétés modernisées avec garage plus haut. Pour un chiffre précis, je compare les ventes récentes de maisons semblables à la vôtre." },
        { q: "Combien de temps prend une vente à Côte-d'Azur?", a: "Au 3e trimestre 2026, une unifamiliale s'est vendue en 35 jours en moyenne dans le secteur Gatineau de l'APCIQ, qui inclut Côte-d'Azur, contre 34 jours pour l'ensemble de la région métropolitaine (données Centris). Le délai dépend surtout du prix et de la préparation de la maison." },
        { q: "Quels commerces et services sont accessibles?", a: "Les services du quotidien, épiceries, pharmacie et restaurants, sont à quelques minutes. Selon votre rue, vous y allez à pied ou en voiture sur une courte distance." },
        { q: "Côte-d'Azur est-il un bon quartier pour les familles?", a: "Oui, le quartier attire principalement des familles qui cherchent un secteur résidentiel mature, des écoles à proximité, des parcs et un voisinage stable." },
        { q: "Faut-il prévoir des rénovations sur un bungalow Côte-d'Azur?", a: "Souvent oui, et c'est même l'un des avantages du secteur. Les propriétés datent généralement des années 60 à 90 et plusieurs ont conservé leur cuisine, salle de bain ou planchers d'origine. Une maison à rénover se paie moins cher, et je compare avec les ventes récentes pour que le prix tienne compte des travaux." },
        { q: "Que regarder à l'inspection d'un bungalow plus ancien?", a: "La toiture, la plomberie (cuivre ou acier galvanisé), l'ampérage du panneau électrique, la fondation et l'isolation. Si vous pensez aménager un logement au sous-sol, vérifiez avant d'acheter avec la Ville de Gatineau ce que le zonage permet, et prévoyez un permis." },
      ],
    }}
    sectors={{ list: [
      { name: "Limbour", href: "/limbour/", detail: "Familial, parcs, banlieue moderne, voisin direct de Côte-d'Azur" },
      { name: "Gatineau (centre)", href: "/gatineau/", detail: "Centre du secteur Gatineau, services, condos et résidentiel" },
      { name: "Hull", href: "/hull/", detail: "Urbain, culture, condos, projet Zibi, accès direct à Ottawa" },
    ]}}
    related={{ pages: [
      { title: "Limbour", text: "Le quartier voisin, plus récent.", href: "/limbour/" },
      { title: "Premier achat", text: "Mise de fonds, préapprobation et étapes.", href: "/premier-achat-gatineau/" },
      { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau/" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau/" },
      { title: "Vendre à Gatineau", text: "Prix et mise en marché.", href: "/vendre-ma-maison-gatineau/" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit : Côte-d'Azur", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit, recevez-le par courriel" }}
    brokerPerspective={{
      observation: "Ce que je vois à Côte-d'Azur : les acheteurs ont plus de choix qu'avant, alors le prix de départ et la présentation comptent davantage.",
      dataPoint: "Au 3e trimestre 2026, une unifamiliale s'est vendue en 35 jours en moyenne dans le secteur Gatineau de l'APCIQ, qui inclut Côte-d'Azur. Quand le prix est trop optimiste au départ, le délai s'allonge nettement.",
      takeaway: "Mon conseil aux propriétaires de Côte-d'Azur qui pensent vendre : préparez bien votre maison, petits détails compris, et inscrivez-la au bon prix dès le départ. Sinon, la vente prend plus de temps et le prix final en souffre."
    }}
    cta={{ title: "Acheteur ou vendeur à Côte-d'Azur?", text: "Je connais le quartier, parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }, { label: "Réserver une consultation", href: "/consultation-acheteur/", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default CoteDazurPage;
