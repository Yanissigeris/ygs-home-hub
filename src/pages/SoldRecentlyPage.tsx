import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import SectorLinks from "@/components/SectorLinks";
import InlineCTA from "@/components/InlineCTA";
import heroImg from "@/assets/hero-properties.jpg";

const sectors = [
  { name: "Aylmer", href: "/aylmer", detail: "Lac, quartiers établis, qualité de vie" },
  { name: "Plateau", href: "/plateau", detail: "Familles, développements récents" },
  { name: "Hull", href: "/hull", detail: "Urbain, condos, plex, proximité Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Espace, nature, prix accessibles" },
  { name: "Gatineau centre", href: "/gatineau", detail: "Résidentiel, services, banlieue" },
];

const faq = [
  { q: "Où trouver les prix de vente réels à Gatineau?", a: "Les prix de vente ne sont pas publics au Québec. En tant que courtier, j'ai accès aux données réelles — demandez votre évaluation gratuite." },
  { q: "Comment interpréter les ventes comparables?", a: "Il faut comparer des propriétés similaires — même secteur, même type, même état. Je fais ce travail pour vous." },
  { q: "Les prix montent-ils encore à Gatineau?", a: "Le marché varie d'un secteur à l'autre. Demandez une analyse personnalisée pour votre situation." },
];

const related = [
  { title: "Propriétés vedettes", text: "Les coups de cœur du moment.", href: "/proprietes-vedettes" },
  { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau" },
  { title: "Rapport du marché", text: "Prix et tendances à Gatineau.", href: "/rapport-marche-gatineau" },
  { title: "Guide vendeur", text: "Tout pour vendre au meilleur prix.", href: "/guide-vendeur-gatineau" },
];

const SoldRecentlyPage = () => (
   <>
    <PageMeta title="Propriétés vendues récemment à Gatineau" description="Consultez les ventes récentes à Gatineau pour comprendre les prix du marché. Données réelles par secteur." />
    <HeroSection
      overline="Vendu récemment · Gatineau"
      title="Propriétés vendues récemment à Gatineau"
      subtitle="Consultez les ventes récentes dans votre secteur pour mieux comprendre les prix du marché."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }}
      trustLine="Données de ventes réelles pour des décisions éclairées"
      heroBgImage={heroImg}
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="Bientôt disponible"
        title="L'historique des ventes arrive bientôt"
        subtitle="En attendant, demandez votre évaluation gratuite — je vous fournis les ventes comparables récentes dans votre secteur."
      />
      <p className="prose-body mt-5">
        Connaître les prix de vente réels dans votre quartier est la meilleure façon d'établir un prix réaliste, que vous vendiez ou achetiez. Demandez votre analyse personnalisée.
      </p>
    </ContentBlock>

    <SectorLinks
      overline="Par secteur"
      title="Ventes récentes par quartier"
      sectors={sectors}
      background="alt"
    />

    <InlineCTA
      text="Vous vendez? Comparez votre propriété aux ventes récentes de votre quartier."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <FAQSection items={faq} />

    <RelatedPages
      title="Explorer aussi"
      pages={related}
    />

    <CTASection
      dark
      title="Vous voulez connaître les prix réels dans votre secteur?"
      text="Demandez une évaluation gratuite — je vous fournis les ventes comparables récentes."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Parler à Yanis", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres, vous décidez."
    />
  </>
);

export default SoldRecentlyPage;
