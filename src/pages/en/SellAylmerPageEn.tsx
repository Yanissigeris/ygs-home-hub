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
  { num: "01", title: "Aylmer market analysis", desc: "Comparable sales in your Aylmer neighbourhood, from Old Aylmer to the Plateau. A realistic price backed by local sales." },
  { num: "02", title: "Marketing plan", desc: "Preparation and photos, then targeted visibility with buyers in Gatineau and Ottawa." },
  { num: "03", title: "Through to the notary", desc: "I handle showings and negotiation, then coordinate the file with the notary." },
];

const nextSteps = [
  { title: "Free valuation in Aylmer", text: "Find out what your Aylmer property is worth. It's free, with no commitment.", href: "/en/home-valuation-aylmer/", cta: "Get my valuation", highlight: true },
  { title: "Talk to Yanis", text: "A call to clarify your selling options in Aylmer.", href: "/en/contact/", cta: "Book a call" },
];

const faq = [
  { q: "How do I sell my house in Aylmer?", a: "We start with a valuation based on recent sales in your Aylmer neighbourhood. Then we build a marketing plan suited to your area and your property type." },
  { q: "How long does it take to sell a house in Aylmer?", a: "In Q2 2026, single-family homes in the Gatineau metropolitan area sold in 27 days on average, and condos in 40 days (APCIQ, Centris data). For a home in Aylmer, the timeline depends mostly on price and preparation." },
  { q: "How much is my house worth in Aylmer?", a: "Your neighbourhood and recent sales nearby drive the value. Request a free valuation for a realistic price range." },
  { q: "Should I renovate before selling in Aylmer?", a: "Not always. Some investments pay off in Aylmer's market, others don't. I advise based on your specific situation." },
  { q: "What are the costs of selling in Aylmer?", a: "Commission, notary fees, certificate of location and sometimes minor repairs. Everything is clear from the start." },
  { q: "Is it a good time to sell in Aylmer?", a: "The right time depends mostly on your personal situation. For context, the median single-family price in Aylmer was $572,750 in Q2 2026 (APCIQ)." },
  { q: "Why work with a local broker in Aylmer?", a: "A broker who knows Aylmer follows active buyers and sales in each Aylmer neighbourhood." },
  { q: "Can I sell my Aylmer house to an Ottawa buyer?", a: "Yes. Via the Champlain Bridge, Old Aylmer is about 14 km from downtown Ottawa, which draws Ontario buyers. Depending on your property, my marketing can reach them too." },
  { q: "How does buy-sell coordination work in Aylmer?", a: "We line up the sale and purchase dates from the start, with the right conditions in each promise to purchase. That way you avoid getting stuck between two transactions." },
  { q: "Which Aylmer neighbourhoods are most in demand?", a: "It depends on the buyer. A young family doesn't look for the same thing as a couple looking to downsize, and I'll show you which buyers target your neighbourhood." },
];

const SellAylmerPageEn = () => (
  <>
    <PageMeta
      title="Sell Your House in Aylmer | Real Estate Broker"
      description="Sell your property in Aylmer at the right price. Free valuation, local strategy and full support from a broker who knows Aylmer."
    ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd
      name="Real Estate Selling Service in Aylmer"
      description="Real estate selling service in Aylmer: valuation, pricing strategy, marketing and full support."
      url="/en/sell-house-aylmer/"
      serviceType="Real Estate Listing Service"
    />

    <HeroSection
      overline="Sell in Aylmer · Outaouais"
      title="Sell your property in Aylmer with a local broker"
      subtitle="Families look to Aylmer for its established neighbourhoods. Your selling strategy should reflect the value of your area."
      primaryCta={{ label: "Free valuation", href: "/en/home-valuation-aylmer/" }}
      secondaryCta={{ label: "Get my seller plan", href: "/en/seller-plan/" }}
      trustLine="Clear strategy · Aylmer and area"
      heroBgImage={heroImg}
    />
<ContentBlock narrow>
      <SectionHeading overline="Selling in Aylmer" title="A selling plan suited to the Aylmer market" />
      <p className="prose-body mt-5">
        Established family neighbourhoods and access to Ottawa via the Champlain Bridge: that's what draws buyers to Aylmer. From one neighbourhood to the next, the pricing and marketing strategy needs to match your micro-market.
      </p>
      <p className="prose-body mt-4">
        I've been helping sellers across the Outaouais since 2017, and I follow sales and active buyers in Aylmer closely. My goal: a clear plan to sell at the right price, with no surprises.
      </p>
    </ContentBlock>

    <InlineCTA text="First step: find out what your Aylmer property is worth. It's free." buttonLabel="Free valuation →" href="/en/home-valuation-aylmer/" />

    <ProcessSteps steps={steps} background="alt" />

    <RelatedPages
      overline="See also"
      title="Related pages"
      pages={[
        { title: "Aylmer: neighbourhood profile", text: "The market and profile of the area.", href: "/en/aylmer/" },
        { title: "Home valuation Aylmer", text: "How much is your Aylmer property worth?", href: "/en/home-valuation-aylmer/" },
        { title: "Sell in Gatineau", text: "My selling process in Gatineau, step by step.", href: "/en/sell/" },
        { title: "Outaouais real estate agent", text: "Services across the region.", href: "/en/outaouais-real-estate-agent/" },
      ]}
    />

    <FunnelNextStep overline="Next step" title="Where should you start when selling in Aylmer?" subtitle="Every situation is different. Choose the step that fits." steps={nextSteps} />

    <CTASection
      dark
      title="Thinking of selling in Aylmer?"
      text="A free valuation to start, or a call to talk through your sale in Aylmer."
      buttons={[
        { label: "Free valuation", href: "/en/home-valuation-aylmer/" },
        { label: "Talk to Yanis", href: "/en/contact/", variant: "outline" },
      ]}
      trustLine="Free, no commitment."
    />

    <FAQSection items={faq} />
  </>
);

export default SellAylmerPageEn;
