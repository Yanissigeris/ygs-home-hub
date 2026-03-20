import { Link } from"react-router-dom";
import { Button } from"@/components/ui/button";
import PageMeta from"@/components/PageMeta";
import HeroSection from"@/components/HeroSection";
import CTASection from"@/components/CTASection";
import FAQSection from"@/components/FAQSection";
import ContentBlock from"@/components/ContentBlock";
import SectionHeading from"@/components/SectionHeading";
import CardGrid from"@/components/CardGrid";
import ProcessSteps from"@/components/ProcessSteps";
import InlineCTA from"@/components/InlineCTA";
import TrustMiniStrip from"@/components/TrustMiniStrip";
import GuideInlineCTAEn from"@/components/en/GuideInlineCTAEn";
import StickyGuideBannerEn from"@/components/en/StickyGuideBannerEn";
import { Home, DollarSign, FileText, Shield, Clock, Award } from"lucide-react";
import heroImg from"@/assets/hero-first-buyer.webp";

const considerations = [
 { icon: DollarSign, title:"Down payment and budget", text:"5% minimum for a first purchase. We look together at your real capacity and available programs." },
 { icon: Home, title:"The right property type", text:"Condo, house, semi-detached — each option has its advantages for a first purchase." },
 { icon: FileText, title:"The process in Québec", text:"Promise to purchase, inspection, notary — the process is different from elsewhere in Canada." },
 { icon: Shield, title:"Avoiding beginner mistakes", text:"Don't rush, understand the fees, choose the right neighborhood — I guide you." },
];

const steps = [
 { num:"01", title:"Initial consultation", desc:"We discuss your budget, priorities and questions." },
 { num:"02", title:"Targeted search", desc:"I present the best options in neighborhoods that match your profile." },
 { num:"03", title:"Full support", desc:"Offer, inspection, notary — I support you through to the keys of your first property." },
];

const trustItems = [
 { icon: Clock, label:"Nearly 9 years in Outaouais" },
 { icon: Award, label:"Dozens of first-time buyers supported" },
 { icon: Shield, label:"Total transparency" },
];

const faq = [
 { q:"How much do I need for a first purchase in Gatineau?", a:"With a 5% down payment, you can access many properties. We analyze your real capacity together." },
 { q:"Do I qualify for assistance programs?", a:"There are federal and provincial incentives for first-time buyers. We look at that together during the consultation." },
 { q:"What's different in Québec?", a:"The notary process, the promise to purchase and certain tax specifics. Nothing complicated — you just need to be well guided." },
];

const FirstTimeBuyerPageEn = () => (
 <>
 <PageMeta title="First-Time Buyer — Gatineau | YGS" description="First-time buyer in Gatineau? Budget, process and step-by-step guidance to buy your first home with confidence." />
 <HeroSection
 overline="First-Time Buyer · Gatineau"
 title="First purchase in Gatineau — where to start?"
 subtitle="Becoming a homeowner for the first time is exciting and stressful. I help you navigate every step — budget, neighborhood, offer and process."
 primaryCta={{ label:"Book a consultation", href:"/en/buyer-consultation" }}
 secondaryCta={{ label:"Buyer Guide", href:"/en/buyer-guide" }}
 trustLine="Personalized support."
 heroBgImage={heroImg}
 />

 <TrustMiniStrip items={trustItems} />

 <CardGrid overline="To consider" title="What every first-time buyer needs to know" items={considerations} />

 <InlineCTA text="Not sure about your budget? We can discuss it during a free consultation." buttonLabel="Book a consultation →" href="/en/buyer-consultation" />

 <ProcessSteps steps={steps} background="alt" />

 <ContentBlock narrow>
 <SectionHeading title="Your first purchase deserves proper guidance" />
 <p className="prose-body mt-5">
 Your first property is often the biggest investment of your life. My role is to make sure you make an informed decision — not rushed, not stressed, not based on emotion alone.
 </p>
 <Button className="mt-8" size="lg" asChild>
 <Link to="/en/buyer-consultation">Book my consultation</Link>
 </Button>
 </ContentBlock>

 <GuideInlineCTAEn guideType="buyer_guide" headline="Free Buyer Guide — to get started right" text="Everything you need to know to buy your first property in Gatineau." ctaLabel="Get the Buyer Guide" />

 <CTASection dark title="Ready to take the first step?" text="Book a free consultation — let's clarify your budget, options and next steps." buttons={[{ label:"Book a consultation", href:"/en/buyer-consultation" }, { label:"Explore neighborhoods", href:"/en/plateau-aylmer", variant:"outline" }]} trustLine="I support you at your pace." />

 <FAQSection items={faq} />

 <StickyGuideBannerEn guideType="buyer_guide" label="Free Buyer Guide — get it by email" />
 </>
);

export default FirstTimeBuyerPageEn;
