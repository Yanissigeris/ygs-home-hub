import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { MapPin, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-gatineau.jpg";

const buyerProfiles = [
  { title: "Premier acheteur", desc: "Comprendre le processus étape par étape sans se sentir dépassé." },
  { title: "Famille qui veut plus d'espace", desc: "Trouver un quartier familial avec plus de pièces, un terrain et les bons services à proximité." },
  { title: "Relocalisé d'Ottawa ou Montréal", desc: "Un guide local qui connaît vraiment le terrain — secteurs, prix, taxes et particularités du Québec." },
  { title: "Hésitant entre secteurs", desc: "Comparer les quartiers objectivement — prix, potentiel, style de vie — pour trouver le bon fit." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer" },
  { name: "Hull", href: "/plateau-aylmer" },
  { name: "Buckingham / Masson-Angers", href: "/plateau-aylmer" },
];

const faq = [
  { q: "Est-ce le bon moment pour acheter à Gatineau?", a: "Chaque situation est différente. On évalue votre budget, vos priorités et les conditions du marché ensemble." },
  { q: "Je viens d'Ottawa — comment ça fonctionne au Québec?", a: "Promesse d'achat, inspection, notaire — le processus a ses particularités. Après près de 9 ans en Outaouais, j'ai accompagné beaucoup d'acheteurs dans cette transition." },
  { q: "Dois-je avoir une pré-approbation?", a: "Fortement recommandé. Ça clarifie votre budget et renforce votre position lors de l'offre." },
  { q: "Comment choisir le bon secteur?", a: "Mode de vie, budget, famille, trajets quotidiens — on regarde tout ça ensemble pour trouver le meilleur équilibre." },
];

const BuyerPage = () => (
  <>
    <HeroSection
      overline="Pour acheteurs · Gatineau"
      title="Acheter à Gatineau avec clarté et confiance"
      subtitle="Premier acheteur, famille qui grandit ou relocalisé d'Ottawa — je vous guide à chaque étape pour acheter sans stress et sans erreur."
      primaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      trustLine="Stratégie claire. Zéro pression. Pas de mauvaises surprises."
    />

    <section className="section-padding bg-background">
      <div className="section-container max-w-2xl">
        <SectionHeading
          overline="L'achat immobilier"
          title="Choisir une propriété, c'est aussi choisir un secteur, un style de vie et une stratégie"
          subtitle="Au-delà de la maison, il faut comprendre les secteurs, la valeur réelle, les taxes, le potentiel de revente et la bonne stratégie d'offre."
        />
      </div>
    </section>

    <section className="section-padding bg-secondary/40">
      <div className="section-container max-w-3xl">
        <SectionHeading overline="Pour qui" title="Je peux vous aider si vous êtes…" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {buyerProfiles.map((p) => (
            <div key={p.title} className="rounded-lg border border-border bg-card p-5">
              <p className="text-[0.875rem] font-semibold text-foreground">{p.title}</p>
              <p className="mt-1 text-[0.8125rem] text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Inline valuation CTA */}
    <section className="bg-primary py-5">
      <div className="section-container flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-[0.8125rem] font-medium text-primary-foreground/80">
          Vous êtes aussi vendeur? Connaître la valeur de votre propriété peut clarifier votre budget d'achat.
        </p>
        <Button size="sm" variant="hero" asChild>
          <Link to="/evaluation-gratuite-gatineau">Obtenir ma valeur →</Link>
        </Button>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading overline="Quartiers" title="Secteurs à comparer" />
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {sectors.map((s) => (
            <Link key={s.name} to={s.href} className="card-elevated group flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4">
              <MapPin size={14} className="text-accent shrink-0" />
              <span className="text-[0.8125rem] font-medium text-foreground group-hover:text-primary transition-colors">{s.name}</span>
              <ArrowRight size={13} className="ml-auto text-muted-foreground/30 group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      dark
      overline="Consultation"
      title="Parlons de votre projet d'achat"
      text="Budget, secteurs, stratégie — on clarifie tout ça avant de commencer les visites."
      buttons={[{ label: "Réserver ma consultation", href: "/contact-yanis" }]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default BuyerPage;
