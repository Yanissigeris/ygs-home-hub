import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gatineau.jpg";

const buyerProfiles = [
  { title: "Premier acheteur", desc: "Comprendre le processus étape par étape sans se sentir dépassé." },
  { title: "Famille qui veut plus d'espace", desc: "Trouver un quartier familial avec plus de pièces, un terrain et les bons services à proximité." },
  { title: "Relocalisé d'Ottawa ou Montréal", desc: "Un guide local qui connaît vraiment le terrain — secteurs, prix, taxes et particularités du Québec." },
  { title: "Hésitant entre secteurs", desc: "Comparer les quartiers objectivement — prix, potentiel, style de vie — pour trouver le bon fit." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer" },
  { name: "Hull", href: "/plateau-aylmer" },
  { name: "Buckingham / Masson-Angers", href: "/plateau-aylmer" },
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
      trustLine="Stratégie claire. Zéro pression. Pas de mauvaises surprises."
      backgroundImage={heroImg}
    />

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
            title="Choisir une propriété, c'est aussi choisir un secteur, un style de vie et une stratégie"
            subtitle="Au-delà de la maison, il faut comprendre les secteurs, la valeur réelle, les taxes, le potentiel de revente et la bonne stratégie d'offre."
          />
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-secondary/25">
      <div className="section-container max-w-[52rem]">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading overline="Pour qui" title="Je peux vous aider si vous êtes…" />
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
              <h3 className="text-[1.125rem]">{p.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">{p.desc}</p>
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

    <section className="section-padding bg-background">
      <div className="section-container max-w-[48rem]">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading overline="Quartiers" title="Secteurs à comparer" />
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
              <Link to={s.href} className="card-elevated group flex items-center gap-3.5 border border-border/40 bg-card px-6 py-5">
                <MapPin size={15} className="text-accent shrink-0" />
                <span className="text-[1rem] font-medium text-foreground group-hover:text-primary transition-colors">{s.name}</span>
                <ArrowRight size={14} className="ml-auto text-muted-foreground/20 group-hover:text-primary transition-colors" />
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
      buttons={[{ label: "Réserver ma consultation", href: "/contact-yanis" }]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default BuyerPage;
