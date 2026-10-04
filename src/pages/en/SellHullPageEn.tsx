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
  { num: "01", title: "Hull market analysis", desc: "Recent comparable sales on your street and in your Hull neighbourhood, for the same property type as yours. We set a realistic price." },
  { num: "02", title: "Marketing plan", desc: "Targeted preparation and professional photos, then visibility aimed at buyers in Gatineau and Ottawa." },
  { num: "03", title: "Through to the notary", desc: "I handle showings and negotiation, then coordinate the file with the notary." },
];

const nextSteps = [
  { title: "Free valuation in Hull", text: "Find out what your Hull property is worth. It's free, with no commitment.", href: "/en/home-valuation-hull/", cta: "Get my valuation", highlight: true },
  { title: "Talk to Yanis", text: "A call to clarify your selling options in Hull.", href: "/en/contact/", cta: "Book a call" },
];

const faq = [
  { q: "How do I sell my house in Hull?", a: "We start with a valuation based on recent sales in your Hull neighbourhood. Then we build a marketing plan suited to your property type (condo, plex or single-family)." },
  { q: "How long does it take to sell a house in Hull?", a: "In Q2 2026, single-family homes in the Gatineau metropolitan area sold in 27 days on average, and condos in 40 days (APCIQ, Centris data). For a home in Hull, the timeline depends mostly on price and preparation." },
  { q: "How much is my house worth in Hull?", a: "The value depends on your street, property type and recent sales. Request a free valuation to get a realistic price range." },
  { q: "Should I renovate before selling in Hull?", a: "Not necessarily. Some improvements pay off in Hull's market, others don't. I advise on a case-by-case basis." },
  { q: "What are the costs of selling in Hull?", a: "Broker commission, notary fees, certificate of location and sometimes minor repairs. Everything is transparent from the start." },
  { q: "Is it a good time to sell in Hull?", a: "The right time depends mostly on your personal situation. For context, the median single-family price in Hull was $514,500 in Q2 2026 (APCIQ)." },
  { q: "Why work with a local broker in Hull?", a: "A broker who knows Hull follows comparable sales and active buyers, from downtown condos to residential neighbourhoods." },
  { q: "Can I sell to an Ottawa buyer?", a: "Yes. Ottawa is right across the river, and depending on your property, my marketing can also reach Ontario buyers." },
  { q: "How does buy-sell coordination work?", a: "We line up the sale and purchase dates from the start, with the right conditions in each promise to purchase. That way you avoid getting stuck between two transactions." },
  { q: "What's the difference between selling a condo and a house in Hull?", a: "Pricing and marketing strategies differ. A condo requires specific attention to condo fees and competition within the building." },
];

const SellHullPageEn = () => (
  <>
    <PageMeta
      title="Sell Your House in Hull | Real Estate Broker"
      description="Sell your property in Hull at the right price. Free valuation, local marketing strategy and full support from a broker who knows Hull."
    ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd
      name="Real Estate Selling Service in Hull"
      description="Real estate selling service in Hull: valuation, pricing strategy, marketing and full support."
      url="/en/sell-house-hull/"
      serviceType="Real Estate Listing Service"
    />

    <HeroSection
      overline="Sell in Hull · Outaouais"
      title="Sell your property in Hull with a local broker"
      subtitle="In Hull, a condo doesn't sell the same way as a plex or a single-family home. You need a plan built around your property type and neighbourhood."
      primaryCta={{ label: "Free valuation", href: "/en/home-valuation-hull/" }}
      secondaryCta={{ label: "Get my seller plan", href: "/en/seller-plan/" }}
      trustLine="Clear strategy · Hull and area"
      heroBgImage={heroImg}
    />
<ContentBlock narrow>
      <SectionHeading overline="Selling in Hull" title="A selling plan suited to the Hull market" />
      <p className="prose-body mt-5">
        Hull stands out in the Outaouais: Ottawa right across the river, an active market for condos and plexes, established residential neighbourhoods and a changing downtown. For a condo near Boulevard Saint-Joseph, a plex in Old Hull or a family home, the strategy needs to match your micro-market.
      </p>
      <p className="prose-body mt-4">
        I've been helping sellers across the Outaouais since 2017, and I follow sales and active buyers in each Hull neighbourhood closely. My goal: give you a clear plan to sell at the right price, with no surprises.
      </p>
    </ContentBlock>

    <InlineCTA text="First step: find out what your Hull property is worth. It's free." buttonLabel="Free valuation →" href="/en/home-valuation-hull/" />

    <ProcessSteps steps={steps} background="alt" />

    <RelatedPages
      overline="See also"
      title="Related pages"
      pages={[
        { title: "Hull: neighbourhood profile", text: "The market and profile of the area.", href: "/en/hull/" },
        { title: "Home valuation Hull", text: "How much is your Hull property worth?", href: "/en/home-valuation-hull/" },
        { title: "Sell in Gatineau", text: "My selling process in Gatineau, step by step.", href: "/en/sell/" },
        { title: "Outaouais real estate agent", text: "Services across the region.", href: "/en/outaouais-real-estate-agent/" },
      ]}
    />

    <FunnelNextStep overline="Next step" title="Where should you start when selling in Hull?" subtitle="Every situation is different. Choose the step that fits." steps={nextSteps} />

    <CTASection
      dark
      title="Thinking of selling in Hull?"
      text="A free valuation to start, or a call to talk through your sale in Hull."
      buttons={[
        { label: "Free valuation", href: "/en/home-valuation-hull/" },
        { label: "Talk to Yanis", href: "/en/contact/", variant: "outline" },
      ]}
      trustLine="Free, no commitment."
    />

    <FAQSection items={faq} />
  </>
);

export default SellHullPageEn;
