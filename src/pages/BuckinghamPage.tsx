import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import ImageTextSplit from "@/components/ImageTextSplit";
import InlineCTA from "@/components/InlineCTA";
import SectorLinks from "@/components/SectorLinks";
import { CheckCircle2, Users, Home, TrendingUp, TreePine } from "lucide-react";
import heroImg from "@/assets/hero-gatineau.jpg";
import riverImg from "@/assets/gatineau-river-view.jpg";

const reasons = [
  "Terrains plus grands et propriétés plus spacieuses",
  "Prix d'entrée parmi les plus accessibles de l'Outaouais",
  "Cadre naturel — rivières, parcs, espaces verts",
  "Idéal pour les familles qui veulent de l'espace sans quitter la région",
  "Secteur en croissance avec de nouveaux développements",
];

const profiles = [
  { icon: Users, title: "Familles", text: "Plus d'espace, grand terrain, école de quartier — tout ça à un prix réaliste." },
  { icon: Home, title: "Premiers acheteurs", text: "Le meilleur rapport qualité-prix en Outaouais pour accéder à la propriété." },
  { icon: TreePine, title: "Amateurs de nature", text: "Rivière, sentiers, espaces verts — un mode de vie plus tranquille sans être isolé." },
  { icon: TrendingUp, title: "Investisseurs", text: "Prix d'entrée bas, croissance prévue, potentiel locatif intéressant." },
];

const sellerReasons = [
  "La demande augmente dans le secteur avec les nouveaux développements",
  "Les acheteurs cherchent de l'espace — votre propriété les intéresse",
  "Profiter de la hausse de valeur avant que les prix se stabilisent",
  "Optimiser votre position pour votre prochain projet immobilier",
];

const relatedSectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, accès Ottawa" },
  { name: "Hull", href: "/hull", detail: "Urbain, proche centre-ville, condos et plex" },
];

const BuckinghamPage = () => (
  <>
    <HeroSection
      overline="Guide de quartier · Buckingham / Masson-Angers"
      title="Vivre à Buckingham et Masson-Angers"
      subtitle="Espace, nature, prix accessibles et qualité de vie — ce qu'il faut savoir pour acheter ou vendre dans le secteur."
      primaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      secondaryCta={{ label: "Valeur de ma propriété", href: "/evaluation-gratuite-gatineau" }}
      backgroundImage={riverImg}
    />

    <ImageTextSplit image={heroImg} imageAlt="Secteur Buckingham et Masson-Angers" imagePosition="right">
      <SectionHeading
        overline="Le secteur"
        title="Pourquoi les gens choisissent Buckingham / Masson-Angers"
        subtitle="Familles, premiers acheteurs et amateurs de nature choisissent ce secteur pour l'espace, les prix et le cadre de vie."
      />
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
      title="Ce secteur est idéal pour…"
      items={profiles}
      background="alt"
    />

    <InlineCTA
      text="Vous pensez acheter dans le secteur? Parlons de votre budget et de vos options."
      buttonLabel="Réserver une consultation →"
      href="/contact-yanis"
    />

    <ImageTextSplit image={riverImg} imageAlt="Nature et rivière, Buckingham" imagePosition="left">
      <SectionHeading
        overline="Vendeurs du secteur"
        title="Vous êtes propriétaire à Buckingham ou Masson-Angers?"
        subtitle="La demande augmente dans le secteur. C'est le bon moment de comprendre ce que votre propriété vaut."
      />
      <div className="mt-7 space-y-3.5">
        {sellerReasons.map((r) => (
          <div key={r} className="flex items-center gap-3">
            <CheckCircle2 size={16} className="shrink-0 text-accent" />
            <span className="text-[0.9375rem] text-muted-foreground">{r}</span>
          </div>
        ))}
      </div>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/evaluation-gratuite-gatineau">Obtenir ma valeur</Link>
      </Button>
    </ImageTextSplit>

    <SectorLinks
      overline="Autres secteurs"
      title="Explorer d'autres quartiers"
      sectors={relatedSectors}
    />

    <CTASection
      dark
      title="Acheteur ou vendeur à Buckingham / Masson-Angers?"
      text="Je peux vous aider à trouver la bonne propriété ou à connaître la valeur de la vôtre."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />
  </>
);

export default BuckinghamPage;
