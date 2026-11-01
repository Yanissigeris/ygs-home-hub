import PageMeta from "@/components/PageMeta";
import JsonLdScript from "@/components/JsonLdScript";
import valuationServiceSchema from "@/data/valuation-service-schema.json";
import FAQSection from "@/components/FAQSection";
import { valuationFaqFr } from "@/data/valuation-faq";
import RelatedPages from "@/components/RelatedPages";
import { marketArticlePages, marketBlockCopy } from "@/data/market-articles";
import SectionHeading from "@/components/SectionHeading";
import FunnelNextStep from "@/components/FunnelNextStep";
import ValuationForm from "@/components/ValuationForm";
import ValuationOptions from "@/components/ValuationOptions";
import ValuationIncludes from "@/components/ValuationIncludes";
import ValuationTestimonial from "@/components/ValuationTestimonial";
import ValuationSteps from "@/components/ValuationSteps";
import { Clock, Shield, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import yanisPhoto from "@/assets/yanis-hero-cutout.webp";
import heroImg from "@/assets/hero-valuation-pro.webp";
import { heroBgStyle } from "@/lib/hero-backgrounds";

// Activer après validation des vraies valeurs (prénom, secteur, année).
const SHOW_TESTIMONIAL = true;

const benefits = [
  "Fourchette de valeur réaliste basée sur les ventes récentes dans votre secteur de Gatineau",
  "Avis sur le positionnement prix adapté à votre quartier en Outaouais",
  "Forces de votre propriété à mettre de l'avant pour les acheteurs locaux et d'Ottawa",
  "Points à corriger, et lesquels valent la peine dans votre marché",
  "Prochaines étapes possibles, sans engagement",
];

const trustBullets = [
  { icon: Shield, text: "Gratuit et sans engagement" },
  { icon: Clock, text: "Réponse personnalisée" },
  { icon: CheckCircle2, text: "Basé sur les ventes comparables récentes" },
];


const afterSteps = [
  { title: "Plan vendeur", text: "Pour aller plus loin, recevez un plan complet : prix, préparation, mise en marché et calendrier.", href: "/plan-vendeur-gatineau/", cta: "Recevoir mon plan", highlight: true },
  { title: "Parler à Yanis", text: "Discuter de votre situation et de vos options, sans engagement.", href: "/contact-yanis/", cta: "Réserver un appel" },
];

const anim = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const ValuationPage = () => {
  return (
    <>
      <PageMeta title="Évaluation gratuite · Gatineau et Outaouais" description="Obtenez une évaluation gratuite de votre propriété à Gatineau, Aylmer, Hull ou en Outaouais. Analyse basée sur les ventes récentes de votre secteur." ogImage="https://yanisgauthier.com/og/og-eval.jpg" />
      <JsonLdScript id="ygs-jsonld-service-valuation" data={valuationServiceSchema["/evaluation-gratuite-gatineau"]} />

      {/* ── FORM-FIRST CONVERSION HERO ── */}
      <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
        {/* Ambient light layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_65%_55%,_hsl(226_50%_22%_/_0.45)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

        {/* Left-side text-protect — guarantees headline/subtitle legibility regardless of photo brightness */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: "linear-gradient(90deg, rgba(0,14,53,0.92) 0%, rgba(0,14,53,0.78) 30%, rgba(0,14,53,0.45) 50%, rgba(0,14,53,0.10) 70%, transparent 85%)",
          }}
        />
        {/* Mobile vertical text-protect */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background: "linear-gradient(180deg, rgba(0,14,53,0.85) 0%, rgba(0,14,53,0.70) 50%, rgba(0,14,53,0.55) 100%)",
          }}
        />

        {/* Portrait – positioned behind the form on desktop */}
        <motion.div
          className="absolute bottom-0 right-[2%] lg:right-[4%] xl:right-[8%] hidden md:block pointer-events-none select-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          aria-hidden="true"
        >
          <div style={{
            maskImage: 'linear-gradient(to top, transparent 0%, black 20%), linear-gradient(to right, transparent 0%, black 35%), linear-gradient(to left, transparent 0%, black 15%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%), linear-gradient(to right, transparent 0%, black 35%), linear-gradient(to left, transparent 0%, black 15%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'destination-in',
          }}>
            <img
              src={yanisPhoto}
              alt="Yanis Gauthier-Sigeris, courtier immobilier à Gatineau"
              width={896}
              height={1200}
              className="w-[380px] lg:w-[440px] xl:w-[500px] h-auto object-contain object-bottom"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>

        <div className="section-container relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_460px] md:gap-8 lg:gap-16 items-start">

            {/* ── LEFT: Value proposition ── */}
            <motion.div className="pt-1 md:pt-6 lg:pt-10" {...anim}>
              {/* Eyebrow */}
              <p className="mb-3 md:mb-5 flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase text-primary-foreground/30" style={{ fontFamily: "var(--sans)" }}>
                <span>Évaluation gratuite</span>
                <span className="inline-block h-[3px] w-[3px] rounded-full bg-accent/40" />
                <span>Gatineau</span>
              </p>

              {/* Headline */}
              <h1 className="text-primary-foreground max-w-[520px]">
                Combien vaut votre propriété?
              </h1>

              {/* Subtitle - hidden on mobile to save space */}
              <p className="hidden sm:block mt-5 max-w-[28rem] text-[1.0625rem] leading-[1.75] text-primary-foreground/85">
                Je suis Yanis Gauthier-Sigeris, courtier immobilier résidentiel chez RE/MAX Direct. Votre évaluation est gratuite et je la prépare à partir des ventes récentes de votre secteur, à Gatineau, à Aylmer, à Hull ou ailleurs en Outaouais.
              </p>
              {/* Shorter mobile subtitle */}
              <p className="sm:hidden mt-3 text-[0.9375rem] leading-[1.6] text-primary-foreground/85">
                Évaluation gratuite préparée par Yanis Gauthier-Sigeris, courtier immobilier chez RE/MAX Direct, à partir des ventes récentes de votre secteur.
              </p>

              {/* Trust bullets - compact on mobile */}
              <div className="hidden sm:block mt-4 md:mt-8 space-y-2 md:space-y-3">
                {trustBullets.map((b) => (
                  <div key={b.text} className="flex items-center gap-3 text-[0.8125rem] md:text-[0.875rem] text-primary-foreground/75">
                    <b.icon size={15} className="text-accent shrink-0" />
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>

              {/* Credibility strip */}
              <div className="hidden sm:flex mt-6 md:mt-10 flex-wrap gap-x-7 gap-y-2 text-[0.75rem] text-primary-foreground/55 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-accent/50" /> Plus de 300 transactions depuis 2017</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-accent/50" /> Hall of Fame RE/MAX 2024</span>
              </div>
            </motion.div>

            {/* ── RIGHT: Form card ── */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              <div className="form-16-inputs">
                <ValuationForm lang="fr" variant="glass" addressPlaceholder="123 rue Exemple, Gatineau" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ValuationIncludes lang="fr" benefits={benefits} />

      <ValuationOptions lang="fr" />
      <ValuationSteps lang="fr" />
      <FunnelNextStep
        overline="Et ensuite?"
        title="Après votre évaluation"
        subtitle="Vous aurez les chiffres. Voici les options pour aller plus loin."
        steps={afterSteps}
        background="alt"
      />

      {SHOW_TESTIMONIAL && (
        <ValuationTestimonial
          quote={"« Cela est la 2e fois que je fais appel à ses services et je suis toujours très satisfaite de son service. Yanis est très professionnel et respectueux, très honnête, un être de confiance. »"}
          cite="Sylvie, Aylmer, 2026"
        />
      )}
      <RelatedPages
        overline="À lire aussi"
        title="Ressources liées"
        pages={[
          { title: "Évaluation maison Hull", text: "Combien vaut votre propriété à Hull?", href: "/evaluation-maison-hull/" },
          { title: "Évaluation maison Aylmer", text: "Combien vaut votre propriété à Aylmer?", href: "/evaluation-maison-aylmer/" },
          { title: "Vendre à Gatineau", text: "Ma démarche pour vendre au bon prix.", href: "/vendre-ma-maison-gatineau/" },
          { title: "Courtier Chelsea", text: "Nature et marché de Chelsea.", href: "/chelsea/" },
          { title: "Courtier Cantley", text: "Terrains et vie rurale.", href: "/cantley/" },
          { title: "Tous les quartiers", text: "Comparez les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
        ]}
        background="alt"
      />
      {/* Internal links to the latest market articles (SEO: they had a single inlink from the blog index) */}
      <RelatedPages
        overline={marketBlockCopy.fr.overline}
        title={marketBlockCopy.fr.title}
        pages={marketArticlePages("fr", "seller")}
      />
      <FAQSection title="Questions sur l'évaluation" items={valuationFaqFr} />
    </>
  );
};

export default ValuationPage;
