import { useState, FormEvent } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import BenefitsList from "@/components/BenefitsList";
import ContentBlock from "@/components/ContentBlock";
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
import heroImg from "@/assets/hero-seller.webp";

const benefits = [
  "Realistic valuation based on recent comparable sales",
  "Advice on improvements that are worth it (or not)",
  "Strategic price positioning for your area",
  "Personalized marketing plan",
  "Timeline and coordination if you're buying in parallel",
];

const trustPoints = [
  { icon: Lock, text: "Strictly confidential information" },
  { icon: Clock, text: "Personalized plan within 48h" },
  { icon: Shield, text: "No obligation — no commitment" },
];

const faq = [
  { q: "How is the seller plan different from a valuation?", a: "A valuation gives you the value. The seller plan goes further — price positioning, preparation, strategic improvements, marketing timeline and buy-sell coordination if needed." },
  { q: "Is it free?", a: "Yes. The goal is to give you enough information to make an informed decision, at your own pace." },
  { q: "I'm not sure I want to sell right away", a: "Perfect — that's exactly the right time to plan. Most of my sellers start with a plan well before listing." },
];

const SellerPlanPageEn = () => {
  const [submitted, setSubmitted] = useState(false);
  const { submit, submitting } = useFormSubmit();
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const [timeline, setTimeline] = useState("");
  const [buying, setBuying] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const ok = await submit({
      formType: "consultation",
      lang: "en",
      name,
      email,
      phone,
      address,
      message: notes,
      projectType: type,
      objective: `area:${area}|timeline:${timeline}|buying_parallel:${buying}`,
      avatar: "vendeur",
      offer: "consultation_vendeur",
      sourcePage: "/en/seller-plan",
    });
    if (ok) setSubmitted(true);
  };

  return (
    <>
      <PageMeta title="Personalized Seller Plan — Gatineau" description="A custom selling plan for your Gatineau property. Strategy, pricing, marketing and step-by-step support." ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd name="Custom Selling Plan — Gatineau" description="Custom selling plan for your property in Gatineau and Outaouais. Pricing strategy, targeted marketing and step-by-step support." url="/en/seller-plan" serviceType="Real Estate Marketing Plan Service" />
      <HeroSection
        compact
        overline="Personalized Seller Plan · Gatineau"
        title="Get your personalized seller plan"
        subtitle="Pricing, preparation, marketing and timeline — a clear plan tailored to your property and situation."
        trustLine="A strategic plan, not a sales pitch — to help you sell at the right price, at the right time."
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
                <h2 className="text-[1.375rem] sm:text-[1.625rem]">Request your seller plan</h2>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
                  I prepare a plan tailored to your property — not a generic template.
                </p>

                {submitted ? (
                  <SuccessMessage
                    title="Thank you! Request sent."
                    text="I'll get back to you within 48 hours with your seller plan."
                  />
                ) : (
                  <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                    <div>
                      <Label htmlFor="address">Property address</Label>
                      <Input id="address" name="address" placeholder="123 Example St, Gatineau" className="mt-1.5" required value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="type">Property type</Label>
                        <Select value={type} onValueChange={setType}>
                          <SelectTrigger id="type" className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="house">Single-family home</SelectItem>
                            <SelectItem value="condo">Condo</SelectItem>
                            <SelectItem value="semi">Semi-detached</SelectItem>
                            <SelectItem value="townhouse">Townhouse</SelectItem>
                            <SelectItem value="plex">Plex (2-5 units)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="area">Area</Label>
                        <Select value={area} onValueChange={setArea}>
                          <SelectTrigger id="area" className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="aylmer">Aylmer / Plateau</SelectItem>
                            <SelectItem value="hull">Hull</SelectItem>
                            <SelectItem value="gatineau">Gatineau centre</SelectItem>
                            <SelectItem value="buckingham">Buckingham / Masson-Angers</SelectItem>
                            <SelectItem value="other">Other area</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="timeline">When are you thinking of selling?</Label>
                        <Select value={timeline} onValueChange={setTimeline}>
                          <SelectTrigger id="timeline" className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">As soon as possible</SelectItem>
                            <SelectItem value="3months">Within 3 months</SelectItem>
                            <SelectItem value="6months">6 months or more</SelectItem>
                            <SelectItem value="planning">Just planning ahead</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="buying">Are you also buying?</Label>
                        <Select value={buying} onValueChange={setBuying}>
                          <SelectTrigger id="buying" className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="maybe">Maybe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="h-px bg-border/50" />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" className="mt-1.5" required value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" className="mt-1.5" required value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" className="mt-1.5" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="notes">Notes (optional)</Label>
                      <Textarea id="notes" name="notes" rows={3} className="mt-1.5" placeholder="Context, questions, special situation…" value={notes} onChange={(e) => setNotes(e.target.value)} />
                    </div>

                    <Button type="submit" size="xl" variant="accent" className="w-full mt-2 shadow-md font-semibold" disabled={submitting}>
                      {submitting ? "Sending…" : "Get my seller plan"}
                    </Button>
                    <p className="text-center text-[0.8125rem] text-muted-foreground/50">
                      Full transparency — I give you the numbers and options, you decide.
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
                <p className="text-[1rem] font-semibold">Not ready yet?</p>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-primary-foreground/60">
                  Start with a free valuation — it's the first step to understanding your position.
                </p>
                <Button size="default" variant="hero" className="mt-4 w-full" asChild>
                  <Link to="/en/home-valuation">Free Valuation</Link>
                </Button>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <BenefitsList overline="What you receive" title="Your seller plan includes" items={benefits} />

      <ContentBlock narrow centered padSize="md">
        <h3>Planning doesn't mean committing</h3>
        <p className="mt-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">
          The best selling results start with good planning. This plan is a first step — not a contract.
        </p>
        <Button className="mt-6" size="lg" asChild>
          <a href="#top">Fill out the form ↑</a>
        </Button>
      </ContentBlock>

      <FAQSection items={faq} />
      <StickyGuideBanner lang="en" guideType="seller_guide" label="Free Seller Guide — get it by email" />
    </>
  );
};

export default SellerPlanPageEn;
