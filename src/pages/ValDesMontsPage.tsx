import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-val-des-monts-gen.webp";

const ValDesMontsPage = () => (
  <NeighborhoodTemplate
    seoTitle="Val-des-Monts — Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre à Val-des-Monts. Lacs, chalets, grands terrains et nature sauvage — à 30 minutes de Gatineau."
    ogImage="https://yanisgauthier.com/og/og-val-des-monts.jpg"
    jsonLd={{ name: "Val-des-Monts", description: "Courtier immobilier à Val-des-Monts. Lacs, chalets et propriétés de villégiature en Outaouais.", lat: 45.5000, lng: -75.6500, url: "/val-des-monts" }}
    hero={{ overline: "Guide de quartier · Val-des-Monts", title: "Vivre, acheter ou vendre à Val-des-Monts", subtitle: "Lacs cristallins, terrains boisés et tranquillité — la municipalité de villégiature de l'Outaouais. Plus de 200 lacs, à 30-40 minutes de Gatineau et 45 minutes d'Ottawa.", image: heroImg }}
    trustSpecialty="Spécialiste Val-des-Monts et environs"
    lifestyle={{ image: heroImg, imageAlt: "Lac à Val-des-Monts", title: "Pourquoi Val-des-Monts est unique", subtitle: "Val-des-Monts attire trois types d'acheteurs : ceux qui cherchent une résidence principale en pleine nature, ceux qui veulent un chalet quatre-saisons pour les fins de semaine, et ceux qui investissent dans une propriété de villégiature. Les grands lacs comme McGregor, Saint-Pierre et Achigan dominent la demande. C'est l'un des rares secteurs de l'Outaouais où on peut vivre les pieds dans l'eau à moins de 30 minutes du centre-ville d'Ottawa." }}
    reasons={[
      "Plus de 200 lacs — accès privé à un lac pour beaucoup de propriétés",
      "Propriétés entre 200 000 $ et 750 000 $+ selon le type, l'accès au lac et le sous-secteur (données Centris, mai 2026)",
      "Lacs principaux : McGregor, Saint-Pierre, Achigan, Barnes — chacun avec sa dynamique de marché propre",
      "Terrains de 2 à 50+ acres — intimité totale en pleine nature",
      "Chalets quatre-saisons, résidences permanentes et propriétés de luxe bord de lac",
      "Village de Perkins comme centre de services (épicerie, école primaire, services de proximité)",
      "27 minutes du pont Macdonald-Cartier pour accéder au centre-ville d'Ottawa",
      "30-40 minutes du centre de Gatineau — accès aux services hospitaliers et commerciaux",
      "Marché actif avec demande soutenue : environ 77 unifamiliales et 6 chalets disponibles sur Centris en mai 2026",
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
      { title: "Vendre mon chalet à Val-des-Monts", text: "Stratégie de vente pour propriétés de villégiature.", href: "/vendre-ma-maison-gatineau" },
      { title: "Évaluation chalet Val-des-Monts", text: "Combien vaut votre chalet ou terrain?", href: "/evaluation-gratuite-gatineau" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau" },
      { title: "Premier achat", text: "Budget, mise de fonds et conseils.", href: "/premier-achat-gatineau" },
      { title: "Plex et investissement", text: "Analyse pour investisseurs.", href: "/investir-plex-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Val-des-Monts", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur à Val-des-Monts?", text: "Je connais le secteur — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default ValDesMontsPage;
