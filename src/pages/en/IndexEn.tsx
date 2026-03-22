import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import CTASection from "@/components/CTASection";
import GuideModalEn, { type GuideType } from "@/components/en/GuideModalEn";
import { Button } from "@/components/ui/button";
import { getReviewsByIdEn as getReviewsById } from "@/data/reviews-en";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Target, MapPin, MessageCircle, Users } from "lucide-react";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";
import yanisAbout from "@/assets/yanis-about.webp";
import yanisAboutSm from "@/assets/yanis-about-sm.webp";

const homepageReviews = getReviewsById(["s1", "b1", "r2", "m1"]);

/* ── PATH CARDS DATA ── */
const paths: { title: string; text: string; cta: string; guideType: GuideType }[] = [
  {
    title: "Selling a home",
    text: "Get clear on pricing, timing, preparation, and launch strategy.",
    cta: "Get the seller guide",
    guideType: "seller_guide",
  },
  {
    title: "Buying your first home",
    text: "Understand your budget, your options, and how to buy with confidence.",
    cta: "Get the first-time buyer guide",
    guideType: "buyer_guide",
  },
  {
    title: "Relocating to Outaouais",
    text: "Compare sectors, understand the local process, and plan your move clearly.",
    cta: "Get the relocation guide",
    guideType: "relocation_guide",
  },
  {
    title: "Military relocation",
    text: "A practical guide for CAF members and families moving to the region.",
    cta: "Get the military relocation guide",
    guideType: "military_guide",
  },
  {
    title: "Plex / investment",
    text: "Learn how to evaluate opportunities, understand the numbers, and move strategically.",
    cta: "Get the plex guide",
    guideType: "investor_guide",
  },
];

/* ── VALUE BLOCKS DATA ── */
const values = [
  { icon: Target, title: "Clear strategy", text: "You get a plan, not just information." },
  { icon: MapPin, title: "Local market knowledge", text: "Outaouais sectors, pricing, and opportunities explained clearly." },
  { icon: MessageCircle, title: "Straight advice", text: "No fluff. No pressure. Just honest guidance." },
  { icon: Users, title: "Support from start to finish", text: "From preparation to negotiation, you're well guided." },
];

/* ── GUIDE SHOWCASE DATA ── */
const mainGuides: { title: string; value: string; cta: string; guideType: GuideType }[] = [
  { title: "Seller Guide", value: "Everything you need to sell at the best price — preparation, pricing, marketing.", cta: "Get the guide", guideType: "seller_guide" },
  { title: "First-Time Buyer Guide", value: "The home buying process in Québec, step by step.", cta: "Get the guide", guideType: "buyer_guide" },
  { title: "Relocation Guide", value: "Sectors, process, and tips for settling in Outaouais.", cta: "Get the guide", guideType: "relocation_guide" },
];
const secondaryGuides: { title: string; value: string; cta: string; guideType: GuideType }[] = [
  { title: "Military Relocation Guide", value: "For CAF members: posting, BGRS/SIRVA process and local tips.", cta: "Get the guide", guideType: "military_guide" },
  { title: "Plex / Investor Guide", value: "Returns, analysis, and acquisition strategy.", cta: "Get the guide", guideType: "investor_guide" },
];

/* ── GUIDE CTA BUTTON COMPONENT ── */
const GuideCta = ({ guideType, label, variant = "accent", size = "default", className = "" }: {
  guideType: GuideType; label: string; variant?: "accent" | "outline" | "default"; size?: "default" | "lg" | "xl"; className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setOpen(true)}>
        <span className="truncate">{label}</span>
        <ArrowRight size={14} className="ml-1.5 shrink-0" />
      </Button>
      <GuideModalEn open={open} onOpenChange={setOpen} guideType={guideType} />
    </>
  );
};

const anim = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } as const, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } };

const IndexEn = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <PageMeta
      title="Real Estate Broker Gatineau | YGS"
      description="Yanis Gauthier-Sigeris, real estate broker in Gatineau. Buy, sell, relocate or invest in Outaouais — clear strategy, no pressure."
    />

    {/* ═══ SECTION 1 — HERO ═══ */}
    <HeroSection
      overline="GATINEAU · AYLMER · HULL · OUTAOUAIS"
      title="Strategic real estate guidance in Outaouais"
      subtitle="Buying, selling, relocating, or investing? Get the right local strategy, the right guide, and the right next step — without pressure."
      primaryCta={{ label: "Get my free guide", href: "#choose-your-path" }}
      secondaryCta={{ label: "Book a strategy call", href: "/en/contact" }}
      trustLine="YGS — Your real estate ally. Local market knowledge. Clear strategy. No pressure."
      heroVideo="/hero-video-compressed.mp4"
      heroVideoPoster="/hero-video-poster.webp"
      agentImage={yanisPortrait}
      agentImageSm={yanisPortraitSm}
      agentName="Yanis Gauthier-Sigeris"
    />

    {/* ═══ SECTION 2 — CHOOSE YOUR PATH ═══ */}
    <section id="choose-your-path" className="section-padding bg-background">
      <div className="section-container">
        <motion.div className="mx-auto mb-14 max-w-[42rem] text-center" {...anim}>
          <p className="label-overline mb-3">Choose your path</p>
          <h2>Where are you in the process?</h2>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-[var(--card-radius)] border border-border/40 bg-card p-7 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300"
            >
              <h3 className="text-[1.0625rem] font-semibold">{p.title}</h3>
              <p className="mt-2.5 flex-1 text-[0.9375rem] leading-[1.65] text-muted-foreground">{p.text}</p>
              <GuideCta guideType={p.guideType} label={p.cta} variant="accent" size="default" className="mt-5 w-full sm:w-auto self-start text-[0.8125rem]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — LEAD CAPTURE PROMPT ═══ */}
    <section className="bg-secondary/30 py-16 sm:py-20">
      <motion.div className="section-container text-center" {...anim}>
        <p className="label-overline mb-3">Free guides</p>
        <h2 className="mx-auto max-w-lg">Get the right guide for your next move</h2>
        <p className="mx-auto mt-4 max-w-md text-[1.0625rem] leading-[1.6] text-muted-foreground">
          Choose the guide that fits your situation and I'll send it straight to you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <GuideCta guideType="seller_guide" label="Seller guide" size="lg" />
          <GuideCta guideType="buyer_guide" label="Buyer guide" size="lg" />
          <GuideCta guideType="relocation_guide" label="Relocation guide" size="lg" />
          <GuideCta guideType="investor_guide" label="Investor guide" size="lg" />
        </div>
        <p className="mt-5 text-[0.8125rem] text-muted-foreground/45">
          Zero pressure — just useful local information and a clear next step.
        </p>
      </motion.div>
    </section>

    {/* ═══ SECTION 4 — WHY CLIENTS CHOOSE YGS ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-[60rem]">
        <motion.div className="mb-14 text-center" {...anim}>
          <p className="label-overline mb-3">Why YGS</p>
          <h2>Why clients choose YGS</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-center p-6"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/[0.08] text-accent">
                <v.icon size={22} />
              </div>
              <h3 className="text-[1rem] font-semibold">{v.title}</h3>
              <p className="mx-auto mt-2.5 max-w-[16rem] text-[0.9375rem] leading-[1.6] text-muted-foreground/70">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 5 — GUIDE SHOWCASE ═══ */}
    <section className="section-padding-md bg-secondary/20">
      <div className="section-container">
        <motion.div className="mb-14 text-center" {...anim}>
          <p className="label-overline mb-3">Free resources</p>
          <h2>Free guides built for real decisions</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainGuides.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-[var(--card-radius)] border border-border bg-card p-6 sm:p-7 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 mb-4">
                <BookOpen size={20} className="text-accent" />
              </div>
              <h3 className="text-[1.05rem] font-semibold leading-tight">{g.title}</h3>
              <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-muted-foreground">{g.value}</p>
              <GuideCta guideType={g.guideType} label={g.cta} className="mt-5 w-full sm:w-auto self-start text-[0.8125rem]" />
            </motion.div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:max-w-[66%] lg:mx-auto">
          {secondaryGuides.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-[var(--card-radius)] border border-border bg-card p-6 sm:p-7 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 mb-4">
                <BookOpen size={20} className="text-accent" />
              </div>
              <h3 className="text-[1.05rem] font-semibold leading-tight">{g.title}</h3>
              <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-muted-foreground">{g.value}</p>
              <GuideCta guideType={g.guideType} label={g.cta} className="mt-5 w-full sm:w-auto self-start text-[0.8125rem]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 6 — PERSONAL BRAND ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-[1.75rem]">
            <img
              src={yanisAbout}
              srcSet={`${yanisAboutSm} 400w, ${yanisAbout} 565w`}
              sizes="(max-width: 1023px) 90vw, 40vw"
              alt="Yanis Gauthier-Sigeris, real estate broker in Gatineau, Outaouais"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
              decoding="async"
              width={565}
              height={800}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <p className="label-overline mb-3">About</p>
          <h2>Hi, I'm Yanis.</h2>
          <p className="prose-body mt-5">
            I help buyers, sellers, relocators, and investors make better real estate decisions in Outaouais with clear strategy, strong local knowledge, and a no-pressure approach.
          </p>
          <p className="prose-body mt-4">
            With nearly 9 years of experience as a broker in Outaouais, a background in real estate investing, and project management training, I'm a strategic ally for any real estate project — simple or complex.
          </p>
          <Button className="mt-8" size="lg" variant="accent" asChild>
            <Link to="/en/contact">
              Book a strategy call
              <ArrowRight size={15} className="ml-1.5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* ═══ SECTION 7 — SOCIAL PROOF ═══ */}
    <ReviewSection
      overline="Testimonials"
      title="Trusted guidance for real estate decisions that matter"
      reviews={homepageReviews}
      columns={2}
      background="alt"
    />

    {/* ═══ SECTION 8 — BOTTOM CTA ═══ */}
    <CTASection
      dark
      overline="Next step"
      title="Not sure where to start?"
      text="Tell me where you are in the process and I'll point you to the right guide or the right next step."
      buttons={[
        { label: "Get my free guide", href: "#choose-your-path" },
        { label: "Book a strategy call", href: "/en/contact", variant: "outline" },
      ]}
      trustLine="Local knowledge · Clear strategy · No pressure"
    />
  </div>
));

IndexEn.displayName = "IndexEn";
export default IndexEn;
