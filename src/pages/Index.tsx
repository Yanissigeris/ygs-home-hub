import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import TestimonialPlaceholder from "@/components/TestimonialPlaceholder";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ArrowRight, MapPin, Award, Clock, Heart } from "lucide-react";

const audienceCards = [
  {
    title: "Vendre",
    text: "Connaître la valeur de votre propriété, planifier le bon timing et obtenir le meilleur prix.",
    cta: "Voir le plan vendeur",
    href: "/vendre-ma-maison-gatineau",
    featured: true,
  },
  {
    title: "Acheter",
    text: "Trouver le bon secteur, éviter les erreurs coûteuses et acheter avec confiance.",
    cta: "Acheter à Gatineau",
    href: "/acheter-a-gatineau",
  },
  {
    title: "Plex / investissement",
    text: "Analyser la valeur, le rendement et la stratégie avant de prendre une décision.",
    cta: "Voir la page plex",
    href: "/investir-plex-gatineau",
  },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer" },
  { name: "Hull", href: "/plateau-aylmer" },
  { name: "Buckingham / Masson-Angers", href: "/plateau-aylmer" },
];

const Index = () => (
  <>
    <HeroSection
      overline="Yanis Gauthier-Sigeris · Courtier immobilier"
      title="YGS — Votre allié en immobilier à Gatineau"
      subtitle="Vendre, acheter ou investir à Gatineau avec une stratégie claire, des conseils honnêtes et un accompagnement sans pression."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Stratégie claire. Zéro pression. Pas de mauvaises surprises."
    />

    {/* Audience cards */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-4xl">
        <div className="grid gap-5 sm:grid-cols-3">
          {audienceCards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className={`card-elevated group flex flex-col rounded-lg border bg-card p-6 sm:p-7 ${
                card.featured ? "border-accent/40 ring-1 ring-accent/10" : "border-border"
              }`}
            >
              <h3 className="group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-muted-foreground">{card.text}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-primary">
                {card.cta} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Inline seller CTA */}
    <section className="bg-primary py-5">
      <div className="section-container flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-[0.8125rem] font-medium text-primary-foreground/80">
          Vous pensez vendre? Commencez par connaître la valeur de votre propriété.
        </p>
        <Button size="sm" variant="hero" asChild>
          <Link to="/evaluation-gratuite-gatineau">Obtenir ma valeur →</Link>
        </Button>
      </div>
    </section>

    {/* About YGS */}
    <section className="section-padding bg-background">
      <div className="section-container grid gap-12 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <ImagePlaceholder label="Photo professionnelle de Yanis" aspectRatio="aspect-[3/4]" />
        </div>
        <div className="lg:col-span-3">
          <p className="label-overline mb-2">Pourquoi YGS</p>
          <h2>Un accompagnement simple, stratégique et humain</h2>
          <p className="prose-body mt-4">
            En immobilier, les bonnes décisions commencent par de bonnes informations. Yanis Gauthier-Sigeris accompagne vendeurs, acheteurs et investisseurs à Gatineau avec une approche claire, locale et sans pression.
          </p>
          <p className="prose-body mt-3">
            Son rôle n'est pas de pousser. C'est de donner les bonnes informations et une stratégie claire — pour que vous avanciez avec confiance quand vous êtes prêt.
          </p>

          {/* Credibility */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.75rem] text-muted-foreground/70">
            <span className="flex items-center gap-1.5"><Clock size={12} /> Près de 9 ans d'expérience en Outaouais</span>
            <span className="flex items-center gap-1.5"><Award size={12} /> Club Platine · Club 100% · Temple de la renommée RE/MAX</span>
            <span className="flex items-center gap-1.5"><Heart size={12} /> Approche axée sur la confiance</span>
          </div>

          <Button className="mt-7" size="default" asChild>
            <Link to="/contact-yanis">En savoir plus</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Sectors */}
    <section className="section-padding bg-secondary/40">
      <div className="section-container max-w-4xl">
        <p className="label-overline text-center mb-2">Gatineau et environs</p>
        <h2 className="text-center">Secteurs à surveiller</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {sectors.map((s) => (
            <Link key={s.name} to={s.href} className="card-elevated group flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4">
              <MapPin size={14} className="text-accent shrink-0" />
              <span className="text-[0.875rem] font-medium text-foreground group-hover:text-primary transition-colors">{s.name}</span>
              <ArrowRight size={13} className="ml-auto text-muted-foreground/30 group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    <TestimonialPlaceholder />

    <CTASection
      dark
      overline="Prochaine étape"
      title="Commencez par la bonne première étape"
      text="Évaluation, consultation achat ou analyse plex — on commence là où vous êtes rendu."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />
  </>
);

export default Index;
