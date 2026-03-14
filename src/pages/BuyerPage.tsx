import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { MapPin, ArrowRight, CheckCircle2, Clock, Award, Shield } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gatineau.jpg";

const buyerProfiles = [
  { title: "Premier acheteur", desc: "Comprendre le processus étape par étape sans se sentir dépassé." },
  { title: "Famille qui veut plus d'espace", desc: "Trouver un quartier familial avec plus de pièces, un terrain et les bons services à proximité." },
  { title: "Relocalisé d'Ottawa ou Montréal", desc: "Un guide local qui connaît vraiment le terrain — secteurs, prix, taxes et particularités du Québec." },
  { title: "Hésitant entre secteurs", desc: "Comparer les quartiers objectivement — prix, potentiel, style de vie — pour trouver le bon fit." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, accès Ottawa" },
  { name: "Hull", href: "/plateau-aylmer", detail: "Urbain, proche centre-ville, condos et plex" },
  { name: "Buckingham / Masson-Angers", href: "/plateau-aylmer", detail: "Terrain, prix accessibles, nature" },
];

const steps = [
  { num: "01", title: "Clarifier votre projet", desc: "Budget, secteurs cibles, style de propriété, besoins familiaux — on pose les bases ensemble." },
  { num: "02", title: "Recherche ciblée", desc: "Je vous envoie les propriétés qui correspondent vraiment. Pas de bruit, pas de perte de temps." },
  { num: "03", title: "Offre et négociation", desc: "Stratégie d'offre, inspection, conditions — jusqu'à la signature chez le notaire." },
];

const credPoints = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Spécialiste des secteurs locaux" },
  { icon: Shield, label: "Accompagnement sans pression" },
];

const faq = [
  { q: "Est-ce le bon moment pour acheter à Gatineau?", a: "Chaque situation est différente. On évalue votre budget, vos priorités et les conditions du marché ensemble." },
  { q: "Je viens d'Ottawa — comment ça fonctionne au Québec?", a: "Promesse d'achat, inspection, notaire — le processus a ses particularités. Après près de 9 ans en Outaouais, j'ai accompagné beaucoup d'acheteurs dans cette transition." },
  { q: "Dois-je avoir une pré-approbation?", a: "Fortement recommandé. Ça clarifie votre budget et renforce votre position lors de l'offre." },
  { q: "Comment choisir le bon secteur?", a: "Mode de vie, budget, famille, trajets quotidiens — on regarde tout ça ensemble pour trouver le meilleur équilibre." },
];

const BuyerPage = () => (
  <>
    <HeroSection
      overline="Pour acheteurs · Gatineau"
      title="Acheter à Gatineau avec clarté et confiance"
      subtitle="Premier acheteur, famille qui grandit ou relocalisé d'Ottawa — je vous guide à chaque étape pour acheter sans stress et sans erreur."
      primaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      secondaryCta={{ label: "Valeur de ma propriété", href: "/evaluation-gratuite-gatineau" }}
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

    {/* Intro */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-[44rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            overline="L'achat immobilier"
            title="Choisir une propriété, c'est aussi choisir un secteur et une stratégie"
            subtitle="Au-delà de la maison, il faut comprendre les secteurs, la valeur réelle, les taxes, le potentiel de revente et la bonne stratégie d'offre."
          />
        </motion.div>
      </div>
    </section>

    {/* Buyer profiles */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container max-w-[52rem]">
        <motion.div
          className="text-center mb-12 max-w-[40rem] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading overline="Pour qui" title="Je peux vous aider si vous êtes…" centered />
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2">
          {buyerProfiles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="card-elevated border border-border/40 bg-card p-7"
            >
              <CheckCircle2 size={18} className="text-accent mb-4" />
              <h3 className="text-[1.0625rem]">{p.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">{p.desc}</p>
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

    {/* Inline valuation CTA */}
    <section className="cta-band">
      <div className="section-container">
        <p>Vous êtes aussi vendeur? Connaître la valeur de votre propriété peut clarifier votre budget d'achat.</p>
        <Button size="default" variant="hero" asChild>
          <Link to="/evaluation-gratuite-gatineau">Obtenir ma valeur →</Link>
        </Button>
      </div>
    </section>

    {/* Sectors */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-[52rem]">
        <motion.div
          className="text-center mb-10 max-w-[40rem] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading overline="Quartiers" title="Secteurs à comparer" centered />
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-3">
          {sectors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={s.href} className="card-elevated group flex flex-col border border-border/40 bg-card px-6 py-6">
                <div className="flex items-center gap-3">
                  <MapPin size={15} className="text-accent shrink-0" />
                  <span className="text-[1rem] font-semibold text-foreground group-hover:text-primary transition-colors">{s.name}</span>
                  <ArrowRight size={14} className="ml-auto text-muted-foreground/20 group-hover:text-primary transition-colors" />
                </div>
                <p className="mt-2 text-[0.875rem] text-muted-foreground/60">{s.detail}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      dark
      overline="Consultation"
      title="Parlons de votre projet d'achat"
      text="Budget, secteurs, stratégie — on clarifie tout ça avant de commencer les visites."
      buttons={[
        { label: "Réserver ma consultation", href: "/contact-yanis" },
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default BuyerPage;
