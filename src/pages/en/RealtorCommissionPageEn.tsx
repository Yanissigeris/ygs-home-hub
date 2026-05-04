import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-frais-courtage.webp";

const faq = [
  { q: "What is the typical realtor commission in Quebec?", a: "There is no fixed rate. The commission is a percentage of the sale price, freely negotiated between the seller and their broker before listing." },
  { q: "Is the commission regulated by the OACIQ?", a: "No. The OACIQ regulates professional conduct and ethics, but does not set commission rates. The amount is agreed in the brokerage contract." },
  { q: "What do commission fees cover?", a: "Market analysis, pricing strategy, professional photos, MLS listing, showings, negotiation, offer management, and coordination through to closing." },
  { q: "Are there additional costs beyond the commission?", a: "Yes — expect notary fees, location certificate, and potential tax adjustments. A good broker presents the full cost picture upfront." },
  { q: "Who pays the commission?", a: "The seller typically pays the listing broker's commission. Buyers generally do not pay a direct commission." },
  { q: "How can I compare commission rates fairly?", a: "Don't just compare percentages — look at the full service package: local experience, marketing quality, negotiation track record, and net result." },
  { q: "Is a lower commission always better?", a: "Not necessarily. A skilled broker may achieve a higher sale price that more than offsets a slightly higher commission — focus on your net proceeds." },
  { q: "Does commission vary by property type?", a: "It can. A plex, luxury property, or commercial property may involve different service levels and complexity." },
];

const RealtorCommissionPageEn = () => (
  <>
    <PageMeta
      title="Realtor Commission in Quebec — Clear Guide"
      description="Understand realtor commission fees in Quebec: how they work, what's included, and what it means for selling your home in Gatineau." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={{ ["--hero-bg-image" as string]: `url(${heroImg})` }}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="label-overline mb-4 text-primary-foreground/25">Guide · Real estate in Quebec</p>
          <h1 className="text-primary-foreground">Realtor commission in Quebec</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/50">
            How much is a real estate commission? What does it cover? Here's a clear guide to understanding broker fees in Quebec.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Understanding" title="How is the commission calculated?" />
      <p className="prose-body mt-5">
        In Quebec, the broker's compensation is agreed upon <strong>before listing</strong> in the brokerage contract. It's typically a percentage of the final sale price. There is no regulated rate — every agreement is personalized between the seller and their broker.
      </p>
      <p className="prose-body mt-4">
        This fee covers the full scope of professional services: market value analysis, pricing strategy, photography, marketing, showings, negotiation, and coordination through to the notary signing.
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="In practice" title="Other costs to expect" />
      <p className="prose-body mt-5">
        Beyond the commission, a real estate sale involves other costs: notary fees, location certificate, and in some cases tax adjustments. A good broker presents <strong>the complete cost picture</strong> from day one to avoid surprises.
      </p>
      <p className="prose-body mt-4">
        Your broker should also help you calculate your <strong>net proceeds</strong> — what remains in your pocket after all costs. That's the best way to make an informed decision.
      </p>
    </ContentBlock>

    <InlineCTA
      text="First step: find out your property's real market value — free and no commitment."
      buttonLabel="Free Home Valuation →"
      href="/en/home-valuation"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Tips" title="How to evaluate if fees are fair" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Compare the services", text: "Photos, virtual tours, targeted marketing — look at what's included, not just the percentage." },
          { title: "Check local experience", text: "A broker who knows Gatineau and Outaouais can make a real difference in the price achieved." },
          { title: "Ask for net proceeds", text: "A transparent broker will show you the complete calculation before you sign." },
          { title: "Evaluate the strategy", text: "A good broker doesn't sell at a discount — they maximize your result with a tailored strategy." },
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
        { title: "How much does a realtor cost?", text: "Complete guide on compensation.", href: "/en/how-much-does-a-realtor-cost-in-quebec" },
        { title: "Realtor vs selling by owner", text: "Advantages and risks compared.", href: "/en/realtor-vs-selling-by-owner-quebec" },
        { title: "How to choose a realtor", text: "The essential criteria.", href: "/en/how-to-choose-a-realtor" },
        { title: "Free Home Valuation", text: "How much is your property worth?", href: "/en/home-valuation" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Want clarity on costs?"
      text="I'll explain everything — fees, services, strategy — before we even start. Transparent and no commitment."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation" },
        { label: "Talk to Yanis", href: "/en/contact", variant: "outline" },
      ]}
      trustLine="Clarity and transparency, from the first call."
    />

    <FAQSection items={faq} />
  </>
);

export default RealtorCommissionPageEn;
