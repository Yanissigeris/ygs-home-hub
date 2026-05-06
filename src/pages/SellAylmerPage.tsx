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
  { num: "01", title: "Analyse du marché à Aylmer", desc: "Ventes comparables dans votre quartier d'Aylmer — Plateau, lac Deschênes, secteurs établis. Un prix réaliste et stratégique." },
  { num: "02", title: "Plan de mise en marché", desc: "Préparation, photos, visibilité ciblée pour attirer les acheteurs d'Aylmer, Gatineau et Ottawa." },
  { num: "03", title: "Accompagnement complet", desc: "Visites, négociation, coordination jusqu'au notaire. Zéro surprise." },
];

const nextSteps = [
  { title: "Évaluation gratuite à Aylmer", text: "Connaître la valeur de votre propriété à Aylmer — gratuit et sans engagement.", href: "/evaluation-maison-aylmer", cta: "Obtenir ma valeur", highlight: true },
  { title: "Parler à Yanis", text: "Un appel pour clarifier vos options de vente à Aylmer.", href: "/contact-yanis", cta: "Réserver un appel" },
];

const faq = [
  { q: "Comment vendre une maison à Aylmer?", a: "On commence par une évaluation basée sur les ventes récentes dans votre secteur d'Aylmer. Ensuite, un plan de mise en marché adapté à votre quartier et votre type de propriété." },
  { q: "Combien de temps prend la vente d'une maison à Aylmer?", a: "Une propriété bien positionnée à Aylmer se vend généralement en quelques semaines. Le délai dépend du prix, du quartier et de la préparation." },
  { q: "Combien vaut ma maison à Aylmer?", a: "La valeur dépend du quartier — Plateau, lac Deschênes, secteurs établis. Demandez une évaluation gratuite pour une fourchette de prix réaliste." },
  { q: "Faut-il rénover avant de vendre à Aylmer?", a: "Pas toujours. Certains investissements valent la peine dans le marché d'Aylmer, d'autres non. Je vous conseille selon votre situation." },
  { q: "Quels sont les frais pour vendre à Aylmer?", a: "Commission, notaire, certificat de localisation et parfois des réparations mineures. Tout est clair dès le départ." },
  { q: "Est-ce un bon moment pour vendre à Aylmer?", a: "Aylmer reste très recherché par les familles et les acheteurs d'Ottawa. Le bon moment dépend aussi de votre situation personnelle." },
  { q: "Pourquoi travailler avec un courtier local à Aylmer?", a: "Un courtier qui connaît Aylmer comprend les micro-marchés, les acheteurs actifs et les particularités de chaque quartier — du Plateau au lac Deschênes." },
  { q: "Puis-je vendre ma maison d'Aylmer à un acheteur d'Ottawa?", a: "Absolument — Aylmer attire beaucoup d'acheteurs d'Ottawa grâce à la qualité de vie et la proximité. Ma mise en marché cible les deux marchés." },
  { q: "Comment se passe la coordination vente-achat à Aylmer?", a: "C'est fréquent. On planifie la coordination dès le départ pour éviter d'être coincé entre deux transactions." },
  { q: "Quels quartiers d'Aylmer sont les plus recherchés?", a: "Le Plateau, les secteurs près du lac Deschênes et les quartiers familiaux établis sont très demandés. Chaque quartier a ses forces." },
];

const SellAylmerPage = () => (
  <>
    <PageMeta
      title="Vendre sa maison à Aylmer | Courtier immobilier"
      description="Vendez votre propriété à Aylmer au meilleur prix. Évaluation gratuite, stratégie locale et accompagnement complet par un courtier qui connaît Aylmer."
    ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd
      name="Vente immobilière à Aylmer"
      description="Service de vente immobilière à Aylmer — évaluation, stratégie de prix, mise en marché et accompagnement complet."
      url="/vendre-maison-aylmer"
      serviceType="Real Estate Listing Service"
    />

    <HeroSection
      overline="Vendre à Aylmer · Outaouais"
      title="Vendre votre propriété à Aylmer avec un courtier local"
      subtitle="Aylmer est un secteur prisé — familles, lac Deschênes, quartiers établis. Votre stratégie de vente doit refléter la valeur réelle de votre quartier."
      primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-maison-aylmer" }}
      secondaryCta={{ label: "Voir le processus", href: "/plan-vendeur-gatineau" }}
      trustLine="Stratégie claire · Aylmer et environs"
      heroBgImage={heroImg}
    />
<ContentBlock narrow>
      <SectionHeading overline="Vendre à Aylmer" title="Un accompagnement adapté au marché d'Aylmer" />
      <p className="prose-body mt-5">
        Aylmer est l'un des secteurs les plus recherchés en Outaouais : quartiers familiaux établis, proximité du lac Deschênes, accès rapide à Ottawa et qualité de vie reconnue. Que vous vendiez une maison sur le Plateau, près du lac ou dans un quartier résidentiel, la stratégie de prix et de mise en marché doit être adaptée à votre micro-marché.
      </p>
      <p className="prose-body mt-4">
        Après depuis 2017 à accompagner des vendeurs en Outaouais, je connais les comparables, les tendances et les acheteurs actifs à Aylmer. Mon objectif : un plan clair pour vendre au meilleur prix, sans surprises.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Première étape : connaître la valeur de votre propriété à Aylmer — c'est gratuit."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-maison-aylmer"
    />

    <ProcessSteps steps={steps} background="alt" />

    <RelatedPages
      overline="Explorer Aylmer"
      title="Pages connexes"
      pages={[
        { title: "Aylmer — portrait du quartier", text: "Marché, profil et tendances à Aylmer.", href: "/aylmer" },
        { title: "Évaluation maison Aylmer", text: "Combien vaut votre propriété à Aylmer?", href: "/evaluation-maison-aylmer" },
        { title: "Vendre à Gatineau", text: "Le guide complet pour vendre en Outaouais.", href: "/vendre-ma-maison-gatineau" },
        { title: "Courtier immobilier Outaouais", text: "Services dans toute la région.", href: "/courtier-immobilier-outaouais" },
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
      text="Je vous donne les chiffres, les options et une stratégie adaptée au marché d'Aylmer."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-maison-aylmer" },
        { label: "Parler à Yanis", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Gratuit, confidentiel et sans engagement."
    />

    <FAQSection items={faq} />
  </>
);

export default SellAylmerPage;
