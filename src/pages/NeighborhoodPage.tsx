import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import ImageTextSplit from "@/components/ImageTextSplit";
import { CheckCircle2, Users, Home, TrendingUp, MapPin } from "lucide-react";
import SectorLinks from "@/components/SectorLinks";
import plateauImg from "@/assets/plateau-aylmer-lifestyle.jpg";
import riverImg from "@/assets/gatineau-river-view.jpg";

const reasons = [
  "Plus d'espace à un prix encore accessible comparé à Ottawa",
  "Quartier familial — parcs, écoles, services de proximité",
  "Accès pratique vers Ottawa par les ponts",
  "Maisons plus récentes avec bon rapport qualité-prix",
  "Qualité de vie appréciée des familles et jeunes professionnels",
];

const profiles = [
  { icon: Users, title: "Familles", text: "Plus d'espace, cour, écoles francophones et anglophones à proximité." },
  { icon: Home, title: "Premiers acheteurs", text: "Prix d'entrée plus accessibles qu'Ottawa avec une qualité de vie supérieure." },
  { icon: TrendingUp, title: "Investisseurs", text: "Potentiel de revente solide dans un secteur en développement constant." },
  { icon: MapPin, title: "Relocalisés d'Ottawa", text: "Transition simple — je connais les deux côtés de la rivière." },
];

const sellerReasons = [
  "Aller vers plus grand ou plus de terrain",
  "Se rapprocher d'un secteur plus calme ou mieux adapté",
  "Profiter des conditions actuelles du marché",
  "Réduire la taille après le départ des enfants",
];

const NeighborhoodPage = () => (
   <>
    <PageMeta title="Plateau et Aylmer — Guide de quartier" description="Découvrez le Plateau et Aylmer à Gatineau. Quartiers familiaux, nature, écoles et propriétés. Guide complet par un courtier local." />
    <HeroSection
      overline="Guide de quartier · Gatineau"
      title="Vivre dans le Plateau / Aylmer"
      subtitle="Vie de famille, commodités, accès à Ottawa et qualité de vie — ce qu'il faut savoir pour acheter ou vendre dans le secteur."
      primaryCta={{ label: "Me faire guider", href: "/contact-yanis" }}
      secondaryCta={{ label: "Valeur de ma propriété", href: "/evaluation-gratuite-gatineau" }}
      heroBgImage={riverImg}
    />

    <ImageTextSplit image={plateauImg} imageAlt="Quartier résidentiel du Plateau / Aylmer, Gatineau" imagePosition="right">
      <SectionHeading
        overline="Le secteur"
        title="Pourquoi les gens aiment le Plateau / Aylmer"
        subtitle="Familles, jeunes professionnels, acheteurs relocalisés d'Ottawa — le secteur attire pour ses maisons récentes, ses services et son mode de vie pratique."
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

    <ImageTextSplit image={riverImg} imageAlt="Vue sur la rivière, Gatineau" imagePosition="left">
      <SectionHeading
        overline="Vendeurs du secteur"
        title="Vous habitez déjà le Plateau / Aylmer?"
        subtitle="C'est peut-être le bon moment de voir ce que votre propriété vaut dans le marché actuel."
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
        <Link to="/evaluation-gratuite-gatineau">Voir combien vaut ma propriété</Link>
      </Button>
    </ImageTextSplit>

    <SectorLinks
      overline="Autres secteurs"
      title="Explorer d'autres quartiers"
      sectors={[
        { name: "Hull", href: "/hull", detail: "Urbain, proche centre-ville, condos et plex" },
        { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Terrain, prix accessibles, nature" },
      ]}
    />

    <CTASection
      dark
      title="Acheteur ou vendeur dans le Plateau / Aylmer?"
      text="Je peux vous aider à y voir clair — que ce soit pour acheter dans le secteur ou connaître la valeur de votre propriété."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />
  </>
);

export default NeighborhoodPage;
