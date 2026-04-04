import * as React from "react";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";

import SocialProofStrip from "@/components/SocialProofStrip";
import PathwaySection from "@/components/PathwaySection";
import AboutSection from "@/components/AboutSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import SectorsSection from "@/components/SectorsSection";
import LocalSEOCluster from "@/components/LocalSEOCluster";
import GuideOffersSection from "@/components/GuideOffersSection";
import HomeFAQTeaser from "@/components/HomeFAQTeaser";
import CTASection from "@/components/CTASection";

import { getReviewsByIdEn as getReviewsById } from "@/data/reviews-en";

const homepageReviews = getReviewsById(["s1", "b1", "r2", "p2", "s2", "b3"]);

const socialStatsEn = [
  { value: "~9 yrs", label: "experience" },
  { value: "5 ★", label: "Google + Facebook reviews" },
  { value: "Hall of Fame", label: "RE/MAX" },
];

const IndexEn = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <PageMeta title="Real Estate Broker Gatineau | YGS" description="Yanis Gauthier-Sigeris, real estate broker in Gatineau. Sell, buy or invest in Outaouais — clear strategy, honest advice and full support." />
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

    <>
      <SocialProofStrip stats={socialStatsEn} />

      <PathwaySection lang="en" />

      <hr className="section-divider" />

      <AboutSection lang="en" />

      <hr className="section-divider" />

      <ReviewSection overline="Testimonials" title="What our clients say" reviews={homepageReviews} columns={3} reviewsPageLabel="See all testimonials" reviewsPageHref="/en/testimonials" />

      <hr className="section-divider" />

      <SectorsSection lang="en" />

      <hr className="section-divider" />

      <LocalSEOCluster
        overline="Areas & services"
        title="Popular areas and services in Outaouais"
        links={[
          { label: "Outaouais Real Estate Agent", href: "/en/outaouais-real-estate-agent", detail: "Full regional hub" },
          { label: "Realtor Gatineau", href: "/en/gatineau", detail: "Central, services, plex" },
          { label: "Realtor Hull", href: "/en/hull", detail: "Urban, culture, condos" },
          { label: "Realtor Aylmer", href: "/en/aylmer", detail: "Lake, families, bilingual" },
          { label: "Realtor Chelsea", href: "/en/chelsea", detail: "Nature, park, serenity" },
          { label: "Home Valuation Gatineau", href: "/en/home-valuation", detail: "Free and no obligation" },
          { label: "Sell My House Gatineau", href: "/en/sell", detail: "Strategy and guidance" },
        ]}
      />

      <hr className="section-divider" />

      <GuideOffersSection lang="en" background="alt" />

      <hr className="section-divider" />

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

      <hr className="section-divider" />

      <CTASection
        dark
        overline="First step"
        title="Take the right first step"
        text="Valuation, buyer consultation or plex analysis — we start where you are."
        buttons={[
          { label: "Free Home Valuation", href: "/en/home-valuation" },
          { label: "Book a consultation", href: "/en/contact", variant: "outline" },
        ]}
        trustLine="I give you the numbers and the options — you decide with full clarity."
      />
    </>
  </div>
));

IndexEn.displayName = "IndexEn";
export default IndexEn;
