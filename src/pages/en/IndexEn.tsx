import * as React from "react";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import InlineCTA from "@/components/InlineCTA";
import ReviewStrip from "@/components/ReviewStrip";
import ReviewSection from "@/components/ReviewSection";
import GuideOffersSectionEn from "@/components/en/GuideOffersSectionEn";
import { getReviewsByIdEn as getReviewsById } from "@/data/reviews-en";
import heroGatineauSkyline from "@/assets/hero-gatineau-skyline.webp";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import { Award, Shield, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import cardVendreImg from "@/assets/card-vendre.webp";
import cardAcheterImg from "@/assets/card-acheter.webp";
import cardPlexImg from "@/assets/card-plex.webp";
import SectionHeading from "@/components/SectionHeading";
import SectorLinks from "@/components/SectorLinks";

const heroReview = getReviewsById(["r2"])[0];
const homepageReviews = getReviewsById(["s1", "b1", "r2"]);

const trustItems = [
  { icon: Award, text: "RE/MAX Platinum Club · Hall of Fame" },
  { icon: MapPin, text: "Gatineau · Aylmer · Hull · Outaouais specialist" },
  { icon: Shield, text: "Nearly 9 years of experience in Outaouais" },
];

const pathways = [
  { title: "Sell my property", text: "Realistic valuation, pricing strategy and marketing plan — to maximize your result.", cta: "See the seller plan", href: "/en/sell", footer: "Valuation · positioning · marketing", image: cardVendreImg },
  { title: "Buy in Gatineau", text: "Neighborhoods, budget and hands-on guidance — to buy with confidence.", cta: "Explore buying", href: "/en/buy", footer: "Neighborhoods · budget · guidance", image: cardAcheterImg },
  { title: "Plex & Investment", text: "Returns, market value and timing — the real numbers before the decision.", cta: "Get an analysis", href: "/en/plex", footer: "Returns · value · timing", image: cardPlexImg },
];

const steps = [
  { number: "01", title: "Free home valuation", text: "Know the true value of your property within days.", href: "/en/home-valuation" },
  { number: "02", title: "Clear strategy", text: "A selling plan tailored to your situation and your market.", href: "/en/sell" },
  { number: "03", title: "Full support", text: "From preparation to closing, no pressure, no surprises.", href: "/en/contact" },
];

const trustPoints = [
  { icon: Clock, title: "Nearly 9 years in Outaouais", text: "Deep knowledge of the market, neighborhoods and local realities." },
  { icon: Shield, title: "Zero pressure, zero surprises", text: "Honest advice, clear strategy, support adapted to your pace." },
  { icon: Award, title: "Recognized results", text: "RE/MAX Platinum Club, 100% Club and Hall of Fame." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes, Ottawa access" },
  { name: "Hull", href: "/en/hull", detail: "Urban, close to downtown, condos and plex" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham", detail: "Land, affordable prices, nature" },
];

const IndexEn = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <PageMeta title="Real Estate Broker Gatineau | YGS" description="Yanis Gauthier-Sigeris, real estate broker in Gatineau. Sell, buy or invest in Outaouais — clear strategy, honest advice and zero pressure." />
    <HeroSection
      overline="GATINEAU · AYLMER · HULL · OUTAOUAIS"
      title="Your real estate ally in Outaouais"
      subtitle="Sell, buy or invest — clear strategy, honest advice and support without pressure."
      primaryCta={{ label: "Free Home Valuation", href: "/en/home-valuation" }}
      secondaryCta={{ label: "Talk to Yanis", href: "/en/contact" }}
      trustLine=""
      agentImage={yanisPortrait}
      agentName="Yanis Gauthier-Sigeris"
      heroBgImage={heroGatineauSkyline}
      heroVideo="/__l5e/assets-v1/197630f4-4c5f-4116-8143-909e5b7b2fdf/hero-video.mp4"
    />

    {/* Trust Strip */}
    <section className="border-b border-border/40 bg-secondary/40">
      <div className="section-container py-5 sm:py-6">
        <motion.div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 text-[0.875rem] font-medium text-muted-foreground/65">
              <item.icon size={14} className="shrink-0 text-accent" /><span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    <ReviewStrip review={heroReview} />

    {/* Pathway Section */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div className="mx-auto mb-14 max-w-[42rem] text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
          <p className="label-overline mb-3">Choose your next step</p>
          <h2 className="mb-5">Where are you in your project?</h2>
          <p className="mx-auto max-w-[38rem] text-[1.0625rem] leading-[1.65] text-muted-foreground">Every situation is different. Tell me where you are — I'll give you the numbers, the options and a clear strategy.</p>
        </motion.div>
        <div className="grid gap-6 sm:gap-7 md:grid-cols-3">
          {pathways.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} className="group">
              <Link to={p.href} className="card-elevated flex h-full flex-col overflow-hidden border border-border/40 bg-card transition-all duration-220 hover:border-accent/20">
                <div className="relative aspect-[16/10] overflow-hidden"><img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" /></div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="mb-3 transition-colors group-hover:text-primary">{p.title}</h3>
                  <p className="mb-6 flex-1 text-[0.9375rem] leading-[1.65] text-muted-foreground">{p.text}</p>
                  <span className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-primary">{p.cta}<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
                  <p className="mt-4 text-[0.8125rem] font-medium tracking-wide text-muted-foreground/40">{p.footer}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Credibility Section */}
    <section className="section-padding-md bg-secondary/20">
      <div className="section-container max-w-[56rem]">
        <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
          <p className="label-overline mb-3">Why clients trust me</p>
          <h2 className="mb-4">Simple, strategic, pressure-free</h2>
          <p className="mx-auto max-w-[34rem] text-[1.0625rem] leading-[1.65] text-muted-foreground">Helping you see clearly and make the right decision at the right time.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-3">
          {trustPoints.map((point, i) => (
            <motion.div key={point.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
              <div className="h-full p-6 text-center">
                <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/[0.08] text-accent"><point.icon size={20} /></div>
                <h3 className="text-[1.0625rem] font-semibold tracking-[-0.015em] text-foreground">{point.title}</h3>
                <p className="mx-auto mt-2.5 max-w-[18rem] text-[0.9375rem] leading-[1.65] text-muted-foreground/70">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Conversion Steps */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
          <p className="label-overline mb-3">How it works</p>
          <h2>Three steps to a successful transaction</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-3 sm:gap-7">
          {steps.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
              <Link to={step.href} className="card-elevated group flex h-full flex-col items-start border border-border/40 bg-card p-7 sm:p-8">
                <span className="mb-4 font-heading text-[2rem] leading-none text-accent/20">{step.number}</span>
                <h3 className="text-[1.125rem] font-semibold">{step.title}</h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.65] text-muted-foreground">{step.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div className="mt-12 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <Button size="lg" variant="accent" className="font-semibold shadow-sm" asChild>
            <Link to="/en/home-valuation">Start with a free valuation<ArrowRight size={15} className="ml-1" /></Link>
          </Button>
          <p className="mt-4 text-[0.8125rem] text-muted-foreground/45">Zero pressure — I give you the numbers and the options, you decide.</p>
        </motion.div>
      </div>
    </section>

    <InlineCTA text="Thinking about selling? Start by knowing the value of your property." buttonLabel="Free Home Valuation →" href="/en/home-valuation" />

    {/* About Section */}
    <section className="section-padding bg-background">
      <div className="section-container overflow-hidden grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-14">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="overflow-hidden rounded-[1.75rem]">
            <img src="/lovable-uploads/8c9ff05f-0837-4203-8947-2da11c503c80.png" alt="Yanis Gauthier-Sigeris — Real Estate Broker, Gatineau" className="aspect-[3/4] w-full object-cover" loading="lazy" decoding="async" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}>
          <p className="label-overline mb-3">Why YGS</p>
          <h2>Simple, strategic and human guidance</h2>
          <p className="prose-body mt-5">In real estate, good decisions start with good information. Yanis Gauthier-Sigeris supports sellers, buyers and investors in Gatineau with a clear, local and pressure-free approach.</p>
          <p className="prose-body mt-4">His role isn't to push. It's to provide the right information and a clear strategy — so you can move forward with confidence when you're ready.</p>
          <p className="prose-body mt-4">With nearly 9 years of experience as a real estate broker in Outaouais, Yanis offers his clients solid, strategic and reassuring support from start to finish. A real estate investor himself, he can also analyze multi-unit opportunities in depth. His hands-on experience in property flips, combined with his project management training, makes him an indispensable ally for any real estate project.</p>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[0.875rem] text-muted-foreground/55">
            <span className="flex items-center gap-2"><Clock size={14} /> Nearly 9 years of experience</span>
            <span className="flex items-center gap-2"><Award size={14} /> Platinum Club · 100% Club · Hall of Fame</span>
            <span className="flex items-center gap-2"><Shield size={14} /> Trust-centered approach</span>
          </div>
          <Button className="mt-10" size="lg" asChild><Link to="/en/contact">Learn more</Link></Button>
        </motion.div>
      </div>
    </section>

    <SectorLinks overline="Gatineau and area" title="Neighborhoods to watch" sectors={sectors} background="alt" />

    <GuideOffersSectionEn background="alt" />

    <ReviewSection overline="Testimonials" title="What our clients say" reviews={homepageReviews} columns={3} />

    <CTASection
      dark
      overline="First step"
      title="Start with the right first step"
      text="Valuation, buyer consultation or plex analysis — we start where you are."
      buttons={[
        { label: "Free Home Valuation", href: "/en/home-valuation" },
        { label: "Book a consultation", href: "/en/contact", variant: "outline" },
      ]}
      trustLine="Zero pressure — I give you the numbers and the options, you decide."
    />
  </div>
));

IndexEn.displayName = "IndexEn";
export default IndexEn;
