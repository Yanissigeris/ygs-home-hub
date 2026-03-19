import PageMeta from "@/components/PageMeta";
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
import { CheckCircle2, Users, Home, MapPin, Coffee, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-aylmer.webp";
import lifestyleImg from "@/assets/plateau-aylmer-lifestyle.webp";

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Spécialiste Aylmer et environs" },
  { icon: Shield, label: "Accompagnement sans pression" },
];

const reasons = [
  "Quartiers familiaux avec accès au lac Deschênes",
  "Proximité du parc de la Gatineau et des sentiers",
  "Écoles réputées et services bilingues",
  "Communauté établie avec charme de petite ville",
  "Accès rapide à Ottawa par le pont Champlain",
];

const profiles = [
  { icon: Users, title: "Familles établies", text: "Quartiers matures, grandes propriétés et communauté soudée." },
  { icon: Home, title: "Acheteurs de revente", text: "Propriétés avec caractère et potentiel de rénovation dans un secteur prisé." },
  { icon: MapPin, title: "Amateurs de nature", text: "Lac Deschênes, parc de la Gatineau et sentiers à deux pas." },
  { icon: Coffee, title: "Vie de quartier", text: "Restaurants, cafés, boutiques et marché local à distance de marche." },
];

const faq = [
  { q: "Quel est le prix moyen d'une maison à Aylmer?", a: "Ça varie selon le quartier et le type de propriété. Contactez-moi pour une analyse à jour basée sur les ventes récentes." },
  { q: "Aylmer est-il bon pour les familles?", a: "Absolument. Écoles bilingues, parcs, lac, communauté soudée — c'est l'un des meilleurs secteurs familiaux de l'Outaouais." },
  { q: "Combien de temps pour se rendre à Ottawa depuis Aylmer?", a: "15-25 minutes en voiture selon l'heure. Accès par le pont Champlain et les pistes cyclables." },
];

const relatedSectors = [
  { name: "Plateau", href: "/plateau", detail: "Développements récents, familles" },
  { name: "Hull", href: "/hull", detail: "Urbain, culture, condos" },
  { name: "Gatineau", href: "/gatineau", detail: "Résidentiel, services, accessible" },
];

const related = [
  { title: "Vivre à Aylmer — le guide", text: "Mode de vie, lac, communauté et tout ce qu'il faut savoir.", href: "/vivre-a-aylmer" },
  { title: "Guide acheteur", text: "Le processus d'achat au Québec, étape par étape.", href: "/guide-acheteur-gatineau" },
  { title: "Premier achat", text: "Budget, mise de fonds et conseils pour premiers acheteurs.", href: "/premier-achat-gatineau" },
  { title: "Évaluation gratuite", text: "Combien vaut votre propriété à Aylmer?", href: "/evaluation-gratuite-gatineau" },
];

const AylmerPage = () => (
   <>
    <PageMeta title="Aylmer — Guide de quartier Gatineau" description="Vivre, acheter ou vendre à Aylmer. Lac Deschênes, parcs, écoles et communauté — guide complet par un courtier local." />
    <HeroSection
      overline="Guide de quartier · Aylmer"
      title="Vivre, acheter ou vendre à Aylmer"
      subtitle="Lac Deschênes, parcs, écoles et communauté — Aylmer offre un cadre de vie exceptionnel à deux pas d'Ottawa."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Valeur de ma propriété", href: "/evaluation-gratuite-gatineau" }}
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <ImageTextSplit image={lifestyleImg} imageAlt="Vie à Aylmer, Gatineau" imagePosition="right">
      <div className="label-overline">Le secteur</div>
      <h2 className="mt-3">Pourquoi Aylmer est si populaire</h2>
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
      title="Aylmer est idéal pour…"
      items={profiles}
      background="alt"
    />

    <InlineCTA
      text="Vous êtes propriétaire à Aylmer? Découvrez combien vaut votre propriété."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <FAQSection title="Questions sur Aylmer" items={faq} />

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
      headline="Guide acheteur gratuit — acheter à Aylmer"
      text="Processus, budget et conseils pour acheter dans le secteur — dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    <CTASection
      dark
      title="Acheteur ou vendeur à Aylmer?"
      text="Je connais Aylmer par cœur — parlons de votre projet."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />
  
    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default AylmerPage;
