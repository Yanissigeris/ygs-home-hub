import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import PageMeta from "@/components/PageMeta";
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
        logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 },
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

const FaqPageJsonLd = ({ items }: { items: { q: string; a: string }[] }) => {
  useEffect(() => {
    if (!items || items.length === 0) return;
    // Option A: SSR is source of truth. Skip injection if a FAQPage script
    // already exists (either our SSR-injected one or a previous client mount).
    const existing = document.getElementById("ygs-faqpage-jsonld");
    if (existing) return;
    // Also bail if SSR injected an unidentified FAQPage script.
    const ssrFaq = Array.from(
      document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]')
    ).find((s) => s.textContent && s.textContent.includes('"@type":"FAQPage"'));
    if (ssrFaq) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
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
      <div style={{ height: "100%", width: `${progress}%`, background: "var(--gold)", transition: "width 0.05s linear" }} />
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
    const frUrl = `${BASE_URL}/blogue/${post.slug}`;
    const enUrl = `${BASE_URL}/en/blog/${post.slugEn}`;
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

  // Reading time (200 wpm) — override if explicitly set on the post
  const readingTime = useMemo(() => {
    if (post && post.published && typeof post.readingTimeOverride === "number") return post.readingTimeOverride;
    if (!body) return 0;
    const words = body.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }, [body, post]);

  // Split title into 2-3 lines for hero (ligne 3 = part after first colon if present)
  const titleParts = useMemo(() => {
    if (post && post.published && post.titleLines) {
      const tl = post.titleLines;
      return isFr
        ? { line1: tl.line1, line2: tl.line2 ?? "", line3: tl.line3 ?? "" }
        : { line1: tl.line1En, line2: tl.line2En ?? "", line3: tl.line3En ?? "" };
    }
    const t = post && post.published ? (isFr ? post.title : post.titleEn) : "";
    const colonIdx = t.indexOf(":");
    if (colonIdx > 0) {
      const left = t.slice(0, colonIdx).trim();
      const right = t.slice(colonIdx + 1).trim();
      const half = Math.floor(left.length / 2);
      const spaceIdx = left.indexOf(" ", half);
      if (spaceIdx > 0) {
        return { line1: left.slice(0, spaceIdx).trim(), line2: left.slice(spaceIdx + 1).trim(), line3: right };
      }
      return { line1: left, line2: "", line3: right };
    }
    const half = Math.floor(t.length / 2);
    const spaceIdx = t.indexOf(" ", half);
    if (spaceIdx > 0) {
      return { line1: t.slice(0, spaceIdx).trim(), line2: t.slice(spaceIdx + 1).trim(), line3: "" };
    }
    return { line1: t, line2: "", line3: "" };
  }, [post, isFr]);

  if (!post || !post.published) {
    return <Navigate to={lang === "en" ? "/en/blog" : "/blogue"} replace />;
  }

  const title = isFr ? post.title : post.titleEn;
  const seoTitle = isFr ? post.seoTitle : post.seoTitleEn;
  const metaDesc = isFr ? post.metaDescription : post.metaDescriptionEn;
  const category = isFr ? post.category : post.categoryEn;
  const excerpt = isFr ? post.excerpt : post.excerptEn;
  const dateStr = new Date(post.publishDate).toLocaleDateString(
    isFr ? "fr-CA" : "en-CA",
    { year: "numeric", month: "long", day: "numeric" }
  );
  const blogHref = isFr ? "/blogue" : "/en/blog";
  const ctaHref = isFr ? "/evaluation-gratuite-gatineau" : "/en/home-valuation";

  // Detect FAQ section
  const hasFaq = /^##\s*(FAQ|Questions fréquentes|Frequently asked)/im.test(body);

  // Next post (chronological order in published list)
  const allPosts = getPublishedPosts(isFr ? "fr" : "en");
  const currentIdx = allPosts.findIndex((p) => (isFr ? p.slug : p.slugEn) === slug);
  const nextPost = currentIdx >= 0 && currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;

  // Body renderer with drop cap on first paragraph + styled blockquotes + FAQ extraction
  const renderBody = (md: string) => {
    const lines = md.split("\n");
    const elements: JSX.Element[] = [];
    const faqItems: { q: string; a: string }[] = [];
    let listItems: string[] = [];
    let firstParagraphRendered = false;
    let inFaq = false;

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
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' class='underline underline-offset-2 transition-colors' style='color:var(--gold)'>$1</a>")
        .replace(/\*\*(.+?)\*\*/g, "<strong style='color:var(--ink)' class='font-semibold'>$1</strong>");

    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i];
      const line = raw.trim();

      // FAQ detection — once we hit ## FAQ, capture pairs until next ##
      if (/^##\s*(FAQ|Questions fréquentes|Frequently asked)/i.test(line)) {
        flushList();
        inFaq = true;
        continue;
      }
      if (inFaq && line.startsWith("## ")) {
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
        elements.push(
          h3Prominent ? (
            <h3 key={i} id={slugify(text)} className="scroll-mt-24" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--gold)", fontSize: "clamp(1.375rem, 2.6vw, 2rem)", fontWeight: 500, lineHeight: 1.3, marginTop: "48px", marginBottom: "16px" }}>
              {text}
            </h3>
          ) : (
            <h3 key={i} id={slugify(text)} className="mt-10 mb-3 scroll-mt-24" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--ink)", fontSize: "22px", fontWeight: 500, lineHeight: 1.25 }}>
              {text}
            </h3>
          )
        );
      } else if (line.startsWith("## ")) {
        flushList();
        const text = line.slice(3);
        elements.push(
          <h2 key={i} id={slugify(text)} className="mt-12 mb-4 scroll-mt-24" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--ink)", fontSize: "30px", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.005em" }}>
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
              borderLeft: "3px solid var(--gold)",
              background: "#ECEAE2",
              padding: "24px 28px",
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "20px",
              lineHeight: 1.4,
              color: "var(--ink)",
              fontWeight: 400,
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
            {!isPersonal && (
              <div className="mt-4 flex items-center gap-2">
                <span style={{ width: "20px", height: "1px", background: "rgba(23,48,59,0.3)" }} />
                <span className="uppercase" style={{ color: "rgba(23,48,59,0.5)", fontSize: "10px", letterSpacing: "0.16em", fontFamily: "Inter, sans-serif", fontStyle: "normal" }}>
                  {isFr ? "Source : Chambre immobilière de l'Outaouais" : "Source: Outaouais Real Estate Board"}
                </span>
              </div>
            )}
            {isPersonal && (
              <div className="mt-4 flex items-center gap-2">
                <span style={{ width: "20px", height: "1px", background: "rgba(23,48,59,0.3)" }} />
                <span className="uppercase" style={{ color: "rgba(23,48,59,0.5)", fontSize: "10px", letterSpacing: "0.16em", fontFamily: "Inter, sans-serif", fontStyle: "normal" }}>
                  {isFr ? "Regard YGS" : "YGS Insight"}
                </span>
              </div>
            )}
          </blockquote>
        );
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
          const first = line.charAt(0);
          const rest = line.slice(1);
          elements.push(
            <p key={i} className="my-4" style={{ color: "#2A3940", fontSize: "17px", lineHeight: 1.75 }}>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "80px",
                  color: "var(--gold)",
                  float: "left",
                  lineHeight: 0.8,
                  marginRight: "8px",
                  marginTop: "4px",
                  fontWeight: 400,
                }}
              >
                {first}
              </span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(rest) }} />
            </p>
          );
        } else {
          elements.push(
            <p key={i} className="my-4" style={{ color: "#2A3940", fontSize: "17px", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
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
      <PageMeta title={seoTitle} description={metaDesc} canonical={`${BASE_URL}${isFr ? `/blogue/${post.slug}` : `/en/blog/${post.slugEn}`}`} ogImage={post.featuredImage ? `${BASE_URL}${post.featuredImage}` : `${BASE_URL}/og/og-blog.jpg`} />
      <BlogPostingJsonLd post={post} lang={isFr ? "fr" : "en"} />
      {post.emitFaqSchema && faqItems.length > 0 && <FaqPageJsonLd items={faqItems} />}
      <ReadingProgressBar />

      {/* Editorial split hero */}
      <section className="w-full">
        <div className="grid md:grid-cols-2" style={{ minHeight: "360px" }}>
          {/* Left — petrol */}
          <div style={{ background: "var(--ink)", padding: "48px" }} className="flex flex-col justify-between gap-8">
            <div>
              <nav className="mb-6 flex items-center gap-2 text-[11px]" style={{ color: "rgba(247,244,239,0.5)" }}>
                <Link to={blogHref} className="transition-opacity hover:opacity-80" style={{ color: "var(--gold)" }}>
                  {isFr ? "Blogue" : "Blog"}
                </Link>
                <span>/</span>
                <span style={{ color: "rgba(247,244,239,0.7)" }} className="truncate">{category}</span>
              </nav>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className="inline-flex items-center uppercase font-semibold"
                  style={{
                    border: "1px solid var(--gold)",
                    color: "var(--gold)",
                    fontSize: "10px",
                    letterSpacing: "0.16em",
                    padding: "6px 12px",
                    borderRadius: "0",
                  }}
                >
                  {category}
                </span>
                <time style={{ color: "rgba(247,244,239,0.5)", fontSize: "11px" }}>{dateStr}</time>
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--cream)", fontWeight: 300, fontSize: "clamp(2.25rem, 5vw, 56px)", lineHeight: 0.92, letterSpacing: "-0.01em" }}>
                <span className="block">{titleParts.line1}</span>
                {titleParts.line2 && (
                  <span className="block" style={{ paddingLeft: "28px" }}>{titleParts.line2}</span>
                )}
              </h1>
            </div>
            <div className="flex items-center gap-2 uppercase" style={{ color: "rgba(247,244,239,0.5)", fontSize: "10px", letterSpacing: "0.18em" }}>
              <span style={{ width: "16px", height: "1px", background: "var(--gold)" }} />
              {readingTime} {isFr ? "min de lecture" : "min read"}
            </div>
          </div>

          {/* Right — cream */}
          <div
            style={{ background: "var(--cream)", borderLeft: "3px solid var(--gold)", padding: "48px" }}
            className="flex flex-col justify-between gap-8"
          >
            <div>
              {titleParts.line3 && (
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--gold)", fontWeight: 300, fontSize: "clamp(2rem, 4.5vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.01em" }}>
                  {titleParts.line3}
                </h2>
              )}
              <p className="mt-6" style={{ color: "#2A3940", fontSize: "16px", lineHeight: 1.7 }}>
                {excerpt}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6" style={{ borderTop: "1px solid #E0DBD1" }}>
              {(post.heroStats ?? [
                { value: "+19%", label: isFr ? "Plex" : "Plex" },
                { value: "23 j", valueEn: "23 days", label: isFr ? "Délai" : "Days" },
                { value: "585 500 $", valueEn: "$585,500", label: isFr ? "Prix médian" : "Median" },
              ]).map((s, idx) => (
                <div key={idx}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--ink)", fontSize: "22px", fontWeight: 400, lineHeight: 1 }}>
                    {isFr ? s.value : (s.valueEn ?? s.value)}
                  </div>
                  <div className="mt-1.5 uppercase" style={{ color: "rgba(23,48,59,0.5)", fontSize: "9px", letterSpacing: "0.14em" }}>
                    {isFr ? s.label : (s.labelEn ?? s.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Body + sidebar */}
      <div style={{ background: "var(--cream)" }}>
      <article className="section-container py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_240px]">
          {/* Body */}
          <div className="lg:pr-10" style={{ borderRight: "1px solid #E0DBD1" }}>
            <div className="max-w-none" style={{ color: "#3A4D55" }}>
              {bodyElements}
            </div>

            {/* FAQ section */}
            {hasFaq && faqItems.length > 0 && (
              <section className="mt-16">
                <h2
                  className="pb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--ink)",
                    fontSize: "clamp(1.875rem, 4vw, 40px)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    borderBottom: "2px solid var(--ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  FAQ
                </h2>
                <div className="mt-6">
                  {faqItems.map((item, i) => (
                    <div
                      key={i}
                      className="grid gap-4 py-6 sm:grid-cols-[40px_1fr]"
                      style={{ borderTop: i === 0 ? "none" : "1px solid #E0DBD1" }}
                    >
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--gold)", fontSize: "22px", fontWeight: 400, lineHeight: 1 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p style={{ color: "var(--ink)", fontSize: "14px", fontWeight: 500, lineHeight: 1.5 }}>{item.q}</p>
                        <p className="mt-2" style={{ color: "#5C6B73", fontSize: "13px", lineHeight: 1.65 }}>{item.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start" style={{ padding: "0" }}>
            {/* Source block */}
            <div style={{ borderLeft: "2px solid var(--gold)", background: "#ECEAE2", padding: "20px 22px" }}>
              <p className="uppercase" style={{ color: "var(--gold)", fontSize: "9px", letterSpacing: "0.18em", fontWeight: 600 }}>
                {isFr ? (post.sources && post.sources.length > 1 ? "Sources" : "Source") : (post.sources && post.sources.length > 1 ? "Sources" : "Source")}
              </p>
              {post.sources && post.sources.length > 0 ? (
                <ul className="mt-2 space-y-2 list-none">
                  {post.sources.map((s, i) => (
                    <li key={i} style={{ color: "var(--ink)", fontSize: "12px", lineHeight: 1.5 }}>
                      {isFr ? s.fr : s.en}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2" style={{ color: "var(--ink)", fontSize: "12px", lineHeight: 1.5 }}>
                  {isFr ? "Chambre immobilière de l'Outaouais — données de mars 2026." : "Outaouais Real Estate Board — March 2026 data."}
                </p>
              )}
            </div>

            {/* CTA block */}
            <div style={{ background: "var(--ink)", padding: "28px 24px" }}>
              <p className="uppercase" style={{ color: "var(--gold)", fontSize: "9px", letterSpacing: "0.18em", fontWeight: 600 }}>
                {isFr ? "Parler à Yanis" : "Talk to Yanis"}
              </p>
              <h3 className="mt-3" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--cream)", fontSize: "22px", fontWeight: 400, lineHeight: 1.15 }}>
                {isFr ? (
                  <>Une analyse <em style={{ color: "var(--gold)", fontStyle: "italic" }}>sur mesure</em></>
                ) : (
                  <>A <em style={{ color: "var(--gold)", fontStyle: "italic" }}>tailored</em> analysis</>
                )}
              </h3>
              <p className="mt-2" style={{ color: "rgba(247,244,239,0.55)", fontSize: "12px", lineHeight: 1.5 }}>
                {isFr ? "Pour votre projet — vente, achat ou investissement. Réponse sous 24 h." : "For your project — selling, buying or investing. Reply within 24 h."}
              </p>
              <Link
                to={ctaHref}
                className="mt-5 inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{
                  border: "1px solid var(--gold)",
                  color: "var(--gold)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  padding: "10px 16px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {isFr ? "Évaluation gratuite" : "Free valuation"} <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div>
                <p className="uppercase mb-3" style={{ color: "rgba(23,48,59,0.5)", fontSize: "9px", letterSpacing: "0.18em", fontWeight: 600 }}>
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        border: "1px solid #E0DBD1",
                        color: "var(--ink)",
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        padding: "5px 10px",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </article>

      {/* Full-width CTA */}
      {post.ctaOverride ? (
        <section style={{ background: "var(--ink)", padding: "48px 0" }}>
          <div className="section-container text-center">
            <p className="uppercase" style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "0.18em", fontWeight: 600 }}>
              {isFr ? post.ctaOverride.eyebrow : post.ctaOverride.eyebrowEn}
            </p>
            <h2 className="mt-3" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--cream)", fontSize: "clamp(1.75rem, 4vw, 36px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.005em" }}>
              {isFr ? post.ctaOverride.title : post.ctaOverride.titleEn}
            </h2>
            <p className="mt-4 mx-auto max-w-xl" style={{ color: "rgba(247,244,239,0.7)", fontSize: "14px", lineHeight: 1.6 }}>
              {isFr ? post.ctaOverride.text : post.ctaOverride.textEn}
            </p>
            <Link
              to={isFr ? post.ctaOverride.buttonHref : post.ctaOverride.buttonHrefEn}
              className="mt-7 inline-flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                fontSize: "11px",
                letterSpacing: "0.14em",
                padding: "13px 22px",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {isFr ? post.ctaOverride.buttonLabel : post.ctaOverride.buttonLabelEn} <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      ) : (
        <section style={{ background: "var(--ink)", padding: "48px 0" }}>
          <div className="section-container text-center">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--cream)", fontSize: "clamp(1.75rem, 4vw, 36px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.005em" }}>
              {isFr ? (
                <>Vous regardez un plex en Outaouais ? <em style={{ color: "#C9A25A", fontStyle: "italic" }}>Parlons-en.</em></>
              ) : (
                <>Looking at a plex in the Outaouais? <em style={{ color: "#C9A25A", fontStyle: "italic" }}>Let's talk.</em></>
              )}
            </h2>
            <p className="mt-4 mx-auto max-w-xl" style={{ color: "rgba(247,244,239,0.55)", fontSize: "13px", lineHeight: 1.6 }}>
              {isFr
                ? "J'analyse les revenus réels, le ratio et la valeur marchande. Sans engagement."
                : "I analyze real income, the ratio and the market value. No commitment."}
            </p>
            <Link
              to={ctaHref}
              className="mt-7 inline-flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                fontSize: "11px",
                letterSpacing: "0.14em",
                padding: "13px 22px",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {isFr ? "Envoyer PLEX" : "Send PLEX"} <span aria-hidden>→</span>
            </Link>
            <p className="mt-3" style={{ color: "rgba(247,244,239,0.4)", fontSize: "11px" }}>
              {isFr ? "Réponse sous 24 h" : "Reply within 24 h"}
            </p>
          </div>
        </section>
      )}

      {/* Author bio */}
      <section className="section-container py-12">
        <div className="grid gap-6 sm:grid-cols-[auto_1px_1fr] items-center pt-10" style={{ borderTop: "1px solid #E0DBD1" }}>
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "var(--ink)",
              border: "1.5px solid var(--gold)",
              color: "var(--cream)",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            YG
          </div>
          <div className="hidden sm:block self-stretch" style={{ width: "1px", background: "#E0DBD1" }} />
          <div>
            <p className="uppercase" style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "0.18em", fontWeight: 600 }}>
              {isFr ? "À propos" : "About"}
            </p>
            <p className="mt-1.5" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--ink)", fontSize: "20px", fontWeight: 500, lineHeight: 1.2 }}>
              Yanis Gauthier-Sigeris
            </p>
            <p className="mt-2" style={{ color: "#5C6B73", fontSize: "13px", lineHeight: 1.55 }}>
              {isFr
                ? "Courtier RE/MAX en Outaouais depuis 9 ans, spécialisé en plex et investissement à Gatineau, Hull et Aylmer. Plus de 300 transactions."
                : "RE/MAX broker in the Outaouais for 9 years, specialized in plex and investment in Gatineau, Hull and Aylmer. Over 300 transactions."}
            </p>
          </div>
        </div>
      </section>

      {/* Next article */}
      {nextPost && (
        <section className="section-container pb-16">
          <Link
            to={`${blogHref}/${isFr ? nextPost.slug : nextPost.slugEn}`}
            className="grid gap-6 sm:grid-cols-[140px_1fr] items-center pt-8 group transition-opacity hover:opacity-90"
            style={{ borderTop: "1px solid #E0DBD1" }}
          >
            <div
              className="flex items-center justify-center uppercase"
              style={{
                background: "#ECEAE2",
                color: "var(--ink)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                fontWeight: 600,
                padding: "14px 16px",
              }}
            >
              {isFr ? "Article suivant" : "Next article"}
            </div>
            <div className="flex items-center justify-between gap-4">
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--ink)", fontSize: "20px", fontWeight: 500, lineHeight: 1.25 }}>
                {isFr ? nextPost.title : nextPost.titleEn}
              </h3>
              <span aria-hidden style={{ color: "var(--gold)", fontSize: "20px" }} className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        </section>
      )}
      </div>
    </>
  );
};

export default BlogArticlePage;
