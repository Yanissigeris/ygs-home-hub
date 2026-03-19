import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Send, Lock, Shield, Clock, BadgeCheck, CheckCircle2, BookOpen } from "lucide-react";

interface GuideRequestFormProps {
  guideTitle: string;
  headline: string;
  subtitle: string;
  submitLabel: string;
  successTitle?: string;
  successText?: string;
}

const GuideRequestForm = ({
  guideTitle,
  headline,
  subtitle,
  submitLabel,
  successTitle = "Merci! Votre guide est en route.",
  successText = "Vous allez le recevoir par courriel dans les prochaines minutes.",
}: GuideRequestFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="recevoir-guide" className="section-padding bg-secondary/20">
      <div className="section-container max-w-[56rem]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_420px] items-start"
        >
          {/* Left: value proposition */}
          <div className="pt-2">
            <p className="mb-3 flex items-center gap-2.5 text-[0.75rem] font-medium tracking-[0.12em] uppercase text-muted-foreground/60">
              <BookOpen size={14} className="text-accent" />
              <span>Guide gratuit</span>
            </p>
            <h2 className="text-foreground">{headline}</h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground max-w-[26rem]">
              {subtitle}
            </p>
            <div className="mt-6 space-y-2.5">
              {[
                { icon: Shield, text: "Gratuit et sans engagement" },
                { icon: Clock, text: "Envoyé par courriel en quelques minutes" },
                { icon: CheckCircle2, text: "Contenu adapté au marché de Gatineau" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2.5 text-[0.85rem] text-muted-foreground/70">
                  <b.icon size={15} className="text-accent shrink-0" />
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div className="rounded-2xl border border-border bg-card shadow-lg p-6 sm:p-8">
            <h3 className="text-[1.175rem] font-semibold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              {guideTitle}
            </h3>
            <p className="mt-1 text-[0.8125rem] text-muted-foreground">
              Remplissez le formulaire pour le recevoir par courriel.
            </p>

            {submitted ? (
              <div className="mt-8 text-center py-6">
                <CheckCircle2 size={36} className="mx-auto text-accent" />
                <h4 className="mt-4 text-foreground text-[1.125rem] font-semibold">{successTitle}</h4>
                <p className="mt-2 text-[0.875rem] text-muted-foreground">{successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="guide-prenom" className="text-muted-foreground text-[0.8125rem]">Prénom</Label>
                    <Input id="guide-prenom" placeholder="Votre prénom" className="mt-1 h-11" required />
                  </div>
                  <div>
                    <Label htmlFor="guide-nom" className="text-muted-foreground text-[0.8125rem]">Nom</Label>
                    <Input id="guide-nom" placeholder="Votre nom" className="mt-1 h-11" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="guide-courriel" className="text-muted-foreground text-[0.8125rem]">Courriel</Label>
                  <Input id="guide-courriel" type="email" placeholder="vous@exemple.com" className="mt-1 h-11" required />
                </div>

                <div>
                  <Label htmlFor="guide-tel" className="text-muted-foreground text-[0.8125rem]">Téléphone (optionnel)</Label>
                  <Input id="guide-tel" type="tel" placeholder="819-000-0000" className="mt-1 h-11" />
                </div>

                <Button type="submit" size="lg" variant="accent" className="w-full mt-1 font-semibold">
                  <Send size={16} className="mr-1.5" />
                  {submitLabel}
                </Button>

                <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 pt-1 text-[0.75rem] text-muted-foreground/50">
                  <span className="flex items-center gap-1.5"><BadgeCheck size={13} /> Gratuit</span>
                  <span className="flex items-center gap-1.5"><Lock size={13} /> Confidentiel</span>
                  <span className="flex items-center gap-1.5"><Shield size={13} /> Sans engagement</span>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuideRequestForm;
