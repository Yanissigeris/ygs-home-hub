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
  { icon: MapPin, title: "Vibrant downtown", text: "Steps from Old Hull, the Museum and the cultural scene." },
  { icon: Home, title: "Diverse architecture", text: "From century-old homes to modern condos — Hull has character." },
  { icon: Coffee, title: "Restaurants and culture", text: "The best food scene in Outaouais, steps from Ottawa." },
  { icon: Users, title: "Dynamic community", text: "Young professionals, artists and families — a community in full renaissance." },
];

const faq = [
  { q: "Is Hull a good place to live?", a: "Hull is going through a real transformation — restaurants, culture, new projects and a dynamic community. It's increasingly popular." },
  { q: "How do you get to Ottawa from Hull?", a: "5-10 minutes by car, bus or bike via the bridges. It's the closest Gatineau neighborhood to Ottawa." },
  { q: "Are there families in Hull?", a: "Yes — more and more families are settling in Hull for the proximity, prices and neighborhood life." },
];

const related = [
  { title: "Buy or invest in Hull", text: "Neighborhood guide: prices, profiles and potential.", href: "/en/hull/" },
  { title: "Invest in plex", text: "Analysis and strategy for plexes in Gatineau.", href: "/en/plex/" },
  { title: "All neighborhoods", text: "Compare Gatineau neighborhoods.", href: "/en/neighborhoods/" },
  { title: "Buyer Consultation", text: "Clarify your criteria and options.", href: "/en/buyer-consultation/" },
];

const LivingHullPageEn = () => (
  <>
    <PageMeta title="Living in Hull — Lifestyle Guide" description="Everything about life in Hull: culture, restaurants, Ottawa proximity and urban vibe. Your guide to settling in Hull." ogImage="https://yanisgauthier.com/og/og-hull.jpg" />
    <HeroSection overline="Living in Hull · Gatineau" title="Living in Hull — the guide" subtitle="Discover Hull's urban lifestyle: culture, restaurants, Ottawa proximity and still-affordable prices." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation/" }} secondaryCta={{ label: "See the neighborhood", href: "/en/hull/" }} heroBgImage={heroImg} />
    <CardGrid overline="Lifestyle" title="What makes Hull unique" items={highlights} />
    <ContentBlock narrow>
      <SectionHeading title="The renaissance of Hull" />
      <p className="prose-body mt-5">Hull is going through a real transformation. New projects, a thriving food scene and a dynamic community are attracting more and more people. Now is the time to discover this area — before prices catch up with demand.</p>
    </ContentBlock>
    <InlineCTA text="Looking for a plex in Hull? Request a return analysis." buttonLabel="Get a plex analysis →" href="/en/plex-analysis/" />
    <FAQSection title="Questions about living in Hull" items={faq} />
    <RelatedPages overline="Also worth reading" title="Also read" pages={related} background="alt" />
    <GuideInlineCTA lang="en" guideType="investor_guide" headline="Free Investor Guide — plex in Hull" text="Returns, taxes and strategy — everything in a guide sent to your email." ctaLabel="Get the Investor Guide" />
    <CTASection dark title="Ready to discover Hull?" text="Let's talk about your criteria — I'll show you the best options in the area." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation/" }, { label: "See the neighborhood", href: "/en/hull/", variant: "outline" }]} trustLine="I give you the options — you decide with full clarity." />
    <StickyGuideBanner lang="en" guideType="investor_guide" label="Free Investor Guide — get it by email" />
  </>
);

export default LivingHullPageEn;
