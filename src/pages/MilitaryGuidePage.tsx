import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import BenefitsList from "@/components/BenefitsList";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import InlineCTA from "@/components/InlineCTA";
import heroImg from "@/assets/hero-gatineau.jpg";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.png";

const topics = [
  "Comprendre les réalités d'une mutation immobilière",
  "Acheter vs louer lors d'une relocalisation militaire",
  "Les meilleurs secteurs de Gatineau pour les familles militaires",
  "Le processus d'achat au Québec — étape par étape",
  "Vendre rapidement lors d'une mutation sans sacrifier le prix",
  "Programmes et ressources disponibles pour les militaires",
];

const faq = [
  { q: "Ce guide est-il gratuit?", a: "Oui. Mon objectif est de vous aider à planifier votre relocalisation en confiance." },
  { q: "Comment recevoir le guide complet?", a: "Contactez-moi — je vous envoie les informations pertinentes pour votre situation militaire." },
];

const MilitaryGuidePage = () => (
  <>
    <HeroSection
      overline="Guide militaire · Gatineau"
      title="Guide immobilier pour militaires à Gatineau"
      subtitle="Mutation vers la NCR? Tout ce que vous devez savoir pour acheter, vendre ou vous installer à Gatineau en tant que militaire."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis" }}
      secondaryCta={{ label: "Voir le service militaire", href: "/militaire-gatineau" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      backgroundImage={heroImg}
    />

    <BenefitsList
      overline="Dans ce guide"
      title="Ce que vous allez apprendre"
      items={topics}
    />

    <ContentBlock narrow>
      <SectionHeading title="Les mutations, ça se planifie" />
      <p className="prose-body mt-5">
        Une mutation ne suit pas le calendrier immobilier normal. Il faut un courtier qui comprend vos contraintes de temps, votre réalité familiale et les programmes disponibles. Ce guide couvre les essentiels.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous devez vendre avant d'acheter? Commencez par connaître la valeur de votre propriété."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <CTASection
      dark
      title="Planifions votre relocalisation militaire"
      text="Réservez un appel gratuit — on adapte le plan à votre mutation et votre calendrier."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis" },
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Zéro pression — je m'adapte à votre rythme."
    />

    <FAQSection items={faq} />
  </>
);

export default MilitaryGuidePage;
