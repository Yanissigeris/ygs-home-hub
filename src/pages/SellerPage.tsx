import PageMeta from "@/components/PageMeta";
import SEO from "@/components/SEO";
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
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { CheckCircle2, AlertTriangle, ArrowRight, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-vendre-gatineau.webp";

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




const nextSteps = [
{ title: "Évaluation gratuite", text: "Connaître la valeur de votre propriété — c'est gratuit, confidentiel et sans engagement.", href: "/evaluation-gratuite-gatineau/", cta: "Obtenir ma valeur", highlight: true },
{ title: "Plan vendeur", text: "Prix, préparation, mise en marché — un plan clair adapté à votre propriété et votre situation.", href: "/plan-vendeur-gatineau/", cta: "Recevoir mon plan" },
{ title: "Parler à Yanis", text: "Un appel pour clarifier vos options — pas de pitch, juste des réponses.", href: "/contact-yanis/", cta: "Réserver un appel" }];


const faq = [
{ q: "Quand est-ce le meilleur moment pour vendre?", a: "Ça dépend de votre situation, pas seulement du marché. Depuis 2017 en Outaouais, j'ai vu des vendeurs bien réussir dans toutes les conditions — avec le bon plan." },
{ q: "Est-ce que je dois rénover avant de vendre?", a: "Pas nécessairement. Je vous aide à identifier ce qui vaut la peine pour maximiser votre prix sans gaspiller." },
{ q: "Combien coûte un courtier immobilier à Gatineau?", a: "La commission est convenue ensemble avant de commencer. Tout est transparent — tout est clair dès le départ." },
{ q: "Et si je dois acheter en même temps?", a: "C'est fréquent. On planifie la coordination dès le départ pour éviter d'être coincé." },
{ q: "Combien de temps prend la vente d'une maison à Gatineau?", a: "En moyenne, une propriété bien positionnée se vend en quelques semaines en Outaouais. Le délai dépend du prix, du secteur et de la préparation." },
{ q: "Pourquoi travailler avec un courtier pour vendre à Gatineau?", a: "Un courtier local connaît les comparables, les acheteurs actifs et les stratégies qui fonctionnent dans votre secteur — Aylmer, Hull, Plateau ou ailleurs en Outaouais." },
{ q: "Comment est calculée la valeur de ma maison?", a: "Je me base sur les ventes comparables récentes dans votre rue et votre quartier, l'état de la propriété et les conditions du marché local." },
{ q: "Faut-il faire du home staging pour vendre?", a: "Pas toujours, mais dans certains cas ça accélère la vente et améliore le prix. Je vous conseille au cas par cas selon votre propriété." },
{ q: "Quels frais dois-je prévoir pour vendre ma maison?", a: "Commission courtier, notaire, certificat de localisation, et parfois des réparations mineures. Je vous donne le portrait complet avant de commencer." },
{ q: "Puis-je vendre ma maison à un acheteur d'Ottawa?", a: "Absolument — beaucoup d'acheteurs d'Ottawa cherchent en Outaouais pour les prix et la qualité de vie. Ma mise en marché cible les deux marchés." }];


const SellerPage = () =>
<>
    <SEO
      title="Vendre sa maison à Gatineau | Courtier YGS"
      description="Vendez votre maison à Gatineau avec Yanis Gauthier-Sigeris. Évaluation gratuite, stratégie de prix, mise en marché complète. 9 ans d'expérience."
      canonical="https://yanisgauthier.com/vendre-ma-maison-gatineau"
      hreflangFr="https://yanisgauthier.com/vendre-ma-maison-gatineau"
      hreflangEn="https://yanisgauthier.com/en/sell"
    />
    <PageMeta title="Vendre sa maison à Gatineau · Outaouais" description="Vendez votre propriété à Gatineau au meilleur prix. Évaluation réaliste, stratégie de mise en marché et accompagnement complet." ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd name="Vente immobilière à Gatineau" description="Service de vente immobilière à Gatineau et en Outaouais — évaluation, stratégie de prix, mise en marché et accompagnement complet jusqu'à la signature chez le notaire." url="/vendre-ma-maison-gatineau/" serviceType="Real Estate Listing Service" />
    <HeroSection
    overline="Pour vendeurs · Gatineau et environs"
    title="Vendre votre propriété à Gatineau avec une vraie stratégie"
    subtitle="Vous n'avez pas besoin de tout décider aujourd'hui. Vous avez surtout besoin d'un plan clair — prix, préparation, mise en marché, négociation."
    primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" }}
    secondaryCta={{ label: "Recevoir mon plan vendeur", href: "/plan-vendeur-gatineau/" }}
    trustLine="Stratégie claire."
    heroBgImage={heroImg} />

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Contexte 2026" title="Le marché de la vente en Outaouais en 2026" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        En 2026, le marché immobilier en Outaouais est en phase de stabilisation après plusieurs années très actives. Les vendeurs bien positionnés trouvent toujours preneur — mais le contexte a changé. L'inventaire disponible a augmenté par rapport à 2022-2024, ce qui signifie que les acheteurs ont maintenant plus de choix et plus de temps pour décider.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Conséquence directe pour vous&nbsp;: le prix de départ, la présentation, et la stratégie de mise en marché ont maintenant un impact beaucoup plus important sur votre résultat final qu'il y a deux ans. Une propriété bien positionnée part rapidement. Une propriété surévaluée reste sur le marché — et ce délai envoie un signal négatif aux acheteurs.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        C'est exactement pour ça que mon approche commence toujours par la réalité du marché dans votre secteur précis — pas par un chiffre pour vous faire plaisir.
      </p>
      <p className="mt-4 text-xs text-muted-foreground italic">Sources&nbsp;: Chambre immobilière de l'Outaouais (CIO), SCHL — Perspectives du marché 2026.</p>
      <div className="mt-6">
        <Button asChild><Link to="/evaluation-gratuite-gatineau/">Évaluation gratuite →</Link></Button>
      </div>
    </ContentBlock>

<CardGrid
    overline="Vos questions"
    title="Vous vous posez probablement ces questions"
    items={painPoints}
    variant="icon-inline" />
  

    <InlineCTA
    text="Première étape: connaître la valeur de votre propriété — c'est gratuit et sans engagement."
    buttonLabel="Évaluation gratuite →"
    href="/evaluation-gratuite-gatineau/" />
  

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
        Depuis 2017 à accompagner des vendeurs partout en Outaouais, je sais que la clé d'une bonne vente, c'est la préparation. Valeur réelle basée sur les comparables locaux, positionnement, prix, améliorations stratégiques, et une mise en marché pour attirer les bons acheteurs — incluant ceux d'Ottawa qui cherchent à traverser la rivière.
      </p>
    </ContentBlock>

    <ProcessSteps steps={steps} background="alt" />

    <SectorLinks sectors={[
      { name: "Aylmer", href: "/aylmer/", detail: "Lac Deschênes, familles, quartiers établis" },
      { name: "Plateau", href: "/plateau/", detail: "Maisons neuves, familial, accès Ottawa" },
      { name: "Hull", href: "/hull/", detail: "Urbain, condos, plex, proximité Ottawa" },
      { name: "Chelsea", href: "/chelsea/", detail: "Village, nature, parc de la Gatineau" },
      { name: "Cantley", href: "/cantley/", detail: "Rural, grands terrains, collines" },
      { name: "Buckingham", href: "/buckingham-masson-angers/", detail: "Rivière, prix accessibles, nature" },
      { name: "Masson-Angers", href: "/masson-angers/", detail: "Neufs, familles, en croissance" },
      { name: "Val-des-Monts", href: "/val-des-monts/", detail: "Lacs, chalets, villégiature" },
      { name: "Pontiac", href: "/pontiac/", detail: "Rural, grands espaces, rivière" },
      { name: "Côte-d'Azur", href: "/cote-dazur-gatineau/", detail: "Bungalows, résidentiel établi" },
      { name: "Limbour", href: "/limbour/", detail: "Familial moderne, parcs" },
      { name: "Gatineau-centre", href: "/gatineau/", detail: "Services, central, plex" },
    ]} />

    <RelatedPages
      overline="À lire aussi"
      title="Articles et ressources pour vendeurs"
      pages={[
        { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau/" },
        { title: "Quand vendre sa maison à Gatineau", text: "Meilleur moment pour vendre en Outaouais.", href: "/quand-vendre-a-gatineau/" },
        { title: "Home staging à Gatineau", text: "Conseils pour préparer sa vente.", href: "/blogue/home-staging-gatineau" },
        { title: "Blogue immobilier", text: "Tous nos articles et analyses.", href: "/blogue/" },
        { title: "Quartiers de l'Outaouais", text: "Comparez les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
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
    { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" },
    { label: "Recevoir mon plan vendeur", href: "/plan-vendeur-gatineau/", variant: "outline" }]
    }
    trustLine="Je vous donne les chiffres et les options, vous décidez." />
  

    <FAQSection items={faq} />
  </>;


export default SellerPage;