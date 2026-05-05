import * as React from "react";
import PageMeta from "@/components/PageMeta";
import SEO from "@/components/SEO";
import yanisHero from "@/assets/hero-yanis-interior.webp";
import yanisHeroAvif from "@/assets/hero-yanis-interior.avif";
import yanisHeroMobileAvif from "@/assets/hero-yanis-interior-mobile.avif";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";
import yanisPortraitMd from "@/assets/yanis-portrait-nobg-md.webp";
import yanisPortraitAvif from "@/assets/yanis-portrait-nobg.avif";
import yanisPortraitSmAvif from "@/assets/yanis-portrait-nobg-sm.avif";
import yanisPortraitMdAvif from "@/assets/yanis-portrait-nobg-md.avif";
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
import InstagramGrid from "@/components/InstagramGrid";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import QuickActionStrip from "@/components/QuickActionStrip";
import LazySection from "@/components/LazySection";

import { getReviewsById } from "@/data/reviews";
const homepageReviews = getReviewsById(["s1", "b1", "r2", "p2", "s2", "b3"]);

const Index = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <SEO
      title="Courtier immobilier Gatineau | Yanis Gauthier-Sigeris — YGS"
      description="Courtier immobilier à Gatineau depuis 9 ans. Vendre, acheter ou investir en Outaouais — stratégie claire, chiffres honnêtes. Évaluation gratuite."
      canonical="https://yanisgauthier.com/"
      hreflangFr="https://yanisgauthier.com/"
      hreflangEn="https://yanisgauthier.com/en"
    />
    <PageMeta
      title="Courtier immobilier Gatineau · Outaouais"
      description="Yanis Gauthier-Sigeris, courtier immobilier à Gatineau. Vendre, acheter ou investir à Aylmer, Hull ou Plateau — stratégie claire et accompagnement."
      ogImage="https://yanisgauthier.com/og/og-home.jpg"
    />
    <HeroSection
      cities={["GATINEAU", "AYLMER", "HULL", "CHELSEA", "CANTLEY"]}
      title="Votre courtier immobilier en Outaouais"
      subtitle="Stratégie claire pour vendre, acheter ou investir."
      subtitleShort="Stratégie claire pour vendre, acheter ou investir."
      primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Consultation", href: "/contact-yanis" }}
      socialProof="Hall of Fame RE/MAX"
      heroBgImage={yanisHero}
      heroBgImageMobile={yanisHeroMobileAvif}
      heroBgImageAvif={yanisHeroAvif}
      agentImage={yanisPortrait}
      agentImageSm={yanisPortraitSm}
      agentImageMd={yanisPortraitMd}
      agentImageAvif={yanisPortraitAvif}
      agentImageSmAvif={yanisPortraitSmAvif}
      agentImageMdAvif={yanisPortraitMdAvif}
      agentName="Yanis Gauthier-Sigeris"
      hideRecognitionCard
      petrolGradient={false}
    />

    
    <LazySection minHeight={400} rootMargin="400px">
      <ValuationWidget />
      <QuickActionStrip />
      <AwardsMarquee />
    </LazySection>

    <LazySection minHeight={500} rootMargin="400px">
      <PathwaySection />
      <div className="section-fade-bridge section-fade-bridge--dark-to-cream" aria-hidden="true" />
      <FeaturedProperties />
      <div className="section-fade-bridge section-fade-bridge--cream-to-dark" aria-hidden="true" />
      <AboutSection />
      <div className="section-fade-bridge section-fade-bridge--dark-to-white" aria-hidden="true" />
    </LazySection>

    <LazySection minHeight={500} rootMargin="400px">
      <TestimonialGrid
        overline="Témoignages"
        title="Ce que disent mes clients"
        reviews={homepageReviews}
        reviewsPageLabel="Voir tous les témoignages"
        reviewsPageHref="/temoignages"
      />
      <div className="section-fade-bridge section-fade-bridge--white-to-dark" aria-hidden="true" />

      <AreasServicesSection />
      <div className="section-fade-bridge section-fade-bridge--dark-to-cream" aria-hidden="true" />
      <GuideOffersSection background="alt" />
      <div className="section-fade-bridge section-fade-bridge--cream-to-white" aria-hidden="true" />
    </LazySection>

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

    <LazySection minHeight={300} rootMargin="300px">
      <InstagramGrid />
    </LazySection>

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

    <StickyMobileCTA />
  </div>
));

Index.displayName = "Index";
export default Index;
