import * as React from "react";
import PageMeta from "@/components/PageMeta";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ReviewStrip from "@/components/ReviewStrip";

/* Lazy-load all below-fold sections to keep framer-motion & lucide out of the critical path */
const PathwaySection = React.lazy(() => import("@/components/PathwaySection"));
const AboutSection = React.lazy(() => import("@/components/AboutSection"));
const ConversionSection = React.lazy(() => import("@/components/ConversionSection"));
const SectorsSection = React.lazy(() => import("@/components/SectorsSection"));
const GuideOffersSection = React.lazy(() => import("@/components/GuideOffersSection"));
const ReviewSection = React.lazy(() => import("@/components/ReviewSection"));
const CTASection = React.lazy(() => import("@/components/CTASection"));

import { getReviewsById } from "@/data/reviews";
const heroReview = getReviewsById(["s1"])[0];
const homepageReviews = getReviewsById(["s1", "b1", "r1"]);

const Index = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <PageMeta title="Courtier immobilier Gatineau" description="Yanis Gauthier-Sigeris, courtier immobilier à Gatineau. Vendre, acheter ou investir en Outaouais — stratégie claire." />
    <HeroSection
      overline="GATINEAU · AYLMER · HULL · OUTAOUAIS"
      title="Votre courtier immobilier en Outaouais"
      subtitle="Stratégie claire, conseils basés sur les faits, et un accompagnement complet — pour vendre, acheter ou investir en toute confiance."
      primaryCta={{ label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      socialProof="Platinum Club · Hall of Fame RE/MAX"
      heroVideo="/hero-video-compressed.mp4"
      heroVideoPoster="/hero-video-poster.webp"
      agentImage={yanisPortrait}
      agentImageSm={yanisPortraitSm}
      agentName="Yanis Gauthier-Sigeris"
    />

    <TrustStrip />

    <React.Suspense fallback={null}>
      <PathwaySection />

      <hr className="section-divider" />

      <AboutSection />

      <hr className="section-divider" />

      <ConversionSection />

      <hr className="section-divider" />

      <SectorsSection />

      <GuideOffersSection background="alt" />

      <hr className="section-divider" />

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
    </React.Suspense>
  </div>
));

Index.displayName = "Index";

export default Index;
