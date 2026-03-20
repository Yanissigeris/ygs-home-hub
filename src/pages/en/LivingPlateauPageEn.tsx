import PageMeta from"@/components/PageMeta";
import HeroSection from"@/components/HeroSection";
import CTASection from"@/components/CTASection";
import ContentBlock from"@/components/ContentBlock";
import SectionHeading from"@/components/SectionHeading";
import CardGrid from"@/components/CardGrid";
import FAQSection from"@/components/FAQSection";
import RelatedPages from"@/components/RelatedPages";
import InlineCTA from"@/components/InlineCTA";
import GuideInlineCTAEn from"@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from"@/components/en/StickyGuideBannerEn";
import { Home, Users, MapPin, TreePine } from"lucide-react";
import heroImg from"@/assets/hero-living-plateau.webp";

const highlights = [
 { icon: MapPin, title:"Recent developments", text:"Modern homes in new neighborhoods with parks and cycling paths." },
 { icon: Home, title:"Excellent value", text:"More space and house for your budget than downtown." },
 { icon: TreePine, title:"Nature and outdoors", text:"Proximity to Gatineau Park, trails and green spaces." },
 { icon: Users, title:"Family neighborhoods", text:"Schools, daycares, parks and a young, dynamic community." },
];

const faq = [
 { q:"Is the Plateau far from Ottawa?", a:"20-30 minutes by car depending on the time. Many Plateau residents work in Ottawa." },
 { q:"Are there good schools in the Plateau?", a:"Yes — French and English schools, daycares and after-school activities." },
 { q:"Is the Plateau still growing?", a:"Yes — new residential projects are underway, attracting more and more families." },
];

const related = [
 { title:"Buy in the Plateau", text:"Neighborhood guide: prices, profiles and potential.", href:"/en/plateau" },
 { title:"All neighborhoods", text:"Compare Gatineau neighborhoods.", href:"/en/neighborhoods" },
 { title:"First-time buyer", text:"Budget, process and tips for first-time buyers.", href:"/en/first-time-buyer" },
 { title:"Buyer Consultation", text:"Clarify your criteria and options.", href:"/en/buyer-consultation" },
];

const LivingPlateauPageEn = () => (
 <>
 <PageMeta title="Living in the Plateau — Lifestyle Guide | YGS" description="Everything about life in the Plateau in Gatineau: families, parks, developments and quality of life. Guide to settling in." />
 <HeroSection overline="Living in the Plateau · Gatineau" title="Living in the Plateau — the guide" subtitle="Discover the Plateau lifestyle: recent developments, families, nature and excellent value for money." primaryCta={{ label:"Book a consultation", href:"/en/buyer-consultation" }} secondaryCta={{ label:"See the neighborhood", href:"/en/plateau" }} heroBgImage={heroImg} />
 <CardGrid overline="Lifestyle" title="What makes the Plateau unique" items={highlights} />
 <ContentBlock narrow>
 <SectionHeading title="The Plateau is for families" />
 <p className="prose-body mt-5">The Plateau has become one of Gatineau's most popular areas for young families. New homes, parks, schools and quick access to everything — it's a lifestyle choice that's gaining more and more followers.</p>
 </ContentBlock>
 <InlineCTA text="Own a property in the Plateau? Find out how much it's worth." buttonLabel="Free Valuation →" href="/en/home-valuation" />
 <FAQSection title="Questions about living in the Plateau" items={faq} />
 <RelatedPages overline="Also worth reading" title="Also read" pages={related} background="alt" />
 <GuideInlineCTAEn guideType="buyer_guide" headline="Free Buyer Guide — settling in the Plateau" text="Everything to buy in the Plateau — process, budget and tips sent to your email." ctaLabel="Get the Buyer Guide" />
 <CTASection dark title="Ready to discover the Plateau?" text="Let's talk about your criteria — I'll show you the best options in the area." buttons={[{ label:"Book a consultation", href:"/en/buyer-consultation" }, { label:"See the neighborhood", href:"/en/plateau", variant:"outline" }]} trustLine="I give you the options, you decide." />
 <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
 </>
);

export default LivingPlateauPageEn;
