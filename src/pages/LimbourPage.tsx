import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-limbour.webp";

const LimbourPage = () => (
  <NeighborhoodTemplate
    seoTitle="Limbour Gatineau — Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre dans le quartier Limbour à Gatineau. Secteur familial moderne avec parcs, écoles et accès rapide à Ottawa."
    ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg"
    jsonLd={{ name: "Limbour", description: "Courtier immobilier dans le quartier Limbour à Gatineau. Secteur familial moderne.", lat: 45.4850, lng: -75.6600, url: "/limbour/" }}
    hero={{ overline: "Guide de quartier · Limbour", title: "Vivre, acheter ou vendre à Limbour", subtitle: "Quartier familial moderne du secteur Gatineau, près de l'Hôpital de Gatineau et de l'autoroute 50. Maisons des années 2000-2020, parcs, sentiers, à environ 12 km du centre-ville d'Ottawa.", image: heroImg }}
    trustSpecialty="Spécialiste Limbour et environs"
    lifestyle={{ image: heroImg, imageAlt: "Quartier Limbour, Gatineau", title: "Limbour est-il un bon quartier pour une famille?", subtitle: "Oui. C'est le profil d'acheteur que je vois le plus souvent à Limbour : de jeunes familles et des couples qui quittent un condo ou une première maison. Le quartier a été planifié pour eux, avec des rues en boucle et des culs-de-sac qui limitent la circulation de transit, des parcs et des sentiers intégrés au développement, et des écoles primaires du Centre de services scolaire des Draveurs à proximité. Le sous-secteur Ferme Limbour regroupe les propriétés plus grandes et plus haut de gamme." }}
    reasons={[
      "Maisons récentes et développements résidentiels modernes (constructions 2000-2020 majoritairement)",
      "Prix médian d'une unifamiliale de 490 000 $ au 2e trimestre 2026 dans le secteur Gatineau de l'APCIQ, qui inclut Limbour",
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
        a: "Surtout des maisons unifamiliales à deux étages avec garage, construites entre 2000 et 2020, plus des maisons de ville et quelques jumelées. Les superficies courantes vont de 1 400 à 2 200 pi², avec un sous-sol souvent fini ou aménageable.",
        detail: "Pour un acheteur, ça veut dire des matériaux, une isolation et une mécanique récents, donc peu de rénovations majeures à prévoir comparé aux quartiers plus anciens comme Côte-d'Azur. Les terrains sont déjà aménagés et les parcs sont matures. Dans Ferme Limbour, les terrains sont plus grands et souvent boisés, et une maison équivalente peut valoir de 30 000 $ à 50 000 $ de plus qu'ailleurs dans Limbour.",
      },
      {
        q: "Limbour, Aylmer, Plateau ou Masson-Angers : lequel choisir?",
        a: "Limbour offre des maisons récentes à un prix plus accessible qu'Aylmer ou le Plateau. Le quartier est aussi plus près d'Ottawa que Masson-Angers : environ 12 km du centre-ville par la route, contre environ 36 km depuis Masson-Angers.",
        detail: "Si vous voulez une maison prête à habiter dans un quartier déjà établi, sans vous surendetter, Limbour est souvent le bon compromis. Si vous tenez au lac Deschênes ou aux commerces du vieux Aylmer, regardez Aylmer. Si vous préférez une construction neuve personnalisée et que le trajet compte moins, regardez Masson-Angers.",
      },
    ]}
    profilesTitle="Limbour est idéal pour…"
    profiles={[
      { icon: Users, title: "Jeunes familles", text: "Maisons récentes 5-20 ans avec garage, terrains aérés, écoles, parcs et sentiers à proximité. Pas de rénovations urgentes." },
      { icon: Home, title: "Acheteurs deuxième maison", text: "Familles qui upgradent depuis un condo ou une première maison plus petite. Le sous-secteur Ferme Limbour offre des propriétés plus grandes avec terrains boisés." },
      { icon: TrendingUp, title: "Investisseurs", text: "Secteur en croissance avec demande locative stable des jeunes familles et travailleurs de l'Hôpital de Gatineau." },
      { icon: MapPin, title: "Navetteurs", text: "Accès à l'autoroute 50 pour rejoindre les ponts vers Ottawa." },
    ]}
    inlineCta={{ text: "Propriétaire à Limbour? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau/" }}
    faq={{
      title: "Questions sur Limbour",
      items: [
        { q: "Limbour est-il un quartier récent?", a: "Oui, majoritairement. La plupart des développements datent des années 2000-2020, avec quelques propriétés plus anciennes dans certains coins. Le sous-secteur Ferme Limbour est particulièrement recherché pour ses constructions de qualité." },
        { q: "Quel est le prix d'une maison à Limbour en 2026?", a: "Limbour fait partie du secteur Gatineau dans les statistiques de l'APCIQ. Au 2e trimestre 2026, le prix médian d'une unifamiliale y était de 490 000 $ (données Centris). À Limbour, le prix varie ensuite selon la grandeur, l'année de construction et le sous-secteur, et les propriétés plus haut de gamme se trouvent dans Ferme Limbour. Pour un chiffre précis, je compare les ventes récentes de maisons semblables à la vôtre." },
        { q: "Y a-t-il des parcs et sentiers à Limbour?", a: "Oui, le quartier est reconnu pour ses espaces verts, sentiers pédestres et parcs de quartier. Le sous-secteur Ferme Limbour est entouré de zones boisées, ce qui contribue au cachet du secteur." },
        { q: "Quels services sont accessibles près de Limbour?", a: "La rue Saint-Louis regroupe des commerces de proximité, dont une épicerie et une pharmacie. L'Hôpital de Gatineau, au 909, boulevard La Vérendrye Ouest, est à quelques minutes en voiture." },
        { q: "Combien de temps prend une vente à Limbour?", a: "Au 2e trimestre 2026, une unifamiliale s'est vendue en 22 jours en moyenne dans le secteur Gatineau de l'APCIQ, qui inclut Limbour, contre 27 jours pour l'ensemble de la région métropolitaine (données Centris). Le délai dépend surtout du prix et de la préparation de la maison." },
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
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau/" },
      { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau/" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Limbour", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit, recevez-le par courriel" }}
    brokerPerspective={{
      observation: "Ce que je vois à Limbour en ce moment : la plupart de mes acheteurs sont des jeunes familles ou des couples qui veulent upgrader depuis un condo ou une première maison. Ils cherchent une propriété récente, sans grosses rénovations à faire, avec un garage et un terrain aéré. Le sous-secteur Ferme Limbour est particulièrement recherché, les acheteurs viennent souvent y faire des visites avant de décider d'élargir leur recherche.",
      dataPoint: "Au 2e trimestre 2026, une unifamiliale s'est vendue en 22 jours en moyenne dans le secteur Gatineau de l'APCIQ, qui inclut Limbour. Quand le prix est aligné avec le sous-secteur (Ferme Limbour vs reste du quartier), les délais sont plus courts.",
      takeaway: "Mon conseil aux propriétaires de Limbour qui pensent vendre : ne sous-estime pas l'effet du sous-secteur sur ton prix. Une maison équivalente dans Ferme Limbour vs une autre rue de Limbour, ça peut faire 30-50k$ d'écart. Inscris au juste prix selon ta vraie zone, pas une moyenne globale du quartier."
    }}
    cta={{ title: "Acheteur ou vendeur à Limbour?", text: "Je connais le quartier, parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }, { label: "Réserver une consultation", href: "/consultation-acheteur/", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default LimbourPage;
