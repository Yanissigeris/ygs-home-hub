import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategoryEn as getReviewsByCategory } from "@/data/reviews-en";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import { Shield, Home, Award, Clock, MapPin, Heart } from "lucide-react";
import heroImg from "@/assets/hero-military.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const challenges = [
  { icon: MapPin, title: "Short-notice posting", text: "The move is coming fast. You need to find a home in Gatineau or sell quickly, without sacrificing the price." },
  { icon: Shield, title: "Understanding the Quebec market", text: "Municipal and school taxes, welcome tax, notary process, zoning: Quebec works differently from Ontario and the rest of Canada." },
  { icon: Home, title: "Finding the right neighbourhood", text: "Commute to National Defence's Carling Campus (west Ottawa) or downtown, French or English school: every family has its own priorities." },
  { icon: Heart, title: "Settling as a family in Gatineau", text: "Coordinating the sale and the purchase, then choosing a neighbourhood in Aylmer, the Plateau or Hull and a school for the kids, while the posting moves ahead." },
];
const steps = [
  { num: "01", title: "First call", desc: "We review your situation: posting, timeline, budget, family priorities and target neighbourhoods." },
  { num: "02", title: "Personalized plan", desc: "Targeted search and virtual or in-person visits, set around your posting schedule." },
  { num: "03", title: "Full support", desc: "Offer, inspection, notary and date coordination: I'm with you until you get the keys." },
];
const militaryPaths = [
  { title: "Buy in Gatineau", text: "Find the right neighbourhood and property for your family. Virtual visits available.", href: "/en/military-buyer/", cta: "Learn more", highlight: true },
  { title: "Sell during a posting", text: "Sell quickly and at the right price, even with a tight timeline.", href: "/en/military-seller/", cta: "Learn more" },
  { title: "Military guide", text: "Everything you need to know for your real estate relocation to Gatineau.", href: "/en/military-guide/", cta: "Read the guide" },
];
const faq = [
  { q: "Do you know the military programs?", a: "Yes. Since April 1, 2026, CAF relocations follow the Canadian Armed Forces Relocation Directive (CAFRD). SIRVA handles files authorized on or after January 6, 2026, and BGRS handles files authorized before that date. I adapt my work to the steps and timelines of your file." },
  { q: "I need to sell and buy at the same time. Is that possible?", a: "It's common during postings. We plan the coordination from the start to avoid getting stuck." },
  { q: "Which neighbourhoods are close to military workplaces?", a: "It depends on where you work. National Defence has consolidated many of its offices at the Carling Campus, on Carling Avenue in west Ottawa: from Aylmer and the Plateau, you get there via the Champlain Bridge. Other offices are in downtown Ottawa, closer to Hull. We compare your commutes based on your posting and family priorities." },
  { q: "Can you do virtual visits?", a: "Yes. You can buy remotely before you arrive in Gatineau, with virtual visits. I adapt to your schedule and time zone." },
];

const MilitaryPageEn = () => (
  <>
    <PageMeta title="Military Relocation Gatineau: CAF Posting" description="Military posting to Gatineau? Specialized support for CAF members: buying, selling, BGRS/SIRVA and settling in Aylmer, Hull or the Plateau." ogImage="https://yanisgauthier.com/og/og-military.jpg" />
    <ServiceJsonLd name="Military Real Estate Service, CAF Posting to Gatineau" description="Specialized real estate support for Canadian Armed Forces members posted to Gatineau: buying, selling, SIRVA or BGRS and settling in." url="/en/military/" serviceType="Military Real Estate Relocation Service" />
    <HeroSection overline="Military · Gatineau" title="Military? Find your property in Gatineau" subtitle="Buying or selling during a posting? I help you understand the Gatineau market and stay on your timeline." primaryCta={{ label: "Book a call", href: "/en/contact/" }} secondaryCta={{ label: "Military Guide", href: "/en/military-guide/" }} trustLine="Service adapted to military members." heroBgImage={heroImg} />
<section className="py-8 bg-card border-y border-border/30"><div className="section-container"><div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"><p className="text-[0.875rem] text-muted-foreground">SIRVA and BGRS files welcome</p><img src={sirvaBgrsLogo} alt="SIRVA | BGRS" width={200} height={36} className="h-10 w-auto object-contain" loading="lazy" decoding="async" /></div></div></section>
    <CardGrid overline="Your challenges" title="The real estate realities of a military posting" items={challenges} />
    <InlineCTA text="Need to sell before buying? Start by knowing the value of your property." buttonLabel="Free Home Valuation →" href="/en/home-valuation/" />
    <ProcessSteps steps={steps} background="alt" />
    <FunnelNextStep overline="Your situation" title="How can I help?" subtitle="Choose the service that fits your reality." steps={militaryPaths} />
    <ContentBlock narrow><SectionHeading overline="Why YGS" title="A broker who understands your reality" /><p className="prose-body mt-5">Postings don't follow the normal real estate calendar. You need a broker who adapts to your timeline and to the pressure of a military move.</p><p className="prose-body mt-4">Since 2017 in Gatineau, I've supported military families in all kinds of situations. My role is to simplify the process so you can focus on your mission.</p><Button className="mt-8" size="lg" asChild><Link to="/en/contact/">Book a call</Link></Button></ContentBlock>
    <GuideInlineCTA lang="en" guideType="relocation_guide" headline="Free Military Relocation Guide" text="What you need to know about buying or selling during a posting to Gatineau, in a clear guide sent to your email." ctaLabel="Get the guide" />
    <CTASection dark title="Ready to plan your relocation?" text="Let's talk about your posting and your timeline. I adapt to you." buttons={[{ label: "Book a call", href: "/en/contact/" }, { label: "Military Guide", href: "/en/military-guide/", variant: "outline" }]} trustLine="I give you the numbers and the options. You decide." />
    <FAQSection items={faq} />
    <StickyGuideBanner lang="en" guideType="relocation_guide" label="Free Military Relocation Guide, get it by email" />
  </>
);

export default MilitaryPageEn;
