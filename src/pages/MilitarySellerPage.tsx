import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import InlineCTA from "@/components/InlineCTA";
import { Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-military-seller.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const steps = [
  { num: "01", title: "Évaluation et prix", desc: "Valeur marchande, prix d'affichage et plan de vente adapté à la date de votre mutation." },
  { num: "02", title: "Mise en marché rapide", desc: "Préparation, améliorations appropriées, plan de visibilité et calendrier de mise en marché." },
  { num: "03", title: "Vente et coordination", desc: "Mise en marché, visites, négociation, coordination jusqu'au notaire." },
];


const faq = [
  { q: "Combien de temps faut-il pour vendre lors d'une mutation?", a: "Ça dépend du prix et du type de propriété. Au 2e trimestre 2026, une unifamiliale se vendait en 27 jours en moyenne dans la RMR de Gatineau, et un condo en 40 jours (APCIQ). Il faut ensuite prévoir le délai jusqu'à la signature chez le notaire. On adapte le plan à votre calendrier." },
  { q: "Et si je dois partir avant la vente?", a: "La vente peut se poursuivre après votre départ. On prévoit un plan pour les visites, et vous pouvez signer les documents à distance. Pour l'acte de vente, votre notaire peut vous expliquer l'option de la procuration." },
  { q: "Est-ce que je risque de vendre en dessous de la valeur?", a: "Le risque diminue quand le prix est bien positionné dès le départ. Mon rôle est d'appuyer ce prix sur des ventes comparables récentes, même avec un calendrier serré." },
];

const MilitarySellerPage = () => (
   <>
    <PageMeta title="Vendre lors d'une mutation militaire" description="Vendez votre propriété à Gatineau lors d'une mutation FAC. Échéancier serré et prix appuyé sur des ventes comparables en Outaouais, avec un dossier SIRVA ou BGRS." ogImage="https://yanisgauthier.com/og/og-military.jpg" />
    <ServiceJsonLd name="Vendre lors d'une mutation militaire" description="Vente immobilière spécialisée pour militaires FAC en mutation. Échéancier serré et prix appuyé sur des ventes comparables, avec un dossier SIRVA ou BGRS." url="/vendre-lors-dune-mutation-gatineau/" serviceType="Military Real Estate Seller Service" />
    <HeroSection
      overline="Vendre lors d'une mutation · Gatineau"
      title="Vendre votre propriété lors d'une mutation"
      subtitle="Le temps presse, mais le prix compte. Je vous aide à vendre dans vos délais, avec un prix appuyé sur les chiffres du marché."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis/" }}
      trustLine="Un plan clair, des chiffres vérifiables."
      heroBgImage={heroImg}
    />
<section className="py-8 bg-white border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">Dossiers SIRVA et BGRS acceptés</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" width={200} height={36} className="h-10 w-auto object-contain" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <ProcessSteps steps={steps} />

    <InlineCTA
      text="Première étape : connaître la valeur de votre propriété. C'est gratuit, avec une réponse personnalisée en 24 heures maximum."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau/"
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="Mon approche"
        title="Une vente rapide peut aussi être rentable"
      />
      <p className="prose-body mt-5">
        Avec la bonne préparation et un prix bien positionné, vous n'avez pas à choisir entre la vitesse et le prix. Mon rôle est de protéger votre prix tout en respectant votre échéancier.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/evaluation-gratuite-gatineau/">Commencer par une évaluation</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA
      guideType="seller_guide"
      headline="Guide vendeur gratuit : vendre à Gatineau"
      text="Ce qu'il faut savoir pour vendre à Gatineau : le prix, la préparation de la maison, les visites et la négociation."
      ctaLabel="Recevoir le guide vendeur"
    />

    <CTASection
      dark
      title="Vous avez une mutation qui approche?"
      text="Parlons de votre calendrier et de vos options. Plus on s'y prend tôt, plus on a de marge de manœuvre."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" },
        { label: "Réserver un appel", href: "/contact-yanis/", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="seller_guide" label="Guide vendeur gratuit, recevez-le par courriel" />
  </>
);

export default MilitarySellerPage;
