import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackEvent } from "@/lib/analytics";
import { useIsMobile } from "@/hooks/use-mobile";

// Supabase client is dynamically imported inside the submit handler so the
// ~127 KB @supabase/supabase-js bundle is NOT pulled into the homepage's
// initial JS payload (this widget renders on / and /en but submits rarely).
const loadSupabase = () => import("@/integrations/supabase/client").then(m => m.supabase);

interface Props {
  lang?: "fr" | "en";
}

const t = {
  fr: {
    eyebrow: "ÉVALUATION GRATUITE",
    heading: "Combien vaut votre propriété?",
    sub: "Recevez une estimation basée sur les ventes récentes de votre secteur.",
    addressLabel: "Adresse de votre propriété",
    addressPlaceholder: "Ex: 123 Rue des Érables, Aylmer",
    house: "Maison",
    condo: "Condo",
    plex: "Plex",
    step1Cta: "ESTIMER",
    step2of2: "Étape 2 de 2",
    namePh: "Votre prénom",
    contactPh: "Téléphone ou courriel",
    notesPh: "Informations supplémentaires (facultatif)",
    submitCta: "Recevoir mon évaluation gratuite →",
    privacy: "Vos informations restent confidentielles.",
    successTitle: "Demande reçue !",
    successText: "Je vous contacte dans les prochaines 24-48h avec une analyse claire de votre propriété.",
    urgentQ: "Une question urgente? →",
    changeAddr: "Modifier",
  },
  en: {
    eyebrow: "FREE VALUATION",
    heading: "How much is your property worth?",
    sub: "Get an estimate based on recent sales in your area.",
    addressLabel: "Your property address",
    addressPlaceholder: "Ex: 123 Maple Street, Aylmer",
    house: "House",
    condo: "Condo",
    plex: "Plex",
    step1Cta: "ESTIMATE",
    step2of2: "Step 2 of 2",
    namePh: "Your first name",
    contactPh: "Phone or email",
    notesPh: "Additional info (optional)",
    submitCta: "Get my free valuation →",
    privacy: "Your information stays private.",
    successTitle: "Request received!",
    successText: "I'll reach out within 24-48h with a clear analysis of your property.",
    urgentQ: "Urgent question? →",
    changeAddr: "Edit",
  },
};

const PROPERTY_TYPES = ["maison", "condo", "plex"] as const;
const DARK = "#17303B";

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
      const supabase = await loadSupabase();
      await supabase.from("valuation_leads" as any).insert({
        address: address.trim(),
        property_type: propertyType,
        name: name.trim(),
        contact: contact.trim(),
        notes: notes.trim() || null,
        source: "homepage-evaluation-widget",
        language: lang,
      });

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
      setStep(3);
    } finally {
      setSubmitting(false);
    }
  };

  const smallInputStyle = (isError?: boolean): React.CSSProperties => ({
    width: "100%",
    height: 48,
    padding: "0 1rem",
    fontSize: ".95rem",
    fontFamily: "var(--sans)",
    border: `1.5px solid ${isError ? "#e53e3e" : "hsl(var(--border))"}`,
    borderRadius: 3,
    background: "#fff",
    color: "var(--ink)",
    outline: "none",
    transition: "border-color .2s, box-shadow .2s",
  });

  return (
    <section
      style={{
        background: "#fff",
        paddingTop: isMobile ? "4rem" : "6rem",
        paddingBottom: isMobile ? "4rem" : "6rem",
      }}
    >
      <div className="section-container">
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontSize: ".72rem",
              fontWeight: 600,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "hsl(var(--muted-foreground))",
              margin: 0,
            }}
          >
            {c.eyebrow}
          </p>

          {/* Heading — h2 to keep document hierarchy consistent (h1 → h2) */}
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: isMobile ? "1.85rem" : "2.4rem",
              fontWeight: 500,
              color: "var(--ink)",
              lineHeight: 1.15,
              marginTop: "1.25rem",
              marginBottom: 0,
              letterSpacing: "-0.01em",
            }}
          >
            {c.heading}
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: isMobile ? ".95rem" : "1.05rem",
              color: "hsl(var(--muted-foreground))",
              lineHeight: 1.65,
              marginTop: "1rem",
              marginBottom: 0,
              maxWidth: 540,
              marginInline: "auto",
            }}
          >
            {c.sub}
          </p>

          {/* STEP 1 */}
          {step === 1 && (
            <div style={{ marginTop: isMobile ? "2rem" : "2.5rem" }}>
              {/* Property type pills */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: ".6rem",
                  flexWrap: "wrap",
                }}
              >
                {PROPERTY_TYPES.map((pt) => {
                  const active = propertyType === pt;
                  return (
                    <button
                      key={pt}
                      type="button"
                      onClick={() => setPropertyType(pt)}
                      style={{
                        padding: ".6rem 1.4rem",
                        border: `1px solid ${active ? DARK : "hsl(var(--border))"}`,
                        borderRadius: 999,
                        fontSize: ".85rem",
                        fontWeight: active ? 600 : 500,
                        color: active ? "#fff" : "var(--ink)",
                        background: active ? DARK : "#fff",
                        cursor: "pointer",
                        transition: "border-color .2s, box-shadow .2s",
                        fontFamily: "var(--sans)",
                        letterSpacing: ".01em",
                      }}
                    >
                      {typeLabels[pt]}
                    </button>
                  );
                })}
              </div>

              {/* Address + CTA inline */}
              <div
                style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  gap: ".5rem",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: "stretch",
                }}
              >
                <label htmlFor="val-address" className="sr-only">
                  {c.addressLabel}
                </label>
                <input
                  id="val-address"
                  ref={addressRef}
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={c.addressPlaceholder}
                  onKeyDown={(e) => e.key === "Enter" && goStep2()}
                  className={shake ? "animate-shake" : ""}
                  aria-required="true"
                  style={{
                    flex: 1,
                    height: 56,
                    padding: "0 1.25rem",
                    fontSize: "1rem",
                    fontFamily: "var(--sans)",
                    border: `1px solid ${shake ? "#e53e3e" : "hsl(var(--border))"}`,
                    borderRadius: 3,
                    background: "#fff",
                    color: "var(--ink)",
                    outline: "none",
                    transition: "border-color .2s, box-shadow .2s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = DARK;
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${DARK}1A`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "hsl(var(--border))";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={goStep2}
                  style={{
                    height: 56,
                    padding: "0 2rem",
                    background: DARK,
                    color: "#fff",
                    fontSize: ".85rem",
                    fontWeight: 600,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    borderRadius: 3,
                    border: "none",
                    cursor: "pointer",
                    transition: "border-color .2s, box-shadow .2s",
                    fontFamily: "var(--sans)",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  {c.step1Cta} →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div style={{ marginTop: isMobile ? "2rem" : "2.5rem", textAlign: "left", maxWidth: 540, marginInline: "auto" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: ".75rem",
                  marginBottom: "1.25rem",
                  fontSize: ".85rem",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 320 }}>
                  {address}
                </span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: ".8rem",
                    color: DARK,
                    padding: 0,
                    textDecoration: "underline",
                    fontFamily: "var(--sans)",
                  }}
                >
                  {c.changeAddr}
                </button>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: ".75rem",
                }}
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setEmptyFields((p) => p.filter((f) => f !== "name")); }}
                  placeholder={c.namePh}
                  aria-label={c.namePh}
                  aria-required="true"
                  style={smallInputStyle(emptyFields.includes("name"))}
                />
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => { setContact(e.target.value); setEmptyFields((p) => p.filter((f) => f !== "contact")); }}
                  placeholder={c.contactPh}
                  aria-label={c.contactPh}
                  aria-required="true"
                  style={smallInputStyle(emptyFields.includes("contact"))}
                />
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
                  fontSize: ".95rem",
                  fontFamily: "var(--sans)",
                  resize: "none",
                  outline: "none",
                  color: "var(--ink)",
                  background: "#fff",
                }}
              />

              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  width: "100%",
                  height: 54,
                  marginTop: "1rem",
                  background: DARK,
                  color: "#fff",
                  fontSize: ".9rem",
                  fontWeight: 600,
                  letterSpacing: ".05em",
                  borderRadius: 3,
                  border: "none",
                  cursor: submitting ? "wait" : "pointer",
                  transition: "border-color .2s, box-shadow .2s",
                  fontFamily: "var(--sans)",
                  opacity: submitting ? 0.7 : 1,
                }}
              >
                {submitting ? "..." : c.submitCta}
              </button>

              <p
                style={{
                  fontSize: ".75rem",
                  color: "hsl(var(--muted-foreground))",
                  textAlign: "center",
                  marginTop: ".75rem",
                }}
              >
                {c.privacy}
              </p>
            </div>
          )}

          {/* STEP 3 — Success */}
          {step === 3 && (
            <div style={{ marginTop: isMobile ? "2rem" : "2.5rem" }}>
              <div style={{ margin: "0 auto 1.25rem", width: 60, height: 60 }}>
                <svg viewBox="0 0 60 60" width="60" height="60">
                  <circle cx="30" cy="30" r="27" fill="none" stroke={DARK} strokeWidth="2.5" />
                  <path d="M18 30 L26 38 L42 22" fill="none" stroke={DARK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  margin: "0 0 .75rem",
                }}
              >
                {c.successTitle}
              </h3>
              <p
                style={{
                  fontSize: ".95rem",
                  color: "hsl(var(--muted-foreground))",
                  lineHeight: 1.65,
                  maxWidth: 420,
                  margin: "0 auto 1rem",
                }}
              >
                {c.successText}
              </p>
              <p style={{ fontSize: ".85rem", color: "hsl(var(--muted-foreground))" }}>
                {c.urgentQ}{" "}
                <a href="tel:+18192103044" style={{ color: DARK, textDecoration: "underline", fontWeight: 600 }}>
                  819-210-3044
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ValuationWidget;
