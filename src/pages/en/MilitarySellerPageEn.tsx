import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-military-seller.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const steps = [
  { num: "01", title: "Strategic valuation", desc: "Market value, pricing strategy and a plan to maximize your return despite the tight timeline." },
  { num: "02", title: "Fast market launch", desc: "Preparation, appropriate improvements, visibility plan and listing schedule." },
  { num: "03", title: "Sale and coordination", desc: "Listing, showings, negotiation, coordination all the way to the notary." },
];

const trustItems = [
  { icon: Clock, label: "Nearly 9 years in Outaouais" },
  { icon: Award, label: "Experience selling during postings" },
  { icon: Shield, label: "Accelerated process · Full transparency" },
];

const faq = [
  { q: "How long does it take to sell during a posting?", a: "It depends on the market and price, but with the right strategy, we can often close in a few weeks. We adapt the plan to your schedule." },
  { q: "What if I have to leave before the sale?", a: "It's manageable. We set up a plan to handle showings and the transaction remotely." },
  { q: "Will I risk selling below market value?", a: "Not if the pricing is done right from the start. That's exactly my role — maximize your price even with a tight timeline." },
];

const MilitarySellerPageEn = () => (
  <>
    <PageMeta title="Sell During a Military Posting | YGS" description="Sell your property in Gatineau during a CAF posting. Timing, BGRS/SIRVA process and strategy to maximize your price." />
    <HeroSection
      overline="Sell during a posting · Gatineau"
      title="Sell your property during a posting"
      subtitle="Time is tight, but price matters. I help you sell efficiently without sacrificing the value of your property."
      primaryCta={{ label: "Get my valuation", href: "/en/home-valuation" }}
      secondaryCta={{ label: "Talk to Yanis", href: "/en/contact" }}
      trustLine="Clear strategy. Fast sale. Full transparency."
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <section className="py-8 bg-white border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">Partner of programs</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" className="h-10 w-auto object-contain" loading="lazy" />
        </div>
      </div>
    </section>

    <ProcessSteps steps={steps} />

    <InlineCTA
      text="First step: know the value of your property — it's free and fast."
      buttonLabel="Get my valuation →"
      href="/en/home-valuation"
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="My approach"
        title="A fast sale can also be profitable"
      />
      <p className="prose-body mt-5">
        With the right preparation and pricing, a fast sale can also be a profitable sale. My role is to protect your price while respecting your timeline.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/home-valuation">Start with a valuation</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTAEn
      guideType="seller_guide"
      headline="Free Seller Guide — sell at the best price"
      text="Everything you need to know to sell your property in Gatineau — pricing, preparation and strategy."
      ctaLabel="Get the Seller Guide"
    />

    <CTASection
      dark
      title="Posting coming up?"
      text="Let's discuss your timeline and options — the sooner we start, the more leverage we have."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation" },
        { label: "Book a call", href: "/en/contact", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options — you decide with full clarity."
    />

    <FAQSection items={faq} />

    <StickyGuideBannerEn guideType="seller_guide" label="Free Seller Guide — get it by email" />
  </>
);
export default MilitarySellerPageEn;
