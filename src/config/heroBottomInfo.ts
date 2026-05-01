/**
 * Hero bottom-left info — single source of truth for the credibility bar
 * and NAP (Name/Address/Phone) line shown at the bottom of <HeroSection>.
 *
 * Edit values here to update the homepage hero. Bilingual (FR/EN) parity required.
 */

export type HeroCredibilityItem = {
  /** Icon key — maps to an inline SVG inside HeroSection */
  icon: "calendar" | "star" | "trophy";
  /** Optional anchor href (e.g. "#avis"). Omit for plain text. */
  href?: string;
  /** Desktop label (full text) */
  label: string;
};

export type HeroCredibility = {
  /** Items shown on desktop (≥768px), separated by " | " */
  desktopItems: HeroCredibilityItem[];
  /** Single shorter line shown on mobile (<768px) */
  mobileLine: string;
};

export type HeroNAP = {
  city: string;
  phoneDisplay: string;
  /** Tel URI (E.164 recommended), e.g. "+18192103044" */
  phoneHref: string;
  emailDisplay: string;
  /** Email address (no "mailto:" prefix) */
  emailHref: string;
};

export type HeroBottomInfo = {
  credibility: HeroCredibility;
  nap: HeroNAP;
};

export const heroBottomInfo: Record<"fr" | "en", HeroBottomInfo> = {
  fr: {
    credibility: {
      desktopItems: [
        { icon: "calendar", label: "~9 ans d'expérience" },
        { icon: "star", href: "#avis", label: "5★ Google & Facebook" },
        { icon: "trophy", label: "Hall of Fame RE/MAX" },
      ],
      mobileLine: "~9 ans | 5★ Google | Hall of Fame",
    },
    nap: {
      city: "Gatineau, QC",
      phoneDisplay: "819-210-3044",
      phoneHref: "+18192103044",
      emailDisplay: "yanis@martywaite.com",
      emailHref: "yanis@martywaite.com",
    },
  },
  en: {
    credibility: {
      desktopItems: [
        { icon: "calendar", label: "~9 years of experience" },
        { icon: "star", href: "#avis", label: "5★ Google & Facebook" },
        { icon: "trophy", label: "RE/MAX Hall of Fame" },
      ],
      mobileLine: "~9 yrs | 5★ Google | Hall of Fame",
    },
    nap: {
      city: "Gatineau, QC",
      phoneDisplay: "819-210-3044",
      phoneHref: "+18192103044",
      emailDisplay: "yanis@martywaite.com",
      emailHref: "yanis@martywaite.com",
    },
  },
};
