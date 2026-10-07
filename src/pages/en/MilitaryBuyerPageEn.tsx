import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Home, MapPin, Shield, Clock, Award, DollarSign } from "lucide-react";
import heroImg from "@/assets/hero-military-buyer.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const advantages = [
  { icon: DollarSign, title: "Price benchmarks", text: "In Q2 2026, the median single-family price in the Gatineau CMA was $523,500 (APCIQ). We compare it together with the market you are leaving." },
  { icon: MapPin, title: "Close to work", text: "Access to National Defence's Carling Campus, in west Ottawa, and other federal facilities in the region, depending on the area you choose." },
  { icon: Home, title: "Variety of properties", text: "Houses, semi-detached homes, condos and plexes, in family-friendly, well-served neighbourhoods." },
  { icon: Shield, title: "Bilingual support", text: "Service in French and English, adapted to your military reality." },
];


const faq = [
  { q: "Which neighbourhoods do you recommend for military members?", a: "It depends on your workplace and your family priorities. For the Carling Campus, in west Ottawa, we often look at Aylmer and the Plateau. Hull works well if you work downtown. We discuss it based on your situation." },
  { q: "Can I buy remotely?", a: "Yes. Virtual tours and offers signed remotely are common during a posting. If your file includes a House Hunting Trip (HHT), we plan in-person showings around that trip." },
  { q: "How does the buying process work in Quebec?", a: "In Quebec, you sign a promise to purchase, then work through conditions (inspection, financing) and sign at the notary. The notary plays the role a real estate lawyer plays in Ontario. I guide you step by step." },
];

const MilitaryBuyerPageEn = () => (
  <>
    <PageMeta title="Military Buyer: Buy in Gatineau" description="Buy a property in Gatineau as a CAF member. SIRVA or BGRS files, neighbourhoods matched to your workplace and support adapted to your posting." ogImage="https://yanisgauthier.com/og/og-military.jpg" />
    <ServiceJsonLd name="Military Home Buying in Gatineau" description="Specialized support for CAF members buying in Gatineau. SIRVA or BGRS files, neighbourhoods matched to your workplace." url="/en/military-buyer/" serviceType="Military Real Estate Buyer Service" />
    <HeroSection
      overline="Military · Buying in Gatineau"
      title="Buy in Gatineau as a military member"
      subtitle="Posting to the NCR? I help you choose the area and the property, then guide you through the buying process in Quebec."
      primaryCta={{ label: "Book a call", href: "/en/contact/" }}
      secondaryCta={{ label: "See Plateau and Aylmer", href: "/en/plateau-aylmer/" }}
      trustLine="Service adapted to military members, at your pace."
      heroBgImage={heroImg}
    />
<section className="py-8 bg-white border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">SIRVA and BGRS files welcome</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" width={200} height={36} className="h-10 w-auto object-contain" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <CardGrid
      overline="Why Gatineau"
      title="Buying in Gatineau: the advantages for military members"
      items={advantages}
    />

    <InlineCTA
      text="Need to sell too? Start by knowing the value of your property."
      buttonLabel="Get my valuation →"
      href="/en/home-valuation/"
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
        <Link to="/en/contact/">Book a call</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA lang="en" guideType="relocation_guide" headline="Free Military Relocation Guide" text="Everything you need to know about buying in Gatineau during a posting, in a clear guide sent by email." ctaLabel="Get the guide" />

    <CTASection
      dark
      title="Ready to find your property in Gatineau?"
      text="Let's discuss your posting and your criteria. We'll build the plan together."
      buttons={[
        { label: "Book a call", href: "/en/contact/" },
        { label: "Free Valuation", href: "/en/home-valuation/", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options. You decide."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner lang="en" guideType="relocation_guide" label="Free Military Guide, get it by email" />
  </>
);
export default MilitaryBuyerPageEn;
