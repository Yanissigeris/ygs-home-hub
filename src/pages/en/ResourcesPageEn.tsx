import { Link } from"react-router-dom";
import { Button } from"@/components/ui/button";
import PageMeta from"@/components/PageMeta";
import HeroSection from"@/components/HeroSection";
import CTASection from"@/components/CTASection";
import ContentBlock from"@/components/ContentBlock";
import SectionHeading from"@/components/SectionHeading";
import LinkedCardGrid from"@/components/LinkedCardGrid";
import TrustMiniStrip from"@/components/TrustMiniStrip";
import FAQSection from"@/components/FAQSection";
import GuideOffersSectionEn from"@/components/en/GuideOffersSectionEn";
import { Book, Home, MapPin, Users, FileText, TrendingUp, Clock, Award, Shield } from"lucide-react";
import heroImg from"@/assets/hero-resources.webp";

const guides = [
 { icon: Home, title:"Seller Guide", text:"Everything to sell at the best price in Gatineau.", cta:"Read the guide", href:"/en/seller-guide" },
 { icon: Users, title:"Buyer Guide", text:"The buying process in Québec, neighborhoods and steps.", cta:"Read the guide", href:"/en/buyer-guide" },
 { icon: MapPin, title:"Relocation Guide", text:"Settling in Gatineau from Ottawa, Montréal or beyond.", cta:"Read the guide", href:"/en/relocation-guide" },
 { icon: FileText, title:"Military Guide", text:"Real estate in Gatineau for forces members.", cta:"Read the guide", href:"/en/military-guide" },
 { icon: Book, title:"First-Time Buyer", text:"Budget, down payment, process for first-time buyers.", cta:"Read the guide", href:"/en/first-time-buyer" },
 { icon: TrendingUp, title:"Neighborhoods", text:"Best Gatineau neighborhoods for your profile.", cta:"Explore", href:"/en/neighborhoods" },
];
const tools = [
 { icon: Home, title:"Free Valuation", text:"How much is your property worth? Estimate in 24h.", cta:"Get my valuation", href:"/en/home-valuation" },
 { icon: TrendingUp, title:"Market Report", text:"Prices, trends and sales volume in Gatineau.", cta:"See the report", href:"/en/market-report" },
 { icon: FileText, title:"Plex Analysis", text:"Revenues, expenses and return on your plex.", cta:"Get an analysis", href:"/en/plex-analysis" },
];
const trustItems = [
 { icon: Clock, label:"Nearly 9 years in Outaouais" },
 { icon: Award, label:"Platinum Club · Hall of Fame" },
 { icon: Shield, label:"Free resources, no commitment" },
];
const faq = [
 { q:"Are these resources free?", a:"Yes — all guides and tools are free and no commitment required." },
 { q:"How can I get personalized resources?", a:"Contact me directly — I'll send you information adapted to your situation." },
 { q:"Can I get personalized advice?", a:"Absolutely. Guides are a great starting point, but every situation is unique. Book a call." },
];

const ResourcesPageEn = () => (
 <>
 <PageMeta title="Free Real Estate Guides and Resources | YGS" description="Free guides for sellers, buyers and investors in Gatineau. Real estate resources by Yanis Gauthier-Sigeris." />
 <HeroSection overline="Resources · YGS" title="Free real estate resources" subtitle="Guides, analyses and information to help you make the best real estate decisions in Gatineau." primaryCta={{ label:"Free Valuation", href:"/en/home-valuation" }} secondaryCta={{ label:"Talk to Yanis", href:"/en/contact" }} trustLine="By Yanis Gauthier-Sigeris · Real Estate Broker, Gatineau" heroBgImage={heroImg} />
 <TrustMiniStrip items={trustItems} />
 <LinkedCardGrid overline="Guides" title="Complete free guides" items={guides} columns={3} />
 <LinkedCardGrid overline="Tools" title="Tools and analyses" items={tools} columns={3} background="alt" />
 <GuideOffersSectionEn />
 <ContentBlock narrow><SectionHeading title="Need personalized help?" /><p className="prose-body mt-5">Guides are a good starting point, but every situation is unique. Book a call to get advice adapted to your project.</p><Button className="mt-8" size="lg" asChild><Link to="/en/contact">Talk to Yanis</Link></Button></ContentBlock>
 <FAQSection items={faq} />
 <CTASection dark title="Start your real estate project" text="Free valuation, buyer consultation or plex analysis — choose your next step." buttons={[{ label:"Free Valuation", href:"/en/home-valuation" }, { label:"Book a consultation", href:"/en/contact", variant:"outline" }]} trustLine="I support you at your pace." />
 </>
);
export default ResourcesPageEn;
