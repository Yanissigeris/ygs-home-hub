import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-val-des-monts.jpg";

const ValDesMontsPage = () => (
  <NeighborhoodTemplate
    seoTitle="Val-des-Monts — Immobilier et guide de quartier | YGS"
    metaDesc="Vivre, acheter ou vendre à Val-des-Monts. Lacs, chalets, grands terrains et nature sauvage — à 30 minutes de Gatineau."
    jsonLd={{ name: "Val-des-Monts", description: "Courtier immobilier à Val-des-Monts. Lacs, chalets et propriétés de villégiature en Outaouais.", lat: 45.5000, lng: -75.6500, url: "/val-des-monts" }}
    hero={{ overline: "Guide de quartier · Val-des-Monts", title: "Vivre, acheter ou vendre à Val-des-Monts", subtitle: "Lacs cristallins, forêts et tranquillité — le paradis de villégiature de l'Outaouais.", image: heroImg }}
    trustSpecialty="Spécialiste Val-des-Monts et environs"
    lifestyle={{ image: heroImg, imageAlt: "Lac à Val-des-Monts", title: "Pourquoi Val-des-Monts est unique", subtitle: "Plus de 200 lacs, des terrains boisés immenses et une qualité de vie incomparable." }}
    reasons={[
      "Plus de 200 lacs — accès privé à un lac pour beaucoup de propriétés",
      "Terrains de 2 à 50+ acres — intimité totale en pleine nature",
      "Chalets quatre-saisons, résidences permanentes et propriétés de luxe",
      "Communauté active avec festivals, marchés et événements locaux",
      "30-40 minutes de Gatineau, 45-50 minutes d'Ottawa",
    ]}
    profilesTitle="Val-des-Monts est idéal pour…"
    profiles={[
      { icon: TreePine, title: "Amateurs de lac et nature", text: "Quai privé, kayak, baignade et feux de camp — tous les jours." },
      { icon: Home, title: "Chercheurs de chalet", text: "Chalets quatre-saisons, du rustique au luxueux." },
      { icon: Users, title: "Familles en quête d'espace", text: "Grands terrains, air pur et communauté accueillante." },
      { icon: Mountain, title: "Télétravailleurs et retraités", text: "Cadre de vie exceptionnel avec accès aux services." },
    ]}
    inlineCta={{ text: "Vous possédez un chalet à Val-des-Monts? Découvrez sa valeur actuelle.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur Val-des-Monts",
      items: [
        { q: "Val-des-Monts est-il accessible à l'année?", a: "Oui, la majorité des routes sont entretenues à l'année. Certains chemins privés peuvent nécessiter du déneigement." },
        { q: "Peut-on habiter à Val-des-Monts à l'année?", a: "Absolument. De plus en plus de résidents permanents s'y installent, attirés par le télétravail et la qualité de vie." },
        { q: "Les prix sont-ils abordables?", a: "Comparé à Aylmer ou Chelsea, oui. On trouve des propriétés intéressantes à des prix encore accessibles, surtout hors bord de lac." },
      ],
    }}
    sectors={{ list: [
      { name: "Cantley", href: "/cantley", detail: "Rural, collines, grands terrains" },
      { name: "Chelsea", href: "/chelsea", detail: "Village, parc de la Gatineau" },
      { name: "Buckingham", href: "/buckingham-masson-angers", detail: "Abordable, rivière, nature" },
    ]}}
    related={{ pages: [
      { title: "Acheter un chalet à Val-des-Monts", text: "Guide pratique pour acheteurs.", href: "/blogue/acheter-chalet-val-des-monts" },
      { title: "Meilleurs lacs de Val-des-Monts", text: "Quel lac choisir pour acheter?", href: "/blogue/meilleurs-lacs-val-des-monts" },
      { title: "Résidence permanente ou chalet?", text: "Vivre à l'année à Val-des-Monts.", href: "/blogue/val-des-monts-residence-permanente" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Val-des-Monts", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur à Val-des-Monts?", text: "Je connais le secteur — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default ValDesMontsPage;
