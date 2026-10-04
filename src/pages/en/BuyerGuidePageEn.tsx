import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import BenefitsList from "@/components/BenefitsList";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import GuideRequestForm from "@/components/GuideRequestForm";
import HowToJsonLd from "@/components/HowToJsonLd";
import heroImg from "@/assets/hero-buyer-guide.webp";

const buyerSteps = [
  { name: "Define your budget and buying capacity", text: "Calculate your down payment (at least 5% on the first $500,000), your borrowing capacity and the programs available to first-time buyers." },
  { name: "Choose the right neighbourhood in Gatineau", text: "Compare Aylmer, Hull, Plateau, Buckingham and other areas based on budget, commute and lifestyle." },
  { name: "Search and visit properties", text: "Identify properties matching your criteria and visit them with a broker who knows the local market." },
  { name: "Make a well-built offer", text: "Draft a promise to purchase suited to the market, with clear inspection and financing conditions and realistic timelines." },
  { name: "Complete the pre-purchase inspection", text: "Have the property inspected by a professional to identify potential issues before finalizing." },
  { name: "Finalize at the notary", text: "The notary verifies titles, prepares documents and finalizes the transaction. Ask for a quote on their fees." },
];

const topics = [
  "Understanding the buying process in Québec",
  "Choosing the right neighbourhood in Gatineau or the Outaouais for your profile",
  "First-time or experienced buyer: what changes",
  "How to make a well-built offer",
  "The inspection: what to check",
  "The notary's role and fees to expect",
];
const faq = [
  { q: "How much do I need for a down payment?", a: "For a home or a duplex you live in, under $1.5M: 5% on the first $500,000 and 10% on the rest (CMHC). An owner-occupied triplex or fourplex needs at least 10%. At $1.5M and above, or for a rental property you don't live in, expect 20% or more depending on the lender. We can go over your situation." },
  { q: "Is it better to buy in Gatineau than Ottawa?", a: "It depends on your priorities. Compare the price, but also municipal taxes, land transfer duties, Québec income tax and your commute. We run those numbers together for your situation." },
  { q: "How long does a purchase take?", a: "The search length varies. Once accepted, the promise to purchase sets the inspection deadline, the financing deadline and the notary signing date. We set those together before the offer." },
  { q: "What fees should I expect?", a: "Plan for notary fees (ask for a quote), the land transfer duties (welcome tax) and a pre-purchase inspection. Add municipal and school tax adjustments, and the 9% Québec tax on the mortgage insurance premium if it applies. First-time buyers can recover part of the transfer duties through Revenu Québec's refundable tax credit, up to $5,875 subject to conditions. We review everything together." },
];
const related = [
  { title: "Buyer Consultation", text: "Clarify your criteria and options.", href: "/en/buyer-consultation/" },
  { title: "First-Time Buyer", text: "Budget, down payment and process for first-time buyers.", href: "/en/first-time-buyer/" },
  { title: "Buy from Ottawa", text: "What to know before crossing the river.", href: "/en/buy-from-ottawa/" },
  { title: "Compare Neighbourhoods", text: "Find the area that fits you.", href: "/en/neighborhoods/" },
];

const BuyerGuidePageEn = () => (
  <>
    <HowToJsonLd name="How to buy a property in Gatineau" description="Step-by-step guide to buying a property in Gatineau and the Outaouais: budget, search, offer, inspection and notary." steps={buyerSteps} />
    <PageMeta title="Buyer Guide · Buying in Gatineau" description="Complete guide to buying a property in Gatineau. Process, budget, inspection and negotiation: everything you need to know." ogImage="https://yanisgauthier.com/og/og-buyer.jpg" />
    <HeroSection overline="Buyer Guide · Gatineau" title="Complete guide to buying in Gatineau and the Outaouais" subtitle="The steps to find the right property and make a well-built offer, in Gatineau and across the Outaouais." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation/" }} secondaryCta={{ label: "Compare neighbourhoods", href: "/en/neighborhoods/" }} trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau" heroBgImage={heroImg} />
    <BenefitsList overline="In this guide" title="What you'll learn" items={topics} />

    <ContentBlock narrow>
      <SectionHeading title="Buying in Gatineau is different" />
      <p className="prose-body mt-5">
        The buying process in Québec has its specifics: promise to purchase, inspection, conditions and notary. Whether you're coming from Ottawa, Montréal or elsewhere, this guide prepares you for every step.
      </p>
    </ContentBlock>

    <InlineCTA text="New to Gatineau neighbourhoods? Compare the main areas." buttonLabel="See neighbourhoods →" href="/en/neighborhoods/" />

    <ContentBlock narrow>
      <SectionHeading title="Finding the right neighbourhood" />
      <p className="prose-body mt-5">
        Aylmer, the Plateau, Hull, Buckingham: each area has its advantages and trade-offs. The right choice depends on your budget, commute, lifestyle and family priorities.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/neighborhoods/">Compare neighbourhoods</Link>
      </Button>
    </ContentBlock>

    <GuideRequestForm
      avatar="acheteur"
      offer="guide_acheteur"
      guideTitle="Get the Buyer Guide"
      headline="Get your free buyer guide"
      subtitle="A clear, step-by-step guide to buying in Gatineau. I'll send it to you by email."
      submitLabel="Get the Buyer Guide"
      successTitle="Thank you! Your guide is on its way."
      successText="Check your inbox. The buyer guide should arrive shortly."
    />

    <FAQSection items={faq} />

    <RelatedPages overline="Also worth reading" title="Related pages for buyers" pages={related} background="alt" />

    <GuideInlineCTA lang="en" guideType="buyer_guide" headline="Free Buyer Guide" text="The process and the budget for buying in Gatineau, in a guide sent to your email." ctaLabel="Get the Buyer Guide" />

    <CTASection dark title="Ready to start your search?" text="Book a free consultation, let's clarify your criteria and options." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation/" }, { label: "See neighbourhoods", href: "/en/neighborhoods/", variant: "outline" }]} trustLine="I give you the numbers and the options. You decide." />
    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide, get it by email" />
  </>
);
export default BuyerGuidePageEn;
