import PageMeta from "@/components/PageMeta";
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

// Seules les catégories qui ont des avis s'affichent : l'alternance blanc/crème suit cet ordre,
// et le lien Google du bas prend la couleur de la dernière catégorie affichée.
const visibleCategories = categories.filter((c) => getReviewsByCategory(c.key).length > 0);
const lastCategoryBg = visibleCategories.length % 2 === 0 ? "var(--cream)" : "#fff";

const TestimonialsPageEn = () => (
  <>
    <PageMeta title="Client Testimonials | YGS" description="Read what sellers, buyers, relocating families and investors say about working with Yanis Gauthier-Sigeris, real estate broker in Gatineau." ogImage="https://yanisgauthier.com/og/og-testimonials.jpg" />
    <HeroSection compact overline="Testimonials" title="What our clients say" subtitle="Sellers, buyers, relocators and investors share their experience with Yanis." primaryCta={{ label: "Talk to Yanis", href: "/en/contact" }} secondaryCta={{ label: "Free Home Valuation", href: "/en/home-valuation" }} heroBgImage={heroImg} />
    {/* Google Reviews badge */}
    <section className="section-padding pb-0" style={{ background: "#fff" }}>
      <div className="section-container flex flex-col items-center sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h2>Our clients on Google</h2>
        </div>
        <GoogleReviewBadge />
      </div>
    </section>
    {visibleCategories.map((cat, idx) => {
      const catReviews = getReviewsByCategory(cat.key);
      return (
        <section key={cat.key} className={`section-padding ${idx % 2 === 1 ? "bg-[var(--cream)]" : "bg-white"}`}>
          <div className="section-container">
            <div className="mb-10">
              <h2>{cat.title}</h2>
            </div>
            <div className={`grid gap-6 ${catReviews.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
              {catReviews.map((r, i) => <ReviewCard key={r.id} review={r} variant="full" index={i} />)}
            </div>
          </div>
        </section>
      );
    })}
    {/* Google review link */}
    <section className="section-padding pt-0" style={{ background: lastCategoryBg }}>
      <div className="section-container text-center">
        <a href="https://maps.app.goo.gl/BkkH6Zrw7Yj3XdpA9" target="_blank" rel="noopener noreferrer" className="text-[.78rem] transition-colors" style={{ color: "hsl(var(--muted-foreground))" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={(e) => e.currentTarget.style.color = "hsl(var(--muted-foreground))"}>
          Leave a Google review →
        </a>
      </div>
    </section>
    <CTASection dark overline="Next step" title="Ready for a similar experience?" text="Whatever your project, we start with a simple, honest conversation." buttons={[{ label: "Talk to Yanis", href: "/en/contact" }, { label: "Free Home Valuation", href: "/en/home-valuation", variant: "outline" }]} trustLine="I give you the numbers and the options, you decide with full clarity." />
  </>
);
export default TestimonialsPageEn;
