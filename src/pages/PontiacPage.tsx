import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-pontiac.jpg";

const PontiacPage = () => (
  <NeighborhoodTemplate
    seoTitle="Pontiac — Immobilier et guide de quartier | YGS"
    metaDesc="Vivre, acheter ou vendre dans le Pontiac. Rivière des Outaouais, grands terrains, vie rurale authentique — aux portes de Gatineau et Ottawa."
    jsonLd={{ name: "Pontiac", description: "Courtier immobilier dans le Pontiac. Terrains agricoles, rivière des Outaouais et vie rurale.", lat: 45.5800, lng: -76.1200, url: "/pontiac" }}
    hero={{ overline: "Guide de secteur · Pontiac", title: "Vivre, acheter ou vendre dans le Pontiac", subtitle: "Grands espaces, rivière des Outaouais et vie rurale authentique — le charme de la campagne québécoise.", image: heroImg }}
    trustSpecialty="Spécialiste Pontiac et Outaouais rural"
    lifestyle={{ image: heroImg, imageAlt: "Paysage rural du Pontiac", title: "Pourquoi le Pontiac séduit", subtitle: "Un territoire immense où nature, patrimoine et tranquillité offrent un style de vie unique." }}
    reasons={[
      "Grands terrains agricoles et résidentiels à prix très accessibles",
      "Rivière des Outaouais — kayak, pêche et activités nautiques",
      "Patrimoine bâti unique — maisons de pierre, fermes centenaires",
      "Communauté rurale anglophone et francophone chaleureuse",
      "30-45 minutes d'Aylmer, 40-55 minutes d'Ottawa",
    ]}
    profilesTitle="Le Pontiac est idéal pour…"
    profiles={[
      { icon: TreePine, title: "Amateurs de grands espaces", text: "Terres agricoles, forêts et rivière à perte de vue." },
      { icon: Home, title: "Acheteurs de fermes", text: "Propriétés agricoles, maisons de pierre et fermes rénovées." },
      { icon: Users, title: "Familles en quête de calme", text: "Vie rurale authentique à distance raisonnable de la ville." },
      { icon: Mountain, title: "Retraités et télétravailleurs", text: "Prix imbattables et cadre de vie paisible." },
    ]}
    inlineCta={{ text: "Propriétaire dans le Pontiac? Découvrez la valeur de votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur le Pontiac",
      items: [
        { q: "Le Pontiac est-il loin de Gatineau?", a: "Ça dépend du secteur — de 30 minutes (Luskville) à plus d'une heure (Fort-Coulonge). La majorité des propriétés résidentielles sont à 30-45 minutes." },
        { q: "Peut-on y travailler à Ottawa?", a: "Oui, mais le trajet est plus long qu'Aylmer ou Hull. Le Pontiac convient mieux au télétravail ou aux emplois en Outaouais." },
        { q: "Les terrains sont-ils abordables?", a: "Très abordables comparé au reste de l'Outaouais. C'est l'un des meilleurs rapports espace/prix de la région." },
      ],
    }}
    sectors={{ list: [
      { name: "Aylmer", href: "/aylmer", detail: "Lac Deschênes, quartiers familiaux" },
      { name: "Chelsea", href: "/chelsea", detail: "Village, parc de la Gatineau" },
      { name: "Buckingham", href: "/buckingham-masson-angers", detail: "Rivière, nature, abordable" },
    ]}}
    related={{ pages: [
      { title: "Acheter dans le Pontiac", text: "Guide pour acheteurs en Outaouais.", href: "/blogue/acheter-pontiac-guide" },
      { title: "Vie rurale dans le Pontiac", text: "À proximité d'Ottawa.", href: "/blogue/pontiac-vie-rurale-ottawa" },
      { title: "Propriétés agricoles Pontiac", text: "Ce qu'il faut savoir.", href: "/blogue/proprietes-agricoles-pontiac" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter dans le Pontiac", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur dans le Pontiac?", text: "Je connais le territoire — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default PontiacPage;
