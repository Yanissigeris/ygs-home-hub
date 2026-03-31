import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { Link } from "react-router-dom";
import SectorLinks from "@/components/SectorLinks";
import RelatedPages from "@/components/RelatedPages";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategory } from "@/data/reviews";
import FAQSection from "@/components/FAQSection";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { CheckCircle2, AlertTriangle, ArrowRight, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-seller.webp";

const painPoints = [
{ icon: CheckCircle2, title: "Est-ce le bon moment pour vendre?", text: "Le marché de Gatineau évolue. Vous ne voulez pas manquer la fenêtre, mais pas non plus vendre sans plan." },
{ icon: CheckCircle2, title: "Combien vaut vraiment ma propriété?", text: "Un prix réaliste basé sur les ventes récentes dans votre secteur en Outaouais — pas un chiffre gonflé pour vous attirer." },
{ icon: CheckCircle2, title: "Faut-il faire des travaux avant?", text: "Certains investissements rapportent dans le marché local. D'autres non. On fait le tri ensemble." },
{ icon: CheckCircle2, title: "Comment vendre sans me retrouver coincé?", text: "La coordination vente-achat à Gatineau demande un plan dès le départ — surtout si vous restez dans la région." }];


const fears = [
{ icon: AlertTriangle, title: "Sous-évaluer", text: "Laisser des milliers sur la table par manque d'information sur les ventes récentes." },
{ icon: AlertTriangle, title: "Surévaluer", text: "Rester sur le marché trop longtemps et finir par baisser le prix sous pression." },
{ icon: AlertTriangle, title: "Mal préparer", text: "Subir des négociations stressantes faute de stratégie claire dès le départ." }];


const steps = [
{ num: "01", title: "Analyse et positionnement", desc: "Ventes comparables dans votre secteur, état du marché en Outaouais, particularités de votre propriété. On établit un prix réaliste et stratégique." },
{ num: "02", title: "Plan vendeur personnalisé", desc: "Préparation, améliorations qui valent la peine, plan de visibilité ciblé pour les acheteurs de Gatineau et Ottawa." },
{ num: "03", title: "Accompagnement complet", desc: "Mise en marché, visites, négociation, coordination jusqu'au notaire. Aucune surprise." }];


const trustItems = [
{ icon: Clock, label: "Près de 9 ans en Outaouais" },
{ icon: Award, label: "Club Platine · Temple de la renommée" },
{ icon: Shield, label: "Bilingue" }];


const nextSteps = [
{ title: "Évaluation gratuite", text: "Connaître la valeur de votre propriété — c'est gratuit, confidentiel et sans engagement.", href: "/evaluation-gratuite-gatineau", cta: "Obtenir ma valeur", highlight: true },
{ title: "Plan vendeur", text: "Prix, préparation, mise en marché — un plan clair adapté à votre propriété et votre situation.", href: "/plan-vendeur-gatineau", cta: "Recevoir mon plan" },
{ title: "Parler à Yanis", text: "Un appel pour clarifier vos options — pas de pitch, juste des réponses.", href: "/contact-yanis", cta: "Réserver un appel" }];


const faq = [
{ q: "Quand est-ce le meilleur moment pour vendre?", a: "Ça dépend de votre situation, pas seulement du marché. En près de 9 ans en Outaouais, j'ai vu des vendeurs bien réussir dans toutes les conditions — avec le bon plan." },
{ q: "Est-ce que je dois rénover avant de vendre?", a: "Pas nécessairement. Je vous aide à identifier ce qui vaut la peine pour maximiser votre prix sans gaspiller." },
{ q: "Combien coûte un courtier?", a: "La commission est convenue ensemble avant de commencer. Tout est transparent — tout est clair dès le départ." },
{ q: "Et si je dois acheter en même temps?", a: "C'est fréquent. On planifie la coordination dès le départ pour éviter d'être coincé." }];


const SellerPage = () =>
<>
    <PageMeta title="Vendre sa maison à Gatineau · Outaouais | YGS" description="Vendez votre propriété à Gatineau au meilleur prix. Évaluation réaliste, stratégie de mise en marché et accompagnement complet en Outaouais par Yanis Gauthier-Sigeris." />
    <HeroSection
    overline="Pour vendeurs · Gatineau et environs"
    title="Vendre votre propriété à Gatineau avec une vraie stratégie"
    subtitle="Vous n'avez pas besoin de tout décider aujourd'hui. Vous avez surtout besoin d'un plan clair — prix, préparation, mise en marché, négociation."
    primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
    secondaryCta={{ label: "Recevoir mon plan vendeur", href: "/plan-vendeur-gatineau" }}
    trustLine="Stratégie claire."
    heroBgImage={heroImg} />
  

    <TrustMiniStrip items={trustItems} />

    <CardGrid
    overline="Vos questions"
    title="Vous vous posez probablement ces questions"
    items={painPoints}
    variant="icon-inline" />
  

    <InlineCTA
    text="Première étape: connaître la valeur de votre propriété — c'est gratuit et sans engagement."
    buttonLabel="Évaluation gratuite →"
    href="/evaluation-gratuite-gatineau" />
  

    <CardGrid
    title="Ce que les vendeurs veulent éviter"
    items={fears}
    columns={3}
    background="alt"
    variant="icon-top" />
  

    <ContentBlock narrow>
      <SectionHeading
      overline="Avant de vendre"
      title="Vous n'avez pas besoin de tout décider aujourd'hui" />
    
      <p className="prose-body mt-5">
        Avant de vendre, les propriétaires en Outaouais veulent d'abord connaître la valeur de leur propriété, quel timing est idéal pour eux, et leurs options. Le but est de bâtir un plan clair adapté à votre secteur — que ce soit à Aylmer, Hull, au Plateau ou à Buckingham.
      </p>
      <p className="prose-body mt-4">
        Après près de 9 ans à accompagner des vendeurs partout en Outaouais, je sais que la clé d'une bonne vente, c'est la préparation. Valeur réelle basée sur les comparables locaux, positionnement, prix, améliorations stratégiques, et une mise en marché pour attirer les bons acheteurs — incluant ceux d'Ottawa qui cherchent à traverser la rivière.
      </p>
    </ContentBlock>

    <ProcessSteps steps={steps} background="alt" />

    <SectorLinks sectors={[
      { name: "Aylmer", href: "/aylmer", detail: "Lac Deschênes, familles, quartiers établis" },
      { name: "Plateau", href: "/plateau", detail: "Maisons neuves, familial, accès Ottawa" },
      { name: "Hull", href: "/hull", detail: "Urbain, condos, plex, proximité Ottawa" },
      { name: "Chelsea", href: "/chelsea", detail: "Village, nature, parc de la Gatineau" },
      { name: "Cantley", href: "/cantley", detail: "Rural, grands terrains, collines" },
      { name: "Buckingham", href: "/buckingham-masson-angers", detail: "Rivière, prix accessibles, nature" },
      { name: "Masson-Angers", href: "/masson-angers", detail: "Neufs, familles, en croissance" },
      { name: "Val-des-Monts", href: "/val-des-monts", detail: "Lacs, chalets, villégiature" },
      { name: "Pontiac", href: "/pontiac", detail: "Rural, grands espaces, rivière" },
      { name: "Côte-d'Azur", href: "/cote-dazur-gatineau", detail: "Bungalows, résidentiel établi" },
      { name: "Limbour", href: "/limbour", detail: "Familial moderne, parcs" },
      { name: "Gatineau-centre", href: "/gatineau", detail: "Services, central, plex" },
    ]} />

    <RelatedPages
      overline="À lire aussi"
      title="Articles et ressources pour vendeurs"
      pages={[
        { title: "Quand vendre sa maison à Gatineau", text: "Meilleur moment pour vendre en Outaouais.", href: "/blogue/quand-vendre-maison-gatineau" },
        { title: "Home staging à Gatineau", text: "Conseils pour préparer sa vente.", href: "/blogue/home-staging-gatineau" },
        { title: "Blogue immobilier", text: "Tous nos articles et analyses.", href: "/blogue" },
        { title: "Quartiers de l'Outaouais", text: "Comparez les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
      ]}
    />

    <FunnelNextStep
    overline="Prochaine étape"
    title="Par où commencer?"
    subtitle="Chaque vendeur a une situation différente. Choisissez l'étape qui vous convient."
    steps={nextSteps} />
  

    <GuideInlineCTA
    guideType="seller_guide"
    headline="Vous pensez vendre? Recevez le guide complet."
    text="Tout ce que vous devez savoir pour vendre au meilleur prix à Gatineau — dans un guide clair envoyé par courriel."
    ctaLabel="Recevoir le guide vendeur" />
  

    <StickyGuideBanner guideType="seller_guide" label="Guide vendeur gratuit — recevez-le par courriel" />

    <ReviewSection
    overline="Témoignages vendeurs"
    title="Ils ont vendu avec confiance"
    reviews={getReviewsByCategory("seller").slice(0, 2)}
    columns={2}
    background="alt" />
  

    <CTASection
    dark
    title="Vous voulez savoir quoi faire dans votre cas?"
    text="Je vous donne les chiffres, les options et une stratégie adaptée à votre situation."
    buttons={[
    { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
    { label: "Recevoir mon plan vendeur", href: "/plan-vendeur-gatineau", variant: "outline" }]
    }
    trustLine="Je vous donne les chiffres et les options, vous décidez." />
  

    <FAQSection items={faq} />
  </>;


export default SellerPage;