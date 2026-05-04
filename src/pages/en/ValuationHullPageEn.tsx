import PageMeta from "@/components/PageMeta";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import BenefitsList from "@/components/BenefitsList";
import FunnelNextStep from "@/components/FunnelNextStep";
import ValuationForm from "@/components/ValuationForm";
import { Clock, Shield, CheckCircle2, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import yanisPhoto from "@/assets/yanis-hero-cutout.webp";
import heroImg from "@/assets/hero-valuation-hull.webp";

const benefits = [
  "Realistic value range based on recent Hull sales",
  "Pricing advice adapted to your Hull neighborhood",
  "Your property's strengths to highlight — condo, plex or house",
  "What to fix and what's worth it in the Hull market",
  "Next steps possible, no commitment",
];

const trustBullets = [
  { icon: Shield, text: "Free and no commitment" },
  { icon: Clock, text: "Personalized response in 24h" },
  { icon: CheckCircle2, text: "Based on recent Hull sales" },
];

const faq = [
  { q: "How do I get a home valuation in Hull?", a: "Fill out the form on this page with your Hull property address. I'll get back to you within 24h with an analysis based on recent comparable sales." },
  { q: "Is the valuation really free?", a: "Yes, it's free, confidential and no commitment. You receive a clear report — no obligation to sell." },
  { q: "How much is my house worth in Hull?", a: "The value depends on your street, property type (condo, plex, single-family) and recent sales in your Hull neighborhood." },
  { q: "What is the valuation based on?", a: "I use recent sales on your street and in your Hull area, your property's condition, lot size and local market conditions." },
  { q: "How is this different from an online valuation?", a: "Online tools give approximate estimates. My valuation accounts for Hull's local specifics and your property's actual condition." },
  { q: "How long does the valuation take?", a: "You receive a personalized response within 24 hours. For a more detailed analysis with a visit in Hull, we schedule an appointment." },
  { q: "Do you need to visit my home for the valuation?", a: "Not necessarily for a first estimate. A visit can be arranged for a more detailed report — no commitment." },
  { q: "Does the valuation commit me to selling?", a: "No. Many Hull homeowners request a valuation simply to know their value, without any immediate intention to sell." },
  { q: "Are Hull condos covered?", a: "Yes — I cover all property types in Hull: condos, plexes, single-family homes, regardless of the neighborhood." },
  { q: "What do I do after receiving my valuation?", a: "You'll have the numbers and options. If you want to go further, I can prepare a complete seller plan for Hull." },
];

const afterSteps = [
  { title: "Sell in Hull", text: "Go further — get a complete plan to sell your Hull property.", href: "/en/sell-house-hull", cta: "See the process", highlight: true },
  { title: "Talk to Yanis", text: "Discuss your situation and options — no commitment.", href: "/en/contact", cta: "Book a call" },
];

const anim = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const ValuationHullPageEn = () => {
  return (
    <>
      <PageMeta
        title="Home Valuation Hull | Free, No Commitment"
        description="Get a free home valuation in Hull. Analysis based on recent sales in your neighborhood — response within 24h, no commitment."
      ogImage="https://yanisgauthier.com/og/og-eval.jpg" />

      <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={{ ["--hero-bg-image" as any]: `url(${heroImg})` }}>
        {/* Left-side text-protect — guarantees headline/subtitle legibility regardless of photo brightness */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: "linear-gradient(90deg, rgba(23,48,59,0.92) 0%, rgba(23,48,59,0.78) 30%, rgba(23,48,59,0.45) 50%, rgba(23,48,59,0.10) 70%, transparent 85%)",
          }}
        />
        {/* Mobile vertical text-protect */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background: "linear-gradient(180deg, rgba(23,48,59,0.85) 0%, rgba(23,48,59,0.70) 50%, rgba(23,48,59,0.55) 100%)",
          }}
        />
        <div className="section-container relative grid items-center gap-8 py-12 md:grid-cols-[1fr_420px] md:py-20 lg:gap-14">
          <motion.div {...anim}>
            <p className="label-overline mb-4 text-primary-foreground/65">Free valuation · Hull</p>
            <h1 className="text-primary-foreground">How much is your Hull property worth?</h1>
            <p className="mt-4 max-w-md text-[1.0625rem] leading-[1.6] text-primary-foreground/85">
              Receive a personalized valuation based on recent sales in your Hull neighborhood — free, confidential and no commitment.
            </p>
            <ul className="mt-6 space-y-2">
              {trustBullets.map((b) => (
                <li key={b.text} className="flex items-center gap-2 text-[0.875rem] text-primary-foreground/75">
                  <b.icon size={15} className="text-accent" />
                  {b.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...anim} transition={{ ...anim.transition, delay: 0.15 }}>
            <ValuationForm lang="en" variant="card" locationTag="Hull" addressPlaceholder="123 Example St, Hull" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-[44rem]">
          <motion.div {...anim} className="flex items-center gap-4 mb-6">
            <img src={yanisPhoto} alt="Yanis Gauthier" width={56} height={56} className="h-14 w-14 rounded-full object-cover" loading="lazy" decoding="async" />
            <div>
              <p className="font-semibold text-[0.9375rem]">Yanis Gauthier-Sigeris</p>
              <p className="text-[0.8125rem] text-muted-foreground flex items-center gap-1"><BadgeCheck size={13} className="text-accent" /> Real estate broker · Hull & Outaouais</p>
            </div>
          </motion.div>
          <BenefitsList title="What you receive" items={benefits} />
        </div>
      </section>

      <RelatedPages
        overline="Explore"
        title="Related pages"
        pages={[
          { title: "Sell in Hull", text: "Process and strategy for selling in Hull.", href: "/en/sell-house-hull" },
          { title: "Hull — neighborhood profile", text: "Market, profile and trends.", href: "/en/hull" },
          { title: "Home valuation Gatineau", text: "Valuation for all of Outaouais.", href: "/en/home-valuation" },
          { title: "Outaouais agent", text: "Services across the region.", href: "/en/outaouais-real-estate-agent" },
        ]}
        background="alt"
      />

      <FunnelNextStep overline="What's next?" title="You have your valuation — here's what comes next" subtitle="Choose the step that fits your situation." steps={afterSteps} />

      <FAQSection items={faq} />
    </>
  );
};

export default ValuationHullPageEn;
