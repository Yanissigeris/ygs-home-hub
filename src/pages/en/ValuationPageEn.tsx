import PageMeta from "@/components/PageMeta";
import JsonLdScript from "@/components/JsonLdScript";
import valuationServiceSchema from "@/data/valuation-service-schema.json";
import FAQSection from "@/components/FAQSection";
import { valuationFaqEn } from "@/data/valuation-faq";
import RelatedPages from "@/components/RelatedPages";
import { marketArticlePages, marketBlockCopy } from "@/data/market-articles";
import BenefitsList from "@/components/BenefitsList";
import FunnelNextStep from "@/components/FunnelNextStep";
import ValuationForm from "@/components/ValuationForm";
import ValuationOptions from "@/components/ValuationOptions";
import ValuationSteps from "@/components/ValuationSteps";
import { Clock, Shield, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import yanisPhoto from "@/assets/yanis-hero-cutout.webp";
import heroImg from "@/assets/hero-valuation-pro.webp";
import { heroBgStyle } from "@/lib/hero-backgrounds";

const benefits = ["Realistic value range based on recent sales in your Gatineau neighbourhood","Advice on price positioning adapted to your Outaouais area","Your property's strengths to highlight for local and Ottawa buyers","Issues to address, and which ones are worth it in your market","Possible next steps, no commitment"];
const trustBullets = [{ icon: Shield, text: "Free, no commitment" },{ icon: Clock, text: "Personalized response" },{ icon: CheckCircle2, text: "Based on recent comparable sales" }];
const afterSteps = [{ title: "Seller plan", text: "To go further, get a complete plan: pricing, preparation, marketing and timeline.", href: "/en/seller-plan/", cta: "Get my plan", highlight: true },{ title: "Talk to Yanis", text: "Discuss your situation and your options, with no commitment.", href: "/en/contact/", cta: "Book a call" }];


const anim = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } };

const ValuationPageEn = () => {
  return (
    <>
      <PageMeta title="Free Home Valuation | Gatineau" description="Get a free valuation of your property in Gatineau. Analysis based on recent sales by an experienced broker." ogImage="https://yanisgauthier.com/og/og-eval.jpg" />
      <JsonLdScript id="ygs-jsonld-service-valuation" data={valuationServiceSchema["/en/home-valuation"]} />
      <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_65%_55%,_hsl(200_30%_24%_/_0.45)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

        {/* Left-side text-protect — guarantees headline/subtitle legibility regardless of photo brightness */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: "linear-gradient(90deg, rgba(23,48,59,0.92) 0%, rgba(23,48,59,0.78) 30%, rgba(23,48,59,0.45) 50%, rgba(23,48,59,0.10) 70%, transparent 85%)",
          }}
        />
        {/* Mobile vertical text-protect */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background: "linear-gradient(180deg, rgba(23,48,59,0.85) 0%, rgba(23,48,59,0.70) 50%, rgba(23,48,59,0.55) 100%)",
          }}
        />

        <motion.div className="absolute bottom-0 right-[2%] lg:right-[4%] xl:right-[8%] hidden md:block pointer-events-none select-none" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 0.2, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} aria-hidden="true">
          <div style={{
            maskImage: 'linear-gradient(to top, transparent 0%, black 20%), linear-gradient(to right, transparent 0%, black 35%), linear-gradient(to left, transparent 0%, black 15%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%), linear-gradient(to right, transparent 0%, black 35%), linear-gradient(to left, transparent 0%, black 15%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'destination-in',
          }}><img src={yanisPhoto} alt="Yanis Gauthier-Sigeris, real estate broker in Gatineau" width={896} height={1200} className="w-[380px] lg:w-[440px] xl:w-[500px] h-auto object-contain object-bottom" loading="eager" decoding="async" /></div>
        </motion.div>

        <div className="section-container relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_460px] md:gap-8 lg:gap-16 items-start">
            <motion.div className="pt-1 md:pt-6 lg:pt-10" {...anim}>
              <p className="mb-3 md:mb-5 flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase text-primary-foreground/30" style={{ fontFamily: "var(--sans)" }}><span>Free Valuation</span><span className="inline-block h-[3px] w-[3px] rounded-full bg-accent/40" /><span>Gatineau</span></p>
              <h1 className="text-primary-foreground max-w-[520px]">How much is your property worth?</h1>
              <p className="hidden sm:block mt-5 max-w-[28rem] text-[1.0625rem] leading-[1.75] text-primary-foreground/85">I'm Yanis Gauthier-Sigeris, a residential real estate broker with RE/MAX Direct. Your valuation is free, and I build it from recent sales in your part of Gatineau, Aylmer, Hull or elsewhere in the Outaouais.</p>
              <p className="sm:hidden mt-3 text-[0.9375rem] leading-[1.6] text-primary-foreground/85">Free valuation prepared by Yanis Gauthier-Sigeris, real estate broker with RE/MAX Direct, from recent sales in your area.</p>
              <div className="hidden sm:block mt-4 md:mt-8 space-y-2 md:space-y-3">{trustBullets.map((b) => (<div key={b.text} className="flex items-center gap-3 text-[0.8125rem] md:text-[0.875rem] text-primary-foreground/75"><b.icon size={15} className="text-accent shrink-0" /><span>{b.text}</span></div>))}</div>
              <div className="hidden sm:flex mt-6 md:mt-10 flex-wrap gap-x-7 gap-y-2 text-[0.75rem] text-primary-foreground/55 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-accent/50" /> 300+ transactions since 2017</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-accent/50" /> RE/MAX Hall of Fame 2024</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}>
              <ValuationForm lang="en" variant="glass" addressPlaceholder="123 Example St, Gatineau" />
            </motion.div>
          </div>
        </div>
      </section>
      <BenefitsList overline="What you receive" title="Your valuation includes" items={benefits} />
      <ValuationOptions lang="en" />
      <ValuationSteps lang="en" />
      <FunnelNextStep overline="What's next?" title="After your valuation" subtitle="You'll have the numbers. Here are the options to go further." steps={afterSteps} background="alt" />
      <RelatedPages
        overline="Also worth reading"
        title="Related resources"
        pages={[
          { title: "Hull home valuation", text: "What's your Hull property worth?", href: "/en/home-valuation-hull/" },
          { title: "Aylmer home valuation", text: "What's your Aylmer property worth?", href: "/en/home-valuation-aylmer/" },
          { title: "Sell in Gatineau", text: "How I help you sell at the right price.", href: "/en/sell/" },
          { title: "Chelsea broker", text: "Nature and market.", href: "/en/chelsea/" },
          { title: "Cantley broker", text: "Land and rural living.", href: "/en/cantley/" },
          { title: "All Neighbourhoods", text: "Compare all areas.", href: "/en/neighborhoods/" },
        ]}
        background="alt"
      />
      {/* Internal links to the latest market articles (SEO: they had a single inlink from the blog index) */}
      <RelatedPages overline={marketBlockCopy.en.overline} title={marketBlockCopy.en.title} pages={marketArticlePages("en", "seller")} />
      <FAQSection title="Valuation questions" items={valuationFaqEn} />
    </>
  );
};
export default ValuationPageEn;
