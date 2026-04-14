import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-cote-dazur.webp";

const CoteDazurPage = () => (
  <NeighborhoodTemplate
    seoTitle="Côte-d'Azur Gatineau — Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre dans le quartier Côte-d'Azur à Gatineau. Secteur résidentiel familial, bungalows, proximité services et accès Ottawa."
    jsonLd={{ name: "Côte-d'Azur", description: "Courtier immobilier dans le quartier Côte-d'Azur à Gatineau. Secteur résidentiel familial.", lat: 45.4700, lng: -75.7000, url: "/cote-dazur-gatineau" }}
    hero={{ overline: "Guide de quartier · Côte-d'Azur", title: "Vivre, acheter ou vendre à Côte-d'Azur", subtitle: "Quartier résidentiel établi de Gatineau — bungalows, arbres matures et vie de quartier tranquille.", image: heroImg }}
    trustSpecialty="Spécialiste Côte-d'Azur et environs"
    lifestyle={{ image: heroImg, imageAlt: "Quartier Côte-d'Azur, Gatineau", title: "Pourquoi Côte-d'Azur est apprécié", subtitle: "Un quartier résidentiel mature avec de belles rues boisées et un accès facile à tout." }}
    reasons={[
      "Quartier résidentiel établi avec arbres matures et rues paisibles",
      "Bungalows, split-levels et maisons rénovées à bon rapport qualité-prix",
      "Proximité des commerces, supermarchés et services sur le boulevard Maloney",
      "Écoles primaires et secondaires à distance de marche",
      "15-20 minutes d'Ottawa par l'autoroute 50 et le pont Macdonald-Cartier",
    ]}
    profilesTitle="Côte-d'Azur est idéal pour…"
    profiles={[
      { icon: Users, title: "Familles", text: "Quartier calme, écoles proches, parcs et voisinage stable." },
      { icon: Home, title: "Premiers acheteurs", text: "Bungalows abordables avec potentiel de rénovation." },
      { icon: MapPin, title: "Retraités", text: "Quartier tranquille avec tous les services à proximité." },
      { icon: Coffee, title: "Acheteurs de revente", text: "Propriétés avec caractère et potentiel de plus-value." },
    ]}
    inlineCta={{ text: "Propriétaire à Côte-d'Azur? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur Côte-d'Azur",
      items: [
        { q: "Où se situe le quartier Côte-d'Azur?", a: "Dans le secteur Gatineau (ancienne ville), entre le boulevard Maloney et le boulevard La Vérendrye. Central et bien desservi." },
        { q: "Les maisons sont-elles abordables?", a: "Oui — c'est l'un des quartiers les plus accessibles de Gatineau pour les bungalows et les maisons unifamiliales." },
        { q: "Y a-t-il du transport en commun?", a: "Oui, le secteur est desservi par la STO avec des lignes vers Hull et Ottawa." },
      ],
    }}
    sectors={{ list: [
      { name: "Limbour", href: "/limbour", detail: "Familial, parcs, banlieue moderne" },
      { name: "Gatineau (centre)", href: "/gatineau", detail: "Services, résidentiel, central" },
      { name: "Hull", href: "/hull", detail: "Urbain, culture, condos" },
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
