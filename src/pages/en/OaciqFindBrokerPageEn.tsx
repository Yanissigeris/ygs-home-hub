import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-verifier-oaciq.webp";
import { heroBgStyle } from "@/lib/hero-backgrounds";

const faq = [
  { q: "How do I verify a real estate broker in Quebec?", a: "Go to oaciq.com and search for the broker by name in the register of licence holders. The search is free. Check that the licence is valid and not suspended or subject to conditions." },
  { q: "What is the OACIQ?", a: "It is the Organisme d'autoréglementation du courtage immobilier du Québec. Its mission is to protect the public. It issues brokers' licences and makes sure the rules of the profession are followed." },
  { q: "Why verify a broker before signing?", a: "To confirm the licence is valid, with no suspension or conditions. It's a simple step that protects your transaction before you sign the brokerage contract." },
  { q: "What does a valid OACIQ licence mean?", a: "The broker passed the required training and exams and completes mandatory continuing education. They carry professional liability insurance and must follow the rules of ethics overseen by the OACIQ." },
  { q: "What if a broker isn't listed with the OACIQ?", a: "In Quebec, it is illegal to act as a real estate broker without an OACIQ licence. If the person does not appear in the register, don't sign anything and contact Info OACIQ." },
  { q: "Are all brokers in Quebec licensed by the OACIQ?", a: "Yes, it's mandatory. Any broker who practises legally in Quebec must hold a valid OACIQ licence." },
  { q: "How do I file a complaint against a real estate broker?", a: "Contact Info OACIQ by phone, or fill out the request for assistance form on oaciq.com. Depending on the situation, your request may be sent to the OACIQ syndic, who can investigate." },
  { q: "Does the OACIQ protect buyers and sellers?", a: "Yes, its mission is to protect the public. It oversees brokers' training and ethics. The OACIQ also administers the Fonds d'indemnisation du courtage immobilier (FICI), which can compensate victims of fraud, fraudulent tactics or misappropriation of funds." },
  { q: "How can I tell if a broker has a disciplinary record?", a: "The OACIQ register shows whether a licence is suspended or subject to conditions. It also shows whether the broker has faced disciplinary measures. The decisions themselves are published free on citoyens.soquij.qc.ca." },
  { q: "Does the OACIQ set commission rates?", a: "No. The OACIQ oversees brokers' practice and ethics, but it does not set their compensation. It is negotiated between the client and the broker, then written into the brokerage contract." },
];

const OaciqFindBrokerPageEn = () => (
  <>
    <PageMeta
      title="Verify a Real Estate Broker with the OACIQ"
      description="How to verify a real estate broker's licence in Quebec using the OACIQ registry. Protect yourself and ensure your broker is in good standing." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">Verify a broker with the OACIQ</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            Before you entrust the sale or purchase of your property to a broker, check that they are in good standing. It's free and takes a few minutes.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Why" title="Why verify your broker?" />
      <p className="prose-body mt-5">
        In Quebec, every real estate broker must hold a valid licence from the <strong>OACIQ</strong> (Organisme d'autoréglementation du courtage immobilier du Québec). The OACIQ oversees their training and ethics, and it offers the public recourse if a problem arises.
      </p>
      <p className="prose-body mt-4">
        Checking a broker before you sign a brokerage contract is a basic step to make sure your transaction is in good hands.
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="How" title="4 steps to verify a broker" />
      <div className="mt-5 space-y-3">
        {[
          { title: "1. Visit the OACIQ register", text: "Go to oaciq.com and use the search tool of the register of licence holders." },
          { title: "2. Search by name", text: "Enter the broker's name to see their profile, with their licence and the agency where they work." },
          { title: "3. Check licence status", text: "Make sure the licence is active, not suspended or subject to conditions." },
          { title: "4. Review the history", text: "Check whether the register reports any disciplinary measures. The decisions are published on citoyens.soquij.qc.ca." },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-border/40 bg-card p-4">
            <h3 className="text-[0.9375rem] font-semibold">{item.title}</h3>
            <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </ContentBlock>

    <InlineCTA
      text="Looking for a broker in the Outaouais? Let's talk about your project."
      buttonLabel="Contact Yanis →"
      href="/en/contact/"
    />

    <ContentBlock narrow>
      <SectionHeading overline="What the OACIQ oversees" title="The protections for you" />
      <p className="prose-body mt-5">
        A valid OACIQ licence means your broker passed the <strong>required training</strong> and completes mandatory continuing education. Brokers must follow rules of ethics toward their clients and carry professional liability insurance for errors or negligence.
      </p>
      <p className="prose-body mt-4">
        The OACIQ also administers the FICI, an indemnity fund that can compensate victims of fraud, fraudulent tactics or misappropriation of funds by a broker.
      </p>
    </ContentBlock>

    <RelatedPages
      overline="Keep reading"
      title="Related pages"
      pages={[
        { title: "How to choose a realtor", text: "The criteria for choosing well.", href: "/en/how-to-choose-a-realtor/" },
        { title: "How much does a realtor cost?", text: "Understanding compensation.", href: "/en/how-much-does-a-realtor-cost-in-quebec/" },
        { title: "Sell in Gatineau", text: "Strategy for sellers.", href: "/en/sell/" },
        { title: "Contact", text: "Discuss your project.", href: "/en/contact/" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Want a transparent broker in good standing?"
      text="Let's discuss your project. I'll answer your questions clearly, with no pressure."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation/" },
        { label: "Talk to Yanis", href: "/en/contact/", variant: "outline" },
      ]}
      trustLine="Valid OACIQ licence · Platinum Club · RE/MAX Hall of Fame"
    />

    <FAQSection items={faq} />
  </>
);

export default OaciqFindBrokerPageEn;
