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
  { icon: MapPin, title: "Short-notice posting", text: "The move is coming fast — you need to find a home in Gatineau or sell quickly, without compromising on price." },
  { icon: Shield, title: "Understanding the Québec market", text: "Municipal and school taxes, notary process, zoning — Québec works differently from Ontario or the rest of Canada." },
  { icon: Home, title: "Finding the right neighborhood", text: "Proximity to CFB Uplands or downtown Ottawa, French and English schools, bilingual services — every family has its priorities." },
  { icon: Heart, title: "Settling as a family in Gatineau", text: "Coordinating sale and purchase, finding a family neighborhood in Aylmer, the Plateau or Hull, enrolling kids — all while managing posting stress." },
];
const steps = [
  { num: "01", title: "Discovery call", desc: "We understand your situation — posting, timeline, budget, family priorities and target neighborhoods." },
  { num: "02", title: "Personalized plan", desc: "Targeted search, virtual or in-person visits, coordination with your posting schedule." },
  { num: "03", title: "Full support", desc: "Offer, inspection, notary, coordination — I handle everything until you're settled." },
];
const militaryPaths = [
  { title: "Buy in Gatineau", text: "Find the right neighborhood and property for your family — virtual visits available.", href: "/en/military-buyer", cta: "Learn more", highlight: true },
  { title: "Sell during a posting", text: "Sell quickly and at the right price, even with a tight timeline.", href: "/en/military-seller", cta: "Learn more" },
  { title: "Military guide", text: "Everything you need to know for your real estate relocation to Gatineau.", href: "/en/military-guide", cta: "Read the guide" },
];
const faq = [
  { q: "Do you know the military programs?", a: "Yes. I understand posting realities, tight deadlines and specific needs. We adapt the approach to your situation." },
  { q: "I need to sell and buy at the same time — is that possible?", a: "It's common during postings. We plan the coordination from the start to avoid getting stuck." },
  { q: "Which neighborhoods are close to the base?", a: "Aylmer and the Plateau are popular for CFB Uplands access via the Champlain Bridge. Hull is ideal for those working in downtown Ottawa. We choose based on your commute and family priorities." },
  { q: "Can you do virtual visits?", a: "Absolutely. Many military members buy remotely before their arrival in Gatineau. I adapt to your schedule and time zone." },
];

const MilitaryPageEn = () => (
  <>
    <PageMeta title="Military Relocation Gatineau — CAF Posting" description="Military posting to Gatineau? Specialized support for CAF members: buying, selling, BGRS/SIRVA and smooth settlement." ogImage="https://yanisgauthier.com/og/og-military.jpg" />
    <ServiceJsonLd name="Military Real Estate Service — CAF Posting to Gatineau" description="Specialized real estate support for Canadian Armed Forces members posted to Gatineau — buying, selling, BGRS/SIRVA and settlement." url="/en/military" serviceType="Military Real Estate Relocation Service" />
    <HeroSection overline="Military · Gatineau" title="Military? Find your property in Gatineau" subtitle="Posting, relocation, buying or selling — I know military realities and help you navigate the Gatineau market efficiently." primaryCta={{ label: "Book a call", href: "/en/contact" }} secondaryCta={{ label: "Military Guide", href: "/en/military-guide" }} trustLine="Service adapted to military members." heroBgImage={heroImg} />
<section className="py-8 bg-card border-y border-border/30"><div className="section-container"><div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"><p className="text-[0.875rem] text-muted-foreground">Program partner</p><img src={sirvaBgrsLogo} alt="SIRVA | BGRS" className="h-10 w-auto object-contain" loading="lazy" /></div></div></section>
    <CardGrid overline="Your challenges" title="The realities of a military real estate posting" items={challenges} />
    <InlineCTA text="Need to sell before buying? Start by knowing the value of your property." buttonLabel="Free Home Valuation →" href="/en/home-valuation" />
    <ProcessSteps steps={steps} background="alt" />
    <FunnelNextStep overline="Your situation" title="How can I help?" subtitle="Choose the service that fits your reality." steps={militaryPaths} />
    <ContentBlock narrow><SectionHeading overline="Why YGS" title="A broker who understands your reality" /><p className="prose-body mt-5">Postings don't follow the normal real estate calendar. You need a broker who adapts — to your timeline, your budget, and the pressure that comes with a military move.</p><p className="prose-body mt-4">After nearly 9 years in Gatineau, I've supported military families in all kinds of situations. My role is to simplify the process so you can focus on your mission.</p><Button className="mt-8" size="lg" asChild><Link to="/en/contact">Book a call</Link></Button></ContentBlock>
    <GuideInlineCTA lang="en" guideType="relocation_guide" headline="Free Military Relocation Guide" text="Everything you need to know for your real estate posting to Gatineau — in a clear guide sent to your email." ctaLabel="Get the guide" />
    <CTASection dark title="Ready to plan your relocation?" text="Let's discuss your posting, criteria and timeline — I adapt to you." buttons={[{ label: "Book a call", href: "/en/contact" }, { label: "Military Guide", href: "/en/military-guide", variant: "outline" }]} trustLine="" />
    <FAQSection items={faq} />
    <StickyGuideBanner lang="en" guideType="relocation_guide" label="Free Military Relocation Guide — get it by email" />
  </>
);

export default MilitaryPageEn;
