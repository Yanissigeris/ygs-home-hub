import * as React from "react";
import PageMeta from "@/components/PageMeta";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";
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
import GuideOffersSection from "@/components/GuideOffersSection";
import { getReviewsById } from "@/data/reviews";

const heroReview = getReviewsById(["s1"])[0];
const homepageReviews = getReviewsById(["s1", "b1", "r1"]);

const Index = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <PageMeta title="Courtier immobilier Gatineau" description="Yanis Gauthier-Sigeris, courtier immobilier à Gatineau. Vendre, acheter ou investir en Outaouais — stratégie claire." />
    <HeroSection
      overline="GATINEAU · AYLMER · HULL · OUTAOUAIS"
      title="Votre allié en immobilier en Outaouais"
      subtitle="Vendre, acheter ou investir — stratégie claire avec conseils honnêtes."
      primaryCta={{ label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine=""
      heroVideo="/hero-video-compressed.mp4"
      heroVideoPoster="/hero-video-poster.webp"
      agentImage={yanisPortrait}
      agentImageSm={yanisPortraitSm}
      agentName="Yanis Gauthier-Sigeris"
    />

    <TrustStrip />

    <ReviewStrip review={heroReview} />

    <PathwaySection />

    <AboutSection />

    <CredibilitySection />

    <ConversionSection />

    <InlineCTA
      text="Vous pensez vendre? Commencez par connaître la valeur de votre propriété."
      buttonLabel="Évaluation Gratuite →"
      href="/evaluation-gratuite-gatineau"
    />

    <SectorsSection />

    <GuideOffersSection background="alt" />

    <ReviewSection
      overline="Témoignages"
      title="Ce que disent mes clients"
      reviews={homepageReviews}
      columns={3}
    />

    <CTASection
      dark
      overline="Première étape"
      title="Prenez la bonne première étape"
      text="Évaluation, consultation achat ou analyse plex — on commence là où vous êtes rendu."
      buttons={[
        { label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />
  </div>
));

Index.displayName = "Index";

export default Index;
