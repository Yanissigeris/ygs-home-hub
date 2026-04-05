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
    text: "Vendre, refinancer ou conserver? On analyse votre situation avec des chiffres réels — pas des suppositions.",
    cta: "Recevoir une analyse",
    href: "/analyse-plex-gatineau",
  },
  {
    icon: TrendingUp,
    title: "Acheteurs investisseurs",
    text: "Valeur réelle, potentiel locatif, risques et stratégie d'achat — les chiffres avant la décision.",
    cta: "Demander une analyse",
    href: "/analyse-plex-gatineau",
  },
];

const questions = [
  { icon: CheckCircle2, title: "Est-ce que je garde ou je vends?", text: "Rendement actuel, conditions du marché en Outaouais et stratégie à long terme." },
  { icon: CheckCircle2, title: "Le prix demandé a-t-il du sens?", text: "Revenus réels, dépenses réelles, potentiel locatif dans le secteur — pas juste le prix affiché." },
  { icon: CheckCircle2, title: "Quel est le vrai rendement?", text: "Dépenses, vacance, travaux à prévoir, potentiel de croissance à Gatineau." },
  { icon: CheckCircle2, title: "Quels risques surveiller?", text: "Toiture, plomberie, électricité, fondation — certains coûts changent la donne, surtout sur les bâtiments plus anciens de Hull." },
  { icon: CheckCircle2, title: "Comment maximiser le prix de vente?", text: "Positionnement prix et mise en marché ciblée font la différence sur un plex en Outaouais." },
];

const steps = [
  { num: "01", title: "Analyse des chiffres", desc: "Revenus, dépenses, valeur marchande et potentiel locatif — on part des faits." },
  { num: "02", title: "Recommandation stratégique", desc: "Garder, vendre, refinancer ou acheter — la meilleure option pour votre situation." },
  { num: "03", title: "Exécution et accompagnement", desc: "De la décision à la transaction, un accompagnement complet et transparent." },
];


const nextSteps = [
  { title: "Analyse plex gratuite", text: "Valeur, revenus, dépenses, potentiel — une lecture objective de votre situation.", href: "/analyse-plex-gatineau", cta: "Recevoir mon analyse", highlight: true },
  { title: "Évaluation de la valeur", text: "Connaître la valeur marchande actuelle de votre plex — gratuit et confidentiel.", href: "/evaluation-gratuite-gatineau", cta: "Obtenir ma valeur" },
  { title: "Parler à Yanis", text: "Un appel pour discuter de votre situation d'investisseur — sans engagement.", href: "/contact-yanis", cta: "Réserver un appel" },
];

const faq = [
  { q: "Comment évaluer la valeur d'un plex?", a: "Revenus, état de l'immeuble, potentiel locatif et secteur. Après près de 9 ans en Outaouais, je connais bien les particularités des plex à Hull, Gatineau-centre et dans les autres secteurs." },
  { q: "Est-ce encore rentable d'acheter un plex à Gatineau?", a: "Ça dépend du secteur, du prix, des revenus et de votre stratégie. Hull, Gatineau-centre et certains coins d'Aylmer offrent encore de bonnes opportunités. On peut analyser ça ensemble." },
  { q: "Comment vendre un plex occupé?", a: "C'est faisable — coordination locataires, visites, documentation. Le processus québécois a ses règles spécifiques. Je vous accompagne à chaque étape." },
  { q: "Refinancer ou vendre?", a: "On compare les deux scénarios avec les taux actuels et la valeur marchande de votre secteur pour voir ce qui fait plus de sens." },
];

const PlexPage = () => (
   <>
    <PageMeta title="Investir dans un plex à Gatineau · Outaouais" description="Duplex, triplex et immeubles à revenus à Gatineau. Analyse de rendement et stratégie d'investissement par un courtier spécialisé." ogImage="https://yanisgauthier.com/og/og-plex.jpg" />
    <ServiceJsonLd name="Analyse et investissement plex à Gatineau" description="Service d'analyse et d'accompagnement pour l'achat, la vente ou l'évaluation de plex et immeubles à revenus à Gatineau et en Outaouais." url="/investir-plex-gatineau" serviceType="Real Estate Investment Analysis" />
    <HeroSection
      overline="Plex et investissement · Gatineau"
      title="Plex à Gatineau: acheter, vendre ou analyser"
      subtitle="Il faut regarder au-delà du prix affiché. Revenus, dépenses, état de l'immeuble, potentiel — chaque facteur compte dans la décision."
      primaryCta={{ label: "Analyse plex gratuite", href: "/analyse-plex-gatineau" }}
      secondaryCta={{ label: "Valeur de mon plex", href: "/evaluation-gratuite-gatineau" }}
      trustLine="Stratégie claire."
      heroBgImage={heroImg}
    />

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Contexte 2026" title="Investir dans un plex en Outaouais en 2026 — ce que vous devez savoir" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        Le marché des plexs en Outaouais reste actif en 2026. La demande locative pour les logements à prix abordables demeure soutenue, portée par une base d'emploi stable — fonctionnaires fédéraux, étudiants, professionnels.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Cela dit, le marché locatif a connu un rééquilibrage en 2025-2026 avec l'arrivée d'un nombre important de nouvelles constructions. Ce changement rend l'analyse de rendement encore plus critique avant tout achat&nbsp;: les vrais loyers en place, les vrais coûts d'entretien, le capex à prévoir, et la stratégie à long terme doivent tous être examinés honnêtement.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Je suis investisseur immobilier moi-même. Mon rôle n'est pas de vous convaincre d'acheter — c'est de vous donner l'analyse honnête pour que vous décidiez en toute connaissance de cause.
      </p>
      <p className="prose-body mt-4 p-4 rounded-md" style={{ background: "rgba(168,138,90,.08)", border: "1px solid rgba(168,138,90,.15)" }}>
        <strong>À noter&nbsp;:</strong> la recommandation de hausse de loyer du Tribunal administratif du logement (TAL) pour 2026 est de 3,1&nbsp;%. Il s'agit d'une recommandation officielle. <span className="italic text-xs text-muted-foreground">Source&nbsp;: gouvernement.qc.ca</span>
      </p>
      <p className="mt-4 text-xs text-muted-foreground italic">Sources&nbsp;: SCHL — Rapport sur le marché locatif 2025 · Chambre immobilière de l'Outaouais (CIO).</p>
      <div className="mt-6">
        <Button asChild><Link to="/contact-yanis">Analyser un plex avec moi →</Link></Button>
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
      href="/evaluation-gratuite-gatineau"
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
      text="Rendement, analyse de plex, stratégie d'acquisition et pièges à éviter — le guide essentiel pour investir à Gatineau."
      ctaLabel="Recevoir le guide investisseur"
    />

    <StickyGuideBanner guideType="investor_guide" label="Guide investisseur gratuit — recevez-le par courriel" />

    <ReviewSection
      overline="Témoignages investisseurs"
      title="Décisions éclairées, résultats concrets"
      reviews={getReviewsByCategory("plex").slice(0, 2)}
      columns={2}
    />

    <CTASection
      dark
      title="Recevez une lecture claire de votre situation"
      text="Vendre, acheter ou simplement comprendre votre position — je vous aide à y voir plus clair."
      buttons={[
        { label: "Analyse plex gratuite", href: "/analyse-plex-gatineau" },
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default PlexPage;
