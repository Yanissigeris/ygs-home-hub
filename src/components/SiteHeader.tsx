import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoYgsHorizontal from "@/assets/logo-ygs-horizontal.png";
import logoYgsSymbolBlue from "@/assets/logo-ygs-symbol-blue.png";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Vendre", href: "/vendre-ma-maison-gatineau" },
  { label: "Acheter", href: "/acheter-a-gatineau" },
  { label: "Plex", href: "/investir-plex-gatineau" },
  { label: "Plateau / Aylmer", href: "/plateau-aylmer" },
  { label: "Contact", href: "/contact-yanis" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/98 backdrop-blur-xl supports-[backdrop-filter]:bg-background/90 transition-all duration-300 ${
        scrolled ? "shadow-[0_1px_8px_-3px_hsl(200_30%_14%/0.06)] border-b border-border/30" : "border-b border-border/20"
      }`}
    >
      {/* Desktop + Tablet (sm+) */}
      <div
        className="section-container hidden sm:flex items-center justify-between transition-all duration-300"
        style={{ height: scrolled ? 78 : 92 }}
      >
        <Link to="/" className="flex items-center shrink-0 mr-12">
          {/* Desktop logo — lg+ */}
          <img
            src={logoYgsHorizontal}
            alt="YGS — Yanis Gauthier-Sigeris"
            className="hidden lg:block transition-all duration-300 object-contain"
            style={{
              width: scrolled ? 270 : 300,
              height: "auto",
              maxHeight: scrolled ? 50 : 58,
            }}
          />
          {/* Tablet logo — sm to lg */}
          <img
            src={logoYgsHorizontal}
            alt="YGS — Yanis Gauthier-Sigeris"
            className="block lg:hidden transition-all duration-300 object-contain"
            style={{
              width: scrolled ? 220 : 245,
              height: "auto",
              maxHeight: scrolled ? 40 : 48,
            }}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative rounded-lg px-3 py-2 text-[0.9375rem] font-medium transition-colors whitespace-nowrap ${
                location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <span className="absolute bottom-0.5 left-3 right-3 h-px bg-accent/60" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0 ml-6">
          <Button size="sm" className="h-11 px-6 text-[0.875rem] font-semibold tracking-wide" asChild>
            <Link to="/evaluation-gratuite-gatineau">Évaluation gratuite</Link>
          </Button>
        </div>

        {/* Tablet: hamburger visible at sm but not lg */}
        <div className="flex items-center gap-3 lg:hidden">
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

      {/* Mobile */}
      <div
        className="flex sm:hidden items-center justify-between px-5"
        style={{ height: 72 }}
      >
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logoYgsSymbolBlue}
            alt="YGS"
            style={{ width: 38, height: 38 }}
          />
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

      {/* Mobile menu drawer */}
      {open && (
        <nav className="animate-fade-in border-t border-border/40 bg-background px-5 pb-6 pt-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-4 py-3 text-[1rem] font-medium transition-colors ${
                location.pathname === link.href
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
