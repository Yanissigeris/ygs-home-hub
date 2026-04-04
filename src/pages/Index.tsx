import * as React from "react";
import PageMeta from "@/components/PageMeta";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";

import SocialProofStrip from "@/components/SocialProofStrip";
import PathwaySection from "@/components/PathwaySection";
import AboutSection from "@/components/AboutSection";
import SectorsSection from "@/components/SectorsSection";
import LocalSEOCluster from "@/components/LocalSEOCluster";
import GuideOffersSection from "@/components/GuideOffersSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "@/components/CTASection";
import HomeFAQTeaser from "@/components/HomeFAQTeaser";

import { getReviewsById } from "@/data/reviews";
const homepageReviews = getReviewsById(["s1", "b1", "r2", "p2", "s2", "b3"]);

const socialStatsFr = [
  { value: "~9 ans", label: "d'expérience" },
  { value: "5 ★", label: "avis Google + Facebook" },
  { value: "Hall of Fame", label: "RE/MAX" },
];

const socialTestimonialsFr = [
  { quote: "Yanis est très professionnel, respectueux, honnête, un être de confiance.", name: "Sylvie", location: "Gatineau" },
  { quote: "Il a fait en sorte que notre premier achat se fasse le plus smooth possible.", name: "Geneviève et Salah", location: "Aylmer" },
  { quote: "Excellente disponibilité, patient et honnête. Je le recommande fortement.", name: "Alexandre", location: "Aylmer" },
];

const Index = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <PageMeta title="Courtier immobilier Gatineau · Outaouais | YGS" description="Yanis Gauthier-Sigeris, courtier immobilier à Gatineau. Vendre, acheter ou investir à Aylmer, Hull ou Plateau — stratégie claire et accompagnement." />
    <HeroSection
      overline="GATINEAU · AYLMER · HULL · OUTAOUAIS"
      title="Votre courtier immobilier en Outaouais"
      subtitle="Stratégie claire, conseils basés sur les faits, et un accompagnement complet — pour vendre, acheter ou investir en toute confiance."
      primaryCta={{ label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      socialProof="Hall of Fame RE/MAX"
      heroVideo="/hero-video-compressed.mp4"
      heroVideoPoster="/hero-video-poster.webp"
      agentImage={yanisPortrait}
      agentImageSm={yanisPortraitSm}
      agentName="Yanis Gauthier-Sigeris"
    />

    <TrustStrip />

    <>
      <SocialProofStrip stats={socialStatsFr} />

      <PathwaySection />

      <hr className="section-divider" />

      <AboutSection />

      <hr className="section-divider" />

      <ReviewSection
        overline="Témoignages"
        title="Ce que disent mes clients"
        reviews={homepageReviews}
        columns={3}
        reviewsPageLabel="Voir tous les témoignages"
        reviewsPageHref="/temoignages"
      />

      <hr className="section-divider" />

      <SectorsSection />

      <hr className="section-divider" />

      <LocalSEOCluster
        overline="Services et secteurs"
        title="Secteurs et services les plus recherchés en Outaouais"
        links={[
          { label: "Courtier immobilier Outaouais", href: "/courtier-immobilier-outaouais", detail: "Hub régional complet" },
          { label: "Courtier immobilier Gatineau", href: "/gatineau", detail: "Centre, services, plex" },
          { label: "Courtier immobilier Hull", href: "/hull", detail: "Urbain, culture, condos" },
          { label: "Courtier immobilier Aylmer", href: "/aylmer", detail: "Lac, familles, bilingue" },
          { label: "Courtier immobilier Chelsea", href: "/chelsea", detail: "Nature, parc, tranquillité" },
          { label: "Courtier immobilier Cantley", href: "/cantley", detail: "Rural, grands terrains" },
          { label: "Évaluation maison Gatineau", href: "/evaluation-gratuite-gatineau", detail: "Gratuite et sans engagement" },
          { label: "Vendre maison Gatineau", href: "/vendre-ma-maison-gatineau", detail: "Stratégie et accompagnement" },
        ]}
      />

      <hr className="section-divider" />

      <GuideOffersSection background="alt" />

      <hr className="section-divider" />

      <HomeFAQTeaser
        title="Questions fréquentes"
        items={[
          { q: "Combien vaut ma maison à Gatineau?", a: "Je prépare une évaluation gratuite basée sur les comparables récents dans votre secteur — Aylmer, Hull, Plateau ou ailleurs en Outaouais. Vous recevez un rapport clair avec le prix de vente recommandé." },
          { q: "Comment choisir le bon courtier immobilier en Outaouais?", a: "Cherchez un courtier qui connaît votre secteur en profondeur, qui est transparent sur sa stratégie et qui vous donne les vrais chiffres. L'expérience locale, la disponibilité et l'approche humaine font toute la différence." },
          { q: "Quels sont les meilleurs quartiers pour acheter à Gatineau?", a: "Ça dépend de votre profil : Aylmer et le Plateau sont populaires auprès des familles, Hull attire les jeunes professionnels, et Chelsea ou Cantley séduisent ceux qui veulent la nature tout en restant proches de la ville." },
          { q: "Est-ce le bon moment pour vendre à Gatineau?", a: "Le marché immobilier en Outaouais reste actif. Une analyse de votre propriété permet de déterminer le meilleur timing et la stratégie de prix optimale pour maximiser votre résultat." },
        ]}
        linkHref="/faq"
        linkLabel="Voir toutes les questions"
      />

      <hr className="section-divider" />

      <CTASection
        dark
        overline="Première étape"
        title="Prenez la bonne première étape"
        text="Évaluation, consultation achat ou analyse plex — on commence là où vous êtes rendu."
        buttons={[
          { label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" },
          { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
        ]}
        trustLine="Je vous donne les chiffres et les options, vous décidez."
      />
    </>
  </div>
));

Index.displayName = "Index";

export default Index;
