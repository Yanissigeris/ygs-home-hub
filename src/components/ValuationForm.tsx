import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import SuccessMessage from "@/components/SuccessMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Lock, Clock, Shield, Send, BadgeCheck, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import yanisPhoto from "@/assets/yanis-hero-cutout.webp";

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
    phonePh: "(819) 555-1234",
    address: "Adresse de la propriété",
    addressPhDefault: "123 rue Exemple",
    message: "Détails (optionnel)",
    messagePh: "Type de propriété, nombre de chambres, etc.",
    submit: "Demander mon évaluation gratuite",
    submitting: "Envoi…",
    successTitle: "Merci! Demande envoyée.",
    successText: "Je vous reviens en 24h avec votre évaluation personnalisée.",
    glassHeading: "Demandez votre évaluation gratuite",
    glassSub: "Je vous reviens personnellement en 24h avec une analyse claire.",
    badgeFree: "Gratuit",
    badgeConfidential: "Confidentiel",
    badgeNoCommit: "Sans engagement",
    badge24h: "Réponse en 24h",
    errName: "Veuillez indiquer votre nom (au moins 2 caractères).",
    errEmail: "Veuillez entrer un courriel valide.",
    errEmailTypo: "Cet email semble incorrect. Vérifiez l'orthographe.",
    errPhone: "Format attendu : (819) 555-1234 ou similaire",
    errAddress: "Veuillez indiquer une adresse complète.",
    errMessageMax: "Maximum 500 caractères.",
    trustAlt: "Yanis Gauthier-Sigeris, courtier immobilier",
    trustTransactions: "300+ transactions",
  },
  en: {
    confidential: "Confidential — no obligation",
    name: "Full name",
    namePh: "Your name",
    email: "Email",
    emailPh: "email@example.com",
    phone: "Phone (optional)",
    phonePh: "(819) 555-1234",
    address: "Property address",
    addressPhDefault: "123 Example St",
    message: "Details (optional)",
    messagePh: "Property type, number of bedrooms, etc.",
    submit: "Request my free valuation",
    submitting: "Sending…",
    successTitle: "Thank you! Request sent.",
    successText: "I'll get back to you within 24h with your personalized valuation.",
    glassHeading: "Request your free valuation",
    glassSub: "I'll get back to you personally within 24h with a clear analysis.",
    badgeFree: "Free",
    badgeConfidential: "Confidential",
    badgeNoCommit: "No commitment",
    badge24h: "Response in 24h",
    errName: "Please enter your name (at least 2 characters).",
    errEmail: "Please enter a valid email address.",
    errEmailTypo: "This email looks incorrect. Please check the spelling.",
    errPhone: "Expected format: (819) 555-1234 or similar",
    errAddress: "Please enter a complete address.",
    errMessageMax: "Maximum 500 characters.",
    trustAlt: "Yanis Gauthier-Sigeris, real estate broker",
    trustTransactions: "300+ transactions",
  },
} as const;

// Common email domain typos to flag with a friendlier message
const TYPO_DOMAINS = new Set([
  "gmial.com",
  "gmai.com",
  "gmal.com",
  "gmail.con",
  "gmail.co",
  "gmaill.com",
  "yahoo.cm",
  "yhaoo.com",
  "yaho.com",
  "yahooo.com",
  "hotnail.com",
  "hotmial.com",
  "hotmail.con",
  "outlok.com",
  "outloo.com",
  "outlook.con",
]);

const isTypoDomain = (email: string) => {
  const at = email.lastIndexOf("@");
  if (at < 0) return false;
  return TYPO_DOMAINS.has(email.slice(at + 1).toLowerCase().trim());
};

const formatCAPhone = (raw: string) => {
  const d = raw.replace(/\D/g, "").slice(0, 10);
  if (d.length === 0) return "";
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
};

const isValidCAPhone = (val: string) => {
  if (!val) return true; // optional
  return val.replace(/\D/g, "").length === 10;
};

const makeSchema = (lang: "fr" | "en") => {
  const t = T[lang];
  return z.object({
    name: z.string().trim().min(2, { message: t.errName }),
    email: z
      .string()
      .trim()
      .min(1, { message: t.errEmail })
      .email({ message: t.errEmail })
      .refine((v) => !isTypoDomain(v), { message: t.errEmailTypo }),
    phone: z
      .string()
      .optional()
      .transform((v) => v ?? "")
      .refine(isValidCAPhone, { message: t.errPhone }),
    address: z.string().trim().min(5, { message: t.errAddress }),
    message: z
      .string()
      .max(500, { message: t.errMessageMax })
      .optional()
      .transform((v) => v ?? ""),
  });
};

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  address: string;
  message?: string;
};

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

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(makeSchema(lang)),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { name: "", email: "", phone: "", address: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    const rawMessage = values.message || "";
    const message = locationTag ? `[${locationTag}] ${rawMessage}` : rawMessage;
    const ok = await submit({
      formType: "valuation",
      lang,
      name: values.name,
      email: values.email,
      phone: values.phone || undefined,
      address: values.address || undefined,
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
  const errClass = cn(
    "mt-1 text-[0.75rem] leading-snug",
    isGlass ? "text-red-300/80" : "text-destructive",
  );

  const ErrorLine = ({ id, msg }: { id: string; msg?: string }) =>
    msg ? (
      <p id={id} role="alert" className={errClass}>
        {msg}
      </p>
    ) : null;

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
          <div className="mt-5 flex items-center gap-3 pb-4 mb-1 border-b border-white/10">
            <img
              src={yanisPhoto}
              alt={t.trustAlt}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20 bg-white/5"
              loading="lazy"
              width={48}
              height={48}
            />
            <div className="min-w-0">
              <p className="font-semibold text-[0.9375rem] leading-tight text-primary-foreground">
                Yanis Gauthier-Sigeris
              </p>
              <p className="mt-0.5 text-[0.75rem] text-primary-foreground/60 flex flex-wrap items-center gap-x-1.5">
                <span className="text-accent font-medium">★ 5/5</span>
                <span aria-hidden>·</span>
                <span>Hall of Fame RE/MAX</span>
                <span aria-hidden>·</span>
                <span>{t.trustTransactions}</span>
              </p>
            </div>
          </div>
        </>
      )}

      {!isGlass && (
        <div className="flex items-center gap-3 mb-5 pb-5 border-b border-border/50">
          <img
            src={yanisPhoto}
            alt={t.trustAlt}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/20 bg-muted"
            loading="lazy"
            width={48}
            height={48}
          />
          <div className="min-w-0">
            <p className="font-semibold text-[0.9375rem] leading-tight text-foreground">
              Yanis Gauthier-Sigeris
            </p>
            <p className="mt-0.5 text-[0.75rem] text-muted-foreground flex flex-wrap items-center gap-x-1.5">
              <span className="text-accent font-medium">★ 5/5</span>
              <span aria-hidden>·</span>
              <span>Hall of Fame RE/MAX</span>
              <span aria-hidden>·</span>
              <span>{t.trustTransactions}</span>
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className={cn(isGlass ? "mt-6 space-y-4" : "space-y-4")}>
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
                placeholder={addrPh}
                className={glassInput}
                autoComplete="street-address"
                aria-invalid={!!errors.address}
                aria-describedby={errors.address ? "address-err" : undefined}
                {...register("address")}
              />
              <ErrorLine id="address-err" msg={errors.address?.message} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name" className={glassLabel}>
                  {t.name}
                </Label>
                <Input
                  id="name"
                  placeholder={t.namePh}
                  className={glassInput}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-err" : undefined}
                  {...register("name")}
                />
                <ErrorLine id="name-err" msg={errors.name?.message} />
              </div>
              <div>
                <Label htmlFor="email" className={glassLabel}>
                  {t.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t.emailPh}
                  className={glassInput}
                  autoComplete="email"
                  inputMode="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-err" : undefined}
                  {...register("email")}
                />
                <ErrorLine id="email-err" msg={errors.email?.message} />
              </div>
            </div>
            <div>
              <Label htmlFor="phone" className={glassLabel}>
                {t.phone}
              </Label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t.phonePh}
                    className={glassInput}
                    autoComplete="tel"
                    inputMode="tel"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-err" : undefined}
                    value={field.value ?? ""}
                    onBlur={field.onBlur}
                    onChange={(e) => field.onChange(formatCAPhone(e.target.value))}
                  />
                )}
              />
              <ErrorLine id="phone-err" msg={errors.phone?.message} />
            </div>
            <div>
              <Label htmlFor="message" className={glassLabel}>
                {t.message}
              </Label>
              <Textarea
                id="message"
                rows={2}
                placeholder={t.messagePh}
                className={cn(glassInput, "min-h-[72px] resize-none")}
                autoComplete="off"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-err" : undefined}
                {...register("message")}
              />
              <ErrorLine id="message-err" msg={errors.message?.message} />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-1.5">
              <Label htmlFor="name">{t.name}</Label>
              <Input
                id="name"
                placeholder={t.namePh}
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-err" : undefined}
                {...register("name")}
              />
              <ErrorLine id="name-err" msg={errors.name?.message} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">{t.email}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t.emailPh}
                autoComplete="email"
                inputMode="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-err" : undefined}
                {...register("email")}
              />
              <ErrorLine id="email-err" msg={errors.email?.message} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone">{t.phone}</Label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t.phonePh}
                    autoComplete="tel"
                    inputMode="tel"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-err" : undefined}
                    value={field.value ?? ""}
                    onBlur={field.onBlur}
                    onChange={(e) => field.onChange(formatCAPhone(e.target.value))}
                  />
                )}
              />
              <ErrorLine id="phone-err" msg={errors.phone?.message} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="address">{t.address}</Label>
              <Input
                id="address"
                placeholder={addrPh}
                autoComplete="street-address"
                aria-invalid={!!errors.address}
                aria-describedby={errors.address ? "address-err" : undefined}
                {...register("address")}
              />
              <ErrorLine id="address-err" msg={errors.address?.message} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">{t.message}</Label>
              <Textarea
                id="message"
                rows={3}
                placeholder={t.messagePh}
                autoComplete="off"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-err" : undefined}
                {...register("message")}
              />
              <ErrorLine id="message-err" msg={errors.message?.message} />
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
          {submitting ? (
            <Loader2 size={16} className="mr-1.5 animate-spin" aria-hidden />
          ) : (
            <Send size={16} className="mr-1.5" aria-hidden />
          )}
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
