import { useParams, Navigate, Link } from "react-router-dom";
import { canonicalPath } from "@/lib/url-utils";
import { useEffect, useMemo, useState } from "react";
import PageMeta from "@/components/PageMeta";
import { getPostBySlug, getPublishedPosts } from "@/data/blog-posts";
import { useLanguage } from "@/contexts/LanguageContext";
import yanisPortrait from "@/assets/yanis-avatar.webp";
import { blogCtaFor } from "@/data/blog-cta";

const BASE_URL = "https://yanisgauthier.com";

export const BlogPostingJsonLd = ({ post, lang }: { post: import("@/data/blog-posts").BlogPost; lang: "fr" | "en" }) => {
  const isFr = lang === "fr";
  const slug = isFr ? post.slug : post.slugEn;
  const url = `${BASE_URL}${isFr ? "/blogue" : "/en/blog"}/${slug}/`;

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: isFr ? post.title : post.titleEn,
      description: isFr ? post.metaDescription : post.metaDescriptionEn,
      url,
      datePublished: post.publishDate,
      dateModified: post.updatedDate ?? post.publishDate,
      image: post.featuredImage ? `${BASE_URL}${post.featuredImage}` : undefined,
      author: {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "Yanis Gauthier-Sigeris",
        jobTitle: isFr ? "Courtier immobilier résidentiel" : "Residential Real Estate Broker",
        url: `${BASE_URL}/`,
      },
      publisher: {
        "@type": "Organization",
        name: "YGS · Yanis Gauthier-Sigeris",
        url: BASE_URL,
        logo: { "@type": "ImageObject", url: `${BASE_URL}/apple-touch-icon.png`, width: 180, height: 180 },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: isFr ? "fr-CA" : "en-CA",
      articleSection: isFr ? post.category : post.categoryEn,
    };

    const script = document.getElementById("ygs-blogposting-jsonld") || document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.id = "ygs-blogposting-jsonld";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, [post, isFr, url]);

  return null;
};

/** Plain text for schema: [label](href) → label, **bold** → bold. */
const mdToText = (t: string) => t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1").replace(/\*\*(.+?)\*\*/g, "$1");

/** Safe inline HTML for FAQ answers: escape, then links and bold. */
const faqAnswerHtml = (t: string) =>
  t
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label: string, href: string) => `<a href='${canonicalPath(href)}' class='underline underline-offset-2' style='color:var(--gold-text)'>${label}</a>`)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

export const FaqPageJsonLd = ({ items }: { items: { q: string; a: string }[] }) => {
  useEffect(() => {
    if (!items || items.length === 0) return;
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: mdToText(it.a) },
      })),
    };
    const script = document.getElementById("ygs-faqpage-jsonld") || document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.id = "ygs-faqpage-jsonld";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, [items]);
  return null;
};

// Scroll progress bar — gold, 3px, top of viewport
const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
      setProgress(scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        zIndex: 100,
        background: "var(--gold3)",
      }}
    >
      <div style={{ height: "100%", width: "100%", background: "var(--gold)", transform: `scaleX(${progress / 100})`, transformOrigin: "left", transition: "transform 0.05s linear" }} />
    </div>
  );
};

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const lang = useLanguage();
  const post = slug ? getPostBySlug(slug) : undefined;
  const isFr = lang === "fr";

  useEffect(() => {
    if (!post || !post.published) return;
    const frUrl = `${BASE_URL}/blogue/${post.slug}/`;
    const enUrl = `${BASE_URL}/en/blog/${post.slugEn}/`;
    const setHreflang = (hreflang: string, href: string) => {
      const selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
      let link = document.head.querySelector<HTMLLinkElement>(selector);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };
    setHreflang("fr-CA", frUrl);
    setHreflang("en-CA", enUrl);
    setHreflang("x-default", frUrl);
  }, [post]);

  const body = post && post.published ? (isFr ? post.body : post.bodyEn) : "";

  const slugify = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9àâäéèêëïîôùûüÿçæœ]+/g, "-").replace(/(^-|-$)/g, "");

  // Reading time (200 wpm) — override if explicitly set on the post
  const readingTime = useMemo(() => {
    if (post && post.published && typeof post.readingTimeOverride === "number") return post.readingTimeOverride;
    if (!body) return 0;
    const words = body.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }, [body, post]);


  if (!post || !post.published) {
    return <Navigate to={lang === "en" ? "/en/blog" : "/blogue"} replace />;
  }

  const title = isFr ? post.title : post.titleEn;
  // Keep "<title> | YGS" unless it runs past 65 characters (truncated in Google);
  // then fall back to the shorter seoTitle written for the post, if any.
  const longSeoTitle = `${title} | YGS`;
  const shortSeoTitle = isFr ? post.seoTitle : post.seoTitleEn;
  const seoTitle = longSeoTitle.length > 65 && shortSeoTitle ? shortSeoTitle : longSeoTitle;
  const metaDesc = isFr ? post.metaDescription : post.metaDescriptionEn;
  const category = isFr ? post.category : post.categoryEn;
  const excerpt = isFr ? post.excerpt : post.excerptEn;
  const dateStr = new Date(`${post.publishDate}T12:00:00`).toLocaleDateString(
    isFr ? "fr-CA" : "en-CA",
    { year: "numeric", month: "long", day: "numeric" }
  );
  const updatedStr = post.updatedDate && post.updatedDate !== post.publishDate
    ? new Date(`${post.updatedDate}T12:00:00`).toLocaleDateString(isFr ? "fr-CA" : "en-CA", { year: "numeric", month: "long", day: "numeric" })
    : null;
  const blogHref = isFr ? "/blogue/" : "/en/blog/";
  const ctaHref = isFr ? "/evaluation-gratuite-gatineau/" : "/en/home-valuation/";

  // Detect FAQ section
  const hasFaq = /^##\s*(FAQ|Questions fréquentes|Frequently asked)/im.test(body);

  // Next post (chronological order in published list)
  const allPosts = getPublishedPosts(isFr ? "fr" : "en");
  const currentIdx = allPosts.findIndex((p) => (isFr ? p.slug : p.slugEn) === slug);
  const nextPost = currentIdx >= 0 && currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;

  // Related articles: same topic first (category keyword), then newest.
  // Gives every post 3 contextual inlinks instead of the single one from the blog index.
  const topicKey = (c: string) =>
    c.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(/[·•|,]/)[0].trim().replace(/s$/, "");
  const currentKey = topicKey(isFr ? post.category : post.categoryEn || post.category);
  const sameTopic = allPosts.filter((p) => p.slug !== post.slug && topicKey(isFr ? p.category : p.categoryEn || p.category) === currentKey);
  const others = allPosts.filter((p) => p.slug !== post.slug && !sameTopic.includes(p));
  const relatedPosts = [...sameTopic, ...others].slice(0, 3);

  // Body renderer with drop cap on first paragraph + styled blockquotes + FAQ extraction
  const renderBody = (md: string) => {
    const lines = md.split("\n");
    const elements: JSX.Element[] = [];
    const faqItems: { q: string; a: string }[] = [];
    let listItems: string[] = [];
    let firstParagraphRendered = false;
    let inFaq = false;
    // Un « ### » placé avant tout « ## » est rendu en <h2> (même style), pour ne
    // pas sauter du <h1> à un <h3> depuis que le titre complet est dans le <h1>.
    let seenH2 = false;

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
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label: string, href: string) => `<a href='${canonicalPath(href)}' class='underline underline-offset-2 transition-colors' style='color:var(--gold-text)'>${label}</a>`)
        .replace(/\*\*(.+?)\*\*/g, "<strong style='color:var(--ink)' class='font-semibold'>$1</strong>")
        .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>");

    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i];
      const line = raw.trim();

      // FAQ detection — once we hit ## FAQ, capture pairs until next ##
      if (/^##\s*(FAQ|Questions fréquentes|Frequently asked)/i.test(line)) {
        flushList();
        inFaq = true;
        continue;
      }
      // A horizontal rule (---) or the next ## heading closes the FAQ, so the
      // CTA and byline that follow aren't glued onto the last answer.
      if (inFaq && (line.startsWith("## ") || /^-{3,}$/.test(line))) {
        inFaq = false;
        // fall through to normal handling
      }

      if (inFaq) {
        // Strip surrounding ** if the question/answer is wrapped in markdown bold
        const stripped = line.replace(/^\*\*\s*/, "").replace(/\s*\*\*$/, "").trim();
        const qMatch = stripped.match(/^Q\d*\s*[:：]\s*(.+)$/i);
        const aMatch = stripped.match(/^[RA]\d*\s*[:：]\s*(.+)$/i);
        if (qMatch) {
          faqItems.push({ q: qMatch[1].replace(/\*\*$/, "").trim(), a: "" });
        } else if (aMatch && faqItems.length > 0) {
          faqItems[faqItems.length - 1].a = aMatch[1].trim();
        } else if (line && faqItems.length > 0 && faqItems[faqItems.length - 1].a) {
          faqItems[faqItems.length - 1].a += " " + line;
        }
        continue;
      }

      if (line.startsWith("### ")) {
        flushList();
        const text = line.slice(4);
        const h3Prominent = post?.h3Style === "prominent";
        const Sub = seenH2 ? "h3" : "h2";
        elements.push(
          h3Prominent ? (
            <Sub key={i} id={slugify(text)} className="scroll-mt-24" style={{ fontFamily: "var(--display)", color: "var(--ink)", fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)", fontWeight: 600, lineHeight: 1.3, marginTop: "48px", marginBottom: "16px" }}>
              {text}
            </Sub>
          ) : (
            <Sub key={i} id={slugify(text)} className="mt-10 mb-3 scroll-mt-24" style={{ fontFamily: "var(--display)", color: "var(--ink)", fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.015em" }}>
              {text}
            </Sub>
          )
        );
      } else if (line.startsWith("## ")) {
        flushList();
        seenH2 = true;
        const text = line.slice(3);
        elements.push(
          <h2 key={i} id={slugify(text)} className="mt-14 mb-4 scroll-mt-24" style={{ fontFamily: "var(--display)", color: "var(--ink)", fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)", fontWeight: 600, lineHeight: 1.12, letterSpacing: "-0.025em" }}>
            {text}
          </h2>
        );
      } else if (line.startsWith("> ")) {
        flushList();
        let text = line.slice(2);
        // [YGS] marker = personal commentary; skip the auto Source attribution.
        const isPersonal = /^\[YGS\]\s*/i.test(text);
        if (isPersonal) text = text.replace(/^\[YGS\]\s*/i, "");
        elements.push(
          <blockquote
            key={i}
            className="my-7"
            style={{
              borderLeft: "3px solid var(--action)",
              background: "var(--cream)",
              borderRadius: "0 16px 16px 0",
              padding: "24px 28px",
              fontFamily: "var(--sans)",
              fontStyle: "normal",
              fontSize: "17px",
              lineHeight: 1.6,
              color: "var(--ink)",
              fontWeight: 500,
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
            {!isPersonal && (
              <div className="mt-4 flex items-center gap-2">
                <span style={{ width: "20px", height: "1px", background: "rgba(0,14,53,0.3)" }} />
                <span style={{ color: "var(--ink-soft)", fontSize: "12px", fontFamily: "var(--sans)", fontStyle: "normal", fontWeight: 500 }}>
                  {isFr ? "Chiffres de marché" : "Market figures"}
                </span>
              </div>
            )}
            {isPersonal && (
              <div className="mt-4 flex items-center gap-2">
                <span style={{ width: "20px", height: "1px", background: "rgba(0,14,53,0.3)" }} />
                <span style={{ color: "var(--ink-soft)", fontSize: "12px", fontFamily: "var(--sans)", fontStyle: "normal", fontWeight: 500 }}>
                  {isFr ? "Regard YGS" : "YGS Insight"}
                </span>
              </div>
            )}
          </blockquote>
        );
      } else if (/^-{3,}$/.test(line)) {
        flushList();
        elements.push(<hr key={i} className="my-10" style={{ border: 0, borderTop: "1px solid rgba(0,14,53,0.12)" }} />);
      } else if (line.startsWith("- ")) {
        listItems.push(line.slice(2));
      } else if (/^\d+\.\s/.test(line)) {
        flushList();
        listItems.push(line.replace(/^\d+\.\s/, ""));
      } else if (line === "") {
        flushList();
      } else {
        flushList();
        if (!firstParagraphRendered) {
          firstParagraphRendered = true;
          // Drop cap via CSS ::first-letter (see .article-dropcap in index.css).
          // Splitting the first character into its own <span> made crawlers and
          // AI engines read "L e timing" instead of "Le timing".
          elements.push(
            <p
              key={i}
              className="my-4"
              style={{ color: "var(--article-body-color)", fontSize: "var(--article-body-size)", lineHeight: "var(--article-body-line-height)" }}
              dangerouslySetInnerHTML={{ __html: formatInline(line) }}
            />
          );
        } else {
          elements.push(
            <p key={i} className="my-4" style={{ color: "var(--article-body-color)", fontSize: "var(--article-body-size)", lineHeight: "var(--article-body-line-height)" }} dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
          );
        }
      }
    }
    flushList();

    return { elements, faqItems };
  };

  const { elements: bodyElements, faqItems } = renderBody(body);

  // Tags = derive from category words
  const tags = category.split(/[·•|,]/).map((t) => t.trim()).filter(Boolean);

  return (
    <>
      <PageMeta title={seoTitle} description={metaDesc} canonical={`${BASE_URL}${isFr ? `/blogue/${post.slug}/` : `/en/blog/${post.slugEn}/`}`} ogImage={post.featuredImage ? `${BASE_URL}${post.featuredImage}` : `${BASE_URL}/og/og-blog.jpg`} />
      <BlogPostingJsonLd post={post} lang={isFr ? "fr" : "en"} />
      {post.emitFaqSchema && faqItems.length > 0 && <FaqPageJsonLd items={faqItems} />}
      <ReadingProgressBar />

      {/* Hero : titre, résumé, puis la photo en vraies couleurs */}
      <section className="w-full bg-[var(--cream)]">
        <div className="section-container pt-10 pb-10 sm:pt-14 lg:pt-16">
          <nav className="flex items-center gap-2 text-[0.8125rem]" style={{ color: "var(--ink-soft)" }}>
            <Link to={blogHref} className="underline-offset-4 hover:underline" style={{ color: "var(--gold-text)" }}>
              {isFr ? "Blogue" : "Blog"}
            </Link>
            <span aria-hidden>/</span>
            <span className="truncate">{category}</span>
          </nav>
          <h1 className="mt-6 max-w-[22ch]" style={{ fontFamily: "var(--display)", color: "var(--ink)", fontWeight: 600, fontSize: "clamp(2.125rem, 4.6vw, 3.5rem)", lineHeight: 1.04, letterSpacing: "-0.035em", textWrap: "balance" }}>
            {title}
          </h1>
          <p className="mt-6 max-w-[40rem]" style={{ color: "var(--article-excerpt-color)", fontSize: "clamp(1.0625rem, 1.4vw, 1.1875rem)", lineHeight: 1.6 }}>
            {excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.875rem]" style={{ color: "var(--ink-soft)" }}>
            <span className="font-medium" style={{ color: "var(--ink)" }}>Yanis Gauthier-Sigeris</span>
            <span aria-hidden>·</span>
            <time dateTime={post.publishDate}>{dateStr}</time>
            {updatedStr && (
              <>
                <span aria-hidden>·</span>
                <span>
                  {isFr ? "Mis à jour le " : "Updated "}
                  <time dateTime={post.updatedDate}>{updatedStr}</time>
                </span>
              </>
            )}
            <span aria-hidden>·</span>
            <span>{readingTime} {isFr ? "min de lecture" : "min read"}</span>
          </div>
          {post.heroStats && post.heroStats.length > 0 && (
            <dl className="mt-8 grid max-w-[40rem] grid-cols-3 gap-6 border-t pt-6" style={{ borderColor: "rgba(0,14,53,0.12)" }}>
              {post.heroStats.map((s, idx) => (
                <div key={idx}>
                  <dt className="sr-only">{isFr ? s.label : (s.labelEn ?? s.label)}</dt>
                  <dd style={{ fontFamily: "var(--display)", color: "var(--ink)", fontSize: "clamp(1.375rem, 2.4vw, 1.75rem)", fontWeight: 600, lineHeight: 1, letterSpacing: "-0.02em" }}>
                    {isFr ? s.value : (s.valueEn ?? s.value)}
                  </dd>
                  <dd aria-hidden className="mt-2 text-[0.8125rem] leading-snug" style={{ color: "var(--ink-soft)" }}>
                    {isFr ? s.label : (s.labelEn ?? s.label)}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        {post.featuredImage && (
          <figure className="section-container pb-12 sm:pb-16">
            <img
              src={post.featuredImage}
              alt={post.featuredImageCredit ? (isFr ? post.featuredImageCredit.alt : post.featuredImageCredit.altEn) : ""}
              width={1600}
              height={900}
              fetchPriority="high"
              decoding="async"
              className="aspect-[16/10] w-full object-cover sm:aspect-[16/8]"
              style={{ borderRadius: 24 }}
            />
          </figure>
        )}
      </section>

      {/* Body + sidebar */}
      <div className="bg-white">
      <article className="section-container pt-14 pb-16 sm:pt-16">
        <div className={post.sources && post.sources.length > 0 ? "grid gap-12 lg:grid-cols-[minmax(0,42rem)_260px] lg:justify-between" : "max-w-[42rem]"}>
          {/* Body */}
          <div>
            <div className="max-w-none" style={{ color: "#33405E" }}>
              {bodyElements}
            </div>

            {/* FAQ section */}
            {hasFaq && faqItems.length > 0 && (
              <section className="mt-16">
                <h2
                  className="pb-4"
                  style={{
                    fontFamily: "var(--display)",
                    color: "var(--ink)",
                    fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)",
                    fontWeight: 600,
                    lineHeight: 1.12,
                    borderBottom: "1px solid rgba(0,14,53,0.15)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  FAQ
                </h2>
                <div className="mt-6">
                  {faqItems.map((item, i) => (
                    <div
                      key={i}
                      className="grid gap-4 py-6 sm:grid-cols-[40px_1fr]"
                      style={{ borderTop: i === 0 ? "none" : "1px solid rgba(0,14,53,0.1)" }}
                    >
                      <span style={{ fontFamily: "var(--display)", color: "var(--gold-text)", fontSize: "1rem", fontWeight: 600, lineHeight: 1.5 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p style={{ color: "var(--ink)", fontSize: "1.0625rem", fontWeight: 600, lineHeight: 1.45 }}>{item.q}</p>
                        <p className="mt-2" style={{ color: "var(--article-body-color)", fontSize: "1rem", lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: faqAnswerHtml(item.a) }} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {post.sources && post.sources.length > 0 && (
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div style={{ background: "var(--cream)", borderRadius: 16, padding: "20px 22px" }}>
              <p style={{ color: "var(--ink)", fontSize: "0.875rem", fontWeight: 600 }}>
                {post.sources.length > 1 ? "Sources" : "Source"}
              </p>
              <ul className="mt-2 space-y-2 list-none">
                {post.sources.map((src, i) => (
                  <li key={i} style={{ color: "var(--ink-soft)", fontSize: "0.8125rem", lineHeight: 1.5 }}>
                    {isFr ? src.fr : src.en}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          )}
        </div>
      </article>

      {/* Un seul appel à l'action, adapté au sujet de l'article */}
      {(() => {
        const c = blogCtaFor(post, isFr);
        return (
          <section data-page-cta="" style={{ background: "var(--ink)" }}>
            <div className="section-container py-16 sm:py-20 text-center">
              <h2 className="mx-auto max-w-[24ch]" style={{ fontFamily: "var(--display)", color: "var(--cream)", fontSize: "clamp(1.875rem, 3.4vw, 2.5rem)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.03em", textWrap: "balance" }}>
                {c.title}
              </h2>
              <p className="mx-auto mt-4 max-w-[34rem]" style={{ color: "rgba(247,244,238,0.85)", fontSize: "1.0625rem", lineHeight: 1.6 }}>
                {c.text}
              </p>
              <Link
                to={c.href}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--action)] px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-[var(--action-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink)]"
              >
                {c.label} <span aria-hidden>→</span>
              </Link>
            </div>
          </section>
        );
      })()}

      {/* Auteur */}
      <section className="bg-white">
        <div className="section-container pt-14 pb-4">
          <div className="flex max-w-[42rem] items-center gap-5">
            <img src={yanisPortrait} alt="" width={72} height={72} loading="lazy" decoding="async" className="h-[72px] w-[72px] shrink-0 object-cover" style={{ borderRadius: "50%", background: "var(--cream)" }} />
            <div>
              <p style={{ fontFamily: "var(--display)", color: "var(--ink)", fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                Yanis Gauthier-Sigeris
              </p>
              <p className="mt-1.5" style={{ color: "var(--ink-soft)", fontSize: "0.9375rem", lineHeight: 1.55 }}>
                {isFr
                  ? "Courtier immobilier résidentiel chez RE/MAX Direct depuis 2017, plus de 300 transactions en Outaouais, surtout à Aylmer et à Hull. Permis OACIQ n° 112201."
                  : "Residential real estate broker with RE/MAX Direct since 2017, over 300 transactions in the Outaouais, mostly in Aylmer and Hull. OACIQ licence no. 112201."}
              </p>
            </div>
          </div>
        </div>

      {/* À lire aussi (même sujet d'abord) */}
      {relatedPosts.length > 0 && (
        <div className="section-container pt-12 pb-16" aria-labelledby="related-articles-title">
          <p id="related-articles-title" style={{ fontFamily: "var(--display)", color: "var(--ink)", fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.1 }}>
            {isFr ? "À lire aussi" : "Related reading"}
          </p>
          <ul className="mt-6 grid gap-8 sm:grid-cols-3" style={{ listStyle: "none", padding: 0 }}>
            {relatedPosts.map((rp) => (
              <li key={rp.slug}>
                <Link to={`${blogHref}${isFr ? rp.slug : rp.slugEn}/`} className="group block">
                  {rp.featuredImage && (
                    <div className="aspect-[16/10] overflow-hidden" style={{ borderRadius: 16 }}>
                      <img src={rp.featuredImage} alt="" loading="lazy" decoding="async" width={800} height={500} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    </div>
                  )}
                  <span className="mt-4 block text-[0.8125rem]" style={{ color: "var(--ink-soft)" }}>
                    {isFr ? rp.category : rp.categoryEn || rp.category}
                  </span>
                  <span className="mt-1 block group-hover:underline underline-offset-4" style={{ fontFamily: "var(--display)", color: "var(--ink)", fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.01em" }}>
                    {isFr ? rp.title : rp.titleEn}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {nextPost && (
            <Link
              to={`${blogHref}${isFr ? nextPost.slug : nextPost.slugEn}/`}
              className="group mt-12 flex items-center justify-between gap-6 border-t pt-8"
              style={{ borderColor: "rgba(0,14,53,0.12)" }}
            >
              <span>
                <span className="block text-[0.8125rem]" style={{ color: "var(--ink-soft)" }}>{isFr ? "Article suivant" : "Next article"}</span>
                <span className="mt-1 block group-hover:underline underline-offset-4" style={{ fontFamily: "var(--display)", color: "var(--ink)", fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.25 }}>
                  {isFr ? nextPost.title : nextPost.titleEn}
                </span>
              </span>
              <span aria-hidden style={{ color: "var(--gold-text)", fontSize: "1.25rem" }} className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          )}
        </div>
      )}
      </section>
      </div>
    </>
  );
};

export default BlogArticlePage;
