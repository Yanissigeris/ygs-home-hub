import PageMeta from "@/components/PageMeta";
import SEO from "@/components/SEO";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import SectionHeading from "@/components/SectionHeading";
import FunnelNextStep from "@/components/FunnelNextStep";
import ValuationForm from "@/components/ValuationForm";
import { Clock, Shield, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import yanisPhoto from "@/assets/yanis-hero-cutout.webp";
import heroImg from "@/assets/hero-valuation-pro.webp";

// Activer après validation des vraies valeurs (prénom, secteur, année).
const SHOW_TESTIMONIAL = true;

const benefits = [
  "Fourchette de valeur réaliste basée sur les ventes récentes dans votre secteur de Gatineau",
  "Avis sur le positionnement prix adapté à votre quartier en Outaouais",
  "Forces de votre propriété à mettre de l'avant pour les acheteurs locaux et d'Ottawa",
  "Points à corriger — et lesquels valent la peine dans votre marché",
  "Prochaines étapes possibles, sans engagement",
];

const trustBullets = [
  { icon: Shield, text: "Gratuit et sans engagement" },
  { icon: Clock, text: "Réponse personnalisée en 24h" },
  { icon: CheckCircle2, text: "Basé sur les ventes comparables récentes" },
];

const valuationFaq = [
  { q: "Comment obtenir une évaluation de maison à Gatineau?", a: "Remplissez le formulaire sur cette page avec l'adresse de votre propriété. Je vous reviens en 24h avec une analyse basée sur les ventes comparables récentes dans votre secteur." },
  { q: "Est-ce que l'évaluation est vraiment gratuite?", a: "Oui, c'est gratuit, confidentiel et sans engagement. Vous recevez un rapport clair — aucune obligation de vendre." },
  { q: "Combien vaut ma maison à Gatineau?", a: "La valeur dépend du quartier, du type de propriété et des ventes récentes. Mon évaluation vous donne une fourchette réaliste basée sur les comparables locaux." },
  { q: "Sur quoi se base l'évaluation?", a: "Je me base sur les ventes récentes dans votre rue et votre secteur, l'état de votre propriété, la taille du terrain et les conditions du marché en Outaouais." },
  { q: "Quelle est la différence avec une évaluation en ligne?", a: "Les outils en ligne donnent une estimation approximative. Mon évaluation tient compte des particularités locales et de l'état réel de votre propriété — c'est beaucoup plus précis." },
  { q: "Combien de temps prend l'évaluation?", a: "Vous recevez une réponse personnalisée en 24 heures. Pour une analyse approfondie avec visite, on planifie un rendez-vous à votre convenance." },
  { q: "Faut-il faire visiter ma maison pour l'évaluation?", a: "Pas nécessairement pour une première estimation. Si vous souhaitez un rapport plus détaillé, une visite peut être planifiée — sans engagement." },
  { q: "L'évaluation m'engage-t-elle à vendre?", a: "Non, absolument pas. Beaucoup de propriétaires demandent une évaluation simplement pour connaître leur valeur, sans intention immédiate de vendre." },
  { q: "Mon secteur est-il couvert?", a: "Oui — je couvre tout l'Outaouais : Aylmer, Hull, Plateau, Chelsea, Cantley, Buckingham, Masson-Angers, Val-des-Monts et Pontiac." },
  { q: "Que faire après avoir reçu mon évaluation?", a: "Vous aurez les chiffres et les options. Si vous voulez aller plus loin, je peux préparer un plan vendeur complet ou répondre à vos questions lors d'un appel." },
];

const afterSteps = [
  { title: "Plan vendeur", text: "Allez plus loin — recevez un plan complet: prix, préparation, mise en marché et calendrier.", href: "/plan-vendeur-gatineau/", cta: "Recevoir mon plan", highlight: true },
  { title: "Parler à Yanis", text: "Discuter de votre situation et vos options — sans engagement.", href: "/contact-yanis/", cta: "Réserver un appel" },
];

const anim = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const ValuationPage = () => {
  return (
    <>
      <SEO
        title="Évaluation gratuite de maison à Gatineau | YGS"
        description="Obtenez une évaluation gratuite de votre propriété à Gatineau. Basée sur les comparables réels de votre secteur. Sans engagement."
        canonical="https://yanisgauthier.com/evaluation-gratuite-gatineau"
        hreflangFr="https://yanisgauthier.com/evaluation-gratuite-gatineau"
        hreflangEn="https://yanisgauthier.com/en/home-valuation"
      />
      <PageMeta title="Évaluation gratuite · Gatineau et Outaouais" description="Obtenez une évaluation gratuite de votre propriété à Gatineau, Aylmer, Hull ou en Outaouais. Analyse basée sur les ventes récentes de votre secteur." ogImage="https://yanisgauthier.com/og/og-eval.jpg" />
    <ServiceJsonLd name="Évaluation immobilière gratuite à Gatineau" description="Service d'évaluation gratuite de propriétés à Gatineau et en Outaouais — analyse basée sur les ventes comparables récentes de votre secteur." url="/evaluation-gratuite-gatineau/" serviceType="Real Estate Appraisal Service" />

      {/* ── FORM-FIRST CONVERSION HERO ── */}
      <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={{ ["--hero-bg-image" as string]: `url(${heroImg})` }}>
        {/* Ambient light layer */}
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
                Combien vaut réellement votre propriété?
              </h1>

              {/* Subtitle - hidden on mobile to save space */}
              <p className="hidden sm:block mt-5 max-w-[28rem] text-[1.0625rem] leading-[1.75] text-primary-foreground/85">
                Recevez une estimation personnalisée et confidentielle — basée sur votre propriété et les ventes comparables récentes dans votre secteur de Gatineau, Aylmer, Hull ou Outaouais.
              </p>
              {/* Shorter mobile subtitle */}
              <p className="sm:hidden mt-3 text-[0.9375rem] leading-[1.6] text-primary-foreground/85">
                Estimation gratuite et confidentielle basée sur les ventes récentes.
              </p>

              {/* Trust bullets - compact on mobile */}
              <div className="mt-4 md:mt-8 space-y-2 md:space-y-3">
                {trustBullets.map((b) => (
                  <div key={b.text} className="flex items-center gap-3 text-[0.8125rem] md:text-[0.875rem] text-primary-foreground/75">
                    <b.icon size={15} className="text-accent shrink-0" />
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>

              {/* Credibility strip */}
              <div className="mt-6 md:mt-10 flex flex-wrap gap-x-7 gap-y-2 text-[0.75rem] text-primary-foreground/55 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-accent/50" /> Hall of Fame RE/MAX</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-accent/50" /> Près de 9 ans en Outaouais</span>
              </div>
            </motion.div>

            {/* ── RIGHT: Form card ── */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              <ValuationForm lang="fr" variant="glass" addressPlaceholder="123 rue Exemple, Gatineau" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Votre évaluation inclut — 2 cols + widget fourchette ── */}
      <section className="bg-background py-16 md:py-20">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <SectionHeading overline="Ce que vous recevez" title="Votre évaluation inclut" />
              <ul className="mt-8 space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-[1rem] text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget fourchette de valeur (statique, illustratif) */}
            <div className="bg-[var(--ink)] text-[var(--cream)] rounded-lg p-6 md:p-8 border border-[var(--gold)]/30 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p
                  className="text-[11px] uppercase tracking-[0.14em] text-[var(--gold)]"
                  style={{ fontFamily: "var(--sans)" }}
                >
                  Aperçu illustratif
                </p>
                <span
                  className="text-[10px] uppercase tracking-[0.14em] px-2 py-0.5 rounded-full border border-[var(--gold)]/40 text-[var(--cream)]/70"
                  style={{ fontFamily: "var(--sans)" }}
                >
                  Exemple
                </span>
              </div>
              <p
                className="mt-2 text-[var(--cream)]/85 text-[0.9375rem]"
                style={{ fontFamily: "var(--sans)" }}
              >
                À quoi ressemble une fourchette de valeur
              </p>

              <div className="relative mt-10 mb-2">
                {/* ligne reliant les 3 dots */}
                <div className="absolute left-[6%] right-[6%] top-[5px] h-px bg-[var(--gold)]/50" aria-hidden="true" />
                <div className="relative grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center text-center">
                    <span className="block w-2 h-2 rounded-full bg-[var(--gold)]/40" aria-hidden="true" />
                    <span className="mt-4 text-[var(--cream)] whitespace-nowrap" style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", lineHeight: 1.1 }}>
                      550 000 $
                    </span>
                    <span className="mt-2 text-[11px] uppercase tracking-[0.12em] text-[var(--cream)]/70" style={{ fontFamily: "var(--sans)" }}>
                      Conservateur
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="block w-3 h-3 rounded-full bg-[var(--gold)] -mt-0.5" aria-hidden="true" />
                    <span className="mt-4 text-[var(--gold)] whitespace-nowrap" style={{ fontFamily: "var(--serif)", fontSize: "1.75rem", lineHeight: 1.1 }}>
                      570 000 $
                    </span>
                    <span className="mt-2 text-[11px] uppercase tracking-[0.12em] text-[var(--cream)]/70" style={{ fontFamily: "var(--sans)" }}>
                      Prix recommandé
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="block w-2 h-2 rounded-full bg-[var(--gold)]/40" aria-hidden="true" />
                    <span className="mt-4 text-[var(--cream)] whitespace-nowrap" style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", lineHeight: 1.1 }}>
                      599 000 $
                    </span>
                    <span className="mt-2 text-[11px] uppercase tracking-[0.12em] text-[var(--cream)]/70" style={{ fontFamily: "var(--sans)" }}>
                      Optimiste
                    </span>
                  </div>
                </div>
              </div>

              <p
                className="mt-8 text-[12px] leading-[1.5] text-[var(--cream)]/60"
                style={{ fontFamily: "var(--sans)" }}
              >
                Exemple illustratif — aucun montant réel. Votre analyse personnalisée sera basée sur les ventes comparables récentes de votre secteur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FunnelNextStep
        overline="Et ensuite?"
        title="Après votre évaluation"
        subtitle="Vous aurez les chiffres. Voici les options pour aller plus loin."
        steps={afterSteps}
        background="alt"
      />

      {SHOW_TESTIMONIAL && (
        <section className="bg-[var(--cream)] py-14 md:py-20">
          <div className="section-container max-w-3xl mx-auto text-center">
            <div className="mx-auto h-px w-10 bg-[var(--gold)] mb-4" aria-hidden="true" />
            <blockquote
              className="text-[var(--ink)] italic"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)", lineHeight: 1.4 }}
            >
              « C'est la 2e fois que je fais appel à ses services et je suis toujours très satisfaite de son service. Yanis est très professionnel et respectueux, très honnête, un être de confiance. »
              <cite
                className="block mt-6 not-italic text-[14px] text-[var(--ink)]/70"
                style={{ fontFamily: "var(--sans)" }}
              >
                — Sylvie, Aylmer, 2026
              </cite>
            </blockquote>
          </div>
        </section>
      )}
      <RelatedPages
        overline="À lire aussi"
        title="Ressources liées"
        pages={[
          { title: "Évaluation maison Hull", text: "Combien vaut votre propriété à Hull?", href: "/evaluation-maison-hull/" },
          { title: "Évaluation maison Aylmer", text: "Combien vaut votre propriété à Aylmer?", href: "/evaluation-maison-aylmer/" },
          { title: "Vendre à Gatineau", text: "Stratégie, prix et accompagnement.", href: "/vendre-ma-maison-gatineau/" },
          { title: "Courtier Chelsea", text: "Nature et marché de Chelsea.", href: "/chelsea/" },
          { title: "Courtier Cantley", text: "Terrains et vie rurale.", href: "/cantley/" },
          { title: "Tous les quartiers", text: "Comparez les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
        ]}
        background="alt"
      />
      <FAQSection title="Questions sur l'évaluation" items={valuationFaq} />
    </>
  );
};

export default ValuationPage;
