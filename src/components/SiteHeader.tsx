import { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";

// Heavy framer-motion drawer is split out — only loaded when the user opens
// the mobile menu. Saves ~128 KB / 42 KB gz from the initial bundle.
const MobileNavDrawer = lazy(() => import("@/components/MobileNavDrawer"));

/* Inline SVG icons */
const MenuIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const ChevronDownIcon = ({ size = 11, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
);
import LanguageSwitch from "@/components/LanguageSwitch";
import { useLanguage } from "@/contexts/LanguageContext";
import { getA11yLabel } from "@/lib/a11y";
import ygsLogo from "@/assets/ygs-logo-updated.png";
import remaxLogotypeBlack from "@/assets/remax-logotype-black.png";
import remaxBalloonOfficial from "@/assets/remax-balloon-official.png";
const logoYgsHorizontal = ygsLogo;
const logoYgsSymbolBlue = ygsLogo;
import { mainNav, type NavItem, type NavChild } from "@/data/navigation";
import { mainNavEn } from "@/data/navigation-en";

/* ── RE/MAX cream affiliation pill ── */
const RemaxPill = ({ size = "md", lang }: { size?: "sm" | "md" | "lg"; lang: "fr" | "en" }) => {
  const dims = size === "lg"
    ? { px: "0.625rem", py: "0.25rem", logo: 18, balloon: 20, gap: "0.5rem" }
    : size === "md"
    ? { px: "0.5rem", py: "0.125rem", logo: 16, balloon: 18, gap: "0.375rem" }
    : { px: "0.375rem", py: "0.125rem", logo: 14, balloon: 16, gap: "0.3rem" };
  return (
    <span
      role="img"
      aria-label={lang === "en" ? "RE/MAX Direct Inc. affiliate" : "Affilié RE/MAX Direct Inc."}
      className="inline-flex shrink-0 items-center rounded-full"
      style={{
        background: "var(--ygs-cream, #F7F4EE)",
        border: "1px solid rgba(34, 40, 49, 0.06)",
        padding: `${dims.py} ${dims.px}`,
        gap: dims.gap,
        textShadow: "none",
      }}
    >
      <img src={remaxLogotypeBlack} alt="Logo RE/MAX" height={dims.logo} style={{ height: dims.logo, width: "auto" }} loading="eager" decoding="async" />
      <img src={remaxBalloonOfficial} alt="" aria-hidden="true" height={dims.balloon} style={{ height: dims.balloon, width: "auto" }} loading="eager" decoding="async" />
    </span>
  );
};

/* ── Desktop dropdown item ── */
const DesktopNavItem = ({ item, pathname, transparent }: { item: NavItem; pathname: string; transparent?: boolean }) => {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 140); };

  const defaultColor = "var(--white)";
  const activeColor = "var(--white)";
  const hoverColor = "var(--white)";
  const underlineColor = "var(--white)";

  if (!item.children && !item.columns) {
    const active = pathname === item.href;
    return (
      <Link
        to={item.href!}
        className="group relative whitespace-nowrap transition-colors"
        style={{
          fontSize: "13px",
          letterSpacing: "0.04em",
          fontWeight: active ? 600 : 500,
          color: active ? activeColor : defaultColor,
          padding: ".4rem .7rem",
          borderRadius: 3,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = hoverColor; }}
        onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = defaultColor; }}
      >
        {item.label}
        <span className="absolute bottom-0 left-[.7rem] right-[.7rem] h-[1.5px] rounded-full transition-transform duration-300 ease-out origin-left group-hover:scale-x-100" style={{ background: underlineColor, transform: active ? "scaleX(1)" : "scaleX(0)" }} />
      </Link>
    );
  }

  // Mega-menu (multi-column) variant
  if (item.columns) {
    const allLinks = item.columns.flatMap((c) => c.links);
    const isChildActive = allLinks.some((l) => pathname === l.href);
    return (
      <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
        <button
          className="group relative flex items-center gap-1 whitespace-nowrap transition-colors"
          style={{
            fontSize: "13px",
            letterSpacing: "0.04em",
            fontWeight: isChildActive ? 600 : 500,
            color: isChildActive ? activeColor : defaultColor,
            padding: ".4rem .7rem",
            borderRadius: 3,
          }}
          onClick={() => setOpen((p) => !p)}
          aria-expanded={open}
          aria-haspopup="true"
          onMouseEnter={(e) => { e.currentTarget.style.color = hoverColor; }}
          onMouseLeave={(e) => { if (!isChildActive) e.currentTarget.style.color = defaultColor; }}
        >
          {item.label}
          <ChevronDownIcon size={11} className={`mt-px opacity-30 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          <span className="absolute bottom-0 left-[.7rem] right-[.7rem] h-[1.5px] rounded-full transition-transform duration-300 ease-out origin-left group-hover:scale-x-100" style={{ background: underlineColor, transform: isChildActive ? "scaleX(1)" : "scaleX(0)" }} />
        </button>
        <div className={`absolute left-1/2 top-full z-50 pt-2.5 -translate-x-1/2 transition-all duration-200 ${open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1.5 opacity-0"}`}>
          <div
            className="overflow-hidden p-5"
            style={{
              borderRadius: 3,
              border: "1px solid var(--border)",
              background: "rgba(247,244,238,.98)",
              boxShadow: "0 12px 40px -12px rgba(23,48,59,.12)",
              display: "grid",
              gridTemplateColumns: `repeat(${item.columns.length}, minmax(13rem, 1fr))`,
              gap: "1.25rem",
              minWidth: `${item.columns.length * 14}rem`,
            }}
          >
            {item.columns.map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: "var(--gold)",
                    padding: "0 .75rem .5rem",
                    borderBottom: "1px solid rgba(168,138,90,.2)",
                    marginBottom: ".25rem",
                  }}
                >
                  {col.title}
                </div>
                {col.links.map((child) => (
                  <Link
                    key={child.href}
                    to={child.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 transition-colors"
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.03em",
                      fontWeight: pathname === child.href ? 600 : 500,
                      color: pathname === child.href ? "var(--ink)" : "#4A5568",
                      borderRadius: 3,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold3)"; e.currentTarget.style.color = "var(--ink)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = ""; if (pathname !== child.href) e.currentTarget.style.color = "#4A5568"; }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const isChildActive = item.children!.some((c) => pathname === c.href);

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className="group relative flex items-center gap-1 whitespace-nowrap transition-colors"
        style={{
          fontSize: "13px",
          letterSpacing: "0.04em",
          fontWeight: isChildActive ? 600 : 500,
          color: isChildActive ? activeColor : defaultColor,
          padding: ".4rem .7rem",
          borderRadius: 3,
        }}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        onMouseEnter={(e) => { e.currentTarget.style.color = hoverColor; }}
        onMouseLeave={(e) => { if (!isChildActive) e.currentTarget.style.color = defaultColor; }}
      >
        {item.label}
        <ChevronDownIcon size={11} className={`mt-px opacity-30 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        <span className="absolute bottom-0 left-[.7rem] right-[.7rem] h-[1.5px] rounded-full transition-transform duration-300 ease-out origin-left group-hover:scale-x-100" style={{ background: underlineColor, transform: isChildActive ? "scaleX(1)" : "scaleX(0)" }} />
      </button>
      <div className={`absolute left-1/2 top-full z-50 pt-2.5 -translate-x-1/2 transition-all duration-200 ${open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1.5 opacity-0"}`}>
        <div className="min-w-[13.5rem] overflow-hidden p-1.5" style={{ borderRadius: 3, border: "1px solid var(--border)", background: "rgba(247,244,238,.98)", boxShadow: "0 12px 40px -12px rgba(23,48,59,.12)" }}>
          {item.children!.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              onClick={() => setOpen(false)}
              className="block px-3.5 py-2.5 transition-colors"
              style={{
                fontSize: "13px",
                letterSpacing: "0.04em",
                fontWeight: pathname === child.href ? 600 : 500,
                color: pathname === child.href ? "var(--ink)" : "#4A5568",
                borderRadius: 3,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold3)"; e.currentTarget.style.color = "var(--ink)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = ""; if (pathname !== child.href) e.currentTarget.style.color = "#4A5568"; }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Mobile accordion group ── */
// MobileNavGroup moved into MobileNavDrawer (lazy chunk).

/* ── Header ── */
const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [mobileScrolled, setMobileScrolled] = useState(false);
  const scrolled = false;
  const location = useLocation();
  const lang = useLanguage();
  const nav = lang === "en" ? mainNavEn : mainNav;
  const ctaHref = lang === "en" ? "/en/home-valuation" : "/evaluation-gratuite-gatineau";
  const ctaLabel = lang === "en" ? "Free Valuation" : "Évaluation gratuite";

  // Header is permanently transparent; no dark-hero detection needed.

  useEffect(() => { setOpen(false); }, [location.pathname]);
  const closeMenu = useCallback(() => setOpen(false), []);

  // Mobile homepage only: switch from transparent → solid dark blur after 80px scroll.
  // Listener early-returns on desktop so desktop styling is byte-identical.
  const isHomepage = location.pathname === "/" || location.pathname === "/en";
  useEffect(() => {
    if (!isHomepage) {
      setMobileScrolled(false);
      return;
    }
    let raf = 0;
    let attached = false;
    const mql = window.matchMedia("(max-width: 767.98px)");

    const onScroll = () => {
      if (!mql.matches) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setMobileScrolled(window.scrollY > 80);
      });
    };

    const attach = () => {
      if (attached) return;
      window.addEventListener("scroll", onScroll, { passive: true });
      attached = true;
      onScroll();
    };
    const detach = () => {
      if (!attached) return;
      window.removeEventListener("scroll", onScroll);
      attached = false;
      setMobileScrolled(false);
    };

    const onMql = () => {
      if (mql.matches) attach();
      else detach();
    };

    if (mql.matches) attach();
    mql.addEventListener("change", onMql);

    return () => {
      mql.removeEventListener("change", onMql);
      detach();
      cancelAnimationFrame(raf);
    };
  }, [isHomepage]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  // Close on outside tap — use pointerdown for reliable mobile behavior
  const justOpened = useRef(false);
  const toggleMenu = useCallback(() => {
    setOpen((prev) => {
      if (!prev) justOpened.current = true;
      return !prev;
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(() => { justOpened.current = false; });
    const handler = (e: PointerEvent) => {
      if (justOpened.current) return;
      const header = document.getElementById("site-header");
      if (header && !header.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", handler);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("pointerdown", handler);
    };
  }, [open]);

  // Header is permanently transparent with white text on all routes/breakpoints,
  // EXCEPT mobile homepage after 80px scroll → solid dark with blur.
  const transparent = !mobileScrolled;
  const headerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 50,
    background: mobileScrolled ? "rgba(23,48,59,0.92)" : "transparent",
    backdropFilter: mobileScrolled ? "blur(12px)" : "none",
    WebkitBackdropFilter: mobileScrolled ? "blur(12px)" : "none",
    borderBottom: mobileScrolled ? "1px solid rgba(217,225,229,0.15)" : "none",
    boxShadow: "none",
    paddingTop: "env(safe-area-inset-top, 0px)",
    transition: "background-color 220ms ease, backdrop-filter 220ms ease, border-color 220ms ease",
    willChange: "background-color",
  };

  const textShadow = "0 1px 4px rgba(0,0,0,0.4)";

  // Colors swap based on transparent vs scrolled-glass state.
  const navLinkColor = "var(--white)";
  const navLinkActiveColor = "var(--white)";
  const iconColor = "var(--white)";
  const ctaBorderColor = "var(--white)";
  const ctaTextColor = "var(--white)";
  const logoFilter = "brightness(0) invert(1)";
  const nameColor = "var(--white)";
  const dividerColor = "rgba(255,255,255,0.4)";

  return (
    <header id="site-header" style={{ ...headerStyle, textShadow }}>
      {/* ─── Desktop (lg+) ─── */}
      <div className="section-container hidden md:flex items-center transition-all duration-300" style={{ height: scrolled ? 62 : 70 }}>
        <Link to={lang === "en" ? "/en" : "/"} className="mr-10 flex shrink-0 items-center rounded-sm xl:mr-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" style={{ background: "transparent" }} aria-label={lang === "en" ? "Yanis Gauthier-Sigeris — RE/MAX broker — Home" : "Yanis Gauthier-Sigeris — courtier RE/MAX — Accueil"}>
          <img src={logoYgsHorizontal} alt="" aria-hidden="true" width={160} height={52} className="object-contain" style={{ height: scrolled ? 47 : 52, width: "auto", filter: logoFilter, transition: "height .2s ease, filter .3s ease" }} loading="eager" decoding="async" />
          <span aria-hidden="true" style={{ display: "inline-block", width: 1, height: 20, background: dividerColor, margin: "0 12px", transition: "background-color .3s ease" }} />
          <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span
              className="text-[15px] lg:text-[17px]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                color: nameColor,
                whiteSpace: "nowrap",
                letterSpacing: "0.005em",
                transition: "color 0.3s ease",
              }}
            >
              Yanis Gauthier-Sigeris
            </span>
            <span
              style={{
                fontFamily: "var(--sans)",
                fontSize: "10px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                fontWeight: 500,
                marginTop: 2,
              }}
            >
              {lang === "en" ? "Real estate broker" : "Courtier immobilier"}
            </span>
          </span>
          <span className="ml-3 inline-flex items-center"><RemaxPill size="lg" lang={lang as "fr" | "en"} /></span>
        </Link>
        <nav className="flex flex-1 items-center justify-center gap-0" role="navigation" aria-label={getA11yLabel("nav.main", lang)}>
          {nav.map((item) => (<DesktopNavItem key={item.label} item={item} pathname={location.pathname} transparent={true} />))}
        </nav>
        <div className="ml-4 shrink-0 xl:ml-6">
          <LanguageSwitch transparent={true} />
        </div>
        <div className="ml-4 shrink-0 xl:ml-5">
          <Link
            to={ctaHref}
            className="inline-flex items-center justify-center whitespace-nowrap"
            style={{
              height: 40,
              padding: "0 1.4rem",
              background: "transparent",
              color: ctaTextColor,
              fontSize: ".78rem",
              fontWeight: 600,
              letterSpacing: ".03em",
              borderRadius: 0,
              border: `1px solid ${ctaBorderColor}`,
              boxShadow: "none",
              transition: "all .2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = ctaBorderColor;
              e.currentTarget.style.color = transparent ? "var(--ink)" : "var(--white)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = ctaTextColor;
            }}
            aria-label={lang === "en" ? "Get a free home valuation" : "Obtenez une évaluation gratuite de votre propriété"}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* ─── Tablet (sm–lg) ─── */}
      <div className="section-container hidden sm:flex md:hidden items-center justify-between gap-6 transition-all duration-300" style={{ height: scrolled ? 62 : 70 }}>
        <Link to={lang === "en" ? "/en" : "/"} className="flex min-w-0 shrink items-center gap-3.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" style={{ background: "transparent" }} aria-label={lang === "en" ? "Yanis Gauthier-Sigeris — RE/MAX broker — Home" : "Yanis Gauthier-Sigeris — courtier RE/MAX — Accueil"}>
          <img src={logoYgsHorizontal} alt="" aria-hidden="true" width={160} height={52} className="min-w-0 object-contain" style={{ height: scrolled ? 48 : 52, width: "auto", filter: logoFilter, transition: "height .2s ease, filter .3s ease" }} loading="eager" decoding="async" />
        </Link>
        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden md:flex"><LanguageSwitch transparent={true} /></div>
          <Link
            to={ctaHref}
            className="hidden md:inline-flex items-center justify-center whitespace-nowrap transition-all duration-200"
            style={{ height: 38, padding: "0 1.1rem", background: "transparent", color: ctaTextColor, fontSize: ".78rem", fontWeight: 600, borderRadius: 0, border: `1.5px solid ${ctaBorderColor}`, transition: "all .2s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = ctaBorderColor; e.currentTarget.style.color = "var(--ink)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ctaTextColor; }}
            aria-label={lang === "en" ? "Get a free home valuation" : "Obtenez une évaluation gratuite"}
          >
            {ctaLabel}
          </Link>
          <button onClick={toggleMenu} className="flex items-center justify-center transition-colors" style={{ height: 42, width: 42, borderRadius: 3, border: `1px solid ${transparent ? "rgba(247,244,238,.3)" : "var(--border)"}`, color: iconColor }} aria-label={getA11yLabel(open ? "menu.close" : "menu.open", lang)} aria-expanded={open} aria-controls="mobile-navigation">
            {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* ─── Mobile (<640px) — logo left, hamburger right (transparent over hero, cream when scrolled) ─── */}
      <div className="flex items-center justify-between gap-2 px-4 sm:hidden transition-all duration-300" style={{ height: scrolled ? 50 : 56, background: "transparent" }}>
        <Link to={lang === "en" ? "/en" : "/"} className="flex min-w-0 items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" style={{ background: "transparent" }} onClick={closeMenu} aria-label={lang === "en" ? "Yanis Gauthier-Sigeris — RE/MAX broker — Home" : "Yanis Gauthier-Sigeris — courtier RE/MAX — Accueil"}>
          <img src={logoYgsHorizontal} alt="" aria-hidden="true" width={123} height={40} className="min-w-0 shrink-0 object-contain transition-all duration-300" style={{ height: scrolled ? 34 : 40, width: "auto", maxWidth: "min(40vw, 120px)", filter: logoFilter }} loading="eager" decoding="async" />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 500,
              color: nameColor,
              fontSize: "0.75rem",
              whiteSpace: "nowrap",
              letterSpacing: "0.005em",
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minWidth: 0,
            }}
          >
            Yanis Gauthier-Sigeris
          </span>
          
        </Link>
        <div className="flex shrink-0 items-center gap-1.5">
          <div className="hidden md:flex"><LanguageSwitch transparent={true} /></div>
          <button onClick={toggleMenu} className="flex items-center justify-center transition-colors" style={{ height: 44, width: 44, border: "none", background: "none", color: iconColor }} aria-label={getA11yLabel(open ? "menu.close" : "menu.open", lang)} aria-expanded={open} aria-controls="mobile-navigation">
            {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          <Link
            to={ctaHref}
            className="hidden md:inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all duration-200"
            style={{ height: 38, minWidth: 0, padding: "0 .9rem", background: "transparent", color: ctaTextColor, fontSize: ".75rem", fontWeight: 600, borderRadius: 0, border: `1.5px solid ${ctaBorderColor}`, transition: "all .2s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = ctaBorderColor; e.currentTarget.style.color = "var(--white)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ctaTextColor; }}
            aria-label={lang === "en" ? "Get a free home valuation" : "Obtenez une évaluation gratuite"}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* ─── Mobile / Tablet Menu Drawer (lazy-loaded with framer-motion) ─── */}
      {open && (
        <Suspense fallback={null}>
          <MobileNavDrawer
            open={open}
            nav={nav}
            pathname={location.pathname}
            ariaLabel={getA11yLabel("nav.main", lang)}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            closeMenu={closeMenu}
          />
        </Suspense>
      )}
    </header>
  );
};

export default SiteHeader;
