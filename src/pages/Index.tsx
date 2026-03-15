import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import PathwaySection from "@/components/PathwaySection";
import CredibilitySection from "@/components/CredibilitySection";
import ConversionSection from "@/components/ConversionSection";
import TestimonialPlaceholder from "@/components/TestimonialPlaceholder";
import CTASection from "@/components/CTASection";
import AudienceCards from "@/components/AudienceCards";
import AboutSection from "@/components/AboutSection";
import SectorsSection from "@/components/SectorsSection";
import InlineCTA from "@/components/InlineCTA";
import heroImg from "@/assets/hero-gatineau.jpg";

const Index = () => (
  <>
    <HeroSection
      overline="Plateau • Aylmer • Hull • Buckingham"
      title="Votre allié en immobilier à Gatineau"
      subtitle="Vendre, acheter ou investir en Outaouais — stratégie claire, conseils honnêtes, accompagnement sans pression."
      primaryCta={{ label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Zéro pression · Pas de mauvaises surprises"
      backgroundImage={heroImg}
    />

    <TrustStrip />

    <PathwaySection />

    <CredibilitySection />

    <ConversionSection />

    <AudienceCards />

    <InlineCTA
      text="Vous pensez vendre? Commencez par connaître la valeur de votre propriété."
      buttonLabel="Évaluation Gratuite →"
      href="/evaluation-gratuite-gatineau"
    />

    <AboutSection />

    <SectorsSection />

    <TestimonialPlaceholder />

    <CTASection
      dark
      overline="Prochaine étape"
      title="Commencez par la bonne première étape"
      text="Évaluation, consultation achat ou analyse plex — on commence là où vous êtes rendu."
      buttons={[
        { label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />
  </>
);

export default Index;
