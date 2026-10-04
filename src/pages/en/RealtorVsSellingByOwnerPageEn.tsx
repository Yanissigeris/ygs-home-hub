import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-courtier-vs-fsbo.webp";
import { heroBgStyle } from "@/lib/hero-backgrounds";

const faq = [
  { q: "Is it better to sell with a realtor or by owner?", a: "It depends on your available time and how comfortable you are negotiating. A broker handles the marketing, showings, negotiation and paperwork. Selling privately avoids the commission, but all that work falls on you." },
  { q: "How much can I save selling without a broker?", a: "You save the commission and the taxes added to it. However, a poorly set asking price or a difficult negotiation can reduce those savings. Without a broker, you have no access to Centris, which limits the reach of your listing." },
  { q: "Is it legal to sell by owner in Quebec?", a: "Yes, selling without a broker is legal in Quebec, whether through a platform like DuProprio or a simple sign on the lawn. The seller is still bound by the legal warranty of quality, unless it is excluded in the deed, and must tell the buyer what they know about the property. With a broker, the OACIQ Declarations by the seller form is mandatory when the seller is an individual and the residential property has fewer than 5 units, condos included." },
  { q: "What are the risks of selling without a broker?", a: "Underpricing, negotiating without experience, paperwork errors or limited exposure for the listing. These mistakes can lead to disputes. A broker helps you reduce these risks." },
  { q: "Can a broker sell for more?", a: "A broker can help you get a higher price through pricing based on comparable sales, Centris exposure and negotiation. The result always depends on the property and the market." },
  { q: "What services does a broker provide compared with selling on your own?", a: "Price analysis, Centris listing, photos, marketing, showing management, negotiation, offer drafting and notary coordination. Alone, you handle everything yourself. The notary stays neutral: they prepare and receive the deed of sale, without negotiating for you." },
  { q: "How do I decide if I need a broker?", a: "If you have time and a good grasp of the paperwork and the seller's obligations, a private sale is an option. Otherwise, a broker handles each step and helps you defend your price." },
  { q: "Do buyers prefer sellers who have a broker?", a: "It depends on the buyer. Some buyer's brokers prefer dealing with a listing broker, who already has the seller's declarations and documents in hand. A buyer with a broker can still buy a property sold by owner, depending on the agreement on their broker's compensation." },
];

const RealtorVsSellingByOwnerPageEn = () => (
  <>
    <PageMeta
      title="Realtor vs Selling by Owner in Quebec"
      description="Selling with a realtor or by owner in Quebec: advantages, risks, seller obligations and net result, to decide based on your situation in Gatineau." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">Realtor vs selling by owner in Quebec</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            Both options are legitimate. This comparison helps you choose for your situation, with the advantages and risks on each side.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Comparison" title="The advantages of each option" />
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-[1rem] font-semibold mb-3">With a broker</h3>
          <ul className="space-y-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
            <li>✓ Centris listing</li>
            <li>✓ Price backed by comparable sales</li>
            <li>✓ Professional photos and targeted marketing</li>
            <li>✓ Negotiation and OACIQ-regulated forms</li>
            <li>✓ Full coordination through to closing</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[1rem] font-semibold mb-3">Selling by owner</h3>
          <ul className="space-y-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
            <li>✓ No commission to pay</li>
            <li>✓ Full control of the process</li>
            <li>✗ No access to Centris (MLS)</li>
            <li>✗ Risk of underpricing</li>
            <li>✗ Full management on your shoulders</li>
          </ul>
        </div>
      </div>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Reality" title="What to consider" />
      <p className="prose-body mt-5">
        The question isn't just "how much can I save?" but "how much will I keep?" If a broker gets a higher price, part or all of the commission can be offset. It depends on the property and the market.
      </p>
      <p className="prose-body mt-4">
        A private sale can work if you have time and are comfortable negotiating. In other cases, a local broker handles each step and reduces the risk of errors in the paperwork.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Curious about your property's value? Get a free valuation, with a personalized response within 24 hours maximum."
      buttonLabel="Free Home Valuation →"
      href="/en/home-valuation/"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Risks" title="Risks of selling without a broker" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Underpricing", text: "Without an analysis of comparable sales, you risk setting the price too low." },
          { title: "Limited exposure", text: "Without Centris, your listing does not appear in the tool brokers use to search for properties with their clients." },
          { title: "Direct negotiation", text: "Negotiating alone against a buyer (or their broker) can be disadvantageous without experience." },
          { title: "Administrative errors", text: "Real estate documentation is complex. A mistake can lead to costly disputes." },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-border/40 bg-card p-4">
            <h3 className="text-[0.9375rem] font-semibold">{item.title}</h3>
            <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </ContentBlock>

    <RelatedPages
      overline="Keep reading"
      title="Related pages"
      pages={[
        { title: "How much does a realtor cost?", text: "Guide on compensation.", href: "/en/how-much-does-a-realtor-cost-in-quebec/" },
        { title: "Realtor commission in Quebec", text: "Details on fees and services.", href: "/en/realtor-commission-quebec/" },
        { title: "Sell in Gatineau", text: "Strategy and support.", href: "/en/sell/" },
        { title: "Free Home Valuation", text: "How much is your property worth?", href: "/en/home-valuation/" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Still deciding?"
      text="Let's discuss your situation, with no commitment. I give you the numbers and the options. You decide."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation/" },
        { label: "Talk to Yanis", href: "/en/contact/", variant: "outline" },
      ]}
      trustLine="Transparent guidance, at your pace."
    />

    <FAQSection items={faq} />
  </>
);

export default RealtorVsSellingByOwnerPageEn;
