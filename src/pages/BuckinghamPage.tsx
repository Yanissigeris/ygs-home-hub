import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, TreePine } from "lucide-react";
import heroImg from "@/assets/hero-buckingham.webp";

const BuckinghamPage = () => (
  <NeighborhoodTemplate
    seoTitle="Buckingham — Guide de quartier Gatineau | YGS"
    metaDesc="Vivre, acheter ou vendre à Buckingham, Gatineau. Nature, rivière, prix accessibles et communauté chaleureuse — guide complet par un courtier local."
    jsonLd={{ name: "Buckingham", description: "Courtier immobilier à Buckingham, Gatineau. Nature, rivière du Lièvre, prix accessibles.", lat: 45.5860, lng: -75.4190, url: "/buckingham-masson-angers" }}
    hero={{ overline: "Guide de quartier · Buckingham", title: "Vivre, acheter ou vendre à Buckingham", subtitle: "Rivière du Lièvre, nature, prix accessibles et communauté chaleureuse — Buckingham offre un excellent rapport qualité-prix.", image: heroImg }}
    trustSpecialty="Spécialiste Buckingham et environs"
    lifestyle={{ image: heroImg, imageAlt: "Buckingham, Gatineau", title: "Pourquoi Buckingham attire les acheteurs", subtitle: "Un secteur en plein renouveau avec des prix parmi les plus accessibles de Gatineau." }}
    reasons={[
      "Prix d'entrée les plus bas de Gatineau — excellent pour premiers acheteurs",
      "Rivière du Lièvre et accès nature à proximité",
      "Grands terrains résidentiels et semi-ruraux",
      "Communauté francophone chaleureuse avec histoire et patrimoine",
      "Accès à l'autoroute 50 — 25-30 minutes du centre de Gatineau",
    ]}
    profilesTitle="Buckingham est idéal pour…"
    profiles={[
      { icon: Users, title: "Familles à budget modeste", text: "Maisons abordables, grands terrains et communauté familiale." },
      { icon: Home, title: "Premiers acheteurs", text: "Prix d'entrée accessibles et maisons avec potentiel." },
      { icon: TrendingUp, title: "Investisseurs", text: "Prix bas et potentiel de plus-value à moyen terme." },
      { icon: TreePine, title: "Amateurs de nature", text: "Rivière, forêt et grands espaces à proximité." },
    ]}
    inlineCta={{ text: "Propriétaire à Buckingham? Découvrez la valeur de votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur Buckingham",
      items: [
        { q: "Buckingham est-il loin de Gatineau?", a: "Environ 25-30 minutes par l'autoroute 50. L'accès est direct et rapide." },
        { q: "Les prix sont-ils vraiment plus bas?", a: "Oui — c'est l'un des secteurs les plus abordables de la grande région de Gatineau." },
        { q: "Y a-t-il des services à Buckingham?", a: "Oui — écoles, épiceries, restaurants et services de santé. Le centre-ville a beaucoup de caractère." },
      ],
    }}
    sectors={{ list: [
      { name: "Masson-Angers", href: "/masson-angers", detail: "Neufs, familles, en croissance" },
      { name: "Gatineau (centre)", href: "/gatineau", detail: "Services, résidentiel, central" },
      { name: "Val-des-Monts", href: "/val-des-monts", detail: "Lacs, chalets, nature" },
    ]}}
    related={{ pages: [
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-gatineau" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-gatineau" },
      { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
      { title: "Premier achat", text: "Conseils pour premiers acheteurs.", href: "/premier-achat-gatineau" },
      { title: "Blogue immobilier", text: "Articles et conseils locaux.", href: "/blogue" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Buckingham", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur à Buckingham?", text: "Je connais le secteur — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default BuckinghamPage;
