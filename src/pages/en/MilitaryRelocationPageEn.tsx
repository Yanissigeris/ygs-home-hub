import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { MapPin, Home, Shield, Clock, Award, DollarSign } from "lucide-react";
import heroImg from "@/assets/hero-military-relocation.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const challenges = [
  { icon: MapPin, title: "Finding the right area remotely", text: "You may not know Gatineau. I'll guide you to the neighbourhoods that match your priorities." },
  { icon: Home, title: "Coordinating a buy-sell", text: "Selling your current property while buying in Gatineau requires tight coordination." },
  { icon: DollarSign, title: "Understanding the market", text: "In Quebec, taxes and buying through a notary differ from other provinces. A local broker helps you find your way." },
];

const steps = [
  { num: "01", title: "Situation assessment", desc: "Posting timeline, budget, family priorities and target neighbourhoods." },
  { num: "02", title: "Targeted search", desc: "Virtual or in-person visits, with a selection that fits your military profile." },
  { num: "03", title: "Support through to the keys", desc: "Offer, inspection and notary: I coordinate each step until you move in." },
];


const faq = [
  { q: "How does buying a home during a military posting work?", a: "We start by understanding your timeline and needs. Then, targeted search, visits (virtual or in-person), offer and full support." },
  { q: "Do you work with SIRVA and BGRS files?", a: "Yes. Since April 1, 2026, CAF relocations follow the Canadian Armed Forces Relocation Directive (CAFRD). SIRVA handles files authorized on or after January 6, 2026, and BGRS handles those authorized before. I adapt to the steps and timelines of your file." },
];

const MilitaryRelocationPageEn = () => (
  <>
    <PageMeta title="Military Relocation to Gatineau" description="Military posting to Gatineau and the Outaouais? SIRVA or BGRS process, neighbourhoods based on your workplace, timelines and bilingual service." ogImage="https://yanisgauthier.com/og/og-military.jpg" />
    <ServiceJsonLd name="Military Relocation to Gatineau" description="Real estate service for military members posted to Gatineau: SIRVA or BGRS, neighbourhoods, timelines and bilingual service." url="/en/military-relocation" serviceType="Military Relocation Service" />
    <HeroSection overline="Military Relocation · Gatineau" title="Military relocation to Gatineau" subtitle="Posting to the area? I help you find the right property on your timeline." primaryCta={{ label: "Book a call", href: "/en/contact" }} trustLine="Service adapted to military members." heroBgImage={heroImg} />
<section className="py-8 bg-card border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">SIRVA and BGRS files welcome</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" width={200} height={36} className="h-10 w-auto object-contain" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
    <CardGrid overline="The challenges" title="What often blocks relocated military members" items={challenges} />
    <ProcessSteps steps={steps} background="alt" />
    <ContentBlock narrow>
      <SectionHeading overline="Why YGS" title="Support adapted to your pace" subtitle="Postings don't follow the normal real estate calendar. I adapt to your timeline and constraints." />
    </ContentBlock>
    <GuideInlineCTA lang="en" guideType="relocation_guide" headline="Free Military Relocation Guide" text="What you need to know about buying or selling during a posting to Gatineau, in a guide sent to your email." ctaLabel="Get the guide" />
    <CTASection dark title="Let's plan your relocation" text="Tell me about your posting and we'll build a plan together." buttons={[{ label: "Book a call", href: "/en/contact" }, { label: "Free Valuation", href: "/en/home-valuation", variant: "outline" }]} trustLine="I give you the numbers and the options. You decide." />
    <FAQSection items={faq} />
    <StickyGuideBanner lang="en" guideType="relocation_guide" label="Free Relocation Guide, get it by email" />
  </>
);

export default MilitaryRelocationPageEn;
