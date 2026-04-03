import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import BenefitsList from "@/components/BenefitsList";
import FunnelNextStep from "@/components/FunnelNextStep";
import FAQSection from "@/components/FAQSection";
import SuccessMessage from "@/components/SuccessMessage";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Lock, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import yanisPhoto from "@/assets/yanis-hero.webp";
import heroImg from "@/assets/hero-buyer-consultation.webp";

const benefits = [
  "Personalized discussion about your criteria and priorities",
  "Overview of neighborhoods suited to your profile",
  "Explanation of the buying process in Québec",
  "Current market reading and prices by area",
  "Clear next steps, no commitment",
];

const trustPoints = [
  { icon: Lock, text: "Confidential consultation" },
  { icon: Clock, text: "Response within 24h" },
  { icon: Shield, text: "No obligation — no commitment" },
];

const afterSteps = [
  { title: "Explore neighborhoods", text: "Compare Gatineau neighborhoods based on your lifestyle, budget and priorities.", href: "/en/neighborhoods", cta: "See neighborhoods", highlight: true },
  { title: "Buyer guide", text: "The buying process in Québec explained simply — from search to notary.", href: "/en/buyer-guide", cta: "Read the guide" },
];

const faq = [
  { q: "How much does the consultation cost?", a: "It's free and no commitment. The goal is to understand your situation and see if I can help." },
  { q: "How long does the consultation last?", a: "About 20-30 minutes. We cover your criteria, the current market and next steps." },
  { q: "I'm not ready to buy yet — is it still useful?", a: "Absolutely. Most buyers start by gathering information. The better you understand the market, the better your decision will be." },
];

const BuyerConsultationPageEn = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageMeta title="Buyer Consultation — Gatineau | YGS" description="Free buyer consultation in Gatineau. Clarify your criteria, budget and options with an experienced broker." />
      <HeroSection
        compact
        overline="Buyer consultation · Gatineau"
        title="Book your free buyer consultation"
        subtitle="Let's discuss your criteria, budget and questions — so you can buy with confidence."
        trustLine="Free, confidential and no commitment."
        heroBgImage={heroImg}
      />

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-5">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card-elevated border border-border/40 bg-card p-7 sm:p-9">
                <h2 className="text-[1.375rem] sm:text-[1.625rem]">Book your consultation</h2>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
                  Tell me what you're looking for — I'll get back to you with a personalized plan.
                </p>

                {submitted ? (
                  <SuccessMessage
                    title="Thank you! Request sent."
                    text="I'll get back to you within 24 hours."
                  />
                ) : (
                  <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" className="mt-1.5" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" className="mt-1.5" required />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="budget">Approximate budget</Label>
                        <Select>
                          <SelectTrigger id="budget" className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="300">Under $300,000</SelectItem>
                            <SelectItem value="400">$300,000 - $400,000</SelectItem>
                            <SelectItem value="500">$400,000 - $500,000</SelectItem>
                            <SelectItem value="600">$500,000 - $600,000</SelectItem>
                            <SelectItem value="700">$600,000 and up</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="area">Area of interest</Label>
                        <Select>
                          <SelectTrigger id="area" className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="aylmer">Aylmer / Plateau</SelectItem>
                            <SelectItem value="hull">Hull</SelectItem>
                            <SelectItem value="gatineau">Gatineau centre</SelectItem>
                            <SelectItem value="buckingham">Buckingham / Masson-Angers</SelectItem>
                            <SelectItem value="undecided">Not decided yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">When are you thinking of buying?</Label>
                        <Select>
                          <SelectTrigger id="timeline" className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">As soon as possible</SelectItem>
                            <SelectItem value="3months">Within 3 months</SelectItem>
                            <SelectItem value="6months">6 months or more</SelectItem>
                            <SelectItem value="info">Just gathering information</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="notes">Questions or details (optional)</Label>
                      <Textarea id="notes" rows={3} className="mt-1.5" placeholder="Property type, preferred neighborhood, questions…" />
                    </div>

                    <Button type="submit" size="xl" variant="accent" className="w-full mt-2 shadow-md font-semibold">
                      Book my consultation
                    </Button>
                    <p className="text-center text-[0.8125rem] text-muted-foreground/50">
                      Free and no commitment — I help you see more clearly.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.aside
              className="lg:col-span-2 space-y-5 lg:pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card-elevated border border-border/40 bg-secondary/30 p-7">
                <p className="text-[1rem] font-semibold text-foreground">Free and confidential</p>
                <div className="mt-4 space-y-3.5">
                  {trustPoints.map((t) => (
                    <div key={t.text} className="flex items-center gap-3">
                      <t.icon size={15} className="shrink-0 text-accent" />
                      <span className="text-[0.9375rem] text-muted-foreground">{t.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-elevated bg-primary p-7 text-primary-foreground border-0">
                <p className="text-[1rem] font-semibold">Also selling?</p>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-primary-foreground/60">
                  Get your free valuation to clarify your buying budget.
                </p>
                <Button size="default" variant="hero" className="mt-4 w-full" asChild>
                  <Link to="/en/home-valuation">Free Valuation</Link>
                </Button>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <BenefitsList overline="What you receive" title="Your consultation includes" items={benefits} />

      <FunnelNextStep
        overline="In the meantime"
        title="Explore while waiting for your consultation"
        subtitle="Get familiar with the market and Gatineau neighborhoods."
        steps={afterSteps}
        background="alt"
      />

      <FAQSection items={faq} />

      <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
    </>
  );
};

export default BuyerConsultationPageEn;
