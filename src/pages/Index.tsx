import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import TestimonialPlaceholder from "@/components/TestimonialPlaceholder";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ArrowRight, MapPin, Target, Shield, Users } from "lucide-react";

const audienceCards = [
  {
    title: "Vendre",
    icon: Target,
    text: "Vous voulez savoir combien vaut vraiment votre propriété et comment la vendre au bon prix, sans mauvaises surprises?",
    cta: "Voir le plan vendeur",
    href: "/vendre-ma-maison-gatineau",
  },
  {
    title: "Acheter",
    icon: Users,
    text: "Vous cherchez une maison, un condo ou un secteur qui correspond vraiment à votre mode de vie et à votre budget?",
    cta: "Acheter à Gatineau",
    href: "/acheter-a-gatineau",
  },
  {
    title: "Plex / investissement",
    icon: Shield,
    text: "Vous possédez un plex ou vous songez à investir? Je peux vous aider à voir clair sur la valeur, le rendement et le bon timing.",
    cta: "Voir la page plex",
    href: "/investir-plex-gatineau",
  },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer" },
  { name: "Hull", href: "/plateau-aylmer" },
  { name: "Buckingham / Masson-Angers", href: "/plateau-aylmer" },
];

const whyPoints = [
  { title: "Stratégie adaptée", desc: "Chaque situation est différente. Je prends le temps de comprendre la vôtre avant de proposer un plan." },
  { title: "Connaissance locale", desc: "Je travaille surtout Gatineau, Aylmer, Hull et les secteurs autour. Je connais le terrain." },
  { title: "Aucune pression", desc: "Mon objectif est de vous donner les bonnes infos pour que vous preniez une bonne décision, quand vous êtes prêt." },
];

const Index = () => (
  <>
    <HeroSection
      overline="Yanis Gauthier-Sigeris · Courtier immobilier"
      title="Votre allié en immobilier à Gatineau"
      subtitle="Acheter, vendre ou investir à Gatineau avec une stratégie claire, des conseils honnêtes et un accompagnement sans pression."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Stratégie claire. Zéro pression. Pas de mauvaises surprises."
    />

    {/* Audience cards */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          overline="Comment je peux vous aider"
          title="Trois façons de travailler ensemble"
          centered
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audienceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="card-elevated flex flex-col rounded-lg border border-border bg-card p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3>{card.title}</h3>
                <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-muted-foreground">{card.text}</p>
                <Button variant="outline" className="mt-7 w-full justify-between" asChild>
                  <Link to={card.href}>
                    {card.cta} <ArrowRight size={15} />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Why YGS — premium split section */}
    <section className="section-padding bg-secondary/40">
      <div className="section-container grid gap-12 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <ImagePlaceholder label="Photo professionnelle de Yanis — à ajouter" aspectRatio="aspect-[3/4]" />
        </div>
        <div className="lg:col-span-3">
          <SectionHeading
            overline="Pourquoi YGS"
            title="Une approche locale, directe et sans pression"
          />
          <div className="mt-8 space-y-6">
            {whyPoints.map((p) => (
              <div key={p.title}>
                <h4 className="font-body text-[0.9375rem] font-semibold text-foreground">{p.title}</h4>
                <p className="mt-1 text-[0.875rem] leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
          <Button className="mt-8" asChild>
            <Link to="/contact-yanis">En savoir plus</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Credibility placeholder */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="rounded-lg border border-dashed border-border bg-muted/30 p-10 text-center">
          <p className="label-overline mb-2">Crédibilité</p>
          <h2>Faits saillants</h2>
          <p className="mx-auto mt-3 max-w-lg text-[0.8125rem] text-muted-foreground/60">
            [Section à compléter avec des données réelles: nombre de transactions, années d'expérience, récompenses ou distinctions confirmées. Ne pas inventer.]
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {["[Récompenses / distinctions — à confirmer]", "[Nombre de transactions — à confirmer]", "[Années d'expérience — à confirmer]"].map((s) => (
              <div key={s} className="rounded-md border border-dashed border-border p-6">
                <p className="text-[0.75rem] text-muted-foreground/50">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Sectors */}
    <section className="section-padding bg-secondary/40">
      <div className="section-container">
        <SectionHeading overline="Gatineau et environs" title="Secteurs à surveiller" centered />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {sectors.map((s) => (
            <Link key={s.name} to={s.href} className="card-elevated group flex flex-col rounded-lg border border-border bg-card overflow-hidden">
              <ImagePlaceholder label={`Photo ${s.name}`} aspectRatio="aspect-[16/10]" className="rounded-none border-0" />
              <div className="flex items-center gap-2.5 p-5">
                <MapPin size={15} className="text-accent" />
                <span className="text-[0.9375rem] font-medium text-foreground group-hover:text-primary transition-colors">{s.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <TestimonialPlaceholder />

    <CTASection
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
