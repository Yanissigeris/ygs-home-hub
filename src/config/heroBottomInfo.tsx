/**
 * Hero bottom-left info — single source of truth for the credibility bar
 * and NAP (Name/Address/Phone) line shown at the bottom of <HeroSection>.
 *
 * Edit values here to update the homepage hero. Bilingual (FR/EN) parity required.
 */

import type { ReactNode } from "react";

export type HeroCredibilityItem = {
  /** Icon key — maps to an inline SVG inside HeroSection */
  icon: "calendar" | "star" | "trophy";
  /** Optional anchor href (e.g. "#avis"). Omit for plain text. */
  href?: string;
  /** Desktop label (full text) */
  label: ReactNode;
};

export type HeroCredibility = {
  /** Items shown on desktop (≥768px), separated by " | " */
  desktopItems: HeroCredibilityItem[];
  /** Single shorter line shown on mobile (<768px) */
  mobileLine: ReactNode;
};

export type HeroBottomInfo = {
  credibility: HeroCredibility;
  nap: ReactNode;
};

export const heroBottomInfo: Record<"fr" | "en", HeroBottomInfo> = {
  fr: {
    credibility: {
      desktopItems: [
        { icon: "calendar", label: <span>~9 ans d'expérience</span> },
        { icon: "star", href: "#avis", label: <span>5★ Google & Facebook</span> },
        { icon: "trophy", label: <span>Hall of Fame RE/MAX</span> },
      ],
      mobileLine: <span>~9 ans | 5★ Google | Hall of Fame</span>,
    },
    nap: (
      <>
        <span>Gatineau, QC</span> | <a href="tel:+18192103044" style={{ color: "inherit" }}>819-210-3044</a> | <a href="mailto:yanis@martywaite.com" className="[overflow-wrap:anywhere] md:[overflow-wrap:normal]" style={{ color: "inherit" }}>yanis@martywaite.com</a>
      </>
    ),
  },
  en: {
    credibility: {
      desktopItems: [
        { icon: "calendar", label: <span>~9 years of experience</span> },
        { icon: "star", href: "#avis", label: <span>5★ Google & Facebook</span> },
        { icon: "trophy", label: <span>RE/MAX Hall of Fame</span> },
      ],
      mobileLine: <span>~9 yrs | 5★ Google | Hall of Fame</span>,
    },
    nap: (
      <>
        <span>Gatineau, QC</span> | <a href="tel:+18192103044" style={{ color: "inherit" }}>819-210-3044</a> | <a href="mailto:yanis@martywaite.com" className="[overflow-wrap:anywhere] md:[overflow-wrap:normal]" style={{ color: "inherit" }}>yanis@martywaite.com</a>
      </>
    ),
  },
};