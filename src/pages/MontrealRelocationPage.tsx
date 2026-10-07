import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import SectorLinks from "@/components/SectorLinks";
import InlineCTA from "@/components/InlineCTA";
import { MapPin, DollarSign, Home, FileText, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-montreal-relocation.webp";

const challenges = [
{ icon: MapPin, title: "Les prix des deux marchés", text: "Les prix et la taxe de bienvenue varient d'une ville à l'autre. Je vous donne les chiffres de Gatineau par secteur pour comparer avec votre marché actuel." },
{ icon: DollarSign, title: "L'espace pour votre budget", text: "Selon le secteur, le même budget peut vous donner plus d'espace ou de terrain à Gatineau. Je vous montre les comparables pour le vérifier." },
{ icon: Home, title: "Quartiers familiaux", text: "Aylmer, le Plateau et d'autres secteurs comptent surtout des quartiers résidentiels, avec écoles et parcs à proximité." },
{ icon: FileText, title: "Le même processus", text: "Vous restez au Québec, donc la promesse d'achat et la signature chez le notaire suivent les mêmes règles qu'à Montréal." }];


const sectors = [
{ name: "Plateau / Aylmer", href: "/plateau-aylmer/", detail: "Quartiers familiaux et maisons récentes, à environ 9 à 14 km du centre-ville d'Ottawa" },
{ name: "Hull", href: "/hull/", detail: "Milieu urbain avec condos et plex, à environ 2 km du centre-ville d'Ottawa" },
{ name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers/", detail: "Prix médian unifamilial le plus bas des 4 secteurs de la ville (APCIQ, T2 2026) et accès à la nature" }];




const MontrealRelocationPage = () =>
<>
    <PageMeta title="Relocalisation Montréal vers Gatineau" description="Déménager de Montréal à Gatineau? Coût de la vie, quartiers (Aylmer, Hull, Plateau), qualité de vie et accompagnement immobilier en Outaouais." ogImage="https://yanisgauthier.com/og/og-reloc.jpg" />
    <ServiceJsonLd name="Relocalisation Montréal vers Gatineau" description="Accompagnement pour déménager de Montréal à Gatineau : quartiers, prix par secteur, promesse d'achat et notaire en Outaouais." url="/relocalisation-montreal-gatineau/" serviceType="Real Estate Relocation Service" />
    <HeroSection
    overline="Relocalisation · Montréal → Gatineau"
    title="S'installer à Gatineau depuis Montréal"
    subtitle="Vous quittez Montréal pour l'Outaouais? Je vous aide à comparer les secteurs et les prix de Gatineau avant d'acheter."
    primaryCta={{ label: "Réserver un appel", href: "/contact-yanis/" }}
    secondaryCta={{ label: "Voir les secteurs", href: "#secteurs" }}
    trustLine="Spécialiste en relocalisation."
    heroBgImage={heroImg} />
<CardGrid
    overline="Avant de partir"
    title="Comparer Gatineau et Montréal"
    items={challenges} />
  

    <InlineCTA
    text="Vous voulez savoir ce que votre budget permet à Gatineau? On regarde les secteurs et les prix ensemble."
    buttonLabel="Réserver un appel →"
    href="/contact-yanis/" />
  

    <SectorLinks
    id="secteurs"
    overline="Quelques secteurs"
    title="Les quartiers à considérer"
    sectors={sectors}
    background="alt" />
  

    <ContentBlock narrow>
      <SectionHeading title="Un courtier local qui comprend votre situation" />
      <p className="prose-body mt-5">La transition de Montréal à Gatineau est plus simple qu'on le pense : même province, même processus notarié. Mon rôle est de vous présenter les secteurs qui correspondent à vos critères et de vous accompagner à chaque étape.

    </p>
    </ContentBlock>

    <GuideInlineCTA
    guideType="relocation_guide"
    headline="Guide relocalisation gratuit"
    text="Ce qu'il faut savoir pour s'installer à Gatineau depuis Montréal : secteurs, prix, processus et écoles."
    ctaLabel="Recevoir le guide" />
  

    <CTASection
    dark
    title="Parlons de votre projet à Gatineau"
    text="Réservez un appel gratuit. On regarde ensemble les secteurs et les options."
    buttons={[
    { label: "Réserver un appel", href: "/contact-yanis/" },
    { label: "Voir Plateau / Aylmer", href: "/plateau-aylmer/", variant: "outline" }]
    }
    trustLine="Je vous donne les chiffres et les options, vous décidez." />
  
  
    <StickyGuideBanner guideType="relocation_guide" label="Guide relocalisation gratuit, recevez-le par courriel" />
  </>;


export default MontrealRelocationPage;