import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-verifier-oaciq.webp";

const faq = [
  { q: "What is the OACIQ?", a: "The Organisme d'autoréglementation du courtage immobilier du Québec (OACIQ) is the regulatory body for real estate brokers in Quebec. It protects the public by ensuring brokers meet professional standards." },
  { q: "How do I verify a broker with the OACIQ?", a: "Visit the OACIQ registry online and search by name. You can check a broker's licence status, any disciplinary history, and their current standing." },
  { q: "Why should I verify my broker?", a: "It ensures your broker is legally authorized to practice, has no unresolved complaints, and meets all professional requirements. It's a simple step that protects you." },
  { q: "What does a valid OACIQ licence mean?", a: "It means the broker has completed the required training, holds professional liability insurance, and is subject to the OACIQ's code of ethics." },
  { q: "Can a broker practice without an OACIQ licence?", a: "No. In Quebec, it is illegal to act as a real estate broker without a valid OACIQ licence. Anyone doing so is acting outside the law." },
  { q: "What if I find a complaint against a broker?", a: "A complaint doesn't necessarily mean wrongdoing. Review the details and outcome. You can also contact the OACIQ directly for more information." },
  { q: "Is the OACIQ registry free to use?", a: "Yes. The OACIQ public registry is free and accessible online. You can search for any broker licensed in Quebec." },
  { q: "Does the OACIQ set commission rates?", a: "No. The OACIQ regulates professional conduct and ethics, but does not set or regulate commission rates. Fees are agreed between the parties." },
];

const OaciqFindBrokerPageEn = () => (
  <>
    <PageMeta
      title="Verify a Real Estate Broker with the OACIQ"
      description="How to verify a real estate broker's licence in Quebec using the OACIQ registry. Protect yourself and ensure your broker is in good standing." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={{ "--hero-bg-image" as never: `url(${heroImg})` }}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="label-overline mb-4 text-primary-foreground/25">Guide · Trust & verification</p>
          <h1 className="text-primary-foreground">Verify a broker with the OACIQ</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/50">
            Before working with a real estate broker in Quebec, you can verify their licence and standing. Here's how and why it matters.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Why" title="Why verify your broker?" />
      <p className="prose-body mt-5">
        The OACIQ protects the public by ensuring all brokers meet professional standards. Verifying your broker's licence confirms they have the <strong>required training, insurance, and ethical obligations</strong> to act in your interest.
      </p>
      <p className="prose-body mt-4">
        It's a quick and free step that gives you peace of mind — especially for the largest financial transaction of your life.
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="How" title="How to verify a broker" />
      <div className="mt-5 space-y-3">
        {[
          { title: "1. Visit the OACIQ registry", text: "Go to oaciq.com and use the public registry search." },
          { title: "2. Search by name", text: "Enter the broker's full name to find their profile." },
          { title: "3. Check licence status", text: "Confirm the licence is active and in good standing." },
          { title: "4. Review any history", text: "Check for any disciplinary decisions or complaints on file." },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-border/40 bg-card p-4">
            <h3 className="text-[0.9375rem] font-semibold">{item.title}</h3>
            <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </ContentBlock>

    <InlineCTA
      text="Want to work with a verified, experienced local broker? Let's talk."
      buttonLabel="Contact Yanis →"
      href="/en/contact"
    />

    <ContentBlock narrow>
      <SectionHeading overline="What it means" title="What an OACIQ licence guarantees" />
      <p className="prose-body mt-5">
        A valid OACIQ licence means your broker has completed <strong>recognized professional training</strong>, carries mandatory liability insurance, and is bound by a strict code of ethics that prioritizes your interests.
      </p>
      <p className="prose-body mt-4">
        This gives you a formal recourse mechanism if something goes wrong — something that doesn't exist with unlicensed individuals or private sellers acting outside the regulated framework.
      </p>
    </ContentBlock>

    <RelatedPages
      overline="Explore"
      title="Related pages"
      pages={[
        { title: "How to choose a realtor", text: "Essential criteria for choosing.", href: "/en/how-to-choose-a-realtor" },
        { title: "How much does a realtor cost?", text: "Understanding compensation.", href: "/en/how-much-does-a-realtor-cost-in-quebec" },
        { title: "Sell in Gatineau", text: "Strategy for sellers.", href: "/en/sell" },
        { title: "About Yanis", text: "Experience and contact.", href: "/en/contact" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Work with a trusted broker"
      text="Licensed, experienced, and transparent. Let's discuss your project — no commitment required."
      buttons={[
        { label: "Free Valuation", href: "/en/home-valuation" },
        { label: "Talk to Yanis", href: "/en/contact", variant: "outline" },
      ]}
      trustLine="OACIQ-licensed · Platinum Club · Hall of Fame"
    />

    <FAQSection items={faq} />
  </>
);

export default OaciqFindBrokerPageEn;
