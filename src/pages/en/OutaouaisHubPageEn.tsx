import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Award, Shield } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import RelatedPages from "@/components/RelatedPages";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";

const zones = [
  { name: "Gatineau", href: "/en/gatineau", detail: "Central, services, condos" },
  { name: "Hull", href: "/en/hull", detail: "Urban, culture, museums" },
  { name: "Aylmer", href: "/en/aylmer", detail: "Lake, families, bilingual" },
  { name: "Chelsea", href: "/en/chelsea", detail: "Nature, Gatineau Park" },
  { name: "Cantley", href: "/en/cantley", detail: "Rural, large lots" },
];

const services = [
  { label: "Home Valuation Gatineau", href: "/en/home-valuation", detail: "Free and no obligation" },
  { label: "Sell My House Gatineau", href: "/en/sell", detail: "Strategy and guidance" },
  { label: "Buy a Home in Gatineau", href: "/en/buy", detail: "Complete buyer guide" },
  { label: "Contact / Consultation", href: "/en/contact", detail: "Let's talk about your project" },
];

const faqItems = [
  { q: "Do I need a bilingual real estate agent in Outaouais?", a: "In a bilingual region like Outaouais, working with an agent fluent in both French and English is a major advantage. I handle all negotiations, paperwork and communications in your preferred language." },
  { q: "Which areas do you serve in Outaouais?", a: "I serve the entire Outaouais urban region: Gatineau, Hull, Aylmer, Chelsea, Cantley, Val-des-Monts, Buckingham, Masson-Angers and Pontiac. Each area has its own character — I help you find the right fit." },
  { q: "Can you help if I am moving from Ottawa to Gatineau?", a: "Absolutely. I specialize in Ottawa-to-Gatineau relocations. I know the tax differences, school systems, commute patterns and neighbourhood dynamics that matter when crossing the bridge." },
  { q: "How do I get a home valuation in Outaouais?", a: "I prepare a free, no-obligation valuation based on recent comparable sales in your specific area. You receive a clear report with a recommended listing price." },
  { q: "What is the best area to buy in Outaouais?", a: "It depends on your budget, lifestyle and priorities. Aylmer is great for families, Hull for young professionals, Chelsea for nature lovers, and Gatineau centre for accessibility. Let's discuss your needs." },
  { q: "How much does a house cost in Outaouais?", a: "Prices vary significantly by area and property type. In 2024-2025, single-family homes range from $350,000 to over $700,000 depending on location. Contact me for a current market analysis." },
  { q: "Why choose a Quebec-licensed broker instead of an Ontario agent?", a: "Only a Quebec-licensed broker can legally represent you in a real estate transaction in Quebec. I understand the local laws, welcome tax, school taxes and market dynamics specific to the Outaouais." },
  { q: "Is the Outaouais real estate market active?", a: "Yes, the market remains dynamic thanks to Ottawa's proximity, bilingual demand and the region's growing appeal. Conditions vary by sector — a personalized analysis will give you the full picture." },
  { q: "Do you help with military relocations?", a: "Yes. I am an approved BGRS/SIRVA broker and I understand the IRP posting process. I help military families buy, sell and relocate smoothly in Outaouais." },
  { q: "How do I start my real estate project in Outaouais?", a: "Contact me for a free consultation. We discuss your goals, I give you the facts and numbers, and together we define the best strategy for your situation." },
];

const OutaouaisHubPageEn = () => (
  <div>
    <PageMeta
      title="Outaouais Real Estate Agent · Gatineau"
      description="Yanis Gauthier-Sigeris, bilingual real estate broker in Outaouais. Gatineau, Hull, Aylmer, Chelsea, Cantley — clear strategy to buy, sell or invest."
    ogImage="https://yanisgauthier.com/og/og-home.jpg" />
    <ServiceJsonLd
      name="Real Estate Broker in Outaouais"
      description="Residential real estate brokerage services in Outaouais — selling, buying, valuation and plex investment in Gatineau, Hull, Aylmer, Chelsea and Cantley."
      url="/en/outaouais-real-estate-agent"
      serviceType="Real Estate Brokerage"
    />

    <HeroSection
      overline="OUTAOUAIS · GATINEAU · HULL · AYLMER"
      title="Your Real Estate Agent in Outaouais"
      subtitle="Sell, buy or invest in the region — with local, bilingual guidance based on facts."
      primaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }}
      secondaryCta={{ label: "Talk to Yanis", href: "/en/contact" }}
      socialProof="RE/MAX Hall of Fame"
      heroVideo="/hero-video-compressed.mp4"
      heroVideoPoster="/hero-video-poster.webp"
      agentImage={yanisPortrait}
      agentImageSm={yanisPortraitSm}
      agentName="Yanis Gauthier-Sigeris"
    />
{/* Intro */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading overline="Your local broker" title="Clear guidance across Outaouais" centered />
        <p className="mt-6 text-base leading-relaxed text-muted-foreground text-center">
          I'm Yanis Gauthier-Sigeris, a RE/MAX real estate broker based in Gatineau. I help sellers, buyers and investors across the Outaouais region — from Hull to Chelsea, Aylmer to Cantley. My approach: data-driven advice, a personalized strategy and transparent guidance from start to finish.
        </p>
      </div>
    </section>

    {/* Zones served */}
    <section className="section-padding bg-secondary/20">
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
    <section className="section-padding bg-secondary/20">
      <div className="section-container max-w-3xl">
        <SectionHeading overline="Why me" title="A local, bilingual and transparent broker" centered />
        <ul className="mt-8 space-y-3">
          {[
            "RE/MAX Hall of Fame — recognized across Outaouais",
            "Fully bilingual (French & English) — essential for the Ottawa-Gatineau market",
            "Specialized in resale, first-time buying and plex investment",
            "Valuations based on real data — not online estimates",
            "Expert in Ottawa → Gatineau and Montréal → Gatineau relocations",
            "Honest approach — I give you the numbers and options, you decide",
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
        { title: "All Neighbourhoods", text: "Compare all areas.", href: "/en/neighborhoods" },
        { title: "Market Report", text: "Gatineau real estate trends.", href: "/en/market-report" },
        { title: "Blog", text: "Articles and local tips.", href: "/en/blog" },
      ]}
    />

    <CTASection
      dark
      overline="First step"
      title="Start your real estate project in Outaouais"
      text="Valuation, buyer consultation or plex analysis — we start where you are."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation" },
        { label: "Book a Consultation", href: "/en/contact", variant: "outline" },
      ]}
      trustLine="I give you the numbers and options — you decide."
    />
  </div>
);

export default OutaouaisHubPageEn;
