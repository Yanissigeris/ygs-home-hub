import { useLanguage } from "@/contexts/LanguageContext";
import { getA11yLabel } from "@/lib/a11y";

const GOOGLE_PROFILE_URL = "https://maps.app.goo.gl/BkkH6Zrw7Yj3XdpA9";

const GoogleIcon = () => (
  <svg width={18} height={18} viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.01 24.01 0 0 0 0 21.56l7.98-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const Stars = ({ label }: { label: string }) => (
  <span className="inline-flex gap-0.5 text-[#FBBC05]" aria-label={label}>
    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
  </span>
);

interface GoogleReviewBadgeProps {
  variant?: "full" | "compact";
}

const GoogleReviewBadge = ({ variant = "full" }: GoogleReviewBadgeProps) => {
  const lang = useLanguage();
  const reviewsText = lang === "en" ? "reviews" : "avis";
  const starsLabel = getA11yLabel("reviews.fiveStars", lang);

  if (variant === "compact") {
    return (
      <a
        href={GOOGLE_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
        style={{ fontSize: ".75rem", color: "rgba(255,255,255,.45)" }}
      >
        <Stars label={starsLabel} /> 5.0 {lang === "en" ? "on Google" : "sur Google"}
      </a>
    );
  }

  return (
    <a
      href={GOOGLE_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 rounded bg-white px-4 py-2.5 transition-shadow hover:shadow-md"
      style={{ border: "1px solid hsl(var(--border))" }}
    >
      <GoogleIcon />
      <div className="flex flex-col">
        <span className="text-[.68rem] font-medium uppercase tracking-[.04em]" style={{ color: "hsl(var(--muted-foreground))" }}>
          Google Reviews
        </span>
        <span className="flex items-center gap-1.5">
          <Stars label={starsLabel} />
          <span className="text-[.88rem] font-semibold" style={{ color: "var(--ink)" }}>5.0</span>
          
        </span>
      </div>
    </a>
  );
};

export default GoogleReviewBadge;
