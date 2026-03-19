import PageMeta from "@/components/PageMeta";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import BenefitsList from "@/components/BenefitsList";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import heroImg from "@/assets/hero-military-guide.jpg";
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
  { q: "Travaillez-vous avec les programmes IRP/BGRS?", a: "Je connais les réalités de ces programmes et je m'adapte aux contraintes et délais qu'ils imposent." },
  { q: "Faut-il acheter ou louer lors d'une mutation?", a: "Ça dépend de la durée de votre affectation et de votre situation financière. On en discute ensemble." },
  { q: "Quels secteurs recommandez-vous aux familles militaires?", a: "Aylmer et le Plateau sont très populaires — écoles, familles, nature. Hull est bien aussi pour la proximité au centre." },
];

const related = [
  { title: "Relocalisation militaire", text: "Mutation vers la NCR — trouvez la bonne propriété rapidement.", href: "/relocalisation-militaire-gatineau" },
  { title: "Acheter comme militaire", text: "Accompagnement adapté aux contraintes de mutation.", href: "/acheter-comme-militaire-gatineau" },
  { title: "Vendre lors d'une mutation", text: "Vendre rapidement sans sacrifier le prix.", href: "/vendre-lors-dune-mutation-gatineau" },
  { title: "Explorer les quartiers", text: "Trouvez le secteur qui correspond à vos priorités.", href: "/quartiers-a-considerer-a-gatineau" },
];

const MilitaryGuidePage = () => (
   <>
    <PageMeta title="Guide militaire — Immobilier à Gatineau" description="Guide immobilier pour militaires à Gatineau. BGRS, SIRVA, base Uplands, quartiers recommandés et conseils pratiques." />
    <HeroSection
      overline="Guide militaire · Gatineau"
      title="Guide immobilier pour militaires à Gatineau"
      subtitle="Mutation vers la NCR? Tout ce que vous devez savoir pour acheter, vendre ou vous installer à Gatineau en tant que militaire."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis" }}
      secondaryCta={{ label: "Voir le service militaire", href: "/militaire-gatineau" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      heroBgImage={heroImg}
    />

    <BenefitsList
      overline="Dans ce guide"
      title="Ce que vous allez apprendre"
      items={topics}
    />

    <section className="py-8 bg-card border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">Partenaire des programmes</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" className="h-10 w-auto object-contain" />
        </div>
      </div>
    </section>

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

    <GuideInlineCTA
      guideType="relocation_guide"
      headline="Recevez le guide relocalisation militaire"
      text="Mutation, achat, vente — tout dans un guide clair envoyé gratuitement par courriel."
      ctaLabel="Recevoir le guide"
    />

    <FAQSection items={faq} />

    <RelatedPages
      title="Pages connexes pour militaires"
      pages={related}
      background="alt"
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
  </>
);

export default MilitaryGuidePage;
