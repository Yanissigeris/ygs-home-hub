import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import ContentBlock from "@/components/ContentBlock";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import RelatedPages from "@/components/RelatedPages";
import { Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-seller.webp";


const steps = [
  { num: "01", title: "Analyse du marché à Aylmer", desc: "Ventes comparables dans votre quartier d'Aylmer, du Vieux-Aylmer au Plateau. Un prix réaliste, appuyé sur les ventes du secteur." },
  { num: "02", title: "Plan de mise en marché", desc: "La préparation et les photos, puis une visibilité ciblée auprès des acheteurs de Gatineau et d'Ottawa." },
  { num: "03", title: "Jusqu'au notaire", desc: "Je gère les visites et la négociation, puis je coordonne le dossier avec le notaire." },
];

const nextSteps = [
  { title: "Évaluation gratuite à Aylmer", text: "Connaître la valeur de votre propriété à Aylmer, c'est gratuit et sans engagement.", href: "/evaluation-maison-aylmer/", cta: "Obtenir ma valeur", highlight: true },
  { title: "Parler à Yanis", text: "Un appel pour clarifier vos options de vente à Aylmer.", href: "/contact-yanis/", cta: "Réserver un appel" },
];

const faq = [
  { q: "Comment vendre une maison à Aylmer?", a: "On commence par une évaluation basée sur les ventes récentes dans votre secteur d'Aylmer. Ensuite, un plan de mise en marché adapté à votre quartier et à votre type de propriété." },
  { q: "Combien de temps prend la vente d'une maison à Aylmer?", a: "Au 2e trimestre 2026, une unifamiliale s'est vendue en 27 jours en moyenne dans la région métropolitaine de Gatineau, et une copropriété en 40 jours (APCIQ, données Centris). À Aylmer, le délai dépend surtout du prix et de la préparation." },
  { q: "Combien vaut ma maison à Aylmer?", a: "La valeur dépend surtout de votre quartier et des ventes récentes autour de vous. Demandez une évaluation gratuite pour une fourchette de prix réaliste." },
  { q: "Faut-il rénover avant de vendre à Aylmer?", a: "Pas toujours. Certains investissements valent la peine dans le marché d'Aylmer, d'autres non. Je vous conseille selon votre situation." },
  { q: "Quels sont les frais pour vendre à Aylmer?", a: "Commission, notaire, certificat de localisation et parfois des réparations mineures. Tout est clair dès le départ." },
  { q: "Est-ce un bon moment pour vendre à Aylmer?", a: "Le bon moment dépend surtout de votre situation personnelle. Pour situer le marché, le prix médian d'une unifamiliale à Aylmer était de 572 750 $ au 2e trimestre 2026 (APCIQ)." },
  { q: "Pourquoi travailler avec un courtier local à Aylmer?", a: "Un courtier qui connaît Aylmer suit les acheteurs actifs et les ventes de chaque quartier d'Aylmer." },
  { q: "Puis-je vendre ma maison d'Aylmer à un acheteur d'Ottawa?", a: "Oui. Par le pont Champlain, le Vieux-Aylmer est à environ 14 km du centre-ville d'Ottawa, ce qui attire des acheteurs ontariens. Selon votre propriété, ma mise en marché peut aussi les rejoindre." },
  { q: "Comment se passe la coordination vente-achat à Aylmer?", a: "On aligne les dates de vente et d'achat dès le départ, avec les bonnes conditions dans chaque promesse d'achat. Vous évitez d'être coincé entre deux transactions." },
  { q: "Quels quartiers d'Aylmer sont les plus recherchés?", a: "Ça dépend de l'acheteur. Une jeune famille ne cherche pas la même chose qu'un couple qui veut une maison plus petite, et je vous montre quels acheteurs visent votre quartier." },
];

const SellAylmerPage = () => (
  <>
    <PageMeta
      title="Vendre sa maison à Aylmer | Courtier immobilier"
      description="Vendez votre propriété à Aylmer au bon prix. Évaluation gratuite, stratégie locale et accompagnement complet par un courtier qui connaît Aylmer."
    ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd
      name="Vente immobilière à Aylmer"
      description="Service de vente immobilière à Aylmer : évaluation, stratégie de prix, mise en marché et accompagnement complet."
      url="/vendre-maison-aylmer/"
      serviceType="Real Estate Listing Service"
    />

    <HeroSection
      overline="Vendre à Aylmer · Outaouais"
      title="Vendre votre propriété à Aylmer avec un courtier local"
      subtitle="Les familles recherchent Aylmer pour ses quartiers établis. Votre stratégie de vente doit refléter la valeur de votre quartier."
      primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-maison-aylmer/" }}
      secondaryCta={{ label: "Recevoir mon plan vendeur", href: "/plan-vendeur-gatineau/" }}
      trustLine="Stratégie claire · Aylmer et environs"
      heroBgImage={heroImg}
    />
<ContentBlock narrow>
      <SectionHeading overline="Vendre à Aylmer" title="Un plan de vente adapté au marché d'Aylmer" />
      <p className="prose-body mt-5">
        Des quartiers familiaux établis et l'accès à Ottawa par le pont Champlain : c'est ce qui attire les acheteurs à Aylmer. D'un quartier à l'autre, la stratégie de prix et de mise en marché doit suivre votre micro-marché.
      </p>
      <p className="prose-body mt-4">
        J'aide des vendeurs en Outaouais depuis 2017 et je suis de près les ventes et les acheteurs actifs à Aylmer. Mon objectif : un plan clair pour vendre au bon prix, sans surprises.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Première étape : connaître la valeur de votre propriété à Aylmer. C'est gratuit."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-maison-aylmer/"
    />

    <ProcessSteps steps={steps} background="alt" />

    <RelatedPages
      overline="À voir aussi"
      title="Pages connexes"
      pages={[
        { title: "Aylmer : portrait du quartier", text: "Le marché et le profil du secteur.", href: "/aylmer/" },
        { title: "Évaluation maison Aylmer", text: "Combien vaut votre propriété à Aylmer?", href: "/evaluation-maison-aylmer/" },
        { title: "Vendre à Gatineau", text: "Ma démarche de vente à Gatineau, étape par étape.", href: "/vendre-ma-maison-gatineau/" },
        { title: "Courtier immobilier Outaouais", text: "Services dans toute la région.", href: "/courtier-immobilier-outaouais/" },
      ]}
    />

    <FunnelNextStep
      overline="Prochaine étape"
      title="Par où commencer pour vendre à Aylmer?"
      subtitle="Chaque situation est différente. Choisissez l'étape qui vous convient."
      steps={nextSteps}
    />

    <CTASection
      dark
      title="Vous pensez vendre à Aylmer?"
      text="Une évaluation gratuite pour commencer, ou un appel pour faire le point sur votre vente à Aylmer."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-maison-aylmer/" },
        { label: "Parler à Yanis", href: "/contact-yanis/", variant: "outline" },
      ]}
      trustLine="Gratuit et sans engagement."
    />

    <FAQSection items={faq} />
  </>
);

export default SellAylmerPage;
