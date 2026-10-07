import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import BenefitsList from "@/components/BenefitsList";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import heroImg from "@/assets/hero-military-guide.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const topics = [
  "Understanding the real estate realities of a posting",
  "Buying vs renting during a military relocation",
  "Gatineau neighbourhoods to consider for military families",
  "The buying process in Quebec, step by step",
  "Selling quickly during a posting without sacrificing price",
  "Programs and resources available for military members",
];

const faq = [
  { q: "Is this guide free?", a: "Yes. It helps you plan your relocation step by step." },
  { q: "Do you work with SIRVA and BGRS files?", a: "Yes. Since April 1, 2026, CAF relocations follow the Canadian Armed Forces Relocation Directive (CAFRD). SIRVA handles files authorized on or after January 6, 2026, and BGRS handles those authorized before. I adapt to the steps and timelines of your file." },
  { q: "Should I buy or rent during a posting?", a: "It depends on the length of your assignment and your financial situation. We discuss it together." },
  { q: "Which neighbourhoods do you recommend for military families?", a: "It depends on where you work. For the Carling Campus in west Ottawa, Aylmer and the Plateau are convenient via the Champlain Bridge. Central Hull is about 2 km from downtown Ottawa, via the Portage Bridge. We compare areas based on your family priorities." },
];

const related = [
  { title: "Military Relocation", text: "Posting to the NCR? Find the right property quickly.", href: "/en/military-relocation/" },
  { title: "Buy as a Military Member", text: "Support adapted to posting constraints.", href: "/en/military-buyer/" },
  { title: "Sell During a Posting", text: "Sell quickly without sacrificing price.", href: "/en/military-seller/" },
  { title: "See the Neighbourhoods", text: "Find the area that matches your priorities.", href: "/en/neighborhoods/" },
];

const MilitaryGuidePageEn = () => (
  <>
    <PageMeta title="Military Real Estate Guide: Gatineau" description="Real estate guide for CAF members posted to Gatineau. BGRS, SIRVA, neighbourhoods (Aylmer, Plateau, Hull) and practical advice." ogImage="https://yanisgauthier.com/og/og-military.jpg" />
    <HeroSection overline="Military Guide · Gatineau" title="Military real estate guide for Gatineau" subtitle="Posting to the NCR? Everything you need to know to buy, sell or settle in Gatineau as a military member." primaryCta={{ label: "Book a call", href: "/en/contact/" }} secondaryCta={{ label: "Military overview", href: "/en/military/" }} trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau" heroBgImage={heroImg} />

    <BenefitsList overline="In this guide" title="What you'll learn" items={topics} />

    <section className="py-8 bg-card border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">SIRVA and BGRS files welcome</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" width={200} height={36} className="h-10 w-auto object-contain" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading title="Postings require planning" />
      <p className="prose-body mt-5">
        A posting doesn't follow the normal real estate calendar. You need a broker who understands your time constraints and the relocation programs. This guide covers the main steps.
      </p>
    </ContentBlock>

    <InlineCTA text="Need to sell before buying? Start by knowing the value of your property." buttonLabel="Get my valuation →" href="/en/home-valuation/" />

    <GuideInlineCTA lang="en" guideType="relocation_guide" headline="Get the Military Relocation Guide" text="Buying or selling during a posting: everything in a clear guide, sent free to your email." ctaLabel="Get the guide" />

    <FAQSection items={faq} />

    <RelatedPages overline="Also worth reading" title="Related pages for military members" pages={related} background="alt" />

    <CTASection dark title="Let's plan your military relocation" text="Book a free call. We adapt the plan to your posting and your timeline." buttons={[{ label: "Book a call", href: "/en/contact/" }, { label: "Free Valuation", href: "/en/home-valuation/", variant: "outline" }]} trustLine="I adapt to your pace. You decide when you're ready." />

    <StickyGuideBanner lang="en" guideType="relocation_guide" label="Free Military Guide, get it by email" />
  </>
);
export default MilitaryGuidePageEn;
