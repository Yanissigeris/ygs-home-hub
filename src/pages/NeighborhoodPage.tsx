import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import ImageTextSplit from "@/components/ImageTextSplit";
import { CheckCircle2, Users, Home, TrendingUp, MapPin } from "lucide-react";
import SectorLinks from "@/components/SectorLinks";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import riverImg from "@/assets/gatineau-river-view.webp";

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
    <PageMeta title="Plateau et Aylmer — Guide de quartier" description="Découvrez le Plateau et Aylmer à Gatineau. Quartiers familiaux, lac Deschênes, nature, écoles et propriétés." />
    <NeighborhoodJsonLd name="Plateau / Aylmer" description="Courtier immobilier spécialisé au Plateau et Aylmer, Gatineau. Quartiers familiaux, nature, écoles et propriétés." lat={45.4500} lng={-75.8100} url="/plateau-aylmer" />
    <HeroSection
      overline="Guide de quartier · Gatineau"
      title="Vivre dans le Plateau / Aylmer"
      subtitle="Vie de famille, commodités, accès à Ottawa et qualité de vie — ce qu'il faut savoir pour acheter ou vendre dans le secteur."
      primaryCta={{ label: "Me faire guider", href: "/contact-yanis" }}
      secondaryCta={{ label: "Valeur de ma propriété", href: "/evaluation-gratuite-gatineau" }}
      heroBgImage={riverImg}
    />


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

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit — acheter dans le Plateau / Aylmer"
      text="Processus, budget et conseils pour acheter dans le secteur — dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    <CTASection
      dark
      title="Acheteur ou vendeur dans le Plateau / Aylmer?"
      text="Je peux vous aider à y voir clair — que ce soit pour acheter dans le secteur ou connaître la valeur de votre propriété."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default NeighborhoodPage;
