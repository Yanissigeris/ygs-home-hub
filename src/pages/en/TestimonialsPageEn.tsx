import PageMeta from "@/components/PageMeta";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ReviewCard from "@/components/ReviewCard";
import { getReviewsByCategory } from "@/data/reviews";
import type { Review } from "@/data/reviews";
import heroImg from "@/assets/hero-testimonials.jpg";

const categories: { key: Review["category"]; label: string; title: string }[] = [
  { key: "seller", label: "Sellers", title: "They sold with confidence" },
  { key: "buyer", label: "Buyers", title: "They bought with confidence" },
  { key: "relocation", label: "Relocation", title: "They settled in Gatineau" },
  { key: "military", label: "Military", title: "Successful posting, stress-free" },
  { key: "plex", label: "Investors", title: "Informed decisions, real results" },
];

const TestimonialsPageEn = () => (
  <>
    <PageMeta title="Client Testimonials — Verified Reviews | YGS" description="Discover what clients say about Yanis Gauthier-Sigeris. Testimonials from sellers, buyers and military members in Gatineau." />
    <HeroSection compact overline="Testimonials" title="What our clients say" subtitle="Sellers, buyers, relocators and investors share their experience with Yanis." primaryCta={{ label: "Book a consultation", href: "/en/contact" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} heroBgImage={heroImg} />
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
    <CTASection dark overline="Next step" title="Ready for a similar experience?" text="Whatever your project, we start with a simple, pressure-free conversation." buttons={[{ label: "Book a consultation", href: "/en/contact" }, { label: "Free Valuation", href: "/en/home-valuation", variant: "outline" }]} trustLine="Zero pressure — I give you the numbers and the options, you decide." />
  </>
);
export default TestimonialsPageEn;
