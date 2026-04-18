import * as React from "react";

interface MicroTrustStripProps {
  lang?: "fr" | "en";
}

/** Slim trust bar shown directly under the hero, above the valuation widget. */
const MicroTrustStrip: React.FC<MicroTrustStripProps> = ({ lang = "fr" }) => {
  const sep = (
    <span aria-hidden style={{ opacity: 0.4, padding: "0 .85rem" }}>
      ·&nbsp;|&nbsp;·
    </span>
  );

  const reviewsLabel = lang === "en" ? "5/5 · 47 Google reviews" : "5/5 · 47 avis Google";
  const quote = lang === "en"
    ? "“Professional, attentive and efficient.”"
    : "« Professionnel, à l'écoute et efficace. »";
  const experience = lang === "en" ? "9 years of experience · Outaouais" : "9 ans d'expérience · Outaouais";
  const ariaLabel = lang === "en" ? "Social proof" : "Preuve sociale";

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      style={{
        background: "#17303B",
        height: 52,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        fontSize: 13,
        color: "#F7F4EF",
        lineHeight: 1,
        padding: "0 1rem",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: ".5rem" }}>
        <span aria-hidden style={{ color: "#A88A5A", letterSpacing: ".05em" }}>★★★★★</span>
        <span>{reviewsLabel}</span>
      </span>
      {sep}
      <span style={{ fontStyle: "italic" }}>{quote}</span>
      {sep}
      <span>{experience}</span>
    </div>
  );
};

export default MicroTrustStrip;
