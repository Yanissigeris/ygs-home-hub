import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import BenefitsList from "@/components/BenefitsList";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import GuideRequestForm from "@/components/GuideRequestForm";
import HowToJsonLd from "@/components/HowToJsonLd";
import heroImg from "@/assets/hero-buyer-guide.webp";

const buyerSteps = [
  { name: "Définir son budget et sa capacité d'achat", text: "Analysez votre mise de fonds (minimum 5%), votre capacité d'emprunt et les programmes d'aide disponibles au Québec." },
  { name: "Choisir le bon secteur à Gatineau", text: "Comparez Aylmer, Hull, le Plateau, Buckingham et d'autres quartiers selon votre budget, trajet et style de vie." },
  { name: "Rechercher et visiter des propriétés", text: "Identifiez les propriétés qui correspondent à vos critères et visitez-les avec un courtier qui connaît le marché local." },
  { name: "Formuler une offre solide", text: "Rédigez une promesse d'achat compétitive avec les bonnes conditions, inspection, financement et délais." },
  { name: "Faire l'inspection pré-achat", text: "Faites inspecter la propriété par un professionnel pour identifier les problèmes potentiels avant de finaliser." },
  { name: "Finaliser chez le notaire", text: "Le notaire vérifie les titres, prépare les documents et officialise la transaction. Demandez une soumission pour ses honoraires." },
];

const topics = [
  "Comprendre le processus d'achat au Québec",
  "Choisir le bon secteur à Gatineau ou en Outaouais pour votre profil",
  "Premier achat vs acheteur expérimenté, ce qui change",
  "Comment formuler une offre solide",
  "L'inspection: ce qu'il faut vraiment vérifier",
  "Le rôle du notaire et les frais à prévoir",
];

const faq = [
  { q: "Combien faut-il comme mise de fonds?", a: "Pour une résidence ou un duplex que vous habitez, sous 1,5 M$ : 5 % sur les premiers 500 000 $ et 10 % sur l'excédent (SCHL). Un triplex ou un quadruplex occupé par le propriétaire demande au moins 10 %. À 1,5 M$ et plus, ou pour un immeuble locatif que vous n'habitez pas, prévoyez 20 % ou plus selon le prêteur. On en discute selon votre situation." },
  { q: "Est-ce mieux d'acheter à Gatineau qu'à Ottawa?", a: "Ça dépend de vos priorités. En général, les prix sont plus accessibles côté Gatineau, mais il faut aussi considérer les taxes et les services." },
  { q: "Combien de temps prend un achat?", a: "En général, 60 à 90 jours du début de la recherche à la prise de possession, mais ça peut varier selon le marché." },
  { q: "Quels sont les frais à prévoir?", a: "Les honoraires du notaire (demandez une soumission), les droits de mutation (taxe de bienvenue), l'inspection préachat, les ajustements de taxes municipales et scolaires, et la taxe de 9 % sur la prime d'assurance prêt hypothécaire s'il y a lieu. Un premier acheteur peut récupérer une partie des droits de mutation avec le crédit d'impôt de Revenu Québec, jusqu'à 5 875 $ selon les conditions. On revoit tout ça ensemble." },
];

const related = [
  { title: "Consultation acheteur", text: "Clarifiez vos critères et vos options.", href: "/consultation-acheteur/" },
  { title: "Premier achat", text: "Budget, mise de fonds et processus pour premiers acheteurs.", href: "/premier-achat-gatineau/" },
  { title: "Acheter depuis Ottawa", text: "Plus d'espace, prix accessibles, traverser la rivière.", href: "/acheter-a-gatineau-depuis-ottawa/" },
  { title: "Explorer les quartiers", text: "Trouvez le secteur qui vous correspond.", href: "/quartiers-a-considerer-a-gatineau/" },
];

const BuyerGuidePage = () => (
   <>
    <HowToJsonLd name="Comment acheter une propriété à Gatineau" description="Guide étape par étape pour acheter une propriété à Gatineau et en Outaouais — budget, recherche, offre, inspection et notaire." steps={buyerSteps} totalTime="P90D" />
    <PageMeta title="Guide acheteur — Acheter à Gatineau" description="Guide complet pour acheter une propriété à Gatineau et en Outaouais. Processus québécois, budget, inspection et négociation — tout ce qu'il faut savoir." ogImage="https://yanisgauthier.com/og/og-buyer.jpg" />
    <HeroSection
      overline="Guide acheteur · Gatineau"
      title="Guide complet pour acheter à Gatineau et l'Outaouais"
      subtitle="Tout ce que vous devez savoir pour trouver la bonne propriété, faire une offre solide et naviguer le processus d'achat à Gatineau et dans tout l'Outaouais."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur/" }}
      secondaryCta={{ label: "Explorer les secteurs", href: "/quartiers-a-considerer-a-gatineau/" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      heroBgImage={heroImg}
    />

    <BenefitsList
      overline="Dans ce guide"
      title="Ce que vous allez apprendre"
      items={topics}
    />

    <ContentBlock narrow>
      <SectionHeading title="Acheter à Gatineau, c'est différent" />
      <p className="prose-body mt-5">
        Le processus d'achat au Québec a ses particularités, promesse d'achat, inspection, conditions, notaire. Que vous veniez d'Ottawa, de Montréal ou d'ailleurs, ce guide vous prépare à chaque étape.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous ne connaissez pas les secteurs de Gatineau? Explorez les quartiers populaires."
      buttonLabel="Voir les quartiers →"
      href="/quartiers-a-considerer-a-gatineau/"
    />

    <ContentBlock narrow>
      <SectionHeading title="Trouver le bon secteur" />
      <p className="prose-body mt-5">
        Aylmer, le Plateau, Hull, Buckingham, chaque secteur a sa personnalité, ses avantages et ses compromis. Le bon choix dépend de votre budget, votre trajet, votre style de vie et vos priorités familiales.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/quartiers-a-considerer-a-gatineau/">Explorer les secteurs</Link>
      </Button>
    </ContentBlock>

    <GuideRequestForm
      avatar="acheteur"
      offer="guide_acheteur"
      guideTitle="Recevez le guide acheteur"
      headline="Recevez votre guide acheteur gratuit"
      subtitle="Tout ce que vous devez savoir pour acheter à Gatineau — dans un guide clair, étape par étape, envoyé directement dans votre boîte courriel."
      submitLabel="Recevoir le guide acheteur"
      successTitle="Merci! Votre guide est en route."
      successText="Vérifiez votre boîte courriel, vous recevrez le guide acheteur dans les prochaines minutes."
    />

    <FAQSection items={faq} />

    <RelatedPages
      title="Pages connexes pour acheteurs"
      pages={related}
      background="alt"
    />

        <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit"
      text="Tout pour acheter à Gatineau, processus, budget et conseils dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

<CTASection
      dark
      title="Prêt à commencer votre recherche?"
      text="Réservez une consultation gratuite, on clarifie vos critères et vos options."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur/" },
        { label: "Voir les quartiers", href: "/quartiers-a-considerer-a-gatineau/", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />
  
    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit, recevez-le par courriel" />
  </>
);

export default BuyerGuidePage;
