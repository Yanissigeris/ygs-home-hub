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
import { Home, Users, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-living-hull.webp";

const highlights = [
  { icon: MapPin, title: "In the heart of the city", text: "Steps from Old Hull, the Canadian Museum of History and the cultural scene." },
  { icon: Home, title: "Diverse architecture", text: "From century-old homes to modern condos, Hull has character." },
  { icon: Coffee, title: "Restaurants and culture", text: "Restaurants and performance venues, steps from Ottawa." },
  { icon: Users, title: "Neighbourhood life", text: "Young professionals and artists live alongside families." },
];

const faq = [
  { q: "Is Hull a good place to live?", a: "Yes, especially if you like city living and want to stay close to Ottawa." },
  { q: "How do you get to Ottawa from Hull?", a: "Downtown Ottawa is about 2 km from Gatineau city hall, in Hull, via the Portage Bridge. You can also get there by bus or by bike. It's the closest Gatineau neighbourhood to Ottawa." },
  { q: "Are there families in Hull?", a: "Yes, more and more families are settling in Hull for the proximity, prices and neighbourhood life." },
];

const related = [
  { title: "Buy or invest in Hull", text: "Neighbourhood guide: prices, profiles and potential.", href: "/en/hull/" },
  { title: "Invest in plex", text: "Analysis and strategy for plexes in Gatineau.", href: "/en/plex/" },
  { title: "All neighbourhoods", text: "Compare Gatineau neighbourhoods.", href: "/en/neighborhoods/" },
  { title: "Buyer Consultation", text: "Clarify your criteria and options.", href: "/en/buyer-consultation/" },
];

const LivingHullPageEn = () => (
  <>
    <PageMeta title="Living in Hull | Lifestyle Guide" description="Everything about life in Hull: culture, restaurants, Ottawa proximity and urban vibe. Your guide to settling in Hull." ogImage="https://yanisgauthier.com/og/og-hull.jpg" />
    <HeroSection overline="Living in Hull · Gatineau" title="Living in Hull: the guide" subtitle="Discover Hull's urban lifestyle: culture, restaurants, Ottawa proximity and still-affordable prices." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation/" }} secondaryCta={{ label: "See the neighbourhood", href: "/en/hull/" }} heroBgImage={heroImg} />
    <CardGrid overline="Lifestyle" title="What sets Hull apart" items={highlights} />
    <ContentBlock narrow>
      <SectionHeading title="The renaissance of Hull" />
      <p className="prose-body mt-5">Hull is changing. New projects and a growing restaurant scene are drawing more and more people. In Q2 2026, the median single-family price was $514,500 in Hull, compared with $572,750 in Aylmer (APCIQ, Centris data).</p>
    </ContentBlock>
    <InlineCTA text="Looking for a plex in Hull? Request a return analysis." buttonLabel="Get a plex analysis →" href="/en/plex-analysis/" />
    <FAQSection title="Questions about living in Hull" items={faq} />
    <RelatedPages overline="Also worth reading" title="Also read" pages={related} background="alt" />
    <GuideInlineCTA lang="en" guideType="investor_guide" headline="Free Investor Guide: plex in Hull" text="Returns, taxes and strategy, everything in a guide sent to your email." ctaLabel="Get the Investor Guide" />
    <CTASection dark title="Ready to discover Hull?" text="Let's talk about your criteria. I'll show you the options in the area that fit your needs." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation/" }, { label: "See the neighbourhood", href: "/en/hull/", variant: "outline" }]} trustLine="I give you the options, you decide with full clarity." />
    <StickyGuideBanner lang="en" guideType="investor_guide" label="Free Investor Guide, get it by email" />
  </>
);

export default LivingHullPageEn;
