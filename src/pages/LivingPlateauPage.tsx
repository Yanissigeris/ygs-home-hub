import PageMeta from "@/components/PageMeta";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { Home, Users, MapPin, TreePine } from "lucide-react";
import heroImg from "@/assets/hero-living-plateau.webp";

const highlights = [
  { icon: MapPin, title: "Développements récents", text: "Maisons modernes dans des quartiers neufs avec parcs et pistes cyclables." },
  { icon: Home, title: "Excellent rapport qualité-prix", text: "Plus d'espace et de maison pour votre budget qu'en centre-ville." },
  { icon: TreePine, title: "Nature et plein air", text: "Proximité du parc de la Gatineau, sentiers et espaces verts." },
  { icon: Users, title: "Quartiers familiaux", text: "Écoles, garderies, parcs et communauté jeune et dynamique." },
];

const faq = [
  { q: "Le Plateau est-il loin d'Ottawa?", a: "20-30 minutes en voiture selon l'heure. Plusieurs résidents du Plateau travaillent à Ottawa." },
  { q: "Y a-t-il de bonnes écoles dans le Plateau?", a: "Oui — écoles françaises et anglaises, garderies et activités parascolaires." },
  { q: "Le Plateau continue-t-il de se développer?", a: "Oui — de nouveaux projets résidentiels sont en cours, ce qui attire de plus en plus de familles." },
];

const related = [
  { title: "Acheter dans le Plateau", text: "Guide du quartier: prix, profils et potentiel.", href: "/plateau/" },
  { title: "Tous les quartiers", text: "Comparez les secteurs de Gatineau.", href: "/quartiers-a-considerer-a-gatineau/" },
  { title: "Premier achat", text: "Budget, processus et conseils pour premiers acheteurs.", href: "/premier-achat-gatineau/" },
  { title: "Consultation acheteur", text: "Clarifiez vos critères et vos options.", href: "/consultation-acheteur/" },
];

const LivingPlateauPage = () => (
   <>
    <PageMeta title="Vivre dans le Plateau · Gatineau — Mode de vie" description="Tout sur la vie dans le Plateau à Gatineau: familles, parcs, maisons récentes, écoles et qualité de vie. Guide pour s'installer au Plateau." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <HeroSection
      overline="Vivre dans le Plateau · Gatineau"
      title="Vivre dans le Plateau — le guide"
      subtitle="Découvrez le mode de vie dans le Plateau: développements récents, familles, nature et excellent rapport qualité-prix."
      primaryCta={{ label: "Explorer les propriétés", href: "/consultation-acheteur/" }}
      secondaryCta={{ label: "Voir le quartier", href: "/plateau/" }}
      heroBgImage={heroImg}
    />

    <CardGrid
      overline="Mode de vie"
      title="Ce qui rend le Plateau unique"
      items={highlights}
    />

    <ContentBlock narrow>
      <SectionHeading title="Le Plateau, c'est pour les familles" />
      <p className="prose-body mt-5">
        Le Plateau est devenu l'un des secteurs les plus populaires de Gatineau pour les jeunes familles. Maisons neuves, parcs, écoles et accès rapide à tout — c'est un choix de vie qui fait de plus en plus d'adeptes.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous êtes propriétaire dans le Plateau? Découvrez combien vaut votre propriété."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau/"
    />

    <FAQSection title="Questions sur la vie dans le Plateau" items={faq} />

    <RelatedPages
      title="À lire aussi"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit — s'installer dans le Plateau"
      text="Tout pour acheter dans le Plateau — processus, budget et conseils envoyés par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    <CTASection
      dark
      title="Prêt à découvrir le Plateau?"
      text="Parlons de vos critères — je vous montre les meilleures options du secteur."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur/" },
        { label: "Voir le quartier", href: "/plateau/", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />
  
    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default LivingPlateauPage;
