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
import heroImg from "@/assets/hero-aylmer.jpg";
import lifestyleImg from "@/assets/plateau-aylmer-lifestyle.jpg";

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Spécialiste Aylmer et environs" },
  { icon: Shield, label: "Accompagnement sans pression" },
];

const reasons = [
  "Quartiers familiaux avec accès au lac Deschênes",
  "Proximité du parc de la Gatineau et des sentiers",
  "Écoles réputées et services bilingues",
  "Communauté établie avec charme de petite ville",
  "Accès rapide à Ottawa par le pont Champlain",
];

const profiles = [
  { icon: Users, title: "Familles établies", text: "Quartiers matures, grandes propriétés et communauté soudée." },
  { icon: Home, title: "Acheteurs de revente", text: "Propriétés avec caractère et potentiel de rénovation dans un secteur prisé." },
  { icon: MapPin, title: "Amateurs de nature", text: "Lac Deschênes, parc de la Gatineau et sentiers à deux pas." },
  { icon: TrendingUp, title: "Propriétaires", text: "Secteur stable avec forte demande — bon moment pour connaître sa valeur." },
];

const relatedSectors = [
  { name: "Plateau", href: "/plateau", detail: "Développements récents, familles" },
  { name: "Hull", href: "/hull", detail: "Urbain, culture, condos" },
  { name: "Gatineau", href: "/gatineau", detail: "Résidentiel, services, accessible" },
];

const AylmerPage = () => (
  <>
    <HeroSection
      overline="Guide de quartier · Aylmer"
      title="Vivre, acheter ou vendre à Aylmer"
      subtitle="Lac Deschênes, parcs, écoles et communauté — Aylmer offre un cadre de vie exceptionnel à deux pas d'Ottawa."
      primaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      secondaryCta={{ label: "Valeur de ma propriété", href: "/evaluation-gratuite-gatineau" }}
      backgroundImage={heroImg}
    />

    <ImageTextSplit image={lifestyleImg} imageAlt="Vie à Aylmer, Gatineau" imagePosition="right">
      <div className="label-overline">Le secteur</div>
      <h2 className="mt-3">Pourquoi Aylmer est si populaire</h2>
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
      title="Aylmer est idéal pour…"
      items={profiles}
      background="alt"
    />

    <InlineCTA
      text="Vous êtes propriétaire à Aylmer? Découvrez combien vaut votre propriété."
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
      title="Acheteur ou vendeur à Aylmer?"
      text="Je connais Aylmer par cœur — parlons de votre projet."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />
  </>
);

export default AylmerPage;
