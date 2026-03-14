import { Link } from "react-router-dom";
import logoYgsWhite from "@/assets/logo-ygs-white.png";
import logoMartyWaite from "@/assets/logo-marty-waite.png";
import logoRemax from "@/assets/logo-remax.png";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Vendre", href: "/vendre-ma-maison-gatineau" },
  { label: "Acheter", href: "/acheter-a-gatineau" },
  { label: "Plex", href: "/investir-plex-gatineau" },
  { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
  { label: "Relocalisation", href: "/relocalisation-ottawa-gatineau" },
  { label: "Contact", href: "/contact-yanis" },
];

const sectorLinks = [
  { label: "Plateau / Aylmer", href: "/plateau-aylmer" },
  { label: "Hull", href: "/hull" },
  { label: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers" },
];

const conversionLinks = [
  { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
  { label: "Plan vendeur", href: "/plan-vendeur-gatineau" },
  { label: "Analyse plex", href: "/analyse-plex-gatineau" },
];

const SiteFooter = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="section-container pt-16 pb-8 sm:pt-[4.5rem] sm:pb-8">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div>
          <img
            src={logoYgsWhite}
            alt="YGS - Yanis Gauthier-Sigeris"
            className="h-auto"
            style={{ width: "clamp(165px, 30vw, 235px)" }}
          />
          <p className="mt-5 text-[0.875rem] font-medium opacity-60">Votre allié en immobilier à Gatineau</p>
          <p className="mt-3 text-[0.8125rem] leading-[1.6] opacity-45">
            Stratégie claire. Zéro pression.<br />Pas de mauvaises surprises.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <img src={logoMartyWaite} alt="Équipe Marty Waite" className="w-auto opacity-25" style={{ height: "clamp(44px, 6vw, 54px)" }} />
            <img src={logoRemax} alt="RE/MAX" className="w-auto opacity-30" style={{ height: "clamp(28px, 4vw, 34px)" }} />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-4 font-body text-[0.75rem] font-semibold uppercase tracking-[0.12em] opacity-35">Navigation</p>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-[0.875rem] opacity-55 transition-opacity hover:opacity-100">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sectors + Services */}
        <div>
          <p className="mb-4 font-body text-[0.75rem] font-semibold uppercase tracking-[0.12em] opacity-35">Secteurs</p>
          <ul className="space-y-2.5">
            {sectorLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-[0.875rem] opacity-55 transition-opacity hover:opacity-100">{l.label}</Link>
              </li>
            ))}
          </ul>
          <p className="mb-4 mt-8 font-body text-[0.75rem] font-semibold uppercase tracking-[0.12em] opacity-35">Services gratuits</p>
          <ul className="space-y-2.5">
            {conversionLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-[0.875rem] opacity-55 transition-opacity hover:opacity-100">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-4 font-body text-[0.75rem] font-semibold uppercase tracking-[0.12em] opacity-35">Contact</p>
          <ul className="space-y-2.5 text-[0.875rem] opacity-55">
            <li>[Téléphone]</li>
            <li>[Courriel]</li>
            <li>[Adresse / secteur desservi]</li>
          </ul>
          <div className="mt-5 flex gap-5">
            <a href="#" aria-label="Facebook" className="text-[0.875rem] opacity-35 transition-opacity hover:opacity-90">[Facebook]</a>
            <a href="#" aria-label="Instagram" className="text-[0.875rem] opacity-35 transition-opacity hover:opacity-90">[Instagram]</a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-primary-foreground/8 pt-6 text-center">
        <p className="text-[0.75rem] opacity-30">
          © {new Date().getFullYear()} Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau. Tous droits réservés.
        </p>
        <p className="mt-1.5 text-[0.75rem] opacity-20">
          [Mentions légales] · [Politique de confidentialité]
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
