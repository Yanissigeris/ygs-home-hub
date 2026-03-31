import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import ContentBlock from "@/components/ContentBlock";
import heroImg from "@/assets/hero-resources.webp";

const featuredArticle = {
  tag: "Market",
  title: "Gatineau Real Estate Market in 2025: What the Numbers Reveal",
  excerpt: "Price trends, sales volume, and the most active neighborhoods in the Outaouais region this year.",
  href: "/en/market-report",
};

const articles = [
  { tag: "Sellers", title: "When Is the Best Time to Sell in Gatineau?", excerpt: "The optimal listing window based on local market data and seasonal trends.", href: "/en/when-to-sell" },
  { tag: "Buyers", title: "First-Time Buyer in Gatineau: Essential Steps", excerpt: "Down payment, pre-approval, inspection — everything a first-time buyer needs to know.", href: "/en/first-time-buyer" },
  { tag: "Relocation", title: "Moving from Ottawa to Gatineau: Complete Guide", excerpt: "Taxes, schools, neighborhoods, commute — everything you need to plan a smooth relocation.", href: "/en/relocation" },
  { tag: "Investment", title: "Investing in a Plex in Gatineau: Is It Still Worth It?", excerpt: "ROI analysis, neighborhoods to watch, and common mistakes investors should avoid.", href: "/en/plex" },
  { tag: "Neighborhoods", title: "Aylmer, Hull, or Plateau: Which Neighborhood Is Right for You?", excerpt: "Comparing Gatineau's most popular areas based on your profile and budget.", href: "/en/neighborhoods" },
  { tag: "Military", title: "Military Posting to Gatineau: What You Need to Know", excerpt: "IRP/BGRS program, local market insights, and practical tips for CAF members.", href: "/en/military" },
];

const categories = [
  { label: "Sellers", href: "/en/sell" },
  { label: "Buyers", href: "/en/buy" },
  { label: "Relocation", href: "/en/relocation" },
  { label: "Investment", href: "/en/plex" },
  { label: "Neighborhoods", href: "/en/neighborhoods" },
  { label: "Military", href: "/en/military" },
];

const BlogPageEn = () => (
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
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.href}
              className="inline-flex h-8 items-center rounded-full border border-border/40 bg-background px-4 text-[0.8125rem] font-medium text-muted-foreground transition-all duration-200 hover:border-accent/30 hover:text-foreground hover:shadow-sm"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Featured article */}
    <ContentBlock>
      <SectionHeading overline="Featured" title="Featured Article" centered />
      <Link to={featuredArticle.href} className="group mt-10 block rounded-2xl border border-border/40 bg-secondary/20 p-8 sm:p-10 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5">
        <span className="inline-flex h-6 items-center rounded-full bg-accent/10 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-accent">{featuredArticle.tag}</span>
        <h3 className="mt-4 text-xl sm:text-2xl font-semibold leading-snug group-hover:text-accent transition-colors duration-200">{featuredArticle.title}</h3>
        <p className="prose-body mt-3">{featuredArticle.excerpt}</p>
        <span className="mt-5 inline-flex items-center text-[0.875rem] font-medium text-accent">Read article →</span>
      </Link>
    </ContentBlock>

    {/* Article grid */}
    <section className="section-container section-spacing">
      <SectionHeading overline="Articles" title="Latest Articles" centered />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.title}
            to={article.href}
            className="group flex flex-col rounded-2xl border border-border/40 bg-background p-6 sm:p-7 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span className="inline-flex w-fit h-6 items-center rounded-full bg-accent/10 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-accent">{article.tag}</span>
            <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug group-hover:text-accent transition-colors duration-200">{article.title}</h3>
            <p className="prose-body mt-2.5 text-[0.875rem] flex-1">{article.excerpt}</p>
            <span className="mt-4 text-[0.8125rem] font-medium text-accent">Read →</span>
          </Link>
        ))}
      </div>
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

export default BlogPageEn;
