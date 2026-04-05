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
  { icon: MapPin, title: "Finding the right area remotely", text: "You may not know Gatineau — I'll guide you to the neighborhoods that match your priorities." },
  { icon: Home, title: "Coordinating a buy-sell", text: "Selling your current property while buying in Gatineau requires tight coordination." },
  { icon: DollarSign, title: "Understanding the market", text: "Prices, taxes and the process in Québec are different — you need a local guide." },
];

const steps = [
  { num: "01", title: "Situation assessment", desc: "Posting timeline, budget, family priorities and target neighborhoods." },
  { num: "02", title: "Targeted search", desc: "Virtual or in-person visits, selection tailored to your military profile." },
  { num: "03", title: "Support through to the keys", desc: "Offer, inspection, notary — everything is handled to simplify your transition." },
];


const faq = [
  { q: "How does a military real estate relocation work?", a: "We start by understanding your timeline and needs. Then, targeted search, visits (virtual or in-person), offer and full support." },
  { q: "Do you work with the IRP/BGRS programs?", a: "I understand the realities of these programs and adapt to the constraints and timelines they impose." },
];

const MilitaryRelocationPageEn = () => (
  <>
    <PageMeta title="Military Relocation to Gatineau" description="Military posting to Gatineau? Complete guide: BGRS/SIRVA process, neighborhoods near base, timelines and support." />
    <ServiceJsonLd name="Military Relocation to Gatineau" description="Complete guide for military members posting to Gatineau — BGRS/SIRVA, neighbourhoods, timelines and bilingual support." url="/en/military-relocation" serviceType="Military Relocation Service" />
    <HeroSection overline="Military Relocation · Gatineau" title="Military relocation to Gatineau" subtitle="Posting to the area? I help you find the right property quickly, with confidence and on your timeline." primaryCta={{ label: "Book a call", href: "/en/contact" }} trustLine="Service adapted to military members — at your pace." heroBgImage={heroImg} />
<section className="py-8 bg-card border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">Program partner</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" className="h-10 w-auto object-contain" loading="lazy" />
        </div>
      </div>
    </section>
    <CardGrid overline="The challenges" title="What often blocks relocated military members" items={challenges} />
    <ProcessSteps steps={steps} background="alt" />
    <ContentBlock narrow>
      <SectionHeading overline="Why YGS" title="Support adapted to your pace" subtitle="Postings don't follow the normal real estate calendar. I adapt to your timeline and constraints." />
    </ContentBlock>
    <GuideInlineCTA lang="en" guideType="relocation_guide" headline="Free Military Relocation Guide" text="Everything you need for your real estate posting to Gatineau — in a guide sent to your email." ctaLabel="Get the guide" />
    <CTASection dark title="Let's plan your relocation" text="Tell me about your posting — we'll build a plan together." buttons={[{ label: "Book a call", href: "/en/contact" }, { label: "Free Valuation", href: "/en/home-valuation", variant: "outline" }]} trustLine="I give you the options — you decide with full clarity." />
    <FAQSection items={faq} />
    <StickyGuideBanner lang="en" guideType="relocation_guide" label="Free Relocation Guide — get it by email" />
  </>
);

export default MilitaryRelocationPageEn;
