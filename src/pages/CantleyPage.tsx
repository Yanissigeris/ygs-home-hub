import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-cantley.jpg";

const CantleyPage = () => (
  <NeighborhoodTemplate
    seoTitle="Courtier immobilier Cantley · Outaouais | YGS"
    metaDesc="Courtier immobilier à Cantley. Grands terrains, collines verdoyantes et vie rurale à 20 minutes de Gatineau — accompagnement achat et vente."
    jsonLd={{ name: "Cantley", description: "Courtier immobilier à Cantley. Collines, grands terrains et nature à proximité de Gatineau.", lat: 45.5056, lng: -75.7833, url: "/cantley" }}
    hero={{ overline: "Guide de quartier · Cantley", title: "Vivre, acheter ou vendre à Cantley", subtitle: "Collines verdoyantes, grands terrains et vie rurale — à 20 minutes du centre de Gatineau.", image: heroImg }}
    trustSpecialty="Spécialiste Cantley et environs"
    lifestyle={{ image: heroImg, imageAlt: "Paysage rural de Cantley", title: "Pourquoi Cantley attire les familles", subtitle: "Un cadre champêtre avec la commodité de la ville à portée de main." }}
    reasons={[
      "Grands terrains de 1 à 10+ acres — espace, intimité et nature",
      "Communauté rurale active avec marchés fermiers et événements locaux",
      "Écoles primaires francophones et anglophones sur place",
      "Sentiers équestres, VTT et motoneige — plein air quatre-saisons",
      "20 minutes du centre de Gatineau, 30-35 minutes d'Ottawa",
    ]}
    profilesTitle="Cantley est idéal pour…"
    profiles={[
      { icon: Users, title: "Familles cherchant l'espace", text: "Grands terrains, air frais et communauté familiale." },
      { icon: Home, title: "Amateurs de vie rurale", text: "Propriétés avec terrain, grange, atelier ou écurie." },
      { icon: TreePine, title: "Amoureux de la nature", text: "Randonnée, ski, équitation et vie au grand air." },
      { icon: Mountain, title: "Télétravailleurs", text: "Calme absolu et qualité de vie exceptionnelle." },
    ]}
    inlineCta={{ text: "Vous êtes propriétaire à Cantley? Découvrez combien vaut votre terrain.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur Cantley",
      items: [
        { q: "Cantley est-il loin de Gatineau?", a: "Environ 20 minutes du centre de Gatineau. L'accès est rapide par la route 307." },
        { q: "Y a-t-il des services à Cantley?", a: "Oui — école, épicerie, restaurants, station-service. Pour les gros achats, Gatineau est à 15-20 minutes." },
        { q: "Les terrains sont-ils grands à Cantley?", a: "Oui, c'est l'un des attraits principaux. La plupart des propriétés ont 1 à 5+ acres." },
        { q: "Combien coûte une maison à Cantley?", a: "Les prix varient selon la taille du terrain et le type de propriété. Contactez-moi pour une analyse récente des prix dans votre secteur de Cantley." },
        { q: "Cantley est-il bon pour les familles?", a: "Oui — communauté familiale, écoles primaires, grands espaces, activités plein air et sécurité. C'est un milieu de vie idéal pour élever des enfants." },
        { q: "Peut-on avoir un puits et une fosse septique?", a: "Oui, la majorité des propriétés à Cantley fonctionnent avec puits artésien et système septique. L'inspection est importante lors de l'achat." },
        { q: "Y a-t-il du transport en commun à Cantley?", a: "Le service est limité. La plupart des résidents utilisent leur véhicule. La proximité de Gatineau compense pour les services." },
        { q: "Cantley est-il un bon investissement?", a: "Les terrains et propriétés à Cantley prennent de la valeur — la demande est forte pour la qualité de vie et la proximité de Gatineau." },
        { q: "Quelles activités peut-on faire à Cantley?", a: "Randonnée, ski, VTT, motoneige, équitation, marchés fermiers et événements communautaires — c'est un paradis quatre-saisons." },
        { q: "Comment vendre ma propriété à Cantley?", a: "Je connais le marché de Cantley — terrain, superficie, particularités. Demandez une évaluation gratuite pour connaître votre valeur." },
      ],
    }}
    sectors={{ list: [
      { name: "Chelsea", href: "/chelsea", detail: "Village artistique, parc de la Gatineau" },
      { name: "Val-des-Monts", href: "/val-des-monts", detail: "Lacs, chalets, nature sauvage" },
      { name: "Plateau", href: "/plateau", detail: "Familles, développements récents" },
    ]}}
    related={{ pages: [
      { title: "Acheter un terrain à Cantley", text: "Ce qu'il faut savoir avant d'acheter.", href: "/blogue/acheter-terrain-cantley" },
      { title: "Vivre à Cantley", text: "Campagne aux portes de Gatineau.", href: "/blogue/vivre-cantley-campagne-gatineau" },
      { title: "Familles à Cantley", text: "Pourquoi les familles choisissent Cantley.", href: "/blogue/familles-cantley-pourquoi" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-gatineau" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Cantley", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur à Cantley?", text: "Je connais le secteur — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default CantleyPage;
