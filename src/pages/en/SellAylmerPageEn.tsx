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
  { num: "01", title: "Aylmer market analysis", desc: "Comparable sales in your Aylmer neighborhood — Plateau, Lake Deschênes, established areas. A realistic and strategic price." },
  { num: "02", title: "Marketing plan", desc: "Preparation, photos, targeted visibility to attract buyers from Aylmer, Gatineau and Ottawa." },
  { num: "03", title: "Full support", desc: "Showings, negotiation, coordination through to the notary. Zero surprises." },
];

const nextSteps = [
  { title: "Free valuation in Aylmer", text: "Know the value of your Aylmer property — free and no commitment.", href: "/en/home-valuation-aylmer", cta: "Get my valuation", highlight: true },
  { title: "Talk to Yanis", text: "A call to clarify your selling options in Aylmer.", href: "/en/contact", cta: "Book a call" },
];

const faq = [
  { q: "How do I sell my house in Aylmer?", a: "We start with a valuation based on recent sales in your Aylmer neighborhood. Then we build a marketing plan adapted to your area and property type." },
  { q: "How long does it take to sell a house in Aylmer?", a: "A well-positioned property in Aylmer typically sells within a few weeks. The timeline depends on pricing, neighborhood and preparation." },
  { q: "How much is my house worth in Aylmer?", a: "The value depends on your neighborhood — Plateau, Lake Deschênes, established areas. Request a free valuation for a realistic price range." },
  { q: "Should I renovate before selling in Aylmer?", a: "Not always. Some investments pay off in Aylmer's market, others don't. I advise based on your specific situation." },
  { q: "What are the costs of selling in Aylmer?", a: "Commission, notary fees, location certificate and sometimes minor repairs. Everything is clear from the start." },
  { q: "Is it a good time to sell in Aylmer?", a: "Aylmer remains highly sought-after by families and Ottawa buyers. The best time also depends on your personal situation." },
  { q: "Why work with a local broker in Aylmer?", a: "A broker who knows Aylmer understands the micro-markets, active buyers and the specifics of each neighborhood — from the Plateau to Lake Deschênes." },
  { q: "Can I sell my Aylmer house to an Ottawa buyer?", a: "Absolutely — Aylmer attracts many Ottawa buyers thanks to its quality of life and proximity. My marketing targets both markets." },
  { q: "How does buy-sell coordination work in Aylmer?", a: "It's common. We plan the coordination from the start to avoid getting stuck between two transactions." },
  { q: "Which Aylmer neighborhoods are most in demand?", a: "The Plateau, Lake Deschênes area and established family neighborhoods are highly sought-after. Each neighborhood has its strengths." },
];

const SellAylmerPageEn = () => (
  <>
    <PageMeta
      title="Sell Your House in Aylmer | Real Estate Broker"
      description="Sell your property in Aylmer at the best price. Free valuation, local strategy and full support from a broker who knows Aylmer."
    />
    <ServiceJsonLd
      name="Real Estate Selling Service in Aylmer"
      description="Real estate selling service in Aylmer — valuation, pricing strategy, marketing and full support."
      url="/en/sell-house-aylmer"
      serviceType="Real Estate Listing Service"
    />

    <HeroSection
      overline="Sell in Aylmer · Outaouais"
      title="Sell your property in Aylmer with a local broker"
      subtitle="Aylmer is a sought-after area — families, Lake Deschênes, established neighborhoods. Your selling strategy should reflect the real value of your area."
      primaryCta={{ label: "Free valuation", href: "/en/home-valuation-aylmer" }}
      secondaryCta={{ label: "See the process", href: "/en/seller-plan" }}
      trustLine="Clear strategy · Aylmer and area"
      heroBgImage={heroImg}
    />
<ContentBlock narrow>
      <SectionHeading overline="Selling in Aylmer" title="Support adapted to the Aylmer market" />
      <p className="prose-body mt-5">
        Aylmer is one of the most sought-after areas in Outaouais: established family neighborhoods, Lake Deschênes proximity, quick access to Ottawa and recognized quality of life. Whether you're selling a home on the Plateau, near the lake or in a residential area, the pricing and marketing strategy needs to match your micro-market.
      </p>
      <p className="prose-body mt-4">
        With nearly 9 years helping sellers across Outaouais, I know the comparables, trends and active buyers in Aylmer. My goal: a clear plan to sell at the best price, with no surprises.
      </p>
    </ContentBlock>

    <InlineCTA text="First step: know what your Aylmer property is worth — it's free." buttonLabel="Free valuation →" href="/en/home-valuation-aylmer" />

    <ProcessSteps steps={steps} background="alt" />

    <RelatedPages
      overline="Explore Aylmer"
      title="Related pages"
      pages={[
        { title: "Aylmer — neighborhood profile", text: "Market, profile and trends in Aylmer.", href: "/en/aylmer" },
        { title: "Home valuation Aylmer", text: "How much is your Aylmer property worth?", href: "/en/home-valuation-aylmer" },
        { title: "Sell in Gatineau", text: "The complete guide to selling in Outaouais.", href: "/en/sell" },
        { title: "Outaouais real estate agent", text: "Services across the region.", href: "/en/outaouais-real-estate-agent" },
      ]}
    />

    <FunnelNextStep overline="Next step" title="Where to start to sell in Aylmer?" subtitle="Every situation is different. Choose the step that fits." steps={nextSteps} />

    <CTASection
      dark
      title="Thinking of selling in Aylmer?"
      text="I'll give you the numbers, options and a strategy adapted to the Aylmer market."
      buttons={[
        { label: "Free valuation", href: "/en/home-valuation-aylmer" },
        { label: "Talk to Yanis", href: "/en/contact", variant: "outline" },
      ]}
      trustLine="Free, confidential and no commitment."
    />

    <FAQSection items={faq} />
  </>
);

export default SellAylmerPageEn;
