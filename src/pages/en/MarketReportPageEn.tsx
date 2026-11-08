import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import { marketArticlePages, marketBlockCopy } from "@/data/market-articles";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import heroImg from "@/assets/hero-market-report.webp";
import MedianPriceSection from "@/components/market/MedianPriceSection";

const faq = [
  { q: "How can I access the market report?", a: "Contact me for updates when the next report is published. In the meantime, you can request a personalized analysis of your area." },
  { q: "What areas does the data cover?", a: "All Gatineau neighborhoods: Aylmer, Hull, Plateau, Buckingham, Gatineau centre and more." },
  { q: "Is the report free?", a: "Yes, it's a tool I offer to my clients and anyone interested in the market." },
];

const related = [
  { title: "Free Valuation", text: "How much is your property worth? Personalized response.", href: "/en/home-valuation/" },
  { title: "Properties", text: "Browse active listings in Gatineau.", href: "/en/properties/" },
  { title: "Seller Guide", text: "Everything to sell at the best price.", href: "/en/seller-guide/" },
  { title: "Invest in Plex", text: "Analysis and strategy for plexes in Gatineau.", href: "/en/plex/" },
];

const MarketReportPageEn = () => (
  <>
    <PageMeta title="Gatineau median price by quarter · Market report | YGS" description="Single-family and plex median prices in Gatineau, each quarter compared with last year. QPAREB data from Q4 2024 to Q3 2026." ogImage="https://yanisgauthier.com/og/og-market.jpg" />
    <HeroSection
      overline="Market Report · Gatineau"
      title="Gatineau real estate market report"
      subtitle="Official QPAREB median prices, compared with the same quarter last year. For your area, request a personalized analysis."
      primaryCta={{ label: "Free Home Valuation", href: "/en/home-valuation/" }}
      secondaryCta={{ label: "Talk to Yanis", href: "/en/contact/" }}
      trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau"
      heroBgImage={heroImg}
    />
    <MedianPriceSection lang="en" />
    <ContentBlock narrow>
      <SectionHeading overline="Your area" title="The median price doesn't tell the whole story for your street" />
      <p className="prose-body mt-5">A regional median groups very different areas, from Aylmer all the way to Buckingham. If you're thinking of selling or buying, I can show you recent sales in your area and what they mean for your property.</p>
    </ContentBlock>
    <InlineCTA text="Want to know the value of your property? Request a free valuation." buttonLabel="Free Home Valuation →" href="/en/home-valuation/" />
    <FAQSection items={faq} />
    <RelatedPages overline="Also worth reading" title="Explore also" pages={related} background="alt" />
    {/* Internal links to the latest market articles (SEO: they had a single inlink from the blog index) */}
    <RelatedPages overline={marketBlockCopy.en.overline} title={marketBlockCopy.en.title} pages={marketArticlePages("en", "market")} />
    <GuideInlineCTA lang="en" guideType="seller_guide" headline="Free Seller Guide: sell at the right price" text="Pricing, preparation and strategy, everything in a guide sent to your email." ctaLabel="Get the Seller Guide" />
    <CTASection dark title="Get the next market report" text="Contact me to be on the list, you'll receive the analysis as soon as it's published." buttons={[{ label: "Free Home Valuation", href: "/en/home-valuation/" }, { label: "Talk to Yanis", href: "/en/contact/", variant: "outline" }]} trustLine="Objective data and clear local analysis." />
    <StickyGuideBanner lang="en" guideType="seller_guide" label="Free Seller Guide, get it by email" />
  </>
);

export default MarketReportPageEn;
