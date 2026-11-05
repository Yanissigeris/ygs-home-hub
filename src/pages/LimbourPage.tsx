import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-limbour.webp";

const LimbourPage = () => (
  <NeighborhoodTemplate
    updated={{ date: "2026-11-04", source: "Chiffres de marché : APCIQ, 3e trimestre 2026" }}
    seoTitle="Limbour Gatineau | Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre dans le quartier Limbour à Gatineau. Secteur familial moderne avec parcs, écoles et accès rapide à Ottawa."
    ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg"
    jsonLd={{ name: "Limbour", description: "Courtier immobilier dans le quartier Limbour à Gatineau. Secteur familial moderne.", lat: 45.4850, lng: -75.6600, url: "/limbour/" }}
    hero={{ overline: "Guide de quartier · Limbour", title: "Vivre, acheter ou vendre à Limbour", subtitle: "Quartier familial moderne du secteur Gatineau, près de l'Hôpital de Gatineau et de l'autoroute 50. Maisons des années 2000-2020, parcs, sentiers, à environ 12 km du centre-ville d'Ottawa.", image: heroImg }}
    trustSpecialty="Spécialiste Limbour et environs"
    lifestyle={{ image: heroImg, imageAlt: "Quartier Limbour, Gatineau", title: "Limbour est-il un bon quartier pour une famille?", subtitle: "Oui. Le quartier a été planifié pour les familles : des rues en boucle et des culs-de-sac qui limitent la circulation de transit, avec des parcs et des sentiers intégrés. Des écoles primaires du Centre de services scolaire des Draveurs sont à proximité. Le sous-secteur Ferme Limbour regroupe les propriétés plus grandes et plus haut de gamme." }}
    reasons={[
      "Maisons récentes et développements résidentiels modernes (constructions 2000-2020 majoritairement)",
      "Prix médian d'une unifamiliale de 464 900 $ au 3e trimestre 2026 dans le secteur Gatineau de l'APCIQ, qui inclut Limbour",
      "Sous-secteur Ferme Limbour : résidentiel haut de gamme avec sentiers boisés et propriétés plus grandes",
      "Parcs, sentiers pédestres et espaces verts abondants",
      "Hôpital de Gatineau (909, boulevard La Vérendrye Ouest) à quelques minutes en voiture",
      "Tim Hortons et restaurants accessibles à courte distance (boul. Maloney, boul. La Vérendrye)",
      "Écoles secondaires desservant le secteur : Polyvalente de l'Érablière et École secondaire du Versant (CSSD Draveurs)",
      "Accès à l'autoroute 50, à environ 12 km du centre-ville d'Ottawa par la route",
      "Quartier en croissance : peu de rénovations à prévoir comparé aux quartiers plus anciens",
    ]}
    answers={[
      {
        q: "Quel type de maisons trouve-t-on à Limbour?",
        a: "Surtout des maisons unifamiliales à deux étages avec garage, construites entre 2000 et 2020, plus des maisons de ville et quelques jumelées. Le sous-sol est souvent fini ou aménageable.",
        detail: "Pour un acheteur, ça veut dire des matériaux, une isolation et une mécanique récents, donc peu de rénovations majeures à prévoir comparé aux quartiers plus anciens comme Côte-d'Azur. Les terrains sont déjà aménagés et les parcs sont matures. Dans Ferme Limbour, les terrains sont plus grands et souvent boisés.",
      },
      {
        q: "Limbour, Aylmer, Plateau ou Masson-Angers : lequel choisir?",
        a: "Limbour offre des maisons récentes à un prix plus accessible qu'Aylmer ou le Plateau. Le quartier est aussi plus près d'Ottawa que Masson-Angers : environ 12 km du centre-ville par la route, contre environ 36 km depuis Masson-Angers.",
        detail: "Si vous voulez une maison prête à habiter dans un quartier déjà établi, sans vous surendetter, Limbour est souvent le bon compromis. Pour les commerces du Vieux-Aylmer, regardez plutôt Aylmer. Masson-Angers convient mieux si vous préférez une construction neuve personnalisée et que le trajet compte moins.",
      },
    ]}
    profilesTitle="Qui achète à Limbour"
    profiles={[
      { icon: Users, title: "Jeunes familles", text: "Maisons récentes 5-20 ans avec garage, terrains aérés, écoles, parcs et sentiers à proximité. Pas de rénovations urgentes." },
      { icon: Home, title: "Acheteurs deuxième maison", text: "Familles qui upgradent depuis un condo ou une première maison plus petite. Le sous-secteur Ferme Limbour offre des propriétés plus grandes avec terrains boisés." },
      { icon: TrendingUp, title: "Investisseurs", text: "Des locataires possibles parmi les jeunes familles et le personnel de l'Hôpital de Gatineau, tout près. Je vous montre les loyers récents avant une offre." },
      { icon: MapPin, title: "Navetteurs", text: "Accès à l'autoroute 50 pour rejoindre les ponts vers Ottawa." },
    ]}
    inlineCta={{ text: "Propriétaire à Limbour? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau/" }}
    faq={{
      title: "Questions sur Limbour",
      items: [
        { q: "Limbour est-il un quartier récent?", a: "Oui, majoritairement. La plupart des développements datent des années 2000-2020, avec quelques propriétés plus anciennes dans certains coins. Le sous-secteur Ferme Limbour attire les acheteurs avec ses grandes propriétés." },
        { q: "Quel est le prix d'une maison à Limbour en 2026?", a: "Limbour fait partie du secteur Gatineau dans les statistiques de l'APCIQ. Au 3e trimestre 2026, le prix médian d'une unifamiliale y était de 464 900 $ (données Centris). À Limbour, le prix varie ensuite selon la grandeur, l'année de construction et le sous-secteur, et les propriétés plus haut de gamme se trouvent dans Ferme Limbour. Pour un chiffre précis, je compare les ventes récentes de maisons semblables à la vôtre." },
        { q: "Y a-t-il des parcs et sentiers à Limbour?", a: "Oui, le quartier est reconnu pour ses espaces verts, sentiers pédestres et parcs de quartier. Le sous-secteur Ferme Limbour est entouré de zones boisées, ce qui contribue au cachet du secteur." },
        { q: "Quels services sont accessibles près de Limbour?", a: "La rue Saint-Louis regroupe des commerces de proximité, dont une épicerie et une pharmacie. L'Hôpital de Gatineau, au 909, boulevard La Vérendrye Ouest, est à quelques minutes en voiture." },
        { q: "Combien de temps prend une vente à Limbour?", a: "Au 3e trimestre 2026, une unifamiliale s'est vendue en 35 jours en moyenne dans le secteur Gatineau de l'APCIQ, qui inclut Limbour, contre 34 jours pour l'ensemble de la région métropolitaine (données Centris). Le délai dépend surtout du prix et de la préparation de la maison." },
        { q: "Quelles écoles desservent Limbour?", a: "Plusieurs écoles primaires francophones du Centre de services scolaire des Draveurs sont à proximité. Au secondaire, la Polyvalente de l'Érablière et l'École secondaire du Versant desservent le secteur. Pour connaître l'école de votre adresse, consultez le Centre de services scolaire des Draveurs." },
      ],
    }}
    sectors={{ list: [
      { name: "Côte-d'Azur", href: "/cote-dazur-gatineau/", detail: "Quartier établi mature, bungalows à rénover, voisin direct de Limbour" },
      { name: "Gatineau (centre)", href: "/gatineau/", detail: "Centre du secteur Gatineau, services, condos et résidentiel" },
      { name: "Masson-Angers", href: "/masson-angers/", detail: "Secteur en développement avec maisons neuves à prix accessibles" },
    ]}}
    related={{ pages: [
      { title: "Acheter à Limbour", text: "Maisons récentes à bon prix.", href: "/blogue/acheter-limbour-maisons-recentes/" },
      { title: "Acheter depuis Ottawa", text: "Traverser la rivière sans surprise.", href: "/acheter-a-gatineau-depuis-ottawa/" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau/" },
      { title: "Vendre à Gatineau", text: "Prix et mise en marché.", href: "/vendre-ma-maison-gatineau/" },
      { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau/" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit : acheter à Limbour", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit, recevez-le par courriel" }}
    brokerPerspective={{
      observation: "Ce que je regarde à Limbour : je compare avec les ventes du même sous-secteur, Ferme Limbour ou le reste du quartier, avant de parler de prix.",
      dataPoint: "Au 3e trimestre 2026, une unifamiliale s'est vendue en 35 jours en moyenne dans le secteur Gatineau de l'APCIQ, qui inclut Limbour. Quand le prix est aligné avec le sous-secteur (Ferme Limbour vs reste du quartier), les délais sont plus courts.",
      takeaway: "Mon conseil aux propriétaires de Limbour qui pensent vendre : ne sous-estimez pas l'effet du sous-secteur sur votre prix. Inscrivez votre maison au juste prix selon votre zone, pas selon une moyenne du quartier."
    }}
    cta={{ title: "Acheteur ou vendeur à Limbour?", text: "Je connais le quartier, parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }, { label: "Réserver une consultation", href: "/consultation-acheteur/", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default LimbourPage;
