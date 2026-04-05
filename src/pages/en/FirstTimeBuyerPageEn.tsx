import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import ProcessSteps from "@/components/ProcessSteps";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Home, DollarSign, FileText, Shield, Clock, Award } from "lucide-react";
import heroImg from "@/assets/hero-first-buyer.webp";

const considerations = [
  { icon: DollarSign, title: "Down payment and budget", text: "5% minimum for a first purchase. We look together at your real capacity and available programs in Québec." },
  { icon: Home, title: "The right property type", text: "Condo in Hull, house in Aylmer, semi-detached on the Plateau — each option has its advantages for a first purchase in Gatineau." },
  { icon: FileText, title: "The process in Québec", text: "Promise to purchase, inspection, notary — the Québec process is different from elsewhere in Canada. I guide you through every step." },
  { icon: Shield, title: "Avoiding beginner mistakes", text: "Don't rush, understand the fees, choose the right Gatineau neighborhood — I guide you." },
];

const steps = [
  { num: "01", title: "Initial consultation", desc: "We discuss your budget, priorities and questions about buying in Gatineau. Full transparency." },
  { num: "02", title: "Targeted search", desc: "I present the best options in Aylmer, Hull, the Plateau or Buckingham — neighborhoods that match your profile and budget." },
  { num: "03", title: "Full support", desc: "Offer, inspection, notary — I support you through the Québec process to the keys of your first property." },
];


const faq = [
  { q: "How much do I need for a first purchase in Gatineau?", a: "With a 5% down payment, you can access many properties across Outaouais — from condos in Hull to houses on the Plateau. We analyze your real capacity together." },
  { q: "Do I qualify for assistance programs?", a: "There are federal and Québec provincial incentives for first-time buyers. We look at that together during the consultation." },
  { q: "What's different in Québec?", a: "The notary process, the promise to purchase and certain Québec tax specifics. Nothing complicated — you just need to be well guided by someone who knows the local market." },
];

const FirstTimeBuyerPageEn = () => (
  <>
    <PageMeta title="First-Time Buyer — Gatineau" description="First-time buyer in Gatineau? Budget, process and step-by-step guidance to buy your first home with confidence." />
    <HeroSection
      overline="First-Time Buyer · Gatineau"
      title="First purchase in Gatineau — where to start?"
      subtitle="Becoming a homeowner for the first time is exciting and stressful. I help you navigate every step — budget, neighborhood, offer and process."
      primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation" }}
      secondaryCta={{ label: "Buyer Guide", href: "/en/buyer-guide" }}
      trustLine="Personalized support at your pace."
      heroBgImage={heroImg}
    />
<CardGrid overline="To consider" title="What every first-time buyer needs to know" items={considerations} />

    <InlineCTA text="Not sure about your budget? We can discuss it during a free consultation." buttonLabel="Book a consultation →" href="/en/buyer-consultation" />

    <ProcessSteps steps={steps} background="alt" />

    <ContentBlock narrow>
      <SectionHeading title="Your first purchase deserves proper guidance" />
      <p className="prose-body mt-5">
        Your first property is often the biggest investment of your life. My role is to make sure you make an informed decision — not rushed, not stressed, not based on emotion alone.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/buyer-consultation">Book my consultation</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA lang="en" guideType="buyer_guide" headline="Free Buyer Guide — to get started right" text="Everything you need to know to buy your first property in Gatineau." ctaLabel="Get the Buyer Guide" />

    <CTASection dark title="Ready to take the first step?" text="Book a free consultation — let's clarify your budget, options and next steps." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation" }, { label: "Explore neighborhoods", href: "/en/plateau-aylmer", variant: "outline" }]} trustLine="I support you at your pace — you decide when you're ready." />

    <FAQSection items={faq} />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);

export default FirstTimeBuyerPageEn;
