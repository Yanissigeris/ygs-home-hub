import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import BenefitsList from "@/components/BenefitsList";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import SectorLinks from "@/components/SectorLinks";
import InlineCTA from "@/components/InlineCTA";
import heroImg from "@/assets/hero-relocation.jpg";

const topics = [
  "Comprendre le marché immobilier de Gatineau vs Ottawa et Montréal",
  "Choisir le bon secteur pour votre famille et votre budget",
  "Le processus d'achat et d'installation au Québec",
  "Écoles, services, transports — ce qu'il faut savoir",
  "Taxes, coût de la vie et avantages fiscaux",
  "Les erreurs à éviter lors d'une relocalisation",
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, accès Ottawa" },
  { name: "Hull", href: "/hull", detail: "Urbain, proche centre-ville, condos et plex" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Terrain, prix accessibles, nature" },
];

const faq = [
  { q: "Ce guide est-il gratuit?", a: "Oui. L'objectif est de vous donner une base solide pour planifier votre relocalisation en confiance." },
  { q: "Comment recevoir le guide complet?", a: "Contactez-moi directement — je vous envoie toutes les informations pertinentes pour votre situation." },
];

const RelocationGuidePage = () => (
  <>
    <HeroSection
      overline="Guide relocalisation · Gatineau"
      title="Guide complet pour s'installer à Gatineau"
      subtitle="Tout ce que vous devez savoir pour réussir votre relocalisation — secteurs, prix, processus, écoles et mode de vie."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis" }}
      secondaryCta={{ label: "Explorer les secteurs", href: "/plateau-aylmer" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      backgroundImage={heroImg}
    />

    <BenefitsList
      overline="Dans ce guide"
      title="Ce que vous allez apprendre"
      items={topics}
    />

    <ContentBlock narrow>
      <SectionHeading title="S'installer à Gatineau, ça se prépare" />
      <p className="prose-body mt-5">
        Que vous veniez d'Ottawa, de Montréal ou d'ailleurs au Canada, Gatineau offre une qualité de vie exceptionnelle — mais il faut connaître le terrain. Ce guide couvre tout ce que les nouveaux arrivants doivent savoir.
      </p>
    </ContentBlock>

    <SectorLinks
      overline="Secteurs populaires"
      title="Les quartiers à considérer"
      sectors={sectors}
      background="alt"
    />

    <InlineCTA
      text="Vous voulez un accompagnement personnalisé? Réservez un appel gratuit."
      buttonLabel="Réserver un appel →"
      href="/contact-yanis"
    />

    <CTASection
      dark
      title="Planifions votre installation"
      text="Réservez un appel gratuit — on clarifie vos options et vos prochaines étapes."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis" },
        { label: "Explorer les secteurs", href: "/plateau-aylmer", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default RelocationGuidePage;
