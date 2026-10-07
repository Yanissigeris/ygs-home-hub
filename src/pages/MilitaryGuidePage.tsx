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
import heroImg from "@/assets/hero-military-guide.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const topics = [
  "Comprendre les réalités immobilières d'une mutation",
  "Acheter ou louer lors d'une relocalisation militaire",
  "Les secteurs de Gatineau à considérer pour les familles militaires",
  "Le processus d'achat au Québec, étape par étape",
  "Vendre rapidement lors d'une mutation sans sacrifier le prix",
  "Programmes et ressources disponibles pour les militaires",
];

const faq = [
  { q: "Ce guide est-il gratuit?", a: "Oui. Il vous aide à planifier votre relocalisation étape par étape." },
  { q: "Travaillez-vous avec les dossiers SIRVA et BGRS?", a: "Oui. Depuis le 1er avril 2026, la réinstallation des FAC suit la Directive sur la réinstallation des Forces armées canadiennes (DRFAC). SIRVA gère les dossiers autorisés à compter du 6 janvier 2026, et BGRS, ceux autorisés avant. Je m'adapte aux étapes et aux délais de votre dossier." },
  { q: "Faut-il acheter ou louer lors d'une mutation?", a: "Ça dépend de la durée de votre affectation et de votre situation financière. On en discute ensemble." },
  { q: "Quels secteurs recommandez-vous aux familles militaires?", a: "Ça dépend de votre lieu de travail. Pour le campus Carling, dans l'ouest d'Ottawa, Aylmer et le Plateau sont pratiques grâce au pont Champlain. Le centre de Hull est à environ 2 km du centre-ville d'Ottawa, par le pont du Portage. On compare les secteurs selon vos priorités familiales." },
];

const related = [
  { title: "Relocalisation militaire", text: "Mutation vers la RCN? Trouvez la bonne propriété rapidement.", href: "/relocalisation-militaire-gatineau/" },
  { title: "Acheter comme militaire", text: "Accompagnement adapté aux contraintes de mutation.", href: "/acheter-comme-militaire-gatineau/" },
  { title: "Vendre lors d'une mutation", text: "Vendre rapidement sans sacrifier le prix.", href: "/vendre-lors-dune-mutation-gatineau/" },
  { title: "Voir les quartiers", text: "Trouvez le secteur qui correspond à vos priorités.", href: "/quartiers-a-considerer-a-gatineau/" },
];

const MilitaryGuidePage = () => (
   <>
    <PageMeta title="Guide militaire : immobilier à Gatineau" description="Guide immobilier pour militaires FAC à Gatineau. BGRS, SIRVA, quartiers recommandés (Aylmer, Plateau, Hull) et conseils pratiques." ogImage="https://yanisgauthier.com/og/og-military.jpg" />
    <HeroSection
      overline="Guide militaire · Gatineau"
      title="Guide immobilier pour militaires à Gatineau"
      subtitle="Mutation vers la RCN? Tout ce que vous devez savoir pour acheter, vendre ou vous installer à Gatineau en tant que militaire."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis/" }}
      secondaryCta={{ label: "Voir le service militaire", href: "/militaire-gatineau/" }}
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
          <p className="text-sm text-muted-foreground">Dossiers SIRVA et BGRS acceptés</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" width={200} height={36} className="h-10 w-auto object-contain" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading title="Les mutations, ça se planifie" />
      <p className="prose-body mt-5">
        Une mutation ne suit pas le calendrier immobilier normal. Il faut un courtier qui comprend vos contraintes de temps et les programmes de réinstallation. Ce guide couvre les grandes étapes.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous devez vendre avant d'acheter? Commencez par connaître la valeur de votre propriété."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau/"
    />

    <GuideInlineCTA
      guideType="relocation_guide"
      headline="Recevez le guide relocalisation militaire"
      text="Achat ou vente lors d'une mutation : tout dans un guide clair, envoyé gratuitement par courriel."
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
      text="Réservez un appel gratuit. On adapte le plan à votre mutation et à votre calendrier."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis/" },
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/", variant: "outline" },
      ]}
      trustLine="Je m'adapte à votre rythme. Vous décidez quand vous êtes prêt."
    />
  
    <StickyGuideBanner guideType="relocation_guide" label="Guide relocalisation militaire gratuit, recevez-le par courriel" />
  </>
);

export default MilitaryGuidePage;
