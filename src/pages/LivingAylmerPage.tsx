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
import heroImg from "@/assets/plateau-aylmer-lifestyle.webp";

const highlights = [
  { icon: MapPin, title: "Lac Deschênes", text: "Plage, sports nautiques et couchers de soleil sur le lac, à deux pas de la maison." },
  { icon: Home, title: "Quartiers de caractère", text: "Rues arborées, maisons avec cachet et communauté soudée." },
  { icon: Coffee, title: "Vie de quartier", text: "Restaurants, cafés, boutiques et marché local, tout à distance de marche." },
  { icon: Users, title: "Communauté bilingue", text: "Écoles françaises et anglaises, activités communautaires et services de proximité." },
];

const faq = [
  { q: "Aylmer est-il bilingue?", a: "Oui, écoles françaises et anglaises, services bilingues et communauté mixte." },
  { q: "Que faire à Aylmer?", a: "Plage du lac Deschênes, parc de la Gatineau, marché fermier, restaurants locaux et vie communautaire active." },
  { q: "Aylmer est-il bien desservi par les transports?", a: "Accès par le pont Champlain, transport en commun et pistes cyclables vers Ottawa." },
];

const related = [
  { title: "Acheter à Aylmer", text: "Guide du quartier: prix, profils d'acheteurs et pourquoi Aylmer.", href: "/aylmer/" },
  { title: "Tous les quartiers", text: "Comparez les secteurs de Gatineau.", href: "/quartiers-a-considerer-a-gatineau/" },
  { title: "Guide relocalisation", text: "S'installer à Gatineau depuis Ottawa ou Montréal.", href: "/guide-relocalisation-gatineau/" },
  { title: "Consultation acheteur", text: "Clarifiez vos critères et vos options.", href: "/consultation-acheteur/" },
];

const LivingAylmerPage = () => (
   <>
    <PageMeta title="Vivre à Aylmer · Gatineau | Mode de vie" description="Tout sur la vie à Aylmer, Gatineau : lac Deschênes, restaurants, écoles francophones et anglophones, vie de quartier. Le guide pour s'installer à Aylmer." ogImage="https://yanisgauthier.com/og/og-aylmer.jpg" />
    <HeroSection
      overline="Vivre à Aylmer · Gatineau"
      title="Vivre à Aylmer : le guide"
      subtitle="Découvrez le mode de vie à Aylmer: lac, nature, communauté et accès à Ottawa. Tout ce qu'il faut savoir avant de s'installer."
      primaryCta={{ label: "Explorer les propriétés", href: "/consultation-acheteur/" }}
      secondaryCta={{ label: "Voir le quartier", href: "/aylmer/" }}
      heroBgImage={heroImg}
    />

    <CardGrid
      overline="Mode de vie"
      title="Ce qui distingue Aylmer"
      items={highlights}
    />

    <ContentBlock narrow>
      <SectionHeading title="La vie à Aylmer au quotidien" />
      <p className="prose-body mt-5">
        Aylmer garde une ambiance de petite ville tout en faisant partie d'une grande région. Le lac Deschênes et le parc de la Gatineau sont tout près, et on y trouve des écoles francophones et anglophones. Depuis le Vieux-Aylmer, le centre-ville d'Ottawa est à environ 14 km par le pont Champlain.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous pensez vous installer à Aylmer? Réservez une consultation gratuite."
      buttonLabel="Réserver une consultation →"
      href="/consultation-acheteur/"
    />

    <FAQSection title="Questions sur la vie à Aylmer" items={faq} />

    <RelatedPages
      title="À lire aussi"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit : s'installer à Aylmer"
      text="Tout pour acheter à Aylmer, processus, budget et conseils dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    <CTASection
      dark
      title="Prêt à découvrir Aylmer?"
      text="Parlons de vos critères. Je vous montre les options du secteur qui vous conviennent."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur/" },
        { label: "Voir le quartier", href: "/aylmer/", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />
  
    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit, recevez-le par courriel" />
  </>
);

export default LivingAylmerPage;
