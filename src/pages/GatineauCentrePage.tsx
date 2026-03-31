import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, Building2 } from "lucide-react";
import heroImg from "@/assets/hero-gatineau-centre.webp";

const GatineauCentrePage = () => (
  <NeighborhoodTemplate
    seoTitle="Gatineau (centre) — Guide de quartier | YGS"
    metaDesc="Vivre, acheter ou vendre dans le secteur Gatineau-centre. Résidentiel, services, commerces et accès rapide à Ottawa par l'autoroute 50."
    jsonLd={{ name: "Gatineau", description: "Courtier immobilier dans le secteur Gatineau-centre. Résidentiel, services et commerces.", lat: 45.4765, lng: -75.7013, url: "/gatineau" }}
    hero={{ overline: "Guide de quartier · Gatineau", title: "Vivre, acheter ou vendre à Gatineau-centre", subtitle: "Résidentiel, services et commerces — le secteur central de Gatineau offre praticité et accessibilité.", image: heroImg }}
    trustSpecialty="Spécialiste Gatineau-centre"
    lifestyle={{ image: heroImg, imageAlt: "Secteur Gatineau-centre", title: "Pourquoi Gatineau-centre est pratique", subtitle: "Un secteur résidentiel central avec tous les services à portée de main." }}
    reasons={[
      "Accès facile à tous les services — hôpital, écoles, commerces et restaurants",
      "Prix résidentiels compétitifs comparé à Aylmer et Hull",
      "Variété de propriétés — bungalows, maisons à étages, condos et plex",
      "Transport en commun bien développé (STO et Rapibus)",
      "Autoroute 50 — accès rapide à Ottawa et aux autres secteurs",
    ]}
    profilesTitle="Gatineau-centre est idéal pour…"
    profiles={[
      { icon: Users, title: "Familles", text: "Quartiers résidentiels établis avec écoles et services." },
      { icon: Home, title: "Premiers acheteurs", text: "Propriétés abordables dans un secteur bien desservi." },
      { icon: Building2, title: "Investisseurs", text: "Plex et logements locatifs avec bonne demande." },
      { icon: TrendingUp, title: "Acheteurs pratiques", text: "Tout à proximité — travail, école, courses et loisirs." },
    ]}
    inlineCta={{ text: "Propriétaire à Gatineau? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur Gatineau-centre",
      items: [
        { q: "Gatineau-centre est-il abordable?", a: "Oui — c'est l'un des secteurs les plus accessibles pour les familles et les premiers acheteurs." },
        { q: "Y a-t-il des investissements intéressants à Gatineau?", a: "Oui — plex, duplex et logements locatifs sont en demande. Demandez une analyse de rendement." },
        { q: "Le transport en commun est-il bon?", a: "Oui — le Rapibus et les lignes STO offrent un accès direct au centre-ville d'Ottawa." },
      ],
    }}
    sectors={{ list: [
      { name: "Hull", href: "/hull", detail: "Urbain, culture, condos" },
      { name: "Limbour", href: "/limbour", detail: "Familial, parcs, moderne" },
      { name: "Côte-d'Azur", href: "/cote-dazur-gatineau", detail: "Résidentiel établi" },
    ]}}
    related={{ pages: [
      { title: "Investir en plex", text: "Analyse et stratégie pour les plex.", href: "/investir-plex-gatineau" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-gatineau" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-gatineau" },
      { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
      { title: "Blogue immobilier", text: "Articles et conseils locaux.", href: "/blogue" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Gatineau", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur à Gatineau?", text: "Je connais le secteur — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default GatineauCentrePage;
