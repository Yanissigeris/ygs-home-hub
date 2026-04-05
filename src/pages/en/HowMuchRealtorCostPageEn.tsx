import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";

const faq = [
  { q: "How much does a realtor cost in Quebec?", a: "In Quebec, the broker's compensation is typically a percentage of the sale price, agreed upon before listing. There is no fixed rate — every arrangement is negotiated between the seller and their broker." },
  { q: "Who pays the realtor's commission?", a: "In practice, the seller pays the listing broker's compensation. Buyers generally do not pay a commission directly." },
  { q: "Is the commission negotiable?", a: "Yes. The OACIQ does not regulate commission rates — the compensation is freely agreed between the parties in the brokerage contract." },
  { q: "What services are included in the commission?", a: "Price evaluation, marketing strategy, professional photos, showings, negotiation, and coordination through to closing with the notary." },
  { q: "Is a realtor more expensive than selling privately?", a: "A broker involves a cost, but they can also maximize your sale price through better exposure, a data-driven pricing strategy and professional negotiation." },
  { q: "Are there hidden fees with a realtor?", a: "No — everything must be clearly stated in the brokerage contract. A good broker explains all costs (commission, notary, location certificate) upfront." },
  { q: "How much does it cost to buy with a realtor?", a: "Buyers generally do not pay a commission directly. The collaborating broker's compensation is covered through the seller's listing agreement." },
  { q: "How do I know if the commission is fair?", a: "Compare services offered, local experience, and proposed strategy. The lowest price isn't always the best choice — what matters is your net result." },
];

const HowMuchRealtorCostPageEn = () => (
  <>
    <PageMeta
      title="How Much Does a Realtor Cost in Quebec?"
      description="Understand how realtor compensation works in Quebec. Commission structure, services included, and what it means for your sale in Gatineau."
    />

    <section className="hero-gradient relative overflow-hidden">
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="label-overline mb-4 text-primary-foreground/25">Guide · Selling in Quebec</p>
          <h1 className="text-primary-foreground">How much does a realtor cost in Quebec?</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/50">
            Realtor compensation is one of the first questions sellers ask. Here's how it works, explained clearly.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Understanding" title="How does the commission work?" />
      <p className="prose-body mt-5">
        In Quebec, the real estate broker's compensation is agreed upon <strong>before listing</strong> in the brokerage contract. It typically takes the form of a percentage of the final sale price. There is no fixed rate set by the OACIQ — every agreement is personalized.
      </p>
      <p className="prose-body mt-4">
        This compensation covers the full range of professional services: market value analysis, pricing strategy, professional photography, marketing, showings, negotiation, and coordination through to the notary.
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="In practice" title="What this means for you" />
      <p className="prose-body mt-5">
        Before signing a brokerage contract, a good broker will clearly explain their compensation, the services included, and any other expected costs (notary, location certificate, welcome tax for buyers). Everything is transparent from the start.
      </p>
      <p className="prose-body mt-4">
        The real question isn't just "how much does it cost?" but rather "what will my net result be?" An experienced local broker can help you maximize your sale price, reduce time on market, and avoid costly mistakes.
      </p>
    </ContentBlock>

    <InlineCTA
      text="First step: find out your property's value — it's free and no commitment required."
      buttonLabel="Free Home Valuation →"
      href="/en/home-valuation"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Factors" title="What influences the cost?" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Property type", text: "Single-family home, condo, plex — the complexity of the transaction can vary." },
          { title: "Local market", text: "Market conditions in Outaouais influence strategy and time to sell." },
          { title: "Services offered", text: "Professional photos, virtual tours, targeted marketing — the level of service varies." },
          { title: "Broker's experience", text: "A locally experienced broker can make a significant difference in the final price." },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-border/40 bg-card p-4">
            <h3 className="text-[0.9375rem] font-semibold">{item.title}</h3>
            <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </ContentBlock>

    <RelatedPages
      overline="Explore"
      title="Related pages"
      pages={[
        { title: "How to choose a realtor", text: "The essential criteria for choosing.", href: "/en/how-to-choose-a-realtor" },
        { title: "Verify a broker (OACIQ)", text: "How to verify a broker is in good standing.", href: "/en/oaciq-find-a-broker" },
        { title: "Sell in Gatineau", text: "Strategy and support for sellers.", href: "/en/sell" },
        { title: "Free Home Valuation", text: "How much is your property worth?", href: "/en/home-valuation" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Want to understand your options?"
      text="I'll explain everything clearly — commission, services, strategy — before we even begin."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation" },
        { label: "Talk to Yanis", href: "/en/contact", variant: "outline" },
      ]}
      trustLine="Transparent, clear, and no commitment."
    />

    <FAQSection items={faq} />
  </>
);

export default HowMuchRealtorCostPageEn;
