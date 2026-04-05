import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import ContentBlock from "@/components/ContentBlock";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import RelatedPages from "@/components/RelatedPages";
import { Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-seller.webp";


const steps = [
  { num: "01", title: "Hull market analysis", desc: "Recent comparable sales on your street and in your Hull neighborhood — condos, plexes, single-family. We set a realistic price." },
  { num: "02", title: "Marketing plan", desc: "Targeted preparation, professional photos, maximum visibility to buyers from Hull, Gatineau and Ottawa." },
  { num: "03", title: "Full support", desc: "Showings, negotiation, coordination through to the notary. No surprises." },
];

const nextSteps = [
  { title: "Free valuation in Hull", text: "Know the value of your Hull property — free and no commitment.", href: "/en/home-valuation-hull", cta: "Get my valuation", highlight: true },
  { title: "Talk to Yanis", text: "A call to clarify your selling options in Hull.", href: "/en/contact", cta: "Book a call" },
];

const faq = [
  { q: "How do I sell my house in Hull?", a: "We start with a valuation based on recent sales in your Hull neighborhood. Then we build a marketing plan adapted to your property type — condo, plex or single-family." },
  { q: "How long does it take to sell a house in Hull?", a: "On average, a well-positioned property in Hull sells within a few weeks. The timeline depends on pricing, property type and preparation." },
  { q: "How much is my house worth in Hull?", a: "The value depends on your street, property type and recent sales. Request a free valuation to get a realistic price range." },
  { q: "Should I renovate before selling in Hull?", a: "Not necessarily. Some improvements pay off in Hull's market, others don't. I advise on a case-by-case basis." },
  { q: "What are the costs of selling in Hull?", a: "Broker commission, notary fees, location certificate and sometimes minor repairs. Everything is transparent from the start." },
  { q: "Is it a good time to sell in Hull?", a: "Hull remains a sought-after area thanks to its proximity to Ottawa and local services. The best time also depends on your personal situation." },
  { q: "Why work with a local broker in Hull?", a: "A broker who knows Hull understands the comparables, active buyers and the specifics of each micro-market — downtown condos, plexes, residential neighborhoods." },
  { q: "Can I sell to an Ottawa buyer?", a: "Absolutely — many Ottawa buyers look in Hull for proximity and prices. My marketing targets both markets." },
  { q: "How does buy-sell coordination work?", a: "It's common in Hull. We plan the coordination from the start to avoid getting stuck between two transactions." },
  { q: "What's the difference between selling a condo and a house in Hull?", a: "Pricing and marketing strategies differ. A condo requires specific attention to condo fees and competition within the building." },
];

const SellHullPageEn = () => (
  <>
    <PageMeta
      title="Sell Your House in Hull | Real Estate Broker"
      description="Sell your property in Hull at the best price. Free valuation, local marketing strategy and full support from a broker who knows Hull."
    ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd
      name="Real Estate Selling Service in Hull"
      description="Real estate selling service in Hull — valuation, pricing strategy, marketing and full support."
      url="/en/sell-house-hull"
      serviceType="Real Estate Listing Service"
    />

    <HeroSection
      overline="Sell in Hull · Outaouais"
      title="Sell your property in Hull with a local broker"
      subtitle="Hull is a dynamic market — condos, plexes, single-family homes. You need a plan adapted to your property type and neighborhood."
      primaryCta={{ label: "Free valuation", href: "/en/home-valuation-hull" }}
      secondaryCta={{ label: "See the process", href: "/en/seller-plan" }}
      trustLine="Clear strategy · Hull and area"
      heroBgImage={heroImg}
    />
<ContentBlock narrow>
      <SectionHeading overline="Selling in Hull" title="Support adapted to the Hull market" />
      <p className="prose-body mt-5">
        Hull is a unique area in Outaouais: immediate proximity to Ottawa, active market for condos and plexes, established residential neighborhoods and a transforming downtown. Whether you're selling a condo near Boulevard Saint-Joseph, a plex in Old Hull or a family home, the strategy needs to match your micro-market.
      </p>
      <p className="prose-body mt-4">
        With nearly 9 years helping sellers across Outaouais, I know the comparables, active buyers and specifics of each Hull neighborhood. My goal: give you a clear plan to sell at the best price, with no surprises.
      </p>
    </ContentBlock>

    <InlineCTA text="First step: know what your Hull property is worth — it's free." buttonLabel="Free valuation →" href="/en/home-valuation-hull" />

    <ProcessSteps steps={steps} background="alt" />

    <RelatedPages
      overline="Explore Hull"
      title="Related pages"
      pages={[
        { title: "Hull — neighborhood profile", text: "Market, profile and trends in Hull.", href: "/en/hull" },
        { title: "Home valuation Hull", text: "How much is your Hull property worth?", href: "/en/home-valuation-hull" },
        { title: "Sell in Gatineau", text: "The complete guide to selling in Outaouais.", href: "/en/sell" },
        { title: "Outaouais real estate agent", text: "Services across the region.", href: "/en/outaouais-real-estate-agent" },
      ]}
    />

    <FunnelNextStep overline="Next step" title="Where to start to sell in Hull?" subtitle="Every situation is different. Choose the step that fits." steps={nextSteps} />

    <CTASection
      dark
      title="Thinking of selling in Hull?"
      text="I'll give you the numbers, options and a strategy adapted to the Hull market."
      buttons={[
        { label: "Free valuation", href: "/en/home-valuation-hull" },
        { label: "Talk to Yanis", href: "/en/contact", variant: "outline" },
      ]}
      trustLine="Free, confidential and no commitment."
    />

    <FAQSection items={faq} />
  </>
);

export default SellHullPageEn;
