import { Link } from"react-router-dom";
import { Button } from"@/components/ui/button";
import PageMeta from"@/components/PageMeta";
import HeroSection from"@/components/HeroSection";
import CTASection from"@/components/CTASection";
import BenefitsList from"@/components/BenefitsList";
import ContentBlock from"@/components/ContentBlock";
import SectionHeading from"@/components/SectionHeading";
import FAQSection from"@/components/FAQSection";
import RelatedPages from"@/components/RelatedPages";
import InlineCTA from"@/components/InlineCTA";
import GuideInlineCTAEn from"@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from"@/components/en/StickyGuideBannerEn";
import GuideRequestForm from"@/components/GuideRequestForm";
import heroImg from"@/assets/hero-buyer-guide.webp";

const topics = ["Understanding the buying process in Québec","Choosing the right neighborhood in Gatineau or Outaouais for your profile","First-time buyer vs experienced buyer — what changes","How to formulate a strong offer","The inspection: what to really check","The notary's role and fees to expect",
];
const faq = [
 { q:"How much do I need for a down payment?", a:"Minimum 5% for a primary residence. For an owner-occupied plex, 5% too. For a pure investment, 20%. We can discuss based on your situation." },
 { q:"Is it better to buy in Gatineau than Ottawa?", a:"It depends on your priorities. Generally, prices are more affordable on the Gatineau side, but you need to consider taxes and services." },
 { q:"How long does a purchase take?", a:"Generally 60 to 90 days from the start of your search to taking possession, but it can vary with market conditions." },
 { q:"What fees should I expect?", a:"Notary (approximately $1,500), welcome tax, optional title insurance, and pre-purchase inspection. We review everything together." },
];
const related = [
 { title:"Buyer Consultation", text:"Clarify your criteria and options.", href:"/en/buyer-consultation" },
 { title:"First-Time Buyer", text:"Budget, down payment and process for first-time buyers.", href:"/en/first-time-buyer" },
 { title:"Buy from Ottawa", text:"More space, affordable prices — cross the river.", href:"/en/buy-from-ottawa" },
 { title:"Explore Neighborhoods", text:"Find the area that fits you.", href:"/en/neighborhoods" },
];

const BuyerGuidePageEn = () => (
 <>
 <PageMeta title="Buyer Guide — Buying in Gatineau | YGS" description="Complete guide to buying a property in Gatineau. Process, budget, inspection and negotiation — everything you need to know." />
 <HeroSection overline="Buyer Guide · Gatineau" title="Complete guide to buying in Gatineau and Outaouais" subtitle="Everything you need to know to find the right property, make a strong offer and navigate the buying process in Gatineau and across Outaouais." primaryCta={{ label:"Book a consultation", href:"/en/buyer-consultation" }} secondaryCta={{ label:"Explore neighborhoods", href:"/en/neighborhoods" }} trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau" heroBgImage={heroImg} />
 <BenefitsList overline="In this guide" title="What you'll learn" items={topics} />

 <ContentBlock narrow>
 <SectionHeading title="Buying in Gatineau is different" />
 <p className="prose-body mt-5">
 The buying process in Québec has its specifics — promise to purchase, inspection, conditions, notary. Whether you're coming from Ottawa, Montréal or elsewhere, this guide prepares you for every step.
 </p>
 </ContentBlock>

 <InlineCTA text="Don't know Gatineau neighborhoods? Explore the popular areas." buttonLabel="See neighborhoods →" href="/en/neighborhoods" />

 <ContentBlock narrow>
 <SectionHeading title="Finding the right neighborhood" />
 <p className="prose-body mt-5">
 Aylmer, the Plateau, Hull, Buckingham — each area has its own personality, advantages and trade-offs. The right choice depends on your budget, commute, lifestyle and family priorities.
 </p>
 <Button className="mt-8" size="lg" asChild>
 <Link to="/en/neighborhoods">Explore neighborhoods</Link>
 </Button>
 </ContentBlock>

 <GuideRequestForm
 guideTitle="Get the Buyer Guide"
 headline="Get your free buyer guide"
 subtitle="Everything you need to know to buy in Gatineau — in a clear, step-by-step guide sent directly to your email."
 submitLabel="Get the Buyer Guide"
 successTitle="Thank you! Your guide is on its way."
 successText="Check your inbox — you'll receive the buyer guide within the next few minutes."
 />

 <FAQSection items={faq} />

 <RelatedPages overline="Also worth reading" title="Related pages for buyers" pages={related} background="alt" />

 <GuideInlineCTAEn guideType="buyer_guide" headline="Free Buyer Guide" text="Everything to buy in Gatineau — process, budget and tips in a guide sent to your email." ctaLabel="Get the Buyer Guide" />

 <CTASection dark title="Ready to start your search?" text="Book a free consultation — let's clarify your criteria and options." buttons={[{ label:"Book a consultation", href:"/en/buyer-consultation" }, { label:"See neighborhoods", href:"/en/neighborhoods", variant:"outline" }]} trustLine="I give you the options, you decide." />
 <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
 </>
);
export default BuyerGuidePageEn;
