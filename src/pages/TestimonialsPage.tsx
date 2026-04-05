import PageMeta from "@/components/PageMeta";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ReviewCard from "@/components/ReviewCard";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";
import { reviews, getReviewsByCategory } from "@/data/reviews";
import type { Review } from "@/data/reviews";
import heroImg from "@/assets/hero-testimonials.webp";

const categories: { key: Review["category"]; label: string; title: string }[] = [
  { key: "seller", label: "Vendeurs", title: "Ils ont vendu avec confiance" },
  { key: "buyer", label: "Acheteurs", title: "Ils ont acheté en toute confiance" },
  { key: "relocation", label: "Relocalisation", title: "Ils se sont installés à Gatineau" },
  { key: "military", label: "Militaires", title: "Mutation réussie, sans stress" },
  { key: "plex", label: "Investisseurs", title: "Décisions éclairées, résultats concrets" },
];

const TestimonialsPage = () => (
   <>
    <PageMeta title="Témoignages clients · Gatineau et Outaouais" description="Découvrez ce que disent les clients de Yanis Gauthier-Sigeris. Témoignages de vendeurs, acheteurs et militaires à Gatineau, Aylmer et Hull." ogImage="https://yanisgauthier.com/og/og-testimonials.jpg" />
    <HeroSection
      compact
      overline="Témoignages"
      title="Ce que disent mes clients"
      subtitle="Des vendeurs, acheteurs, relocalisés et investisseurs partagent leur expérience avec Yanis."
      primaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      secondaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      heroBgImage={heroImg}
    />

    {categories.map((cat) => {
      const catReviews = getReviewsByCategory(cat.key);
      if (catReviews.length === 0) return null;
      return (
        <section
          key={cat.key}
          className={`section-padding ${categories.indexOf(cat) % 2 === 1 ? "bg-secondary/20" : "bg-background"}`}
        >
          <div className="section-container">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="label-overline mb-3">{cat.label}</p>
              <h2>{cat.title}</h2>
            </motion.div>
            <div className={`grid gap-6 ${catReviews.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
              {catReviews.map((review, i) => (
                <ReviewCard key={review.id} review={review} variant="full" index={i} />
              ))}
            </div>
          </div>
        </section>
      );
    })}

    <CTASection
      dark
      overline="Prochaine étape"
      title="Prêt à vivre une expérience similaire?"
      text="Peu importe votre projet, on commence par une conversation simple et à votre rythme."
      buttons={[
        { label: "Réserver une consultation", href: "/contact-yanis" },
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />
  </>
);

export default TestimonialsPage;
