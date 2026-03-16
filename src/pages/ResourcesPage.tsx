import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import LinkedCardGrid from "@/components/LinkedCardGrid";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import FAQSection from "@/components/FAQSection";
import { Book, Home, MapPin, Users, FileText, TrendingUp, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-resources.jpg";

const guides = [
  { icon: Home, title: "Guide vendeur", text: "Tout pour vendre au meilleur prix à Gatineau.", cta: "Lire le guide", href: "/guide-vendeur-gatineau" },
  { icon: Users, title: "Guide acheteur", text: "Le processus d'achat au Québec, les secteurs et les étapes.", cta: "Lire le guide", href: "/guide-acheteur-gatineau" },
  { icon: MapPin, title: "Guide relocalisation", text: "S'installer à Gatineau depuis Ottawa, Montréal ou ailleurs.", cta: "Lire le guide", href: "/guide-relocalisation-gatineau" },
  { icon: FileText, title: "Guide militaire", text: "Immobilier à Gatineau pour les membres des forces.", cta: "Lire le guide", href: "/guide-militaire-gatineau" },
  { icon: Book, title: "Premier achat", text: "Budget, mise de fonds, processus pour premiers acheteurs.", cta: "Lire le guide", href: "/premier-achat-gatineau" },
  { icon: TrendingUp, title: "Quartiers à considérer", text: "Les meilleurs secteurs de Gatineau selon votre profil.", cta: "Explorer", href: "/quartiers-a-considerer-a-gatineau" },
];

const tools = [
  { icon: Home, title: "Évaluation gratuite", text: "Combien vaut votre propriété? Estimation en 24h.", cta: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
  { icon: TrendingUp, title: "Rapport du marché", text: "Prix, tendances et volumes de ventes à Gatineau.", cta: "Voir le rapport", href: "/rapport-marche-gatineau" },
  { icon: FileText, title: "Analyse plex", text: "Revenus, dépenses et rendement de votre plex.", cta: "Recevoir une analyse", href: "/analyse-plex-gatineau" },
];

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Club Platine · Temple de la renommée" },
  { icon: Shield, label: "Ressources gratuites et sans engagement" },
];

const faq = [
  { q: "Ces ressources sont-elles gratuites?", a: "Oui — tous les guides et outils sont gratuits et sans engagement." },
  { q: "Comment recevoir une ressource personnalisée?", a: "Contactez-moi directement — je vous envoie les informations adaptées à votre situation." },
  { q: "Puis-je obtenir des conseils personnalisés?", a: "Absolument. Les guides sont un bon point de départ, mais chaque situation est unique. Réservez un appel." },
];

const ResourcesPage = () => (
   <>
    <PageMeta title="Guides et ressources immobilières" description="Guides gratuits pour vendeurs, acheteurs et investisseurs à Gatineau. Ressources immobilières par Yanis Gauthier-Sigeris." />
    <HeroSection
      overline="Ressources · YGS"
      title="Ressources immobilières gratuites"
      subtitle="Guides, analyses et informations pour vous aider à prendre les meilleures décisions immobilières à Gatineau."
      primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <LinkedCardGrid
      overline="Guides"
      title="Guides complets et gratuits"
      items={guides}
      columns={3}
    />

    <LinkedCardGrid
      overline="Outils"
      title="Outils et analyses"
      items={tools}
      columns={3}
      background="alt"
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

    <FAQSection items={faq} />

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
