import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import PathwaySection from "@/components/PathwaySection";
import CredibilitySection from "@/components/CredibilitySection";
import ConversionSection from "@/components/ConversionSection";
import SectionHeading from "@/components/SectionHeading";
import TestimonialPlaceholder from "@/components/TestimonialPlaceholder";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ArrowRight, MapPin, Award, Clock, Heart } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gatineau.jpg";
import cardVendreImg from "@/assets/card-vendre.jpg";
import cardAcheterImg from "@/assets/card-acheter.jpg";
import cardPlexImg from "@/assets/card-plex.jpg";

const audienceCards = [
  {
    title: "Vendre",
    text: "Connaître la valeur de votre propriété, planifier le bon timing et obtenir le meilleur prix.",
    cta: "Voir le plan vendeur",
    href: "/vendre-ma-maison-gatineau",
    image: cardVendreImg,
    featured: true,
  },
  {
    title: "Acheter",
    text: "Trouver le bon secteur, éviter les erreurs coûteuses et acheter avec confiance.",
    cta: "Acheter à Gatineau",
    href: "/acheter-a-gatineau",
    image: cardAcheterImg,
  },
  {
    title: "Plex / investissement",
    text: "Analyser la valeur, le rendement et la stratégie avant de prendre une décision.",
    cta: "Voir la page plex",
    href: "/investir-plex-gatineau",
    image: cardPlexImg,
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
      overline="Yanis Gauthier-Sigeris · Courtier immobilier à Gatineau"
      title="Votre allié en immobilier à Gatineau"
      subtitle="Vendre, acheter ou investir dans l'Outaouais avec une stratégie claire, des conseils honnêtes et un accompagnement sans pression."
      primaryCta={{ label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Stratégie claire · Zéro pression · Pas de mauvaises surprises"
      backgroundImage={heroImg}
    />

    <TrustStrip />

    <PathwaySection />

    <ConversionSection />

    {/* Audience cards */}
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label-overline mb-2">À votre service</p>
          <h2>Que cherchez-vous?</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-3">
          {audienceCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={card.href}
                className={`card-elevated group flex flex-col overflow-hidden rounded-xl border bg-card ${
                  card.featured
                    ? "border-accent/30 ring-1 ring-accent/10"
                    : "border-border"
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {card.featured && (
                    <span className="absolute top-3 left-3 rounded-full bg-accent px-2.5 py-0.5 text-[0.625rem] font-semibold text-white">
                      Populaire
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-[1.0625rem] group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-muted-foreground">{card.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-primary">
                    {card.cta} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Inline seller CTA */}
    <section className="cta-band">
      <div className="section-container">
        <p>Vous pensez vendre? Commencez par connaître la valeur de votre propriété.</p>
        <Button size="sm" variant="hero" asChild>
          <Link to="/evaluation-gratuite-gatineau">Évaluation Gratuite →</Link>
        </Button>
      </div>
    </section>

    {/* About YGS */}
    <section className="section-padding bg-background">
      <div className="section-container grid gap-10 lg:grid-cols-5 lg:items-center">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImagePlaceholder label="Photo professionnelle de Yanis" aspectRatio="aspect-[3/4]" />
        </motion.div>
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <p className="label-overline mb-2">Pourquoi YGS</p>
          <h2>Un accompagnement simple, stratégique et humain</h2>
          <p className="prose-body mt-4">
            En immobilier, les bonnes décisions commencent par de bonnes informations. Yanis Gauthier-Sigeris accompagne vendeurs, acheteurs et investisseurs à Gatineau avec une approche claire, locale et sans pression.
          </p>
          <p className="prose-body mt-3">
            Son rôle n'est pas de pousser. C'est de donner les bonnes informations et une stratégie claire — pour que vous avanciez avec confiance quand vous êtes prêt.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.75rem] text-muted-foreground/60">
            <span className="flex items-center gap-1.5"><Clock size={12} /> Près de 9 ans d'expérience</span>
            <span className="flex items-center gap-1.5"><Award size={12} /> Club Platine · Club 100% · Temple de la renommée</span>
            <span className="flex items-center gap-1.5"><Heart size={12} /> Approche axée sur la confiance</span>
          </div>

          <Button className="mt-8" size="lg" asChild>
            <Link to="/contact-yanis">En savoir plus</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Sectors */}
    <section className="section-padding bg-secondary/40">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label-overline text-center mb-2">Gatineau et environs</p>
          <h2 className="text-center">Secteurs à surveiller</h2>
        </motion.div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {sectors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={s.href} className="card-elevated group flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
                <MapPin size={14} className="text-accent shrink-0" />
                <span className="text-[0.875rem] font-medium text-foreground group-hover:text-primary transition-colors">{s.name}</span>
                <ArrowRight size={13} className="ml-auto text-muted-foreground/25 group-hover:text-primary transition-colors" />
              </Link>
            </motion.div>
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
        { label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />
  </>
);

export default Index;
