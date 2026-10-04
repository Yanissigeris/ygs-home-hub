import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { Link } from "react-router-dom";
import SectorLinks from "@/components/SectorLinks";
import RelatedPages from "@/components/RelatedPages";
import { marketArticlePages, marketBlockCopy } from "@/data/market-articles";
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
{ icon: CheckCircle2, title: "Combien vaut ma propriété?", text: "Un prix réaliste basé sur les ventes récentes dans votre secteur en Outaouais." },
{ icon: CheckCircle2, title: "Faut-il faire des travaux avant?", text: "Certains investissements rapportent dans le marché local. D'autres non. On fait le tri ensemble." },
{ icon: CheckCircle2, title: "Comment vendre sans me retrouver coincé?", text: "La coordination vente-achat à Gatineau demande un plan dès le départ, surtout si vous restez dans la région." }];


const fears = [
{ icon: AlertTriangle, title: "Sous-évaluer", text: "Laisser des milliers sur la table par manque d'information sur les ventes récentes." },
{ icon: AlertTriangle, title: "Surévaluer", text: "Rester sur le marché trop longtemps et finir par baisser le prix sous pression." },
{ icon: AlertTriangle, title: "Mal préparer", text: "Subir des négociations stressantes faute de stratégie claire dès le départ." }];


const steps = [
{ num: "01", title: "Analyse et positionnement", desc: "Je pars des ventes comparables de votre secteur et de l'état du marché en Outaouais, puis je tiens compte des particularités de votre propriété. Le prix proposé s'appuie sur ces ventes." },
{ num: "02", title: "Plan vendeur personnalisé", desc: "Les améliorations qui valent la peine et la préparation, puis un plan de visibilité ciblé pour les acheteurs de Gatineau et d'Ottawa." },
{ num: "03", title: "Jusqu'au notaire", desc: "Je gère les visites et la négociation, puis je coordonne le dossier avec le notaire." }];




const nextSteps = [
{ title: "Évaluation gratuite", text: "Connaître la valeur de votre propriété est gratuit et sans engagement. Votre demande reste confidentielle.", href: "/evaluation-gratuite-gatineau/", cta: "Obtenir ma valeur", highlight: true },
{ title: "Plan vendeur", text: "Un plan clair, du prix à la mise en marché, adapté à votre propriété et à votre situation.", href: "/plan-vendeur-gatineau/", cta: "Recevoir mon plan" },
{ title: "Parler à Yanis", text: "Un appel pour clarifier vos options et répondre à vos questions.", href: "/contact-yanis/", cta: "Réserver un appel" }];


const faq = [
{ q: "Quand est-ce le meilleur moment pour vendre?", a: "Ça dépend d'abord de votre situation. Depuis 2017 en Outaouais, j'ai vu des vendeurs bien réussir dans toutes les conditions, avec le bon plan." },
{ q: "Est-ce que je dois rénover avant de vendre?", a: "Pas nécessairement. Je vous aide à repérer ce qui vaut la peine pour vendre plus cher, sans gaspiller." },
{ q: "Combien coûte un courtier immobilier à Gatineau?", a: "La commission est convenue ensemble avant de commencer. Vous connaissez le montant et les conditions avant de signer quoi que ce soit." },
{ q: "Et si je dois acheter en même temps?", a: "C'est fréquent. On planifie la coordination dès le départ pour éviter d'être coincé." },
{ q: "Combien de temps prend la vente d'une maison à Gatineau?", a: "Le délai dépend du prix, du secteur, du type de propriété, de sa préparation et des conditions au moment de la mise en marché." },
{ q: "Pourquoi travailler avec un courtier pour vendre à Gatineau?", a: "Un courtier local connaît les comparables et les acheteurs actifs de votre secteur, à Aylmer, à Hull comme ailleurs en Outaouais. Il sait aussi quelles stratégies y fonctionnent." },
{ q: "Comment est calculée la valeur de ma maison?", a: "Je pars des ventes comparables récentes dans votre rue et votre quartier. J'ajuste ensuite selon l'état de la propriété et les conditions du marché local." },
{ q: "Faut-il faire du home staging pour vendre?", a: "Pas toujours, mais dans certains cas ça accélère la vente et améliore le prix. Je vous conseille au cas par cas selon votre propriété." },
{ q: "Quels frais dois-je prévoir pour vendre ma maison?", a: "Commission courtier, notaire, certificat de localisation, et parfois des réparations mineures. Je vous donne le portrait complet avant de commencer." },
{ q: "Puis-je vendre ma maison à un acheteur d'Ottawa?", a: "Oui. Selon la propriété et sa clientèle cible, la mise en marché peut aussi rejoindre des acheteurs d'Ottawa." }];


const SellerPage = () =>
<>
    <PageMeta title="Vendre sa maison à Gatineau · Outaouais" description="Vendez votre propriété à Gatineau au bon prix. Évaluation réaliste, stratégie de mise en marché et accompagnement complet." ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd name="Vente immobilière à Gatineau" description="Service de vente immobilière à Gatineau et en Outaouais : évaluation, stratégie de prix, mise en marché et accompagnement complet jusqu'à la signature chez le notaire." url="/vendre-ma-maison-gatineau/" serviceType="Real Estate Listing Service" />
    <HeroSection
    overline="Pour vendeurs · Gatineau et environs"
    title="Vendre votre propriété à Gatineau avec une vraie stratégie"
    subtitle="Vous n'avez pas besoin de tout décider aujourd'hui. Ce qu'il vous faut d'abord, c'est un plan clair : prix, préparation, mise en marché et négociation."
    primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" }}
    secondaryCta={{ label: "Recevoir mon plan vendeur", href: "/plan-vendeur-gatineau/" }}
    trustLine="Stratégie claire."
    heroBgImage={heroImg} />

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Stratégie locale" title="Adapter votre vente au marché de votre secteur" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        Les conditions de vente varient selon le secteur, le type de propriété et la gamme de prix. L'analyse des comparables récents sert à établir une stratégie adaptée à votre propriété au moment de sa mise en marché.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Le prix de départ, la présentation et la stratégie de mise en marché influencent l'intérêt des acheteurs. Une analyse locale aide à positionner la propriété en fonction de ses caractéristiques et de la concurrence au moment de la vente.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        C'est pour ça que mon approche part de la réalité du marché dans votre secteur, pas d'un chiffre pour vous faire plaisir.
      </p>
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
    text="Première étape : connaître la valeur de votre propriété, c'est gratuit et sans engagement."
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
      title="Savoir où vous en êtes, à votre rythme" />
    
      <p className="prose-body mt-5">
        Avant de vendre, les propriétaires en Outaouais veulent d'abord savoir ce que vaut leur propriété et quelles options conviennent à leur calendrier. Le but est de bâtir un plan clair adapté à votre secteur, que ce soit à Aylmer, à Hull, au Plateau ou à Buckingham.
      </p>
      <p className="prose-body mt-4">
        J'aide des vendeurs partout en Outaouais depuis 2017, et je sais qu'une bonne vente se prépare. Tout part d'une valeur basée sur les comparables locaux. Viennent ensuite le prix et les améliorations qui rapportent, puis une mise en marché pensée pour les bons acheteurs, y compris ceux d'Ottawa qui veulent traverser la rivière.
      </p>
    </ContentBlock>

    <ProcessSteps steps={steps} background="alt" />

    <SectorLinks sectors={[
      { name: "Aylmer", href: "/aylmer/", detail: "Familles, quartiers établis" },
      { name: "Plateau", href: "/plateau/", detail: "Côtés Aylmer et Hull, maisons neuves, familial" },
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
        { title: "Quand vendre sa maison à Gatineau", text: "Le bon moment pour vendre en Outaouais.", href: "/quand-vendre-a-gatineau/" },
        { title: "Home staging à Gatineau", text: "Conseils pour préparer sa vente.", href: "/blogue/home-staging-vendre-plus-vite-gatineau/" },
        { title: "Blogue immobilier", text: "Tous nos articles et analyses.", href: "/blogue/" },
        { title: "Quartiers de l'Outaouais", text: "Comparez les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
      ]}
    />
    {/* Internal links to the latest market articles (SEO: they had a single inlink from the blog index) */}
    <RelatedPages
      overline={marketBlockCopy.fr.overline}
      title={marketBlockCopy.fr.title}
      pages={marketArticlePages("fr", "seller")}
    />

    <FunnelNextStep
    overline="Prochaine étape"
    title="Par où commencer?"
    subtitle="Chaque vendeur a une situation différente. Choisissez l'étape qui vous convient."
    steps={nextSteps} />
  

    <GuideInlineCTA
    guideType="seller_guide"
    headline="Vous pensez vendre? Recevez le guide vendeur."
    text="Tout ce que vous devez savoir pour vendre au bon prix à Gatineau, dans un guide clair envoyé par courriel."
    ctaLabel="Recevoir le guide vendeur" />
  

    <StickyGuideBanner guideType="seller_guide" label="Guide vendeur gratuit, recevez-le par courriel" />

    <ReviewSection
    overline="Témoignages vendeurs"
    title="Ce que disent mes vendeurs"
    reviews={getReviewsByCategory("seller").slice(0, 2)}
    columns={2}
    background="alt" />
  

    <CTASection
    dark
    title="Vous voulez savoir quoi faire dans votre cas?"
    text="Une évaluation gratuite ou un plan vendeur, selon où vous en êtes."
    buttons={[
    { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" },
    { label: "Recevoir mon plan vendeur", href: "/plan-vendeur-gatineau/", variant: "outline" }]
    }
    trustLine="Je vous donne les chiffres et les options, vous décidez." />
  

    <FAQSection items={faq} />
  </>;


export default SellerPage;