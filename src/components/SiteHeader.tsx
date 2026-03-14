import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="section-container flex h-16 items-center justify-between sm:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-heading text-2xl text-primary">YGS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button asChild>
            <Link to="/evaluation-gratuite-gatineau">Obtenir ma valeur</Link>
          </Button>
        </div>

        {/* Mobile buttons */}
        <div className="flex items-center gap-3 lg:hidden">
          <Button size="sm" asChild>
            <Link to="/evaluation-gratuite-gatineau">Ma valeur</Link>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-3 text-base font-medium transition-colors ${
                location.pathname === link.href
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground hover:bg-secondary"
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
