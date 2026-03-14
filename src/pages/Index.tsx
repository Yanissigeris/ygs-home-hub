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
      <div className="section-container max-w-3xl">
        <div className="grid gap-4 sm:grid-cols-3">
          {audienceCards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className={`card-elevated group flex flex-col rounded-lg border bg-card p-5 sm:p-6 ${
                card.featured
                  ? "border-accent/30 shadow-[0_0_0_1px_hsl(36_60%_52%_/_0.08)]"
                  : "border-border"
              }`}
            >
              <h3 className="text-base group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="mt-1.5 flex-1 text-[0.8125rem] leading-relaxed text-muted-foreground">{card.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-[0.8125rem] font-medium text-primary">
                {card.cta} <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Inline seller CTA */}
    <section className="cta-band">
      <div className="section-container">
        <p>Vous pensez vendre? Commencez par connaître la valeur de votre propriété.</p>
        <Button size="sm" variant="hero" asChild>
          <Link to="/evaluation-gratuite-gatineau">Obtenir ma valeur →</Link>
        </Button>
      </div>
    </section>

    {/* About YGS */}
    <section className="section-padding bg-background">
      <div className="section-container grid gap-10 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <ImagePlaceholder label="Photo professionnelle de Yanis" aspectRatio="aspect-[3/4]" />
        </div>
        <div className="lg:col-span-3">
          <p className="label-overline mb-1.5">Pourquoi YGS</p>
          <h2>Un accompagnement simple, stratégique et humain</h2>
          <p className="prose-body mt-3">
            En immobilier, les bonnes décisions commencent par de bonnes informations. Yanis Gauthier-Sigeris accompagne vendeurs, acheteurs et investisseurs à Gatineau avec une approche claire, locale et sans pression.
          </p>
          <p className="prose-body mt-2.5">
            Son rôle n'est pas de pousser. C'est de donner les bonnes informations et une stratégie claire — pour que vous avanciez avec confiance quand vous êtes prêt.
          </p>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.6875rem] text-muted-foreground/60">
            <span className="flex items-center gap-1.5"><Clock size={11} /> Près de 9 ans d'expérience</span>
            <span className="flex items-center gap-1.5"><Award size={11} /> Club Platine · Club 100% · Temple de la renommée</span>
            <span className="flex items-center gap-1.5"><Heart size={11} /> Approche axée sur la confiance</span>
          </div>

          <Button className="mt-6" size="default" asChild>
            <Link to="/contact-yanis">En savoir plus</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Sectors */}
    <section className="section-padding bg-secondary/40">
      <div className="section-container max-w-3xl">
        <p className="label-overline text-center mb-1.5">Gatineau et environs</p>
        <h2 className="text-center">Secteurs à surveiller</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {sectors.map((s) => (
            <Link key={s.name} to={s.href} className="card-elevated group flex items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-3.5">
              <MapPin size={13} className="text-accent shrink-0" />
              <span className="text-[0.8125rem] font-medium text-foreground group-hover:text-primary transition-colors">{s.name}</span>
              <ArrowRight size={12} className="ml-auto text-muted-foreground/25 group-hover:text-primary transition-colors" />
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
