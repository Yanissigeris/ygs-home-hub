import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import BenefitsList from "@/components/BenefitsList";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import heroImg from "@/assets/hero-military-guide.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const topics = [
  "Understanding the realities of a real estate posting",
  "Buying vs renting during a military relocation",
  "Best Gatineau neighborhoods for military families",
  "The buying process in Québec — step by step",
  "Selling quickly during a posting without sacrificing price",
  "Programs and resources available for military members",
];

const faq = [
  { q: "Is this guide free?", a: "Yes. My goal is to help you plan your relocation with confidence." },
  { q: "Do you work with IRP/BGRS programs?", a: "I understand the realities of these programs and adapt to the constraints and deadlines they impose." },
  { q: "Should I buy or rent during a posting?", a: "It depends on the length of your assignment and your financial situation. We discuss it together." },
  { q: "Which neighborhoods do you recommend for military families?", a: "Aylmer and the Plateau are very popular — schools, families, nature. Hull is also good for proximity to downtown." },
];

const related = [
  { title: "Military Relocation", text: "Posting to the NCR — find the right property quickly.", href: "/en/military-relocation" },
  { title: "Buy as Military", text: "Support adapted to posting constraints.", href: "/en/military-buyer" },
  { title: "Sell During a Posting", text: "Sell quickly without sacrificing price.", href: "/en/military-seller" },
  { title: "Explore Neighborhoods", text: "Find the area that matches your priorities.", href: "/en/neighborhoods" },
];

const MilitaryGuidePageEn = () => (
  <>
    <PageMeta title="Military Real Estate Guide — Gatineau | YGS" description="Complete guide for military members relocating to Gatineau. Neighborhoods, process and support for CAF postings." />
    <HeroSection overline="Military Guide · Gatineau" title="Military real estate guide for Gatineau" subtitle="Posting to the NCR? Everything you need to know to buy, sell or settle in Gatineau as a military member." primaryCta={{ label: "Book a call", href: "/en/contact" }} secondaryCta={{ label: "Military overview", href: "/en/military" }} trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau" heroBgImage={heroImg} />

    <BenefitsList overline="In this guide" title="What you'll learn" items={topics} />

    <section className="py-8 bg-card border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">Program partner</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" className="h-10 w-auto object-contain" loading="lazy" />
        </div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading title="Postings require planning" />
      <p className="prose-body mt-5">
        A posting doesn't follow the normal real estate calendar. You need a broker who understands your time constraints, your family reality and the available programs. This guide covers the essentials.
      </p>
    </ContentBlock>

    <InlineCTA text="Need to sell before buying? Start by knowing the value of your property." buttonLabel="Get my valuation →" href="/en/home-valuation" />

    <GuideInlineCTAEn guideType="relocation_guide" headline="Get the Military Relocation Guide" text="Posting, buying, selling — everything in a clear guide sent to your email for free." ctaLabel="Get the guide" />

    <FAQSection items={faq} />

    <RelatedPages overline="Also worth reading" title="Related pages for military" pages={related} background="alt" />

    <CTASection dark title="Let's plan your military relocation" text="Book a free call — we adapt the plan to your posting and timeline." buttons={[{ label: "Book a call", href: "/en/contact" }, { label: "Free Valuation", href: "/en/home-valuation", variant: "outline" }]} trustLine="I adapt to your pace — you decide when you're ready." />

    <StickyGuideBannerEn guideType="relocation_guide" label="Free Military Guide — get it by email" />
  </>
);
export default MilitaryGuidePageEn;
