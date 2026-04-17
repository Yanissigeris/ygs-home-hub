import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import ContentBlock from "@/components/ContentBlock";
import heroImg from "@/assets/blog-default-cover.webp";
import { getPublishedPosts, getFeaturedPost, getCategories } from "@/data/blog-posts";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const featured = getFeaturedPost();
  const allPosts = getPublishedPosts("fr");
  const categories = getCategories("fr");
  const posts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;
  const nonFeaturedPosts = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <>
      <SEO title="Blogue immobilier Gatineau | Conseils YGS" description="Conseils immobiliers pour Gatineau et l'Outaouais. Marché, vente, achat, investissement plex, relocalisation." canonical="https://yanisgauthier.com/blogue" hreflangFr="https://yanisgauthier.com/blogue" hreflangEn="https://yanisgauthier.com/en/blog" />
      <PageMeta
        title="Blogue immobilier Gatineau · Conseils et analyses"
        description="Articles, analyses et conseils immobiliers pour Gatineau et l'Outaouais. Vendeurs, acheteurs, investisseurs — par Yanis Gauthier-Sigeris, courtier immobilier."
      ogImage="https://yanisgauthier.com/og/og-blog.jpg" />
      <HeroSection
        overline="BLOGUE · IMMOBILIER GATINEAU"
        title="Blogue immobilier"
        subtitle="Articles, analyses et conseils pour vendre, acheter ou investir intelligemment à Gatineau et en Outaouais."
        primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
        secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
        trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
        heroBgImage={heroImg}
      />

      {/* Categories strip */}
      <section className="border-b border-border/30 bg-secondary/30">
        <div className="section-container py-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-muted-foreground/50 mr-2">Catégories</span>
            <button
              onClick={() => setActiveCategory(null)}
              className={`inline-flex h-8 items-center rounded-full border px-4 text-[0.8125rem] font-medium transition-all duration-200 ${!activeCategory ? "border-accent/40 bg-accent/10 text-accent" : "border-border/40 bg-background text-muted-foreground hover:border-accent/30 hover:text-foreground hover:shadow-sm"}`}
            >
              Tous
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex h-8 items-center rounded-full border px-4 text-[0.8125rem] font-medium transition-all duration-200 ${activeCategory === cat ? "border-accent/40 bg-accent/10 text-accent" : "border-border/40 bg-background text-muted-foreground hover:border-accent/30 hover:text-foreground hover:shadow-sm"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featured && !activeCategory && (
        <ContentBlock>
          <SectionHeading overline="À la une" title="Article vedette" centered />
          <Link to={`/blogue/${featured.slug}`} className="group mt-10 block overflow-hidden rounded-2xl border border-border/40 bg-secondary/20 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5">
            {featured.featuredImage && (
              <div className="aspect-[21/9] overflow-hidden">
                <img src={featured.featuredImage} alt={featured.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" width={1200} height={672} />
              </div>
            )}
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex h-6 items-center rounded-full bg-accent/10 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-accent">{featured.category}</span>
                <time className="text-[0.75rem] text-muted-foreground/60">{new Date(featured.publishDate).toLocaleDateString("fr-CA", { year: "numeric", month: "long", day: "numeric" })}</time>
              </div>
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold leading-snug group-hover:text-accent transition-colors duration-200">{featured.title}</h3>
              <p className="prose-body mt-3">{featured.excerpt}</p>
              <span className="mt-5 inline-flex items-center text-[0.875rem] font-medium text-accent">Lire l'article →</span>
            </div>
          </Link>
        </ContentBlock>
      )}

      {/* Article grid */}
      <section className="section-container section-spacing">
        <SectionHeading overline="Articles" title="Derniers articles" centered />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nonFeaturedPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blogue/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-background transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5"
            >
              {post.featuredImage && (
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={post.featuredImage} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" width={1200} height={672} />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex w-fit h-6 items-center rounded-full bg-accent/10 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-accent">{post.category}</span>
                  <time className="text-[0.6875rem] text-muted-foreground/50">{new Date(post.publishDate).toLocaleDateString("fr-CA", { year: "numeric", month: "short", day: "numeric" })}</time>
                </div>
                <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug group-hover:text-accent transition-colors duration-200">{post.title}</h3>
                <p className="prose-body mt-2.5 text-[0.875rem] flex-1">{post.excerpt}</p>
                <span className="mt-4 text-[0.8125rem] font-medium text-accent">Lire →</span>
              </div>
            </Link>
          ))}
        </div>
        {nonFeaturedPosts.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">Aucun article dans cette catégorie pour le moment.</p>
        )}
      </section>

      <CTASection
        dark
        title="Besoin de conseils personnalisés?"
        text="Les articles sont un bon point de départ. Pour une stratégie adaptée à votre situation, parlons-en."
        buttons={[
          { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
          { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
        ]}
        trustLine="Je vous accompagne à votre rythme."
      />
    </>
  );
};

export default BlogPage;
