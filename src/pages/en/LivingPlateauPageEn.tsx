import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Home, Users, MapPin, TreePine } from "lucide-react";
import heroImg from "@/assets/hero-living-plateau.webp";

const highlights = [
  { icon: MapPin, title: "A recent neighbourhood", text: "Developed mostly since the late 1990s, with parks along the residential streets." },
  { icon: Home, title: "Houses, townhouses and condos", text: "Mostly recent single-family homes, plus townhouses and condos." },
  { icon: TreePine, title: "Nature and outdoors", text: "Proximity to Gatineau Park, trails and green spaces." },
  { icon: Users, title: "For families", text: "Three elementary schools in the neighbourhood and a high school on Boulevard du Plateau." },
];

const faq = [
  { q: "How far is the Plateau from Ottawa?", a: "The Plateau is west of downtown Hull. You reach Ottawa via Boulevard des Allumettières and the bridges, and commute times vary by time of day and destination." },
  { q: "Which schools are in the Plateau?", a: "The neighbourhood has three French-language elementary schools run by the CSSPO (École du Plateau, École des Deux-Ruisseaux and École du Grand-Héron) and École secondaire de la Cité on Boulevard du Plateau. Your assigned school depends on your address. English-language public schools are run by the Western Quebec School Board, subject to eligibility." },
  { q: "Is the Plateau a new neighbourhood?", a: "Yes. It was developed mostly since the late 1990s: Boulevard du Plateau was officially named in 1997. Most homes are therefore fairly recent." },
];

const related = [
  { title: "Buy or sell in the Plateau", text: "My work as a broker in the neighbourhood.", href: "/en/plateau/" },
  { title: "Aylmer, Hull or the Plateau?", text: "A comparison of the three areas.", href: "/en/blog/aylmer-hull-plateau-which-neighborhood/" },
  { title: "All neighbourhoods", text: "Compare Gatineau neighbourhoods.", href: "/en/neighborhoods/" },
  { title: "First-time buyer", text: "Budget, process and tips for first-time buyers.", href: "/en/first-time-buyer/" },
  { title: "Buyer Consultation", text: "Clarify your criteria and options.", href: "/en/buyer-consultation/" },
];

const LivingPlateauPageEn = () => (
  <>
    <PageMeta title="Living in the Plateau · Lifestyle Guide" description="Everything about life in the Plateau in Gatineau: families, parks, developments and quality of life. Guide to settling in." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <HeroSection overline="Living in the Plateau · Gatineau" title="Living in the Plateau: the guide" subtitle="Day-to-day life in the Plateau, Gatineau: recent homes, schools, parks and Gatineau Park close by." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation/" }} secondaryCta={{ label: "See the neighbourhood", href: "/en/plateau/" }} heroBgImage={heroImg} />
    <CardGrid overline="Lifestyle" title="What sets the Plateau apart" items={highlights} />
    <ContentBlock narrow>
      <SectionHeading title="Living in the Plateau with children" />
      <p className="prose-body mt-5">The neighbourhood has three French-language elementary schools and borders Gatineau Park. Since the neighbourhood was developed mostly since the late 1990s, families mainly find recent properties here, with fewer major renovations to plan than in older areas.</p>
    </ContentBlock>
    <InlineCTA text="Own a property in the Plateau? Find out how much it's worth." buttonLabel="Free Valuation →" href="/en/home-valuation/" />
    <FAQSection title="Questions about living in the Plateau" items={faq} />
    <RelatedPages overline="Also worth reading" title="Also read" pages={related} background="alt" />
    <GuideInlineCTA lang="en" guideType="buyer_guide" headline="Free Buyer Guide: settling in the Plateau" text="Everything to buy in the Plateau, process, budget and tips sent to your email." ctaLabel="Get the Buyer Guide" />
    <CTASection dark title="Ready to discover the Plateau?" text="Let's talk about your criteria. I'll show you the options in the area that fit your needs." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation/" }, { label: "See the neighbourhood", href: "/en/plateau/", variant: "outline" }]} trustLine="I give you the options, you decide with full clarity." />
    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide, get it by email" />
  </>
);

export default LivingPlateauPageEn;
