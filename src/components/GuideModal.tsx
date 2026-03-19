import { useState, FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Lock, Shield, BadgeCheck, CheckCircle2, BookOpen } from "lucide-react";

export type GuideType = "seller_guide" | "buyer_guide" | "investor_guide";

interface GuideModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  guideType: GuideType;
}

const guideConfig: Record<GuideType, { title: string; description: string; submitLabel: string; successTitle: string; successText: string }> = {
  seller_guide: {
    title: "Recevez le guide vendeur",
    description: "Tout ce que vous devez savoir pour vendre au meilleur prix à Gatineau — préparation, prix, mise en marché et négociation.",
    submitLabel: "Envoyer mon guide vendeur",
    successTitle: "Parfait — votre guide est en route!",
    successText: "Vérifiez votre boîte courriel dans les prochaines minutes.",
  },
  buyer_guide: {
    title: "Recevez le guide acheteur",
    description: "Le processus d'achat au Québec expliqué simplement — de la recherche au notaire, étape par étape.",
    submitLabel: "Envoyer mon guide acheteur",
    successTitle: "Parfait — votre guide est en route!",
    successText: "Vérifiez votre boîte courriel dans les prochaines minutes.",
  },
  investor_guide: {
    title: "Recevez le guide investisseur",
    description: "Rendement, analyse de plex, stratégie d'acquisition et pièges à éviter — le guide essentiel pour investir à Gatineau.",
    submitLabel: "Envoyer mon guide investisseur",
    successTitle: "Parfait — votre guide investisseur est en route!",
    successText: "Vérifiez votre boîte courriel dans les prochaines minutes.",
  },
};

const GuideModal = ({ open, onOpenChange, guideType }: GuideModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const config = guideConfig[guideType];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Supabase edge function
    setSubmitted(true);
  };

  const handleOpenChange = (value: boolean) => {
    if (!value) setSubmitted(false);
    onOpenChange(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[480px] rounded-2xl border-border bg-card p-0 overflow-hidden">
        {/* Accent top bar */}
        <div className="h-1.5 w-full bg-accent" />

        <div className="px-6 pt-5 pb-7 sm:px-8 sm:pt-6 sm:pb-8">
          <DialogHeader className="text-left">
            <p className="mb-2 flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.12em] uppercase text-muted-foreground/60">
              <BookOpen size={13} className="text-accent" />
              Guide gratuit
            </p>
            <DialogTitle
              className="text-[1.25rem] font-semibold text-foreground leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {config.title}
            </DialogTitle>
            <DialogDescription className="mt-1.5 text-[0.8125rem] text-muted-foreground leading-relaxed">
              {config.description}
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="mt-8 text-center py-4">
              <CheckCircle2 size={40} className="mx-auto text-accent" />
              <h4
                className="mt-4 text-foreground text-[1.125rem] font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {config.successTitle}
              </h4>
              <p className="mt-2 text-[0.875rem] text-muted-foreground">
                {config.successText}
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => handleOpenChange(false)}
              >
                Fermer
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <input type="hidden" name="guide_type" value={guideType} />

              <div>
                <Label htmlFor="guide-prenom" className="text-muted-foreground text-[0.8125rem]">
                  Prénom
                </Label>
                <Input
                  id="guide-prenom"
                  name="first_name"
                  placeholder="Votre prénom"
                  className="mt-1 h-11"
                  required
                />
              </div>

              <div>
                <Label htmlFor="guide-courriel" className="text-muted-foreground text-[0.8125rem]">
                  Courriel
                </Label>
                <Input
                  id="guide-courriel"
                  name="email"
                  type="email"
                  placeholder="vous@exemple.com"
                  className="mt-1 h-11"
                  required
                />
              </div>

              <div>
                <Label htmlFor="guide-tel" className="text-muted-foreground text-[0.8125rem]">
                  Téléphone (optionnel)
                </Label>
                <Input
                  id="guide-tel"
                  name="phone"
                  type="tel"
                  placeholder="819-000-0000"
                  className="mt-1 h-11"
                />
              </div>

              <div>
                <Label htmlFor="guide-projet" className="text-muted-foreground text-[0.8125rem]">
                  Type de projet
                </Label>
                <Select name="project_type">
                  <SelectTrigger id="guide-projet" className="mt-1 h-11">
                    <SelectValue placeholder="Sélectionnez..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sell">Vendre</SelectItem>
                    <SelectItem value="buy">Acheter</SelectItem>
                    <SelectItem value="both">Acheter et vendre</SelectItem>
                    <SelectItem value="invest">Investir</SelectItem>
                    <SelectItem value="exploring">Explorer mes options</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                variant="accent"
                className="w-full mt-1 font-semibold"
              >
                <Send size={16} className="mr-1.5" />
                {config.submitLabel}
              </Button>

              <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 pt-1 text-[0.72rem] text-muted-foreground/50">
                <span className="flex items-center gap-1.5">
                  <BadgeCheck size={12} /> Gratuit
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock size={12} /> Confidentiel
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield size={12} /> Sans engagement
                </span>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuideModal;
