import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import ProcessSteps from "@/components/ProcessSteps";
import ContentBlock from "@/components/ContentBlock";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import RelatedPages from "@/components/RelatedPages";
import { Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-seller.webp";

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Club Platine · Temple de la renommée" },
  { icon: Shield, label: "Bilingue · Hull et environs" },
];

const steps = [
  { num: "01", title: "Analyse du marché à Hull", desc: "Ventes comparables récentes dans votre rue et votre secteur de Hull — condos, plex, unifamiliales. On établit un prix réaliste." },
  { num: "02", title: "Plan de mise en marché", desc: "Préparation ciblée, photos professionnelles, visibilité maximale auprès des acheteurs de Hull, Gatineau et Ottawa." },
  { num: "03", title: "Accompagnement complet", desc: "Visites, négociation, coordination jusqu'au notaire. Aucune surprise, du début à la fin." },
];

const nextSteps = [
  { title: "Évaluation gratuite à Hull", text: "Connaître la valeur de votre propriété à Hull — c'est gratuit et sans engagement.", href: "/evaluation-maison-hull", cta: "Obtenir ma valeur", highlight: true },
  { title: "Parler à Yanis", text: "Un appel pour clarifier vos options de vente à Hull.", href: "/contact-yanis", cta: "Réserver un appel" },
];

const faq = [
  { q: "Comment vendre une maison à Hull?", a: "On commence par une évaluation basée sur les ventes récentes dans votre secteur de Hull. Ensuite, on bâtit un plan de mise en marché adapté à votre type de propriété — condo, plex ou unifamiliale." },
  { q: "Combien de temps prend la vente d'une maison à Hull?", a: "En moyenne, une propriété bien positionnée à Hull se vend en quelques semaines. Le délai dépend du prix, du type de propriété et de la préparation." },
  { q: "Combien vaut ma maison à Hull?", a: "La valeur dépend de votre rue, du type de propriété et des ventes récentes. Demandez une évaluation gratuite pour connaître votre fourchette de prix." },
  { q: "Faut-il rénover avant de vendre à Hull?", a: "Pas nécessairement. Certaines améliorations valent la peine dans le marché de Hull, d'autres non. Je vous conseille au cas par cas." },
  { q: "Quels sont les frais pour vendre à Hull?", a: "Commission courtier, notaire, certificat de localisation et parfois des réparations mineures. Tout est transparent dès le départ." },
  { q: "Est-ce un bon moment pour vendre à Hull?", a: "Hull reste un secteur recherché grâce à sa proximité avec Ottawa et ses services. Le bon moment dépend aussi de votre situation personnelle." },
  { q: "Pourquoi travailler avec un courtier local à Hull?", a: "Un courtier qui connaît Hull comprend les comparables, les acheteurs actifs et les particularités du secteur — condos du centre-ville, plex, quartiers résidentiels." },
  { q: "Puis-je vendre à un acheteur d'Ottawa?", a: "Absolument — beaucoup d'acheteurs d'Ottawa cherchent à Hull pour la proximité et les prix. Ma mise en marché cible les deux marchés." },
  { q: "Comment se passe la coordination vente-achat?", a: "C'est fréquent à Hull. On planifie la coordination dès le départ pour éviter d'être coincé entre deux transactions." },
  { q: "Quelle est la différence entre vendre un condo et une maison à Hull?", a: "Les stratégies de prix et de mise en marché diffèrent. Un condo demande une attention particulière aux frais de copropriété et à la concurrence dans l'immeuble." },
];

const SellHullPage = () => (
  <>
    <PageMeta
      title="Vendre sa maison à Hull | Courtier immobilier"
      description="Vendez votre propriété à Hull au meilleur prix. Évaluation gratuite, stratégie de mise en marché locale et accompagnement complet par un courtier qui connaît Hull."
    />
    <ServiceJsonLd
      name="Vente immobilière à Hull"
      description="Service de vente immobilière à Hull — évaluation, stratégie de prix, mise en marché et accompagnement complet."
      url="/vendre-maison-hull"
      serviceType="Real Estate Listing Service"
    />

    <HeroSection
      overline="Vendre à Hull · Outaouais"
      title="Vendre votre propriété à Hull avec un courtier local"
      subtitle="Hull est un secteur dynamique — condos, plex, unifamiliales. Vous avez besoin d'un plan adapté à votre type de propriété et à votre quartier."
      primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-maison-hull" }}
      secondaryCta={{ label: "Voir le processus", href: "/plan-vendeur-gatineau" }}
      trustLine="Stratégie claire · Hull et environs"
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <ContentBlock narrow>
      <SectionHeading overline="Vendre à Hull" title="Un accompagnement adapté au marché de Hull" />
      <p className="prose-body mt-5">
        Hull est un secteur unique en Outaouais : proximité immédiate avec Ottawa, marché actif pour les condos et les plex, quartiers résidentiels établis et un centre-ville en transformation. Que vous vendiez un condo près du boulevard Saint-Joseph, un plex dans le Vieux-Hull ou une maison dans un quartier familial, la stratégie doit être adaptée.
      </p>
      <p className="prose-body mt-4">
        Après près de 9 ans à accompagner des vendeurs en Outaouais, je connais les comparables, les acheteurs actifs et les particularités de chaque micro-marché à Hull. Mon objectif : vous donner un plan clair pour vendre au meilleur prix, sans surprises.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Première étape : connaître la valeur de votre propriété à Hull — c'est gratuit."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-maison-hull"
    />

    <ProcessSteps steps={steps} background="alt" />

    <RelatedPages
      overline="Explorer Hull"
      title="Pages connexes"
      pages={[
        { title: "Hull — portrait du quartier", text: "Marché, profil et tendances à Hull.", href: "/hull" },
        { title: "Évaluation maison Hull", text: "Combien vaut votre propriété à Hull?", href: "/evaluation-maison-hull" },
        { title: "Vendre à Gatineau", text: "Le guide complet pour vendre en Outaouais.", href: "/vendre-ma-maison-gatineau" },
        { title: "Courtier immobilier Outaouais", text: "Services dans toute la région.", href: "/courtier-immobilier-outaouais" },
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
      text="Je vous donne les chiffres, les options et une stratégie adaptée au marché de Hull."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-maison-hull" },
        { label: "Parler à Yanis", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Gratuit, confidentiel et sans engagement."
    />

    <FAQSection items={faq} />
  </>
);

export default SellHullPage;
