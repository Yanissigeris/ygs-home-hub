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
import heroImg from "@/assets/hero-living-hull.jpg";

const highlights = [
  { icon: MapPin, title: "Centre-ville vibrant", text: "Proximité immédiate du Vieux-Hull, du Musée et de la scène culturelle." },
  { icon: Home, title: "Architecture diversifiée", text: "Des maisons centenaires aux condos modernes — Hull a du caractère." },
  { icon: Coffee, title: "Restaurants et culture", text: "La meilleure scène gastronomique de l'Outaouais, à deux pas d'Ottawa." },
  { icon: Users, title: "Communauté dynamique", text: "Jeunes professionnels, artistes et familles — une communauté en pleine renaissance." },
];

const faq = [
  { q: "Hull est-il un bon endroit pour vivre?", a: "Hull vit une véritable transformation — restaurants, culture, projets et communauté dynamique. C'est de plus en plus populaire." },
  { q: "Comment se rendre à Ottawa depuis Hull?", a: "5-10 minutes en voiture, en bus ou à vélo via les ponts. C'est le secteur le plus proche d'Ottawa." },
  { q: "Y a-t-il des familles à Hull?", a: "Oui — de plus en plus de familles s'y installent pour la proximité, les prix et la vie de quartier." },
];

const related = [
  { title: "Acheter ou investir à Hull", text: "Guide du quartier: prix, profils et potentiel.", href: "/hull" },
  { title: "Investir en plex", text: "Analyse et stratégie pour les plex à Gatineau.", href: "/investir-plex-gatineau" },
  { title: "Tous les quartiers", text: "Comparez les secteurs de Gatineau.", href: "/quartiers-a-considerer-a-gatineau" },
  { title: "Consultation acheteur", text: "Clarifiez vos critères et vos options.", href: "/consultation-acheteur" },
];

const LivingHullPage = () => (
   <>
    <PageMeta title="Vivre à Hull — Mode de vie" description="Tout sur la vie à Hull: culture, restaurants, proximité Ottawa et ambiance urbaine. Le guide pour s'installer à Hull." />
    <HeroSection
      overline="Vivre à Hull · Gatineau"
      title="Vivre à Hull — le guide"
      subtitle="Découvrez le mode de vie urbain de Hull: culture, restaurants, proximité Ottawa et prix encore accessibles."
      primaryCta={{ label: "Explorer les propriétés", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Voir le quartier", href: "/hull" }}
      heroBgImage={heroImg}
    />

    <CardGrid
      overline="Mode de vie"
      title="Ce qui rend Hull unique"
      items={highlights}
    />

    <ContentBlock narrow>
      <SectionHeading title="La renaissance de Hull" />
      <p className="prose-body mt-5">
        Hull vit une véritable transformation. De nouveaux projets, une scène gastronomique en plein essor et une communauté dynamique attirent de plus en plus de monde. C'est le moment de découvrir ce secteur — avant que les prix rattrapent la demande.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous cherchez un plex à Hull? Demandez une analyse de rendement."
      buttonLabel="Recevoir une analyse plex →"
      href="/analyse-plex-gatineau"
    />

    <FAQSection title="Questions sur la vie à Hull" items={faq} />

    <RelatedPages
      title="À lire aussi"
      pages={related}
      background="alt"
    />

    <CTASection
      dark
      title="Prêt à découvrir Hull?"
      text="Parlons de vos critères — je vous montre les meilleures options du secteur."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur" },
        { label: "Voir le quartier", href: "/hull", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />
  </>
);

export default LivingHullPage;
