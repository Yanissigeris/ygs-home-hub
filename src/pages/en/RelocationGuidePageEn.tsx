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
  "Understanding the Gatineau real estate market vs Ottawa and Montreal",
  "Choosing the right neighbourhood for your family and budget",
  "The buying and settling process in Quebec",
  "Schools, services and transportation: what you need to know",
  "Welcome tax, municipal taxes, income tax and cost of living",
  "Mistakes to avoid during a relocation",
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/en/plateau-aylmer/", detail: "Family neighbourhoods and newer homes, about 9 to 14 km from downtown Ottawa" },
  { name: "Hull", href: "/en/hull/", detail: "Urban setting with condos and plexes, about 2 km from downtown Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/en/buckingham/", detail: "Lowest single-family median of the city's 4 sectors (APCIQ, Q2 2026) and access to nature" },
];

const faq = [
  { q: "Is this guide free?", a: "Yes. It gives you the basics to plan your move to Gatineau." },
  { q: "How do I get the guide?", a: "Click \"Get the Relocation Guide\" on this page and leave your email. You can also call me at 819-210-3044 for answers that fit your situation." },
  { q: "Are taxes higher in Quebec?", a: "It depends on the tax. When you buy, you pay the welcome tax: in Gatineau, about $4,486 on a $425,000 property under the 2026 grid. Municipal taxes vary by property, and income tax differs from Ontario. We compare your situation together." },
  { q: "Do I need to speak French to live in Gatineau?", a: "Not necessarily. Aylmer, for example, is a very bilingual area. French is still an asset in daily life." },
];

const related = [
  { title: "Buying in Gatineau from Ottawa", text: "More space and more affordable prices on the other side of the river.", href: "/en/buy-from-ottawa/" },
  { title: "Relocation from Montreal", text: "What changes when you leave Montreal for the Outaouais.", href: "/en/montreal-relocation/" },
  { title: "Military Relocation", text: "Posting to the NCR, service adapted to military members.", href: "/en/military-relocation/" },
  { title: "All Neighbourhoods", text: "Compare Gatineau neighbourhoods.", href: "/en/neighborhoods/" },
];

const RelocationGuidePageEn = () => (
  <>
    <PageMeta title="Relocation Guide: Moving to Gatineau" description="Complete relocation guide for moving to Gatineau. Neighbourhoods, prices, process and schools." ogImage="https://yanisgauthier.com/og/og-reloc.jpg" />
    <ServiceJsonLd name="Relocation Guide to Gatineau" description="A guide to settling in Gatineau from Ottawa. Neighbourhoods, schools, services and Quebec process explained." url="/en/relocation-guide/" serviceType="Real Estate Relocation Guide" />
    <HeroSection overline="Relocation Guide · Gatineau" title="Relocating to Gatineau: the guide" subtitle="What you need to know to prepare your move: neighbourhoods, prices, process, schools and lifestyle." primaryCta={{ label: "Book a call", href: "/en/contact/" }} secondaryCta={{ label: "See neighbourhoods", href: "/en/neighborhoods/" }} trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau" heroBgImage={heroImg} />

    <BenefitsList overline="In this guide" title="What you'll learn" items={topics} />

    <ContentBlock narrow>
      <SectionHeading title="Settling in Gatineau takes preparation" />
      <p className="prose-body mt-5">
        Coming from Ottawa, Montreal or elsewhere in Canada? Before buying in Gatineau, you need to know the area. This guide covers the basics for newcomers.
      </p>
    </ContentBlock>

    <SectorLinks overline="A few areas" title="Neighbourhoods to consider" sectors={sectors} background="alt" />

    <GuideInlineCTA lang="en" guideType="relocation_guide" headline="Moving to Gatineau? Get the guide." text="A clear guide to understanding a purchase in Gatineau when you arrive from Ottawa or elsewhere, and choosing the right neighbourhood." ctaLabel="Get the Relocation Guide" />

    <StickyGuideBanner lang="en" guideType="relocation_guide" label="Free Relocation Guide, get it by email" />

    <InlineCTA text="Want personalized support? Book a free call." buttonLabel="Book a call →" href="/en/contact/" />

    <FAQSection items={faq} />

    <RelatedPages overline="Also worth reading" title="Related pages" pages={related} background="alt" />

    <CTASection dark title="Let's plan your move" text="Book a free call. We'll clarify your options and next steps." buttons={[{ label: "Book a call", href: "/en/contact/" }, { label: "See neighbourhoods", href: "/en/neighborhoods/", variant: "outline" }]} trustLine="I give you the numbers and the options. You decide." />
  </>
);
export default RelocationGuidePageEn;
