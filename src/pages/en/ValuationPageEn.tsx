import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import BenefitsList from "@/components/BenefitsList";
import FunnelNextStep from "@/components/FunnelNextStep";
import ValuationForm from "@/components/ValuationForm";
import { Clock, Shield, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import yanisPhoto from "@/assets/yanis-hero-cutout.webp";
import heroImg from "@/assets/hero-valuation-pro.webp";

const benefits = ["Realistic value range based on recent sales in your Gatineau neighborhood","Advice on price positioning adapted to your Outaouais area","Your property's strengths to highlight for local and Ottawa buyers","Issues to address — and which ones are worth it in your market","Possible next steps, no commitment"];
const trustBullets = [{ icon: Shield, text: "Free, no commitment" },{ icon: Clock, text: "Personalized response within 24h" },{ icon: CheckCircle2, text: "Based on recent comparable sales" }];
const afterSteps = [{ title: "Seller plan", text: "Go further — get a complete plan: pricing, preparation, marketing and timeline.", href: "/en/sell", cta: "Get my plan", highlight: true },{ title: "Talk to Yanis", text: "Discuss your situation and options — no commitment.", href: "/en/contact", cta: "Book a call" }];

const valuationFaq = [
  { q: "How do I get a home valuation in Gatineau?", a: "Fill out the form on this page with your property address. I'll get back to you within 24 hours with an analysis based on recent comparable sales in your area." },
  { q: "Is the valuation really free?", a: "Yes, it's free, confidential and no commitment. You receive a clear report — no obligation to sell." },
  { q: "How much is my house worth in Gatineau?", a: "The value depends on the neighborhood, property type and recent sales. My valuation gives you a realistic range based on local comparables." },
  { q: "What is the valuation based on?", a: "I use recent sales on your street and in your area, your property's condition, lot size and current Outaouais market conditions." },
  { q: "How is this different from an online estimate?", a: "Online tools give an approximate estimate. My valuation accounts for local specifics and your property's actual condition — much more accurate." },
  { q: "How long does the valuation take?", a: "You receive a personalized response within 24 hours. For a detailed analysis with a visit, we schedule at your convenience." },
  { q: "Do I need a home visit for the valuation?", a: "Not necessarily for a first estimate. If you want a more detailed report, a visit can be arranged — no commitment." },
  { q: "Does the valuation commit me to selling?", a: "No, not at all. Many homeowners request a valuation simply to know their value, without any immediate intention to sell." },
  { q: "Is my area covered?", a: "Yes — I cover all of Outaouais: Aylmer, Hull, Plateau, Chelsea, Cantley, Buckingham, Masson-Angers, Val-des-Monts and Pontiac." },
  { q: "What happens after I receive my valuation?", a: "You'll have the numbers and options. If you want to go further, I can prepare a complete seller plan or answer your questions on a call." },
];

const anim = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } };

const ValuationPageEn = () => {
  return (
    <>
      <PageMeta title="Free Home Valuation — Gatineau" description="Get a free and accurate valuation of your property in Gatineau. Analysis based on recent sales by an experienced broker." ogImage="https://yanisgauthier.com/og/og-eval.jpg" />
    <ServiceJsonLd name="Free Home Valuation in Gatineau" description="Get a free property valuation in Gatineau, Aylmer, Hull or Outaouais. Analysis based on recent comparable sales in your area." url="/en/home-valuation" serviceType="Real Estate Appraisal Service" />
      <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={{ ["--hero-bg-image" as any]: `url(${heroImg})` }}>
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
              <h1 className="text-primary-foreground max-w-[520px]">How much is your property really worth?</h1>
              <p className="hidden sm:block mt-5 max-w-[28rem] text-[1.0625rem] leading-[1.75] text-primary-foreground/85">Get a personalized and confidential estimate — based on your property and recent comparable sales in your Gatineau, Aylmer, Hull or Outaouais neighborhood.</p>
              <p className="sm:hidden mt-3 text-[0.9375rem] leading-[1.6] text-primary-foreground/85">Free and confidential estimate based on recent sales.</p>
              <div className="mt-4 md:mt-8 space-y-2 md:space-y-3">{trustBullets.map((b) => (<div key={b.text} className="flex items-center gap-3 text-[0.8125rem] md:text-[0.875rem] text-primary-foreground/75"><b.icon size={15} className="text-accent shrink-0" /><span>{b.text}</span></div>))}</div>
              <div className="mt-6 md:mt-10 flex flex-wrap gap-x-7 gap-y-2 text-[0.75rem] text-primary-foreground/55 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-accent/50" /> Hall of Fame RE/MAX</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-accent/50" /> Nearly 9 years in Outaouais</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}>
              <ValuationForm lang="en" variant="glass" addressPlaceholder="123 Example St, Gatineau" />
            </motion.div>
          </div>
        </div>
      </section>
      <BenefitsList overline="What you receive" title="Your valuation includes" items={benefits} />
      <FunnelNextStep overline="What's next?" title="After your valuation" subtitle="You'll have the numbers. Here are the options to go further." steps={afterSteps} background="alt" />
      <RelatedPages
        overline="Also worth reading"
        title="Related resources"
        pages={[
          { title: "Hull home valuation", text: "What's your Hull property worth?", href: "/en/home-valuation-hull" },
          { title: "Aylmer home valuation", text: "What's your Aylmer property worth?", href: "/en/home-valuation-aylmer" },
          { title: "Sell in Gatineau", text: "Strategy, pricing and guidance.", href: "/en/sell" },
          { title: "Realtor Chelsea", text: "Nature and market.", href: "/en/chelsea" },
          { title: "Realtor Cantley", text: "Land and rural living.", href: "/en/cantley" },
          { title: "All Neighborhoods", text: "Compare all areas.", href: "/en/neighborhoods" },
        ]}
        background="alt"
      />
      <FAQSection title="Valuation questions" items={valuationFaq} />
    </>
  );
};
export default ValuationPageEn;
