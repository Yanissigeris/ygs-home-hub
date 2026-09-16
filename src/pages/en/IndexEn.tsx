import * as React from "react";
import PageMeta from "@/components/PageMeta";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";


import AwardsStrip from "@/components/AwardsStrip";
import ValuationWidget from "@/components/ValuationWidget";
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
import InstagramGrid from "@/components/InstagramGrid";
import CTASection from "@/components/CTASection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import QuickActionStrip from "@/components/QuickActionStrip";
import LazySection from "@/components/LazySection";

import { getReviewsByIdEn as getReviewsById } from "@/data/reviews-en";
import { homeFaqEn } from "@/data/home-faq";

const homepageReviews = getReviewsById(["s1", "b1", "r2", "p2", "s2", "b3"]);

const IndexEn = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <SEO
      title="Real Estate Broker Gatineau | Yanis Gauthier-Sigeris, YGS"
      description="Real estate broker in Gatineau for 9 years. Sell, buy or invest in Outaouais: clear strategy, honest numbers. Free home valuation."
      canonical="https://yanisgauthier.com/en"
      hreflangFr="https://yanisgauthier.com/"
      hreflangEn="https://yanisgauthier.com/en"
    />
    <PageMeta
      title="Real Estate Broker Gatineau · Outaouais"
      description="Yanis Gauthier-Sigeris, real estate broker in Gatineau. Sell, buy or invest in Aylmer, Hull or Plateau: clear strategy and full support."
      ogImage="https://yanisgauthier.com/og/og-home.jpg"
    />
    <HeroSection
      
      title="Your real estate broker in Gatineau and Outaouais"
      headline="I give you the numbers and the options. You decide."
      subtitle="Buy, sell, or invest with guidance grounded in local comparable sales, hands-on experience, and a strategy tailored to your goals."
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

    
    <ValuationWidget lang="en" />
    <QuickActionStrip />
    <AwardsStrip lang="en" />

    
    <PathwaySection lang="en" />
    <FeaturedProperties lang="en" />
    <AboutSection lang="en" />

    <TestimonialGrid overline="Testimonials" title="What our clients say" reviews={homepageReviews} reviewsPageLabel="See all testimonials" reviewsPageHref="/en/testimonials/" />

    <AreasServicesSection lang="en" />
    <GuideOffersSection lang="en" background="alt" />

    <HomeFAQTeaser
      title="Frequently asked questions"
      items={homeFaqEn}
      linkHref="/en/faq/"
      linkLabel="See all questions"
    />

    <LazySection minHeight={300} rootMargin="300px">
      <InstagramGrid />
    </LazySection>

    <CTASection
      dark
      
      title="Take the right first step"
      text="Valuation, buyer consultation or plex analysis, we start where you are."
      buttons={[
        { label: "Free Home Valuation", href: "/en/home-valuation/" },
        { label: "Book a consultation", href: "/en/contact/", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options, you decide."
    />

    <StickyMobileCTA />
  </div>
));

IndexEn.displayName = "IndexEn";
export default IndexEn;
