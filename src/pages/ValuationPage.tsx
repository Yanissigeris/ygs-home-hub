import PageMeta from "@/components/PageMeta";
import FAQSection from "@/components/FAQSection";
import { useState, FormEvent } from "react";
import RelatedPages from "@/components/RelatedPages";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import BenefitsList from "@/components/BenefitsList";
import FunnelNextStep from "@/components/FunnelNextStep";
import SuccessMessage from "@/components/SuccessMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Lock, Clock, Shield, CheckCircle2, Send, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import yanisPhoto from "@/assets/yanis-hero-cutout.webp";

const benefits = [
  "Fourchette de valeur réaliste basée sur les ventes récentes dans votre secteur de Gatineau",
  "Avis sur le positionnement prix adapté à votre quartier en Outaouais",
  "Forces de votre propriété à mettre de l'avant pour les acheteurs locaux et d'Ottawa",
  "Points à corriger — et lesquels valent la peine dans votre marché",
  "Prochaines étapes possibles, sans engagement",
];

const trustBullets = [
  { icon: Shield, text: "Gratuit et sans engagement" },
  { icon: Clock, text: "Réponse personnalisée en 24h" },
  { icon: CheckCircle2, text: "Basé sur les ventes comparables récentes" },
];

const valuationFaq = [
  { q: "Comment obtenir une évaluation de maison à Gatineau?", a: "Remplissez le formulaire sur cette page avec l'adresse de votre propriété. Je vous reviens en 24h avec une analyse basée sur les ventes comparables récentes dans votre secteur." },
  { q: "Est-ce que l'évaluation est vraiment gratuite?", a: "Oui, c'est gratuit, confidentiel et sans engagement. Vous recevez un rapport clair — aucune obligation de vendre." },
  { q: "Combien vaut ma maison à Gatineau?", a: "La valeur dépend du quartier, du type de propriété et des ventes récentes. Mon évaluation vous donne une fourchette réaliste basée sur les comparables locaux." },
  { q: "Sur quoi se base l'évaluation?", a: "Je me base sur les ventes récentes dans votre rue et votre secteur, l'état de votre propriété, la taille du terrain et les conditions du marché en Outaouais." },
  { q: "Quelle est la différence avec une évaluation en ligne?", a: "Les outils en ligne donnent une estimation approximative. Mon évaluation tient compte des particularités locales et de l'état réel de votre propriété — c'est beaucoup plus précis." },
  { q: "Combien de temps prend l'évaluation?", a: "Vous recevez une réponse personnalisée en 24 heures. Pour une analyse approfondie avec visite, on planifie un rendez-vous à votre convenance." },
  { q: "Faut-il faire visiter ma maison pour l'évaluation?", a: "Pas nécessairement pour une première estimation. Si vous souhaitez un rapport plus détaillé, une visite peut être planifiée — sans engagement." },
  { q: "L'évaluation m'engage-t-elle à vendre?", a: "Non, absolument pas. Beaucoup de propriétaires demandent une évaluation simplement pour connaître leur valeur, sans intention immédiate de vendre." },
  { q: "Mon secteur est-il couvert?", a: "Oui — je couvre tout l'Outaouais : Aylmer, Hull, Plateau, Chelsea, Cantley, Buckingham, Masson-Angers, Val-des-Monts et Pontiac." },
  { q: "Que faire après avoir reçu mon évaluation?", a: "Vous aurez les chiffres et les options. Si vous voulez aller plus loin, je peux préparer un plan vendeur complet ou répondre à vos questions lors d'un appel." },
];

const afterSteps = [
  { title: "Plan vendeur", text: "Allez plus loin — recevez un plan complet: prix, préparation, mise en marché et calendrier.", href: "/plan-vendeur-gatineau", cta: "Recevoir mon plan", highlight: true },
  { title: "Parler à Yanis", text: "Discuter de votre situation et vos options — sans engagement.", href: "/contact-yanis", cta: "Réserver un appel" },
];

const anim = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const ValuationPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const { submit, submitting } = useFormSubmit();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const success = await submit({
      formType: "valuation", lang: "fr",
      name: fd.get("nom") as string || "",
      email: fd.get("courriel") as string || "",
      phone: fd.get("tel") as string || undefined,
      address: fd.get("adresse") as string || undefined,
      message: fd.get("message") as string || undefined,
    });
    if (success) setSubmitted(true);
  };

  return (
    <>
      <PageMeta title="Évaluation gratuite · Gatineau et Outaouais | YGS" description="Obtenez une évaluation gratuite de votre propriété à Gatineau, Aylmer, Hull ou en Outaouais. Analyse basée sur les ventes récentes de votre secteur." />

      {/* ── FORM-FIRST CONVERSION HERO ── */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Ambient light layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_65%_55%,_hsl(200_30%_24%_/_0.45)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

        {/* Portrait – positioned behind the form on desktop */}
        <motion.div
          className="absolute bottom-0 right-[2%] lg:right-[4%] xl:right-[8%] hidden md:block pointer-events-none select-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          aria-hidden="true"
        >
          <div style={{
            maskImage: 'linear-gradient(to top, transparent 0%, black 20%), linear-gradient(to right, transparent 0%, black 35%), linear-gradient(to left, transparent 0%, black 15%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%), linear-gradient(to right, transparent 0%, black 35%), linear-gradient(to left, transparent 0%, black 15%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'destination-in',
          }}>
            <img
              src={yanisPhoto}
              alt="Yanis Gauthier-Sigeris, courtier immobilier à Gatineau"
              className="w-[380px] lg:w-[440px] xl:w-[500px] object-contain object-bottom"
              loading="eager"
            />
          </div>
        </motion.div>

        <div className="section-container relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_460px] md:gap-8 lg:gap-16 items-start">

            {/* ── LEFT: Value proposition ── */}
            <motion.div className="pt-1 md:pt-6 lg:pt-10" {...anim}>
              {/* Eyebrow */}
              <p className="mb-3 md:mb-5 flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase text-primary-foreground/30" style={{ fontFamily: "'Inter', sans-serif" }}>
                <span>Évaluation gratuite</span>
                <span className="inline-block h-[3px] w-[3px] rounded-full bg-accent/40" />
                <span>Gatineau</span>
              </p>

              {/* Headline */}
              <h1 className="text-primary-foreground max-w-[520px]">
                Combien vaut réellement votre propriété?
              </h1>

              {/* Subtitle - hidden on mobile to save space */}
              <p className="hidden sm:block mt-5 max-w-[28rem] text-[1.0625rem] leading-[1.75] text-primary-foreground/45">
                Recevez une estimation personnalisée et confidentielle — basée sur votre propriété et les ventes comparables récentes dans votre secteur de Gatineau, Aylmer, Hull ou Outaouais.
              </p>
              {/* Shorter mobile subtitle */}
              <p className="sm:hidden mt-3 text-[0.9375rem] leading-[1.6] text-primary-foreground/45">
                Estimation gratuite et confidentielle basée sur les ventes récentes.
              </p>

              {/* Trust bullets - compact on mobile */}
              <div className="mt-4 md:mt-8 space-y-2 md:space-y-3">
                {trustBullets.map((b) => (
                  <div key={b.text} className="flex items-center gap-3 text-[0.8125rem] md:text-[0.875rem] text-primary-foreground/40">
                    <b.icon size={15} className="text-accent shrink-0" />
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>

              {/* Credibility strip */}
              <div className="mt-6 md:mt-10 flex flex-wrap gap-x-7 gap-y-2 text-[0.75rem] text-primary-foreground/20 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-accent/50" /> Hall of Fame RE/MAX</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-accent/50" /> Près de 9 ans en Outaouais</span>
              </div>
            </motion.div>

            {/* ── RIGHT: Form card ── */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              <div className="rounded-[1.25rem] border border-white/[0.08] bg-white/[0.06] backdrop-blur-xl shadow-[0_8px_40px_-12px_hsl(200_40%_8%_/_0.5)] p-6 sm:p-8">
                <h2 className="text-[1.25rem] sm:text-[1.375rem] font-semibold text-primary-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Demandez votre évaluation gratuite
                </h2>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-primary-foreground/35">
                  Je vous reviens personnellement en 24h avec une analyse claire.
                </p>

                {submitted ? (
                  <div className="mt-8 text-center py-8">
                    <CheckCircle2 size={36} className="mx-auto text-accent" />
                    <h3 className="mt-4 text-primary-foreground text-[1.125rem]">Merci! Demande envoyée.</h3>
                    <p className="mt-2 text-[0.875rem] text-primary-foreground/40">Je vous reviens dans les 24 prochaines heures avec votre évaluation.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="adresse" className="text-primary-foreground/60 text-[0.8125rem]">Adresse de la propriété</Label>
                      <Input id="adresse" name="adresse" placeholder="123 rue Exemple, Gatineau" className="mt-1 bg-white/[0.06] border-white/[0.1] text-primary-foreground placeholder:text-primary-foreground/25 focus-visible:ring-accent/30 focus-visible:border-accent/40 h-11" required />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="nom" className="text-primary-foreground/60 text-[0.8125rem]">Nom</Label>
                        <Input id="nom" name="nom" className="mt-1 bg-white/[0.06] border-white/[0.1] text-primary-foreground placeholder:text-primary-foreground/25 focus-visible:ring-accent/30 focus-visible:border-accent/40 h-11" required />
                      </div>
                      <div>
                        <Label htmlFor="courriel" className="text-primary-foreground/60 text-[0.8125rem]">Courriel</Label>
                        <Input id="courriel" name="courriel" type="email" className="mt-1 bg-white/[0.06] border-white/[0.1] text-primary-foreground placeholder:text-primary-foreground/25 focus-visible:ring-accent/30 focus-visible:border-accent/40 h-11" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="tel" className="text-primary-foreground/60 text-[0.8125rem]">Téléphone</Label>
                      <Input id="tel" name="tel" type="tel" className="mt-1 bg-white/[0.06] border-white/[0.1] text-primary-foreground placeholder:text-primary-foreground/25 focus-visible:ring-accent/30 focus-visible:border-accent/40 h-11" />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-primary-foreground/60 text-[0.8125rem]">Message (optionnel)</Label>
                      <Textarea id="message" name="message" rows={2} placeholder="Détails supplémentaires..." className="mt-1 bg-white/[0.06] border-white/[0.1] text-primary-foreground placeholder:text-primary-foreground/25 focus-visible:ring-accent/30 focus-visible:border-accent/40 min-h-[72px] resize-none" />
                    </div>

                    <Button type="submit" size="xl" variant="accent" className="w-full mt-1 shadow-[0_4px_20px_-4px_hsl(36_45%_48%_/_0.35)] font-semibold" disabled={submitting}>
                      <Send size={16} className="mr-1.5" />
                      {submitting ? "Envoi en cours…" : "Recevoir mon évaluation gratuite"}
                    </Button>

                    <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 pt-1 text-[0.75rem] text-primary-foreground/30">
                      <span className="flex items-center gap-1.5"><BadgeCheck size={13} /> Gratuit</span>
                      <span className="flex items-center gap-1.5"><Lock size={13} /> Confidentiel</span>
                      <span className="flex items-center gap-1.5"><Shield size={13} /> Sans engagement</span>
                      <span className="flex items-center gap-1.5"><Clock size={13} /> Réponse en 24h</span>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BenefitsList
        overline="Ce que vous recevez"
        title="Votre évaluation inclut"
        items={benefits}
      />

      <FunnelNextStep
        overline="Et ensuite?"
        title="Après votre évaluation"
        subtitle="Vous aurez les chiffres. Voici les options pour aller plus loin."
        steps={afterSteps}
        background="alt"
      />
      <FAQSection title="Questions sur l'évaluation" items={valuationFaq} />
    </>
  );
};

export default ValuationPage;
