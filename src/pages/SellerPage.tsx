import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import homeImg from "@/assets/home-interior.jpg";

const painPoints = [
  { text: "Est-ce le bon moment pour vendre?", sub: "Vous ne voulez pas manquer la fenêtre, mais pas non plus vendre sans plan." },
  { text: "Combien vaut vraiment ma propriété?", sub: "Un prix réaliste basé sur les ventes récentes — pas un chiffre gonflé pour vous attirer." },
  { text: "Faut-il faire des travaux avant?", sub: "Certains investissements rapportent. D'autres non. On fait le tri ensemble." },
  { text: "Comment vendre sans me retrouver coincé?", sub: "La coordination vente-achat demande un plan dès le départ." },
];

const steps = [
  { num: "01", title: "Analyse et positionnement", desc: "Ventes comparables, état du marché, particularités de votre propriété. On établit un prix réaliste et stratégique." },
  { num: "02", title: "Plan vendeur personnalisé", desc: "Préparation, améliorations qui valent la peine, plan de visibilité et calendrier de mise en marché." },
  { num: "03", title: "Accompagnement complet", desc: "Mise en marché, visites, négociation, coordination jusqu'au notaire. Aucune surprise." },
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
      trustLine="Stratégie claire. Zéro pression. Pas de mauvaises surprises."
    />

    {/* Pain points */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-2xl">
        <SectionHeading
          overline="Vos questions"
          title="Vous vous posez probablement ces questions"
        />
        <div className="mt-6 space-y-2.5">
          {painPoints.map((p) => (
            <div key={p.text} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-[0.8125rem] font-semibold text-foreground">{p.text}</p>
                <p className="mt-0.5 text-[0.75rem] text-muted-foreground">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Inline CTA */}
    <section className="cta-band">
      <div className="section-container">
        <p>Commencez par connaître la valeur de votre propriété — c'est gratuit et sans engagement.</p>
        <Button size="sm" variant="hero" asChild>
          <Link to="/evaluation-gratuite-gatineau">Obtenir ma valeur →</Link>
        </Button>
      </div>
    </section>

    {/* Fears + reassurance merged */}
    <section className="section-padding bg-secondary/40">
      <div className="section-container max-w-2xl">
        <SectionHeading title="Ce que les vendeurs veulent éviter" />
        <div className="mt-5 space-y-1.5">
          {[
            "Sous-évaluer et laisser des milliers sur la table",
            "Surévaluer et rester sur le marché trop longtemps",
            "Mal préparer et subir des négociations stressantes",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2.5">
              <AlertTriangle size={13} className="shrink-0 text-accent/50" />
              <p className="text-[0.8125rem] text-foreground">{f}</p>
            </div>
          ))}
        </div>
        <p className="prose-body mt-4">
          Ces inquiétudes sont normales. Mon rôle est de vous donner les outils et l'information pour les éviter — avant de prendre une décision.
        </p>
      </div>
    </section>

    {/* Reassurance */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-2xl">
        <SectionHeading
          overline="Avant de vendre"
          title="Vous n'avez pas besoin de tout décider aujourd'hui"
        />
        <p className="prose-body mt-3">
          Avant de vendre, plusieurs propriétaires veulent surtout comprendre leur valeur, leur timing et leurs options. Le but n'est pas de vous presser. Le but est de bâtir un plan clair.
        </p>
        <p className="prose-body mt-2.5">
          Après près de 9 ans à accompagner des vendeurs en Outaouais, je sais que la clé d'une bonne vente, c'est la préparation. Valeur réelle, positionnement prix, améliorations stratégiques, mise en marché pour attirer les bons acheteurs.
        </p>
      </div>
    </section>

    {/* Steps */}
    <section className="section-padding bg-secondary/40">
      <div className="section-container max-w-2xl">
        <SectionHeading overline="Le processus" title="Comment ça fonctionne" />
        <div className="mt-7 space-y-5">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-3.5 items-start">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-[0.8125rem] text-primary-foreground">
                {s.num}
              </span>
              <div>
                <h3 className="text-[0.9375rem]">{s.title}</h3>
                <p className="mt-0.5 text-[0.8125rem] text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      dark
      overline="Prochaine étape"
      title="Vous voulez savoir quoi faire dans votre cas?"
      text="Je vous donne les chiffres, les options et une stratégie adaptée à votre situation."
      buttons={[{ label: "Recevoir mon plan vendeur", href: "/evaluation-gratuite-gatineau" }]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default SellerPage;
