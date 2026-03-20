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
import heroImg from "@/assets/hero-seller-guide.webp";

const topics = [
  "Comment fixer le bon prix de vente à Gatineau",
  "Les erreurs qui font perdre des milliers de dollars",
  "Préparer sa propriété sans trop investir",
  "Le processus de vente étape par étape au Québec",
  "Négociation: protéger votre prix avec la bonne stratégie",
  "Coordination vente-achat: éviter d'être coincé",
];

const faq = [
  { q: "Quand est-ce le meilleur moment pour vendre à Gatineau?", a: "Ça dépend de votre situation personnelle, pas seulement du marché. On analyse ensemble le meilleur timing pour vous." },
  { q: "Combien coûte un courtier immobilier?", a: "La commission est convenue ensemble avant de commencer. Tout est transparent — pas de surprise." },
  { q: "Faut-il faire des rénovations avant de vendre?", a: "Pas nécessairement. Je vous aide à identifier ce qui vaut la peine pour maximiser votre prix sans gaspiller." },
  { q: "Combien de temps pour vendre à Gatineau?", a: "En moyenne 30 à 60 jours sur le marché, mais ça varie selon le secteur, le prix et la saison." },
];

const related = [
  { title: "Évaluation gratuite", text: "Combien vaut votre propriété? Recevez une estimation en 24h.", href: "/evaluation-gratuite-gatineau" },
  { title: "Plan vendeur", text: "Recevez un plan personnalisé: prix, préparation et mise en marché.", href: "/plan-vendeur-gatineau" },
  { title: "Quand vendre", text: "Le bon timing dépend de votre situation — voici comment y voir clair.", href: "/quand-vendre-a-gatineau" },
  { title: "Vendre un plex", text: "Vendre un immeuble à revenus, c'est différent d'une maison.", href: "/vendre-un-plex-a-gatineau" },
];

const SellerGuidePage = () => (
   <>
    <PageMeta title="Guide vendeur — Vendre à Gatineau" description="Guide complet pour vendre votre propriété à Gatineau. Prix, préparation, mise en marché et négociation — tout ce qu'il faut savoir." />
    <HeroSection
      overline="Guide vendeur · Gatineau"
      title="Guide complet pour vendre votre propriété à Gatineau"
      subtitle="Tout ce que vous devez savoir pour vendre au meilleur prix."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Recevoir mon plan vendeur", href: "/plan-vendeur-gatineau" }}
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
        La différence entre une vente stressante et une vente réussie, c'est la préparation. Ce guide couvre les étapes essentielles pour maximiser votre prix de vente à Gatineau — du positionnement prix à la négociation finale.
      </p>
      <p className="prose-body mt-4">
        Après près de 9 ans à accompagner des vendeurs en Outaouais, j'ai vu ce qui fonctionne et ce qui fait perdre de l'argent. Ce guide résume les leçons les plus importantes.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous voulez une analyse personnalisée? Demandez votre évaluation gratuite."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <ContentBlock narrow>
      <SectionHeading title="Le bon prix, c'est la clé" />
      <p className="prose-body mt-5">
        Surévaluer = rester sur le marché trop longtemps. Sous-évaluer = laisser de l'argent sur la table. Le bon prix est basé sur les ventes comparables récentes, l'état de votre propriété et la dynamique du secteur.
      </p>
    </ContentBlock>

    <ContentBlock narrow>
      <SectionHeading title="Préparer sans se ruiner" />
      <p className="prose-body mt-5">
        Certains investissements rapportent — peinture neutre, désencombrement, mise en valeur. D'autres sont de l'argent gaspillé. Je vous aide à faire le tri pour investir seulement où ça compte.
      </p>
    </ContentBlock>

    <ContentBlock narrow>
      <SectionHeading title="Le processus de vente au Québec" />
      <p className="prose-body mt-5">
        Évaluation → prix → préparation → mise en marché → visites → offres → négociation → inspection → notaire → clés. Chaque étape a ses pièges — et ses opportunités. C'est pour ça qu'un bon accompagnement fait la différence.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/plan-vendeur-gatineau">Recevoir mon plan vendeur personnalisé</Link>
      </Button>
    </ContentBlock>

    <GuideRequestForm
      guideTitle="Recevez le guide vendeur"
      headline="Recevez votre guide vendeur gratuit"
      subtitle="Tout ce que vous devez savoir pour vendre au meilleur prix à Gatineau — préparation, prix, mise en marché et négociation."
      submitLabel="Recevoir le guide vendeur"
      successTitle="Merci! Votre guide est en route."
      successText="Vérifiez votre boîte courriel — vous recevrez le guide vendeur dans les prochaines minutes."
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
      text="Prix, préparation et stratégie — tout dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide vendeur"
    />

    <CTASection
      dark
      title="Prêt à passer à l'action?"
      text="Demandez votre évaluation gratuite ou parlez directement à Yanis."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Parler à Yanis", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <StickyGuideBanner guideType="seller_guide" label="Guide vendeur gratuit — recevez-le par courriel" />
  </>
);

export default SellerGuidePage;
