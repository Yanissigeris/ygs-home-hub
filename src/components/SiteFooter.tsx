import { Link } from "react-router-dom";
import logoYgsWhite from "@/assets/logo-ygs-white.png";
import logoMartyWaite from "@/assets/logo-marty-waite.png";
import logoRemax from "@/assets/logo-remax.png";

const SiteFooter = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="section-container py-12 sm:py-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div>
          <img
            src={logoYgsWhite}
            alt="YGS - Yanis Gauthier-Sigeris"
            className="h-auto"
            style={{ width: "clamp(165px, 30vw, 235px)" }}
          />
          <p className="mt-[18px] text-[0.75rem] font-medium opacity-65">Votre allié en immobilier à Gatineau</p>
          <p className="mt-3 text-[0.75rem] leading-relaxed opacity-50">
            Stratégie claire. Zéro pression.<br />Pas de mauvaises surprises.
          </p>

          {/* Secondary logos: MW → RE/MAX, ordered by hierarchy */}
          <div className="mt-6 flex items-center gap-5">
            <img
              src={logoMartyWaite}
              alt="Équipe Marty Waite"
              className="w-auto opacity-30"
              style={{ height: "clamp(46px, 6vw, 58px)" }}
            />
            <img
              src={logoRemax}
              alt="RE/MAX"
              className="w-auto opacity-35"
              style={{ height: "clamp(30px, 4vw, 36px)" }}
            />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-3 font-body text-[0.625rem] font-semibold uppercase tracking-[0.16em] opacity-40">Navigation</p>
          <ul className="space-y-2">
            {[
              { label: "Accueil", href: "/" },
              { label: "Vendre", href: "/vendre-ma-maison-gatineau" },
              { label: "Acheter", href: "/acheter-a-gatineau" },
              { label: "Plex", href: "/investir-plex-gatineau" },
              { label: "Plateau / Aylmer", href: "/plateau-aylmer" },
              { label: "Contact", href: "/contact-yanis" },
              { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
            ].map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-[0.75rem] opacity-60 transition-opacity hover:opacity-100">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sectors */}
        <div>
          <p className="mb-3 font-body text-[0.625rem] font-semibold uppercase tracking-[0.16em] opacity-40">Secteurs desservis</p>
          <p className="text-[0.75rem] leading-relaxed opacity-60">
            Gatineau, Aylmer, Hull, Plateau, Buckingham, Masson-Angers et secteurs environnants
          </p>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-3 font-body text-[0.625rem] font-semibold uppercase tracking-[0.16em] opacity-40">Contact</p>
          <ul className="space-y-2 text-[0.75rem] opacity-60">
            <li>[Téléphone]</li>
            <li>[Courriel]</li>
            <li>[Adresse / secteur desservi]</li>
          </ul>
          <div className="mt-4 flex gap-4">
            <a href="#" aria-label="Facebook" className="text-[0.75rem] opacity-40 transition-opacity hover:opacity-90">[Facebook]</a>
            <a href="#" aria-label="Instagram" className="text-[0.75rem] opacity-40 transition-opacity hover:opacity-90">[Instagram]</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/8 pt-5 text-center">
        <p className="text-[0.625rem] opacity-35">
          © {new Date().getFullYear()} Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau. Tous droits réservés.
        </p>
        <p className="mt-1 text-[0.625rem] opacity-20">
          [Mentions légales] · [Politique de confidentialité]
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
