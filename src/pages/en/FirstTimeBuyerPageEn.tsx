import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
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
  { icon: DollarSign, title: "Down payment and budget", text: "For a house, condo or duplex you live in (under $1.5M), the minimum down payment is 5% on the first $500,000 of the price and 10% on the portion above. We look together at your borrowing capacity and the programs available to first-time buyers." },
  { icon: Home, title: "The right property type", text: "Condo in Hull or semi-detached on the Plateau: each option has its advantages for a first purchase in Gatineau." },
  { icon: FileText, title: "The process in Québec", text: "The notary and the mandatory OACIQ forms set the Québec process apart from the rest of Canada. I guide you through every step." },
  { icon: Shield, title: "Avoiding beginner mistakes", text: "A few pitfalls: buying too fast, forgetting closing costs, skimming the inspection report or choosing an area that doesn't fit your plans." },
];

const steps = [
  { num: "01", title: "Initial consultation", desc: "We talk about your budget and priorities, and I answer your questions about buying in Gatineau." },
  { num: "02", title: "Targeted search", desc: "I show you properties that match your profile and budget, in Aylmer, Hull, the Plateau or Buckingham." },
  { num: "03", title: "Full support", desc: "From the offer to the signing at the notary, I support you until you get the keys to your first property." },
];


const faq = [
  { q: "How much do I need for a first purchase in Gatineau?", a: "At the Q2 2026 single-family median for the Gatineau area ($523,500, APCIQ), the minimum down payment is $27,350 (5% on $500,000, 10% on the rest). Also plan for closing costs: notary, inspection, land transfer duties and tax adjustments. We work out your borrowing capacity together." },
  { q: "Do I qualify for assistance programs?", a: "Several measures may apply depending on your situation. The HBP lets you withdraw up to $60,000 from your RRSPs, and the FHSA accepts $8,000 in contributions per year, up to $40,000 lifetime. There are also the federal home buyers' amount and Québec's refundable tax credit, which reimburses part of the land transfer duties. We confirm your eligibility together, with your financial institution." },
  { q: "What's different in Québec?", a: "When a broker represents you, the promise to purchase uses an OACIQ form. The sale is then finalized at a notary, and the land transfer duties (welcome tax) are added to your budget. Nothing complicated, as long as you are well guided." },
];

const FirstTimeBuyerPageEn = () => (
  <>
    <PageMeta title="First-Time Buyer · Gatineau" description="First-time buyer in Gatineau? Budget, process and step-by-step guidance to buy your first home with confidence." ogImage="https://yanisgauthier.com/og/og-buyer.jpg" />
    <ServiceJsonLd name="First-Time Home Buyer in Gatineau" description="Personalized support for first-time buyers in Gatineau. Down payment, Québec programs and step-by-step process." url="/en/first-time-buyer/" serviceType="First Time Home Buyer Service" />
    <HeroSection
      overline="First-Time Buyer · Gatineau"
      title="First purchase in Gatineau: where to start?"
      subtitle="Becoming a homeowner for the first time is exciting and sometimes stressful. I help you through every step: budget, neighbourhood, offer and process."
      primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation/" }}
      secondaryCta={{ label: "Buyer Guide", href: "/en/buyer-guide/" }}
      trustLine="Personalized support at your pace."
      heroBgImage={heroImg}
    />
<CardGrid overline="To consider" title="What every first-time buyer needs to know" items={considerations} />

    <InlineCTA text="Not sure about your budget? We can discuss it during a free consultation." buttonLabel="Book a consultation →" href="/en/buyer-consultation/" />

    <ProcessSteps steps={steps} background="alt" />

    <ContentBlock narrow>
      <SectionHeading title="Your first purchase deserves proper guidance" />
      <p className="prose-body mt-5">
        Your first property is often the biggest investment of your life. My role is to help you make an informed decision, at your pace and with the numbers in hand.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/buyer-consultation/">Book my consultation</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA lang="en" guideType="buyer_guide" headline="Free Buyer Guide to get started right" text="Everything you need to know to buy your first property in Gatineau." ctaLabel="Get the Buyer Guide" />

    <CTASection dark title="Ready to take the first step?" text="Book a free consultation. We clarify your budget and the next steps." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation/" }, { label: "Compare neighbourhoods", href: "/en/neighborhoods/", variant: "outline" }]} trustLine="I work at your pace. You decide when you're ready." />

    <FAQSection items={faq} />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide, get it by email" />
  </>
);

export default FirstTimeBuyerPageEn;
