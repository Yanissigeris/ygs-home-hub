import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-combien-courtier.webp";
import { heroBgStyle } from "@/lib/hero-backgrounds";

const faq = [
  { q: "How much does a realtor cost in Quebec?", a: "There is no fixed rate. The compensation is negotiated between the seller and the broker, then written into the brokerage contract before listing. It usually takes the form of a percentage of the sale price." },
  { q: "Who pays the broker's commission?", a: "In practice, the seller pays the listing broker's compensation, out of the sale proceeds. Buyers generally do not pay a commission directly." },
  { q: "Is the commission negotiable?", a: "Yes. The OACIQ does not set any commission rate. The amount is freely agreed between the seller and their broker, then written into the brokerage contract." },
  { q: "What services are included in the commission?", a: "Usually: price evaluation, marketing, photos, showings, negotiation and coordination through to the notary. The details vary from one broker to another. Ask for the exact list before you sign." },
  { q: "Is a broker more expensive than selling privately?", a: "Selling privately avoids the commission. With a broker, you pay for the Centris listing, an analysis of comparable sales, negotiation and follow-up through to the notary. Compare the likely net proceeds of both options." },
  { q: "Are there hidden fees with a broker?", a: "Everything you pay the broker must be set out in the brokerage contract. A serious broker also walks you through the other costs before you start (taxes on the commission, certificate of location, mortgage discharge at the notary, any mortgage prepayment penalty)." },
  { q: "Is the commission taxable?", a: "Yes, in general. GST (5%) and QST (9.975%) are added to the broker's compensation, for a total of 14.975%. Check in the brokerage contract whether the agreed amount is stated before or after taxes." },
  { q: "How much does it cost to buy with a broker?", a: "In general, buyers do not pay a commission directly. In most cases, the buyer's broker is paid out of the compensation set on the seller's side. If you sign a buyer brokerage contract, read its compensation clause first." },
  { q: "How do I know if the commission is fair?", a: "Compare the services included and the plan proposed for your property. The lowest rate does not always produce the highest net proceeds. Ask for a written estimate of what you will keep after costs." },
];

const HowMuchRealtorCostPageEn = () => (
  <>
    <PageMeta
      title="How Much Does a Realtor Cost in Quebec?"
      description="Understand how realtor compensation works in Quebec. Commission structure, services included, and what it means for your sale in Gatineau." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">How much does a realtor cost in Quebec?</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            Broker compensation is one of the first questions sellers ask. This guide explains how it works in Quebec, in plain terms.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Understanding" title="How does the commission work?" />
      <p className="prose-body mt-5">
        In Quebec, the real estate broker's compensation is agreed between the seller and the broker <strong>before listing</strong>. It typically takes the form of a percentage of the final sale price. No rate is imposed. The amount is negotiated and written into the brokerage contract, and GST and QST are generally added to it.
      </p>
      <p className="prose-body mt-4">
        It usually covers the broker's services: market value analysis, pricing strategy, professional photography, marketing, showings, negotiation, and coordination through to the notary.
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="In practice" title="What this means for you" />
      <p className="prose-body mt-5">
        Before signing a brokerage contract, ask the broker to explain their compensation and the services included. Also ask for the list of other costs to plan for, such as the certificate of location and the mortgage discharge at the notary.
      </p>
      <p className="prose-body mt-4">
        The right question: how much will you keep after the sale? A broker who knows your area can set a price backed by comparable sales and defend that price in negotiation.
      </p>
    </ContentBlock>

    <InlineCTA
      text="First step: find out your property's value. It's free and no commitment is required."
      buttonLabel="Free Home Valuation →"
      href="/en/home-valuation/"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Factors" title="What influences the cost?" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Property type", text: "A single-family home, a condo or a plex do not require the same work. The complexity of the file can influence the agreement." },
          { title: "Local market", text: "Market conditions in the Outaouais influence strategy and time to sell." },
          { title: "Services offered", text: "Professional photos, virtual tour, floor plans and targeted advertising: the level of service varies from one broker to another." },
          { title: "Broker's experience", text: "A broker who knows your area well can better support your price with comparable sales." },
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
        { title: "How to choose a realtor", text: "The criteria to compare before you sign.", href: "/en/how-to-choose-a-realtor/" },
        { title: "Verify a broker (OACIQ)", text: "How to verify a broker is in good standing.", href: "/en/oaciq-find-a-broker/" },
        { title: "Sell in Gatineau", text: "Strategy and support for sellers.", href: "/en/sell/" },
        { title: "Free Home Valuation", text: "How much is your property worth?", href: "/en/home-valuation/" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Want to understand your options?"
      text="Before you sign anything, I'll explain my compensation and the services included. I give you the numbers and the options. You decide."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation/" },
        { label: "Talk to Yanis", href: "/en/contact/", variant: "outline" },
      ]}
      trustLine="Clear answers, no commitment."
    />

    <FAQSection items={faq} />
  </>
);

export default HowMuchRealtorCostPageEn;
