import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { CheckCircle2 } from "lucide-react";

const painPoints = [
  "Est-ce le bon moment pour vendre?",
  "Combien vaut vraiment ma propriété aujourd'hui?",
  "Est-ce que je dois faire des travaux avant de mettre en marché?",
  "Comment vendre sans me retrouver coincé pour mon prochain achat?",
];

const steps = [
  { num: "01", title: "Analyse de votre propriété et de votre secteur" },
  { num: "02", title: "Plan vendeur personnalisé: prix, préparation, stratégie" },
  { num: "03", title: "Lancement, visites, négociation et accompagnement jusqu'à la signature" },
];

const stats = [
  { label: "Prix médian résidentiel", value: "[À compléter]" },
  { label: "Jours moyens sur le marché", value: "[À compléter]" },
  { label: "Ratio prix vendu / demandé", value: "[À compléter]" },
];

const faq = [
  { q: "Quand est-ce le meilleur moment pour vendre?", a: "Ça dépend de votre situation personnelle, du marché local et de vos objectifs. On peut en discuter lors d'une consultation sans engagement." },
  { q: "Est-ce que je dois rénover avant de vendre?", a: "Pas nécessairement. Certains travaux apportent un retour, d'autres non. Je vous aide à identifier ce qui vaut la peine." },
  { q: "Combien coûte un courtier?", a: "La commission est convenue entre nous avant de commencer. Je vous explique tout de façon transparente dès le départ." },
];

const SellerPage = () => (
  <>
    <HeroSection
      title="Vendre votre propriété à Gatineau avec une vraie stratégie"
      subtitle="Prix, préparation, mise en marché, négociation: chaque détail compte quand vient le temps de vendre au bon prix."
      primaryCta={{ label: "Recevoir mon plan vendeur", href: "/evaluation-gratuite-gatineau" }}
    />

    {/* Pain points */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading title="Vous vous posez probablement ces questions" />
        <div className="mt-8 space-y-4">
          {painPoints.map((p) => (
            <div key={p} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Approach */}
    <section className="section-padding bg-secondary">
      <div className="section-container max-w-3xl">
        <SectionHeading
          title="Mon rôle: vous simplifier la décision"
          subtitle="Je vous aide à voir clair sur la valeur de votre propriété, le positionnement prix, les améliorations qui valent la peine, et le plan de mise en marché pour attirer les bons acheteurs."
        />
      </div>
    </section>

    {/* Steps */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading title="Comment ça fonctionne" centered />
        <div className="mt-10 space-y-6">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-5 items-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg text-primary-foreground">
                {s.num}
              </span>
              <div className="pt-2">
                <p className="text-lg font-medium text-foreground">{s.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Market snapshot */}
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <SectionHeading title="Ce que le marché nous dit en ce moment" centered />
        <p className="mt-1 text-center text-sm text-muted-foreground">[Données à mettre à jour régulièrement]</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-card p-6 text-center">
              <p className="font-heading text-2xl text-primary">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      title="Vous voulez savoir quoi faire dans votre cas?"
      text="Demandez votre plan vendeur. Zéro pression — je vous donne les chiffres et les options, vous décidez."
      buttons={[{ label: "Demander mon plan vendeur", href: "/evaluation-gratuite-gatineau" }]}
    />

    <FAQSection items={faq} />
  </>
);

export default SellerPage;
