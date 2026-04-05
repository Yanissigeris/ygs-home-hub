import PageMeta from "@/components/PageMeta";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ReviewCard from "@/components/ReviewCard";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";
import { getReviewsByCategoryEn as getReviewsByCategory } from "@/data/reviews-en";
import type { Review } from "@/data/reviews";
import heroImg from "@/assets/hero-testimonials.webp";

const categories: { key: Review["category"]; label: string; title: string }[] = [
  { key: "seller", label: "Sellers", title: "They sold with confidence" },
  { key: "buyer", label: "Buyers", title: "They bought with confidence" },
  { key: "relocation", label: "Relocation", title: "They settled in Gatineau" },
  { key: "military", label: "Military", title: "Successful posting, with confidence" },
  { key: "plex", label: "Investors", title: "Informed decisions, real results" },
];

const TestimonialsPageEn = () => (
  <>
    <PageMeta title="Client Testimonials — Verified Reviews | YGS" description="Read what sellers, buyers and military members say about working with Yanis Gauthier-Sigeris, real estate broker in Gatineau." ogImage="https://yanisgauthier.com/og/og-testimonials.jpg" />
    <HeroSection compact overline="Testimonials" title="What our clients say" subtitle="Sellers, buyers, relocators and investors share their experience with Yanis." primaryCta={{ label: "Book a consultation", href: "/en/contact" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} heroBgImage={heroImg} />
    {/* Google Reviews badge */}
    <section className="section-padding bg-background pb-0">
      <div className="section-container flex flex-col items-center sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <p className="label-overline mb-2">Verified reviews</p>
          <h2>Our clients on Google</h2>
        </div>
        <GoogleReviewBadge />
      </div>
    </section>
    {categories.map((cat, idx) => {
      const catReviews = getReviewsByCategory(cat.key);
      if (!catReviews.length) return null;
      return (
        <section key={cat.key} className={`section-padding ${idx % 2 === 1 ? "bg-secondary/20" : "bg-background"}`}>
          <div className="section-container">
            <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <p className="label-overline mb-3">{cat.label}</p><h2>{cat.title}</h2>
            </motion.div>
            <div className={`grid gap-6 ${catReviews.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
              {catReviews.map((r, i) => <ReviewCard key={r.id} review={r} variant="full" index={i} />)}
            </div>
          </div>
        </section>
      );
    })}
    {/* Google review link */}
    <section className="section-padding bg-background pt-0">
      <div className="section-container text-center">
        <a href="https://www.google.com/maps/place/Yanis+Gauthier-Sigeris+-+Courtier+immobilier+RE%2FMAX" target="_blank" rel="noopener noreferrer" className="text-[.78rem] transition-colors" style={{ color: "hsl(var(--muted-foreground))" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={(e) => e.currentTarget.style.color = "hsl(var(--muted-foreground))"}>
          Leave a Google review →
        </a>
      </div>
    </section>
    <CTASection dark overline="Next step" title="Ready for a similar experience?" text="Whatever your project, we start with a simple, honest conversation." buttons={[{ label: "Book a consultation", href: "/en/contact" }, { label: "Free Valuation", href: "/en/home-valuation", variant: "outline" }]} trustLine="I give you the numbers and the options — you decide with full clarity." />
  </>
);
export default TestimonialsPageEn;
