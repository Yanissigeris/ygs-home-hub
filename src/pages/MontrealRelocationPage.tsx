import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import SectorLinks from "@/components/SectorLinks";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import InlineCTA from "@/components/InlineCTA";
import { MapPin, DollarSign, Home, FileText, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-montreal-relocation.jpg";

const challenges = [
  { icon: MapPin, title: "Comprendre le marché montréalais vs gatinois", text: "Les prix, les taxes et la qualité de vie sont très différents — souvent à l'avantage de Gatineau." },
  { icon: DollarSign, title: "Plus d'espace pour moins cher", text: "Pour le même budget, vous obtenez souvent beaucoup plus d'espace et de terrain à Gatineau." },
  { icon: Home, title: "Quartiers familiaux", text: "Aylmer, le Plateau et d'autres secteurs offrent une qualité de vie difficilement accessible à Montréal." },
  { icon: FileText, title: "Processus simplifié", text: "Même province, même processus notarié — la transition est plus facile que depuis l'Ontario." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, accès Ottawa" },
  { name: "Hull", href: "/hull", detail: "Urbain, proche centre-ville, condos et plex" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Terrain, prix accessibles, nature" },
];

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Spécialiste relocalisation" },
  { icon: Shield, label: "Accompagnement personnalisé" },
];

const MontrealRelocationPage = () => (
   <>
    <PageMeta title="Relocalisation Montréal vers Gatineau" description="Déménager de Montréal à Gatineau? Coût de vie, quartiers, qualité de vie et accompagnement immobilier pour votre transition." />
    <HeroSection
      overline="Relocalisation · Montréal → Gatineau"
      title="S'installer à Gatineau depuis Montréal"
      subtitle="Plus d'espace, des prix plus accessibles, une qualité de vie familiale — et un marché immobilier en croissance. Découvrez pourquoi de plus en plus de Montréalais choisissent Gatineau."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis" }}
      secondaryCta={{ label: "Explorer les secteurs", href: "#secteurs" }}
      trustLine="Spécialiste en relocalisation. Zéro pression."
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <CardGrid
      overline="Les avantages"
      title="Pourquoi choisir Gatineau plutôt que Montréal"
      items={challenges}
    />

    <InlineCTA
      text="Vous vendez aussi à Montréal? Connaître la valeur de votre propriété actuelle peut clarifier votre budget."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <SectorLinks
      id="secteurs"
      overline="Secteurs populaires"
      title="Les quartiers à considérer"
      sectors={sectors}
      background="alt"
    />

    <ContentBlock narrow>
      <SectionHeading title="Un courtier local qui comprend votre situation" />
      <p className="prose-body mt-5">
        La transition de Montréal à Gatineau est plus simple qu'on pense — même processus notarié, même province. Mon rôle est de vous faire découvrir les meilleurs secteurs et de vous accompagner dans chaque étape.
      </p>
    </ContentBlock>

    <CTASection
      dark
      title="Prêt à explorer Gatineau?"
      text="Réservez un appel gratuit — on regarde ensemble les secteurs et les options."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis" },
        { label: "Explorer les secteurs", href: "/plateau-aylmer", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />
  </>
);

export default MontrealRelocationPage;
