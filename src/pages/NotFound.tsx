import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

type IconProps = { width?: number; height?: number; style?: React.CSSProperties };

const IconHome = ({ width = 22, height = 22, style }: IconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
    <path d="M10 21v-6h4v6" />
  </svg>
);

const IconKey = ({ width = 22, height = 22, style }: IconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
    <circle cx="8" cy="15" r="4" />
    <path d="m10.85 12.15 9.15-9.15" />
    <path d="m18 5 2 2" />
    <path d="m15 8 2 2" />
  </svg>
);

const IconChart = ({ width = 22, height = 22, style }: IconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
    <path d="M3 3v18h18" />
    <rect x="7" y="12" width="3" height="6" />
    <rect x="12" y="8" width="3" height="10" />
    <rect x="17" y="5" width="3" height="13" />
  </svg>
);

const IconPhone = ({ width = 22, height = 22, style }: IconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const NotFound = () => {
  const { pathname } = useLocation();
  const isEn = pathname.startsWith("/en");

  const links = isEn
    ? [
        { icon: IconHome, title: "Sell", desc: "Free valuation", to: "/en/sell" },
        { icon: IconKey, title: "Buy", desc: "Find my home", to: "/en/buy" },
        { icon: IconChart, title: "Invest", desc: "Plex & returns", to: "/en/plex" },
        { icon: IconPhone, title: "Contact me", desc: "819-210-3044", to: "/en/contact" },
      ]
    : [
        { icon: IconHome, title: "Vendre", desc: "Évaluation gratuite", to: "/vendre-ma-maison-gatineau" },
        { icon: IconKey, title: "Acheter", desc: "Trouver ma maison", to: "/acheter-a-gatineau" },
        { icon: IconChart, title: "Investir", desc: "Plex & rendement", to: "/investir-plex-gatineau" },
        { icon: IconPhone, title: "Me contacter", desc: "819-210-3044", to: "/contact-yanis" },
      ];


  return (
    <div className="flex min-h-screen flex-col font-body">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>{isEn ? "Page Not Found — Yanis Gauthier" : "Page introuvable — Yanis Gauthier"}</title>
      </Helmet>
      {/* Dark backdrop strip so the permanently-transparent SiteHeader stays
          legible on this cream-background page. Sits behind the header. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[5]"
        style={{ height: 96, background: "#17303B" }}
      />
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center pt-[96px]" style={{ background: "var(--cream)" }}>
        <div className="mx-auto max-w-[560px] px-5 py-16 text-center sm:py-20">
          {/* Ghost 404 */}
          <div
            className="relative z-0 -mb-8 select-none"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(7rem, 20vw, 10rem)",
              fontWeight: 700,
              lineHeight: 1,
              color: "rgba(23,48,59,.06)",
            }}
          >
            404
          </div>

          {/* Gold line */}
          <div
            className="relative z-[1] mx-auto mb-6"
            style={{ width: 48, height: 2, background: "var(--gold)" }}
          />

          {/* Heading */}
          <h1
            className="relative z-[1]"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 600,
              color: "var(--ink)",
              letterSpacing: "-.01em",
            }}
          >
            {isEn ? "This page doesn't exist" : "Cette page n'existe pas"}
          </h1>

          {/* Subtext */}
          <p
            className="mx-auto mt-3 max-w-md"
            style={{
              fontSize: ".95rem",
              fontWeight: 300,
              color: "hsl(var(--muted-foreground))",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
            }}
          >
            {isEn
              ? "The page you're looking for may have moved or no longer exists. Here are some helpful links:"
              : "La page que vous cherchez a peut-être été déplacée ou n'existe plus. Voici quelques liens utiles :"}
          </p>

          {/* Quick links grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group rounded-[3px] border border-border bg-white p-5 text-left transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 25px rgba(23,48,59,.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <l.icon width={22} height={22} style={{ color: "var(--gold)" }} />
                <div className="mt-1 text-[.9rem] font-semibold" style={{ color: "var(--ink)" }}>
                  {l.title}
                </div>
                <div className="text-[.8rem] font-light" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {l.desc}
                </div>
              </Link>
            ))}
          </div>

          {/* Back home button */}
          <Link
            to={isEn ? "/en" : "/"}
            className="mt-6 inline-flex items-center justify-center rounded-[3px] px-8 py-3 text-[.85rem] font-semibold text-white transition-colors"
            style={{ background: "var(--ink)" }}
          >
            {isEn ? "← Back to home" : "← Retour à l'accueil"}
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default NotFound;
