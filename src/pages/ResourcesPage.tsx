import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import { Book, Home, MapPin, Users, FileText, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero-gatineau.jpg";

const resources = [
  { icon: Home, title: "Guide vendeur", text: "Tout ce qu'il faut savoir pour vendre au meilleur prix à Gatineau.", href: "/guide-vendeur-gatineau" },
  { icon: Users, title: "Guide acheteur", text: "Le processus d'achat au Québec, les secteurs et les étapes clés.", href: "/guide-acheteur-gatineau" },
  { icon: MapPin, title: "Guide relocalisation", text: "S'installer à Gatineau depuis Ottawa, Montréal ou ailleurs.", href: "/guide-relocalisation-gatineau" },
  { icon: FileText, title: "Guide militaire", text: "Tout sur l'immobilier à Gatineau pour les membres des forces.", href: "/guide-militaire-gatineau" },
  { icon: Book, title: "Premier achat", text: "Budget, mise de fonds, processus — le guide pour les premiers acheteurs.", href: "/premier-achat-gatineau" },
  { icon: TrendingUp, title: "Quartiers à considérer", text: "Découvrez les meilleurs secteurs de Gatineau selon votre profil.", href: "/quartiers-a-considerer-a-gatineau" },
];

const ResourcesPage = () => (
  <>
    <HeroSection
      overline="Ressources · YGS"
      title="Ressources immobilières gratuites"
      subtitle="Guides, analyses et informations pour vous aider à prendre les meilleures décisions immobilières à Gatineau."
      primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      backgroundImage={heroImg}
    />

    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          overline="Guides et outils"
          title="Tout ce dont vous avez besoin"
          subtitle="Des ressources concrètes et locales pour chaque étape de votre projet immobilier."
          centered
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <Link
              key={r.href}
              to={r.href}
              className="card-elevated border border-border/40 bg-card p-7 group"
            >
              <r.icon size={22} className="text-accent" />
              <h3 className="mt-4 text-[1.125rem] group-hover:text-accent transition-colors">{r.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">{r.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading title="Besoin d'aide personnalisée?" />
      <p className="prose-body mt-5">
        Les guides sont un bon point de départ, mais chaque situation est unique. Réservez un appel pour obtenir des conseils adaptés à votre projet.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/contact-yanis">Parler à Yanis</Link>
      </Button>
    </ContentBlock>

    <CTASection
      dark
      title="Commencez votre projet immobilier"
      text="Évaluation gratuite, consultation acheteur ou analyse plex — choisissez votre prochaine étape."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous accompagne à votre rythme."
    />
  </>
);

export default ResourcesPage;
