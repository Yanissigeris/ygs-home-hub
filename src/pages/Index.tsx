import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import TestimonialPlaceholder from "@/components/TestimonialPlaceholder";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ArrowRight, MapPin, Target, Shield, Users, Award, Clock, Heart } from "lucide-react";

const audienceCards = [
  {
    title: "Vendre",
    icon: Target,
    text: "Vous voulez savoir combien vaut votre propriété et comment la vendre au bon prix, au bon moment, sans mauvaises surprises?",
    cta: "Voir le plan vendeur",
    href: "/vendre-ma-maison-gatineau",
  },
  {
    title: "Acheter",
    icon: Users,
    text: "Vous cherchez une maison, un condo ou un secteur qui correspond vraiment à votre mode de vie, votre famille et votre budget?",
    cta: "Acheter à Gatineau",
    href: "/acheter-a-gatineau",
  },
  {
    title: "Plex / investissement",
    icon: Shield,
    text: "Vous possédez un plex ou vous songez à investir? Je vous aide à voir clair sur la valeur, le rendement et le bon timing.",
    cta: "Voir la page plex",
    href: "/investir-plex-gatineau",
  },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer" },
  { name: "Hull", href: "/plateau-aylmer" },
  { name: "Buckingham / Masson-Angers", href: "/plateau-aylmer" },
];

const credibilityPoints = [
  { icon: Clock, label: "Près de 9 ans d'expérience", desc: "en immobilier résidentiel en Outaouais" },
  { icon: Award, label: "Distinctions RE/MAX", desc: "Club Platine, Club 100%, Temple de la renommée" },
  { icon: Heart, label: "Approche axée sur la confiance", desc: "priorité à la satisfaction client et aux décisions éclairées" },
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

    {/* About YGS — personal brand section */}
    <section className="section-padding bg-secondary/40">
      <div className="section-container grid gap-14 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <ImagePlaceholder label="Photo professionnelle de Yanis — à ajouter" aspectRatio="aspect-[3/4]" />
        </div>
        <div className="lg:col-span-3">
          <SectionHeading
            overline="Pourquoi YGS"
            title="Une approche simple, stratégique et humaine"
          />
          <p className="prose-body mt-5">
            Mon rôle n'est pas de vous pousser à prendre une décision. Mon rôle est de vous donner les bonnes informations, la bonne stratégie et un accompagnement clair à chaque étape — pour que vous avanciez avec confiance.
          </p>
          <p className="prose-body mt-4">
            Depuis près de 9 ans, j'accompagne des vendeurs, des acheteurs et des investisseurs en Outaouais. Je travaille surtout à Gatineau, Aylmer, Hull et dans les secteurs autour. Chaque situation est différente, et c'est exactement pour ça que je prends le temps de comprendre la vôtre avant de proposer quoi que ce soit.
          </p>
          <Button className="mt-8" asChild>
            <Link to="/contact-yanis">En savoir plus sur Yanis</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Credibility band */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid gap-8 sm:grid-cols-3">
          {credibilityPoints.map((c) => (
            <div key={c.label} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary">
                <c.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-[0.9375rem] font-semibold text-foreground">{c.label}</p>
                <p className="mt-0.5 text-[0.8125rem] text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
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
