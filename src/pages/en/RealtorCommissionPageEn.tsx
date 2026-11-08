import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import heroImg from "@/assets/hero-frais-courtage.webp";
import { heroBgStyle } from "@/lib/hero-backgrounds";

const faq = [
  { q: "How is a realtor's commission calculated in Quebec?", a: "Most often, it's a percentage of the accepted sale price. You negotiate it with your broker and it goes into the brokerage contract, then taxes are added. A fixed amount or another method is also possible." },
  { q: "Is the commission rate regulated in Quebec?", a: "No. Quebec law doesn't set a rate, and neither does the OACIQ. The percentage is negotiated between you and your broker." },
  { q: "Does the percentage apply to the asking price?", a: "No. It applies to the price in the promise to purchase you accept. If you list at $500,000 and accept $495,000, the calculation is based on $495,000." },
  { q: "How much tax is added to the commission?", a: "GST at 5% and QST at 9.975%, so 14.975% of the commission amount. On a $10,000 commission, that comes to $1,497.50 in taxes." },
  { q: "When is the commission paid?", a: "It's paid after the deed of sale is signed, out of the sale proceeds. The right to the commission starts earlier, once an accepted promise to purchase has all its conditions met." },
  { q: "Do I owe the commission if I refuse an offer?", a: "Yes, if the offer meets the sale conditions set out in your brokerage contract. It's one of the four cases in clause 7.1 of the OACIQ contract." },
  { q: "What if I sell after my brokerage contract ends?", a: "The commission can be owed if you sell within 180 days to someone who showed interest in the property during the contract. It isn't owed if you signed an exclusive contract with another broker in good faith." },
  { q: "Is the commission shared with the buyer's broker?", a: "Yes. When the buyer has a broker, the seller's broker shares the remuneration with them." },
];

const cases = [
  { title: "A promise to purchase is accepted", text: "During the contract, an agreement to sell is reached and all its conditions are met. Only the deed of sale is left to sign." },
  { title: "You refuse a matching offer", text: "A promise to purchase meets the sale conditions in your contract, but you turn it down." },
  { title: "You sell after the contract ends", text: "Within 180 days after the contract ends, you sell to someone who showed interest in the property during the contract. This doesn't apply if you signed an exclusive contract with another broker in good faith." },
  { title: "You block the sale", text: "For example, you prevent showings or can't be reached to receive an offer." },
];

const RealtorCommissionPageEn = () => (
  <>
    <PageMeta
      title="Realtor Commission in Quebec: Calculation and Taxes"
      description="How a realtor's commission is calculated in Quebec: which price the percentage applies to and when it's owed, with a worked tax example." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <div
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">Realtor commission in Quebec: how it's calculated</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            Which price the percentage applies to and when the commission becomes owed, based on the OACIQ brokerage contract.
          </p>
        </div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="The calculation" title="Which price does the percentage apply to?" />
      <p className="prose-body mt-5">
        In Quebec, no law sets the broker's commission, and neither does the OACIQ. You negotiate it with your broker, and it goes into the brokerage contract before the listing. Most often, it's a percentage of the sale price.
      </p>
      <p className="prose-body mt-4">
        That percentage applies to the <strong>price you accept</strong>, not the asking price. The OACIQ gives this example: for a home listed at $500,000 and sold for $495,000, the commission is based on $495,000.
      </p>
      <p className="prose-body mt-4">
        Other formulas exist. The contract can set a fixed amount, whatever the sale price. An hourly rate or another method goes in an annex to the contract, called Annex RC.
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Taxes" title="How much do GST and QST add?" />
      <p className="prose-body mt-5">
        The commission is taxable. GST (5%) and QST (9.975%) are added to the agreed amount, for 14.975% more.
      </p>
      <div className="mt-5 rounded-xl border border-border/40 bg-card p-5">
        <p className="text-[0.9375rem] font-semibold">Worked example</p>
        <p className="mt-2 text-[0.9375rem] leading-[1.6]">
          On a $10,000 commission, GST comes to $500 and QST to $997.50. The total paid is $11,497.50.
        </p>
        <p className="mt-2 text-[0.8125rem] leading-[1.6] text-muted-foreground">
          This amount only shows how the taxes work. Your actual commission depends on your agreement with your broker.
        </p>
      </div>
      <p className="prose-body mt-5">
        Check whether the contract states the amount before or after taxes. To see what selling will cost you in total, with the seller's other costs, read{" "}
        <Link to="/en/how-much-does-a-realtor-cost-in-quebec/" className="underline underline-offset-2">how much a realtor costs in Quebec</Link>.
      </p>
    </ContentBlock>

    <ContentBlock narrow>
      <SectionHeading overline="Payment rules" title="When does the commission become owed?" />
      <p className="prose-body mt-5">
        The OACIQ exclusive brokerage contract sets out four situations, in clause 7.1.
      </p>
      <div className="mt-5 space-y-3">
        {cases.map((item) => (
          <div key={item.title} className="rounded-xl border border-border/40 bg-card p-4">
            <h3 className="text-[0.9375rem] font-semibold">{item.title}</h3>
            <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="prose-body mt-5">
        In practice, the commission is paid after the deed of sale is signed at the notary, out of the sale proceeds. If the buyer has their own broker, the seller's broker shares the remuneration with them.
      </p>
      <p className="text-[0.8125rem] text-muted-foreground pt-3">
        Source: OACIQ, remuneration payable by the seller (exclusive brokerage contract, sale).
      </p>
    </ContentBlock>

    <InlineCTA
      text="If you'd like, I can prepare an estimate of what you'd have left in your pocket after the sale."
      buttonLabel="Ask for an estimate →"
      href="/en/contact/"
    />

    <RelatedPages
      overline="Keep reading"
      title="Related pages"
      pages={[
        { title: "How much does a realtor cost?", text: "To sell or to buy, and what you keep.", href: "/en/how-much-does-a-realtor-cost-in-quebec/" },
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
        { label: "Free Home Valuation", href: "/en/home-valuation/" },
        { label: "Talk to Yanis", href: "/en/contact/", variant: "outline" },
      ]}
      trustLine="Clarity and transparency, from the first call."
    />

    <FAQSection items={faq} />
  </>
);

export default RealtorCommissionPageEn;
