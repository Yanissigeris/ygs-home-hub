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
import heroImg from "@/assets/hero-seller-guide.webp";

const sellerSteps = [
  { name: "Obtenir une évaluation de votre propriété", text: "Faites évaluer votre propriété par un courtier local pour fixer un prix compétitif basé sur le marché de Gatineau." },
  { name: "Préparer la propriété pour la vente", text: "Repérez les améliorations qui rapportent sans surinvestir, puis soignez le ménage et la mise en valeur avant les photos." },
  { name: "Mettre en marché avec la bonne stratégie", text: "Des photos professionnelles et une description soignée, diffusées sur les plateformes où vos acheteurs cherchent." },
  { name: "Gérer les visites et les offres", text: "Planifiez les visites avec soin et évaluez chaque offre selon vos objectifs, le prix, les conditions et les délais." },
  { name: "Négocier et accepter une offre", text: "Protégez votre prix avec une stratégie de négociation préparée d'avance, puis acceptez l'offre qui correspond à vos critères." },
  { name: "Finaliser la vente chez le notaire", text: "Le notaire prépare l'acte de vente et gère le transfert de propriété. La transaction est officialisée." },
];

const topics = [
  "Comment fixer le bon prix de vente à Gatineau",
  "Les erreurs qui font perdre des milliers de dollars",
  "Préparer sa propriété sans trop investir",
  "Le processus de vente étape par étape au Québec",
  "Négociation : protéger votre prix avec la bonne stratégie",
  "Coordination vente-achat : éviter d'être coincé",
];

const faq = [
  { q: "Quand est-ce le meilleur moment pour vendre à Gatineau?", a: "Ça dépend de votre situation personnelle, pas seulement du marché. On détermine ensemble le bon moment pour vous." },
  { q: "Combien coûte un courtier immobilier?", a: "La commission est convenue ensemble avant de commencer. Vous connaissez le montant et les conditions avant de signer quoi que ce soit." },
  { q: "Faut-il faire des rénovations avant de vendre?", a: "Pas nécessairement. Je vous aide à repérer ce qui vaut la peine pour vendre plus cher, sans gaspiller." },
  { q: "Combien de temps pour vendre à Gatineau?", a: "Au 2e trimestre 2026, une unifamiliale s'est vendue en 27 jours en moyenne dans la région métropolitaine de Gatineau, et une copropriété en 40 jours (APCIQ, données Centris). Ça varie selon le prix demandé et le secteur." },
];

const related = [
  { title: "Évaluation gratuite", text: "Combien vaut votre propriété? Recevez une réponse personnalisée.", href: "/evaluation-gratuite-gatineau/" },
  { title: "Plan vendeur", text: "Recevez un plan personnalisé : prix, préparation et mise en marché.", href: "/plan-vendeur-gatineau/" },
  { title: "Quand vendre", text: "Le bon moment dépend de votre situation. Quelques repères pour y voir clair.", href: "/quand-vendre-a-gatineau/" },
  { title: "Vendre un plex", text: "Vendre un immeuble à revenus, c'est différent d'une maison.", href: "/vendre-un-plex-a-gatineau/" },
];

const SellerGuidePage = () => (
   <>
    <HowToJsonLd name="Comment vendre une propriété à Gatineau" description="Guide étape par étape pour vendre votre propriété à Gatineau : prix, préparation, mise en marché et négociation." steps={sellerSteps} />
    <PageMeta title="Guide vendeur : vendre à Gatineau" description="Guide pour vendre votre propriété à Gatineau. Prix, préparation, mise en marché et négociation par un courtier local." ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <HeroSection
      overline="Guide vendeur · Gatineau"
      title="Guide complet pour vendre votre propriété à Gatineau"
      subtitle="Tout ce que vous devez savoir pour vendre au bon prix."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }}
      secondaryCta={{ label: "Recevoir mon plan vendeur", href: "/plan-vendeur-gatineau/" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      heroBgImage={heroImg}
    />

    <BenefitsList
      overline="Dans ce guide"
      title="Ce que vous allez apprendre"
      items={topics}
    />

    <ContentBlock narrow>
      <SectionHeading title="Vendre, ça se prépare" />
      <p className="prose-body mt-5">
        La différence entre une vente stressante et une vente réussie, c'est la préparation. Ce guide couvre les étapes qui comptent pour vendre au bon prix à Gatineau, du positionnement prix à la négociation finale.
      </p>
      <p className="prose-body mt-4">
        J'aide des vendeurs en Outaouais depuis 2017, et j'ai vu ce qui fonctionne comme ce qui fait perdre de l'argent. Les principales leçons sont résumées ici.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous voulez une analyse personnalisée? Demandez votre évaluation gratuite."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau/"
    />

    <ContentBlock narrow>
      <SectionHeading title="Tout part du bon prix" />
      <p className="prose-body mt-5">
        Surévaluer = rester sur le marché trop longtemps. Sous-évaluer = laisser de l'argent sur la table. Le bon prix part des ventes comparables récentes, ajustées selon l'état de votre propriété et le rythme de votre secteur.
      </p>
    </ContentBlock>

    <ContentBlock narrow>
      <SectionHeading title="Préparer sans se ruiner" />
      <p className="prose-body mt-5">
        Certains investissements rapportent, comme une peinture neutre ou un bon désencombrement. D'autres sont de l'argent gaspillé. Je vous aide à faire le tri pour investir seulement là où ça compte.
      </p>
    </ContentBlock>

    <ContentBlock narrow>
      <SectionHeading title="Le processus de vente au Québec" />
      <p className="prose-body mt-5">
        Évaluation → prix → préparation → mise en marché → visites → offres → négociation → inspection → notaire → clés. Chaque étape a ses pièges et ses occasions. C'est pour ça qu'un bon suivi compte.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/plan-vendeur-gatineau/">Recevoir mon plan vendeur personnalisé</Link>
      </Button>
    </ContentBlock>

    <GuideRequestForm
      avatar="vendeur"
      offer="guide_vendeur"
      guideTitle="Recevez le guide vendeur"
      headline="Recevez votre guide vendeur gratuit"
      subtitle="Tout ce que vous devez savoir pour vendre au bon prix à Gatineau : préparation, prix, mise en marché et négociation."
      submitLabel="Recevoir le guide vendeur"
      successTitle="Merci. Votre guide est en route."
      successText="Vérifiez votre boîte courriel. Le guide vendeur devrait arriver sous peu."
    />

    <FAQSection items={faq} />

    <RelatedPages
      title="Pages connexes pour vendeurs"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="seller_guide"
      headline="Guide vendeur gratuit"
      text="Le prix et la préparation, expliqués dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide vendeur"
    />

    <CTASection
      dark
      title="Prêt à faire le point?"
      text="Demandez votre évaluation gratuite ou parlez directement à Yanis."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" },
        { label: "Parler à Yanis", href: "/contact-yanis/", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <StickyGuideBanner guideType="seller_guide" label="Guide vendeur gratuit, recevez-le par courriel" />
  </>
);

export default SellerGuidePage;
