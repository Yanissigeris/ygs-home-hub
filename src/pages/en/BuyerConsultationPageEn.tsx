import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import heroImg from "@/assets/hero-buyer.webp";

const BuyerConsultationPageEn = () => (
  <>
    <PageMeta title="Buyer Consultation — Gatineau | YGS" description="Free buyer consultation in Gatineau. Clarify your criteria, budget and options with an experienced broker." />
    <HeroSection overline="Buyer consultation · Gatineau" title="Free buyer consultation" subtitle="Let's clarify your criteria, budget and questions — so you can buy with confidence and clarity." primaryCta={{ label: "Book a call", href: "/en/contact" }} secondaryCta={{ label: "Buyer Guide", href: "/en/buyer-guide" }} heroBgImage={heroImg} />
    <ContentBlock narrow><SectionHeading title="What we cover in the consultation" /><p className="prose-body mt-5">Your budget, target neighborhoods, property type, family needs, timeline and any questions about the Québec buying process. It's free, no commitment — just a clear conversation.</p></ContentBlock>
    <GuideInlineCTAEn guideType="buyer_guide" headline="Free Buyer Guide" text="Everything to buy in Gatineau — process, budget and tips." ctaLabel="Get the Buyer Guide" />
    <CTASection dark title="Ready to start?" text="Book your free consultation — let's clarify your project." buttons={[{ label: "Book a call", href: "/en/contact" }, { label: "Explore neighborhoods", href: "/en/neighborhoods", variant: "outline" }]} />
    <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);
export default BuyerConsultationPageEn;
