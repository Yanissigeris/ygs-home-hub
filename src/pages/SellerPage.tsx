import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { CheckCircle2, AlertTriangle, ArrowRight, Clock, Award, Shield } from "lucide-react";
import { motion } from "framer-motion";
import homeImg from "@/assets/home-interior.jpg";

const painPoints = [
  { text: "Est-ce le bon moment pour vendre?", sub: "Vous ne voulez pas manquer la fenêtre, mais pas non plus vendre sans plan." },
  { text: "Combien vaut vraiment ma propriété?", sub: "Un prix réaliste basé sur les ventes récentes — pas un chiffre gonflé pour vous attirer." },
  { text: "Faut-il faire des travaux avant?", sub: "Certains investissements rapportent. D'autres non. On fait le tri ensemble." },
  { text: "Comment vendre sans me retrouver coincé?", sub: "La coordination vente-achat demande un plan dès le départ." },
];

const fears = [
  { text: "Sous-évaluer", sub: "Laisser des milliers sur la table par manque d'information sur les ventes récentes." },
  { text: "Surévaluer", sub: "Rester sur le marché trop longtemps et finir par baisser le prix sous pression." },
  { text: "Mal préparer", sub: "Subir des négociations stressantes faute de stratégie claire dès le départ." },
];

const steps = [
  { num: "01", title: "Analyse et positionnement", desc: "Ventes comparables, état du marché, particularités de votre propriété. On établit un prix réaliste et stratégique." },
  { num: "02", title: "Plan vendeur personnalisé", desc: "Préparation, améliorations qui valent la peine, plan de visibilité et calendrier de mise en marché." },
  { num: "03", title: "Accompagnement complet", desc: "Mise en marché, visites, négociation, coordination jusqu'au notaire. Aucune surprise." },
];

const credPoints = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Club Platine · Temple de la renommée" },
  { icon: Shield, label: "Zéro pression, zéro surprise" },
];

const faq = [
  { q: "Quand est-ce le meilleur moment pour vendre?", a: "Ça dépend de votre situation, pas seulement du marché. En près de 9 ans en Outaouais, j'ai vu des vendeurs bien réussir dans toutes les conditions — avec le bon plan." },
  { q: "Est-ce que je dois rénover avant de vendre?", a: "Pas nécessairement. Je vous aide à identifier ce qui vaut la peine pour maximiser votre prix sans gaspiller." },
  { q: "Combien coûte un courtier?", a: "La commission est convenue ensemble avant de commencer. Tout est transparent — pas de surprise." },
  { q: "Et si je dois acheter en même temps?", a: "C'est fréquent. On planifie la coordination dès le départ pour éviter d'être coincé." },
];

const SellerPage = () => (
  <>
    <HeroSection
      overline="Pour vendeurs · Gatineau et environs"
      title="Vendre votre propriété à Gatineau avec une vraie stratégie"
      subtitle="Vous n'avez pas besoin de tout décider aujourd'hui. Vous avez surtout besoin d'un plan clair — prix, préparation, mise en marché, négociation."
      primaryCta={{ label: "Recevoir mon plan vendeur", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Stratégie claire. Zéro pression. Pas de mauvaises surprises."
      backgroundImage={homeImg}
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

    {/* Pain points */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-[52rem]">
        <motion.div
          className="text-center mb-12 max-w-[40rem] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            overline="Vos questions"
            title="Vous vous posez probablement ces questions"
            centered
          />
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2">
          {painPoints.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="card-elevated flex items-start gap-4 border border-border/40 bg-card p-7"
            >
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-[1rem] font-semibold text-foreground">{p.text}</p>
                <p className="mt-1.5 text-[0.9375rem] leading-[1.6] text-muted-foreground">{p.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Inline CTA */}
    <section className="cta-band">
      <div className="section-container">
        <p>Commencez par connaître la valeur de votre propriété — c'est gratuit et sans engagement.</p>
        <Button size="default" variant="hero" asChild>
          <Link to="/evaluation-gratuite-gatineau">Obtenir ma valeur →</Link>
        </Button>
      </div>
    </section>

    {/* Fears */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container max-w-[52rem]">
        <motion.div
          className="text-center mb-12 max-w-[40rem] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading title="Ce que les vendeurs veulent éviter" centered />
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-3">
          {fears.map((f, i) => (
            <motion.div
              key={f.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-elevated border border-border/40 bg-card p-7 text-center"
            >
              <AlertTriangle size={20} className="mx-auto text-accent/40 mb-4" />
              <h3 className="text-[1.0625rem] font-semibold">{f.text}</h3>
              <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">{f.sub}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="prose-body mt-10 text-center mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Ces inquiétudes sont normales. Mon rôle est de vous donner les outils et l'information pour les éviter — avant de prendre une décision.
        </motion.p>
      </div>
    </section>

    {/* Reassurance */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-[44rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            overline="Avant de vendre"
            title="Vous n'avez pas besoin de tout décider aujourd'hui"
          />
        </motion.div>
        <p className="prose-body mt-5">
          Avant de vendre, plusieurs propriétaires veulent surtout comprendre leur valeur, leur timing et leurs options. Le but n'est pas de vous presser. Le but est de bâtir un plan clair.
        </p>
        <p className="prose-body mt-4">
          Après près de 9 ans à accompagner des vendeurs en Outaouais, je sais que la clé d'une bonne vente, c'est la préparation. Valeur réelle, positionnement prix, améliorations stratégiques, mise en marché pour attirer les bons acheteurs.
        </p>
        <Button className="mt-8" size="lg" asChild>
          <Link to="/evaluation-gratuite-gatineau">
            Commencer par une évaluation gratuite
            <ArrowRight size={15} className="ml-1" />
          </Link>
        </Button>
      </div>
    </section>

    {/* Steps */}
    <section className="section-padding bg-secondary/20">
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
      title="Vous voulez savoir quoi faire dans votre cas?"
      text="Je vous donne les chiffres, les options et une stratégie adaptée à votre situation."
      buttons={[
        { label: "Recevoir mon plan vendeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Parler à Yanis", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default SellerPage;
