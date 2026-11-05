import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-val-des-monts-gen.webp";

const ValDesMontsPage = () => (
  <NeighborhoodTemplate
    updated={{ date: "2026-11-04", source: "Chiffres de marché : APCIQ, 3e trimestre 2026" }}
    seoTitle="Val-des-Monts | Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre à Val-des-Monts. Lacs, chalets, grands terrains et nature sauvage, au nord de Gatineau."
    ogImage="https://yanisgauthier.com/og/og-val-des-monts.jpg"
    jsonLd={{ name: "Val-des-Monts", description: "Courtier immobilier à Val-des-Monts. Lacs, chalets et propriétés de villégiature en Outaouais.", lat: 45.5000, lng: -75.6500, url: "/val-des-monts/" }}
    hero={{ overline: "Guide de quartier · Val-des-Monts", title: "Vivre, acheter ou vendre à Val-des-Monts", subtitle: "Lacs, terrains boisés et chalets, dans une municipalité de villégiature de l'Outaouais. 125 lacs selon la municipalité, et le village de Perkins à près de 30 km du centre-ville d'Ottawa par la route.", image: heroImg }}
    trustSpecialty="Spécialiste Val-des-Monts et environs"
    lifestyle={{ image: heroImg, imageAlt: "Lac à Val-des-Monts", title: "Pourquoi choisir Val-des-Monts", subtitle: "À Val-des-Monts, on achète une résidence principale en pleine nature ou un chalet pour les fins de semaine. Ici, l'accès au lac et le lac lui-même pèsent lourd dans le prix." }}
    reasons={[
      "125 lacs selon la municipalité, accès privé à un lac pour beaucoup de propriétés",
      "Prix médian d'une unifamiliale de 530 000 $ au 3e trimestre 2026 dans la périphérie de Gatineau, un territoire de l'APCIQ qui inclut Val-des-Monts",
      "Lacs principaux : McGregor, Saint-Pierre, Achigan, Barnes, chacun avec son propre marché",
      "Grands terrains en nature, souvent près d'un lac",
      "Chalets quatre-saisons, résidences permanentes et propriétés de luxe bord de lac",
      "Village de Perkins comme centre de services (épicerie, école primaire, services de proximité)",
      "Village de Perkins à près de 30 km du centre-ville d'Ottawa par la route",
      "Les Promenades Gatineau à une vingtaine de kilomètres de Perkins par la route, pour les services commerciaux",
      "Plus de choix pour les acheteurs : 633 unifamiliales en vigueur au 3e trimestre 2026 dans la périphérie de Gatineau, 23 % de plus qu'un an plus tôt (APCIQ)",
    ]}
    profilesTitle="Pour qui Val-des-Monts a du sens"
    profiles={[
      { icon: TreePine, title: "Amateurs de lac et nature", text: "Quai privé, kayak, baignade et feux de camp. Les grands lacs comme McGregor et Saint-Pierre se prêtent bien à la vie nautique quatre saisons." },
      { icon: Home, title: "Chercheurs de chalet", text: "Du chalet trois-saisons à la maison quatre-saisons au bord de l'eau, les prix varient beaucoup selon l'accès au lac et l'état. Je compare avec les ventes récentes du même lac." },
      { icon: Users, title: "Familles en quête d'espace", text: "Grands terrains, école primaire à Perkins, communauté tissée serrée. Pas d'école secondaire à Val-des-Monts : les élèves du Centre de services scolaire des Draveurs vont au secondaire dans le secteur Gatineau." },
      { icon: Mountain, title: "Télétravailleurs et retraités", text: "Vie en nature, avec Internet haute vitesse offert dans une grande partie du territoire. Le centre-ville d'Ottawa reste accessible pour les rencontres en présentiel ponctuelles." },
    ]}
    inlineCta={{ text: "Vous possédez un chalet à Val-des-Monts? Découvrez sa valeur actuelle.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau/" }}
    faq={{
      title: "Questions sur Val-des-Monts",
      items: [
        { q: "Val-des-Monts est-il accessible à l'année?", a: "Oui, la majorité des routes principales sont entretenues à l'année. Certains chemins privés en bord de lac peuvent nécessiter du déneigement supplémentaire ou un véhicule 4×4 pour les accès les plus reculés." },
        { q: "Quel est le prix d'une propriété à Val-des-Monts en 2026?", a: "Val-des-Monts fait partie de la « périphérie de Gatineau » dans les statistiques de l'APCIQ, où le prix médian d'une unifamiliale était de 530 000 $ au 3e trimestre 2026 (données Centris). Ce territoire inclut aussi Chelsea, Cantley et Pontiac : c'est donc un repère large. À Val-des-Monts, les prix dépendent fortement du lac, de l'orientation et du type de propriété, du chalet rustique à la résidence quatre-saisons en bord de lac." },
        { q: "Quels sont les principaux lacs de Val-des-Monts?", a: "Les plus connus sont McGregor, Saint-Pierre, Achigan et Barnes. Chaque lac a son profil : McGregor pour les propriétés haut de gamme et la navigation, Saint-Pierre pour les chalets familiaux, Achigan pour la pêche, Barnes pour le calme." },
        { q: "Peut-on habiter à Val-des-Monts à l'année?", a: "Absolument. De plus en plus de résidents permanents s'y installent depuis 2020, attirés par le télétravail et la qualité de vie. La municipalité a investi dans l'Internet haute vitesse pour soutenir cette tendance." },
        { q: "Y a-t-il des écoles à Val-des-Monts?", a: "Oui pour le primaire : le Centre de services scolaire des Draveurs y compte trois écoles primaires (de la Colline, L'Équipage et du Sommet). Au secondaire, ses élèves fréquentent des écoles du secteur Gatineau, un facteur à considérer pour les familles avec des ados. En anglais, l'école primaire Poltimore (Western Québec School Board) est à Val-des-Monts, sous réserve de l'admissibilité." },
        { q: "Combien de temps prend une vente à Val-des-Monts?", a: "Ça varie selon le type. Au 3e trimestre 2026, une unifamiliale s'est vendue en 46 jours en moyenne dans la périphérie de Gatineau, qui inclut Val-des-Monts (APCIQ, données Centris). Pour un chalet ou une propriété en bord de lac, je vous montre les ventes récentes comparables." },
      ],
    }}
    sectors={{ list: [
      { name: "Cantley", href: "/cantley/", detail: "Rural, collines, grands terrains, voisin sud de Val-des-Monts" },
      { name: "Chelsea", href: "/chelsea/", detail: "Village, parc de la Gatineau, alternative haut de gamme côté ouest" },
      { name: "Buckingham", href: "/buckingham-masson-angers/", detail: "Abordable, rivière, nature, avec école secondaire" },
    ]}}
    related={{ pages: [
      { title: "Vendre mon chalet à Val-des-Monts", text: "Stratégie de vente pour propriétés de villégiature.", href: "/vendre-ma-maison-gatineau/" },
      { title: "Évaluation chalet Val-des-Monts", text: "Combien vaut votre chalet ou terrain?", href: "/evaluation-gratuite-gatineau/" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau/" },
      { title: "Premier achat", text: "Budget, mise de fonds et conseils.", href: "/premier-achat-gatineau/" },
      { title: "Plex et investissement", text: "Analyse pour investisseurs.", href: "/investir-plex-gatineau/" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit : acheter à Val-des-Monts", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit, recevez-le par courriel" }}
    brokerPerspective={{
      observation: "Ce que je regarde à Val-des-Monts : l'accès au lac, l'installation septique et le puits pèsent autant que la maison. Un chalet trois-saisons et une maison habitable à l'année ne se comparent pas.",
      dataPoint: "Au 3e trimestre 2026, une unifamiliale s'est vendue en 46 jours en moyenne dans la périphérie de Gatineau, un territoire de l'APCIQ qui inclut Val-des-Monts (données Centris).",
      takeaway: "Mon conseil aux propriétaires de Val-des-Monts qui pensent vendre : le moment et la préparation comptent énormément. Le bon moment dépend de votre type de propriété et de la concurrence sur votre lac. On le regarde dans les chiffres. Soyez réaliste sur le prix selon le type de lac et l'accès : une propriété sur McGregor ne se compare pas à une propriété sans accès au lac. Faites évaluer votre propriété avant de l'inscrire."
    }}
    cta={{ title: "Acheteur ou vendeur à Val-des-Monts?", text: "Je connais le secteur, parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }, { label: "Réserver une consultation", href: "/consultation-acheteur/", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default ValDesMontsPage;
