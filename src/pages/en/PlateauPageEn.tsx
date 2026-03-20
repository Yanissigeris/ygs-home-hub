import PageMeta from"@/components/PageMeta";
import HeroSection from"@/components/HeroSection";
import CTASection from"@/components/CTASection";
import CardGrid from"@/components/CardGrid";
import ImageTextSplit from"@/components/ImageTextSplit";
import InlineCTA from"@/components/InlineCTA";
import SectorLinks from"@/components/SectorLinks";
import TrustMiniStrip from"@/components/TrustMiniStrip";
import FAQSection from"@/components/FAQSection";
import RelatedPages from"@/components/RelatedPages";
import GuideInlineCTAEn from"@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from"@/components/en/StickyGuideBannerEn";
import { CheckCircle2, Users, Home, TrendingUp, MapPin, Clock, Award, Shield } from"lucide-react";
import heroImg from"@/assets/hero-plateau.webp";
import lifestyleImg from"@/assets/plateau-aylmer-lifestyle.webp";

const trustItems = [
 { icon: Clock, label:"Nearly 9 years in Outaouais" },
 { icon: Award, label:"Plateau area specialist" },
 { icon: Shield, label:"Pressure-free support" },
];

const reasons = ["Recent developments with modern homes","Family neighborhoods with parks and cycling paths","Schools and daycares nearby","Quick access to Ottawa and downtown Gatineau","Excellent value for young families",
];

const profiles = [
 { icon: Users, title:"Young families", text:"Recent homes, safe neighborhoods and an active family community." },
 { icon: Home, title:"First-time buyers", text:"New or recent properties at still-accessible prices." },
 { icon: MapPin, title:"Outdoor enthusiasts", text:"Proximity to Gatineau Park and numerous trails." },
 { icon: TrendingUp, title:"Investors", text:"Growing area with strong demand and good return potential." },
];

const faq = [
 { q:"Is the Plateau a good choice for a family?", a:"It's one of the most popular areas for families — recent homes, parks, schools and a young community." },
 { q:"Are prices increasing in the Plateau?", a:"The Plateau is experiencing strong growth. Contact me for the latest data in your sub-sector." },
 { q:"Are there many new constructions?", a:"Yes — several recent developments offer new homes and semis with warranty." },
];

const relatedSectors = [
 { name:"Aylmer", href:"/en/aylmer", detail:"Lake Deschênes, established neighborhoods" },
 { name:"Hull", href:"/en/hull", detail:"Urban, culture, condos" },
 { name:"Gatineau centre", href:"/en/gatineau", detail:"Residential, services, affordable" },
];

const related = [
 { title:"Living in the Plateau — the guide", text:"Lifestyle, families and recent developments.", href:"/en/living-plateau" },
 { title:"First-time buyer", text:"Budget, process and tips for first-time buyers.", href:"/en/first-time-buyer" },
 { title:"Buyer Guide", text:"The buying process in Québec.", href:"/en/buyer-guide" },
 { title:"Free Valuation", text:"How much is your Plateau property worth?", href:"/en/home-valuation" },
];

const PlateauPageEn = () => (
 <>
 <PageMeta title="Plateau — Neighborhood Guide Gatineau | YGS" description="Discover the Plateau in Gatineau. Families, recent developments, parks and quick Ottawa access. Complete guide." />
 <HeroSection overline="Neighborhood Guide · Plateau" title="Live, buy or invest in the Plateau" subtitle="Recent developments, family neighborhoods and excellent value — the Plateau is one of Gatineau's most dynamic areas." primaryCta={{ label:"Book a consultation", href:"/en/buyer-consultation" }} secondaryCta={{ label:"Free Valuation", href:"/en/home-valuation" }} heroBgImage={heroImg} />
 <TrustMiniStrip items={trustItems} />
 <ImageTextSplit image={lifestyleImg} imageAlt="Life in the Plateau, Gatineau" imagePosition="right">
 <div className="label-overline">The area</div>
 <h2 className="mt-3">Why the Plateau attracts families</h2>
 <div className="mt-7 space-y-3.5">
 {reasons.map((r) => (
 <div key={r} className="flex items-center gap-3">
 <CheckCircle2 size={16} className="shrink-0 text-accent" />
 <span className="text-[0.9375rem] text-foreground">{r}</span>
 </div>
 ))}
 </div>
 </ImageTextSplit>
 <CardGrid overline="For who" title="The Plateau is ideal for…" items={profiles} background="alt" />
 <InlineCTA text="Own property in the Plateau? Find out how much it's worth." buttonLabel="Free Valuation →" href="/en/home-valuation" />
 <FAQSection title="Questions about the Plateau" items={faq} />
 <SectorLinks overline="Other areas" title="Explore other neighborhoods" sectors={relatedSectors} />
 <RelatedPages overline="Also worth reading" title="Also read" pages={related} background="alt" />
 <GuideInlineCTAEn guideType="buyer_guide" headline="Free Buyer Guide — buying in the Plateau" text="Process, budget and tips for buying in the area — in a guide sent to your email." ctaLabel="Get the Buyer Guide" />
 <CTASection dark title="Buyer or seller in the Plateau?" text="I know the Plateau — let's talk about your project." buttons={[{ label:"Free Valuation", href:"/en/home-valuation" }, { label:"Book a consultation", href:"/en/buyer-consultation", variant:"outline" }]} trustLine="I give you the numbers and the options, you decide." />
 <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
 </>
);

export default PlateauPageEn;
