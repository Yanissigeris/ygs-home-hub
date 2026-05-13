import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-limbour.webp";

const LimbourPage = () => (
  <NeighborhoodTemplate
    seoTitle="Limbour Gatineau — Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre dans le quartier Limbour à Gatineau. Secteur familial moderne avec parcs, écoles et accès rapide à Ottawa."
    ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg"
    jsonLd={{ name: "Limbour", description: "Courtier immobilier dans le quartier Limbour à Gatineau. Secteur familial moderne.", lat: 45.4850, lng: -75.6600, url: "/limbour/" }}
    hero={{ overline: "Guide de quartier · Limbour", title: "Vivre, acheter ou vendre à Limbour", subtitle: "Quartier familial moderne du secteur Gatineau, près de l'Hôpital de Gatineau et de l'autoroute 50. Maisons des années 2000-2020, parcs, sentiers, à 20 minutes d'Ottawa.", image: heroImg }}
    trustSpecialty="Spécialiste Limbour et environs"
    lifestyle={{ image: heroImg, imageAlt: "Quartier Limbour, Gatineau", title: "Pourquoi Limbour est prisé des familles", subtitle: "Limbour attire les jeunes familles et les acheteurs de deuxième propriété qui cherchent une maison récente, des terrains aérés et un quartier en croissance. Le sous-secteur Ferme Limbour est particulièrement recherché pour ses propriétés plus haut de gamme. Le secteur reste accessible pour des acheteurs qui veulent éviter les rénovations majeures qu'on retrouve dans les quartiers plus anciens." }}
    reasons={[
      "Maisons récentes et développements résidentiels modernes (constructions 2000-2020 majoritairement)",
      "Maisons unifamiliales et semi-détachées entre 475 000 $ et 800 000 $ selon le sous-secteur et le type (données Centris, mai 2026)",
      "Sous-secteur Ferme Limbour : résidentiel haut de gamme avec sentiers boisés et propriétés plus grandes",
      "Parcs, sentiers pédestres et espaces verts abondants",
      "Services médicaux et pharmacies sur le boulevard de l'Hôpital : Hôpital de Gatineau, Pharmaprix, Uniprix",
      "Tim Hortons et restaurants accessibles à courte distance (boul. Maloney, boul. La Vérendrye)",
      "Écoles secondaires desservant le secteur : Polyvalente de l'Érablière et École secondaire du Versant (CSSD Draveurs)",
      "Accès rapide à l'autoroute 50 — environ 20 minutes du centre-ville d'Ottawa",
      "Quartier en croissance : peu de rénovations à prévoir comparé aux quartiers plus anciens",
    ]}
    profilesTitle="Limbour est idéal pour…"
    profiles={[
      { icon: Users, title: "Jeunes familles", text: "Maisons récentes 5-20 ans avec garage, terrains aérés, écoles, parcs et sentiers à proximité. Pas de rénovations urgentes." },
      { icon: Home, title: "Acheteurs deuxième maison", text: "Familles qui upgradent depuis un condo ou une première maison plus petite. Le sous-secteur Ferme Limbour offre des propriétés plus grandes avec terrains boisés." },
      { icon: TrendingUp, title: "Investisseurs", text: "Secteur en croissance avec demande locative stable des jeunes familles et travailleurs de l'Hôpital de Gatineau." },
      { icon: MapPin, title: "Navetteurs", text: "Accès rapide à l'autoroute 50, à 20 minutes du centre-ville d'Ottawa par le pont Macdonald-Cartier." },
    ]}
    inlineCta={{ text: "Propriétaire à Limbour? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau/" }}
    faq={{
      title: "Questions sur Limbour",
      items: [
        { q: "Limbour est-il un quartier récent?", a: "Oui, majoritairement. La plupart des développements datent des années 2000-2020, avec quelques propriétés plus anciennes dans certains coins. Le sous-secteur Ferme Limbour est particulièrement recherché pour ses constructions de qualité." },
        { q: "Quel est le prix d'une maison à Limbour en 2026?", a: "Selon les inscriptions actives sur Centris en mai 2026, les maisons unifamiliales et semi-détachées se vendent généralement entre 475 000 $ et 800 000 $, selon la grandeur, l'année de construction, et le sous-secteur. Les propriétés plus haut de gamme se trouvent dans Ferme Limbour." },
        { q: "Y a-t-il des parcs et sentiers à Limbour?", a: "Oui, le quartier est reconnu pour ses espaces verts, sentiers pédestres et parcs de quartier. Le sous-secteur Ferme Limbour est entouré de zones boisées, ce qui contribue au cachet du secteur." },
        { q: "Quels services sont accessibles près de Limbour?", a: "Le boulevard de l'Hôpital concentre les services essentiels : Hôpital de Gatineau, pharmacies Pharmaprix et Uniprix. Plusieurs Tim Hortons et restaurants sont accessibles en quelques minutes sur les boulevards Maloney et La Vérendrye." },
        { q: "Combien de temps prend une vente à Limbour?", a: "Les maisons récentes bien préparées se vendent généralement en 25-40 jours dans le marché actuel. Le délai moyen pour une unifamiliale dans la région métropolitaine de Gatineau était de 32 jours au quatrième trimestre 2025 (Chambre immobilière de l'Outaouais)." },
        { q: "Quelles écoles desservent Limbour?", a: "Plusieurs écoles primaires francophones de la Commission scolaire des Draveurs sont à proximité. Au secondaire, la Polyvalente de l'Érablière et l'École secondaire du Versant desservent le secteur. Pour le catchment exact, consultez votre commission scolaire." },
      ],
    }}
    sectors={{ list: [
      { name: "Côte-d'Azur", href: "/cote-dazur-gatineau/", detail: "Quartier établi mature, bungalows à rénover — voisin direct de Limbour" },
      { name: "Gatineau (centre)", href: "/gatineau/", detail: "Centre du secteur Gatineau, services, condos et résidentiel" },
      { name: "Masson-Angers", href: "/masson-angers/", detail: "Secteur en développement avec maisons neuves à prix accessibles" },
    ]}}
    related={{ pages: [
      { title: "Limbour : quartier familial moderne", text: "Découvrez ce secteur en croissance.", href: "/blogue/limbour-quartier-familial-moderne-gatineau/" },
      { title: "Acheter à Limbour", text: "Maisons récentes à bon prix.", href: "/blogue/acheter-limbour-maisons-recentes/" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau/" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau/" },
      { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau/" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Limbour", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    brokerPerspective={{
      observation: "Ce que je vois à Limbour en ce moment : la plupart de mes acheteurs sont des jeunes familles ou des couples qui veulent upgrader depuis un condo ou une première maison. Ils cherchent une propriété récente, sans grosses rénovations à faire, avec un garage et un terrain aéré. Le sous-secteur Ferme Limbour est particulièrement recherché — les acheteurs viennent souvent y faire des visites avant de décider d'élargir leur recherche.",
      dataPoint: "Sur les ventes que je conclus à Limbour, les maisons bien préparées au bon prix partent généralement en 30-40 jours. Quand le prix est aligné avec le sous-secteur (Ferme Limbour vs reste du quartier), les délais sont plus courts.",
      takeaway: "Mon conseil aux propriétaires de Limbour qui pensent vendre : ne sous-estime pas l'effet du sous-secteur sur ton prix. Une maison équivalente dans Ferme Limbour vs une autre rue de Limbour, ça peut faire 30-50k$ d'écart. Inscris au juste prix selon ta vraie zone, pas une moyenne globale du quartier."
    }}
    cta={{ title: "Acheteur ou vendeur à Limbour?", text: "Je connais le quartier — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }, { label: "Réserver une consultation", href: "/consultation-acheteur/", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default LimbourPage;
