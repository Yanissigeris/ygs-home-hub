import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

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
import ygsLogo from "@/assets/ygs-logo.webp";
const logoYgsHorizontal = ygsLogo;
const logoYgsSymbolBlue = ygsLogo;
import { mainNav, type NavItem } from "@/data/navigation";
import { mainNavEn } from "@/data/navigation-en";

/* ── Desktop dropdown item ── */
const DesktopNavItem = ({ item, pathname, transparent }: { item: NavItem; pathname: string; transparent?: boolean }) => {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 140); };

  const defaultColor = transparent ? "#F7F4EE" : "#4A5568";
  const activeColor = transparent ? "#FFFFFF" : "#17303B";
  const hoverColor = transparent ? "#FFFFFF" : "#17303B";
  const underlineColor = transparent ? "#F7F4EE" : "#17303B";

  if (!item.children) {
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
        <span className="absolute bottom-0 left-[.7rem] right-[.7rem] h-[1.5px] rounded-full transition-transform duration-[250ms] ease-out origin-left group-hover:scale-x-100" style={{ background: underlineColor, transform: active ? "scaleX(1)" : "scaleX(0)" }} />
      </Link>
    );
  }

  const isChildActive = item.children.some((c) => pathname === c.href);

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
        <span className="absolute bottom-0 left-[.7rem] right-[.7rem] h-[1.5px] rounded-full transition-transform duration-[250ms] ease-out origin-left group-hover:scale-x-100" style={{ background: underlineColor, transform: isChildActive ? "scaleX(1)" : "scaleX(0)" }} />
      </button>
      <div className={`absolute left-1/2 top-full z-50 pt-2.5 -translate-x-1/2 transition-all duration-200 ${open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1.5 opacity-0"}`}>
        <div className="min-w-[13.5rem] overflow-hidden p-1.5" style={{ borderRadius: 3, border: "1px solid var(--border)", background: "rgba(247,244,238,.98)", boxShadow: "0 12px 40px -12px rgba(23,48,59,.12)" }}>
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              onClick={() => setOpen(false)}
              className="block px-3.5 py-2.5 transition-colors"
              style={{
                fontSize: "13px",
                letterSpacing: "0.04em",
                fontWeight: pathname === child.href ? 600 : 500,
                color: pathname === child.href ? "#17303B" : "#4A5568",
                borderRadius: 3,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold3)"; e.currentTarget.style.color = "#17303B"; }}
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
const MobileNavGroup = ({ item, pathname, onNavigate }: { item: NavItem; pathname: string; onNavigate: () => void }) => {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link to={item.href!} onClick={onNavigate} className="block px-6 py-3.5 text-[.9rem] font-medium transition-colors" style={{ color: pathname === item.href ? "var(--ink)" : "var(--muted)", borderBottom: "1px solid var(--border)", minHeight: 44 }}>
        {item.label}
      </Link>
    );
  }

  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button onClick={() => setExpanded((p) => !p)} className="flex w-full items-center justify-between px-6 py-3.5 text-[.9rem] font-medium transition-colors" style={{ color: "var(--muted)", minHeight: 44 }} aria-expanded={expanded}>
        {item.label}
        <ChevronDownIcon size={14} className={`opacity-35 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-250 ease-out ${expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="pb-1 pl-3">
          {item.children.map((child) => (
            <Link key={child.href} to={child.href} onClick={onNavigate} className="block px-6 py-2.5 text-[.86rem] transition-colors" style={{ color: pathname === child.href ? "var(--ink)" : "var(--muted)", fontWeight: pathname === child.href ? 600 : 400, minHeight: 44 }}>
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Header ── */
const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onDarkHero, setOnDarkHero] = useState(false);
  const location = useLocation();
  const lang = useLanguage();
  const nav = lang === "en" ? mainNavEn : mainNav;
  const ctaHref = lang === "en" ? "/en/home-valuation" : "/evaluation-gratuite-gatineau";
  const ctaLabel = lang === "en" ? "Free Valuation" : "Évaluation gratuite";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect dark hero section presence & overlap with header
  useEffect(() => {
    let io: IntersectionObserver | null = null;
    const setup = () => {
      const hero = document.querySelector("[data-hero-dark]");
      if (!hero) { setOnDarkHero(false); return; }
      io = new IntersectionObserver(
        ([entry]) => setOnDarkHero(entry.isIntersecting && window.scrollY < 80),
        { rootMargin: "0px 0px -90% 0px", threshold: 0 }
      );
      io.observe(hero);
    };
    // Delay slightly so DOM is ready after page transition
    const t = setTimeout(setup, 60);
    return () => { clearTimeout(t); io?.disconnect(); };
  }, [location.pathname]);

  // Also update onDarkHero on scroll (intersection alone isn't enough for threshold)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 80) setOnDarkHero(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);
  const closeMenu = useCallback(() => setOpen(false), []);

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

  // Transparent on dark hero, white-blur when scrolled, cream default
  const transparent = onDarkHero && !scrolled && !open;
  const headerStyle: React.CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 200,
    background: transparent
      ? "transparent"
      : scrolled
        ? "rgba(255,255,255,.85)"
        : "rgba(247,244,238,.96)",
    backdropFilter: transparent ? "none" : "blur(12px)",
    WebkitBackdropFilter: transparent ? "none" : "blur(12px)",
    borderBottom: transparent
      ? "1px solid transparent"
      : scrolled
        ? "1px solid rgba(23,48,59,.08)"
        : "1px solid var(--border)",
    transition: "all .3s ease",
    boxShadow: scrolled ? "0 4px 40px rgba(23,48,59,.1)" : "none",
    paddingTop: "env(safe-area-inset-top, 0px)",
  };

  // Colors for nav links & icons
  const navLinkColor = transparent ? "#F7F4EE" : "#4A5568";
  const navLinkActiveColor = transparent ? "#FFFFFF" : "#17303B";
  const iconColor = transparent ? "#F7F4EE" : "var(--ink)";
  const ctaBorderColor = transparent ? "#F7F4EE" : "#A88A5A";
  const ctaTextColor = transparent ? "#F7F4EE" : "#A88A5A";
  const logoFilter = transparent ? "brightness(0) invert(1)" : "none";

  return (
    <header id="site-header" style={headerStyle}>
      {/* ─── Desktop (lg+) ─── */}
      <div className="section-container hidden lg:flex items-center transition-all duration-300" style={{ height: scrolled ? 62 : 70 }}>
        <Link to={lang === "en" ? "/en" : "/"} className="mr-10 flex shrink-0 items-center gap-3.5 xl:mr-12">
          <img src={logoYgsHorizontal} alt="YGS — Yanis Gauthier-Sigeris, courtier immobilier Gatineau" className="object-contain transition-all duration-300" style={{ height: scrolled ? 44 : 52, width: "auto", filter: logoFilter }} />
        </Link>
        <nav className="flex flex-1 items-center justify-center gap-0" role="navigation" aria-label="Navigation principale">
          {nav.map((item) => (<DesktopNavItem key={item.label} item={item} pathname={location.pathname} transparent={transparent} />))}
        </nav>
        <div className="ml-4 shrink-0 xl:ml-6">
          <LanguageSwitch transparent={transparent} />
        </div>
        <div className="ml-4 shrink-0 xl:ml-5">
          <Link
            to={ctaHref}
            className="inline-flex items-center justify-center whitespace-nowrap transition-all duration-200"
            style={{
              height: 40,
              padding: "0 1.4rem",
              background: "transparent",
              color: ctaTextColor,
              fontSize: ".78rem",
              fontWeight: 600,
              letterSpacing: ".03em",
              borderRadius: 999,
              border: `1.5px solid ${ctaBorderColor}`,
              transition: "all .2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = ctaBorderColor; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ctaTextColor; }}
            aria-label={lang === "en" ? "Get a free home valuation" : "Obtenez une évaluation gratuite de votre propriété"}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* ─── Tablet (sm–lg) ─── */}
      <div className="section-container hidden sm:flex lg:hidden items-center justify-between gap-6 transition-all duration-300" style={{ height: scrolled ? 62 : 70 }}>
        <Link to={lang === "en" ? "/en" : "/"} className="flex min-w-0 shrink items-center gap-3.5">
          <img src={logoYgsHorizontal} alt="YGS — Yanis Gauthier-Sigeris, courtier immobilier Gatineau" className="min-w-0 object-contain transition-all duration-300" style={{ height: scrolled ? 40 : 48, width: "auto", filter: logoFilter }} />
        </Link>
        <div className="flex shrink-0 items-center gap-3">
          <LanguageSwitch transparent={transparent} />
          <Link
            to={ctaHref}
            className="inline-flex items-center justify-center whitespace-nowrap transition-all duration-200"
            style={{ height: 38, padding: "0 1.1rem", background: "transparent", color: ctaTextColor, fontSize: ".78rem", fontWeight: 600, borderRadius: 999, border: `1.5px solid ${ctaBorderColor}`, transition: "all .2s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = ctaBorderColor; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ctaTextColor; }}
            aria-label={lang === "en" ? "Get a free home valuation" : "Obtenez une évaluation gratuite"}
          >
            {ctaLabel}
          </Link>
          <button onClick={toggleMenu} className="flex items-center justify-center transition-colors" style={{ height: 42, width: 42, borderRadius: 3, border: `1px solid ${transparent ? "rgba(247,244,238,.3)" : "var(--border)"}`, color: iconColor }} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">
            {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* ─── Mobile (<640px) — logo left, hamburger center-right, CTA right ─── */}
      <div className="flex items-center justify-between gap-2 px-4 sm:hidden transition-all duration-300" style={{ height: scrolled ? 50 : 56 }}>
        <Link to={lang === "en" ? "/en" : "/"} className="flex min-w-0 items-center gap-2" onClick={closeMenu}>
          <img src={logoYgsSymbolBlue} alt="YGS — Yanis Gauthier-Sigeris" width={36} height={36} className="h-9 w-9 shrink-0 transition-all duration-300" style={{ filter: logoFilter }} />
        </Link>
        <div className="flex shrink-0 items-center gap-1.5">
          <LanguageSwitch transparent={transparent} />
          <button onClick={toggleMenu} className="flex items-center justify-center transition-colors" style={{ height: 44, width: 44, border: "none", background: "none", color: iconColor }} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">
            {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          <Link
            to={ctaHref}
            className="inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all duration-200"
            style={{ height: 38, minWidth: 0, padding: "0 .9rem", background: "transparent", color: ctaTextColor, fontSize: ".75rem", fontWeight: 600, borderRadius: 999, border: `1.5px solid ${ctaBorderColor}`, transition: "all .2s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = ctaBorderColor; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ctaTextColor; }}
            aria-label={lang === "en" ? "Get a free home valuation" : "Obtenez une évaluation gratuite"}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* ─── Mobile / Tablet Menu Drawer ─── */}
      <div
        id="mobile-navigation"
        role="navigation"
        aria-label="Navigation principale"
        className="lg:hidden overflow-hidden"
        style={{
          maxHeight: open ? "calc(100dvh - 80px)" : 0,
          opacity: open ? 1 : 0,
          transition: "max-height .3s ease, opacity .25s ease",
          borderTop: open ? "1px solid var(--border)" : "none",
          background: "var(--cream)",
          overflowY: open ? "auto" : "hidden",
          borderBottom: open ? "1px solid var(--border)" : "none",
        }}
      >
        <div>
          {nav.map((item) => (<MobileNavGroup key={item.label} item={item} pathname={location.pathname} onNavigate={closeMenu} />))}
          <div className="px-6 py-4" style={{ borderTop: "1px solid var(--border)" }}>
            <Link
              to={ctaHref}
              onClick={closeMenu}
              className="flex w-full items-center justify-center transition-all duration-200"
              style={{ height: 48, background: "transparent", color: "#A88A5A", fontSize: ".94rem", fontWeight: 600, borderRadius: 999, border: "1.5px solid #A88A5A", transition: "all .2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#A88A5A"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#A88A5A"; }}
            >
              {ctaLabel}
            </Link>
          </div>
          {/* FR|EN toggle at bottom of dropdown */}
          <div className="flex justify-center pb-4">
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
