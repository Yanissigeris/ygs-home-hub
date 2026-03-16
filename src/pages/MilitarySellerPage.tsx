import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import InlineCTA from "@/components/InlineCTA";
import { Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-military-seller.jpg";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.png";

const steps = [
  { num: "01", title: "Évaluation stratégique", desc: "Valeur marchande, positionnement prix et plan pour maximiser votre retour malgré le calendrier serré." },
  { num: "02", title: "Mise en marché rapide", desc: "Préparation accélérée, photos professionnelles et stratégie de visibilité ciblée." },
  { num: "03", title: "Vente et coordination", desc: "Négociation, coordination avec votre achat et accompagnement jusqu'au notaire." },
];

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Expérience en vente sous mutation" },
  { icon: Shield, label: "Processus accéléré · Zéro pression" },
];

const faq = [
  { q: "Combien de temps faut-il pour vendre lors d'une mutation?", a: "Ça dépend du marché et du prix, mais avec une bonne stratégie, on peut souvent conclure en quelques semaines. On adapte le plan à votre calendrier." },
  { q: "Et si je dois partir avant la vente?", a: "C'est gérable. On met en place un plan pour gérer les visites et la transaction à distance." },
  { q: "Est-ce que je risque de vendre en dessous de la valeur?", a: "Non, si le positionnement prix est bien fait dès le départ. C'est exactement mon rôle — maximiser votre prix même avec un calendrier serré." },
];

const MilitarySellerPage = () => (
   <>
    <PageMeta title="Vendre lors d'une mutation militaire" description="Vendez votre propriété à Gatineau lors d'une mutation FAC. Timing, processus BGRS/SIRVA et stratégie pour maximiser votre prix." />
    <HeroSection
      overline="Vendre lors d'une mutation · Gatineau"
      title="Vendre votre propriété lors d'une mutation"
      subtitle="Le temps presse, mais le prix compte. Je vous aide à vendre efficacement, sans sacrifier la valeur de votre propriété."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Stratégie claire. Vente rapide. Zéro pression."
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <section className="py-8 bg-white border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">Partenaire des programmes</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" className="h-10 w-auto object-contain" />
        </div>
      </div>
    </section>

    <ProcessSteps steps={steps} />

    <InlineCTA
      text="Première étape: connaître la valeur de votre propriété — c'est gratuit et rapide."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="Mon approche"
        title="Vendre vite ne veut pas dire vendre mal"
      />
      <p className="prose-body mt-5">
        Avec la bonne préparation et le bon positionnement prix, une vente rapide peut aussi être une vente rentable. Mon rôle est de protéger votre prix tout en respectant votre échéancier.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/evaluation-gratuite-gatineau">Commencer par une évaluation</Link>
      </Button>
    </ContentBlock>

    <CTASection
      dark
      title="Vous avez une mutation qui approche?"
      text="Parlons de votre calendrier et de vos options — plus on s'y prend tôt, plus on a de levier."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver un appel", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default MilitarySellerPage;
