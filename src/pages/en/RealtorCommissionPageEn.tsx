import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-frais-courtage.webp";
import { heroBgStyle } from "@/lib/hero-backgrounds";

const faq = [
  { q: "What is the typical realtor commission in Quebec?", a: "There is no fixed rate. The commission usually takes the form of a percentage of the sale price, agreed between the seller and their broker before listing. No rate is regulated. GST and QST are generally added to this amount." },
  { q: "Is the commission regulated by the OACIQ?", a: "No. The OACIQ regulates professional conduct and ethics, but does not set commission rates. The amount is agreed in the brokerage contract." },
  { q: "What do commission fees cover?", a: "Price evaluation, marketing, photos, showings, negotiation, coordination with the notary and follow-up on the whole transaction. The details vary from one broker to another." },
  { q: "Are there additional costs beyond the commission?", a: "Besides the commission, the seller usually plans for an up-to-date certificate of location and mortgage discharge fees at the notary. The buyer pays the land transfer duties (welcome tax). Your broker should present these costs clearly." },
  { q: "Who pays the commission?", a: "The seller typically pays the listing broker's commission. Buyers generally do not pay a direct commission." },
  { q: "How can I compare commission rates fairly?", a: "Don't compare the percentage alone. Look at the whole picture: services offered, local experience, marketing strategy and past results." },
  { q: "Is a lower commission always better?", a: "Not necessarily. What counts is your net proceeds: the price obtained minus all costs. Time on market matters too." },
  { q: "Does commission vary by property type?", a: "Yes. A plex, a condo or a single-family home can involve different levels of complexity, which can influence the agreement." },
];

const RealtorCommissionPageEn = () => (
  <>
    <PageMeta
      title="Realtor Commission in Quebec · Guide"
      description="Understand realtor commission fees in Quebec: how they work, what's included, and what it means for selling your home in Gatineau." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">Realtor commission in Quebec</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            How much does a broker cost? What services are included? This guide explains brokerage fees in Quebec in clear terms.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Understanding" title="How is the commission calculated?" />
      <p className="prose-body mt-5">
        In Quebec, the broker's compensation is agreed upon <strong>before listing</strong> in the brokerage contract. It's typically a percentage of the final sale price. The OACIQ imposes no rate scale. GST (5%) and QST (9.975%) are generally added to the compensation.
      </p>
      <p className="prose-body mt-4">
        This fee usually covers the broker's services: market value analysis, pricing strategy, photography, marketing, showings, negotiation, and coordination through to the notary signing.
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="In practice" title="Other costs to expect" />
      <p className="prose-body mt-5">
        Beyond the commission, a real estate sale involves other costs: certificate of location, mortgage discharge at the notary and, in some cases, tax adjustments. A good broker presents <strong>the complete cost picture</strong> from day one to avoid surprises.
      </p>
      <p className="prose-body mt-4">
        Your broker should also help you calculate your <strong>net proceeds</strong>, what remains in your pocket after all costs. That's the number that counts for an informed decision.
      </p>
    </ContentBlock>

    <InlineCTA
      text="First step: find out your property's market value. It's free."
      buttonLabel="Free Home Valuation →"
      href="/en/home-valuation/"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Tips" title="How to evaluate if fees are fair" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Compare the services", text: "Photos, virtual tour, targeted advertising, floor plans: look at what the percentage includes." },
          { title: "Check local experience", text: "A broker who knows Gatineau and the Outaouais backs the price with comparable sales from the area." },
          { title: "Ask for net proceeds", text: "A transparent broker will show you the complete calculation before you sign." },
          { title: "Evaluate the strategy", text: "Ask how the broker plans to set the price and defend it in negotiation." },
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
        { title: "How much does a realtor cost?", text: "Complete guide on compensation.", href: "/en/how-much-does-a-realtor-cost-in-quebec/" },
        { title: "Realtor vs selling by owner", text: "Advantages and risks compared.", href: "/en/realtor-vs-selling-by-owner-quebec/" },
        { title: "How to choose a realtor", text: "The criteria to compare.", href: "/en/how-to-choose-a-realtor/" },
        { title: "Free Home Valuation", text: "How much is your property worth?", href: "/en/home-valuation/" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Want clarity on costs?"
      text="Before you sign anything, I'll explain my compensation and the other costs. There's no commitment."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation/" },
        { label: "Talk to Yanis", href: "/en/contact/", variant: "outline" },
      ]}
      trustLine="Clarity and transparency, from the first call."
    />

    <FAQSection items={faq} />
  </>
);

export default RealtorCommissionPageEn;
