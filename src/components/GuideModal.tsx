import { useState, FormEvent } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Send, Lock, Shield, BadgeCheck, CheckCircle2, BookOpen } from "lucide-react";

export type GuideType = "seller_guide" | "buyer_guide" | "investor_guide" | "relocation_guide";

interface GuideModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  guideType: GuideType;
  lang?: "fr" | "en";
}

type GuideConfigEntry = { title: string; description: string; submitLabel: string; successTitle: string; successText: string };

const guideConfigFr: Record<GuideType, GuideConfigEntry> = {
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
  relocation_guide: {
    title: "Recevez le guide relocalisation",
    description: "Entrez vos coordonnées et je vous envoie immédiatement le guide relocalisation par courriel. Vous y trouverez des repères utiles pour mieux comprendre le marché de Gatineau, les secteurs à considérer et les étapes à prévoir pour une transition plus simple.",
    submitLabel: "Envoyer mon guide",
    successTitle: "Parfait — votre guide relocalisation est en route!",
    successText: "Vérifiez votre boîte courriel dans les prochaines minutes. Regardez aussi vos promotions ou indésirables au besoin.",
  },
};

const guideConfigEn: Record<GuideType, GuideConfigEntry> = {
  seller_guide: {
    title: "Get the Seller Guide",
    description: "Everything you need to know to sell at the best price in Gatineau — preparation, pricing, marketing and negotiation.",
    submitLabel: "Send me the Seller Guide",
    successTitle: "Your guide is on its way!",
    successText: "Check your inbox — you'll receive the Seller Guide within minutes.",
  },
  buyer_guide: {
    title: "Get the Buyer Guide",
    description: "The home buying process in Québec explained simply — from search to notary, step by step.",
    submitLabel: "Send me the Buyer Guide",
    successTitle: "Your guide is on its way!",
    successText: "Check your inbox — you'll receive the Buyer Guide within minutes.",
  },
  investor_guide: {
    title: "Get the Investor Guide",
    description: "Returns, plex analysis, acquisition strategy and pitfalls to avoid — the essential guide for investing in Gatineau.",
    submitLabel: "Send me the Investor Guide",
    successTitle: "Your Investor Guide is on its way!",
    successText: "Check your inbox — you'll receive the guide within minutes.",
  },
  relocation_guide: {
    title: "Get the Relocation Guide",
    description: "Enter your details and I'll send you the relocation guide right away. You'll find useful benchmarks for understanding the Gatineau market, neighborhoods to consider, and steps to plan for a smoother transition.",
    submitLabel: "Send me the guide",
    successTitle: "Your Relocation Guide is on its way!",
    successText: "Check your inbox shortly. Also look in your promotions or spam folder if needed.",
  },
};

const t = {
  fr: {
    overline: "Guide gratuit", firstName: "Prénom", firstNamePlaceholder: "Votre prénom",
    email: "Courriel", emailPlaceholder: "vous@exemple.com",
    phone: "Téléphone (optionnel)", phonePlaceholder: "819-000-0000",
    projectType: "Type de projet", selectPlaceholder: "Sélectionnez...",
    sell: "Vendre", buy: "Acheter", both: "Acheter et vendre", invest: "Investir", exploring: "Explorer mes options",
    sending: "Envoi…", close: "Fermer",
    free: "Gratuit", confidential: "Confidentiel", noCommitment: "Sans engagement",
  },
  en: {
    overline: "Free Guide", firstName: "First Name", firstNamePlaceholder: "Your first name",
    email: "Email", emailPlaceholder: "you@example.com",
    phone: "Phone (optional)", phonePlaceholder: "819-000-0000",
    projectType: "Project Type", selectPlaceholder: "Select...",
    sell: "Sell", buy: "Buy", both: "Buy and Sell", invest: "Invest", exploring: "Exploring my options",
    sending: "Sending…", close: "Close",
    free: "Free", confidential: "Confidential", noCommitment: "No commitment",
  },
};

const GuideModal = ({ open, onOpenChange, guideType, lang = "fr" }: GuideModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const config = (lang === "en" ? guideConfigEn : guideConfigFr)[guideType];
  const l = t[lang];
  const { submit, submitting } = useFormSubmit();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const success = await submit({
      formType: "guide", lang,
      name: fd.get("first_name") as string || "",
      email: fd.get("email") as string || "",
      phone: fd.get("phone") as string || undefined,
      projectType: fd.get("project_type") as string || undefined,
      guideTitle: config.title,
    });
    if (success) setSubmitted(true);
  };

  const handleOpenChange = (value: boolean) => {
    if (!value) setSubmitted(false);
    onOpenChange(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[480px] rounded-2xl border-border bg-card p-0 overflow-hidden">
        <div className="h-1.5 w-full bg-accent" />
        <div className="px-6 pt-5 pb-7 sm:px-8 sm:pt-6 sm:pb-8">
          <DialogHeader className="text-left">
            <p className="mb-2 flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.12em] uppercase text-muted-foreground/60">
              <BookOpen size={13} className="text-accent" />
              {l.overline}
            </p>
            <DialogTitle className="text-[1.25rem] font-semibold text-foreground leading-tight" style={{ fontFamily: "var(--serif)" }}>
              {config.title}
            </DialogTitle>
            <DialogDescription className="mt-1.5 text-[0.8125rem] text-muted-foreground leading-relaxed">
              {config.description}
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="mt-8 text-center py-4">
              <CheckCircle2 size={40} className="mx-auto text-accent" />
              <h4 className="mt-4 text-foreground text-[1.125rem] font-semibold" style={{ fontFamily: "var(--serif)" }}>
                {config.successTitle}
              </h4>
              <p className="mt-2 text-[0.875rem] text-muted-foreground">{config.successText}</p>
              <Button variant="outline" className="mt-6" onClick={() => handleOpenChange(false)}>{l.close}</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <input type="hidden" name="guide_type" value={guideType} />
              <div>
                <Label htmlFor="guide-name" className="text-muted-foreground text-[0.8125rem]">{l.firstName}</Label>
                <Input id="guide-name" name="first_name" placeholder={l.firstNamePlaceholder} className="mt-1 h-11" required />
              </div>
              <div>
                <Label htmlFor="guide-email" className="text-muted-foreground text-[0.8125rem]">{l.email}</Label>
                <Input id="guide-email" name="email" type="email" placeholder={l.emailPlaceholder} className="mt-1 h-11" required />
              </div>
              <div>
                <Label htmlFor="guide-phone" className="text-muted-foreground text-[0.8125rem]">{l.phone}</Label>
                <Input id="guide-phone" name="phone" type="tel" placeholder={l.phonePlaceholder} className="mt-1 h-11" />
              </div>
              <div>
                <Label htmlFor="guide-project" className="text-muted-foreground text-[0.8125rem]">{l.projectType}</Label>
                <Select name="project_type">
                  <SelectTrigger id="guide-project" className="mt-1 h-11"><SelectValue placeholder={l.selectPlaceholder} /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sell">{l.sell}</SelectItem>
                    <SelectItem value="buy">{l.buy}</SelectItem>
                    <SelectItem value="both">{l.both}</SelectItem>
                    <SelectItem value="invest">{l.invest}</SelectItem>
                    <SelectItem value="exploring">{l.exploring}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" size="lg" variant="accent" className="w-full mt-1 font-semibold" disabled={submitting}>
                <Send size={16} className="mr-1.5" />{submitting ? l.sending : config.submitLabel}
              </Button>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 pt-1 text-[0.72rem] text-muted-foreground/50">
                <span className="flex items-center gap-1.5"><BadgeCheck size={12} /> {l.free}</span>
                <span className="flex items-center gap-1.5"><Lock size={12} /> {l.confidential}</span>
                <span className="flex items-center gap-1.5"><Shield size={12} /> {l.noCommitment}</span>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuideModal;
