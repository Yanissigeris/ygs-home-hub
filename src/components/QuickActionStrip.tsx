import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const QuickActionStrip = () => {
  const lang = useLanguage();

  const actions = lang === "en"
    ? [
        { emoji: "🏠", label: "Sell", href: "/en/sell" },
        { emoji: "🔑", label: "Buy", href: "/en/buy" },
        { emoji: "📊", label: "Invest", href: "/en/plex" },
      ]
    : [
        { emoji: "🏠", label: "Vendre", href: "/vendre-ma-maison-gatineau" },
        { emoji: "🔑", label: "Acheter", href: "/acheter-a-gatineau" },
        { emoji: "📊", label: "Investir", href: "/investir-plex-gatineau" },
      ];

  return (
    <div className="md:hidden" style={{ background: "white", padding: "1rem 1.25rem", borderBottom: "1px solid hsl(var(--border))" }}>
      <div className="flex gap-2">
        {actions.map((a) => (
          <Link
            key={a.label}
            to={a.href}
            className="flex-1 text-center transition-colors hover:text-white"
            style={{
              background: "var(--cream)",
              border: "1px solid hsl(var(--border))",
              borderRadius: "20px",
              padding: ".6rem .5rem",
              fontSize: ".75rem",
              fontWeight: 600,
              color: "var(--ink)",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.borderColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--cream)";
              e.currentTarget.style.color = "var(--ink)";
              e.currentTarget.style.borderColor = "hsl(var(--border))";
            }}
          >
            {a.emoji} {a.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActionStrip;
