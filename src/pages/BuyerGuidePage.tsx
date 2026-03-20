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
import heroImg from "@/assets/hero-buyer-guide.webp";

const topics = [
  "Comprendre le processus d'achat au Québec",
  "Choisir le bon secteur à Gatineau ou en Outaouais pour votre profil",
  "Premier achat vs acheteur expérimenté — ce qui change",
  "Comment formuler une offre solide",
  "L'inspection: ce qu'il faut vraiment vérifier",
  "Le rôle du notaire et les frais à prévoir",
];

const faq = [
  { q: "Combien faut-il comme mise de fonds?", a: "Minimum 5% pour une résidence principale. Pour un plex occupé, 5% aussi. Pour un investissement pur, 20%. On peut en discuter selon votre situation." },
  { q: "Est-ce mieux d'acheter à Gatineau qu'à Ottawa?", a: "Ça dépend de vos priorités. En général, les prix sont plus accessibles côté Gatineau, mais il faut aussi considérer les taxes et les services." },
  { q: "Combien de temps prend un achat?", a: "En général, 60 à 90 jours du début de la recherche à la prise de possession, mais ça peut varier selon le marché." },
  { q: "Quels sont les frais à prévoir?", a: "Notaire (environ 1 500$), taxe de bienvenue, assurance titre optionnelle, et inspection pré-achat. On revoit tout ça ensemble." },
];

const related = [
  { title: "Consultation acheteur", text: "Clarifiez vos critères et vos options.", href: "/consultation-acheteur" },
  { title: "Premier achat", text: "Budget, mise de fonds et processus pour premiers acheteurs.", href: "/premier-achat-gatineau" },
  { title: "Acheter depuis Ottawa", text: "Plus d'espace, prix accessibles — traverser la rivière.", href: "/acheter-a-gatineau-depuis-ottawa" },
  { title: "Explorer les quartiers", text: "Trouvez le secteur qui vous correspond.", href: "/quartiers-a-considerer-a-gatineau" },
];

const BuyerGuidePage = () => (
   <>
    <PageMeta title="Guide acheteur — Acheter à Gatineau" description="Guide complet pour acheter une propriété à Gatineau. Processus, budget, inspection et négociation — tout ce qu'il faut savoir." />
    <HeroSection
      overline="Guide acheteur · Gatineau"
      title="Guide complet pour acheter à Gatineau et l'Outaouais"
      subtitle="Tout ce que vous devez savoir pour trouver la bonne propriété, faire une offre solide et naviguer le processus d'achat à Gatineau et dans tout l'Outaouais."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Explorer les secteurs", href: "/quartiers-a-considerer-a-gatineau" }}
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
        Le processus d'achat au Québec a ses particularités — promesse d'achat, inspection, conditions, notaire. Que vous veniez d'Ottawa, de Montréal ou d'ailleurs, ce guide vous prépare à chaque étape.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous ne connaissez pas les secteurs de Gatineau? Explorez les quartiers populaires."
      buttonLabel="Voir les quartiers →"
      href="/quartiers-a-considerer-a-gatineau"
    />

    <ContentBlock narrow>
      <SectionHeading title="Trouver le bon secteur" />
      <p className="prose-body mt-5">
        Aylmer, le Plateau, Hull, Buckingham — chaque secteur a sa personnalité, ses avantages et ses compromis. Le bon choix dépend de votre budget, votre trajet, votre style de vie et vos priorités familiales.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/quartiers-a-considerer-a-gatineau">Explorer les secteurs</Link>
      </Button>
    </ContentBlock>

    <GuideRequestForm
      guideTitle="Recevez le guide acheteur"
      headline="Recevez votre guide acheteur gratuit"
      subtitle="Tout ce que vous devez savoir pour acheter à Gatineau — dans un guide clair, étape par étape, envoyé directement dans votre boîte courriel."
      submitLabel="Recevoir le guide acheteur"
      successTitle="Merci! Votre guide est en route."
      successText="Vérifiez votre boîte courriel — vous recevrez le guide acheteur dans les prochaines minutes."
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
      text="Tout pour acheter à Gatineau — processus, budget et conseils dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

<CTASection
      dark
      title="Prêt à commencer votre recherche?"
      text="Réservez une consultation gratuite — on clarifie vos critères et vos options."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur" },
        { label: "Voir les quartiers", href: "/quartiers-a-considerer-a-gatineau", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />
  
    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default BuyerGuidePage;
