import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { getPublishedPosts, getFeaturedPost, getCategories } from "@/data/blog-posts";
import heroBlog from "@/assets/hero-blog.webp";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const featured = getFeaturedPost();
  const allPosts = getPublishedPosts("fr");
  const categories = getCategories("fr");
  const posts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;
  const nonFeaturedPosts = posts.filter((p) => p.slug !== featured?.slug);

  const tickerItems = [
    "Mars 2026",
    "Plex +19%",
    "Délai 23 jours",
    "Prix médian 585 500$",
    "Unifamiliale −9%",
    "Copropriété −32%",
    "Source : Chambre immobilière de l'Outaouais",
  ];

  return (
    <>
      <SEO title="Blogue immobilier Gatineau | Conseils YGS" description="Conseils immobiliers pour Gatineau et l'Outaouais. Marché, vente, achat, investissement plex, relocalisation." canonical="https://yanisgauthier.com/blogue" hreflangFr="https://yanisgauthier.com/blogue" hreflangEn="https://yanisgauthier.com/en/blog" />
      <PageMeta
        title="Blogue immobilier Gatineau · Conseils et analyses"
        description="Articles, analyses et conseils immobiliers pour Gatineau et l'Outaouais. Vendeurs, acheteurs, investisseurs — par Yanis Gauthier-Sigeris, courtier immobilier."
        ogImage="https://yanisgauthier.com/og/og-blog.jpg" />

      {/* Editorial hero */}
      <section
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(23,48,59,0.92), rgba(23,48,59,0.78)), url(${heroBlog})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "280px",
        }}
        className="w-full"
      >
        <div className="section-container" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-12 items-start">
            {/* Left: editorial title */}
            <div>
              <div className="flex items-center gap-3">
                <span className="block h-px w-8" style={{ background: "#A88A5A" }} />
                <span style={{ color: "#A88A5A", fontSize: "10px", letterSpacing: "0.18em" }} className="uppercase font-medium">
                  YGS · Analyses & perspectives
                </span>
              </div>
              <h1 className="mt-5 font-display" style={{ color: "#F7F4EF", fontWeight: 300, fontSize: "clamp(2.25rem, 5vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}>
                Marché immobilier
                <br />
                <span style={{ color: "#A88A5A", fontStyle: "italic", fontWeight: 300 }}>Outaouais</span>
              </h1>
              <p className="mt-5 max-w-md" style={{ color: "#F7F4EF", opacity: 0.5, fontSize: "13px", lineHeight: 1.6 }}>
                Articles, analyses et conseils pour vendre, acheter ou investir intelligemment à Gatineau et en Outaouais.
              </p>
            </div>

            {/* Right: market stats */}
            <div className="md:pl-8 md:border-l" style={{ borderColor: "rgba(247,244,239,0.08)" }}>
              {[
                { value: "+19%", label: "Ventes plex" },
                { value: "23 j", label: "Délai moyen" },
                { value: "585 500 $", label: "Prix médian plex" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between gap-4 py-4"
                  style={{
                    borderBottom: i < 2 ? "1px solid rgba(247,244,239,0.08)" : "none",
                  }}
                >
                  <span className="font-display" style={{ color: "#F7F4EF", fontSize: "36px", fontWeight: 300, lineHeight: 1 }}>
                    {stat.value}
                  </span>
                  <span className="uppercase" style={{ color: "#A88A5A", fontSize: "10px", letterSpacing: "0.16em" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div
        className="w-full overflow-hidden"
        style={{ background: "#A88A5A", height: "38px" }}
        aria-hidden="true"
      >
        <div className="flex h-full items-center" style={{ animation: "blog-ticker 30s linear infinite", whiteSpace: "nowrap" }}>
          {[0, 1].map((loop) => (
            <div key={loop} className="flex items-center shrink-0">
              {tickerItems.map((item, idx) => (
                <span key={`${loop}-${idx}`} className="flex items-center">
                  <span className="uppercase" style={{ color: "#F7F4EF", fontSize: "10px", letterSpacing: "0.18em", padding: "0 1.75rem" }}>
                    {item}
                  </span>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(247,244,239,0.5)" }} />
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`@keyframes blog-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      {/* Categories strip */}
      <section className="border-b border-border/30 bg-secondary/30">
        <div className="section-container py-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-muted-foreground/50 mr-2">Catégories</span>
            <button
              onClick={() => setActiveCategory(null)}
              className={`inline-flex h-8 items-center rounded-none border px-4 text-[0.8125rem] font-medium transition-all duration-200 ${!activeCategory ? "border-accent/40 bg-accent/10 text-accent" : "border-border/40 bg-background text-muted-foreground hover:border-accent/30 hover:text-foreground hover:shadow-sm"}`}
            >
              Tous
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex h-8 items-center rounded-none border px-4 text-[0.8125rem] font-medium transition-all duration-200 ${activeCategory === cat ? "border-accent/40 bg-accent/10 text-accent" : "border-border/40 bg-background text-muted-foreground hover:border-accent/30 hover:text-foreground hover:shadow-sm"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured editorial */}
      {featured && !activeCategory && (
        <section className="section-container section-spacing">
          <div className="grid gap-0 md:grid-cols-2 overflow-hidden rounded-lg border border-border/40">
            {/* Left column */}
            <div className="p-8 sm:p-10 lg:p-12 bg-background flex flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <span className="uppercase font-semibold" style={{ color: "#A88A5A", fontSize: "10px", letterSpacing: "0.16em" }}>
                  {featured.category}
                </span>
                <span style={{ color: "#17303B", opacity: 0.4, fontSize: "11px" }}>·</span>
                <time style={{ color: "#17303B", opacity: 0.5, fontSize: "11px" }}>
                  {new Date(featured.publishDate).toLocaleDateString("fr-CA", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
              <h2 className="mt-5 font-display" style={{ color: "#17303B", fontSize: "clamp(1.75rem, 3.5vw, 40px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
                {featured.title}
              </h2>
              <p className="mt-5 flex-1" style={{ color: "#17303B", opacity: 0.7, fontSize: "14px", lineHeight: 1.65 }}>
                {featured.excerpt}
              </p>
              <Link
                to={`/blogue/${featured.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-medium transition-opacity hover:opacity-70"
                style={{ color: "#A88A5A", fontSize: "13px", letterSpacing: "0.04em" }}
              >
                Lire l'analyse <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Right column — pull-quote + stats */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col" style={{ background: "#ECEAE2", borderTop: "3px solid #A88A5A" }}>
              <blockquote className="font-display italic" style={{ color: "#17303B", fontSize: "18px", lineHeight: 1.5, fontWeight: 400 }}>
                « En mars 2026, les plex à Gatineau se vendent en moyenne en 23 jours — contre 65 jours un an plus tôt. »
              </blockquote>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "+19%", label: "Ventes plex" },
                  { value: "23 j", label: "Délai moyen" },
                  { value: "585 500 $", label: "Prix médian" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display" style={{ color: "#17303B", fontSize: "clamp(1.25rem, 2.5vw, 28px)", fontWeight: 400, lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div className="mt-2 uppercase" style={{ color: "#17303B", opacity: 0.5, fontSize: "10px", letterSpacing: "0.14em" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article grid */}
      <section className="section-container section-spacing">
        <SectionHeading overline="Articles" title="Derniers articles" centered />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nonFeaturedPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blogue/${post.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-background transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: "#A88A5A" }}
              />
              {post.featuredImage && (
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={post.featuredImage} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" width={1200} height={672} />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex w-fit h-6 items-center rounded-none bg-accent/10 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-accent">{post.category}</span>
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
