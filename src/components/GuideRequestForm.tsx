import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Send, Lock, Shield, Clock, BadgeCheck, CheckCircle2, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import type { Avatar, Offer } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface GuideRequestFormProps {
  guideTitle: string;
  headline: string;
  subtitle: string;
  submitLabel: string;
  successTitle?: string;
  successText?: string;
  avatar: Avatar;
  offer: Offer;
}

const i18n = {
  fr: {
    overline: "Guide gratuit",
    formSubtitle: "Remplissez le formulaire pour le recevoir par courriel.",
    bullets: [
      { icon: Shield, text: "Gratuit et sans engagement" },
      { icon: Clock, text: "Envoyé par courriel en quelques minutes" },
      { icon: CheckCircle2, text: "Contenu adapté au marché de Gatineau" },
    ],
    firstName: "Prénom",
    firstNamePh: "Votre prénom",
    lastName: "Nom",
    lastNamePh: "Votre nom",
    email: "Courriel",
    emailPh: "vous@exemple.com",
    emailHint: "Format : vous@exemple.com",
    phone: "Téléphone (optionnel)",
    phonePh: "(819) 000-0000",
    phoneHint: "Optionnel — format : (819) 000-0000",
    badges: ["Gratuit", "Confidentiel", "Sans engagement"],
    defaultSuccessTitle: "Merci! Votre guide est en route.",
    defaultSuccessText: "Vous allez le recevoir par courriel dans les prochaines minutes.",
    errFirstName: "Veuillez indiquer votre prénom (au moins 2 caractères).",
    errLastName: "Veuillez indiquer votre nom (au moins 2 caractères).",
    errEmail: "Veuillez entrer un courriel valide.",
    errPhone: "Format attendu : (819) 000-0000",
    sending: "Envoi…",
  },
  en: {
    overline: "Free Guide",
    formSubtitle: "Fill out the form to receive it by email.",
    bullets: [
      { icon: Shield, text: "Free, no commitment" },
      { icon: Clock, text: "Sent by email within minutes" },
      { icon: CheckCircle2, text: "Content tailored to the Gatineau market" },
    ],
    firstName: "First Name",
    firstNamePh: "Your first name",
    lastName: "Last Name",
    lastNamePh: "Your last name",
    email: "Email",
    emailPh: "you@example.com",
    emailHint: "Format: you@example.com",
    phone: "Phone (optional)",
    phonePh: "(819) 000-0000",
    phoneHint: "Optional — format: (819) 000-0000",
    badges: ["Free", "Confidential", "No commitment"],
    defaultSuccessTitle: "Thank you! Your guide is on its way.",
    defaultSuccessText: "You'll receive it by email within the next few minutes.",
    errFirstName: "Please enter your first name (at least 2 characters).",
    errLastName: "Please enter your last name (at least 2 characters).",
    errEmail: "Please enter a valid email address.",
    errPhone: "Expected format: (819) 000-0000",
    sending: "Sending…",
  },
};

const formatCAPhone = (raw: string) => {
  const d = raw.replace(/\D/g, "").slice(0, 10);
  if (d.length === 0) return "";
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
};

const isValidCAPhone = (val: string) => !val || val.replace(/\D/g, "").length === 10;

const makeSchema = (t: (typeof i18n)["fr"]) =>
  z.object({
    firstName: z.string().trim().min(2, { message: t.errFirstName }).max(80),
    lastName: z.string().trim().min(2, { message: t.errLastName }).max(80),
    email: z.string().trim().min(1, { message: t.errEmail }).email({ message: t.errEmail }).max(255),
    phone: z
      .string()
      .optional()
      .transform((v) => v ?? "")
      .refine(isValidCAPhone, { message: t.errPhone }),
  });

type FormValues = { firstName: string; lastName: string; email: string; phone?: string };

const GuideRequestForm = ({
  guideTitle,
  headline,
  subtitle,
  submitLabel,
  successTitle,
  successText,
  avatar,
  offer,
}: GuideRequestFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const lang = useLanguage();
  const t = i18n[lang];
  const finalSuccessTitle = successTitle ?? t.defaultSuccessTitle;
  const finalSuccessText = successText ?? t.defaultSuccessText;
  const { submit, submitting } = useFormSubmit();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(makeSchema(t)),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { firstName: "", lastName: "", email: "", phone: "" },
  });

  const onSubmit = async (values: FormValues) => {
    const ok = await submit({
      formType: "guide",
      lang,
      name: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone || undefined,
      guideTitle,
      avatar,
      offer,
    });
    if (ok) setSubmitted(true);
  };

  const ErrorLine = ({ id, msg }: { id: string; msg?: string }) =>
    msg ? (
      <p id={id} role="alert" className="mt-1 text-[0.75rem] leading-snug text-destructive">
        {msg}
      </p>
    ) : null;

  return (
    <section id="recevoir-guide" className="section-padding bg-[var(--cream)]">
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
              <BookOpen size={14} className="text-accent" aria-hidden="true" />
              <span>{t.overline}</span>
            </p>
            <h2 className="text-foreground">{headline}</h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground max-w-[26rem]">
              {subtitle}
            </p>
            <div className="mt-6 space-y-2.5">
              {t.bullets.map((b) => (
                <div key={b.text} className="flex items-center gap-2.5 text-[0.85rem] text-muted-foreground/70">
                  <b.icon size={15} className="text-accent shrink-0" aria-hidden="true" />
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div className="rounded-2xl border border-border bg-card shadow-lg p-6 sm:p-8">
            <h3 className="text-[1.175rem] font-semibold text-foreground" style={{ fontFamily: "var(--serif)" }}>
              {guideTitle}
            </h3>
            <p className="mt-1 text-[0.8125rem] text-muted-foreground">{t.formSubtitle}</p>

            {submitted ? (
              <div className="mt-8 text-center py-6" role="status" aria-live="polite">
                <CheckCircle2 size={36} className="mx-auto text-accent" aria-hidden="true" />
                <h4 className="mt-4 text-foreground text-[1.125rem] font-semibold">{finalSuccessTitle}</h4>
                <p className="mt-2 text-[0.875rem] text-muted-foreground">{finalSuccessText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="guide-prenom" className="text-muted-foreground text-[0.8125rem]">{t.firstName}</Label>
                    <Input
                      id="guide-prenom"
                      placeholder={t.firstNamePh}
                      className="mt-1 h-11"
                      autoComplete="given-name"
                      aria-invalid={!!errors.firstName}
                      aria-describedby={errors.firstName ? "guide-prenom-err" : undefined}
                      {...register("firstName")}
                    />
                    <ErrorLine id="guide-prenom-err" msg={errors.firstName?.message} />
                  </div>
                  <div>
                    <Label htmlFor="guide-nom" className="text-muted-foreground text-[0.8125rem]">{t.lastName}</Label>
                    <Input
                      id="guide-nom"
                      placeholder={t.lastNamePh}
                      className="mt-1 h-11"
                      autoComplete="family-name"
                      aria-invalid={!!errors.lastName}
                      aria-describedby={errors.lastName ? "guide-nom-err" : undefined}
                      {...register("lastName")}
                    />
                    <ErrorLine id="guide-nom-err" msg={errors.lastName?.message} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="guide-courriel" className="text-muted-foreground text-[0.8125rem]">{t.email}</Label>
                  <Input
                    id="guide-courriel"
                    type="email"
                    placeholder={t.emailPh}
                    className="mt-1 h-11"
                    autoComplete="email"
                    inputMode="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={cn(errors.email ? "guide-courriel-err" : "guide-courriel-help")}
                    {...register("email")}
                  />
                  {errors.email ? (
                    <ErrorLine id="guide-courriel-err" msg={errors.email.message} />
                  ) : (
                    <p id="guide-courriel-help" className="mt-1 text-[0.7rem] text-muted-foreground/70">{t.emailHint}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="guide-tel" className="text-muted-foreground text-[0.8125rem]">{t.phone}</Label>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <Input
                        id="guide-tel"
                        type="tel"
                        placeholder={t.phonePh}
                        className="mt-1 h-11"
                        autoComplete="tel"
                        inputMode="tel"
                        aria-invalid={!!errors.phone}
                        aria-describedby={cn(errors.phone ? "guide-tel-err" : "guide-tel-help")}
                        value={field.value ?? ""}
                        onBlur={field.onBlur}
                        onChange={(e) => field.onChange(formatCAPhone(e.target.value))}
                      />
                    )}
                  />
                  {errors.phone ? (
                    <ErrorLine id="guide-tel-err" msg={errors.phone.message} />
                  ) : (
                    <p id="guide-tel-help" className="mt-1 text-[0.7rem] text-muted-foreground/70">{t.phoneHint}</p>
                  )}
                </div>

                <Button type="submit" size="lg" variant="accent" className="w-full mt-1 font-semibold" disabled={submitting}>
                  <Send size={16} className="mr-1.5" aria-hidden="true" />
                  {submitting ? t.sending : submitLabel}
                </Button>

                <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 pt-1 text-[0.75rem] text-muted-foreground/60">
                  <span className="flex items-center gap-1.5"><BadgeCheck size={13} aria-hidden="true" /> {t.badges[0]}</span>
                  <span className="flex items-center gap-1.5"><Lock size={13} aria-hidden="true" /> {t.badges[1]}</span>
                  <span className="flex items-center gap-1.5"><Shield size={13} aria-hidden="true" /> {t.badges[2]}</span>
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
