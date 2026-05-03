import * as React from "react";
import PageMeta from "@/components/PageMeta";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";


import AwardsMarquee from "@/components/AwardsMarquee";
import ValuationWidget from "@/components/ValuationWidget";
import StatsSection from "@/components/StatsSection";
import yanisHero from "@/assets/hero-yanis-interior.webp";
import yanisPortrait from "@/assets/yanis-hero-portrait.webp";

import PathwaySection from "@/components/PathwaySection";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/AboutSection";
import TestimonialGrid from "@/components/TestimonialGrid";
import AreasServicesSection from "@/components/AreasServicesSection";
import GuideOffersSection from "@/components/GuideOffersSection";
import HomeFAQTeaser from "@/components/HomeFAQTeaser";
import InstagramGrid from "@/components/InstagramGrid";
import CTASection from "@/components/CTASection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import QuickActionStrip from "@/components/QuickActionStrip";
import LazySection from "@/components/LazySection";

import { getReviewsByIdEn as getReviewsById } from "@/data/reviews-en";

const homepageReviews = getReviewsById(["s1", "b1", "r2", "p2", "s2", "b3"]);

const IndexEn = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <SEO
      title="Real Estate Broker Gatineau | Yanis Gauthier-Sigeris — YGS"
      description="Real estate broker in Gatineau for 9 years. Sell, buy or invest in Outaouais — clear strategy, honest numbers. Free home valuation."
      canonical="https://yanisgauthier.com/en"
      hreflangFr="https://yanisgauthier.com/"
      hreflangEn="https://yanisgauthier.com/en"
    />
    <PageMeta
      title="Real Estate Broker Gatineau · Outaouais"
      description="Yanis Gauthier-Sigeris, real estate broker in Gatineau. Sell, buy or invest in Aylmer, Hull or Plateau — clear strategy and full support."
      ogImage="https://yanisgauthier.com/og/og-home.jpg"
    />
    <HeroSection
      cities={["GATINEAU", "AYLMER", "HULL", "CHELSEA", "CANTLEY"]}
      title="Your real estate broker in Gatineau — Outaouais"
      subtitle="Real estate broker in the Outaouais and Gatineau region. Clear strategy to sell, buy or invest."
      subtitleShort="Real estate broker in the Outaouais region. Clear strategy to sell, buy or invest."
      primaryCta={{ label: "Free valuation", href: "/en/home-valuation" }}
      secondaryCta={{ label: "Consultation", href: "/en/contact" }}
      socialProof="Hall of Fame RE/MAX"
      heroBgImage={yanisHero}
      agentImage={yanisPortrait}
      agentName="Yanis Gauthier-Sigeris"
      hideRecognitionCard
    />

    
    <ValuationWidget lang="en" />
    <QuickActionStrip />
    <AwardsMarquee />

    
    <PathwaySection lang="en" />
    <div className="section-fade-bridge section-fade-bridge--white-to-cream" aria-hidden="true" />
    <FeaturedProperties lang="en" />
    <AboutSection lang="en" />
    <div className="section-fade-bridge section-fade-bridge--dark-to-white" aria-hidden="true" />

    <TestimonialGrid overline="Testimonials" title="What our clients say" reviews={homepageReviews} reviewsPageLabel="See all testimonials" reviewsPageHref="/en/testimonials" />
    <div className="section-fade-bridge section-fade-bridge--white-to-cream" aria-hidden="true" />

    <AreasServicesSection lang="en" />
    <div className="section-fade-bridge section-fade-bridge--cream-to-white" aria-hidden="true" />
    <GuideOffersSection lang="en" background="alt" />
    <div className="section-fade-bridge section-fade-bridge--white-to-cream" aria-hidden="true" />

    <HomeFAQTeaser
      title="Frequently asked questions"
      items={[
        { q: "How much is my house worth in Gatineau?", a: "I prepare a free valuation based on recent comparables in your area — Aylmer, Hull, Plateau or elsewhere in Outaouais. You receive a clear report with the recommended listing price." },
        { q: "How do I choose the right real estate broker in Outaouais?", a: "Look for a broker with deep local knowledge, transparent strategy and real numbers. Local experience, availability and a human approach make all the difference." },
        { q: "What are the best neighbourhoods to buy in Gatineau?", a: "It depends on your profile: Aylmer and the Plateau are popular with families, Hull attracts young professionals, and Chelsea or Cantley appeal to those who want nature while staying close to the city." },
        { q: "Is now a good time to sell in Gatineau?", a: "The Outaouais real estate market remains active. A property analysis helps determine the best timing and optimal pricing strategy to maximize your result." },
      ]}
      linkHref="/en/faq"
      linkLabel="See all questions"
    />

    <LazySection minHeight={300} rootMargin="300px">
      <InstagramGrid />
    </LazySection>

    <CTASection
      dark
      overline="First step"
      title="Take the right first step"
      text="Valuation, buyer consultation or plex analysis — we start where you are."
      buttons={[
        { label: "Free Home Valuation", href: "/en/home-valuation" },
        { label: "Book a consultation", href: "/en/contact", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options — you decide."
    />

    <StickyMobileCTA />
  </div>
));

IndexEn.displayName = "IndexEn";
export default IndexEn;
