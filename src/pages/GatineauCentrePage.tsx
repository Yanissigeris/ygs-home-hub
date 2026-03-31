import PageMeta from "@/components/PageMeta";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import ImageTextSplit from "@/components/ImageTextSplit";
import InlineCTA from "@/components/InlineCTA";
import SectorLinks from "@/components/SectorLinks";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import { CheckCircle2, Users, Home, TrendingUp, Building2, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-gatineau-centre.webp";
import riverImg from "@/assets/gatineau-river-view.webp";

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Spécialiste Gatineau et environs" },
  { icon: Shield, label: "Accompagnement à votre rythme" },
];

const reasons = [
  "Quartier résidentiel bien établi avec tous les services",
  "Accès rapide aux autoroutes et au centre-ville",
  "Bonnes écoles et parcs familiaux",
  "Marché immobilier diversifié — maisons, jumelés, condos",
  "Prix compétitifs par rapport à Aylmer et Hull",
];

const profiles = [
  { icon: Users, title: "Familles", text: "Quartiers résidentiels calmes, écoles accessibles et parcs de proximité." },
  { icon: Home, title: "Premiers acheteurs", text: "Propriétés abordables dans un secteur bien desservi avec potentiel de revente." },
  { icon: Building2, title: "Investisseurs", text: "Plex et multi-logements à des prix encore accessibles avec bonne demande locative." },
  { icon: TrendingUp, title: "Acheteurs de revente", text: "Secteur stable avec une croissance constante et une forte demande." },
];

const faq = [
  { q: "Gatineau centre est-il un bon choix pour les familles?", a: "Oui — quartiers établis, écoles, parcs et services de proximité. C'est un secteur résidentiel classique et fiable." },
  { q: "Comment se comparent les prix à Gatineau centre vs Aylmer?", a: "Généralement plus accessibles qu'Aylmer, avec un bon choix de propriétés. Contactez-moi pour une analyse à jour." },
  { q: "Y a-t-il du potentiel d'investissement?", a: "Oui — bonne demande locative, plex disponibles à des prix raisonnables et secteur stable." },
];

const relatedSectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, nature" },
  { name: "Hull", href: "/hull", detail: "Urbain, culture, proximité Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Terrain, prix accessibles" },
];

const related = [
  { title: "Tous les quartiers", text: "Comparez les secteurs de Gatineau.", href: "/quartiers-a-considerer-a-gatineau" },
  { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau" },
  { title: "Consultation acheteur", text: "Clarifiez vos critères et vos options.", href: "/consultation-acheteur" },
  { title: "Investir en plex", text: "Analyse et stratégie d'investissement.", href: "/investir-plex-gatineau" },
];

const GatineauCentrePage = () => (
   <>
    <PageMeta title="Gatineau centre — Guide de quartier | YGS" description="Vivre, acheter ou investir à Gatineau centre. Quartier résidentiel établi, services complets, écoles et prix compétitifs en Outaouais." />
    <NeighborhoodJsonLd name="Gatineau" description="Courtier immobilier à Gatineau centre. Quartier résidentiel établi, services complets et prix compétitifs." lat={45.4765} lng={-75.7013} url="/gatineau" />
    <HeroSection
      overline="Guide de quartier · Gatineau"
      title="Vivre, acheter ou investir à Gatineau"
      subtitle="Quartier résidentiel bien établi, services complets et prix compétitifs — tout ce qu'il faut savoir sur le secteur de Gatineau."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Valeur de ma propriété", href: "/evaluation-gratuite-gatineau" }}
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <ImageTextSplit image={riverImg} imageAlt="Secteur Gatineau" imagePosition="right">
      <div className="label-overline">Le secteur</div>
      <h2 className="mt-3">Pourquoi choisir Gatineau</h2>
      <p className="prose-body mt-4">
        Le secteur Gatineau offre un bon équilibre entre accessibilité, services et prix. C'est un choix populaire pour les familles et les premiers acheteurs qui cherchent un quartier établi et bien desservi.
      </p>
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
      title="Gatineau est idéal pour…"
      items={profiles}
      background="alt"
    />

    <InlineCTA
      text="Vous êtes propriétaire à Gatineau? Découvrez combien vaut votre propriété."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <FAQSection title="Questions sur Gatineau centre" items={faq} />

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
      guideType="buyer_guide"
      headline="Guide acheteur gratuit — acheter à Gatineau"
      text="Processus, budget et conseils pour acheter dans le secteur — dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    <CTASection
      dark
      title="Acheteur, vendeur ou investisseur à Gatineau?"
      text="Je peux vous aider — que ce soit pour acheter, vendre ou analyser une propriété dans le secteur."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />
  
    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default GatineauCentrePage;
