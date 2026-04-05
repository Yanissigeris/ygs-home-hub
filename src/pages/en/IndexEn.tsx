import * as React from "react";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";

import AwardsMarquee from "@/components/AwardsMarquee";
import StatsSection from "@/components/StatsSection";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";

import PathwaySection from "@/components/PathwaySection";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/AboutSection";
import TestimonialGrid from "@/components/TestimonialGrid";
import AreasServicesSection from "@/components/AreasServicesSection";
import GuideOffersSection from "@/components/GuideOffersSection";
import HomeFAQTeaser from "@/components/HomeFAQTeaser";
import CTASection from "@/components/CTASection";

import { getReviewsByIdEn as getReviewsById } from "@/data/reviews-en";

const homepageReviews = getReviewsById(["s1", "b1", "r2", "p2", "s2", "b3"]);

const IndexEn = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <PageMeta
      title="Real Estate Broker Gatineau | YGS"
      description="Yanis Gauthier-Sigeris, real estate broker in Gatineau. Sell, buy or invest in Outaouais — clear strategy, honest advice and full support."
      ogImage="https://yanisgauthier.com/og-image.jpg"
    />
    <HeroSection
      overline="GATINEAU · AYLMER · HULL · OUTAOUAIS"
      title="Your real estate broker in Outaouais"
      subtitle="Clear strategy, advice based on facts, and full support — to sell, buy or invest with confidence."
      primaryCta={{ label: "Free Home Valuation", href: "/en/home-valuation" }}
      secondaryCta={{ label: "Book a consultation", href: "/en/contact" }}
      socialProof="Hall of Fame RE/MAX"
      heroVideo="/hero-video-compressed.mp4"
      heroVideoPoster="/hero-video-poster.webp"
      agentImage={yanisPortrait}
      agentImageSm={yanisPortraitSm}
      agentName="Yanis Gauthier-Sigeris"
    />

    <TrustStrip lang="en" />
    <AwardsMarquee />

    <div className="reveal">
      <StatsSection lang="en" />
    </div>

    <div className="reveal">
      <PathwaySection lang="en" />
    </div>

    <div className="reveal">
      <FeaturedProperties lang="en" />
    </div>

    <div className="reveal">
      <AboutSection lang="en" />
    </div>

    <div className="reveal">
      <TestimonialGrid overline="Testimonials" title="What our clients say" reviews={homepageReviews} reviewsPageLabel="See all testimonials" reviewsPageHref="/en/testimonials" />
    </div>

    <div className="reveal">
      <AreasServicesSection lang="en" />
    </div>

    <div className="reveal">
      <GuideOffersSection lang="en" background="alt" />
    </div>

    <div className="reveal">
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
    </div>

    <div className="reveal">
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
    </div>
  </div>
));

IndexEn.displayName = "IndexEn";
export default IndexEn;
