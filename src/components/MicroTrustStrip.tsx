import * as React from "react";

/** Slim trust bar shown directly under the hero, above the valuation widget. */
const MicroTrustStrip: React.FC = () => {
  const sep = (
    <span aria-hidden style={{ opacity: 0.4, padding: "0 .85rem" }}>
      ·&nbsp;|&nbsp;·
    </span>
  );

  return (
    <div
      role="region"
      aria-label="Preuve sociale"
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
        <span>5/5 · 47 avis Google</span>
      </span>
      {sep}
      <span style={{ fontStyle: "italic" }}>« Professionnel, à l'écoute et efficace. »</span>
      {sep}
      <span>9 ans d'expérience · Outaouais</span>
    </div>
  );
};

export default MicroTrustStrip;
