import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Award, Shield } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SEO from "@/components/SEO";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import RelatedPages from "@/components/RelatedPages";
import heroImg from "@/assets/hero-outaouais-gen.webp";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";

const zones = [
  { name: "Gatineau (centre)", href: "/gatineau", detail: "Services, condos, plex" },
  { name: "Hull", href: "/hull", detail: "Urbain, culture, musées" },
  { name: "Aylmer", href: "/aylmer", detail: "Lac, familles, bilingue" },
  { name: "Chelsea", href: "/chelsea", detail: "Nature, parc de la Gatineau" },
  { name: "Cantley", href: "/cantley", detail: "Rural, grands terrains" },
  { name: "Buckingham", href: "/buckingham-masson-angers", detail: "Abordable, en croissance" },
  { name: "Val-des-Monts", href: "/val-des-monts", detail: "Lacs, tranquillité" },
  { name: "Pontiac", href: "/pontiac", detail: "Campagne, grands espaces" },
];

const services = [
  { label: "Évaluation maison Gatineau", href: "/evaluation-gratuite-gatineau", detail: "Gratuite et sans engagement" },
  { label: "Vendre maison Gatineau", href: "/vendre-ma-maison-gatineau", detail: "Stratégie et accompagnement" },
  { label: "Acheter à Gatineau", href: "/acheter-a-gatineau", detail: "Guide acheteur complet" },
  { label: "Consultation personnalisée", href: "/contact-yanis", detail: "Parlons de votre projet" },
];

const faqItems = [
  { q: "Pourquoi travailler avec un courtier immobilier en Outaouais?", a: "Un courtier local connaît les micro-marchés, les tendances de prix par secteur et les particularités de chaque quartier. En Outaouais, la proximité avec Ottawa crée une dynamique unique — un courtier qui comprend cette réalité vous aide à prendre de meilleures décisions." },
  { q: "Quels secteurs couvrez-vous en Outaouais?", a: "Je couvre l'ensemble de l'Outaouais urbain et périurbain : Gatineau, Hull, Aylmer, le Plateau, Chelsea, Cantley, Val-des-Monts, Buckingham, Masson-Angers et Pontiac. Chaque secteur a son profil — je vous aide à trouver celui qui correspond à vos besoins." },
  { q: "Est-ce que vous servez Aylmer, Hull et Gatineau?", a: "Oui, Aylmer, Hull et Gatineau-centre sont mes secteurs principaux. J'y ai réalisé de nombreuses transactions et je connais les rues, les écoles, les prix et les tendances locales en profondeur." },
  { q: "Comment obtenir une évaluation de maison en Outaouais?", a: "Je prépare une évaluation gratuite basée sur les ventes récentes dans votre secteur. Vous recevez un rapport clair avec le prix de vente recommandé — sans engagement et en toute confidentialité." },
  { q: "Quel est le meilleur secteur pour acheter en Outaouais?", a: "Ça dépend de votre budget, de votre style de vie et de vos priorités. Aylmer est idéal pour les familles, Hull pour les jeunes professionnels, Chelsea pour les amateurs de nature, et Gatineau-centre pour l'accessibilité. On en discute ensemble." },
  { q: "Combien coûte une maison en Outaouais?", a: "Les prix varient beaucoup selon le secteur et le type de propriété. En 2024-2025, les maisons unifamiliales vont de 350 000 $ à plus de 700 000 $ selon l'emplacement. Contactez-moi pour une analyse actuelle de votre secteur cible." },
  { q: "Est-ce que le marché immobilier en Outaouais est actif?", a: "Oui, le marché reste dynamique grâce à la proximité d'Ottawa, à la demande bilingue et à l'attractivité croissante de la région. Les conditions varient par secteur — une analyse personnalisée vous donnera un portrait exact." },
  { q: "Offrez-vous un service bilingue?", a: "Absolument. Je travaille en français et en anglais, ce qui est essentiel dans une région bilingue comme l'Outaouais. Que vous veniez d'Ottawa, de Montréal ou de l'étranger, je m'adapte à votre langue." },
  { q: "Pourquoi choisir un courtier local plutôt qu'un courtier d'Ottawa?", a: "Un courtier licencié au Québec connaît les lois, les taxes (taxe de bienvenue, taxe scolaire) et les particularités du marché québécois. Un courtier ontarien ne peut pas légalement vous représenter au Québec." },
  { q: "Comment commencer mon projet immobilier en Outaouais?", a: "Contactez-moi pour une consultation gratuite. On discute de vos objectifs, je vous donne les faits et les chiffres, et on définit ensemble la meilleure stratégie pour votre situation." },
];

const OutaouaisHubPage = () => (
  <div>
    <SEO title="Courtier immobilier Outaouais | Yanis Gauthier-Sigeris" description="Courtier immobilier en Outaouais avec 9 ans d'expérience. Hall of Fame RE/MAX. Gatineau, Aylmer, Hull, Chelsea, Cantley, Val-des-Monts." canonical="https://yanisgauthier.com/courtier-immobilier-outaouais" hreflangFr="https://yanisgauthier.com/courtier-immobilier-outaouais" hreflangEn="https://yanisgauthier.com/en/outaouais-real-estate-agent" />
    <PageMeta
      title="Courtier immobilier Outaouais · Gatineau"
      description="Yanis Gauthier-Sigeris, courtier immobilier en Outaouais. Gatineau, Hull, Aylmer, Chelsea, Cantley — stratégie claire pour vendre, acheter ou investir."
    ogImage="https://yanisgauthier.com/og/og-home.jpg" />
    <ServiceJsonLd
      name="Courtier immobilier en Outaouais"
      description="Services de courtage immobilier résidentiel en Outaouais — vente, achat, évaluation et investissement plex à Gatineau, Hull, Aylmer, Chelsea et Cantley."
      url="/courtier-immobilier-outaouais"
      serviceType="Real Estate Brokerage"
    />

    <HeroSection
      overline="OUTAOUAIS · GATINEAU · HULL · AYLMER"
      title="Votre courtier immobilier en Outaouais"
      subtitle="Vendre, acheter ou investir dans la région — avec un accompagnement local, bilingue et basé sur les faits."
      primaryCta={{ label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      socialProof="Hall of Fame RE/MAX"
      heroVideo="/hero-interior-720.mp4"
      heroVideoPoster="/hero-video-poster.webp"
      agentImage={yanisPortrait}
      agentImageSm={yanisPortraitSm}
      agentName="Yanis Gauthier-Sigeris"
    />
{/* Intro */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading overline="Votre courtier local" title="Un accompagnement clair, partout en Outaouais" centered />
        <p className="mt-6 text-base leading-relaxed text-muted-foreground text-center">
          Je suis Yanis Gauthier-Sigeris, courtier immobilier RE/MAX à Gatineau. J'accompagne les vendeurs, acheteurs et investisseurs dans l'ensemble de l'Outaouais — de Hull à Chelsea, d'Aylmer à Cantley. Mon approche : des conseils basés sur les données, une stratégie personnalisée et un accompagnement transparent du début à la fin.
        </p>
      </div>
    </section>

    {/* Zones served */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container max-w-[56rem]">
        <SectionHeading overline="Secteurs desservis" title="Les municipalités que je dessers en Outaouais" centered />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {zones.map((z) => (
            <Link
              key={z.href}
              to={z.href}
              className="group flex items-center justify-between gap-3 rounded-xl border border-border/40 bg-card px-5 py-4 transition-all duration-200 hover:border-accent/25 hover:shadow-sm hover:-translate-y-0.5"
            >
              <div className="min-w-0">
                <p className="text-[0.9375rem] font-semibold text-foreground group-hover:text-primary transition-colors truncate">{z.name}</p>
                <p className="mt-0.5 text-[0.8125rem] text-muted-foreground/60 truncate">{z.detail}</p>
              </div>
              <ArrowRight size={14} className="shrink-0 text-muted-foreground/30 transition-all group-hover:text-primary group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-[56rem]">
        <SectionHeading overline="Services" title="Ce que je peux faire pour vous" centered />
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="group flex items-center justify-between gap-3 rounded-xl border border-border/40 bg-card px-5 py-4 transition-all duration-200 hover:border-accent/25 hover:shadow-sm hover:-translate-y-0.5"
            >
              <div className="min-w-0">
                <p className="text-[0.9375rem] font-semibold text-foreground group-hover:text-primary transition-colors truncate">{s.label}</p>
                <p className="mt-0.5 text-[0.8125rem] text-muted-foreground/60 truncate">{s.detail}</p>
              </div>
              <ArrowRight size={14} className="shrink-0 text-muted-foreground/30 transition-all group-hover:text-primary group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why work with me */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container max-w-3xl">
        <SectionHeading overline="Pourquoi moi" title="Un courtier local, bilingue et transparent" centered />
        <ul className="mt-8 space-y-3">
          {[
            "Courtier RE/MAX — Hall of Fame, reconnu en Outaouais",
            "Bilingue français-anglais — essentiel pour la clientèle Ottawa-Gatineau",
            "Spécialisé en revente résidentielle, premier achat et investissement plex",
            "Évaluations basées sur des données réelles — pas des estimations en ligne",
            "Accompagnement de la relocalisation Ottawa → Gatineau et Montréal → Gatineau",
            "Approche honnête — je vous donne les chiffres et les options, vous décidez",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
              <span className="text-[0.9375rem] text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* FAQ */}
    <FAQSection title="Questions sur l'immobilier en Outaouais" items={faqItems} />

    {/* Related pages */}
    <RelatedPages
      overline="À explorer"
      title="Découvrez les secteurs et services"
      pages={[
        { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
        { title: "Rapport de marché", text: "Tendances immobilières à Gatineau.", href: "/rapport-marche-gatineau" },
        { title: "Blogue immobilier", text: "Articles et conseils locaux.", href: "/blogue" },
      ]}
    />

    <CTASection
      dark
      overline="Première étape"
      title="Commençons votre projet immobilier en Outaouais"
      text="Évaluation, consultation achat ou analyse plex — on commence là où vous êtes rendu."
      buttons={[
        { label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />
  </div>
);

export default OutaouaisHubPage;
