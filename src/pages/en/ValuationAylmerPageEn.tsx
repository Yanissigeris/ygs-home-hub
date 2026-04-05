import PageMeta from "@/components/PageMeta";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import BenefitsList from "@/components/BenefitsList";
import FunnelNextStep from "@/components/FunnelNextStep";
import SuccessMessage from "@/components/SuccessMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Lock, Clock, Shield, CheckCircle2, Send, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import yanisPhoto from "@/assets/yanis-hero-cutout.webp";

const benefits = [
  "Realistic value range based on recent Aylmer sales",
  "Pricing advice adapted to your Aylmer neighborhood",
  "Your property's strengths to highlight for buyers",
  "What to fix and what's worth it in the Aylmer market",
  "Next steps possible, no commitment",
];

const trustBullets = [
  { icon: Shield, text: "Free and no commitment" },
  { icon: Clock, text: "Personalized response in 24h" },
  { icon: CheckCircle2, text: "Based on recent Aylmer sales" },
];

const faq = [
  { q: "How do I get a home valuation in Aylmer?", a: "Fill out the form on this page with your Aylmer property address. I'll get back to you within 24h with an analysis based on recent comparable sales." },
  { q: "Is the valuation really free?", a: "Yes, it's free, confidential and no commitment. You receive a clear report — no obligation to sell." },
  { q: "How much is my house worth in Aylmer?", a: "The value depends on your neighborhood — Plateau, Lake Deschênes, residential areas — and recent sales. The valuation gives you a realistic range." },
  { q: "What is the valuation based on?", a: "I use recent sales on your street and in your Aylmer area, your property's condition, lot size and local market conditions." },
  { q: "How is this different from an online valuation?", a: "Online tools give approximate estimates. My valuation accounts for Aylmer's local specifics and your property's actual condition." },
  { q: "How long does the valuation take?", a: "You receive a personalized response within 24 hours. For a more detailed analysis with a visit in Aylmer, we schedule an appointment." },
  { q: "Do you need to visit my home for the valuation?", a: "Not necessarily for a first estimate. A visit can be arranged for a more detailed report — no commitment." },
  { q: "Does the valuation commit me to selling?", a: "No. Many Aylmer homeowners request a valuation simply to know their value, without any immediate intention to sell." },
  { q: "Which Aylmer neighborhoods do you cover?", a: "All of them — Plateau, Lake Deschênes, Lucerne, Des Jardins, Lakeview and all residential areas of Aylmer." },
  { q: "What do I do after receiving my valuation?", a: "You'll have the numbers and options. If you want to go further, I can prepare a complete seller plan for Aylmer." },
];

const afterSteps = [
  { title: "Sell in Aylmer", text: "Go further — get a complete plan to sell your Aylmer property.", href: "/en/sell-house-aylmer", cta: "See the process", highlight: true },
  { title: "Talk to Yanis", text: "Discuss your situation and options — no commitment.", href: "/en/contact", cta: "Book a call" },
];

const anim = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const ValuationAylmerPageEn = () => {
  const [submitted, setSubmitted] = useState(false);
  const { submit, submitting } = useFormSubmit();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    const ok = await submit({
      formType: "valuation",
      lang: "en",
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: (fd.get("phone") as string) || "",
      address: fd.get("address") as string,
      message: `[Aylmer] ${(fd.get("message") as string) || ""}`,
    });
    if (ok) setSubmitted(true);
  };

  return (
    <>
      <PageMeta
        title="Home Valuation Aylmer | Free, No Commitment"
        description="Get a free home valuation in Aylmer. Analysis based on recent sales in your neighborhood — response within 24h, no commitment."
      ogImage="https://yanisgauthier.com/og/og-eval.jpg" />

      <section className="hero-gradient relative overflow-hidden">
        <div className="section-container relative grid items-center gap-8 py-12 md:grid-cols-[1fr_420px] md:py-20 lg:gap-14">
          <motion.div {...anim}>
            <p className="label-overline mb-4 text-primary-foreground/25">Free valuation · Aylmer</p>
            <h1 className="text-primary-foreground">How much is your Aylmer property worth?</h1>
            <p className="mt-4 max-w-md text-[1.0625rem] leading-[1.6] text-primary-foreground/50">
              Receive a personalized valuation based on recent sales in your Aylmer neighborhood — free, confidential and no commitment.
            </p>
            <ul className="mt-6 space-y-2">
              {trustBullets.map((b) => (
                <li key={b.text} className="flex items-center gap-2 text-[0.875rem] text-primary-foreground/40">
                  <b.icon size={15} className="text-accent" />
                  {b.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...anim} transition={{ ...anim.transition, delay: 0.15 }}>
            {submitted ? (
              <SuccessMessage title="Request sent!" text="I'll get back to you within 24h with your personalized Aylmer valuation." />
            ) : (
              <form onSubmit={handleSubmit} className="card-elevated space-y-4 rounded-2xl bg-card p-6 shadow-xl sm:p-8">
                <div className="flex items-center gap-2 text-[0.8125rem] text-muted-foreground">
                  <Lock size={13} /> Confidential — no obligation
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="email@example.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="819 000-0000" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="address">Property address in Aylmer</Label>
                  <Input id="address" name="address" required placeholder="123 Example St, Aylmer" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Details (optional)</Label>
                  <Textarea id="message" name="message" rows={3} placeholder="Property type, number of bedrooms, etc." />
                </div>
                <Button type="submit" size="xl" variant="accent" className="w-full" disabled={submitting}>
                  {submitting ? "Sending…" : <><Send size={15} className="mr-2" /> Get my valuation</>}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-[44rem]">
          <motion.div {...anim} className="flex items-center gap-4 mb-6">
            <img src={yanisPhoto} alt="Yanis Gauthier" className="h-14 w-14 rounded-full object-cover" loading="lazy" />
            <div>
              <p className="font-semibold text-[0.9375rem]">Yanis Gauthier-Sigeris</p>
              <p className="text-[0.8125rem] text-muted-foreground flex items-center gap-1"><BadgeCheck size={13} className="text-accent" /> Real estate broker · Aylmer & Outaouais</p>
            </div>
          </motion.div>
          <BenefitsList title="What you receive" items={benefits} />
        </div>
      </section>

      <RelatedPages
        overline="Explore"
        title="Related pages"
        pages={[
          { title: "Sell in Aylmer", text: "Process and strategy for selling in Aylmer.", href: "/en/sell-house-aylmer" },
          { title: "Aylmer — neighborhood profile", text: "Market, profile and trends.", href: "/en/aylmer" },
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

export default ValuationAylmerPageEn;
