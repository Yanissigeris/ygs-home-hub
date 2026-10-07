import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-military-seller.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const steps = [
  { num: "01", title: "Valuation and pricing", desc: "Market value, list price and a sale plan built around your posting date." },
  { num: "02", title: "Fast market launch", desc: "Preparation, appropriate improvements, visibility plan and listing schedule." },
  { num: "03", title: "Sale and coordination", desc: "Listing, showings, negotiation, coordination all the way to the notary." },
];


const faq = [
  { q: "How long does it take to sell during a posting?", a: "It depends on the price and the property type. In Q2 2026, a single-family home sold in 27 days on average in the Gatineau CMA, and a condo in 40 days (APCIQ). Add the time until the notary signing. We adapt the plan to your schedule." },
  { q: "What if I have to leave before the sale?", a: "The sale can go ahead after you leave. We set up a plan for showings, and you can sign documents remotely. For the deed of sale, your notary can explain the power of attorney option." },
  { q: "Do I risk selling below market value?", a: "The risk goes down when the price is set right from the start. My role is to base that price on recent comparable sales, even with a tight timeline." },
];

const MilitarySellerPageEn = () => (
  <>
    <PageMeta title="Sell During a Military Posting" description="Sell your property in Gatineau during a CAF posting. A tight timeline and a price based on comparable sales, with a SIRVA or BGRS file." ogImage="https://yanisgauthier.com/og/og-military.jpg" />
    <ServiceJsonLd name="Selling During a Military Posting" description="Specialized real estate service for CAF members on posting. A tight timeline and a price based on comparable sales, with a SIRVA or BGRS file." url="/en/military-seller/" serviceType="Military Real Estate Seller Service" />
    <HeroSection
      overline="Sell during a posting · Gatineau"
      title="Sell your property during a posting"
      subtitle="Time is tight, but price matters. I help you sell within your timeline, with a price backed by market numbers."
      primaryCta={{ label: "Get my valuation", href: "/en/home-valuation/" }}
      secondaryCta={{ label: "Talk to Yanis", href: "/en/contact/" }}
      trustLine="A clear plan, numbers you can check."
      heroBgImage={heroImg}
    />
<section className="py-8 bg-white border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">SIRVA and BGRS files welcome</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" width={200} height={36} className="h-10 w-auto object-contain" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <ProcessSteps steps={steps} />

    <InlineCTA
      text="First step: know the value of your property. It's free, with a personalized response within 24 hours maximum."
      buttonLabel="Get my valuation →"
      href="/en/home-valuation/"
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="My approach"
        title="A fast sale can also be profitable"
      />
      <p className="prose-body mt-5">
        With the right preparation and pricing, you don't have to choose between speed and price. My role is to protect your price while respecting your timeline.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/home-valuation/">Start with a valuation</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA lang="en"
      guideType="seller_guide"
      headline="Free Seller Guide: selling in Gatineau"
      text="What to know to sell in Gatineau: pricing, getting the house ready, showings and negotiation."
      ctaLabel="Get the Seller Guide"
    />

    <CTASection
      dark
      title="Posting coming up?"
      text="Let's discuss your timeline and your options. The sooner we start, the more room we have to work."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation/" },
        { label: "Book a call", href: "/en/contact/", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options. You decide."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner lang="en" guideType="seller_guide" label="Free Seller Guide, get it by email" />
  </>
);
export default MilitarySellerPageEn;
