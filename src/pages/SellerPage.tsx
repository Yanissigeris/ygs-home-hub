import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const painPoints = [
  { text: "Est-ce le bon moment pour vendre?", sub: "Vous ne voulez pas vendre trop tôt et perdre de la valeur, ni attendre trop longtemps." },
  { text: "Combien vaut vraiment ma propriété aujourd'hui?", sub: "Vous voulez un chiffre réaliste, pas un prix gonflé pour vous attirer." },
  { text: "Est-ce que je dois faire des travaux avant?", sub: "Certaines rénovations rapportent, d'autres non. C'est important de bien choisir." },
  { text: "Comment vendre sans me retrouver coincé pour mon prochain achat?", sub: "La coordination entre la vente et le prochain achat demande un plan clair." },
];

const fears = [
  { icon: AlertTriangle, text: "Sous-évaluer et perdre des milliers de dollars" },
  { icon: AlertTriangle, text: "Surévaluer et rester sur le marché trop longtemps" },
  { icon: AlertTriangle, text: "Être mal préparé et subir des négociations stressantes" },
];

const steps = [
  { num: "01", title: "Analyse de votre propriété et de votre secteur", desc: "On regarde les ventes comparables, l'état du marché et les particularités de votre propriété." },
  { num: "02", title: "Plan vendeur personnalisé", desc: "Prix de mise en marché, préparation, améliorations stratégiques et plan de visibilité." },
  { num: "03", title: "Accompagnement complet", desc: "Lancement, visites, négociation et suivi jusqu'à la signature chez le notaire." },
];

const stats = [
  { label: "Prix médian résidentiel", value: "[À compléter]" },
  { label: "Jours moyens sur le marché", value: "[À compléter]" },
  { label: "Ratio prix vendu / demandé", value: "[À compléter]" },
];

const faq = [
  { q: "Quand est-ce le meilleur moment pour vendre?", a: "Ça dépend de votre situation personnelle, du marché local et de vos objectifs. Lors d'une consultation, on évalue tout ça ensemble pour prendre une décision éclairée." },
  { q: "Est-ce que je dois rénover avant de vendre?", a: "Pas nécessairement. Certaines améliorations ont un vrai retour sur investissement, d'autres non. Je vous aide à identifier ce qui vaut la peine, sans gaspiller votre temps ou votre argent." },
  { q: "Combien coûte un courtier?", a: "La commission est convenue ensemble avant de commencer. Je vous explique tout de façon transparente dès le départ — pas de surprise." },
  { q: "Combien de temps ça prend pour vendre à Gatineau?", a: "Ça varie selon le secteur, le type de propriété et le prix. On en discute lors de l'analyse initiale." },
];

const SellerPage = () => (
  <>
    <HeroSection
      overline="Pour vendeurs · Gatineau et environs"
      title="Vendre votre propriété à Gatineau avec une vraie stratégie"
      subtitle="Prix, préparation, mise en marché, négociation: chaque détail compte quand vient le temps de vendre au bon prix."
      primaryCta={{ label: "Recevoir mon plan vendeur", href: "/evaluation-gratuite-gatineau" }}
      trustLine="Stratégie claire. Zéro pression. Pas de mauvaises surprises."
    />

    {/* Pain points */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading
          overline="Vos questions"
          title="Vous vous posez probablement ces questions"
        />
        <div className="mt-10 space-y-4">
          {painPoints.map((p) => (
            <div key={p.text} className="card-elevated flex items-start gap-4 rounded-lg border border-border bg-card p-6">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="font-medium text-foreground">{p.text}</p>
                <p className="mt-1 text-[0.8125rem] text-muted-foreground">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* What sellers fear */}
    <section className="section-padding bg-secondary/40">
      <div className="section-container max-w-3xl">
        <SectionHeading
          title="Ce que les vendeurs veulent éviter"
          subtitle="Ces inquiétudes sont normales. Mon rôle est de vous donner les outils et l'information pour les éviter."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {fears.map((f, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5 text-center">
              <f.icon size={20} className="mx-auto text-accent/70" />
              <p className="mt-3 text-[0.8125rem] font-medium text-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Approach */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading
          overline="Mon approche"
          title="Mon rôle: vous simplifier la décision"
          subtitle="Je vous aide à voir clair sur la valeur de votre propriété, le positionnement prix, les améliorations qui valent la peine, et le plan de mise en marché pour attirer les bons acheteurs."
        />
      </div>
    </section>

    {/* Steps */}
    <section className="section-padding bg-secondary/40">
      <div className="section-container max-w-3xl">
        <SectionHeading overline="Le processus" title="Comment ça fonctionne" centered />
        <div className="mt-12 space-y-8">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-6 items-start">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg text-primary-foreground">
                {s.num}
              </span>
              <div className="pt-1">
                <h3>{s.title}</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Market snapshot */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading overline="Marché local" title="Ce que le marché nous dit en ce moment" centered />
        <p className="mt-1 text-center text-[0.6875rem] text-muted-foreground/50">[Données à mettre à jour régulièrement]</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-card p-7 text-center">
              <p className="font-heading text-[1.75rem] text-primary">{s.value}</p>
              <p className="mt-2 text-[0.8125rem] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      overline="Prochaine étape"
      title="Vous voulez savoir quoi faire dans votre cas?"
      text="Demandez votre plan vendeur. Zéro pression — je vous donne les chiffres et les options, vous décidez."
      buttons={[{ label: "Demander mon plan vendeur", href: "/evaluation-gratuite-gatineau" }]}
    />

    <FAQSection items={faq} />
  </>
);

export default SellerPage;
