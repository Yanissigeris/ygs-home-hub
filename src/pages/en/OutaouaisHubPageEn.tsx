import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Award, Shield } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import heroImg from "@/assets/hero-outaouais-photo.webp";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import RelatedPages from "@/components/RelatedPages";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";
import yanisPortraitMd from "@/assets/yanis-portrait-nobg-md.webp";
import yanisPortraitAvif from "@/assets/yanis-portrait-nobg.avif";
import yanisPortraitSmAvif from "@/assets/yanis-portrait-nobg-sm.avif";
import yanisPortraitMdAvif from "@/assets/yanis-portrait-nobg-md.avif";
import yanisPortraitLg from "@/assets/yanis-portrait-nobg-lg.webp";
import yanisPortraitLgAvif from "@/assets/yanis-portrait-nobg-lg.avif";

const zones = [
  { name: "Gatineau", href: "/en/gatineau/", detail: "Central, services, condos" },
  { name: "Hull", href: "/en/hull/", detail: "Urban, culture, museums" },
  { name: "Aylmer", href: "/en/aylmer/", detail: "Lake, families, bilingual" },
  { name: "Chelsea", href: "/en/chelsea/", detail: "Nature, Gatineau Park" },
  { name: "Cantley", href: "/en/cantley/", detail: "Rural, large lots" },
];

const services = [
  { label: "Home Valuation Gatineau", href: "/en/home-valuation/", detail: "Free and no obligation" },
  { label: "Sell My House Gatineau", href: "/en/sell/", detail: "Strategy and guidance" },
  { label: "Buy a Home in Gatineau", href: "/en/buy/", detail: "Complete buyer guide" },
  { label: "Contact / Consultation", href: "/en/contact/", detail: "Let's talk about your project" },
];

const faqItems = [
  { q: "Do I need a bilingual real estate agent in Outaouais?", a: "In a bilingual region like Outaouais, working with an agent fluent in both French and English is a major advantage. I handle all negotiations, paperwork and communications in your preferred language." },
  { q: "Which areas do you serve in Outaouais?", a: "I serve the entire Outaouais urban region: Gatineau, Hull, Aylmer, Chelsea, Cantley, Val-des-Monts, Buckingham, Masson-Angers and Pontiac. Each area has its own character, I help you find the right fit." },
  { q: "Can you help if I am moving from Ottawa to Gatineau?", a: "Yes. Ottawa-to-Gatineau relocations are one of my specialties, and I know the tax differences, school systems, commute patterns and neighbourhood differences that matter when you cross the bridge." },
  { q: "How do I get a home valuation in Outaouais?", a: "I prepare a free, no-obligation valuation based on recent comparable sales in your specific area. You receive a clear report with a recommended listing price." },
  { q: "What is the best area to buy in Outaouais?", a: "It depends on your budget, lifestyle and priorities. Aylmer suits families, Hull young professionals, Chelsea nature lovers and Gatineau centre buyers looking for accessible prices. Let's discuss your needs." },
  { q: "How much does a house cost in Outaouais?", a: "In Q3 2026, the median single-family price was $480,000 in the Gatineau metropolitan area, and the median condo price $297,450 (QPAREB, Centris data). By sector, the single-family median ranged from $395,000 in Buckingham/Masson-Angers to $530,000 in the Gatineau periphery area. Contact me for a current analysis of your target area." },
  { q: "Why choose a Quebec-licensed broker instead of an Ontario agent?", a: "Only a Quebec-licensed broker can legally represent you in a real estate transaction in Quebec. I understand the local laws, welcome tax, school taxes and how the Outaouais market works." },
  { q: "Is the Outaouais real estate market active?", a: "Yes. In Q3 2026, 1,044 residential properties sold in the Gatineau metropolitan area. Over 12 months, single-family conditions favoured sellers below $740,000, and the market was balanced above that (QPAREB, Centris data). The picture still changes from one sector to another." },
  { q: "Do you help with military relocations?", a: "Yes. Military families have been part of my work since 2017. I accept SIRVA and BGRS files and plan the transaction around your posting date, for buying or selling in the Outaouais." },
  { q: "How do I start my real estate project in Outaouais?", a: "Contact me for a free consultation. We discuss your goals, I give you the facts and numbers, and together we define the right strategy for your situation." },
];

const OutaouaisHubPageEn = () => (
  <div>
    <PageMeta
      title="Outaouais Real Estate Agent, Area by Area | YGS"
      description="Yanis Gauthier-Sigeris, bilingual real estate broker in Outaouais. Gatineau, Hull, Aylmer, Chelsea, Cantley. A clear strategy to buy, sell or invest."
    ogImage="https://yanisgauthier.com/og/og-home.jpg" />
    <ServiceJsonLd
      name="Real Estate Broker in Outaouais"
      description="Residential real estate brokerage services in Outaouais: selling, buying, valuation and plex investment in Gatineau, Hull, Aylmer, Chelsea and Cantley."
      url="/en/outaouais-real-estate-agent/"
      serviceType="Real Estate Brokerage"
    />

    <HeroSection
      overline="OUTAOUAIS AREAS AND TOWNS"
      title="Outaouais real estate, area by area"
      subtitle="Prices and profile for each area, from Hull to Chelsea and Aylmer to Val-des-Monts, so you can choose where to buy or how to sell."
      primaryCta={{ label: "Free Home Valuation", href: "/en/home-valuation/" }}
      secondaryCta={{ label: "Talk to Yanis", href: "/en/contact/" }}
      socialProof="RE/MAX Hall of Fame"
      heroBgImage={heroImg}
      photoCredit={{ text: "Photo: cjuneau, CC BY 2.0, Wikimedia Commons (cropped)", href: "https://commons.wikimedia.org/wiki/File:Ridge_Road,_Gatineau_Park_(7985502539).jpg" }}
      agentImage={yanisPortrait}
      agentImageSm={yanisPortraitSm}
      agentImageMd={yanisPortraitMd}
      agentImageAvif={yanisPortraitAvif}
      agentImageSmAvif={yanisPortraitSmAvif}
      agentImageMdAvif={yanisPortraitMdAvif}
      agentImageLg={yanisPortraitLg}
      agentImageLgAvif={yanisPortraitLgAvif}
      agentName="Yanis Gauthier-Sigeris"
    />
{/* Intro */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading overline="Your local broker" title="Clear guidance across Outaouais" centered />
        <p className="mt-6 text-base leading-relaxed text-muted-foreground text-center">
          I'm Yanis Gauthier-Sigeris, a RE/MAX real estate broker based in Gatineau. I help sellers, buyers and investors across the Outaouais region, from Hull to Chelsea, Aylmer to Cantley. My approach: data-driven advice, a personalized strategy and transparent guidance from start to finish.
        </p>
      </div>
    </section>

    {/* Zones served */}
    <section className="section-padding bg-[var(--cream)]">
      <div className="section-container max-w-[56rem]">
        <SectionHeading overline="Areas served" title="Neighbourhoods and municipalities I serve" centered />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {zones.map((z) => (
            <Link
              key={z.href}
              to={z.href}
              className="group flex items-center justify-between gap-3 rounded-xl border border-border/40 bg-card px-5 py-4 transition-all duration-200 hover:border-accent/25 hover:shadow-sm hover:-translate-y-0.5"
            >
              <div className="min-w-0">
                <p className="text-[0.9375rem] font-semibold text-foreground group-hover:text-primary transition-colors truncate">{z.name}</p>
                <p className="mt-0.5 text-[0.8125rem] text-muted-foreground/60 truncate">{z.detail}</p>
              </div>
              <ArrowRight size={14} className="shrink-0 text-muted-foreground/30 transition-all group-hover:text-primary group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-[56rem]">
        <SectionHeading overline="Services" title="What I can do for you" centered />
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="group flex items-center justify-between gap-3 rounded-xl border border-border/40 bg-card px-5 py-4 transition-all duration-200 hover:border-accent/25 hover:shadow-sm hover:-translate-y-0.5"
            >
              <div className="min-w-0">
                <p className="text-[0.9375rem] font-semibold text-foreground group-hover:text-primary transition-colors truncate">{s.label}</p>
                <p className="mt-0.5 text-[0.8125rem] text-muted-foreground/60 truncate">{s.detail}</p>
              </div>
              <ArrowRight size={14} className="shrink-0 text-muted-foreground/30 transition-all group-hover:text-primary group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why work with me */}
    <section className="section-padding bg-[var(--cream)]">
      <div className="section-container max-w-3xl">
        <SectionHeading overline="Why me" title="A local, bilingual and transparent broker" centered />
        <ul className="mt-8 space-y-3">
          {[
            "RE/MAX Hall of Fame broker, recognized in the Outaouais",
            "Fully bilingual (French and English), for clients on both sides of the river",
            "Resale, first-time buying and plex investment",
            "Valuations based on comparable sales in your area",
            "Support for Ottawa → Gatineau and Montreal → Gatineau relocations",
            "I give you the numbers and the options. You decide.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
              <span className="text-[0.9375rem] text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* FAQ */}
    <FAQSection title="Questions about real estate in Outaouais" items={faqItems} />

    {/* Related pages */}
    <RelatedPages
      overline="Also worth reading"
      title="Explore areas and services"
      pages={[
        { title: "All Neighbourhoods", text: "Compare all areas.", href: "/en/neighborhoods/" },
        { title: "Market Report", text: "Gatineau real estate trends.", href: "/en/market-report/" },
        { title: "Blog", text: "Articles and local tips.", href: "/en/blog/" },
      ]}
    />

    <CTASection
      dark
      overline="First step"
      title="Start your real estate project in Outaouais"
      text="Valuation, buyer consultation or plex analysis, we start where you are."
      buttons={[
        { label: "Free Home Valuation", href: "/en/home-valuation/" },
        { label: "Book a Consultation", href: "/en/contact/", variant: "outline" },
      ]}
      trustLine="I give you the numbers and options, you decide."
    />
  </div>
);

export default OutaouaisHubPageEn;
