import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { CheckCircle2, Building2, TrendingUp, ArrowRight, Clock, Award, Shield } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gatineau.jpg";

const questions = [
  { text: "Est-ce que je garde ou je vends?", sub: "Rendement actuel, conditions du marché et stratégie à long terme." },
  { text: "Le prix demandé a-t-il du sens?", sub: "Revenus réels, dépenses réelles, potentiel locatif — pas juste le prix affiché." },
  { text: "Quel est le vrai rendement?", sub: "Dépenses, vacance, travaux à prévoir, potentiel de croissance." },
  { text: "Quels risques surveiller?", sub: "Toiture, plomberie, électricité, fondation — certains coûts changent la donne." },
  { text: "Comment maximiser le prix de vente?", sub: "Positionnement prix et mise en marché font la différence sur un plex." },
];

const steps = [
  { num: "01", title: "Analyse des chiffres", desc: "Revenus, dépenses, valeur marchande et potentiel locatif — on part des faits." },
  { num: "02", title: "Recommandation stratégique", desc: "Garder, vendre, refinancer ou acheter — la meilleure option pour votre situation." },
  { num: "03", title: "Exécution et accompagnement", desc: "De la décision à la transaction, un accompagnement complet et transparent." },
];

const credPoints = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Spécialiste plex et multilogements" },
  { icon: Shield, label: "Analyse basée sur les vrais chiffres" },
];

const faq = [
  { q: "Comment évaluer la valeur d'un plex?", a: "Revenus, état de l'immeuble, potentiel locatif et secteur. Après près de 9 ans en Outaouais, je connais bien les particularités des plex locaux." },
  { q: "Est-ce encore rentable d'acheter un plex?", a: "Ça dépend du prix, des revenus et de votre stratégie. On peut analyser ça ensemble." },
  { q: "Comment vendre un plex occupé?", a: "C'est faisable — coordination locataires, visites, documentation. Je vous accompagne à chaque étape." },
  { q: "Refinancer ou vendre?", a: "On compare les deux scénarios ensemble pour voir ce qui fait plus de sens dans votre situation." },
];

const PlexPage = () => (
  <>
    <HeroSection
      overline="Plex et investissement · Gatineau"
      title="Plex à Gatineau: acheter, vendre ou analyser"
      subtitle="Il faut regarder au-delà du prix affiché. Revenus, dépenses, état de l'immeuble, potentiel — chaque facteur compte dans la décision."
      primaryCta={{ label: "Recevoir une analyse plex", href: "/contact-yanis" }}
      secondaryCta={{ label: "Valeur de mon plex", href: "/evaluation-gratuite-gatineau" }}
      trustLine="Stratégie claire. Zéro pression. Pas de mauvaises surprises."
      backgroundImage={heroImg}
    />

    {/* Credibility mini-strip */}
    <section className="border-b border-border/30 bg-secondary/30">
      <div className="section-container py-5 sm:py-6">
        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {credPoints.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 text-[0.875rem] font-medium text-muted-foreground/60">
              <item.icon size={14} className="text-accent shrink-0" />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Client types */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-[52rem]">
        <motion.div
          className="text-center mb-12 max-w-[40rem] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading overline="Pour qui" title="J'aide deux types de clients" centered />
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: Building2,
              title: "Propriétaires de plex",
              text: "Vendre, refinancer ou conserver? On analyse votre situation avec des chiffres réels — pas des suppositions.",
              cta: "Évaluer mon plex",
              href: "/evaluation-gratuite-gatineau",
            },
            {
              icon: TrendingUp,
              title: "Acheteurs investisseurs",
              text: "Valeur réelle, potentiel locatif, risques et stratégie d'achat — les chiffres avant la décision.",
              cta: "Parler stratégie",
              href: "/contact-yanis",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={card.href} className="card-elevated group block border border-border/40 bg-card p-7 sm:p-8 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/[0.06] text-primary mb-5">
                  <card.icon size={24} />
                </div>
                <h3 className="text-[1.125rem]">{card.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">
                  {card.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-primary">
                  {card.cta} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Inline valuation CTA */}
    <section className="cta-band">
      <div className="section-container">
        <p>Vous possédez un plex? Commencez par connaître sa valeur actuelle.</p>
        <Button size="default" variant="hero" asChild>
          <Link to="/evaluation-gratuite-gatineau">Obtenir ma valeur →</Link>
        </Button>
      </div>
    </section>

    {/* Questions */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container max-w-[52rem]">
        <motion.div
          className="text-center mb-12 max-w-[40rem] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading overline="Analyse" title="Les vraies questions derrière un plex" centered />
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2">
          {questions.map((q, i) => (
            <motion.div
              key={q.text}
              className="card-elevated flex items-start gap-4 border border-border/40 bg-card p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-[1rem] font-medium text-foreground">{q.text}</p>
                <p className="mt-1.5 text-[0.9375rem] leading-[1.6] text-muted-foreground">{q.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          className="text-center mb-12 max-w-[40rem] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading overline="Le processus" title="Comment ça fonctionne" centered />
        </motion.div>
        <div className="grid gap-6 sm:gap-7 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card-elevated border border-border/40 bg-card p-7 sm:p-8 h-full">
                <span className="text-[2rem] font-heading font-bold text-accent/20 leading-none">
                  {s.num}
                </span>
                <h3 className="mt-4 text-[1.125rem]">{s.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      dark
      overline="Prochaine étape"
      title="Recevez une lecture claire de votre situation"
      text="Vendre, acheter ou simplement comprendre votre position — je vous aide à y voir plus clair."
      buttons={[
        { label: "Demander une analyse plex", href: "/contact-yanis" },
        { label: "Évaluer mon plex", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default PlexPage;
