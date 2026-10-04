import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-comment-choisir.webp";
import { heroBgStyle } from "@/lib/hero-backgrounds";

const faq = [
  { q: "How do I choose the right realtor?", a: "Compare their knowledge of your area, their pricing strategy, how they communicate and how open they are about fees. Choose the one who gives you a clear plan backed by comparable sales." },
  { q: "Should I always choose the broker who suggests the highest price?", a: "No. An inflated price meant to win your listing can leave the property sitting on the market and lead to price reductions. Ask instead for a price backed by recent comparable sales in your area." },
  { q: "How many brokers should I meet?", a: "Meeting two or three is good practice. Compare their strategy and transparency, in addition to the commission they ask." },
  { q: "How do I check that a broker is in good standing?", a: "Search the OACIQ register of licence holders on oaciq.com. It shows whether the licence is valid, suspended or subject to conditions. The register also shows whether the broker has faced disciplinary measures. The decisions themselves are published free on citoyens.soquij.qc.ca." },
  { q: "Is a local broker an advantage?", a: "Often, yes. A broker who knows your neighbourhood understands comparable sales and what local buyers expect. That helps them set a fair price and defend it in negotiation." },
  { q: "What questions should I ask a broker before signing?", a: "Ask: What is your pricing strategy? How will you market my property? What is your commission? How do you communicate with clients? Can you show me recent results?" },
  { q: "Is the cheapest broker the best choice?", a: "Not necessarily. What counts is your net result: a higher sale price can offset a slightly higher commission. The commission is negotiated before the brokerage contract is signed." },
  { q: "Can I change brokers if it isn't working?", a: "The brokerage contract sets its term and the conditions for ending it. If you are an individual and the residential property has fewer than 5 units, you can also cancel it at no cost within 3 days of receiving your signed copy. Read that clause with the broker before signing. If a problem comes up, talk to the broker first, then to the agency's executive officer if needed." },
  { q: "What's the difference between a realtor and a broker?", a: "REALTOR® is a trademark of the Canadian Real Estate Association that identifies its members. In Quebec, the licensed professional is the real estate broker (courtier immobilier), who must hold an OACIQ licence." },
];

const HowToChooseRealtorPageEn = () => (
  <>
    <PageMeta
      title="How to Choose a Realtor in Quebec"
      description="Criteria for choosing the right real estate broker in Quebec. Checklist, tips, and what to look for when selecting a realtor in Gatineau." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">How to choose a realtor in Quebec</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            A good broker gives you a clear plan and a price backed by comparable sales. This guide helps you compare brokers on concrete criteria.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Checklist" title="8 criteria for choosing your broker" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Local knowledge", text: "Does the broker know your neighbourhood and recent sales near you?" },
          { title: "Clear communication", text: "Are they easy to reach, and do they answer clearly? Do you feel heard?" },
          { title: "Pricing strategy", text: "Do they propose a price backed by comparable sales, or an inflated number to win your listing?" },
          { title: "Marketing plan", text: "Do they have a concrete plan for your property: photos, virtual tour, online exposure, targeted advertising?" },
          { title: "Negotiation", text: "Do they have the experience to defend your interests with buyers and their brokers?" },
          { title: "Transparency", text: "Do they clearly explain their commission, the costs, the process and what to expect?" },
          { title: "Verifiable results", text: "Can they show you recent sales and client testimonials?" },
          { title: "Personal trust", text: "Beyond skills, is this someone you trust for a transaction this important?" },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-border/40 bg-card p-4">
            <h3 className="text-[0.9375rem] font-semibold">{item.title}</h3>
            <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </ContentBlock>

    <InlineCTA
      text="Looking for a local broker in the Outaouais? Let's talk about your project."
      buttonLabel="Talk to Yanis →"
      href="/en/contact/"
    />

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Advice" title="Two pitfalls to avoid, and one key question" />
      <p className="prose-body mt-5">
        The first pitfall is choosing on commission alone. What counts is your <strong>net result</strong>, the price you receive minus all costs. The second is choosing the broker who quotes the highest price, since some estimates are inflated to win the listing.
      </p>
      <p className="prose-body mt-4">
        Beyond the checklist, one question remains: <strong>do I trust this person to defend my interests?</strong> A good broker listens and gives you straight answers, even when they are not the ones you hoped for.
      </p>
    </ContentBlock>

    <RelatedPages
      overline="Keep reading"
      title="Related pages"
      pages={[
        { title: "Verify a broker (OACIQ)", text: "How to check a broker's licence.", href: "/en/oaciq-find-a-broker/" },
        { title: "How much does a realtor cost?", text: "Understanding compensation.", href: "/en/how-much-does-a-realtor-cost-in-quebec/" },
        { title: "Sell in Gatineau", text: "Strategy and support for sellers.", href: "/en/sell/" },
        { title: "Contact", text: "Discuss your project.", href: "/en/contact/" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Want to meet a local broker?"
      text="Let's discuss your project and your options, with no commitment."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation/" },
        { label: "Talk to Yanis", href: "/en/contact/", variant: "outline" },
      ]}
      trustLine="Over 9 years in the Outaouais · Transparent from the start."
    />

    <FAQSection items={faq} />
  </>
);

export default HowToChooseRealtorPageEn;
