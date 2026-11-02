import * as React from "react";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";


import AwardsStrip from "@/components/AwardsStrip";
import ValuationCTA from "@/components/ValuationCTA";
import StatsSection from "@/components/StatsSection";
import yanisHero from "@/assets/hero-yanis-interior.webp";
import yanisHeroAvif from "@/assets/hero-yanis-interior.avif";
import yanisHeroMobileAvif from "@/assets/hero-yanis-interior-mobile.avif";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";
import yanisPortraitMd from "@/assets/yanis-portrait-nobg-md.webp";
import yanisPortraitAvif from "@/assets/yanis-portrait-nobg.avif";
import yanisPortraitSmAvif from "@/assets/yanis-portrait-nobg-sm.avif";
import yanisPortraitMdAvif from "@/assets/yanis-portrait-nobg-md.avif";
import yanisPortraitLg from "@/assets/yanis-portrait-nobg-lg.webp";
import yanisPortraitLgAvif from "@/assets/yanis-portrait-nobg-lg.avif";

import PathwaySection from "@/components/PathwaySection";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/AboutSection";
import TestimonialGrid from "@/components/TestimonialGrid";
import AreasServicesSection from "@/components/AreasServicesSection";
import GuideOffersSection from "@/components/GuideOffersSection";
import HomeFAQTeaser from "@/components/HomeFAQTeaser";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import LazySection from "@/components/LazySection";

import { getReviewsByIdEn as getReviewsById } from "@/data/reviews-en";
import { homeFaqEn } from "@/data/home-faq";

const homepageReviews = getReviewsById(["s1", "b1", "r2", "p2", "s2", "b3"]);

const IndexEn = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <PageMeta
      title="Real Estate Broker Gatineau · Outaouais"
      description="Yanis Gauthier-Sigeris, real estate broker in Gatineau. Sell, buy or invest in Aylmer, Hull or Plateau: clear strategy and full support."
      ogImage="https://yanisgauthier.com/og/og-home.jpg"
    />
    <HeroSection
      
      title="Your real estate broker in Gatineau and Outaouais"
      subtitle="More than 300 transactions in the Outaouais since 2017. To sell, buy or invest, we start from comparable sales in your area."
      subtitleShort="Sell, buy or invest, based on sales in your area."
      sansTitle
      primaryCta={{ label: "Get my home valuation", href: "/en/home-valuation/" }}
      secondaryCta={{ label: "Let's discuss your plans", href: "/en/contact/" }}
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
      agentImageLg={yanisPortraitLg}
      agentImageLgAvif={yanisPortraitLgAvif}
      agentName="Yanis Gauthier-Sigeris"
      hideRecognitionCard
      petrolGradient={false}
    />

    
    <AwardsStrip lang="en" />

    
    <PathwaySection lang="en" />
    <FeaturedProperties lang="en" />
    <AboutSection lang="en" />

    <TestimonialGrid overline="Testimonials" title="What our clients say" reviews={homepageReviews} reviewsPageLabel="See all testimonials" reviewsPageHref="/en/testimonials/" />

    <ValuationCTA lang="en" />

    <AreasServicesSection lang="en" />
    <GuideOffersSection lang="en" background="alt" />

    <HomeFAQTeaser
      title="Frequently asked questions"
      items={homeFaqEn}
      linkHref="/en/faq/"
      linkLabel="See all questions"
    />

    <StickyMobileCTA />
  </div>
));

IndexEn.displayName = "IndexEn";
export default IndexEn;
