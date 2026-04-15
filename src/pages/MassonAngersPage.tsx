import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-masson-angers-gen.webp";

const MassonAngersPage = () => (
  <NeighborhoodTemplate
    seoTitle="Masson-Angers — Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre à Masson-Angers, Gatineau. Secteur familial en plein essor, constructions neuves et prix compétitifs."
    ogImage="https://yanisgauthier.com/og/og-masson-angers.jpg"
    jsonLd={{ name: "Masson-Angers", description: "Courtier immobilier à Masson-Angers. Secteur familial, constructions neuves et prix accessibles.", lat: 45.5328, lng: -75.4170, url: "/masson-angers" }}
    hero={{ overline: "Guide de quartier · Masson-Angers", title: "Vivre, acheter ou vendre à Masson-Angers", subtitle: "Secteur familial en plein essor avec des constructions neuves et des prix encore accessibles.", image: heroImg }}
    trustSpecialty="Spécialiste Masson-Angers"
    lifestyle={{ image: heroImg, imageAlt: "Quartier résidentiel Masson-Angers", title: "Pourquoi Masson-Angers est en plein essor", subtitle: "L'un des secteurs les plus dynamiques de Gatineau pour les jeunes familles et les premiers acheteurs." }}
    reasons={[
      "Prix d'entrée parmi les plus bas de Gatineau — idéal pour premiers acheteurs",
      "Constructions neuves et développements résidentiels récents",
      "Proximité de l'autoroute 50 — accès rapide à Gatineau et Ottawa",
      "Parcs, sentiers et espaces verts dans les nouveaux quartiers",
      "Services en expansion — écoles, commerces et restaurants",
    ]}
    profilesTitle="Masson-Angers est idéal pour…"
    profiles={[
      { icon: Users, title: "Jeunes familles", text: "Maisons neuves abordables, parcs et écoles à proximité." },
      { icon: Home, title: "Premiers acheteurs", text: "Prix d'entrée accessibles et financement plus facile." },
      { icon: TrendingUp, title: "Investisseurs", text: "Secteur en croissance avec potentiel de plus-value." },
      { icon: MapPin, title: "Travailleurs de l'est", text: "Accès rapide aux zones d'emploi de Gatineau-est et Buckingham." },
    ]}
    inlineCta={{ text: "Propriétaire à Masson-Angers? Découvrez la valeur actuelle de votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur Masson-Angers",
      items: [
        { q: "Masson-Angers est-il loin du centre de Gatineau?", a: "Environ 20-25 minutes par l'autoroute 50. L'accès est rapide et direct." },
        { q: "Y a-t-il des maisons neuves à Masson-Angers?", a: "Oui, c'est l'un des secteurs avec le plus de constructions neuves à Gatineau. Plusieurs promoteurs y sont actifs." },
        { q: "Le marché est-il en hausse?", a: "Oui — les prix augmentent graduellement avec les nouveaux développements et la demande croissante." },
      ],
    }}
    sectors={{ list: [
      { name: "Buckingham", href: "/buckingham-masson-angers", detail: "Rivière, nature, prix accessibles" },
      { name: "Gatineau (centre)", href: "/gatineau", detail: "Résidentiel, services, central" },
      { name: "Limbour", href: "/limbour", detail: "Familial, parcs, banlieue moderne" },
    ]}}
    related={{ pages: [
      { title: "Masson-Angers en plein essor", text: "Pourquoi ce secteur explose.", href: "/blogue/masson-angers-secteur-en-essor" },
      { title: "Premier achat à Masson-Angers", text: "Pourquoi c'est le bon moment.", href: "/blogue/premier-achat-masson-angers" },
      { title: "Constructions neuves", text: "Ce qu'il faut savoir sur le neuf.", href: "/blogue/constructions-neuves-masson-angers" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Masson-Angers", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur à Masson-Angers?", text: "Je connais le secteur — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default MassonAngersPage;
