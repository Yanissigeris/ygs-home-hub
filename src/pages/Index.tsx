import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import PathwaySection from "@/components/PathwaySection";
import CredibilitySection from "@/components/CredibilitySection";
import ConversionSection from "@/components/ConversionSection";
import CTASection from "@/components/CTASection";
import AudienceCards from "@/components/AudienceCards";
import AboutSection from "@/components/AboutSection";
import SectorsSection from "@/components/SectorsSection";
import InlineCTA from "@/components/InlineCTA";
import heroImg from "@/assets/hero-gatineau.jpg";
import yanisHero from "@/assets/yanis-hero.png";

const Index = () => (
  <>
    <HeroSection
      overline="GATINEAU · AYLMER · HULL · OUTAOUAIS"
      title="Votre allié en immobilier à Gatineau"
      subtitle="Vendre, acheter ou investir — stratégie claire, conseils honnêtes et accompagnement sans pression."
      primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Club Platine RE/MAX · Temple de la renommée · Près de 9 ans en Outaouais"
      agentImage={yanisHero}
      agentName="Yanis Gauthier-Sigeris"
    />

    <TrustStrip />

    <PathwaySection />

    <CredibilitySection />

    <ConversionSection />

    <InlineCTA
      text="Vous pensez vendre? Commencez par connaître la valeur de votre propriété."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau"
    />

    <AudienceCards />

    <AboutSection />

    <SectorsSection />

    <CTASection
      dark
      overline="Prochaine étape"
      title="Commencez par la bonne première étape"
      text="Évaluation, consultation achat ou analyse plex — on commence là où vous êtes rendu."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />
  </>
);

export default Index;
