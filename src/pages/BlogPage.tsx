import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import CTASection from "@/components/CTASection";
import { getPublishedPosts, getFeaturedPost, getCategories } from "@/data/blog-posts";
import { currentBlogStats } from "@/data/blog-market-stats";
import heroBlog from "@/assets/blog/photo-blogue-hero.webp";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const featured = getFeaturedPost();
  const allPosts = getPublishedPosts("fr");
  const categories = getCategories("fr");
  const posts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;
  const nonFeaturedPosts = posts.filter((p) => p.slug !== featured?.slug);

  const stats = currentBlogStats();
  const heroStats = stats.hero.fr;

  return (
    <>
      <PageMeta
        title="Blogue immobilier Gatineau · Conseils et analyses"
        description="Analyses du marché et conseils immobiliers pour Gatineau et l'Outaouais, rédigés par Yanis Gauthier-Sigeris, courtier immobilier résidentiel."
        ogImage="https://yanisgauthier.com/og/og-blog.jpg" />

      {/* Hero : vraie photo de Gatineau, voile seulement derrière le texte */}
      <section
        className="hero-gradient--with-bg blog-hero relative w-full"
        style={{ ["--hero-bg-image" as string]: `url(${heroBlog})`, backgroundPosition: "60% center" }}
      >
        <div className="section-container flex min-h-[min(60svh,520px)] flex-col justify-end pb-12 pt-28 sm:pb-16">
          <h1 className="font-display max-w-[14ch]" style={{ color: "var(--cream)", fontWeight: 600, fontSize: "clamp(2.375rem, 5vw, 4rem)", lineHeight: 1.02, letterSpacing: "-0.035em" }}>
            Marché immobilier{" "}<br className="hidden sm:block" />Outaouais
          </h1>
          <p className="mt-5 max-w-[30rem]" style={{ color: "rgba(247,244,238,0.92)", fontSize: "1.0625rem", lineHeight: 1.6 }}>
            Analyses du marché et conseils concrets pour vos projets immobiliers à Gatineau et en Outaouais.
          </p>
        </div>
        <a
          href="https://commons.wikimedia.org/wiki/File:DowntownGatineauAug2022.jpg"
          target="_blank"
          rel="noopener noreferrer license nofollow"
          className="absolute bottom-3 right-3 rounded-full px-3 py-1 text-[0.6875rem] text-white/85 hover:text-white"
          style={{ background: "rgba(0,14,53,0.72)" }}
        >
          Photo : Harleyd613, CC BY-SA 4.0, Wikimedia Commons (recadrée)
        </a>
      </section>

      {/* Chiffres du trimestre, sans défilement */}
      <section className="w-full bg-[var(--cream)]">
        <div className="section-container">
          <dl className="grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0" style={{ borderColor: "rgba(0,14,53,0.12)" }}>
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex items-baseline justify-between gap-4 py-5 sm:block sm:px-8 sm:py-8 sm:first:pl-0" style={{ borderColor: "rgba(0,14,53,0.12)" }}>
                <dd className="font-display" style={{ color: "var(--ink)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1, letterSpacing: "-0.03em" }}>
                  {stat.value}
                </dd>
                <dt className="text-[0.875rem] sm:mt-2" style={{ color: "var(--ink-soft)" }}>
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Fond blanc explicite : #root est bleu nuit (index.html), ces sections n'ont pas de fond propre */}
      <div className="bg-white">
      {/* Categories strip */}
      <section className="border-b" style={{ borderColor: "rgba(0,14,53,0.08)" }}>
        <div className="section-container py-5 sm:py-6">
          <div className="cardgrid-track -mx-5 flex snap-x items-center gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0" role="group" aria-label="Catégories">
            <button
              onClick={() => setActiveCategory(null)}
              aria-pressed={!activeCategory}
              className={`inline-flex h-9 shrink-0 snap-start items-center whitespace-nowrap rounded-full border px-4 text-[0.875rem] font-medium transition-colors duration-200 ${!activeCategory ? "border-[var(--ink)] bg-[var(--ink)] text-white" : "border-[rgba(0,14,53,0.18)] bg-white text-[var(--ink)] hover:border-[var(--ink)]"}`}
            >
              Tous
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`inline-flex h-9 shrink-0 snap-start items-center whitespace-nowrap rounded-full border px-4 text-[0.875rem] font-medium transition-colors duration-200 ${activeCategory === cat ? "border-[var(--ink)] bg-[var(--ink)] text-white" : "border-[rgba(0,14,53,0.18)] bg-white text-[var(--ink)] hover:border-[var(--ink)]"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article vedette : texte à gauche, photo à droite */}
      {featured && !activeCategory && (
        <section className="section-container pt-14 pb-4 sm:pt-20">
          <Link to={`/blogue/${featured.slug}/`} className="group grid items-center gap-8 md:grid-cols-[1fr_1.15fr] md:gap-12">
            <div className="order-2 md:order-1">
              <p className="text-[0.875rem]" style={{ color: "var(--ink-soft)" }}>
                {featured.category} · <time dateTime={featured.publishDate}>{new Date(`${featured.publishDate}T12:00:00`).toLocaleDateString("fr-CA", { year: "numeric", month: "long", day: "numeric" })}</time>
              </p>
              <h2 className="mt-4 font-display group-hover:underline underline-offset-[6px] decoration-2" style={{ color: "var(--ink)", fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)", fontWeight: 600, lineHeight: 1.06, letterSpacing: "-0.03em", textWrap: "balance" }}>
                {featured.title}
              </h2>
              <p className="mt-5" style={{ color: "var(--article-excerpt-color)", fontSize: "1.0625rem", lineHeight: 1.6 }}>
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold" style={{ color: "var(--gold-text)", fontSize: "0.9375rem" }}>
                Lire l'analyse <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
            {featured.featuredImage && (
              <div className="order-1 md:order-2 aspect-[16/10] overflow-hidden" style={{ borderRadius: 24 }}>
                <img src={featured.featuredImage} alt={featured.featuredImageCredit ? featured.featuredImageCredit.alt : ""} width={1400} height={875} decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
            )}
          </Link>
        </section>
      )}

      {/* Grille d'articles */}
      <section className="section-container pt-16 pb-20 sm:pt-24 sm:pb-28">
        <h2 className="font-display" style={{ color: "var(--ink)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.03em" }}>Derniers articles</h2>
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {nonFeaturedPosts.map((post) => (
            <Link key={post.slug} to={`/blogue/${post.slug}/`} className="group flex flex-col">
              {post.featuredImage && (
                <div className="aspect-[16/10] overflow-hidden" style={{ borderRadius: 16 }}>
                  <img src={post.featuredImageSm || post.featuredImage} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" decoding="async" width={720} height={450} />
                </div>
              )}
              <p className="mt-5 text-[0.8125rem]" style={{ color: "var(--ink-soft)" }}>
                {post.category} · <time dateTime={post.publishDate}>{new Date(`${post.publishDate}T12:00:00`).toLocaleDateString("fr-CA", { year: "numeric", month: "short", day: "numeric" })}</time>
              </p>
              <h3 className="mt-2 font-display group-hover:underline underline-offset-4" style={{ color: "var(--ink)", fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.22, letterSpacing: "-0.015em" }}>{post.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-[1.6]" style={{ color: "var(--ink-soft)" }}>{post.excerpt}</p>
            </Link>
          ))}
        </div>
        {nonFeaturedPosts.length === 0 && (
          <p className="mt-10" style={{ color: "var(--ink-soft)" }}>Aucun article dans cette catégorie pour le moment.</p>
        )}

        <details className="mt-16 border-t pt-6 text-[0.8125rem]" style={{ borderColor: "rgba(0,14,53,0.12)", color: "var(--ink-soft)" }}>
          <summary className="cursor-pointer font-medium" style={{ color: "var(--ink)" }}>Crédits photos</summary>
          <p className="mt-3">Photos sous licence libre, Wikimedia Commons, recadrées pour le site.</p>
          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {allPosts.filter((p) => p.featuredImageCredit).map((p) => (
              <li key={p.slug}>
                {p.title} :{" "}
                <a href={p.featuredImageCredit!.href} target="_blank" rel="noopener noreferrer license nofollow" className="underline underline-offset-2">
                  {p.featuredImageCredit!.alt} · {p.featuredImageCredit!.artist}, {p.featuredImageCredit!.license}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </section>

      </div>

      <CTASection
        dark
        title="Besoin de conseils personnalisés?"
        text="Les articles sont un bon point de départ. Pour une stratégie adaptée à votre situation, parlons-en."
        buttons={[
          { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
          { label: "Parler à Yanis", href: "/contact-yanis", variant: "outline" },
        ]}
        trustLine="On avance à votre rythme."
      />
    </>
  );
};

export default BlogPage;
