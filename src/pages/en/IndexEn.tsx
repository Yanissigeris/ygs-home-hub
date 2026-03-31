import * as React from "react";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";

/* Lazy-load below-fold sections */
const SocialProofStrip = React.lazy(() => import("@/components/SocialProofStrip"));
const CTASection = React.lazy(() => import("@/components/CTASection"));
const ReviewSection = React.lazy(() => import("@/components/ReviewSection"));
const GuideOffersSectionEn = React.lazy(() => import("@/components/en/GuideOffersSectionEn"));
const SectorLinks = React.lazy(() => import("@/components/SectorLinks"));

import { getReviewsByIdEn as getReviewsById } from "@/data/reviews-en";
import yanisAbout from "@/assets/yanis-about.webp";
import yanisAboutSm from "@/assets/yanis-about-sm.webp";
import { Award, Shield, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import cardVendreImg from "@/assets/card-vendre.webp";
import cardVendreSm from "@/assets/card-vendre-sm.webp";
import cardAcheterImg from "@/assets/card-acheter.webp";
import cardAcheterSm from "@/assets/card-acheter-sm.webp";
import cardPlexImg from "@/assets/card-plex.webp";
import cardPlexSm from "@/assets/card-plex-sm.webp";

const homepageReviews = getReviewsById(["s1", "b1", "r2"]);

const trustItems = [
  { icon: MapPin, text: "Gatineau · Aylmer · Hull · Outaouais specialist" },
  { icon: Shield, text: "Nearly 9 years of experience" },
  { icon: Award, text: "Bilingual service · Transparent approach" },
];

const socialStatsEn = [
  { value: "~9 yrs", label: "experience" },
  { value: "5 ★", label: "Google + Facebook reviews" },
  { value: "Hall of Fame", label: "RE/MAX" },
];

const socialTestimonialsEn = [
  { quote: "Yanis is very professional, respectful, honest and trustworthy.", name: "Sylvie", location: "Gatineau" },
  { quote: "He made our first home purchase as smooth as possible despite the stress.", name: "Geneviève and Salah", location: "Aylmer" },
  { quote: "Excellent availability, patient and honest. I highly recommend him.", name: "Alexandre", location: "Aylmer" },
];

const pathways = [
  { title: "Sell my property in Outaouais", text: "Realistic valuation, pricing strategy tailored to the Gatineau market and targeted marketing plan — to maximize your result.", cta: "See the seller plan", href: "/en/sell", footer: "Valuation · positioning · marketing", image: cardVendreImg, imageSm: cardVendreSm, imageAlt: "Sell a home in Gatineau — bright residential interior" },
  { title: "Buy in Gatineau", text: "Aylmer, Hull, Plateau or Buckingham — the right neighborhoods, the right budget and hands-on guidance to buy with confidence.", cta: "Explore buying", href: "/en/buy", footer: "Neighborhoods · budget · guidance", image: cardAcheterImg, imageSm: cardAcheterSm, imageAlt: "Buy a property in Gatineau — residential neighborhood" },
  { title: "Plex & Investment", text: "Returns, market value and timing — the real numbers from the Outaouais rental market before the decision.", cta: "Get an analysis", href: "/en/plex", footer: "Returns · value · timing", image: cardPlexImg, imageSm: cardPlexSm, imageAlt: "Invest in a plex in Gatineau — multi-unit building" },
];

const steps = [
  { number: "01", title: "Free home valuation", text: "Know the true value of your Gatineau property within days.", href: "/en/home-valuation" },
  { number: "02", title: "Clear strategy", text: "A selling plan tailored to your property and the Outaouais market.", href: "/en/sell" },
  { number: "03", title: "Full support", text: "From preparation to closing at the notary, at your own pace.", href: "/en/contact" },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes, Lake Deschênes, Ottawa access" },
  { name: "Hull", href: "/en/hull", detail: "Urban, restaurants, culture, condos and plex, Zibi project" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham", detail: "Larger lots, affordable prices, river, nature" },
];

const IndexEn = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <PageMeta title="Real Estate Broker Gatineau | YGS" description="Yanis Gauthier-Sigeris, real estate broker in Gatineau. Sell, buy or invest in Outaouais — clear strategy, honest advice and full support." />
    <HeroSection
      overline="GATINEAU · AYLMER · HULL · OUTAOUAIS"
      title="Your real estate broker in Outaouais"
      subtitle="Clear strategy, advice based on facts, and full support — to sell, buy or invest with confidence."
      primaryCta={{ label: "Free Home Valuation", href: "/en/home-valuation" }}
      secondaryCta={{ label: "Talk to Yanis", href: "/en/contact" }}
      socialProof="Hall of Fame RE/MAX"
      heroVideo="/hero-video-compressed.mp4"
      heroVideoPoster="/hero-video-poster.webp"
      agentImage={yanisPortrait}
      agentImageSm={yanisPortraitSm}
      agentName="Yanis Gauthier-Sigeris"
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

    <React.Suspense fallback={null}>
      <SocialProofStrip stats={socialStatsEn} testimonials={socialTestimonialsEn} />

      {/* Pathway Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div className="mx-auto mb-14 max-w-[42rem] text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <p className="label-overline mb-3">Choose your next step</p>
            <h2 className="mb-5">Where are you in your project?</h2>
            <p className="mx-auto max-w-[38rem] text-[1.0625rem] leading-[1.65] text-muted-foreground">Whether you're in Gatineau, Aylmer, Hull or transitioning from Ottawa — tell me where you are and I'll give you the numbers, the options and a clear strategy.</p>
          </motion.div>
          <div className="grid gap-6 sm:gap-7 md:grid-cols-3">
            {pathways.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} className="group">
                <Link to={p.href} className="card-elevated flex h-full flex-col overflow-hidden border border-border/40 bg-card transition-all duration-300 hover:border-accent/25 hover:shadow-[0_4px_24px_-6px_hsl(var(--accent)/0.10)] hover:-translate-y-0.5">
                  <div className="relative aspect-[16/10] overflow-hidden"><img src={p.imageSm} srcSet={`${p.imageSm} 370w, ${p.image} 648w`} sizes="(max-width: 767px) 90vw, 33vw" alt={p.imageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" width={648} height={441} /></div>
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

      <hr className="section-divider" />

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="section-container overflow-hidden grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div className="overflow-hidden rounded-[1.75rem]">
              <img src={yanisAbout} srcSet={`${yanisAboutSm} 400w, ${yanisAbout} 565w`} sizes="(max-width: 1023px) 90vw, 40vw" alt="Yanis Gauthier-Sigeris, real estate broker in Gatineau, Outaouais" className="aspect-[3/4] w-full object-cover" loading="lazy" decoding="async" width={565} height={800} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}>
            <p className="label-overline mb-3">Why YGS</p>
            <h2>Simple, strategic and human guidance</h2>
            <p className="prose-body mt-5">My role is to provide the right information and a clear strategy — so you can move forward with confidence when you're ready, whether in Gatineau, Aylmer, Hull or anywhere in Outaouais.</p>
            <p className="prose-body mt-4">I support sellers, buyers and investors across Outaouais with a clear, hands-on approach and deep knowledge of the local market — prices by neighborhood, trends, resale potential and on-the-ground realities.</p>
            <p className="prose-body mt-4">With nearly 9 years of experience as a real estate broker in Outaouais with Team Marty Waite from ReMax, I offer my clients solid, strategic and reassuring support from start to finish. A real estate investor myself, I can also analyze multi-unit opportunities in Gatineau and area in depth. My hands-on experience in property flips, combined with my project management training, makes me an indispensable ally for any real estate project in Outaouais.</p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[0.875rem] text-muted-foreground/55">
              <span className="flex items-center gap-2"><Clock size={14} /> Nearly 9 years of experience</span>
              <span className="flex items-center gap-2"><Award size={14} /> Platinum Club · 100% Club · Hall of Fame</span>
              <span className="flex items-center gap-2"><Shield size={14} /> Trust-centered approach</span>
            </div>
            <Button className="mt-10" size="lg" asChild><Link to="/en/contact">Learn more</Link></Button>
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

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
                <Link to={step.href} className="card-elevated group flex h-full flex-col items-start border border-border/40 bg-card p-7 sm:p-8 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_4px_24px_-6px_hsl(var(--accent)/0.10)] hover:-translate-y-0.5">
                  <span className="mb-4 font-heading text-[2rem] leading-none text-accent/20">{step.number}</span>
                  <h3 className="text-[1.125rem] font-semibold">{step.title}</h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.65] text-muted-foreground">{step.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <SectorLinks overline="Gatineau and area" title="Neighborhoods to watch" sectors={sectors} background="alt" />

      <GuideOffersSectionEn background="alt" />

      <hr className="section-divider" />

      <ReviewSection overline="Testimonials" title="What our clients say" reviews={homepageReviews} columns={3} />

      <CTASection
        dark
        overline="First step"
        title="Take the right first step"
        text="Valuation, buyer consultation or plex analysis — we start where you are."
        buttons={[
          { label: "Free Home Valuation", href: "/en/home-valuation" },
          { label: "Book a consultation", href: "/en/contact", variant: "outline" },
        ]}
        trustLine="I give you the numbers and the options — you decide with full clarity."
      />
    </React.Suspense>
  </div>
));

IndexEn.displayName = "IndexEn";
export default IndexEn;
