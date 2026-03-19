import PageMeta from "@/components/PageMeta";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import ImageTextSplit from "@/components/ImageTextSplit";
import InlineCTA from "@/components/InlineCTA";
import SectorLinks from "@/components/SectorLinks";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import { CheckCircle2, Users, Home, TrendingUp, Building2, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-hull.webp";
import riverImg from "@/assets/gatineau-river-view.jpg";

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Spécialiste Hull et secteur urbain" },
  { icon: Shield, label: "Accompagnement sans pression" },
];

const reasons = [
  "Centre-ville animé avec restaurants, culture et vie de quartier",
  "Proximité immédiate du centre-ville d'Ottawa via les ponts",
  "Condos, plex et maisons à prix compétitifs",
  "Secteur en revitalisation avec potentiel de plus-value",
  "Transports en commun et pistes cyclables bien développés",
];

const profiles = [
  { icon: Users, title: "Jeunes professionnels", text: "Vie urbaine, proximité Ottawa, accès rapide aux services et à la culture." },
  { icon: Building2, title: "Investisseurs plex", text: "Bonne densité locative, demande constante, prix d'entrée encore accessibles." },
  { icon: Home, title: "Premiers acheteurs", text: "Condos et propriétés abordables dans un secteur central et bien desservi." },
  { icon: TrendingUp, title: "Acheteurs de revente", text: "Secteur en transformation — potentiel de plus-value intéressant à moyen terme." },
];

const sellerReasons = [
  "Le marché de Hull attire de plus en plus d'acheteurs",
  "La revitalisation du secteur augmente l'intérêt",
  "Forte demande pour les plex et condos bien situés",
  "C'est peut-être le meilleur moment pour maximiser votre prix",
];

const faq = [
  { q: "Hull est-il un bon secteur pour investir?", a: "Oui — prix d'entrée encore accessibles, forte demande locative et revitalisation en cours. Demandez une analyse plex pour les détails." },
  { q: "Quel est le prix moyen d'un condo à Hull?", a: "Ça varie beaucoup selon l'emplacement et l'état. Contactez-moi pour une analyse à jour." },
  { q: "Hull est-il sécuritaire?", a: "Hull vit une renaissance — de nouveaux projets, restaurants et communauté dynamique. Le secteur s'améliore d'année en année." },
];

const relatedSectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, accès Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Terrain, prix accessibles, nature" },
];

const related = [
  { title: "Vivre à Hull — le guide", text: "Culture, restaurants, proximité Ottawa.", href: "/vivre-a-hull" },
  { title: "Investir en plex", text: "Analyse et stratégie pour les plex à Gatineau.", href: "/investir-plex-gatineau" },
  { title: "Analyse plex gratuite", text: "Revenus, dépenses et rendement de votre plex.", href: "/analyse-plex-gatineau" },
  { title: "Évaluation gratuite", text: "Combien vaut votre propriété à Hull?", href: "/evaluation-gratuite-gatineau" },
];

const HullPage = () => (
   <>
    <PageMeta title="Hull — Guide de quartier Gatineau" description="Vivre, acheter ou investir à Hull. Quartier urbain, condos, plex, culture et proximité Ottawa. Guide complet." />
    <HeroSection
      overline="Guide de quartier · Hull"
      title="Vivre, acheter ou investir à Hull"
      subtitle="Centre-ville, vie urbaine, proximité Ottawa et potentiel locatif — ce qu'il faut savoir pour acheter ou vendre dans le secteur."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Valeur de ma propriété", href: "/evaluation-gratuite-gatineau" }}
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <ImageTextSplit image={riverImg} imageAlt="Vue du secteur Hull, Gatineau" imagePosition="right">
      <SectionHeading
        overline="Le secteur"
        title="Pourquoi Hull attire de plus en plus"
        subtitle="Jeunes professionnels, investisseurs et premiers acheteurs redécouvrent Hull pour son énergie urbaine, sa proximité à Ottawa et ses prix encore accessibles."
      />
      <div className="mt-7 space-y-3.5">
        {reasons.map((r) => (
          <div key={r} className="flex items-center gap-3">
            <CheckCircle2 size={16} className="shrink-0 text-accent" />
            <span className="text-[0.9375rem] text-foreground">{r}</span>
          </div>
        ))}
      </div>
    </ImageTextSplit>

    <CardGrid
      overline="Pour qui"
      title="Hull est idéal pour…"
      items={profiles}
      background="alt"
    />

    <InlineCTA
      text="Vous cherchez un plex à Hull? Demandez une analyse de rendement avant d'acheter."
      buttonLabel="Recevoir une analyse plex →"
      href="/analyse-plex-gatineau"
    />

    <ImageTextSplit image={heroImg} imageAlt="Quartier Hull, Gatineau" imagePosition="left">
      <SectionHeading
        overline="Vendeurs du secteur"
        title="Vous êtes propriétaire à Hull?"
        subtitle="La demande pour Hull augmente. C'est peut-être le bon moment de voir ce que votre propriété vaut."
      />
      <div className="mt-7 space-y-3.5">
        {sellerReasons.map((r) => (
          <div key={r} className="flex items-center gap-3">
            <CheckCircle2 size={16} className="shrink-0 text-accent" />
            <span className="text-[0.9375rem] text-muted-foreground">{r}</span>
          </div>
        ))}
      </div>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/evaluation-gratuite-gatineau">Obtenir ma valeur</Link>
      </Button>
    </ImageTextSplit>

    <FAQSection title="Questions sur Hull" items={faq} />

    <SectorLinks
      overline="Autres secteurs"
      title="Explorer d'autres quartiers"
      sectors={relatedSectors}
    />

    <RelatedPages
      title="À lire aussi"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="investor_guide"
      headline="Guide investisseur gratuit — plex à Hull"
      text="Rendement, fiscalité et stratégie d'investissement — dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide investisseur"
    />

    <CTASection
      dark
      title="Acheteur, vendeur ou investisseur à Hull?"
      text="Je peux vous aider à y voir clair — que ce soit pour acheter, vendre ou analyser un plex dans le secteur."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />
  
    <StickyGuideBanner guideType="investor_guide" label="Guide investisseur gratuit — recevez-le par courriel" />
  </>
);

export default HullPage;
