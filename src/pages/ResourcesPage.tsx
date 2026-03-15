import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import LinkedCardGrid from "@/components/LinkedCardGrid";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import { Book, Home, MapPin, Users, FileText, TrendingUp, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-resources.jpg";

const resources = [
  { icon: Home, title: "Guide vendeur", text: "Tout ce qu'il faut savoir pour vendre au meilleur prix à Gatineau.", cta: "Lire le guide", href: "/guide-vendeur-gatineau" },
  { icon: Users, title: "Guide acheteur", text: "Le processus d'achat au Québec, les secteurs et les étapes clés.", cta: "Lire le guide", href: "/guide-acheteur-gatineau" },
  { icon: MapPin, title: "Guide relocalisation", text: "S'installer à Gatineau depuis Ottawa, Montréal ou ailleurs.", cta: "Lire le guide", href: "/guide-relocalisation-gatineau" },
  { icon: FileText, title: "Guide militaire", text: "Tout sur l'immobilier à Gatineau pour les membres des forces.", cta: "Lire le guide", href: "/guide-militaire-gatineau" },
  { icon: Book, title: "Premier achat", text: "Budget, mise de fonds, processus — le guide pour les premiers acheteurs.", cta: "Lire le guide", href: "/premier-achat-gatineau" },
  { icon: TrendingUp, title: "Quartiers à considérer", text: "Découvrez les meilleurs secteurs de Gatineau selon votre profil.", cta: "Explorer", href: "/quartiers-a-considerer-a-gatineau" },
];

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Club Platine · Temple de la renommée" },
  { icon: Shield, label: "Ressources gratuites et sans engagement" },
];

const ResourcesPage = () => (
  <>
    <HeroSection
      overline="Ressources · YGS"
      title="Ressources immobilières gratuites"
      subtitle="Guides, analyses et informations pour vous aider à prendre les meilleures décisions immobilières à Gatineau."
      primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      backgroundImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <LinkedCardGrid
      overline="Guides et outils"
      title="Tout ce dont vous avez besoin"
      items={resources}
      columns={3}
    />

    <ContentBlock narrow>
      <SectionHeading title="Besoin d'aide personnalisée?" />
      <p className="prose-body mt-5">
        Les guides sont un bon point de départ, mais chaque situation est unique. Réservez un appel pour obtenir des conseils adaptés à votre projet.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/contact-yanis">Parler à Yanis</Link>
      </Button>
    </ContentBlock>

    <CTASection
      dark
      title="Commencez votre projet immobilier"
      text="Évaluation gratuite, consultation acheteur ou analyse plex — choisissez votre prochaine étape."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous accompagne à votre rythme."
    />
  </>
);

export default ResourcesPage;
