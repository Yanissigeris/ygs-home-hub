import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-limbour.jpg";

const LimbourPage = () => (
  <NeighborhoodTemplate
    seoTitle="Limbour Gatineau — Immobilier et guide de quartier | YGS"
    metaDesc="Vivre, acheter ou vendre dans le quartier Limbour à Gatineau. Secteur familial moderne avec parcs, écoles et accès rapide à Ottawa."
    jsonLd={{ name: "Limbour", description: "Courtier immobilier dans le quartier Limbour à Gatineau. Secteur familial moderne.", lat: 45.4850, lng: -75.6600, url: "/limbour" }}
    hero={{ overline: "Guide de quartier · Limbour", title: "Vivre, acheter ou vendre à Limbour", subtitle: "Quartier familial moderne de Gatineau — maisons récentes, parcs et vie de banlieue agréable.", image: heroImg }}
    trustSpecialty="Spécialiste Limbour et environs"
    lifestyle={{ image: heroImg, imageAlt: "Quartier Limbour, Gatineau", title: "Pourquoi Limbour est prisé des familles", subtitle: "Un quartier résidentiel dynamique avec des développements récents et une belle qualité de vie." }}
    reasons={[
      "Maisons récentes et développements résidentiels modernes",
      "Parcs, sentiers pédestres et espaces verts abondants",
      "Écoles primaires et secondaires à proximité",
      "Commerces et services accessibles sur le boulevard de l'Hôpital",
      "Accès rapide à l'autoroute 50 — 20 minutes d'Ottawa",
    ]}
    profilesTitle="Limbour est idéal pour…"
    profiles={[
      { icon: Users, title: "Jeunes familles", text: "Maisons neuves, parcs, écoles — tout pour les enfants." },
      { icon: Home, title: "Acheteurs de maisons récentes", text: "Constructions de 5 à 15 ans en excellent état." },
      { icon: TrendingUp, title: "Investisseurs", text: "Secteur en croissance avec demande locative stable." },
      { icon: MapPin, title: "Navetteurs", text: "Accès rapide à Gatineau-centre et Ottawa." },
    ]}
    inlineCta={{ text: "Propriétaire à Limbour? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur Limbour",
      items: [
        { q: "Limbour est-il un quartier récent?", a: "Relativement — beaucoup de développements des 10-15 dernières années, avec des maisons modernes et bien construites." },
        { q: "Y a-t-il des parcs à Limbour?", a: "Oui, le quartier est bien doté en espaces verts, sentiers et terrains de jeux." },
        { q: "Comment se rendre à Ottawa depuis Limbour?", a: "Par l'autoroute 50, environ 20-25 minutes selon le trafic." },
      ],
    }}
    sectors={{ list: [
      { name: "Côte-d'Azur", href: "/cote-dazur-gatineau", detail: "Résidentiel établi, bungalows" },
      { name: "Gatineau (centre)", href: "/gatineau", detail: "Services, central, résidentiel" },
      { name: "Masson-Angers", href: "/masson-angers", detail: "Neufs, prix accessibles" },
    ]}}
    related={{ pages: [
      { title: "Limbour : quartier familial moderne", text: "Découvrez ce secteur en croissance.", href: "/blogue/limbour-quartier-familial-moderne-gatineau" },
      { title: "Acheter à Limbour", text: "Maisons récentes à bon prix.", href: "/blogue/acheter-limbour-maisons-recentes" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-gatineau" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-gatineau" },
      { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Limbour", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur à Limbour?", text: "Je connais le quartier — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default LimbourPage;
