import { useParams, Navigate, Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import PageMeta from "@/components/PageMeta";
import CTASection from "@/components/CTASection";
import { getPostBySlug, getPublishedPosts } from "@/data/blog-posts";
import { useLanguage } from "@/contexts/LanguageContext";

const BASE_URL = "https://yanisgauthier.com";

const BlogPostingJsonLd = ({ post, lang }: { post: import("@/data/blog-posts").BlogPost; lang: "fr" | "en" }) => {
  const isFr = lang === "fr";
  const slug = isFr ? post.slug : post.slugEn;
  const url = `${BASE_URL}${isFr ? "/blogue" : "/en/blog"}/${slug}`;

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: isFr ? post.title : post.titleEn,
      description: isFr ? post.metaDescription : post.metaDescriptionEn,
      url,
      datePublished: post.publishDate,
      dateModified: post.publishDate,
      image: post.featuredImage ? `${BASE_URL}${post.featuredImage}` : undefined,
      author: {
        "@type": "Person",
        name: "Yanis Gauthier-Sigeris",
        jobTitle: isFr ? "Courtier immobilier" : "Real Estate Broker",
        url: BASE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "YGS — Yanis Gauthier-Sigeris",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
        },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: isFr ? "fr-CA" : "en-CA",
      articleSection: isFr ? post.category : post.categoryEn,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ygs-blogposting-jsonld";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => { script.remove(); };
  }, [post, isFr, url]);

  return null;
};

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const lang = useLanguage();
  const post = slug ? getPostBySlug(slug) : undefined;
  const isFr = lang === "fr";

  // All hooks must be before any early return
  useEffect(() => {
    if (!post || !post.published) return;
    const frSlug = post.slug;
    const enSlug = post.slugEn;
    const frUrl = `${BASE_URL}/blogue/${frSlug}`;
    const enUrl = `${BASE_URL}/en/blog/${enSlug}`;

    const createLink = (hreflang: string, href: string) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", hreflang);
      link.setAttribute("href", href);
      document.head.appendChild(link);
      return link;
    };

    const links = [
      createLink("fr-CA", frUrl),
      createLink("en-CA", enUrl),
      createLink("x-default", frUrl),
    ];

    return () => { links.forEach(l => l.remove()); };
  }, [post]);

  const body = post && post.published ? (isFr ? post.body : post.bodyEn) : "";

  const slugify = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9àâäéèêëïîôùûüÿçæœ]+/g, "-").replace(/(^-|-$)/g, "");

  const tocItems = useMemo(() => {
    if (!body) return [];
    const items: { level: number; text: string; id: string }[] = [];
    body.split("\n").forEach((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("## ") && !trimmed.startsWith("### ")) {
        const text = trimmed.slice(3);
        items.push({ level: 2, text, id: slugify(text) });
      } else if (trimmed.startsWith("### ")) {
        const text = trimmed.slice(4);
        items.push({ level: 3, text, id: slugify(text) });
      }
    });
    return items;
  }, [body]);

  const showToc = tocItems.filter((t) => t.level === 2).length >= 3;

  if (!post || !post.published) {
    return <Navigate to={lang === "en" ? "/en/blog" : "/blogue"} replace />;
  }

  const title = isFr ? post.title : post.titleEn;
  const seoTitle = isFr ? post.seoTitle : post.seoTitleEn;
  const metaDesc = isFr ? post.metaDescription : post.metaDescriptionEn;
  const category = isFr ? post.category : post.categoryEn;
  const dateStr = new Date(post.publishDate).toLocaleDateString(
    isFr ? "fr-CA" : "en-CA",
    { year: "numeric", month: "long", day: "numeric" }
  );
  const blogHref = isFr ? "/blogue" : "/en/blog";
  const ctaHref = isFr ? "/evaluation-gratuite-gatineau" : "/en/home-valuation";
  const contactHref = isFr ? "/contact-yanis" : "/en/contact";

  // Related posts (same category, exclude current)
  const related = getPublishedPosts(isFr ? "fr" : "en")
    .filter((p) => {
      const cat = isFr ? p.category : p.categoryEn;
      const s = isFr ? p.slug : p.slugEn;
      return cat === category && s !== slug;
    })
    .slice(0, 3);

  // Simple markdown-ish renderer for ## and ### headings, bold, lists, paragraphs
  const renderBody = (md: string) => {
    const lines = md.split("\n");
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="my-4 space-y-2 pl-5">
            {listItems.map((li, i) => (
              <li key={i} className="list-disc text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInline(li) }} />
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const formatInline = (text: string) =>
      text
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' class='text-accent underline underline-offset-2 hover:text-accent/80 transition-colors'>$1</a>")
        .replace(/\*\*(.+?)\*\*/g, "<strong class='text-foreground font-semibold'>$1</strong>");

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith("### ")) {
        flushList();
        const text = line.slice(4);
        const id = slugify(text);
        elements.push(<h3 key={i} id={id} className="mt-8 mb-3 text-lg font-semibold text-foreground scroll-mt-24">{text}</h3>);
      } else if (line.startsWith("## ")) {
        flushList();
        const text = line.slice(3);
        const id = slugify(text);
        elements.push(<h2 key={i} id={id} className="mt-10 mb-4 text-xl sm:text-2xl font-bold text-foreground scroll-mt-24">{text}</h2>);
      } else if (line.startsWith("- ")) {
        listItems.push(line.slice(2));
      } else if (/^\d+\.\s/.test(line)) {
        flushList();
        listItems.push(line.replace(/^\d+\.\s/, ""));
      } else if (line === "") {
        flushList();
      } else {
        flushList();
        elements.push(<p key={i} className="my-3 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />);
      }
    }
    flushList();
    return elements;
  };


  return (
    <>
      <PageMeta title={seoTitle} description={metaDesc} canonical={`${BASE_URL}${isFr ? `/blogue/${post.slug}` : `/en/blog/${post.slugEn}`}`} ogImage={post.featuredImage ? `${BASE_URL}${post.featuredImage}` : `${BASE_URL}/og/og-blog.jpg`} />
      <BlogPostingJsonLd post={post} lang={isFr ? "fr" : "en"} />

      {/* Featured image banner */}
      {post.featuredImage && (
        <div className="w-full aspect-[21/9] sm:aspect-[3/1] overflow-hidden">
          <img src={post.featuredImage} alt={title} className="h-full w-full object-cover" width={1200} height={672} loading="eager" decoding="auto" {...{"fetchpriority": "high"} as any} />
        </div>
      )}

      {/* Article header */}
      <article className="section-container pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-[0.8125rem] text-muted-foreground/60">
            <Link to={blogHref} className="hover:text-foreground transition-colors">
              {isFr ? "Blogue" : "Blog"}
            </Link>
            <span>/</span>
            <span className="text-foreground/80 truncate">{title}</span>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex h-6 items-center rounded-full bg-accent/10 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-accent">{category}</span>
            <time className="text-[0.8125rem] text-muted-foreground/60">{dateStr}</time>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground">{title}</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {isFr ? post.excerpt : post.excerptEn}
          </p>

          <hr className="my-8 border-border/30" />

          {/* Table of Contents */}
          {showToc && (
            <nav className="mb-10 rounded-2xl border border-border/30 bg-secondary/20 p-6 sm:p-8">
              <p className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-muted-foreground/50 mb-4">
                {isFr ? "Dans cet article" : "In this article"}
              </p>
              <ol className="space-y-1.5">
                {tocItems.filter((t) => t.level === 2).map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group flex items-start gap-3 rounded-lg px-3 py-1.5 text-[0.875rem] text-muted-foreground transition-colors hover:bg-accent/5 hover:text-accent"
                    >
                      <span className="mt-px text-[0.75rem] font-medium text-muted-foreground/40 group-hover:text-accent/60">{i + 1}.</span>
                      <span>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Body */}
          <div className="prose-article">
            {renderBody(body)}
          </div>

          {/* Author */}
          <div className="mt-12 rounded-2xl border border-border/30 bg-secondary/20 p-6 sm:p-8">
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-muted-foreground/50 mb-2">
              {isFr ? "À propos de l'auteur" : "About the Author"}
            </p>
            <p className="font-semibold text-foreground">Yanis Gauthier-Sigeris</p>
            <p className="mt-1 text-[0.875rem] text-muted-foreground">
              {isFr
                ? "Courtier immobilier à Gatineau · RE/MAX Direct · Spécialisé en revente résidentielle et investissement en Outaouais."
                : "Real Estate Broker in Gatineau · RE/MAX Direct · Specializing in residential resale and investment in the Outaouais."}
            </p>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-border/30 bg-secondary/20">
          <div className="section-container section-spacing">
            <h2 className="text-center text-xl font-bold text-foreground mb-8">
              {isFr ? "Articles connexes" : "Related Articles"}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {related.map((rp) => {
                const rSlug = isFr ? rp.slug : rp.slugEn;
                const rTitle = isFr ? rp.title : rp.titleEn;
                const rExcerpt = isFr ? rp.excerpt : rp.excerptEn;
                const rCat = isFr ? rp.category : rp.categoryEn;
                const base = isFr ? "/blogue" : "/en/blog";
                return (
                  <Link
                    key={rSlug}
                    to={`${base}/${rSlug}`}
                    className="group flex flex-col rounded-2xl border border-border/40 bg-background p-6 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span className="inline-flex w-fit h-6 items-center rounded-full bg-accent/10 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-accent">{rCat}</span>
                    <h3 className="mt-3 text-[0.9375rem] font-semibold leading-snug group-hover:text-accent transition-colors">{rTitle}</h3>
                    <p className="mt-2 text-[0.8125rem] text-muted-foreground flex-1">{rExcerpt}</p>
                    <span className="mt-3 text-[0.8125rem] font-medium text-accent">{isFr ? "Lire →" : "Read →"}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection
        dark
        title={isFr ? "Besoin de conseils personnalisés?" : "Need personalized advice?"}
        text={isFr
          ? "Les articles sont un bon point de départ. Pour une stratégie adaptée à votre situation, parlons-en."
          : "Articles are a great starting point. For a strategy tailored to your situation, let's talk."}
        buttons={[
          { label: isFr ? "Évaluation gratuite" : "Free Valuation", href: ctaHref },
          { label: isFr ? "Réserver une consultation" : "Book a Consultation", href: contactHref, variant: "outline" },
        ]}
        trustLine={isFr ? "Je vous accompagne à votre rythme." : "I work at your pace."}
      />
    </>
  );
};

export default BlogArticlePage;
