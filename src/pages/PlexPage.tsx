import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategory } from "@/data/reviews";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import RelatedPages from "@/components/RelatedPages";
import { marketArticlePages, marketBlockCopy } from "@/data/market-articles";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import LinkedCardGrid from "@/components/LinkedCardGrid";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { CheckCircle2, Building2, TrendingUp, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-plex.webp";

const clientTypes = [
  {
    icon: Building2,
    title: "Propriétaires de plex",
    text: "Vendre, refinancer ou conserver? On analyse votre situation à partir de vos loyers et de vos dépenses.",
    cta: "Recevoir une analyse",
    href: "/analyse-plex-gatineau/",
  },
  {
    icon: TrendingUp,
    title: "Acheteurs investisseurs",
    text: "Valeur marchande, potentiel locatif, risques et stratégie d'achat : les chiffres avant la décision.",
    cta: "Demander une analyse",
    href: "/analyse-plex-gatineau/",
  },
];

const questions = [
  { icon: CheckCircle2, title: "Est-ce que je garde ou je vends?", text: "Votre rendement actuel, comparé à vos objectifs à long terme." },
  { icon: CheckCircle2, title: "Le prix demandé a-t-il du sens?", text: "Les loyers inscrits aux baux, les dépenses appuyées par des factures et le potentiel locatif du secteur." },
  { icon: CheckCircle2, title: "Quel est le vrai rendement?", text: "Dépenses, vacance, travaux à prévoir, potentiel de croissance à Gatineau." },
  { icon: CheckCircle2, title: "Quels risques surveiller?", text: "Toiture, plomberie, électricité, fondation : certains travaux changent la donne, surtout dans les immeubles plus anciens de Hull." },
  { icon: CheckCircle2, title: "Comment bien vendre mon plex?", text: "Un prix bien positionné et une mise en marché qui rejoint les investisseurs de l'Outaouais." },
];

const steps = [
  { num: "01", title: "Analyse des chiffres", desc: "Revenus, dépenses, valeur marchande et potentiel locatif : on part des faits." },
  { num: "02", title: "Recommandation", desc: "Garder, vendre, refinancer ou acheter : l'option qui convient à votre situation." },
  { num: "03", title: "Exécution et accompagnement", desc: "De la décision à la transaction, un accompagnement complet et transparent." },
];


const nextSteps = [
  { title: "Analyse plex gratuite", text: "Valeur, revenus, dépenses et potentiel : une lecture objective de votre situation.", href: "/analyse-plex-gatineau/", cta: "Recevoir mon analyse", highlight: true },
  { title: "Évaluation de la valeur", text: "Connaître la valeur marchande actuelle de votre plex, gratuit et confidentiel.", href: "/evaluation-gratuite-gatineau/", cta: "Obtenir ma valeur" },
  { title: "Parler à Yanis", text: "Un échange pour discuter de votre situation d'investisseur, sans engagement.", href: "/contact-yanis/", cta: "Me joindre" },
];

const faq = [
  { q: "Comment évaluer la valeur d'un plex?", a: "On combine les ventes récentes de plex comparables et l'approche par le revenu : revenu net, taux global d'actualisation (TGA) et multiplicateur de revenu brut (MRB) du secteur. L'état de l'immeuble et le potentiel locatif ajustent ensuite la valeur. J'analyse des plex en Outaouais depuis 2017, à Hull, à Gatineau-centre et ailleurs." },
  { q: "Est-ce encore rentable d'acheter un plex à Gatineau?", a: "Ça dépend du secteur, du prix, des revenus, des dépenses, de l'état de l'immeuble et de votre stratégie. Une analyse propre à la propriété permet d'évaluer la situation." },
  { q: "Comment vendre un plex occupé?", a: "C'est possible. La vente ne met pas fin aux baux : l'acheteur les reprend tels quels. Les locataires doivent recevoir un préavis de 24 heures avant une visite. On prépare d'avance les baux et l'état des revenus et dépenses à remettre aux acheteurs." },
  { q: "Refinancer ou vendre?", a: "On compare les deux scénarios avec les taux actuels et la valeur marchande de votre secteur pour voir ce qui fait plus de sens." },
];

const PlexPage = () => (
   <>
    <PageMeta title="Investir dans un plex à Gatineau · Outaouais" description="Duplex, triplex et immeubles à revenus à Gatineau. Analyse de rendement et stratégie d'investissement par un courtier spécialisé." ogImage="https://yanisgauthier.com/og/og-plex.jpg" />
    <ServiceJsonLd name="Analyse et investissement plex à Gatineau" description="Service d'analyse et d'accompagnement pour l'achat, la vente ou l'évaluation de plex et immeubles à revenus à Gatineau et en Outaouais." url="/investir-plex-gatineau/" serviceType="Real Estate Investment Analysis" />
    <HeroSection
      overline="Plex et investissement · Gatineau"
      title="Plex à Gatineau : acheter, vendre ou analyser"
      subtitle="Il faut regarder au-delà du prix affiché. Revenus, dépenses, état de l'immeuble, potentiel : chaque facteur compte dans la décision."
      primaryCta={{ label: "Analyse plex gratuite", href: "/analyse-plex-gatineau/" }}
      secondaryCta={{ label: "Valeur de mon plex", href: "/evaluation-gratuite-gatineau/" }}
      trustLine="Stratégie claire."
      heroBgImage={heroImg}
    />

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Analyse" title="Ce qu'il faut analyser avant d'investir dans un plex en Outaouais" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        Les conditions varient selon le secteur et le type d'immeuble. Avant d'acheter, il faut examiner les loyers en place, les dépenses, la vacance, l'état du bâtiment et le potentiel propre à la propriété.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Une analyse de rendement doit tenir compte des loyers en place, des coûts d'entretien, des travaux à prévoir et de votre stratégie à long terme. Elle sert à comparer l'immeuble à vos objectifs.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Je suis investisseur immobilier moi-même. Mon rôle n'est pas de vous convaincre d'acheter. Je vous donne une analyse franche pour que vous décidiez en toute connaissance de cause.
      </p>
      <p className="prose-body mt-4 p-4 rounded-md" style={{ background: "rgba(168,138,90,.08)", border: "1px solid rgba(168,138,90,.15)" }}>
        L'ajustement d'un loyer dépend des critères applicables et de la situation de l'immeuble. Le TAL publie chaque année les pourcentages qui servent à ce calcul, et son outil aide à établir l'ajustement. Le propriétaire et le locataire restent libres de s'entendre. <a className="underline underline-offset-4" href="https://www.tal.gouv.qc.ca/fr/reconduction-du-bail-et-fixation-de-loyer/pourcentages-applicables-aux-criteres-de-fixation-de-loyer" target="_blank" rel="noopener noreferrer">Consulter les critères du TAL</a>.
      </p>
      <div className="mt-6">
        <Button asChild><Link to="/contact-yanis/">Analyser un plex avec moi →</Link></Button>
      </div>
    </ContentBlock>

<LinkedCardGrid
      overline="Pour qui"
      title="J'aide deux types de clients"
      items={clientTypes}
    />

    <InlineCTA
      text="Vous possédez un plex? Commencez par connaître sa valeur actuelle."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau/"
    />

    <CardGrid
      overline="Analyse"
      title="Les vraies questions derrière un plex"
      items={questions}
      variant="icon-inline"
      background="alt"
    />

    <ProcessSteps steps={steps} />

    <FunnelNextStep
      overline="Prochaine étape"
      title="Par où commencer?"
      subtitle="Choisissez l'option qui correspond à votre situation d'investisseur."
      steps={nextSteps}
      background="alt"
    />

    <GuideInlineCTA
      guideType="investor_guide"
      headline="Investir à Gatineau? Recevez le guide complet."
      text="Rendement, analyse de plex, stratégie d'acquisition et pièges à éviter : un guide pour investir à Gatineau, envoyé par courriel."
      ctaLabel="Recevoir le guide investisseur"
    />

    <StickyGuideBanner guideType="investor_guide" label="Guide investisseur gratuit, recevez-le par courriel" />

    <ReviewSection
      overline="Témoignages investisseurs"
      title="Décisions éclairées, résultats concrets"
      reviews={getReviewsByCategory("plex").slice(0, 2)}
      columns={2}
    />

    <CTASection
      dark
      title="Recevez une lecture claire de votre situation"
      text="Que vous pensiez vendre ou acheter, on regarde vos chiffres ensemble pour y voir plus clair."
      buttons={[
        { label: "Analyse plex gratuite", href: "/analyse-plex-gatineau/" },
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />

    <RelatedPages
      overline="À lire aussi"
      title="Pages connexes"
      pages={[
        { title: "Analyse plex gratuite", text: "Revenus et dépenses : obtenez une lecture claire de votre immeuble.", href: "/analyse-plex-gatineau/" },
        { title: "Vendre un plex à Gatineau", text: "Mise en marché et accompagnement pour vendre votre plex.", href: "/vendre-un-plex-a-gatineau/" },
        { title: "Quartiers à considérer", text: "Comparer les secteurs de Gatineau et de l'Outaouais.", href: "/quartiers-a-considerer-a-gatineau/" },
        { title: "Rapport du marché", text: "Données actuelles du marché immobilier en Outaouais.", href: "/rapport-marche-gatineau/" },
      ]}
      background="alt"
    />
    {/* Internal links to the latest market articles (SEO: they had a single inlink from the blog index) */}
    <RelatedPages
      overline={marketBlockCopy.fr.overline}
      title={marketBlockCopy.fr.title}
      pages={marketArticlePages("fr", "investor")}
    />
  </>
);

export default PlexPage;
