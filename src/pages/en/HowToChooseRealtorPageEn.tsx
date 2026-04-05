import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";

const faq = [
  { q: "How do I choose the right realtor?", a: "Look for local expertise, a clear communication style, a proven marketing strategy, and strong negotiation skills. Ask for references and check their track record in your area." },
  { q: "What questions should I ask a realtor?", a: "How well do you know my neighbourhood? What's your marketing strategy? How do you communicate? What's your track record? Can I see recent sales?" },
  { q: "Is local experience important for a realtor?", a: "Absolutely. A broker who knows the neighbourhoods, the market, and the buyers in your area can price more accurately and sell faster." },
  { q: "Should I interview multiple realtors?", a: "Yes — meeting 2-3 brokers gives you a good basis for comparison. Look beyond the commission rate and evaluate the overall service and strategy." },
  { q: "How do I verify a realtor's credentials?", a: "You can verify any broker's licence and standing on the OACIQ registry. This ensures they are legally authorized to practice." },
  { q: "What's the difference between a realtor and a broker?", a: "In Quebec, real estate professionals are called 'courtiers immobiliers' (brokers). They must hold an OACIQ licence. The term 'realtor' is used more broadly in English Canada." },
  { q: "Does a higher commission mean better service?", a: "Not automatically. What matters is the strategy, the services included, the local knowledge, and the results achieved for past clients." },
  { q: "Can I change realtors if I'm not satisfied?", a: "The brokerage contract has specific terms. Discuss expectations upfront. If issues arise, communicate with your broker first — most situations can be resolved." },
];

const HowToChooseRealtorPageEn = () => (
  <>
    <PageMeta
      title="How to Choose a Realtor in Quebec"
      description="Essential criteria for choosing the right real estate broker in Quebec. Checklist, tips, and what to look for when selecting a realtor in Gatineau."
    />

    <section className="hero-gradient relative overflow-hidden">
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="label-overline mb-4 text-primary-foreground/25">Guide · Choosing a broker</p>
          <h1 className="text-primary-foreground">How to choose a realtor in Quebec</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/50">
            Choosing the right broker is one of the most important decisions in your real estate journey. Here's what to look for.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Checklist" title="What to evaluate in a realtor" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Local knowledge", text: "Do they know your neighbourhood, comparable sales, and buyer profiles in your area?" },
          { title: "Communication style", text: "Are they responsive, clear, and proactive? You'll want regular updates throughout the process." },
          { title: "Marketing strategy", text: "Professional photos, virtual tours, MLS optimization, social media — what's their plan to attract buyers?" },
          { title: "Negotiation skills", text: "How do they handle multiple offers? What's their approach to getting you the best price?" },
          { title: "Track record", text: "Ask for recent sales in your area. Look at average days on market and list-to-sale price ratios." },
          { title: "Trust and transparency", text: "A good broker explains everything upfront — fees, process, timeline, and realistic expectations." },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-border/40 bg-card p-4">
            <h3 className="text-[0.9375rem] font-semibold">{item.title}</h3>
            <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </ContentBlock>

    <InlineCTA
      text="Want to see if we're a good fit? Let's talk — no commitment required."
      buttonLabel="Book a consultation →"
      href="/en/contact"
    />

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Advice" title="Common mistakes when choosing a broker" />
      <p className="prose-body mt-5">
        Many people choose a broker based on commission alone. While cost matters, the most important factor is your <strong>net result</strong> — the price you actually receive minus all costs. A skilled broker often achieves a higher sale price that more than compensates for a slightly higher fee.
      </p>
      <p className="prose-body mt-4">
        Also avoid choosing based on the highest estimated price. Some brokers inflate valuations to win the listing. A trustworthy broker gives you a realistic, data-backed assessment from the start.
      </p>
    </ContentBlock>

    <RelatedPages
      overline="Explore"
      title="Related pages"
      pages={[
        { title: "Verify a broker (OACIQ)", text: "How to check a broker's licence.", href: "/en/oaciq-find-a-broker" },
        { title: "How much does a realtor cost?", text: "Understanding compensation.", href: "/en/how-much-does-a-realtor-cost-in-quebec" },
        { title: "Sell in Gatineau", text: "Strategy and support for sellers.", href: "/en/sell" },
        { title: "About Yanis", text: "Experience, approach, and contact.", href: "/en/contact" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Ready to find the right broker?"
      text="Let's discuss your project. I'll explain my approach, my strategy for your property, and what to expect — transparently."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation" },
        { label: "Talk to Yanis", href: "/en/contact", variant: "outline" },
      ]}
      trustLine="Local expertise, honest advice, no pressure."
    />

    <FAQSection items={faq} />
  </>
);

export default HowToChooseRealtorPageEn;
