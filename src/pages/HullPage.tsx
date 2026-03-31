import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, Building2 } from "lucide-react";
import heroImg from "@/assets/hero-hull.webp";

const HullPage = () => (
  <NeighborhoodTemplate
    seoTitle="Hull — Guide de quartier Gatineau | YGS"
    metaDesc="Vivre, acheter ou investir à Hull, Gatineau. Quartier urbain en pleine revitalisation, condos, plex, culture et proximité Ottawa."
    jsonLd={{ name: "Hull", description: "Courtier immobilier spécialisé à Hull, Gatineau. Quartier urbain, condos, plex, culture et proximité Ottawa.", lat: 45.4283, lng: -75.7140, url: "/hull" }}
    hero={{ overline: "Guide de quartier · Hull", title: "Vivre, acheter ou investir à Hull", subtitle: "Centre-ville, vie urbaine, proximité Ottawa et potentiel locatif — ce qu'il faut savoir pour acheter ou vendre dans le secteur.", image: heroImg }}
    trustSpecialty="Spécialiste Hull et secteur urbain"
    lifestyle={{ image: heroImg, imageAlt: "Vue du secteur Hull, Gatineau", title: "Pourquoi Hull attire de plus en plus", subtitle: "Jeunes professionnels, investisseurs et premiers acheteurs redécouvrent Hull pour son énergie urbaine." }}
    reasons={[
      "Centre-ville animé avec restaurants, galeries, culture et vie de quartier",
      "Proximité immédiate du centre-ville d'Ottawa via les ponts Alexandra et du Portage",
      "Condos, plex et maisons de caractère à prix compétitifs par rapport à Ottawa",
      "Secteur en pleine revitalisation avec le projet Zibi et potentiel de plus-value",
      "Transports en commun (STO), pistes cyclables et accès Rapibus bien développés",
    ]}
    profilesTitle="Hull est idéal pour…"
    profiles={[
      { icon: Users, title: "Jeunes professionnels", text: "Vie urbaine, proximité Ottawa, accès rapide aux services et à la culture." },
      { icon: Building2, title: "Investisseurs plex", text: "Bonne densité locative, demande constante, prix d'entrée encore accessibles." },
      { icon: Home, title: "Premiers acheteurs", text: "Condos et propriétés abordables dans un secteur central et bien desservi." },
      { icon: TrendingUp, title: "Acheteurs de revente", text: "Secteur en transformation — potentiel de plus-value intéressant." },
    ]}
    inlineCta={{ text: "Vous cherchez un plex à Hull? Demandez une analyse de rendement.", label: "Recevoir une analyse plex →", href: "/analyse-plex-gatineau" }}
    faq={{
      title: "Questions sur Hull",
      items: [
        { q: "Hull est-il un bon secteur pour investir?", a: "Oui — prix d'entrée encore accessibles, forte demande locative et revitalisation en cours." },
        { q: "Quel est le prix moyen d'un condo à Hull?", a: "Ça varie beaucoup selon l'emplacement et l'état. Contactez-moi pour une analyse à jour." },
        { q: "Hull est-il sécuritaire?", a: "Hull vit une renaissance — de nouveaux projets, restaurants et communauté dynamique." },
      ],
    }}
    sectors={{ list: [
      { name: "Gatineau (centre)", href: "/gatineau", detail: "Résidentiel, services, accessible" },
      { name: "Aylmer", href: "/aylmer", detail: "Lac Deschênes, familles" },
      { name: "Plateau", href: "/plateau", detail: "Développements récents" },
    ]}}
    related={{ pages: [
      { title: "Vivre à Hull — le guide", text: "Culture, restaurants, proximité Ottawa.", href: "/vivre-a-hull" },
      { title: "Investir en plex", text: "Analyse et stratégie pour les plex.", href: "/investir-plex-gatineau" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-gatineau" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-gatineau" },
      { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
    ]}}
    guide={{ type: "investor_guide", headline: "Guide investisseur gratuit — plex à Hull", text: "Rendement, fiscalité et stratégie d'investissement — dans un guide envoyé par courriel.", ctaLabel: "Recevoir le guide investisseur", stickyLabel: "Guide investisseur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur, vendeur ou investisseur à Hull?", text: "Je peux vous aider — que ce soit pour acheter, vendre ou analyser un plex.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default HullPage;
