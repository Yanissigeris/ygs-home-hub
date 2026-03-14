import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoYgsHorizontal from "@/assets/logo-ygs-horizontal.png";
import logoYgsSymbolBlue from "@/assets/logo-ygs-symbol-blue.png";
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
  const ref = useRef<HTMLDivElement>(null);

  const enter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 120);
  };

  // Direct link (no children)
  if (!item.children) {
    const active = pathname === item.href;
    return (
      <Link
        to={item.href!}
        className={`relative whitespace-nowrap rounded-lg px-3 py-2 text-[0.875rem] font-medium transition-colors ${
          active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {item.label}
        {active && <span className="absolute bottom-0.5 left-3 right-3 h-px bg-accent/60" />}
      </Link>
    );
  }

  const isChildActive = item.children.some((c) => pathname === c.href);

  return (
    <div ref={ref} className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-[0.875rem] font-medium transition-colors ${
          isChildActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          size={13}
          className={`mt-px opacity-40 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute left-1/2 top-full z-50 pt-2 -translate-x-1/2 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="min-w-[13rem] rounded-xl border border-border/50 bg-popover p-1.5 shadow-[0_8px_30px_-8px_hsl(200_30%_14%/0.1)]">
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-medium transition-colors ${
                pathname === child.href
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
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

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/98 backdrop-blur-xl supports-[backdrop-filter]:bg-background/90 transition-all duration-300 ${
        scrolled
          ? "shadow-[0_1px_8px_-3px_hsl(200_30%_14%/0.06)] border-b border-border/30"
          : "border-b border-border/20"
      }`}
    >
      {/* ─── Desktop (lg+) ─── */}
      <div
        className="section-container hidden lg:flex items-center justify-between transition-all duration-300"
        style={{ height: scrolled ? 78 : 92 }}
      >
        <Link to="/" className="flex items-center shrink-0 mr-6">
          <img
            src={logoYgsHorizontal}
            alt="YGS — Yanis Gauthier-Sigeris"
            className="transition-all duration-300 object-contain"
            style={{ width: scrolled ? 250 : 280, height: "auto", maxHeight: scrolled ? 48 : 54 }}
          />
        </Link>

        <nav className="flex items-center gap-0.5">
          {mainNav.map((item) => (
            <DesktopNavItem key={item.label} item={item} pathname={location.pathname} />
          ))}
        </nav>

        <div className="shrink-0 ml-5">
          <Button size="sm" className="h-11 px-6 text-[0.8125rem] font-semibold tracking-wide" asChild>
            <Link to="/evaluation-gratuite-gatineau">Évaluation gratuite</Link>
          </Button>
        </div>
      </div>

      {/* ─── Tablet (sm–lg) ─── */}
      <div
        className="section-container hidden sm:flex lg:hidden items-center justify-between transition-all duration-300"
        style={{ height: scrolled ? 74 : 84 }}
      >
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logoYgsHorizontal}
            alt="YGS — Yanis Gauthier-Sigeris"
            className="transition-all duration-300 object-contain"
            style={{ width: scrolled ? 210 : 235, height: "auto", maxHeight: scrolled ? 40 : 46 }}
          />
        </Link>
        <div className="flex items-center gap-3">
          <Button size="sm" className="h-[2.625rem] px-5 text-[0.8125rem] font-semibold tracking-wide" asChild>
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
      <div className="flex sm:hidden items-center justify-between px-5" style={{ height: 72 }}>
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src={logoYgsSymbolBlue} alt="YGS" style={{ width: 38, height: 38 }} />
        </Link>
        <div className="flex items-center gap-2.5">
          <Button size="sm" className="h-10 px-5 text-[0.8125rem] font-semibold tracking-wide" asChild>
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

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-border/30">
              <Button className="w-full h-12 text-[0.9375rem] font-semibold" asChild>
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
