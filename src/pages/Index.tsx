import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import PathwaySection from "@/components/PathwaySection";
import CredibilitySection from "@/components/CredibilitySection";
import ConversionSection from "@/components/ConversionSection";
import TestimonialPlaceholder from "@/components/TestimonialPlaceholder";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import AudienceCards from "@/components/AudienceCards";
import AboutSection from "@/components/AboutSection";
import SectorsSection from "@/components/SectorsSection";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-gatineau.jpg";

const Index = () => (
  <>
    <HeroSection
      overline="Yanis Gauthier-Sigeris · Courtier immobilier à Gatineau"
      title="Votre allié en immobilier à Gatineau"
      subtitle="Vendre, acheter ou investir dans l'Outaouais avec une stratégie claire, des conseils honnêtes et un accompagnement sans pression."
      primaryCta={{ label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Stratégie claire · Zéro pression · Pas de mauvaises surprises"
      backgroundImage={heroImg}
    />

    <TrustStrip />

    <PathwaySection />

    <CredibilitySection />

    <ConversionSection />

    <AudienceCards />

    {/* Inline seller CTA */}
    <section className="cta-band">
      <div className="section-container">
        <p>Vous pensez vendre? Commencez par connaître la valeur de votre propriété.</p>
        <Button size="default" variant="hero" asChild>
          <Link to="/evaluation-gratuite-gatineau">Évaluation Gratuite →</Link>
        </Button>
      </div>
    </section>

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
