import { Link } from "react-router-dom";
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
  { q: "How much does a realtor cost in Quebec?", a: "There's no set rate. The seller negotiates the commission with their broker, and it goes into the brokerage contract. Buyers often have nothing to pay directly." },
  { q: "Who pays the realtor, the seller or the buyer?", a: "The seller pays their broker's commission, out of the sale proceeds. Most often, the buyer's broker is paid from that commission." },
  { q: "Is the commission negotiable?", a: "Yes. The OACIQ sets no commission rate. You and your broker agree on the amount freely, then it's written into the brokerage contract." },
  { q: "What services are included in the commission?", a: "Usually the pricing analysis, the Centris listing, photos, showings and negotiation, up to the signing at the notary. The details vary from one broker to another. Ask for the exact list before you sign." },
  { q: "How much does a realtor cost to buy a home?", a: "In many cases, nothing. If the remuneration in the seller's contract is equal to or higher than the one in your buyer's brokerage contract, you have nothing to pay. Otherwise, the remuneration can be financed through your mortgage." },
  { q: "What other costs does the seller pay?", a: "Plan for an up-to-date certificate of location and the mortgage discharge fees at the notary. If you pay off your mortgage early, your lender may also charge a penalty." },
  { q: "Is a realtor more expensive than selling privately?", a: "Selling privately avoids the commission. With a broker, you pay for the Centris listing, the comparable sales analysis, the negotiation and the follow-up to the notary. Compare the likely net amount of both options." },
  { q: "Can you estimate what I'll have left after the sale?", a: "Yes. If you'd like, I'll prepare an estimate of what you'd have left in your pocket after the commission and the other costs." },
];

const HowMuchRealtorCostPageEn = () => (
  <>
    <PageMeta
      title="How Much Does a Realtor Cost in Quebec?"
      description="What a realtor costs in Quebec to sell or to buy, the seller's other costs and what you have left after the sale." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">How much does a realtor cost in Quebec, to sell or to buy?</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            What you pay in total as a seller or as a buyer, and what you have left after the sale.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="First meeting" title="The two questions I get first" />
      <p className="prose-body mt-5">
        When I meet a seller, the first question is always about my commission rate. Next comes what's included. Both answers matter, but neither tells you how much you'll have left.
      </p>
      <p className="prose-body mt-4">
        So if you'd like, I'll prepare an estimate of what you'd have left in your pocket after the sale. You see that number before you sign anything.
      </p>
      <p className="text-[0.8125rem] text-muted-foreground pt-3">
        <Link to="/en/contact/" className="underline underline-offset-2 hover:text-foreground">Yanis Gauthier-Sigeris</Link>, real estate broker · November 2026
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Selling" title="What a realtor costs when you sell" />
      <p className="prose-body mt-5">
        The seller pays their broker's commission. The amount is negotiated and written into the brokerage contract, with taxes on top. The calculation is explained in the guide to{" "}
        <Link to="/en/realtor-commission-quebec/" className="underline underline-offset-2">realtor commission in Quebec</Link>.
      </p>
      <p className="prose-body mt-4">
        What's included varies from one broker to another. It usually covers the pricing analysis, the Centris listing, photos, showings and negotiation, up to the signing at the notary. Ask for the full list before you sign.
      </p>
      <h3 className="mt-6 text-[1.0625rem] font-semibold">The seller's other costs</h3>
      <p className="prose-body mt-2">
        A sale costs more than the commission. Also plan for an up-to-date certificate of location and the mortgage discharge fees at the notary. If you pay off your mortgage early, your lender may charge a penalty.
      </p>
    </ContentBlock>

    <ContentBlock narrow>
      <SectionHeading overline="Buying" title="What a realtor costs when you buy" />
      <p className="prose-body mt-5">
        Most often, the buyer pays nothing directly. Their broker is paid from the remuneration set out in the seller's contract.
      </p>
      <p className="prose-body mt-4">
        If you sign a buyer's brokerage contract, read its remuneration clause. When the remuneration on the seller's side is equal to or higher than the one in your contract, you have nothing to pay. If an amount is left to pay, it can be financed through your mortgage.
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Selling privately?" title="Realtor or private sale: compare what you keep" />
      <p className="prose-body mt-5">
        Selling privately avoids the commission. The price you get and the time it takes can change, though. The right comparison is the net amount of both options once every cost is paid. Both approaches are compared in{" "}
        <Link to="/en/realtor-vs-selling-by-owner-quebec/" className="underline underline-offset-2">realtor vs selling by owner</Link>.
      </p>
      <div className="mt-5 rounded-xl border border-border/40 bg-card p-4">
        <h3 className="text-[0.9375rem] font-semibold">Looking for a mortgage broker?</h3>
        <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">
          That's a different job: a mortgage broker works on your loan, not on selling or buying the property. This page is about real estate brokers.
        </p>
      </div>
    </ContentBlock>

    <InlineCTA
      text="First step: find out what your property is worth. It's free, with no commitment."
      buttonLabel="Free valuation →"
      href="/en/home-valuation/"
    />

    <RelatedPages
      overline="Keep reading"
      title="Related pages"
      pages={[
        { title: "Realtor commission", text: "Commission and taxes, calculated step by step.", href: "/en/realtor-commission-quebec/" },
        { title: "How to choose a realtor", text: "The criteria to compare before you sign.", href: "/en/how-to-choose-a-realtor/" },
        { title: "Verify a broker (OACIQ)", text: "How to verify a broker is in good standing.", href: "/en/oaciq-find-a-broker/" },
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
