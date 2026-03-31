import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import ContentBlock from "@/components/ContentBlock";
import heroImg from "@/assets/hero-resources.webp";
import { getPublishedPosts, getFeaturedPost, getCategories } from "@/data/blog-posts";

const BlogPageEn = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const featured = getFeaturedPost();
  const allPosts = getPublishedPosts("en");
  const categories = getCategories("en");
  const posts = activeCategory
    ? allPosts.filter((p) => p.categoryEn === activeCategory)
    : allPosts;
  const nonFeaturedPosts = posts.filter((p) => p.slugEn !== featured?.slugEn);

  return (
    <>
      <PageMeta
        title="Gatineau Real Estate Blog · Tips & Market Insights | YGS"
        description="Articles, market analysis, and real estate advice for Gatineau and the Outaouais. Sellers, buyers, investors — by Yanis Gauthier-Sigeris, Real Estate Broker."
      />
      <HeroSection
        overline="BLOG · GATINEAU REAL ESTATE"
        title="Real Estate Blog"
        subtitle="Articles, analysis, and advice to help you buy, sell, or invest smartly in Gatineau and the Outaouais."
        primaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }}
        secondaryCta={{ label: "Talk to Yanis", href: "/en/contact" }}
        trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau"
        heroBgImage={heroImg}
      />

      {/* Categories strip */}
      <section className="border-b border-border/30 bg-secondary/30">
        <div className="section-container py-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-muted-foreground/50 mr-2">Categories</span>
            <button
              onClick={() => setActiveCategory(null)}
              className={`inline-flex h-8 items-center rounded-full border px-4 text-[0.8125rem] font-medium transition-all duration-200 ${!activeCategory ? "border-accent/40 bg-accent/10 text-accent" : "border-border/40 bg-background text-muted-foreground hover:border-accent/30 hover:text-foreground hover:shadow-sm"}`}
            >
              All
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
          <SectionHeading overline="Featured" title="Featured Article" centered />
          <Link to={`/en/blog/${featured.slugEn}`} className="group mt-10 block overflow-hidden rounded-2xl border border-border/40 bg-secondary/20 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5">
            {featured.featuredImage && (
              <div className="aspect-[21/9] overflow-hidden">
                <img src={featured.featuredImage} alt={featured.titleEn} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" width={1200} height={672} />
              </div>
            )}
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex h-6 items-center rounded-full bg-accent/10 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-accent">{featured.categoryEn}</span>
                <time className="text-[0.75rem] text-muted-foreground/60">{new Date(featured.publishDate).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</time>
              </div>
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold leading-snug group-hover:text-accent transition-colors duration-200">{featured.titleEn}</h3>
              <p className="prose-body mt-3">{featured.excerptEn}</p>
              <span className="mt-5 inline-flex items-center text-[0.875rem] font-medium text-accent">Read article →</span>
            </div>
          </Link>
        </ContentBlock>
      )}

      {/* Article grid */}
      <section className="section-container section-spacing">
        <SectionHeading overline="Articles" title="Latest Articles" centered />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nonFeaturedPosts.map((post) => (
            <Link
              key={post.slugEn}
              to={`/en/blog/${post.slugEn}`}
              className="group flex flex-col rounded-2xl border border-border/40 bg-background p-6 sm:p-7 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex w-fit h-6 items-center rounded-full bg-accent/10 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-accent">{post.categoryEn}</span>
                <time className="text-[0.6875rem] text-muted-foreground/50">{new Date(post.publishDate).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })}</time>
              </div>
              <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug group-hover:text-accent transition-colors duration-200">{post.titleEn}</h3>
              <p className="prose-body mt-2.5 text-[0.875rem] flex-1">{post.excerptEn}</p>
              <span className="mt-4 text-[0.8125rem] font-medium text-accent">Read →</span>
            </Link>
          ))}
        </div>
        {nonFeaturedPosts.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">No articles in this category yet.</p>
        )}
      </section>

      <CTASection
        dark
        title="Need personalized advice?"
        text="Articles are a great starting point. For a strategy tailored to your situation, let's talk."
        buttons={[
          { label: "Free Valuation", href: "/en/home-valuation" },
          { label: "Book a Consultation", href: "/en/contact", variant: "outline" },
        ]}
        trustLine="I work at your pace."
      />
    </>
  );
};

export default BlogPageEn;
