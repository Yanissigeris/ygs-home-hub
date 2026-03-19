import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import heroImg from "@/assets/hero-plex.jpg";

const PlexAnalysisPageEn = () => (
  <>
    <PageMeta title="Free Plex Analysis — Gatineau | YGS" description="Get a free plex analysis in Gatineau. Revenues, expenses, return and market value — real numbers for your investment decision." />
    <HeroSection overline="Plex Analysis · Gatineau" title="Free plex analysis" subtitle="Revenues, expenses, market value and potential — get a clear, objective reading of your plex or investment property." primaryCta={{ label: "Request my analysis", href: "/en/contact" }} secondaryCta={{ label: "Plex overview", href: "/en/plex" }} heroBgImage={heroImg} />
    <ContentBlock narrow><SectionHeading title="What your analysis includes" /><p className="prose-body mt-5">Current revenues and expenses, market value estimate, rental optimization potential, comparable sales and a strategic recommendation — hold, sell or refinance.</p></ContentBlock>
    <GuideInlineCTAEn guideType="investor_guide" headline="Free Investor Guide" text="Returns, analysis and strategy — everything for investing in Gatineau." ctaLabel="Get the Investor Guide" />
    <CTASection dark title="Get the real numbers on your plex" text="I'll give you an objective analysis — no assumptions, just facts." buttons={[{ label: "Request my analysis", href: "/en/contact" }, { label: "Free Valuation", href: "/en/home-valuation", variant: "outline" }]} />
    <StickyGuideBannerEn guideType="investor_guide" label="Free Investor Guide — get it by email" />
  </>
);
export default PlexAnalysisPageEn;
