import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoYgsHorizontal from "@/assets/logo-ygs-horizontal.png";
import logoYgsSymbolBlue from "@/assets/logo-ygs-symbol-blue.png";
import logoYgsVertical from "@/assets/logo-ygs-vertical-blue.png";

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
      className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 transition-all duration-300"
      style={{ height: scrolled ? 78 : 92 }}
    >
      {/* Desktop + Tablet (sm+) */}
      <div
        className="section-container hidden sm:flex items-center justify-between h-full"
        style={{ paddingLeft: 32, paddingRight: 32 }}
      >
        <Link to="/" className="flex items-center shrink-0 mr-10">
          {/* Desktop logo — lg+ */}
          <img
            src={logoYgsHorizontal}
            alt="YGS - Yanis Gauthier-Sigeris"
            className="hidden lg:block transition-all duration-300 object-contain"
            style={{
              width: 290,
              height: "auto",
              maxHeight: 56,
            }}
          />
          {/* Tablet logo — sm to lg */}
          <img
            src={logoYgsHorizontal}
            alt="YGS — Yanis Gauthier-Sigeris"
            className="block lg:hidden transition-all duration-300 object-contain"
            style={{
              width: 235,
              height: "auto",
              maxHeight: 46,
            }}
          />
        </Link>

        <nav className="hidden items-center gap-0 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative rounded-md px-2.5 py-2 text-[0.8125rem] font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <span className="absolute bottom-0.5 left-2.5 right-2.5 h-px bg-accent/60" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0">
          <Button size="sm" variant="outline" className="text-xs font-medium tracking-wide uppercase border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors px-3.5" asChild>
            <Link to="/evaluation-gratuite-gatineau">Évaluation</Link>
          </Button>
        </div>

        {/* Tablet: hamburger visible at sm but not lg */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <Button size="sm" variant="outline" className="text-xs font-medium tracking-wide border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-3" asChild>
            <Link to="/evaluation-gratuite-gatineau">Évaluation</Link>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:bg-secondary"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="flex sm:hidden items-center justify-between h-full"
        style={{ paddingLeft: 16, paddingRight: 16, height: 70 }}
      >
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logoYgsSymbolBlue}
            alt="YGS"
            style={{ width: 38, height: 38 }}
          />
        </Link>
        <div className="flex items-center gap-2.5">
          <Button size="sm" variant="outline" className="text-xs font-medium tracking-wide border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <Link to="/evaluation-gratuite-gatineau">Évaluation</Link>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:bg-secondary"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <nav className="animate-fade-in border-t border-border/50 bg-background px-5 pb-5 pt-3 lg:hidden">
          <div className="mb-3 flex items-center gap-2 sm:hidden">
            <img src={logoYgsSymbolBlue} alt="YGS" style={{ width: 36, height: 36 }} />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-4 py-2.5 text-[0.9375rem] font-medium transition-colors ${
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
