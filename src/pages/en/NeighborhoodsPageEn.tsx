import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import SectorLinks from "@/components/SectorLinks";
import LinkedCardGrid from "@/components/LinkedCardGrid";
import FAQSection from "@/components/FAQSection";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Clock, Award, Shield, MapPin, Home, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-neighborhoods.webp";

const sectors = [
  { name: "Aylmer", href: "/en/aylmer/", detail: "Lake Deschênes, established neighborhoods, quality of life" },
  { name: "Hull", href: "/en/hull/", detail: "Urban, culture, close to downtown Ottawa" },
  { name: "Plateau", href: "/en/plateau/", detail: "Family-friendly, newer homes, parks" },
  { name: "Gatineau Centre", href: "/en/gatineau/", detail: "Residential, services, accessible suburb" },
  { name: "Chelsea", href: "/en/chelsea/", detail: "Picturesque village, Gatineau Park, nature" },
  { name: "Cantley", href: "/en/cantley/", detail: "Hills, large lots, rural living" },
  { name: "Val-des-Monts", href: "/en/val-des-monts/", detail: "Lakes, cottages, wilderness" },
  { name: "Buckingham", href: "/en/buckingham/", detail: "River, affordable prices, nature" },
  { name: "Masson-Angers", href: "/en/masson-angers/", detail: "New construction, families, growing area" },
  { name: "Pontiac", href: "/en/pontiac/", detail: "Wide open spaces, river, rural living" },
  { name: "Côte-d'Azur", href: "/en/cote-dazur/", detail: "Established residential, bungalows, affordable" },
  { name: "Limbour", href: "/en/limbour/", detail: "Family-friendly, parks, modern suburb" },
];
const lifestyleGuides = [
  { icon: MapPin, title: "Living in Aylmer", text: "Lake, nature, community and Ottawa access.", cta: "Read the guide", href: "/en/plateau-aylmer/" },
  { icon: Home, title: "Living in Hull", text: "Culture, restaurants and Ottawa proximity.", cta: "Read the guide", href: "/en/hull/" },
  { icon: Coffee, title: "Living in the Plateau", text: "Families, recent developments and nature.", cta: "Read the guide", href: "/en/plateau-aylmer/" },
];
const faq = [
  { q: "What's the best neighborhood in Gatineau?", a: "It depends on your profile — families with school-age children, plex investors, first-time buyers, downsizing retirees. Aylmer and the Plateau lean family; Hull suits urban professionals; Chelsea and Cantley appeal to nature lovers; Buckingham and Masson-Angers offer the best value per square foot. Contact me for a personalized recommendation." },
  { q: "Do prices vary a lot between neighborhoods?", a: "Yes, significantly. As of May 2026, Buckingham and Pontiac are the most affordable, Aylmer and parts of the Plateau sit at the top of the range, and Hull offers a good compromise close to Ottawa. Cantley, Chelsea and Val-des-Monts trade urban access for space and nature." },
  { q: "Which neighborhoods are best for families?", a: "Aylmer (especially around Lake Deschênes), the Plateau, Limbour and Masson-Angers consistently rank well for families thanks to schools, parks, sports facilities and quieter streets. School-board eligibility (English vs French) can also influence the decision." },
  { q: "Which areas are best for buyers from Ottawa?", a: "Hull, Aylmer, the Plateau and Côte-d'Azur are the most popular Ottawa-to-Gatineau choices because of bridge access, bilingual services and the lifestyle/value tradeoff. Each has very different price points and vibes." },
  { q: "Where should I look for a plex or investment property?", a: "Hull, Gatineau Centre and parts of Aylmer remain the active plex markets thanks to stable rental demand from federal workers, students and professionals. Each pocket has its own return profile — I run the numbers before you offer." },
  { q: "How quickly do good listings sell?", a: "It varies by sector and segment. Move-in-ready homes in Aylmer, the Plateau or Chelsea often go within days when correctly priced; older properties or higher price points can take longer. Buyer alerts give you a real edge." },
];

const NeighborhoodsPageEn = () => (
  <>
    <PageMeta title="Gatineau Neighborhoods — Complete Guide" description="Compare Gatineau neighborhoods: Aylmer, Hull, Plateau, Buckingham and more. Prices, vibe and profile of each area." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <HeroSection overline="Neighborhoods · Gatineau and Outaouais" title="Neighbourhoods to consider in Outaouais" subtitle="Each Outaouais neighbourhood has its own personality — family-friendly, urban, nature or investment. Explore to find the one that fits you." primaryCta={{ label: "Book a consultation", href: "/en/buyer-consultation/" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation/" }} trustLine="Local expertise. Full transparency." heroBgImage={heroImg} />
<SectorLinks overline="Explore neighborhoods" title="Some Outaouais neighbourhoods" sectors={sectors} />
    <ContentBlock narrow>
      <SectionHeading overline="Choosing a sector" title="Every neighborhood has its character" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        The right area depends on your budget, commute, lifestyle and family priorities. Outaouais is not one market — it's a dozen distinct micro-markets, each with its own price ceiling, school catchment, transit options, and resale dynamics. A house that looks like the same money in Buckingham versus Aylmer rarely behaves the same way five years later.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Active in Outaouais real estate since 2017, I've represented buyers and sellers across nearly every neighborhood listed below. That means I can tell you which streets flood, which ones get the morning sun, which sectors are quietly gentrifying, and where the next round of municipal investment is likely to land. It's the kind of context that doesn't show up in a Centris listing.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Use the cards above to explore individual neighborhoods, then book a consultation so we can match the right two or three to your real-life criteria — not just the most-Googled ones.
      </p>
    </ContentBlock>
    <LinkedCardGrid overline="Lifestyle" title="Neighborhood lifestyle guides" items={lifestyleGuides} columns={3} background="alt" />
    <GuideInlineCTA lang="en" guideType="buyer_guide" headline="Free Buyer Guide — find the right neighborhood" text="Everything you need to know to buy in Gatineau — process, budget and neighborhoods." ctaLabel="Get the Buyer Guide" />
    <FAQSection title="Questions about neighborhoods" items={faq} />
    <CTASection dark title="Need help choosing?" text="Let's talk about your criteria — I'll recommend the neighborhoods best suited to your situation." buttons={[{ label: "Book a consultation", href: "/en/buyer-consultation/" }, { label: "Get my valuation", href: "/en/home-valuation/", variant: "outline" }]} trustLine="I give you the options — you decide with full clarity." />
    <StickyGuideBanner lang="en" guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
  </>
);
export default NeighborhoodsPageEn;
