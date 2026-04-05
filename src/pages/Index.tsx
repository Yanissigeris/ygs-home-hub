import * as React from "react";
import PageMeta from "@/components/PageMeta";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";
import HeroSection from "@/components/HeroSection";

import AwardsMarquee from "@/components/AwardsMarquee";
import ValuationWidget from "@/components/ValuationWidget";
import StatsSection from "@/components/StatsSection";

import PathwaySection from "@/components/PathwaySection";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/AboutSection";
import AreasServicesSection from "@/components/AreasServicesSection";
import GuideOffersSection from "@/components/GuideOffersSection";
import TestimonialGrid from "@/components/TestimonialGrid";
import CTASection from "@/components/CTASection";
import HomeFAQTeaser from "@/components/HomeFAQTeaser";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import QuickActionStrip from "@/components/QuickActionStrip";

import { getReviewsById } from "@/data/reviews";
const homepageReviews = getReviewsById(["s1", "b1", "r2", "p2", "s2", "b3"]);

const Index = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <PageMeta
      title="Courtier immobilier Gatineau · Outaouais"
      description="Yanis Gauthier-Sigeris, courtier immobilier à Gatineau. Vendre, acheter ou investir à Aylmer, Hull ou Plateau — stratégie claire et accompagnement."
      ogImage="https://yanisgauthier.com/og-image.jpg"
    />
    <HeroSection
      overline="GATINEAU · AYLMER · HULL · OUTAOUAIS"
      title="Votre courtier immobilier en Outaouais"
      subtitle="Stratégie claire, conseils basés sur les faits, et un accompagnement complet — pour vendre, acheter ou investir en toute confiance."
      primaryCta={{ label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      socialProof="Hall of Fame RE/MAX"
      heroVideo="/hero-video-compressed.mp4"
      heroVideoPoster="/hero-video-poster.webp"
      agentImage={yanisPortrait}
      agentImageSm={yanisPortraitSm}
      agentName="Yanis Gauthier-Sigeris"
      hideCredentialsStrip
      hideRecognitionCard
    />

    <ValuationWidget />
    <QuickActionStrip />
    <AwardsMarquee />

    <div className="reveal">
      <StatsSection />
    </div>

    <div className="reveal">
      <PathwaySection />
    </div>

    <div className="reveal">
      <FeaturedProperties />
    </div>

    <div className="reveal">
      <AboutSection />
    </div>

    <div className="reveal">
      <TestimonialGrid
        overline="Témoignages"
        title="Ce que disent mes clients"
        reviews={homepageReviews}
        reviewsPageLabel="Voir tous les témoignages"
        reviewsPageHref="/temoignages"
      />
    </div>

    <div className="reveal">
      <AreasServicesSection />
    </div>

    <div className="reveal">
      <GuideOffersSection background="alt" />
    </div>

    <div className="reveal">
      <HomeFAQTeaser
        title="Questions fréquentes"
        items={[
          { q: "Combien vaut ma maison à Gatineau?", a: "Je prépare une évaluation gratuite basée sur les comparables récents dans votre secteur — Aylmer, Hull, Plateau ou ailleurs en Outaouais. Vous recevez un rapport clair avec le prix de vente recommandé." },
          { q: "Comment choisir le bon courtier immobilier en Outaouais?", a: "Cherchez un courtier qui connaît votre secteur en profondeur, qui est transparent sur sa stratégie et qui vous donne les vrais chiffres. L'expérience locale, la disponibilité et l'approche humaine font toute la différence." },
          { q: "Quels sont les meilleurs quartiers pour acheter à Gatineau?", a: "Ça dépend de votre profil : Aylmer et le Plateau sont populaires auprès des familles, Hull attire les jeunes professionnels, et Chelsea ou Cantley séduisent ceux qui veulent la nature tout en restant proches de la ville." },
          { q: "Est-ce le bon moment pour vendre à Gatineau?", a: "Le marché immobilier en Outaouais reste actif. Une analyse de votre propriété permet de déterminer le meilleur timing et la stratégie de prix optimale pour maximiser votre résultat." },
        ]}
        linkHref="/faq"
        linkLabel="Voir toutes les questions"
      />
    </div>

    <div className="reveal">
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

    <StickyMobileCTA />
  </div>
));

Index.displayName = "Index";
export default Index;
