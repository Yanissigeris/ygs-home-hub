import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const buyerProfiles = [
  "Premier acheteur",
  "Famille qui veut plus d'espace",
  "Acheteur relocalisé d'Ottawa ou Montréal",
  "Acheteur qui hésite entre plusieurs secteurs",
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer" },
  { name: "Hull", href: "/plateau-aylmer" },
  { name: "Buckingham / Masson-Angers", href: "/plateau-aylmer" },
];

const faq = [
  { q: "Est-ce le bon moment pour acheter à Gatineau?", a: "Chaque situation est différente. Lors de notre consultation, on évalue votre budget, vos priorités et les conditions actuelles du marché." },
  { q: "Je viens d'Ottawa — comment ça fonctionne au Québec?", a: "Le processus d'achat au Québec a quelques particularités. Je vous guide à travers chaque étape pour que la transition soit simple." },
  { q: "Dois-je avoir une pré-approbation hypothécaire?", a: "Oui, c'est fortement recommandé. Ça vous donne une idée claire de votre budget et renforce votre position d'acheteur." },
];

const BuyerPage = () => (
  <>
    <HeroSection
      title="Acheter à Gatineau avec plus de clarté et moins de stress"
      subtitle="Que vous soyez premier acheteur, famille qui cherche plus d'espace ou acheteur venant d'Ottawa ou Montréal, je vous guide à chaque étape."
      primaryCta={{ label: "Réserver une consultation acheteur", href: "/contact-yanis" }}
    />

    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading
          title="Acheter ici, ce n'est pas juste trouver une maison"
          subtitle="Il faut aussi comprendre les secteurs, la valeur réelle, les taxes, les conditions, le potentiel de revente et la stratégie d'offre."
        />
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="section-container max-w-3xl">
        <SectionHeading title="Je peux vous aider si vous êtes…" />
        <div className="mt-8 space-y-3">
          {buyerProfiles.map((p) => (
            <div key={p} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading title="Quelques secteurs à comparer" centered />
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

    <CTASection
      title="Parlons de votre projet"
      text="Je peux vous aider à clarifier votre budget, cibler les bons secteurs et éviter les erreurs coûteuses."
      buttons={[{ label: "Réserver ma consultation", href: "/contact-yanis" }]}
    />

    <FAQSection items={faq} />
  </>
);

export default BuyerPage;
