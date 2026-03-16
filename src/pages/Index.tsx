import PageMeta from "@/components/PageMeta";
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
import ReviewStrip from "@/components/ReviewStrip";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsById } from "@/data/reviews";
import heroImg from "@/assets/hero-gatineau.jpg";
import yanisPortrait from "@/assets/yanis-portrait-nobg.png";
import heroGatineauSkyline from "@/assets/hero-gatineau-skyline.jpg";

const heroReview = getReviewsById(["s1"])[0];
const homepageReviews = getReviewsById(["s1", "b1", "r1"]);

const Index = () => (
  <>
    <PageMeta title="Courtier immobilier Gatineau" description="Yanis Gauthier-Sigeris, courtier immobilier à Gatineau. Vendre, acheter ou investir en Outaouais — stratégie claire, conseils honnêtes et zéro pression." />
    <HeroSection
      overline="GATINEAU · AYLMER · HULL · OUTAOUAIS"
      title="Votre allié en immobilier en Outaouais"
      subtitle="Vendre, acheter ou investir — stratégie claire, conseils honnêtes et accompagnement sans pression."
      primaryCta={{ label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine=""
      heroBgImage={heroGatineauSkyline}
    />

    <TrustStrip />

    <ReviewStrip review={heroReview} />

    <PathwaySection />

    <CredibilitySection />

    <ConversionSection />

    <InlineCTA
      text="Vous pensez vendre? Commencez par connaître la valeur de votre propriété."
      buttonLabel="Évaluation Gratuite →"
      href="/evaluation-gratuite-gatineau"
    />

    

    <AboutSection />

    <SectorsSection />

    <ReviewSection
      overline="Témoignages"
      title="Ce que disent nos clients"
      reviews={homepageReviews}
      columns={3}
    />

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
