import { Link } from "react-router-dom";
import { Home, Key, TrendingUp, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Action = { icon: LucideIcon; label: string; href: string };

const QuickActionStrip = () => {
  const lang = useLanguage();

  const actions: Action[] = lang === "en"
    ? [
        { icon: Home, label: "Sell", href: "/en/sell" },
        { icon: Key, label: "Buy", href: "/en/buy" },
        { icon: TrendingUp, label: "Invest", href: "/en/plex" },
      ]
    : [
        { icon: Home, label: "Vendre", href: "/vendre-ma-maison-gatineau" },
        { icon: Key, label: "Acheter", href: "/acheter-a-gatineau" },
        { icon: TrendingUp, label: "Investir", href: "/investir-plex-gatineau" },
      ];

  return (
    <div className="md:hidden" style={{ background: "white", padding: "1rem 1.25rem", borderBottom: "1px solid hsl(var(--border))" }}>
      <div className="flex gap-2">
        {actions.map((a) => {
          const Icon = a.icon;
          return (
            <Link
              key={a.label}
              to={a.href}
              className="qas-btn flex-1 inline-flex items-center justify-center gap-1.5"
              style={{
                background: "var(--cream)",
                border: "1px solid hsl(var(--border))",
                borderRadius: "20px",
                padding: ".75rem .5rem",
                minHeight: "44px",
                fontSize: ".75rem",
                fontWeight: 600,
                color: "var(--ink)",
                whiteSpace: "nowrap",
                letterSpacing: "0.02em",
                transition: "background-color .25s ease, color .25s ease, border-color .25s ease, transform .25s ease, box-shadow .25s ease",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold)";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 14px -4px rgba(168,138,90,.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--cream)";
                e.currentTarget.style.color = "var(--ink)";
                e.currentTarget.style.borderColor = "hsl(var(--border))";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(168,138,90,.2)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--border))";
                e.currentTarget.style.boxShadow = "none";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(.98)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
            >
              <Icon
                size={15}
                strokeWidth={1.75}
                aria-hidden="true"
                className="qas-icon"
                style={{ transition: "transform .3s cubic-bezier(.22,1,.36,1)" }}
              />
              <span>{a.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActionStrip;
