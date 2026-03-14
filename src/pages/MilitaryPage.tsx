import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import ContentBlock from "@/components/ContentBlock";
import { Shield, Users, Home, Award, Clock, CheckCircle2, MapPin, Heart } from "lucide-react";
import heroImg from "@/assets/hero-gatineau.jpg";

const challenges = [
  { icon: MapPin, title: "Mutation à court préavis", text: "Le déménagement approche vite — il faut trouver un logement ou vendre rapidement, sans compromettre le prix." },
  { icon: Shield, title: "Comprendre le marché québécois", text: "Taxes, processus notarié, zonage — le Québec fonctionne différemment de l'Ontario ou du reste du Canada." },
  { icon: Home, title: "Trouver le bon secteur", text: "Proximité de la base, écoles, services bilingues — chaque famille a ses priorités." },
  { icon: Heart, title: "S'installer en famille", text: "Coordonner vente et achat, trouver un quartier familial, inscrire les enfants — tout en gérant le stress de la mutation." },
];

const steps = [
  { num: "01", title: "Appel de découverte", desc: "On comprend votre situation — mutation, calendrier, budget, priorités familiales et secteurs ciblés." },
  { num: "02", title: "Plan personnalisé", desc: "Recherche ciblée, visites virtuelles ou en personne, coordination avec votre horaire de mutation." },
  { num: "03", title: "Accompagnement complet", desc: "Offre, inspection, notaire, coordination — je gère tout jusqu'à votre installation." },
];

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Expérience en relocalisation militaire" },
  { icon: Shield, label: "Bilingue · Service rapide" },
];

const faq = [
  { q: "Est-ce que vous connaissez les programmes pour militaires?", a: "Oui. Je connais les réalités des mutations, les délais serrés et les besoins spécifiques. On adapte l'approche à votre situation." },
  { q: "Je dois vendre et acheter en même temps — c'est possible?", a: "C'est fréquent dans les mutations. On planifie la coordination dès le départ pour éviter d'être coincé." },
  { q: "Quels secteurs sont proches de la base?", a: "Ça dépend de votre base (Uplands, Gatineau, etc.). Je vous recommande les meilleurs secteurs selon votre trajet et vos priorités." },
  { q: "Est-ce que vous pouvez faire des visites virtuelles?", a: "Absolument. Beaucoup de militaires achètent à distance avant leur arrivée. Je m'adapte à votre horaire." },
];

const MilitaryPage = () => (
  <>
    <HeroSection
      overline="Service militaire · Gatineau"
      title="Militaire? Trouvez votre propriété à Gatineau sans stress"
      subtitle="Mutation, relocalisation, achat ou vente — je connais les réalités militaires et je vous aide à naviguer le marché de Gatineau efficacement."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis" }}
      secondaryCta={{ label: "Guide militaire", href: "/guide-militaire-gatineau" }}
      trustLine="Service adapté aux militaires. Zéro pression."
      backgroundImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <CardGrid
      overline="Vos défis"
      title="Les réalités d'une mutation immobilière"
      items={challenges}
    />

    <InlineCTA
      text="Vous devez vendre avant d'acheter? Commencez par connaître la valeur de votre propriété."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <ProcessSteps steps={steps} background="alt" />

    <ContentBlock narrow>
      <SectionHeading
        overline="Pourquoi YGS"
        title="Un courtier qui comprend votre réalité"
      />
      <p className="prose-body mt-5">
        Les mutations ne suivent pas le calendrier immobilier normal. Il faut un courtier qui s'adapte — à votre timeline, à votre budget, et à la pression qui vient avec un déménagement militaire.
      </p>
      <p className="prose-body mt-4">
        Après près de 9 ans à Gatineau, j'ai accompagné des familles militaires dans toutes sortes de situations. Mon rôle est de simplifier le processus pour que vous puissiez vous concentrer sur votre mission.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/contact-yanis">Réserver un appel</Link>
      </Button>
    </ContentBlock>

    <CTASection
      dark
      overline="Prochaine étape"
      title="Prêt à planifier votre relocalisation?"
      text="Parlons de votre mutation, vos critères et votre calendrier — je m'adapte à vous."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis" },
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default MilitaryPage;
