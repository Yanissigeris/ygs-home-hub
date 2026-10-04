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
  { num: "01", title: "Analyse du marché à Hull", desc: "Ventes comparables récentes dans votre rue et votre secteur de Hull, pour le même type de propriété que la vôtre. On établit un prix réaliste." },
  { num: "02", title: "Plan de mise en marché", desc: "Une préparation ciblée et des photos professionnelles, puis une visibilité pensée pour les acheteurs de Gatineau et d'Ottawa." },
  { num: "03", title: "Jusqu'au notaire", desc: "Je gère les visites et la négociation, puis je coordonne le dossier avec le notaire." },
];

const nextSteps = [
  { title: "Évaluation gratuite à Hull", text: "Connaître la valeur de votre propriété à Hull, c'est gratuit et sans engagement.", href: "/evaluation-maison-hull/", cta: "Obtenir ma valeur", highlight: true },
  { title: "Parler à Yanis", text: "Un appel pour clarifier vos options de vente à Hull.", href: "/contact-yanis/", cta: "Réserver un appel" },
];

const faq = [
  { q: "Comment vendre une maison à Hull?", a: "On commence par une évaluation basée sur les ventes récentes dans votre secteur de Hull. Ensuite, on bâtit un plan de mise en marché adapté à votre type de propriété (condo, plex ou unifamiliale)." },
  { q: "Combien de temps prend la vente d'une maison à Hull?", a: "Au 2e trimestre 2026, une unifamiliale s'est vendue en 27 jours en moyenne dans la région métropolitaine de Gatineau, et une copropriété en 40 jours (APCIQ, données Centris). À Hull, le délai dépend surtout du prix et de la préparation." },
  { q: "Combien vaut ma maison à Hull?", a: "La valeur dépend de votre rue, du type de propriété et des ventes récentes. Demandez une évaluation gratuite pour connaître votre fourchette de prix." },
  { q: "Faut-il rénover avant de vendre à Hull?", a: "Pas nécessairement. Certaines améliorations valent la peine dans le marché de Hull, d'autres non. Je vous conseille au cas par cas." },
  { q: "Quels sont les frais pour vendre à Hull?", a: "Commission courtier, notaire, certificat de localisation et parfois des réparations mineures. Tout est transparent dès le départ." },
  { q: "Est-ce un bon moment pour vendre à Hull?", a: "Le bon moment dépend surtout de votre situation personnelle. Pour situer le marché, le prix médian d'une unifamiliale à Hull était de 514 500 $ au 2e trimestre 2026 (APCIQ)." },
  { q: "Pourquoi travailler avec un courtier local à Hull?", a: "Un courtier qui connaît Hull suit les ventes comparables et les acheteurs actifs, des condos du centre-ville aux quartiers résidentiels." },
  { q: "Puis-je vendre à un acheteur d'Ottawa?", a: "Oui. Ottawa est juste en face de Hull et, selon votre propriété, ma mise en marché peut aussi rejoindre les acheteurs ontariens." },
  { q: "Comment se passe la coordination vente-achat?", a: "On aligne les dates de vente et d'achat dès le départ, avec les bonnes conditions dans chaque promesse d'achat. Vous évitez d'être coincé entre deux transactions." },
  { q: "Quelle est la différence entre vendre un condo et une maison à Hull?", a: "Les stratégies de prix et de mise en marché diffèrent. Un condo demande une attention particulière aux frais de copropriété et à la concurrence dans l'immeuble." },
];

const SellHullPage = () => (
  <>
    <PageMeta
      title="Vendre sa maison à Hull | Courtier immobilier"
      description="Vendez votre propriété à Hull au bon prix. Évaluation gratuite, stratégie de mise en marché locale et accompagnement complet par un courtier qui connaît Hull."
    ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd
      name="Vente immobilière à Hull"
      description="Service de vente immobilière à Hull : évaluation, stratégie de prix, mise en marché et accompagnement complet."
      url="/vendre-maison-hull/"
      serviceType="Real Estate Listing Service"
    />

    <HeroSection
      overline="Vendre à Hull · Outaouais"
      title="Vendre votre propriété à Hull avec un courtier local"
      subtitle="À Hull, un condo ne se vend pas comme un plex ou une maison unifamiliale. Il vous faut un plan adapté à votre type de propriété et à votre quartier."
      primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-maison-hull/" }}
      secondaryCta={{ label: "Recevoir mon plan vendeur", href: "/plan-vendeur-gatineau/" }}
      trustLine="Stratégie claire · Hull et environs"
      heroBgImage={heroImg}
    />
<ContentBlock narrow>
      <SectionHeading overline="Vendre à Hull" title="Un plan de vente adapté au marché de Hull" />
      <p className="prose-body mt-5">
        Hull se distingue en Outaouais : Ottawa juste en face, un marché actif pour les condos et les plex, des quartiers résidentiels établis et un centre-ville en transformation. Pour un condo près du boulevard Saint-Joseph, un plex dans le Vieux-Hull ou une maison dans un quartier familial, la stratégie doit suivre votre micro-marché.
      </p>
      <p className="prose-body mt-4">
        J'aide des vendeurs en Outaouais depuis 2017 et je suis de près les ventes et les acheteurs actifs de chaque micro-marché à Hull. Mon objectif : vous donner un plan clair pour vendre au bon prix, sans surprises.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Première étape : connaître la valeur de votre propriété à Hull. C'est gratuit."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-maison-hull/"
    />

    <ProcessSteps steps={steps} background="alt" />

    <RelatedPages
      overline="À voir aussi"
      title="Pages connexes"
      pages={[
        { title: "Hull : portrait du quartier", text: "Le marché et le profil du secteur.", href: "/hull/" },
        { title: "Évaluation maison Hull", text: "Combien vaut votre propriété à Hull?", href: "/evaluation-maison-hull/" },
        { title: "Vendre à Gatineau", text: "Ma démarche de vente à Gatineau, étape par étape.", href: "/vendre-ma-maison-gatineau/" },
        { title: "Courtier immobilier Outaouais", text: "Services dans toute la région.", href: "/courtier-immobilier-outaouais/" },
      ]}
    />

    <FunnelNextStep
      overline="Prochaine étape"
      title="Par où commencer pour vendre à Hull?"
      subtitle="Chaque situation est différente. Choisissez l'étape qui vous convient."
      steps={nextSteps}
    />

    <CTASection
      dark
      title="Vous pensez vendre à Hull?"
      text="Une évaluation gratuite pour commencer, ou un appel pour faire le point sur votre vente à Hull."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-maison-hull/" },
        { label: "Parler à Yanis", href: "/contact-yanis/", variant: "outline" },
      ]}
      trustLine="Gratuit et sans engagement."
    />

    <FAQSection items={faq} />
  </>
);

export default SellHullPage;
