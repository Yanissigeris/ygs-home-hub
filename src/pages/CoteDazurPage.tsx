import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-cote-dazur.webp";

const CoteDazurPage = () => (
  <NeighborhoodTemplate
    updated={{ date: "2026-11-04", source: "Chiffres de marché : APCIQ, 3e trimestre 2026" }}
    seoTitle="Côte-d'Azur Gatineau, Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre à Côte-d'Azur, Gatineau. Quartier familial mature, grands arbres et propriétés spacieuses de moyenne à haute gamme."
    ogImage="https://yanisgauthier.com/og/og-cote-dazur.jpg"
    jsonLd={{ name: "Côte-d'Azur", description: "Courtier immobilier dans le quartier Côte-d'Azur à Gatineau. Quartier familial mature, propriétés de moyenne à haute gamme.", lat: 45.4855, lng: -75.7290, url: "/cote-dazur-gatineau/" }}
    hero={{ overline: "Guide de quartier · Côte-d'Azur", title: "Vivre, acheter ou vendre à Côte-d'Azur", subtitle: "Quartier familial mature du secteur Gatineau, autour du parc Saint-Exupéry. Des rues bordées de grands arbres et des propriétés spacieuses.", image: heroImg }}
    trustSpecialty="Spécialiste Côte-d'Azur et environs"
    lifestyle={{ image: heroImg, imageAlt: "Quartier Côte-d'Azur, Gatineau", title: "Pourquoi Côte-d'Azur est apprécié", subtitle: "Côte-d'Azur est un quartier de choix pour les gens de Gatineau. Les familles l'apprécient pour sa verdure et ses grands arbres matures. On y trouve des propriétés de moyenne à haute gamme, souvent très spacieuses." }}
    reasons={[
      "Quartier résidentiel établi avec arbres matures et rues paisibles",
      "Propriétés de moyenne à haute gamme, souvent très spacieuses",
      "Épiceries, pharmacie et restaurants à quelques minutes",
      "Écoles primaires et secondaires francophones dans le secteur. En anglais, les écoles secondaires du Western Quebec School Board sont à Hull",
      "À environ 11 km du centre-ville d'Ottawa par la route. Prévoyez plus de temps aux heures de pointe.",
      "Transport en commun de la STO",
      "Délai de vente moyen de 35 jours pour une unifamiliale dans le secteur Gatineau au 3e trimestre 2026 (APCIQ)",
      "Des rues vallonnées, tout près de la rivière Gatineau",
    ]}
    profilesTitle="Côte-d'Azur convient surtout à ces profils"
    profiles={[
      { icon: Users, title: "Familles", text: "Un quartier calme et plein de verdure, avec écoles et parcs à proximité." },
      { icon: Home, title: "Acheteurs qui veulent de l'espace", text: "Des maisons de moyenne à haute gamme, souvent très spacieuses, sur des terrains entourés d'arbres." },
      { icon: MapPin, title: "Gens de Gatineau", text: "Un quartier de choix pour ceux qui veulent rester dans le secteur Gatineau, près des services qu'ils connaissent." },
      { icon: Coffee, title: "Acheteurs de condo", text: "On trouve aussi des condos plus récents sur la rue de Cannes, dans un quartier établi." },
    ]}
    inlineCta={{ text: "Propriétaire à Côte-d'Azur? Découvrez combien vaut votre propriété.", label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau/" }}
    faq={{
      title: "Questions sur Côte-d'Azur",
      items: [
        { q: "Où se situe le quartier Côte-d'Azur à Gatineau?", a: "Dans le secteur Gatineau (ancienne ville), autour du parc Saint-Exupéry et près de la rue Saint-Louis. Ses rues portent des noms de la Côte d'Azur française : rue de Cannes, rue de Monte-Carlo, rue de Menton, rue de Saint-Tropez. Le centre-ville d'Ottawa est à environ 11 km par la route, et le temps de trajet dépend surtout de l'heure de départ." },
        { q: "Quel est le prix d'une maison à Côte-d'Azur en 2026?", a: "Côte-d'Azur fait partie du secteur Gatineau dans les statistiques de l'APCIQ. Au 3e trimestre 2026, le prix médian d'une unifamiliale y était de 464 900 $ (données Centris). C'est un repère pour tout le secteur. Côte-d'Azur offre surtout des propriétés de moyenne à haute gamme, et le prix dépend de la superficie habitable, de l'état de la propriété et de la grandeur du terrain. Pour un chiffre précis, je compare les ventes récentes de maisons semblables à la vôtre." },
        { q: "Combien de temps prend une vente à Côte-d'Azur?", a: "Au 3e trimestre 2026, une unifamiliale s'est vendue en 35 jours en moyenne dans le secteur Gatineau de l'APCIQ, qui inclut Côte-d'Azur, contre 34 jours pour l'ensemble de la région métropolitaine (données Centris). Le délai dépend surtout du prix et de la préparation de la maison." },
        { q: "Quels commerces et services sont accessibles?", a: "Les services du quotidien, épiceries, pharmacie et restaurants, sont à quelques minutes. Selon votre rue, vous y allez à pied ou en voiture sur une courte distance." },
        { q: "Côte-d'Azur est-il un bon quartier pour les familles?", a: "Oui. Le quartier attire des familles qui cherchent un secteur mature, avec de la verdure et de grands arbres. Les écoles et les parcs sont à proximité." },
        { q: "Quels types de propriétés trouve-t-on à Côte-d'Azur?", a: "Surtout des maisons de moyenne à haute gamme, souvent très spacieuses, sur des rues bordées de grands arbres. Il y a aussi des condos plus récents sur la rue de Cannes." },
        { q: "Que regarder à l'inspection d'une maison dans un quartier établi?", a: "La toiture, la plomberie (cuivre ou acier galvanisé), l'ampérage du panneau électrique, la fondation et l'isolation, surtout sur une maison plus âgée. Si vous pensez aménager un logement au sous-sol, vérifiez avant d'acheter avec la Ville de Gatineau ce que le zonage permet, et prévoyez un permis." },
      ],
    }}
    sectors={{ list: [
      { name: "Limbour", href: "/limbour/", detail: "Familial, parcs, banlieue moderne, voisin direct de Côte-d'Azur" },
      { name: "Gatineau (centre)", href: "/gatineau/", detail: "Centre du secteur Gatineau, services, condos et résidentiel" },
      { name: "Hull", href: "/hull/", detail: "Urbain, culture, condos, projet Zibi, accès direct à Ottawa" },
    ]}}
    related={{ pages: [
      { title: "Limbour", text: "Le quartier voisin.", href: "/limbour/" },
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
    cta={{ title: "Acheteur ou vendeur à Côte-d'Azur?", text: "Je connais le quartier, parlons de votre projet.", buttons: [{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" }, { label: "Réserver une consultation", href: "/consultation-acheteur/", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default CoteDazurPage;
