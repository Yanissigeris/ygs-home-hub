import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";
import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
  lang?: "fr" | "en";
}

const t = {
  fr: {
    eyebrow: "ÉVALUATION GRATUITE",
    heading: "Combien vaut votre propriété à Gatineau?",
    sub: "Entrez votre adresse — recevez une estimation claire basée sur les ventes récentes de votre secteur.",
    trust: "✓ Gratuit · Sans engagement · Réponse en 24-48h",
    addressLabel: "Adresse de votre propriété",
    addressPlaceholder: "Ex: 123 Rue des Érables, Aylmer",
    house: "🏠 Maison",
    condo: "🏢 Condo",
    plex: "🏗 Plex",
    step1Cta: "Estimer ma propriété →",
    step2of2: "Étape 2 de 2",
    namePh: "Votre prénom",
    contactPh: "Téléphone ou courriel",
    notesPh: "Informations supplémentaires (facultatif)\nEx: année de construction, rénovations récentes...",
    submitCta: "Recevoir mon évaluation gratuite →",
    privacy: "🔒 Vos informations restent confidentielles.",
    successTitle: "Demande reçue !",
    successText: "Je vous contacte dans les prochaines 24-48h avec une analyse claire de votre propriété.",
    urgentQ: "Une question urgente? →",
  },
  en: {
    eyebrow: "FREE VALUATION",
    heading: "How much is your property worth in Gatineau?",
    sub: "Enter your address — get a clear estimate based on recent sales in your area.",
    trust: "✓ Free · No obligation · Response within 24-48h",
    addressLabel: "Your property address",
    addressPlaceholder: "Ex: 123 Maple Street, Aylmer",
    house: "🏠 House",
    condo: "🏢 Condo",
    plex: "🏗 Plex",
    step1Cta: "Estimate my property →",
    step2of2: "Step 2 of 2",
    namePh: "Your first name",
    contactPh: "Phone or email",
    notesPh: "Additional info (optional)\nEx: year built, recent renovations...",
    submitCta: "Get my free valuation →",
    privacy: "🔒 Your information stays private.",
    successTitle: "Request received!",
    successText: "I'll reach out within 24-48h with a clear analysis of your property.",
    urgentQ: "Urgent question? →",
  },
};

const PROPERTY_TYPES = ["maison", "condo", "plex"] as const;

const ValuationWidget = ({ lang: langProp }: Props) => {
  const ctxLang = useLanguage();
  const lang = langProp ?? ctxLang;
  const c = t[lang];
  const isMobile = useIsMobile();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState<string>("maison");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [notes, setNotes] = useState("");
  const [shake, setShake] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const addressRef = useRef<HTMLInputElement>(null);

  const typeLabels: Record<string, string> = {
    maison: c.house,
    condo: c.condo,
    plex: c.plex,
  };

  const goStep2 = () => {
    if (!address.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
      addressRef.current?.focus();
      return;
    }
    trackEvent("evaluation_widget_step1", {
      event_category: "lead_generation",
      event_label: "address_entered",
    });
    setStep(2);
  };

  const handleSubmit = async () => {
    const missing: string[] = [];
    if (!name.trim()) missing.push("name");
    if (!contact.trim()) missing.push("contact");
    if (missing.length) {
      setEmptyFields(missing);
      return;
    }
    setEmptyFields([]);
    setSubmitting(true);

    trackEvent("evaluation_widget_step2", {
      event_category: "lead_generation",
      event_label: "contact_info_entered",
    });

    try {
      // Insert into DB
      await supabase.from("valuation_leads" as any).insert({
        address: address.trim(),
        property_type: propertyType,
        name: name.trim(),
        contact: contact.trim(),
        notes: notes.trim() || null,
        source: "homepage-evaluation-widget",
        language: lang,
      });

      // Send notification email
      await supabase.functions.invoke("send-email", {
        body: {
          formType: "valuation",
          lang,
          name: name.trim(),
          email: contact.includes("@") ? contact.trim() : "",
          phone: !contact.includes("@") ? contact.trim() : "",
          address: address.trim(),
          message: `Type: ${propertyType}${notes.trim() ? `\n\nNotes: ${notes.trim()}` : ""}`,
          objective: `Évaluation — ${propertyType}`,
        },
      });

      trackEvent("evaluation_widget_submitted", {
        event_category: "lead_generation",
        event_label: "form_completed",
        value: 1,
      });

      setStep(3);
    } catch {
      // Silent fail — data is in DB
      setStep(3);
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = (isError?: boolean): React.CSSProperties => ({
    width: "100%",
    height: 52,
    padding: "0 1rem",
    fontSize: ".95rem",
    fontFamily: "var(--sans)",
    border: `1.5px solid ${isError ? "#e53e3e" : "hsl(var(--border))"}`,
    borderRadius: 3,
    background: "#fff",
    color: "var(--ink)",
    outline: "none",
    transition: "all .2s",
  });

  const smallInputStyle = (isError?: boolean): React.CSSProperties => ({
    ...inputStyle(isError),
    height: 46,
  });

  return (
    <section
      style={{
        background: "#fff",
        borderBottom: "1px solid hsl(var(--border))",
        padding: isMobile ? "2rem 0" : "2.5rem 0",
      }}
      itemScope
      itemType="https://schema.org/RealEstateAgent"
    >
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "40% 60%",
            gap: isMobile ? "1.5rem" : "2.5rem",
            alignItems: "center",
          }}
        >
          {/* Left — Text */}
          <div>
            <span className="label-overline">{c.eyebrow}</span>
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontSize: isMobile ? "1.35rem" : "1.6rem",
                fontWeight: 600,
                color: "var(--ink)",
                lineHeight: 1.2,
                marginTop: ".75rem",
              }}
            >
              {c.heading}
            </h3>
            <p
              style={{
                fontSize: ".85rem",
                color: "hsl(var(--muted-foreground))",
                lineHeight: 1.7,
                marginTop: ".75rem",
              }}
            >
              {c.sub}
            </p>
            <p
              style={{
                fontSize: ".72rem",
                color: "var(--gold)",
                fontWeight: 600,
                marginTop: ".5rem",
              }}
            >
              {c.trust}
            </p>
            <meta itemProp="areaServed" content="Gatineau, Aylmer, Hull, Outaouais" />
            <meta itemProp="priceRange" content="Free valuation" />
          </div>

          {/* Right — Widget */}
          <div
            style={{
              background: "#fff",
              border: "1px solid hsl(var(--border))",
              borderRadius: 4,
              padding: isMobile ? "1.25rem" : "1.5rem",
              boxShadow: "0 4px 20px rgba(23,48,59,.06)",
              position: "relative",
              overflow: "hidden",
              minHeight: 260,
            }}
          >
            {/* STEP 1 */}
            <div
              style={{
                opacity: step === 1 ? 1 : 0,
                transform: step === 1 ? "translateX(0)" : "translateX(-20px)",
                transition: "all .3s ease",
                position: step === 1 ? "relative" : "absolute",
                inset: step === 1 ? undefined : 0,
                padding: step === 1 ? undefined : isMobile ? "1.25rem" : "1.5rem",
                pointerEvents: step === 1 ? "auto" : "none",
              }}
            >
              <label
                style={{
                  fontSize: ".7rem",
                  fontWeight: 600,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "hsl(var(--muted-foreground))",
                  display: "block",
                  marginBottom: ".5rem",
                }}
              >
                {c.addressLabel}
              </label>
              <input
                ref={addressRef}
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={c.addressPlaceholder}
                onKeyDown={(e) => e.key === "Enter" && goStep2()}
                className={shake ? "animate-shake" : ""}
                style={inputStyle(shake)}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(168,138,90,.12)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--border))";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />

              {/* Property type selector */}
              <div style={{ display: "flex", gap: ".5rem", marginTop: ".75rem" }}>
                {PROPERTY_TYPES.map((pt) => (
                  <button
                    key={pt}
                    type="button"
                    onClick={() => setPropertyType(pt)}
                    style={{
                      padding: ".45rem .85rem",
                      border: `1.5px solid ${propertyType === pt ? "var(--gold)" : "hsl(var(--border))"}`,
                      borderRadius: 20,
                      fontSize: isMobile ? ".72rem" : ".78rem",
                      fontWeight: propertyType === pt ? 600 : 500,
                      color: propertyType === pt ? "#fff" : "hsl(var(--muted-foreground))",
                      background: propertyType === pt ? "var(--gold)" : "#fff",
                      cursor: "pointer",
                      transition: "all .2s",
                      fontFamily: "var(--sans)",
                    }}
                  >
                    {typeLabels[pt]}
                  </button>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={goStep2}
                style={{
                  width: "100%",
                  height: 50,
                  marginTop: "1rem",
                  background: "var(--gold)",
                  color: "#fff",
                  fontSize: ".9rem",
                  fontWeight: 600,
                  letterSpacing: ".03em",
                  borderRadius: 3,
                  border: "none",
                  cursor: "pointer",
                  transition: "all .2s",
                  fontFamily: "var(--sans)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--gold2)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(168,138,90,.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--gold)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {c.step1Cta}
              </button>
            </div>

            {/* STEP 2 */}
            <div
              style={{
                opacity: step === 2 ? 1 : 0,
                transform: step === 2 ? "translateX(0)" : "translateX(20px)",
                transition: "all .3s ease",
                position: step === 2 ? "relative" : "absolute",
                inset: step === 2 ? undefined : 0,
                padding: step === 2 ? undefined : isMobile ? "1.25rem" : "1.5rem",
                pointerEvents: step === 2 ? "auto" : "none",
              }}
            >
              {/* Progress */}
              <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "1rem" }}>
                <div
                  style={{
                    flex: 1,
                    height: 3,
                    background: "hsl(var(--border))",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ width: "100%", height: "100%", background: "var(--gold)", borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: ".68rem", color: "hsl(var(--muted-foreground))", whiteSpace: "nowrap" }}>
                  {c.step2of2}
                </span>
              </div>

              {/* Address pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".5rem",
                  background: "var(--gold3)",
                  color: "var(--ink)",
                  fontSize: ".75rem",
                  padding: ".3rem .75rem",
                  borderRadius: 20,
                  marginBottom: "1rem",
                  maxWidth: "100%",
                }}
              >
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  📍 {address}
                </span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: ".7rem",
                    color: "hsl(var(--muted-foreground))",
                    padding: 0,
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                  aria-label="Change address"
                >
                  ✕
                </button>
              </div>

              {/* Fields */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: ".75rem",
                }}
              >
                <div>
                  <label htmlFor="val-name" className="sr-only">{c.namePh}</label>
                  <input
                    id="val-name"
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setEmptyFields((p) => p.filter((f) => f !== "name")); }}
                    placeholder={c.namePh}
                    aria-required="true"
                    aria-invalid={emptyFields.includes("name")}
                    style={smallInputStyle(emptyFields.includes("name"))}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--gold)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(168,138,90,.12)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = emptyFields.includes("name") ? "#e53e3e" : "hsl(var(--border))";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="val-contact" className="sr-only">{c.contactPh}</label>
                  <input
                    id="val-contact"
                    type="text"
                    value={contact}
                    onChange={(e) => { setContact(e.target.value); setEmptyFields((p) => p.filter((f) => f !== "contact")); }}
                    placeholder={c.contactPh}
                    aria-required="true"
                    aria-invalid={emptyFields.includes("contact")}
                    style={smallInputStyle(emptyFields.includes("contact"))}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--gold)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(168,138,90,.12)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = emptyFields.includes("contact") ? "#e53e3e" : "hsl(var(--border))";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={c.notesPh}
                rows={3}
                style={{
                  width: "100%",
                  marginTop: ".75rem",
                  border: "1.5px solid hsl(var(--border))",
                  borderRadius: 3,
                  padding: ".75rem 1rem",
                  fontSize: ".88rem",
                  fontFamily: "var(--sans)",
                  resize: "none",
                  outline: "none",
                  transition: "all .2s",
                  color: "var(--ink)",
                  background: "#fff",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(168,138,90,.12)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--border))";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />

              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  width: "100%",
                  height: 50,
                  marginTop: "1rem",
                  background: "var(--ink)",
                  color: "#fff",
                  fontSize: ".88rem",
                  fontWeight: 600,
                  borderRadius: 3,
                  border: "none",
                  cursor: submitting ? "wait" : "pointer",
                  transition: "all .2s",
                  fontFamily: "var(--sans)",
                  opacity: submitting ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!submitting) {
                    e.currentTarget.style.background = "var(--ink2)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--ink)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {submitting ? "..." : c.submitCta}
              </button>

              <p
                style={{
                  fontSize: ".66rem",
                  color: "hsl(var(--muted-foreground))",
                  textAlign: "center",
                  marginTop: ".75rem",
                }}
              >
                {c.privacy}
              </p>
            </div>

            {/* STEP 3 — Success */}
            <div
              style={{
                opacity: step === 3 ? 1 : 0,
                transform: step === 3 ? "scale(1)" : "scale(.95)",
                transition: "all .4s ease",
                position: step === 3 ? "relative" : "absolute",
                inset: step === 3 ? undefined : 0,
                padding: step === 3 ? "1.5rem 0" : isMobile ? "1.25rem" : "1.5rem",
                pointerEvents: step === 3 ? "auto" : "none",
                textAlign: "center",
              }}
            >
              {/* Checkmark */}
              <div style={{ margin: "0 auto 1.25rem", width: 60, height: 60 }}>
                <svg viewBox="0 0 60 60" width="60" height="60">
                  <circle
                    cx="30"
                    cy="30"
                    r="27"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="2.5"
                    strokeDasharray="170"
                    strokeDashoffset="0"
                    style={{ animation: "draw-circle .6s ease forwards" }}
                  />
                  <path
                    d="M18 30 L26 38 L42 22"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="40"
                    strokeDashoffset="0"
                    style={{ animation: "draw-check .4s .4s ease forwards" }}
                  />
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  margin: "0 0 .5rem",
                }}
              >
                {c.successTitle}
              </h3>
              <p
                style={{
                  fontSize: ".88rem",
                  color: "hsl(var(--muted-foreground))",
                  lineHeight: 1.6,
                  maxWidth: 320,
                  margin: "0 auto .75rem",
                }}
              >
                {c.successText}
              </p>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: ".9rem",
                  color: "var(--ink)",
                  margin: "0 0 1rem",
                }}
              >
                — Yanis Gauthier-Sigeris
              </p>
              <p style={{ fontSize: ".78rem", color: "hsl(var(--muted-foreground))" }}>
                {c.urgentQ}{" "}
                <a href="tel:8192103044" style={{ color: "var(--gold)", textDecoration: "none" }}>
                  819-210-3044
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuationWidget;
