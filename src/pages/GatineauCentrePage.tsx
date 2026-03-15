import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import ImageTextSplit from "@/components/ImageTextSplit";
import InlineCTA from "@/components/InlineCTA";
import SectorLinks from "@/components/SectorLinks";
import { CheckCircle2, Users, Home, TrendingUp, MapPin, Building2 } from "lucide-react";
import heroImg from "@/assets/hero-neighborhoods.jpg";
import riverImg from "@/assets/gatineau-river-view.jpg";

const reasons = [
  "Quartier résidentiel bien établi avec tous les services",
  "Accès rapide aux autoroutes et au centre-ville",
  "Bonnes écoles et parcs familiaux",
  "Marché immobilier diversifié — maisons, jumelés, condos",
  "Prix compétitifs par rapport à Aylmer et Hull",
];

const profiles = [
  { icon: Users, title: "Familles", text: "Quartiers résidentiels calmes, écoles accessibles et parcs de proximité." },
  { icon: Home, title: "Premiers acheteurs", text: "Propriétés abordables dans un secteur bien desservi avec potentiel de revente." },
  { icon: Building2, title: "Investisseurs", text: "Plex et multi-logements à des prix encore accessibles avec bonne demande locative." },
  { icon: TrendingUp, title: "Acheteurs de revente", text: "Secteur stable avec une croissance constante et une forte demande." },
];

const relatedSectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, nature" },
  { name: "Hull", href: "/hull", detail: "Urbain, culture, proximité Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Terrain, prix accessibles" },
];

const GatineauCentrePage = () => (
  <>
    <HeroSection
      overline="Guide de quartier · Gatineau"
      title="Vivre, acheter ou investir à Gatineau"
      subtitle="Quartier résidentiel bien établi, services complets et prix compétitifs — tout ce qu'il faut savoir sur le secteur de Gatineau."
      primaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      secondaryCta={{ label: "Valeur de ma propriété", href: "/evaluation-gratuite-gatineau" }}
      backgroundImage={heroImg}
    />

    <ImageTextSplit image={riverImg} imageAlt="Secteur Gatineau" imagePosition="right">
      <div className="label-overline">Le secteur</div>
      <h2 className="mt-3">Pourquoi choisir Gatineau</h2>
      <p className="prose-body mt-4">
        Le secteur Gatineau offre un bon équilibre entre accessibilité, services et prix. C'est un choix populaire pour les familles et les premiers acheteurs qui cherchent un quartier établi et bien desservi.
      </p>
      <div className="mt-7 space-y-3.5">
        {reasons.map((r) => (
          <div key={r} className="flex items-center gap-3">
            <CheckCircle2 size={16} className="shrink-0 text-accent" />
            <span className="text-[0.9375rem] text-foreground">{r}</span>
          </div>
        ))}
      </div>
    </ImageTextSplit>

    <CardGrid
      overline="Pour qui"
      title="Gatineau est idéal pour…"
      items={profiles}
      background="alt"
    />

    <InlineCTA
      text="Vous êtes propriétaire à Gatineau? Découvrez combien vaut votre propriété."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <SectorLinks
      overline="Autres secteurs"
      title="Explorer d'autres quartiers"
      sectors={relatedSectors}
    />

    <CTASection
      dark
      title="Acheteur, vendeur ou investisseur à Gatineau?"
      text="Je peux vous aider — que ce soit pour acheter, vendre ou analyser une propriété dans le secteur."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />
  </>
);

export default GatineauCentrePage;
