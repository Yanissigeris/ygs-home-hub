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
import { Home, Users, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-living-hull.webp";

const highlights = [
  { icon: MapPin, title: "Au cœur de la ville", text: "Tout près du Vieux-Hull, du Musée canadien de l'histoire et de la scène culturelle." },
  { icon: Home, title: "Architecture diversifiée", text: "Des maisons centenaires aux condos modernes, Hull a du caractère." },
  { icon: Coffee, title: "Restaurants et culture", text: "Des restaurants et des salles de spectacle, à deux pas d'Ottawa." },
  { icon: Users, title: "Vie de quartier", text: "Les jeunes professionnels et les artistes y côtoient des familles." },
];

const faq = [
  { q: "Hull est-il un bon endroit pour vivre?", a: "Oui, surtout si vous aimez la vie urbaine et voulez rester près d'Ottawa." },
  { q: "Comment se rendre à Ottawa depuis Hull?", a: "Le centre-ville d'Ottawa est à environ 2 km de l'hôtel de ville de Gatineau, à Hull, par le pont du Portage. On peut aussi y aller en autobus ou à vélo. C'est le secteur le plus proche d'Ottawa." },
  { q: "Y a-t-il des familles à Hull?", a: "Oui, de plus en plus de familles s'y installent pour la proximité, les prix et la vie de quartier." },
];

const related = [
  { title: "Acheter ou investir à Hull", text: "Guide du quartier: prix, profils et potentiel.", href: "/hull/" },
  { title: "Investir en plex", text: "Analyse et stratégie pour les plex à Gatineau.", href: "/investir-plex-gatineau/" },
  { title: "Tous les quartiers", text: "Comparez les secteurs de Gatineau.", href: "/quartiers-a-considerer-a-gatineau/" },
  { title: "Consultation acheteur", text: "Clarifiez vos critères et vos options.", href: "/consultation-acheteur/" },
];

const LivingHullPage = () => (
   <>
    <PageMeta title="Vivre à Hull · Gatineau | Mode de vie" description="Tout sur la vie à Hull, Gatineau : culture, restaurants, proximité Ottawa, projet Zibi et ambiance urbaine. Le guide pour s'installer à Hull." ogImage="https://yanisgauthier.com/og/og-hull.jpg" />
    <HeroSection
      overline="Vivre à Hull · Gatineau"
      title="Vivre à Hull : le guide"
      subtitle="Découvrez le mode de vie urbain de Hull: culture, restaurants, proximité Ottawa et prix encore accessibles."
      primaryCta={{ label: "Explorer les propriétés", href: "/consultation-acheteur/" }}
      secondaryCta={{ label: "Voir le quartier", href: "/hull/" }}
      heroBgImage={heroImg}
    />

    <CardGrid
      overline="Mode de vie"
      title="Ce qui distingue Hull"
      items={highlights}
    />

    <ContentBlock narrow>
      <SectionHeading title="La renaissance de Hull" />
      <p className="prose-body mt-5">
        Hull se transforme. De nouveaux projets et une scène de restaurants qui grandit attirent de plus en plus de monde. Au 2e trimestre 2026, le prix médian d'une unifamiliale y était de 514 500 $, contre 572 750 $ à Aylmer (APCIQ, données Centris).
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous cherchez un plex à Hull? Demandez une analyse de rendement."
      buttonLabel="Recevoir une analyse plex →"
      href="/analyse-plex-gatineau/"
    />

    <FAQSection title="Questions sur la vie à Hull" items={faq} />

    <RelatedPages
      title="À lire aussi"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="investor_guide"
      headline="Guide investisseur gratuit : plex à Hull"
      text="Rendement, fiscalité et stratégie, tout dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide investisseur"
    />

    <CTASection
      dark
      title="Prêt à découvrir Hull?"
      text="Parlons de vos critères. Je vous montre les options du secteur qui vous conviennent."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur/" },
        { label: "Voir le quartier", href: "/hull/", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />
  
    <StickyGuideBanner guideType="investor_guide" label="Guide investisseur gratuit, recevez-le par courriel" />
  </>
);

export default LivingHullPage;
