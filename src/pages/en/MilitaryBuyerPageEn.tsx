import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTAEn from "@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from "@/components/en/StickyGuideBannerEn";
import { Home, MapPin, Shield, Clock, Award, DollarSign } from "lucide-react";
import heroImg from "@/assets/hero-military-buyer.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const advantages = [
  { icon: DollarSign, title: "More affordable prices", text: "Gatineau's market often offers better value than saturated military markets." },
  { icon: MapPin, title: "Close to the bases", text: "Quick access to CFB Uplands and federal facilities in the region." },
  { icon: Home, title: "Variety of properties", text: "Houses, condos, semi-detached — in family-friendly, well-served neighborhoods." },
  { icon: Shield, title: "Bilingual support", text: "Service in French and English, adapted to your military reality." },
];

const trustItems = [
  { icon: Clock, label: "Nearly 9 years in Outaouais" },
  { icon: Award, label: "Military buyer specialist" },
  { icon: Shield, label: "Bilingual · Full transparency" },
];

const faq = [
  { q: "Which neighborhoods do you recommend for military members?", a: "It depends on your base and family priorities. Aylmer, Plateau and Hull are popular — we discuss based on your situation." },
  { q: "Can I buy remotely?", a: "Yes. Virtual visits, remote offers and full coordination — it's common for postings." },
  { q: "How does the buying process work in Québec?", a: "Promise to purchase, inspection, conditions, notary — it's different from Ontario. I guide you step by step." },
];

const MilitaryBuyerPageEn = () => (
  <>
    <PageMeta title="Military Buyer — Buy in Gatineau | YGS" description="Buy a property in Gatineau as a military member. BGRS process, strategic neighborhoods and support adapted to CAF." />
    <HeroSection
      overline="Military · Buying in Gatineau"
      title="Buy in Gatineau as a military member"
      subtitle="Posting to the NCR? I help you find the right area, the right property and navigate the buying process in Québec."
      primaryCta={{ label: "Book a call", href: "/en/contact" }}
      secondaryCta={{ label: "Explore neighborhoods", href: "/en/plateau-aylmer" }}
      trustLine="Service adapted to military members — at your pace."
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <section className="py-8 bg-white border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">Partner of programs</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" className="h-10 w-auto object-contain" />
        </div>
      </div>
    </section>

    <CardGrid
      overline="Why Gatineau"
      title="Buying in Gatineau — the advantages for military members"
      items={advantages}
    />

    <InlineCTA
      text="Need to sell too? Start by knowing the value of your property."
      buttonLabel="Get my valuation →"
      href="/en/home-valuation"
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="My approach"
        title="A broker who adapts to your schedule"
      />
      <p className="prose-body mt-5">
        I know postings come with tight deadlines. My role is to simplify every step so you can focus on your transition.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/contact">Book a call</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTAEn guideType="relocation_guide" headline="Free Military Relocation Guide" text="Everything you need to know about buying in Gatineau during a posting — in a clear guide sent by email." ctaLabel="Get the guide" />

    <CTASection
      dark
      title="Ready to find your property in Gatineau?"
      text="Let's discuss your posting and criteria — I take care of the rest."
      buttons={[
        { label: "Book a call", href: "/en/contact" },
        { label: "Free Valuation", href: "/en/home-valuation", variant: "outline" },
      ]}
      trustLine="I give you the options — you decide with full clarity."
    />

    <FAQSection items={faq} />

    <StickyGuideBannerEn guideType="relocation_guide" label="Free Military Guide — get it by email" />
  </>
);
export default MilitaryBuyerPageEn;
