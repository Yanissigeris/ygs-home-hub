import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import TestimonialPlaceholder from "@/components/TestimonialPlaceholder";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ArrowRight, MapPin } from "lucide-react";

const audienceCards = [
  {
    title: "Vendre",
    text: "Vous voulez savoir combien vaut vraiment votre propriété et comment la vendre au bon prix, sans mauvaises surprises?",
    cta: "Voir le plan vendeur",
    href: "/vendre-ma-maison-gatineau",
  },
  {
    title: "Acheter",
    text: "Vous cherchez une maison, un condo ou un secteur qui correspond vraiment à votre mode de vie et à votre budget?",
    cta: "Acheter à Gatineau",
    href: "/acheter-a-gatineau",
  },
  {
    title: "Plex / investissement",
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

const Index = () => (
  <>
    <HeroSection
      title="YGS — Votre allié en immobilier à Gatineau"
      subtitle="Acheter, vendre ou investir à Gatineau avec une stratégie claire, des conseils honnêtes et un accompagnement sans pression."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
    />

    {/* Audience cards */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audienceCards.map((card) => (
            <div key={card.title} className="card-elevated flex flex-col rounded-lg border border-border bg-card p-7">
              <h3 className="text-xl text-foreground">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              <Button variant="outline" className="mt-6 w-full justify-between" asChild>
                <Link to={card.href}>
                  {card.cta} <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why YGS */}
    <section className="section-padding bg-secondary">
      <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            title="Une approche locale, directe et sans pression"
            subtitle="Je travaille surtout Gatineau, Aylmer, Hull et les secteurs autour. Mon objectif n'est pas de vous pousser à agir trop vite. Mon objectif est de vous donner une stratégie claire, adaptée à votre situation, pour que vous preniez une bonne décision."
          />
          <Button className="mt-6" asChild>
            <Link to="/contact-yanis">En savoir plus</Link>
          </Button>
        </div>
        <ImagePlaceholder label="Photo professionnelle de Yanis" aspectRatio="aspect-square" />
      </div>
    </section>

    {/* Sectors */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading title="Secteurs à surveiller" centered />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {sectors.map((s) => (
            <Link key={s.name} to={s.href} className="card-elevated group flex flex-col rounded-lg border border-border bg-card overflow-hidden">
              <ImagePlaceholder label={`Photo ${s.name}`} aspectRatio="aspect-[16/10]" className="rounded-none border-0" />
              <div className="flex items-center gap-2 p-5">
                <MapPin size={16} className="text-accent" />
                <span className="font-medium text-foreground group-hover:text-primary">{s.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <TestimonialPlaceholder />

    <CTASection
      title="Commencez par la bonne première étape"
      text="Évaluation, consultation achat ou analyse plex — on commence là où vous êtes rendu."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
    />
  </>
);

export default Index;
