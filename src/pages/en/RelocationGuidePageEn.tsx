import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import BenefitsList from "@/components/BenefitsList";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import SectorLinks from "@/components/SectorLinks";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import heroImg from "@/assets/hero-relocation-guide.webp";

const topics = [
  "Understanding the Gatineau real estate market vs Ottawa and Montréal",
  "Choosing the right neighborhood for your family and budget",
  "The buying and settling process in Québec",
  "Schools, services, transportation — what you need to know",
  "Taxes, cost of living and tax advantages",
  "Mistakes to avoid during a relocation",
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer", detail: "Family-friendly, newer homes, Ottawa access" },
  { name: "Hull", href: "/en/hull", detail: "Urban, close to downtown, condos and plex" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham", detail: "Land, affordable prices, nature" },
];

const faq = [
  { q: "Is this guide free?", a: "Yes. The goal is to give you a solid foundation to plan your relocation with confidence." },
  { q: "How do I get the complete guide?", a: "Contact me directly — I'll send you all the relevant information for your situation." },
  { q: "Are taxes higher in Québec?", a: "Municipal taxes vary by neighborhood. Income tax is different too. We look at the full picture together." },
  { q: "Do I need to speak French to live in Gatineau?", a: "Not necessarily — several areas like Aylmer are very bilingual. But French is an asset in daily life." },
];

const related = [
  { title: "Relocation from Ottawa", text: "More space and affordable prices on the other side of the river.", href: "/en/buy-from-ottawa" },
  { title: "Relocation from Montréal", text: "Quality of life and space for Montréal families.", href: "/en/montreal-relocation" },
  { title: "Military Relocation", text: "Posting to the NCR — service adapted to military members.", href: "/en/military-relocation" },
  { title: "All Neighborhoods", text: "Compare Gatineau neighborhoods.", href: "/en/neighborhoods" },
];

const RelocationGuidePageEn = () => (
  <>
    <PageMeta title="Relocation Guide — Moving to Gatineau" description="Complete relocation guide for moving to Gatineau. Neighborhoods, prices, process and schools." ogImage="https://yanisgauthier.com/og/og-reloc.jpg" />
    <ServiceJsonLd name="Relocation Guide to Gatineau" description="Complete guide to settling in Gatineau from Ottawa. Neighbourhoods, schools, services and Quebec process explained." url="/en/relocation-guide" serviceType="Real Estate Relocation Guide" />
    <HeroSection overline="Relocation Guide · Gatineau" title="Complete guide to relocating to Gatineau" subtitle="Everything you need to know to succeed in your relocation — neighborhoods, prices, process, schools and lifestyle." primaryCta={{ label: "Book a call", href: "/en/contact" }} secondaryCta={{ label: "Explore neighborhoods", href: "/en/neighborhoods" }} trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau" heroBgImage={heroImg} />

    <BenefitsList overline="In this guide" title="What you'll learn" items={topics} />

    <ContentBlock narrow>
      <SectionHeading title="Settling in Gatineau takes preparation" />
      <p className="prose-body mt-5">
        Whether you're coming from Ottawa, Montréal or elsewhere in Canada, Gatineau offers an exceptional quality of life — but you need to know the terrain. This guide covers everything newcomers need to know.
      </p>
    </ContentBlock>

    <SectorLinks overline="Popular neighborhoods" title="Neighborhoods to consider" sectors={sectors} background="alt" />

    <GuideInlineCTA lang="en" guideType="relocation_guide" headline="Moving to Gatineau? Get the complete guide." text="A clear guide to better understand buying in Gatineau from Ottawa or elsewhere, avoid surprises and choose the right neighborhood." ctaLabel="Get the Relocation Guide" />

    <StickyGuideBanner lang="en" guideType="relocation_guide" label="Free Relocation Guide — get it by email" />

    <InlineCTA text="Want personalized support? Book a free call." buttonLabel="Book a call →" href="/en/contact" />

    <FAQSection items={faq} />

    <RelatedPages overline="Also worth reading" title="Related pages" pages={related} background="alt" />

    <CTASection dark title="Let's plan your move" text="Book a free call — let's clarify your options and next steps." buttons={[{ label: "Book a call", href: "/en/contact" }, { label: "Explore neighborhoods", href: "/en/neighborhoods", variant: "outline" }]} trustLine="I give you the options — you decide with full clarity." />
  </>
);
export default RelocationGuidePageEn;
