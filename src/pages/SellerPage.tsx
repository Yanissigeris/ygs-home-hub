import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import ContentBlock from "@/components/ContentBlock";
import { CheckCircle2, AlertTriangle, ArrowRight, Clock, Award, Shield } from "lucide-react";
import homeImg from "@/assets/home-interior.jpg";

const painPoints = [
  { icon: CheckCircle2, title: "Est-ce le bon moment pour vendre?", text: "Vous ne voulez pas manquer la fenêtre, mais pas non plus vendre sans plan." },
  { icon: CheckCircle2, title: "Combien vaut vraiment ma propriété?", text: "Un prix réaliste basé sur les ventes récentes — pas un chiffre gonflé pour vous attirer." },
  { icon: CheckCircle2, title: "Faut-il faire des travaux avant?", text: "Certains investissements rapportent. D'autres non. On fait le tri ensemble." },
  { icon: CheckCircle2, title: "Comment vendre sans me retrouver coincé?", text: "La coordination vente-achat demande un plan dès le départ." },
];

const fears = [
  { icon: AlertTriangle, title: "Sous-évaluer", text: "Laisser des milliers sur la table par manque d'information sur les ventes récentes." },
  { icon: AlertTriangle, title: "Surévaluer", text: "Rester sur le marché trop longtemps et finir par baisser le prix sous pression." },
  { icon: AlertTriangle, title: "Mal préparer", text: "Subir des négociations stressantes faute de stratégie claire dès le départ." },
];

const steps = [
  { num: "01", title: "Analyse et positionnement", desc: "Ventes comparables, état du marché, particularités de votre propriété. On établit un prix réaliste et stratégique." },
  { num: "02", title: "Plan vendeur personnalisé", desc: "Préparation, améliorations qui valent la peine, plan de visibilité et calendrier de mise en marché." },
  { num: "03", title: "Accompagnement complet", desc: "Mise en marché, visites, négociation, coordination jusqu'au notaire. Aucune surprise." },
];

const trustItems = [
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
      primaryCta={{ label: "Recevoir mon plan vendeur", href: "/plan-vendeur-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Stratégie claire. Zéro pression. Pas de mauvaises surprises."
      backgroundImage={homeImg}
    />

    <TrustMiniStrip items={trustItems} />

    <CardGrid
      overline="Vos questions"
      title="Vous vous posez probablement ces questions"
      items={painPoints}
      variant="icon-inline"
    />

    <InlineCTA
      text="Commencez par connaître la valeur de votre propriété — c'est gratuit et sans engagement."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <CardGrid
      title="Ce que les vendeurs veulent éviter"
      items={fears}
      columns={3}
      background="alt"
      variant="icon-top"
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="Avant de vendre"
        title="Vous n'avez pas besoin de tout décider aujourd'hui"
      />
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
    </ContentBlock>

    <ProcessSteps steps={steps} background="alt" />

    <CTASection
      dark
      overline="Prochaine étape"
      title="Vous voulez savoir quoi faire dans votre cas?"
      text="Je vous donne les chiffres, les options et une stratégie adaptée à votre situation."
      buttons={[
        { label: "Recevoir mon plan vendeur", href: "/plan-vendeur-gatineau" },
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default SellerPage;
