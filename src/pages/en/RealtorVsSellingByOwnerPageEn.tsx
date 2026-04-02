import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";

const faq = [
  { q: "Is it better to sell with a realtor or by owner?", a: "It depends on your experience, time availability, and risk tolerance. A broker provides visibility, negotiation, and full management — selling privately saves on commission but involves more work and risk." },
  { q: "How much can I save selling without a realtor?", a: "In theory, you save the commission. In practice, private sales often close at a lower price, which can offset the savings. MLS access and marketing reach are also reduced." },
  { q: "Is it legal to sell by owner in Quebec?", a: "Yes, private sales are legal in Quebec. However, you must still comply with all legal obligations (seller's declaration, inspections, etc.)." },
  { q: "What are the risks of selling without a broker?", a: "Underpricing, poor negotiation, documentation errors, limited exposure, potential legal disputes, and significant stress." },
  { q: "Can a broker actually sell for more?", a: "Yes — through a data-driven pricing strategy, maximum MLS exposure, professional photography, staging advice, and expert negotiation." },
  { q: "What services does a broker provide vs selling alone?", a: "Professional valuation, MLS listing, photos, marketing, showing management, negotiation, offer drafting, and notary coordination. Alone, you handle everything yourself." },
  { q: "How do I decide if I need a broker?", a: "If you have the time, legal knowledge, and ability to negotiate firmly, private sale is an option. Otherwise, a broker can improve your result and peace of mind." },
  { q: "Do buyers prefer sellers who have a broker?", a: "Many buyers (and their brokers) prefer working with a listing broker because it simplifies negotiation and reduces misunderstandings." },
];

const RealtorVsSellingByOwnerPageEn = () => (
  <>
    <PageMeta
      title="Realtor vs Selling by Owner in Quebec | YGS"
      description="Honest comparison between selling with a realtor or by owner in Quebec. Advantages, risks, and what works best for your situation in Gatineau."
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
          <h1 className="text-primary-foreground">Realtor vs selling by owner in Quebec</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/50">
            Both options are legitimate. Here's an honest comparison to help you make the right choice for your situation.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Comparison" title="The advantages of each option" />
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-[1rem] font-semibold mb-3">With a realtor</h3>
          <ul className="space-y-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
            <li>✓ MLS access and maximum visibility</li>
            <li>✓ Data-driven pricing strategy</li>
            <li>✓ Professional photos and targeted marketing</li>
            <li>✓ Expert negotiation and legal protection</li>
            <li>✓ Full coordination through to closing</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[1rem] font-semibold mb-3">Selling by owner</h3>
          <ul className="space-y-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
            <li>✓ No commission to pay</li>
            <li>✓ Full control of the process</li>
            <li>✗ Reduced visibility (no MLS)</li>
            <li>✗ Risk of underpricing</li>
            <li>✗ Full management on your shoulders</li>
          </ul>
        </div>
      </div>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Reality" title="What you really need to consider" />
      <p className="prose-body mt-5">
        The question isn't just "how much can I save?" but rather "what will my net result be?" A skilled broker can often achieve a sale price that more than compensates for the commission — especially in a market like Gatineau.
      </p>
      <p className="prose-body mt-4">
        Private sales can work if you have the time, knowledge, and negotiation skills. But for most sellers, a local professional reduces stress, risk, and time on market.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Curious about your property's value? Get a free estimate in 24 hours."
      buttonLabel="Free Home Valuation →"
      href="/en/home-valuation"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Risks" title="Risks of selling without a broker" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Underpricing", text: "Without access to comparables and market analysis, you risk undervaluing your property." },
          { title: "Limited exposure", text: "Without MLS, your property reaches far fewer potential buyers." },
          { title: "Direct negotiation", text: "Negotiating alone against a buyer (or their broker) can be disadvantageous without experience." },
          { title: "Administrative errors", text: "Real estate documentation is complex — a mistake can lead to costly disputes." },
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
        { title: "How much does a realtor cost?", text: "Guide on compensation.", href: "/en/how-much-does-a-realtor-cost-in-quebec" },
        { title: "Realtor commission in Quebec", text: "Details on fees and services.", href: "/en/realtor-commission-quebec" },
        { title: "Sell in Gatineau", text: "Strategy and support.", href: "/en/sell" },
        { title: "Free Home Valuation", text: "How much is your property worth?", href: "/en/home-valuation" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Still deciding?"
      text="Let's discuss your situation — no commitment. I'll help you understand your options and make the best decision."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation" },
        { label: "Talk to Yanis", href: "/en/contact", variant: "outline" },
      ]}
      trustLine="Transparent guidance, at your pace."
    />

    <FAQSection items={faq} />
  </>
);

export default RealtorVsSellingByOwnerPageEn;
