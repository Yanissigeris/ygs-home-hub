import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoYgsHorizontal from "@/assets/logo-ygs-horizontal.png";
import logoYgsSymbolBlue from "@/assets/logo-ygs-symbol-blue.png";
import logoRemax from "@/assets/logo-remax.png";
import { mainNav, type NavItem } from "@/data/navigation";

/* ── Desktop dropdown item ── */
const DesktopNavItem = ({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) => {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const enter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 140);
  };

  if (!item.children) {
    const active = pathname === item.href;
    return (
      <Link
        to={item.href!}
        className={`relative whitespace-nowrap px-3 py-2 text-[0.8125rem] font-medium tracking-[0.01em] transition-colors ${
          active ? "text-foreground" : "text-muted-foreground/70 hover:text-foreground"
        }`}
      >
        {item.label}
        {active && <span className="absolute bottom-0 left-3 right-3 h-[1.5px] rounded-full bg-accent/50" />}
      </Link>
    );
  }

  const isChildActive = item.children.some((c) => pathname === c.href);

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className={`flex items-center gap-1 whitespace-nowrap px-3 py-2 text-[0.8125rem] font-medium tracking-[0.01em] transition-colors ${
          isChildActive ? "text-foreground" : "text-muted-foreground/70 hover:text-foreground"
        }`}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          size={11}
          className={`mt-px opacity-30 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 pt-2.5 -translate-x-1/2 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1.5 opacity-0"
        }`}
      >
        <div className="min-w-[13.5rem] rounded-xl border border-border/40 bg-popover p-1.5 shadow-[0_12px_40px_-12px_hsl(200_30%_14%/0.12)]">
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-medium transition-colors ${
                pathname === child.href
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
              }`}
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
const MobileNavGroup = ({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link
        to={item.href!}
        onClick={onNavigate}
        className={`block rounded-xl px-4 py-3.5 text-[1rem] font-medium transition-colors ${
          pathname === item.href
            ? "bg-secondary text-foreground"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded((p) => !p)}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[1rem] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        aria-expanded={expanded}
      >
        {item.label}
        <ChevronDown
          size={16}
          className={`opacity-35 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-250 ease-out ${
          expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-1 pl-3">
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              onClick={onNavigate}
              className={`block rounded-lg px-4 py-2.5 text-[0.9375rem] transition-colors ${
                pathname === child.href
                  ? "font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
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
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "bg-background/98 supports-[backdrop-filter]:bg-background/90 shadow-[0_1px_8px_-3px_hsl(200_30%_14%/0.06)] border-b border-border/30"
          : "bg-[hsl(40_15%_98%)] border-b border-border/[0.06]"
      }`}
    >
      {/* ─── Desktop (lg+) ─── */}
      <div
        className="section-container hidden lg:flex items-center transition-all duration-300"
        style={{ height: scrolled ? 82 : 96 }}
      >
        {/* Logo group */}
        <Link to="/" className="flex items-center shrink-0 mr-10 gap-5">
          <img
            src={logoYgsHorizontal}
            alt="YGS — Yanis Gauthier-Sigeris"
            className="transition-all duration-300 object-contain"
            style={{ height: scrolled ? 64 : 78, width: "auto" }}
          />
          <span className="h-8 w-px bg-border/25 shrink-0" />
          <img
            src={logoRemax}
            alt="RE/MAX"
            className="transition-all duration-300 object-contain"
            style={{ height: scrolled ? 24 : 28, width: "auto" }}
          />
        </Link>

        {/* Nav — fills the center */}
        <nav className="flex-1 flex items-center justify-center gap-0.5">
          {mainNav.map((item) => (
            <DesktopNavItem key={item.label} item={item} pathname={location.pathname} />
          ))}
        </nav>

        {/* CTA */}
        <div className="shrink-0 ml-8">
          <Button size="default" variant="accent" className="font-semibold tracking-wide whitespace-nowrap shadow-sm" asChild>
            <Link to="/evaluation-gratuite-gatineau">Évaluation gratuite</Link>
          </Button>
        </div>
      </div>

      {/* ─── Tablet (sm–lg) ─── */}
      <div
        className="section-container hidden sm:flex lg:hidden items-center justify-between transition-all duration-300"
        style={{ height: scrolled ? 74 : 84 }}
      >
        <Link to="/" className="flex items-center shrink-0 gap-4">
          <img
            src={logoYgsHorizontal}
            alt="YGS — Yanis Gauthier-Sigeris"
            className="transition-all duration-300 object-contain"
            style={{ height: scrolled ? 56 : 64, width: "auto" }}
          />
          <span className="h-6 w-px bg-border/25 shrink-0" />
          <img
            src={logoRemax}
            alt="RE/MAX"
            className="transition-all duration-300 object-contain"
            style={{ height: scrolled ? 20 : 24, width: "auto" }}
          />
        </Link>
        <div className="flex items-center gap-3">
          <Button size="sm" variant="accent" className="font-semibold tracking-wide" asChild>
            <Link to="/evaluation-gratuite-gatineau">Évaluation</Link>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground hover:bg-secondary transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ─── Mobile ─── */}
      <div className="flex sm:hidden items-center justify-between px-5" style={{ height: 70 }}>
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img src={logoYgsSymbolBlue} alt="YGS" style={{ width: 44, height: 44 }} />
          <span className="h-5 w-px bg-border/25 shrink-0" />
          <img src={logoRemax} alt="RE/MAX" className="opacity-25" style={{ height: 18, width: "auto" }} />
        </Link>
        <div className="flex items-center gap-2.5">
          <Button size="sm" variant="accent" className="h-10 px-5 text-[0.8125rem] font-semibold tracking-wide" asChild>
            <Link to="/evaluation-gratuite-gatineau">Évaluation</Link>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground hover:bg-secondary transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ─── Mobile / Tablet Menu Drawer ─── */}
      {open && (
        <nav className="animate-fade-in border-t border-border/40 bg-background lg:hidden max-h-[calc(100dvh-80px)] overflow-y-auto">
          <div className="px-5 pb-6 pt-3">
            {mainNav.map((item) => (
              <MobileNavGroup
                key={item.label}
                item={item}
                pathname={location.pathname}
                onNavigate={closeMenu}
              />
            ))}
            <div className="mt-4 pt-4 border-t border-border/30">
              <Button className="w-full h-12 text-[0.9375rem] font-semibold" variant="accent" asChild>
                <Link to="/evaluation-gratuite-gatineau" onClick={closeMenu}>
                  Évaluation gratuite
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
