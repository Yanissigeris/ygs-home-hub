import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import SectorLinks from "@/components/SectorLinks";
import InlineCTA from "@/components/InlineCTA";
import { MapPin, DollarSign, Home, FileText, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-buy-from-ottawa.webp";

const advantages = [
  { icon: DollarSign, title: "Prix plus accessibles", text: "Les maisons unifamiliales et condos coûtent souvent nettement moins cher à Gatineau qu'à Ottawa, de l'autre côté de la rivière." },
  { icon: MapPin, title: "Proximité d'Ottawa", text: "Les ponts (Champlain, Alexandra, du Portage), le transport STO et les pistes cyclables rendent le trajet quotidien très faisable." },
  { icon: Home, title: "Plus d'espace", text: "Pour le même budget, vous obtenez souvent plus de pièces, un plus grand terrain et une meilleure qualité de vie à Aylmer, au Plateau ou à Buckingham." },
  { icon: FileText, title: "Processus québécois", text: "Le processus d'achat au Québec a ses propres règles — promesse d'achat, notaire, taxes scolaires. Je vous guide étape par étape." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer/", detail: "Familial, maisons récentes, accès Ottawa" },
  { name: "Hull", href: "/hull/", detail: "Urbain, proche centre-ville, condos et plex" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers/", detail: "Terrain, prix accessibles, nature" },
];


const faq = [
  { q: "Quelles sont les vraies économies en achetant à Gatineau?", a: "Ça dépend du secteur et du type de propriété. En mai 2026, l'écart de prix d'achat se situe généralement entre 15 et 30 % par rapport à des quartiers comparables d'Ottawa, mais il faut intégrer les taxes municipales et scolaires au portrait global pour comparer net." },
  { q: "Comment fonctionne l'achat quand je suis en Ontario?", a: "Vous pouvez travailler en Ontario et habiter Gatineau. Le processus d'achat se déroule au Québec — promesse d'achat, conditions d'inspection, signature chez le notaire — et un courtier titulaire d'un permis OACIQ est requis pour vous représenter. Je vous accompagne à chaque étape." },
  { q: "Les taxes sont-elles plus élevées au Québec?", a: "Les taxes municipales et scolaires varient selon le secteur et sont souvent plus basses au dollar de valeur que des adresses ottaviennes équivalentes. L'impôt sur le revenu est structuré différemment au Québec — on regarde le portrait complet ensemble pour comparer net de tous les coûts." },
  { q: "Est-ce que je peux garder mon emploi et mon médecin de famille en Ontario?", a: "Oui — beaucoup de mes clients font la navette quotidienne vers le centre-ville d'Ottawa ou travaillent en mode hybride. Vous pouvez souvent garder votre médecin de famille ontarien dans certains cas, bien que la RAMQ couvre les soins une fois résident québécois." },
  { q: "Et l'école des enfants — français ou anglais?", a: "Les deux options existent en Outaouais. Aylmer et le Plateau ont des écoles publiques anglophones reconnues; les écoles francophones et d'immersion sont aussi très accessibles. Les règles d'admissibilité au réseau anglophone s'appliquent — on en discute tôt dans le processus." },
  { q: "Combien de temps prend vraiment la navette par les ponts?", a: "Depuis Aylmer, Hull ou le Plateau, le centre-ville d'Ottawa se rejoint typiquement en 15 à 30 minutes en voiture selon le pont et l'heure. Les autobus STO, les pistes cyclables et les projets de tramway entrent aussi dans l'équation à moyen terme." },
  { q: "Ai-je besoin d'une hypothèque québécoise?", a: "La plupart des prêteurs canadiens opèrent des deux côtés de la rivière, vous pouvez donc souvent garder votre banque actuelle. La souscription suit les règles provinciales — je vous présente des courtiers hypothécaires qui traitent régulièrement des dossiers Ottawa-Gatineau." },
];

const BuyFromOttawaPage = () => (
   <>
    <PageMeta title="Acheter à Gatineau depuis Ottawa" description="Vous habitez Ottawa et pensez acheter à Gatineau? Aylmer, Hull, Plateau — taxes, quartiers, avantages et accompagnement bilingue pour votre transition." ogImage="https://yanisgauthier.com/og/og-buyer.jpg" />
    <HeroSection
      overline="Acheter depuis Ottawa · Gatineau"
      title="Acheter à Gatineau depuis Ottawa"
      subtitle="Plus d'espace, des prix plus accessibles, une qualité de vie différente — sans être loin du travail. Voici ce qu'il faut savoir."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur/" }}
      secondaryCta={{ label: "Explorer les secteurs", href: "#secteurs" }}
      trustLine="Spécialiste en relocalisation Ottawa → Gatineau"
      heroBgImage={heroImg}
    />
<CardGrid
      overline="Les avantages"
      title="Pourquoi de plus en plus d'Ottaviens traversent la rivière"
      items={advantages}
    />

    <InlineCTA
      text="Vous vendez aussi à Ottawa? Connaître la valeur de votre propriété actuelle peut clarifier votre budget d'achat."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau/"
    />

    <SectorLinks
      id="secteurs"
      overline="Secteurs populaires"
      title="Les quartiers les plus recherchés par les Ottaviens"
      sectors={sectors}
      background="alt"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Expertise locale" title="Un courtier qui connaît les deux côtés de la rivière" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        Actif en immobilier en Outaouais depuis 2017, j'ai accompagné des dizaines de ménages ontariens dans leur transition vers Gatineau — fonctionnaires fédéraux, professionnels de la santé, jeunes familles, et retraités à la recherche d'un rythme plus calme. La transition tourne rarement uniquement autour du prix au pied carré. Elle touche la fiabilité du trajet, la scolarité dans la bonne langue, l'accès à un médecin, les standards de déneigement, et la lecture concrète d'un compte de taxes québécois.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Je sais quelles rues d'Aylmer s'arrachent dès qu'une inscription paraît, quels quadrilatères de Hull cachent une plomberie vieillissante sous une couche de peinture neuve, où les phases récentes du Plateau ont des servitudes de bruit, et quelles poches de Buckingham prennent tranquillement de la valeur grâce aux investissements municipaux récents. Cette connaissance terrain protège un acheteur hors-province des hypothèses coûteuses.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Je coordonne aussi les acteurs de soutien — notaire québécois, courtier hypothécaire bilingue, inspecteur certifié connaissant les bâtiments anciens de Hull, déménageurs habitués aux dossiers interprovinciaux. Vous n'avez pas à monter cette équipe seul depuis l'autre rive.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/consultation-acheteur/">Réserver ma consultation</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit — acheter à Gatineau"
      text="Processus, budget, secteurs et conseils — tout dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    <CTASection
      dark
      title="Prêt à explorer Gatineau?"
      text="Réservez une consultation gratuite — on regarde ensemble les secteurs et les options qui correspondent à votre profil."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur/" },
        { label: "Explorer les secteurs", href: "/plateau-aylmer/", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default BuyFromOttawaPage;
