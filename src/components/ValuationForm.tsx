import { useState, FormEvent } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import SuccessMessage from "@/components/SuccessMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Lock, Clock, Shield, Send, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ValuationFormProps {
  lang: "fr" | "en";
  locationTag?: string;
  variant?: "glass" | "card";
  addressPlaceholder?: string;
  submitLabel?: string;
  showTrustBadges?: boolean;
}

const T = {
  fr: {
    confidential: "Confidentiel — aucune obligation",
    name: "Nom complet",
    namePh: "Votre nom",
    email: "Courriel",
    emailPh: "courriel@exemple.com",
    phone: "Téléphone (optionnel)",
    phonePh: "819 000-0000",
    address: "Adresse de la propriété",
    addressPhDefault: "123 rue Exemple",
    message: "Détails (optionnel)",
    messagePh: "Type de propriété, nombre de chambres, etc.",
    submit: "Recevoir mon évaluation gratuite",
    submitting: "Envoi…",
    successTitle: "Merci! Demande envoyée.",
    successText: "Je vous reviens en 24h avec votre évaluation personnalisée.",
    glassHeading: "Demandez votre évaluation gratuite",
    glassSub: "Je vous reviens personnellement en 24h avec une analyse claire.",
    badgeFree: "Gratuit",
    badgeConfidential: "Confidentiel",
    badgeNoCommit: "Sans engagement",
    badge24h: "Réponse en 24h",
  },
  en: {
    confidential: "Confidential — no obligation",
    name: "Full name",
    namePh: "Your name",
    email: "Email",
    emailPh: "email@example.com",
    phone: "Phone (optional)",
    phonePh: "819 000-0000",
    address: "Property address",
    addressPhDefault: "123 Example St",
    message: "Details (optional)",
    messagePh: "Property type, number of bedrooms, etc.",
    submit: "Get my free valuation",
    submitting: "Sending…",
    successTitle: "Thank you! Request sent.",
    successText: "I'll get back to you within 24h with your personalized valuation.",
    glassHeading: "Request your free valuation",
    glassSub: "I'll get back to you personally within 24h with a clear analysis.",
    badgeFree: "Free",
    badgeConfidential: "Confidential",
    badgeNoCommit: "No commitment",
    badge24h: "Response in 24h",
  },
} as const;

const ValuationForm = ({
  lang,
  locationTag,
  variant = "card",
  addressPlaceholder,
  submitLabel,
  showTrustBadges = true,
}: ValuationFormProps) => {
  const t = T[lang];
  const [submitted, setSubmitted] = useState(false);
  const { submit, submitting } = useFormSubmit();

  const isGlass = variant === "glass";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    const rawMessage = (fd.get("message") as string) || "";
    const message = locationTag ? `[${locationTag}] ${rawMessage}` : rawMessage;
    const ok = await submit({
      formType: "valuation",
      lang,
      name: (fd.get("name") as string) || "",
      email: (fd.get("email") as string) || "",
      phone: (fd.get("phone") as string) || undefined,
      address: (fd.get("address") as string) || undefined,
      message: message || undefined,
    });
    if (ok) setSubmitted(true);
  };

  if (submitted) {
    return <SuccessMessage title={t.successTitle} text={t.successText} />;
  }

  const addrPh = addressPlaceholder || t.addressPhDefault;
  const submitText = submitLabel || t.submit;

  // Glass variant input classes
  const glassInput =
    "mt-1 bg-white/[0.06] border-white/[0.1] text-primary-foreground placeholder:text-primary-foreground/25 focus-visible:ring-accent/30 focus-visible:border-accent/40 h-11";
  const glassLabel = "text-primary-foreground/60 text-[0.8125rem]";

  return (
    <div
      className={cn(
        isGlass
          ? "rounded-[1.25rem] border border-white/[0.08] bg-white/[0.06] backdrop-blur-xl shadow-[0_8px_40px_-12px_hsl(200_40%_8%_/_0.5)] p-6 sm:p-8"
          : "card-elevated rounded-2xl bg-card p-6 shadow-xl sm:p-8",
      )}
    >
      {isGlass && (
        <>
          <h2
            className="text-[1.25rem] sm:text-[1.375rem] font-semibold text-primary-foreground"
            style={{ fontFamily: "var(--serif)" }}
          >
            {t.glassHeading}
          </h2>
          <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-primary-foreground/35">
            {t.glassSub}
          </p>
        </>
      )}

      <form onSubmit={handleSubmit} className={cn(isGlass ? "mt-6 space-y-4" : "space-y-4")}>
        <div
          className={cn(
            "flex items-center gap-2 text-[0.8125rem]",
            isGlass ? "text-primary-foreground/40" : "text-muted-foreground",
          )}
        >
          <Lock size={13} /> {t.confidential}
        </div>

        {isGlass ? (
          <>
            <div>
              <Label htmlFor="address" className={glassLabel}>
                {t.address}
              </Label>
              <Input
                id="address"
                name="address"
                placeholder={addrPh}
                className={glassInput}
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name" className={glassLabel}>
                  {t.name}
                </Label>
                <Input id="name" name="name" placeholder={t.namePh} className={glassInput} required />
              </div>
              <div>
                <Label htmlFor="email" className={glassLabel}>
                  {t.email}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.emailPh}
                  className={glassInput}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="phone" className={glassLabel}>
                {t.phone}
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={t.phonePh}
                className={glassInput}
              />
            </div>
            <div>
              <Label htmlFor="message" className={glassLabel}>
                {t.message}
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={2}
                placeholder={t.messagePh}
                className={cn(glassInput, "min-h-[72px] resize-none")}
              />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-1.5">
              <Label htmlFor="name">{t.name}</Label>
              <Input id="name" name="name" required placeholder={t.namePh} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">{t.email}</Label>
              <Input id="email" name="email" type="email" required placeholder={t.emailPh} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone">{t.phone}</Label>
              <Input id="phone" name="phone" type="tel" placeholder={t.phonePh} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="address">{t.address}</Label>
              <Input id="address" name="address" required placeholder={addrPh} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">{t.message}</Label>
              <Textarea id="message" name="message" rows={3} placeholder={t.messagePh} />
            </div>
          </>
        )}

        <Button
          type="submit"
          size="xl"
          variant="accent"
          className={cn(
            "w-full font-semibold",
            isGlass && "mt-1 shadow-[0_4px_20px_-4px_hsl(36_45%_48%_/_0.35)]",
          )}
          disabled={submitting}
        >
          <Send size={16} className="mr-1.5" />
          {submitting ? t.submitting : submitText}
        </Button>

        {showTrustBadges && (
          <div
            className={cn(
              "flex flex-wrap justify-center gap-x-5 gap-y-1.5 pt-1 text-[0.75rem]",
              isGlass ? "text-primary-foreground/30" : "text-muted-foreground",
            )}
          >
            <span className="flex items-center gap-1.5">
              <BadgeCheck size={13} /> {t.badgeFree}
            </span>
            <span className="flex items-center gap-1.5">
              <Lock size={13} /> {t.badgeConfidential}
            </span>
            <span className="flex items-center gap-1.5">
              <Shield size={13} /> {t.badgeNoCommit}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {t.badge24h}
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ValuationForm;
