import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const buyerProfiles = [
  { title: "Premier acheteur", desc: "Vous achetez pour la première fois et voulez comprendre le processus de A à Z." },
  { title: "Famille qui veut plus d'espace", desc: "Vous êtes à l'étroit et cherchez un quartier familial avec plus de pièces et un terrain." },
  { title: "Relocalisé d'Ottawa ou Montréal", desc: "Vous arrivez de l'autre côté de la rivière et voulez un guide local qui connaît le terrain." },
  { title: "Hésitant entre plusieurs secteurs", desc: "Vous ne savez pas encore où acheter — je vous aide à comparer les quartiers objectivement." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer" },
  { name: "Hull", href: "/plateau-aylmer" },
  { name: "Buckingham / Masson-Angers", href: "/plateau-aylmer" },
];

const faq = [
  { q: "Est-ce le bon moment pour acheter à Gatineau?", a: "Chaque situation est différente. Lors de notre consultation, on évalue votre budget, vos priorités et les conditions actuelles du marché pour voir si c'est le bon timing pour vous." },
  { q: "Je viens d'Ottawa — comment ça fonctionne au Québec?", a: "Le processus d'achat au Québec a quelques particularités (promesse d'achat, inspection, notaire). Je vous guide à travers chaque étape pour que la transition soit simple et sans surprise." },
  { q: "Dois-je avoir une pré-approbation hypothécaire?", a: "C'est fortement recommandé. Ça vous donne une idée claire de votre budget et renforce votre position d'acheteur quand vient le temps de faire une offre." },
  { q: "Comment choisir le bon secteur?", a: "Ça dépend de votre mode de vie, votre budget, votre famille et vos besoins quotidiens. On regarde tout ça ensemble." },
];

const BuyerPage = () => (
  <>
    <HeroSection
      overline="Pour acheteurs · Gatineau et environs"
      title="Acheter à Gatineau avec plus de clarté et moins de stress"
      subtitle="Que vous soyez premier acheteur, famille qui cherche plus d'espace ou acheteur venant d'Ottawa ou Montréal, je vous guide à chaque étape."
      primaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      trustLine="Stratégie claire. Zéro pression. Pas de mauvaises surprises."
    />

    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading
          overline="L'achat immobilier"
          title="Acheter ici, ce n'est pas juste trouver une maison"
          subtitle="Il faut aussi comprendre les secteurs, la valeur réelle, les taxes municipales, les conditions du marché, le potentiel de revente et la bonne stratégie d'offre. C'est là que j'entre en jeu."
        />
      </div>
    </section>

    <section className="section-padding bg-secondary/40">
      <div className="section-container max-w-3xl">
        <SectionHeading overline="Pour qui" title="Je peux vous aider si vous êtes…" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {buyerProfiles.map((p) => (
            <div key={p.title} className="card-elevated rounded-lg border border-border bg-card p-6">
              <h4 className="font-body text-[0.9375rem] font-semibold text-foreground">{p.title}</h4>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading overline="Quartiers" title="Quelques secteurs à comparer" centered />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {sectors.map((s) => (
            <Link key={s.name} to={s.href} className="card-elevated group flex flex-col rounded-lg border border-border bg-card overflow-hidden">
              <ImagePlaceholder label={`Photo ${s.name}`} aspectRatio="aspect-[16/10]" className="rounded-none border-0" />
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-2.5">
                  <MapPin size={15} className="text-accent" />
                  <span className="text-[0.9375rem] font-medium text-foreground group-hover:text-primary transition-colors">{s.name}</span>
                </div>
                <ArrowRight size={15} className="text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      overline="Consultation gratuite"
      title="Parlons de votre projet"
      text="Je peux vous aider à clarifier votre budget, cibler les bons secteurs et éviter les erreurs coûteuses."
      buttons={[{ label: "Réserver ma consultation", href: "/contact-yanis" }]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default BuyerPage;
