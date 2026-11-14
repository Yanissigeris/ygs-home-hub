import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Award, Shield } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import RelatedPages from "@/components/RelatedPages";
import heroImg from "@/assets/hero-outaouais-photo.webp";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";
import yanisPortraitMd from "@/assets/yanis-portrait-nobg-md.webp";
import yanisPortraitAvif from "@/assets/yanis-portrait-nobg.avif";
import yanisPortraitSmAvif from "@/assets/yanis-portrait-nobg-sm.avif";
import yanisPortraitMdAvif from "@/assets/yanis-portrait-nobg-md.avif";
import yanisPortraitLg from "@/assets/yanis-portrait-nobg-lg.webp";
import yanisPortraitLgAvif from "@/assets/yanis-portrait-nobg-lg.avif";

const zones = [
  { name: "Gatineau (centre)", href: "/gatineau/", detail: "Services, condos, plex" },
  { name: "Hull", href: "/hull/", detail: "Urbain, culture, musées" },
  { name: "Aylmer", href: "/aylmer/", detail: "Lac, familles, bilingue" },
  { name: "Chelsea", href: "/chelsea/", detail: "Nature, parc de la Gatineau" },
  { name: "Cantley", href: "/cantley/", detail: "Rural, grands terrains" },
  { name: "Buckingham", href: "/buckingham-masson-angers/", detail: "Abordable, en croissance" },
  { name: "Val-des-Monts", href: "/val-des-monts/", detail: "Lacs, chalets" },
  { name: "Pontiac", href: "/pontiac/", detail: "Campagne, grands espaces" },
];

const services = [
  { label: "Évaluation maison Gatineau", href: "/evaluation-gratuite-gatineau/", detail: "Gratuite et sans engagement" },
  { label: "Vendre maison Gatineau", href: "/vendre-ma-maison-gatineau/", detail: "Prix et mise en marché" },
  { label: "Acheter à Gatineau", href: "/acheter-a-gatineau/", detail: "Guide acheteur complet" },
  { label: "Consultation personnalisée", href: "/contact-yanis/", detail: "Parlons de votre projet" },
];

const faqItems = [
  { q: "Pourquoi travailler avec un courtier immobilier en Outaouais?", a: "Un courtier local connaît les micro-marchés, les tendances de prix par secteur et les particularités de chaque quartier. En Outaouais, la proximité d'Ottawa influence les prix et la demande. Un courtier qui connaît cette réalité vous aide à mieux décider." },
  { q: "Quels secteurs couvrez-vous en Outaouais?", a: "Je couvre l'ensemble de l'Outaouais urbain et périurbain : Gatineau, Hull, Aylmer, le Plateau, Chelsea, Cantley, Val-des-Monts, Buckingham, Masson-Angers et Pontiac. Chaque secteur a son profil, je vous aide à trouver celui qui correspond à vos besoins." },
  { q: "Est-ce que vous servez Aylmer, Hull et Gatineau?", a: "Oui, Aylmer, Hull et Gatineau-centre sont mes secteurs principaux. J'y ai réalisé de nombreuses transactions et je connais les rues, les écoles, les prix et les tendances locales en profondeur." },
  { q: "Comment obtenir une évaluation de maison en Outaouais?", a: "Je prépare une évaluation gratuite basée sur les ventes récentes dans votre secteur. Vous recevez un rapport clair avec le prix de vente recommandé, sans engagement et en toute confidentialité." },
  { q: "Quel est le meilleur secteur pour acheter en Outaouais?", a: "Ça dépend de votre budget, de votre style de vie et de vos priorités. Aylmer convient bien aux familles, Hull aux jeunes professionnels, Chelsea aux amateurs de nature et Gatineau-centre à ceux qui cherchent des prix accessibles. On en discute ensemble." },
  { q: "Combien coûte une maison en Outaouais?", a: "Au 3e trimestre 2026, le prix médian d'une unifamiliale était de 480 000 $ dans la région métropolitaine de Gatineau, et celui d'une copropriété de 297 450 $ (APCIQ, données Centris). Selon le secteur, le prix médian d'une unifamiliale allait de 395 000 $ à Buckingham/Masson-Angers à 530 000 $ dans la périphérie de Gatineau. Contactez-moi pour une analyse de votre secteur cible." },
  { q: "Est-ce que le marché immobilier en Outaouais est actif?", a: "Oui. Au 3e trimestre 2026, 1 044 propriétés résidentielles se sont vendues dans la région métropolitaine de Gatineau. Sur 12 mois, les conditions de l'unifamiliale favorisaient les vendeurs sous 740 000 $, et le marché était équilibré au-dessus (APCIQ, données Centris). Le portrait change toutefois d'un secteur à l'autre." },
  { q: "Offrez-vous un service bilingue?", a: "Oui. Je travaille en français et en anglais, ce qui compte dans une région bilingue comme l'Outaouais. Peu importe d'où vous arrivez, je m'adapte à votre langue." },
  { q: "Pourquoi choisir un courtier local plutôt qu'un courtier d'Ottawa?", a: "Un courtier licencié au Québec connaît les lois, les taxes (taxe de bienvenue, taxe scolaire) et les particularités du marché québécois. Un courtier ontarien ne peut pas légalement vous représenter au Québec." },
  { q: "Comment commencer mon projet immobilier en Outaouais?", a: "Contactez-moi pour une consultation gratuite. On discute de vos objectifs, je vous donne les faits et les chiffres, et on définit ensemble la bonne stratégie pour votre situation." },
];

const OutaouaisHubPage = () => (
  <div>
    <PageMeta
      title="Courtier immobilier en Outaouais, secteur par secteur | YGS"
      description="Les secteurs de l'Outaouais un par un, de Hull à Pontiac : le prix et le profil de chacun, avec l'avis d'un courtier local qui y travaille."
    ogImage="https://yanisgauthier.com/og/og-home.jpg" />
    <ServiceJsonLd
      name="Courtier immobilier en Outaouais"
      description="Services de courtage immobilier résidentiel en Outaouais : vente, achat, évaluation et investissement plex à Gatineau, Hull, Aylmer, Chelsea et Cantley."
      url="/courtier-immobilier-outaouais/"
      serviceType="Real Estate Brokerage"
    />

    <HeroSection
      overline="SECTEURS ET MUNICIPALITÉS DE L'OUTAOUAIS"
      title="L'immobilier en Outaouais, secteur par secteur"
      subtitle="Le prix et le profil de chaque secteur, de Hull à Chelsea et d'Aylmer à Val-des-Monts, pour choisir où acheter ou comment vendre."
      primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis/" }}
      socialProof="Hall of Fame RE/MAX"
      heroBgImage={heroImg}
      photoCredit={{ text: "Photo : cjuneau, CC BY 2.0, Wikimedia Commons (recadrée)", href: "https://commons.wikimedia.org/wiki/File:Ridge_Road,_Gatineau_Park_(7985502539).jpg" }}
      agentImage={yanisPortrait}
      agentImageSm={yanisPortraitSm}
      agentImageMd={yanisPortraitMd}
      agentImageAvif={yanisPortraitAvif}
      agentImageSmAvif={yanisPortraitSmAvif}
      agentImageMdAvif={yanisPortraitMdAvif}
      agentImageLg={yanisPortraitLg}
      agentImageLgAvif={yanisPortraitLgAvif}
      agentName="Yanis Gauthier-Sigeris"
    />
{/* Intro */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-[44rem]">
        <SectionHeading overline="Votre courtier local" title="Des chiffres clairs, partout en Outaouais" />
        <p className="prose-body mt-6">
          Je suis Yanis Gauthier-Sigeris, courtier immobilier RE/MAX à Gatineau, et je travaille dans toute la région, de Hull à Chelsea et d'Aylmer à Cantley. Avant chaque décision, je vous montre les ventes comparables de votre secteur et je vous explique ce qu'elles veulent dire pour vous.
        </p>
        </div>
      </div>
    </section>

    {/* Zones served */}
    <section className="section-padding bg-[var(--cream)]">
      <div className="section-container">
        <div className="max-w-[40rem]"><SectionHeading overline="Secteurs desservis" title="Les municipalités que je dessers en Outaouais" /></div>
        <div className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((z) => (
            <Link
              key={z.href}
              to={z.href}
              className="group flex items-center justify-between gap-4 border-t py-5" style={{ borderColor: "rgba(0,14,53,0.12)" }}
            >
              <div className="min-w-0">
                <p className="font-display text-[1.0625rem] font-semibold tracking-[-0.01em] text-[var(--ink)] group-hover:underline underline-offset-4">{z.name}</p>
                <p className="mt-1 text-[0.875rem] text-[var(--ink-soft)]">{z.detail}</p>
              </div>
              <ArrowRight size={16} className="shrink-0 text-[var(--gold-text)] transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-[40rem]"><SectionHeading overline="Services" title="Ce que je peux faire pour vous" /></div>
        <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="group flex items-center justify-between gap-4 border-t py-5" style={{ borderColor: "rgba(0,14,53,0.12)" }}
            >
              <div className="min-w-0">
                <p className="font-display text-[1.0625rem] font-semibold tracking-[-0.01em] text-[var(--ink)] group-hover:underline underline-offset-4">{s.label}</p>
                <p className="mt-1 text-[0.875rem] text-[var(--ink-soft)]">{s.detail}</p>
              </div>
              <ArrowRight size={16} className="shrink-0 text-[var(--gold-text)] transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why work with me */}
    <section className="section-padding bg-[var(--cream)]">
      <div className="section-container">
        <div className="max-w-[40rem]"><SectionHeading overline="Pourquoi moi" title="Un courtier local et bilingue" /></div>
        <ol className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Courtier RE/MAX, Hall of Fame, reconnu en Outaouais",
            "Bilingue français-anglais, pour la clientèle des deux côtés de la rivière",
            "Revente résidentielle, premier achat et investissement plex",
            "Évaluations appuyées sur les ventes comparables du secteur",
            "Relocalisation d'Ottawa ou de Montréal vers Gatineau",
          ].map((item, i) => (
            <li key={item} className="flex gap-4 border-t py-5" style={{ borderColor: "rgba(0,14,53,0.12)" }}>
              <span className="font-display text-[0.9375rem] font-semibold text-[var(--gold-text)]">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[1rem] leading-[1.55] text-[var(--ink)]">{item}</span>
            </li>
            ))}
        </ol>
      </div>
    </section>

    {/* FAQ */}
    <FAQSection title="Questions sur l'immobilier en Outaouais" items={faqItems} />

    {/* Related pages */}
    <RelatedPages
      overline="À explorer"
      title="Découvrez les secteurs et services"
      pages={[
        { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
        { title: "Rapport de marché", text: "Tendances immobilières à Gatineau.", href: "/rapport-marche-gatineau/" },
        { title: "Blogue immobilier", text: "Articles et conseils locaux.", href: "/blogue/" },
      ]}
    />

    <CTASection
      dark
      overline="Première étape"
      title="Commençons votre projet immobilier en Outaouais"
      text="Évaluation, consultation achat ou analyse plex, on commence là où vous êtes rendu."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" },
        { label: "Parler à Yanis", href: "/contact-yanis/", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />
  </div>
);

export default OutaouaisHubPage;
