import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import { CheckCircle2, Building2, TrendingUp, ArrowRight, Clock, Award, Shield } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gatineau.jpg";

const clientTypes = [
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
];

const questions = [
  { icon: CheckCircle2, title: "Est-ce que je garde ou je vends?", text: "Rendement actuel, conditions du marché et stratégie à long terme." },
  { icon: CheckCircle2, title: "Le prix demandé a-t-il du sens?", text: "Revenus réels, dépenses réelles, potentiel locatif — pas juste le prix affiché." },
  { icon: CheckCircle2, title: "Quel est le vrai rendement?", text: "Dépenses, vacance, travaux à prévoir, potentiel de croissance." },
  { icon: CheckCircle2, title: "Quels risques surveiller?", text: "Toiture, plomberie, électricité, fondation — certains coûts changent la donne." },
  { icon: CheckCircle2, title: "Comment maximiser le prix de vente?", text: "Positionnement prix et mise en marché font la différence sur un plex." },
];

const steps = [
  { num: "01", title: "Analyse des chiffres", desc: "Revenus, dépenses, valeur marchande et potentiel locatif — on part des faits." },
  { num: "02", title: "Recommandation stratégique", desc: "Garder, vendre, refinancer ou acheter — la meilleure option pour votre situation." },
  { num: "03", title: "Exécution et accompagnement", desc: "De la décision à la transaction, un accompagnement complet et transparent." },
];

const trustItems = [
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

    <TrustMiniStrip items={trustItems} />

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
          <p className="label-overline mb-3">Pour qui</p>
          <h2>J'aide deux types de clients</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2">
          {clientTypes.map((card, i) => (
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
                <p className="mt-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">{card.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-primary">
                  {card.cta} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <InlineCTA
      text="Vous possédez un plex? Commencez par connaître sa valeur actuelle."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <CardGrid
      overline="Analyse"
      title="Les vraies questions derrière un plex"
      items={questions}
      variant="icon-inline"
      background="alt"
    />

    <ProcessSteps steps={steps} />

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
