import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import ImageTextSplit from "@/components/ImageTextSplit";
import InlineCTA from "@/components/InlineCTA";
import SectorLinks from "@/components/SectorLinks";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import { CheckCircle2, Users, Home, TrendingUp, MapPin, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-plateau.jpg";
import lifestyleImg from "@/assets/plateau-aylmer-lifestyle.jpg";

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Spécialiste Plateau et environs" },
  { icon: Shield, label: "Accompagnement sans pression" },
];

const reasons = [
  "Développements récents avec maisons modernes",
  "Quartiers familiaux avec parcs et pistes cyclables",
  "Écoles et garderies de proximité",
  "Accès rapide à Ottawa et au centre-ville de Gatineau",
  "Excellent rapport qualité-prix pour les jeunes familles",
];

const profiles = [
  { icon: Users, title: "Jeunes familles", text: "Maisons récentes, quartiers sécuritaires et communauté familiale active." },
  { icon: Home, title: "Premiers acheteurs", text: "Propriétés neuves ou récentes à des prix encore accessibles." },
  { icon: MapPin, title: "Amateurs de plein air", text: "Proximité du parc de la Gatineau et nombreux sentiers." },
  { icon: TrendingUp, title: "Investisseurs", text: "Secteur en croissance avec forte demande et bons rendements potentiels." },
];

const relatedSectors = [
  { name: "Aylmer", href: "/aylmer", detail: "Lac Deschênes, quartiers établis" },
  { name: "Hull", href: "/hull", detail: "Urbain, culture, condos" },
  { name: "Gatineau", href: "/gatineau", detail: "Résidentiel, services, accessible" },
];

const PlateauPage = () => (
  <>
    <HeroSection
      overline="Guide de quartier · Plateau"
      title="Vivre, acheter ou investir dans le Plateau"
      subtitle="Développements récents, quartiers familiaux et excellent rapport qualité-prix — le Plateau est l'un des secteurs les plus dynamiques de Gatineau."
      primaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      secondaryCta={{ label: "Valeur de ma propriété", href: "/evaluation-gratuite-gatineau" }}
      backgroundImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <ImageTextSplit image={lifestyleImg} imageAlt="Vie dans le Plateau, Gatineau" imagePosition="right">
      <div className="label-overline">Le secteur</div>
      <h2 className="mt-3">Pourquoi le Plateau attire les familles</h2>
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
      title="Le Plateau est idéal pour…"
      items={profiles}
      background="alt"
    />

    <InlineCTA
      text="Vous êtes propriétaire dans le Plateau? Découvrez combien vaut votre propriété."
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
      title="Acheteur ou vendeur dans le Plateau?"
      text="Je connais le Plateau — parlons de votre projet."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />
  </>
);

export default PlateauPage;
