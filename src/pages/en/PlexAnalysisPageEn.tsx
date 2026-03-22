import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import BenefitsList from "@/components/BenefitsList";
import FAQSection from "@/components/FAQSection";
import SuccessMessage from "@/components/SuccessMessage";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Lock, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-plex.webp";

const benefits = [
  "Current market value estimate of your plex",
  "Rental revenue vs actual expense analysis",
  "Rent optimization potential",
  "Recommendation: hold, sell or refinance",
  "Concrete next steps, no commitment",
];

const trustPoints = [
  { icon: Lock, text: "Strictly confidential information" },
  { icon: Clock, text: "Personalized analysis within 48h" },
  { icon: Shield, text: "No obligation — no commitment" },
];

const faq = [
  { q: "What's included in the plex analysis?", a: "Estimated market value, revenue and expense analysis, rental potential, and a strategic recommendation tailored to your situation." },
  { q: "Is it really free?", a: "Yes. The goal is to help you make an informed decision. If you decide to move forward, we discuss it — but zero pressure." },
  { q: "I'm not sure I want to sell — is it still useful?", a: "Absolutely. Many owners simply want to understand their position before deciding. That's exactly what this service is for." },
];

const PlexAnalysisPageEn = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageMeta title="Free Plex Analysis — Gatineau | YGS" description="Get a free plex analysis in Gatineau. Revenues, expenses, return and market value — real numbers for your investment decision." />
      <HeroSection
        compact
        overline="Free Plex Analysis · Gatineau"
        title="Get a clear analysis of your plex"
        subtitle="Value, revenues, expenses, potential — I give you an objective reading of your investor situation."
        trustLine="A useful and pressure-free analysis — to help you decide with full knowledge."
        heroBgImage={heroImg}
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
                <h2 className="text-[1.375rem] sm:text-[1.625rem]">Request your plex analysis</h2>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
                  I'll get back to you personally with a complete analysis — not a generic report.
                </p>

                {submitted ? (
                  <SuccessMessage
                    title="Thank you! Request sent."
                    text="I'll get back to you within 48 hours with your analysis."
                  />
                ) : (
                  <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                    <div>
                      <Label htmlFor="address">Plex address</Label>
                      <Input id="address" placeholder="123 Example St, Gatineau" className="mt-1.5" required />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="type">Plex type</Label>
                        <Select>
                          <SelectTrigger id="type" className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="duplex">Duplex</SelectItem>
                            <SelectItem value="triplex">Triplex</SelectItem>
                            <SelectItem value="quadruplex">Quadruplex</SelectItem>
                            <SelectItem value="5plus">5 units and more</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="area">Area</Label>
                        <Select>
                          <SelectTrigger id="area" className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hull">Hull</SelectItem>
                            <SelectItem value="aylmer">Aylmer / Plateau</SelectItem>
                            <SelectItem value="gatineau">Gatineau centre</SelectItem>
                            <SelectItem value="buckingham">Buckingham / Masson-Angers</SelectItem>
                            <SelectItem value="other">Other area</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="situation">Your situation</Label>
                        <Select>
                          <SelectTrigger id="situation" className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="owner">I own this plex</SelectItem>
                            <SelectItem value="buyer">I want to buy a plex</SelectItem>
                            <SelectItem value="curious">I want to understand my position</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="revenues">Monthly gross revenues (approx.)</Label>
                        <Input id="revenues" placeholder="e.g. $3,200" className="mt-1.5" />
                      </div>
                    </div>

                    <div className="h-px bg-border/50" />

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
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="notes">Additional notes (optional)</Label>
                      <Textarea id="notes" rows={3} className="mt-1.5" placeholder="Context, questions, relevant details…" />
                    </div>

                    <Button type="submit" size="xl" variant="accent" className="w-full mt-2 shadow-md font-semibold">
                      Get my plex analysis
                    </Button>
                    <p className="text-center text-[0.8125rem] text-muted-foreground/50">
                      Zero pressure — I give you the numbers and the options, you decide.
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
                <p className="text-[1rem] font-semibold text-foreground">Confidential and no commitment</p>
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
                <p className="text-[1rem] font-semibold">Thinking about selling your plex?</p>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-primary-foreground/60">
                  Knowing the current value is the first step — before deciding anything.
                </p>
                <Button size="default" variant="hero" className="mt-4 w-full" asChild>
                  <Link to="/en/home-valuation">Free Valuation</Link>
                </Button>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <BenefitsList overline="What you receive" title="Your plex analysis includes" items={benefits} />

      <FAQSection items={faq} />

      <StickyGuideBannerEn guideType="investor_guide" label="Free Investor Guide — get it by email" />
    </>
  );
};

export default PlexAnalysisPageEn;
