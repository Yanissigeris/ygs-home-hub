import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import ImageTextSplit from "@/components/ImageTextSplit";
import SectorLinks from "@/components/SectorLinks";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { CheckCircle2, Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/gatineau-river-view.webp";

const profiles = [
  { icon: Users, title: "Families", text: "More space, yard, French and English schools nearby." },
  { icon: Home, title: "First-time buyers", text: "More affordable entry prices than Ottawa with a better quality of life." },
  { icon: TrendingUp, title: "Investors", text: "Strong resale potential in a constantly growing area." },
  { icon: MapPin, title: "Relocating from Ottawa", text: "Smooth transition — I know both sides of the river." },
];

const sellerReasons = [
  "Moving up to a larger home or more land",
  "Relocating to a quieter or better-suited area",
  "Taking advantage of current market conditions",
  "Downsizing after the kids have moved out",
];

const PlateauAylmerPageEn = () => (
  <>
    <PageMeta title="Plateau / Aylmer — Neighborhood Guide" description="Plateau and Aylmer: family-friendly, newer homes, nature and Ottawa access. Complete neighborhood guide for buyers." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <NeighborhoodJsonLd name="Plateau / Aylmer" description="Real estate broker specializing in Plateau and Aylmer, Gatineau. Family neighborhoods, nature and newer homes." lat={45.4500} lng={-75.8100} url="/en/plateau-aylmer/" />
    <HeroSection
      overline="Neighborhood Guide · Plateau / Aylmer"
      title="Living in Plateau and Aylmer"
      subtitle="Family life, amenities, Ottawa access and quality of life — what you need to know to buy or sell in the area."
      primaryCta={{ label: "Get guidance", href: "/en/contact/" }}
      secondaryCta={{ label: "My property value", href: "/en/home-valuation/" }}
      heroBgImage={heroImg}
    />

    <CardGrid
      overline="For who"
      title="This area is ideal for…"
      items={profiles}
      background="alt"
    />

    <ImageTextSplit image={heroImg} imageAlt="River view, Gatineau" imagePosition="left">
      <SectionHeading
        overline="Sellers in the area"
        title="Already living in Plateau / Aylmer?"
        subtitle="Now might be the right time to see what your property is worth in today's market."
      />
      <div className="mt-7 space-y-3.5">
        {sellerReasons.map((r) => (
          <div key={r} className="flex items-center gap-3">
            <CheckCircle2 size={16} className="shrink-0 text-accent" />
            <span className="text-[0.9375rem] text-muted-foreground">{r}</span>
          </div>
        ))}
      </div>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/en/home-valuation/">See how much my property is worth</Link>
      </Button>
    </ImageTextSplit>

    <SectorLinks
      overline="Other neighborhoods"
      title="Explore other areas"
      sectors={[
        { name: "Hull", href: "/en/hull/", detail: "Urban, downtown, condos and plex" },
        { name: "Buckingham", href: "/en/buckingham/", detail: "Affordable, nature, space" },
      ]}
    />

    <GuideInlineCTA lang="en"
      guideType="buyer_guide"
      headline="Free Buyer Guide — buying in Plateau / Aylmer"
      text="Process, budget and tips for buying in the area — in a guide sent to your email."
      ctaLabel="Get the Buyer Guide"
    />

    <CTASection
      dark
      title="Buyer or seller in Plateau / Aylmer?"
      text="I can help you see clearly — whether you're buying in the area or want to know your property's value."
      buttons={[
        { label: "Get my value", href: "/en/home-valuation/" },
        { label: "Book a consultation", href: "/en/contact/", variant: "outline" },
      ]}
      trustLine="I give you the numbers and the options — you decide."
    />

    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);

export default PlateauAylmerPageEn;
