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
  { name: "Définir son budget et sa capacité d'achat", text: "Calculez votre mise de fonds (au moins 5 % sur les premiers 500 000 $), votre capacité d'emprunt et les programmes d'aide offerts aux premiers acheteurs." },
  { name: "Choisir le bon secteur à Gatineau", text: "Comparez Aylmer, Hull, le Plateau, Buckingham et d'autres quartiers selon votre budget, trajet et style de vie." },
  { name: "Rechercher et visiter des propriétés", text: "Identifiez les propriétés qui correspondent à vos critères et visitez-les avec un courtier qui connaît le marché local." },
  { name: "Formuler une offre bien construite", text: "Rédigez une promesse d'achat adaptée au marché, avec des conditions d'inspection et de financement claires et des délais réalistes." },
  { name: "Faire l'inspection pré-achat", text: "Faites inspecter la propriété par un professionnel pour identifier les problèmes potentiels avant de finaliser." },
  { name: "Finaliser chez le notaire", text: "Le notaire vérifie les titres, prépare les documents et officialise la transaction. Demandez une soumission pour ses honoraires." },
];

const topics = [
  "Comprendre le processus d'achat au Québec",
  "Choisir le bon secteur à Gatineau ou en Outaouais pour votre profil",
  "Premier achat ou acheteur expérimenté : ce qui change",
  "Comment formuler une offre bien construite",
  "L'inspection : les points à vérifier",
  "Le rôle du notaire et les frais à prévoir",
];

const faq = [
  { q: "Combien faut-il comme mise de fonds?", a: "Pour une résidence ou un duplex que vous habitez, sous 1,5 M$ : 5 % sur les premiers 500 000 $ et 10 % sur l'excédent (SCHL). Un triplex ou un quadruplex occupé par le propriétaire demande au moins 10 %. À 1,5 M$ et plus, ou pour un immeuble locatif que vous n'habitez pas, prévoyez 20 % ou plus selon le prêteur. On en discute selon votre situation." },
  { q: "Est-ce mieux d'acheter à Gatineau qu'à Ottawa?", a: "Ça dépend de vos priorités. Comparez le prix, mais aussi les taxes municipales, les droits de mutation, l'impôt du Québec et le trajet. On fait ce calcul ensemble pour votre situation." },
  { q: "Combien de temps prend un achat?", a: "La durée de la recherche varie. Une fois acceptée, la promesse d'achat fixe le délai d'inspection, le délai de financement et la date de signature chez le notaire. On établit ces délais ensemble avant l'offre." },
  { q: "Quels sont les frais à prévoir?", a: "Prévoyez les honoraires du notaire (demandez une soumission), les droits de mutation (taxe de bienvenue) et l'inspection préachat. S'ajoutent les ajustements de taxes municipales et scolaires, et la taxe de 9 % sur la prime d'assurance prêt hypothécaire s'il y a lieu. Un premier acheteur peut récupérer une partie des droits de mutation grâce au crédit d'impôt remboursable de Revenu Québec, jusqu'à 5 875 $ selon les conditions. On revoit tout ça ensemble." },
];

const related = [
  { title: "Consultation acheteur", text: "Clarifiez vos critères et vos options.", href: "/consultation-acheteur/" },
  { title: "Premier achat", text: "Budget, mise de fonds et processus pour premiers acheteurs.", href: "/premier-achat-gatineau/" },
  { title: "Acheter depuis Ottawa", text: "Ce qu'il faut savoir avant de traverser la rivière.", href: "/acheter-a-gatineau-depuis-ottawa/" },
  { title: "Comparer les quartiers", text: "Trouvez le secteur qui vous correspond.", href: "/quartiers-a-considerer-a-gatineau/" },
];

const BuyerGuidePage = () => (
   <>
    <HowToJsonLd name="Comment acheter une propriété à Gatineau" description="Guide étape par étape pour acheter une propriété à Gatineau et en Outaouais : budget, recherche, offre, inspection et notaire." steps={buyerSteps} />
    <PageMeta title="Guide acheteur · Acheter à Gatineau" description="Guide complet pour acheter une propriété à Gatineau et en Outaouais. Processus québécois, budget, inspection et négociation : tout ce qu'il faut savoir." ogImage="https://yanisgauthier.com/og/og-buyer.jpg" />
    <HeroSection
      overline="Guide acheteur · Gatineau"
      title="Guide complet pour acheter à Gatineau et en Outaouais"
      subtitle="Les étapes pour trouver la bonne propriété et faire une offre bien construite, à Gatineau et partout en Outaouais."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur/" }}
      secondaryCta={{ label: "Comparer les secteurs", href: "/quartiers-a-considerer-a-gatineau/" }}
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
        Le processus d'achat au Québec a ses particularités : promesse d'achat, inspection, conditions et notaire. Que vous veniez d'Ottawa, de Montréal ou d'ailleurs, ce guide vous prépare à chaque étape.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous ne connaissez pas les secteurs de Gatineau? Comparez les principaux quartiers."
      buttonLabel="Voir les quartiers →"
      href="/quartiers-a-considerer-a-gatineau/"
    />

    <ContentBlock narrow>
      <SectionHeading title="Trouver le bon secteur" />
      <p className="prose-body mt-5">
        Aylmer, le Plateau, Hull, Buckingham : chaque secteur a ses avantages et ses compromis. Le bon choix dépend de votre budget, votre trajet, votre style de vie et vos priorités familiales.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/quartiers-a-considerer-a-gatineau/">Comparer les secteurs</Link>
      </Button>
    </ContentBlock>

    <GuideRequestForm
      avatar="acheteur"
      offer="guide_acheteur"
      guideTitle="Recevez le guide acheteur"
      headline="Recevez votre guide acheteur gratuit"
      subtitle="Un guide clair, étape par étape, pour acheter à Gatineau. Je vous l'envoie par courriel."
      submitLabel="Recevoir le guide acheteur"
      successTitle="Merci! Votre guide est en route."
      successText="Vérifiez votre boîte courriel. Le guide acheteur devrait y arriver sous peu."
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
      text="Le processus et le budget pour acheter à Gatineau, dans un guide envoyé par courriel."
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
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />
  
    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit, recevez-le par courriel" />
  </>
);

export default BuyerGuidePage;
