import { Link } from "react-router-dom";
import logoYgsWhite from "@/assets/logo-ygs-white.png";
import logoMartyWaite from "@/assets/logo-marty-waite.png";
import logoRemax from "@/assets/logo-remax.png";
import { footerColumns } from "@/data/navigation";

const SiteFooter = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="section-container pt-16 pb-8 sm:pt-[4.5rem] sm:pb-8">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <img
            src={logoYgsWhite}
            alt="YGS - Yanis Gauthier-Sigeris"
            className="h-auto"
            style={{ width: "clamp(155px, 28vw, 210px)" }}
          />
          <p className="mt-5 text-[0.875rem] font-medium opacity-60">
            Votre allié en immobilier en Outaouais
          </p>
          <p className="mt-3 text-[0.8125rem] leading-[1.6] opacity-45">
            Stratégie claire. Zéro pression.
            <br />
            Pas de mauvaises surprises.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <img
              src={logoMartyWaite}
              alt="Équipe Marty Waite"
              className="w-auto"
              style={{ height: "clamp(40px, 5.5vw, 50px)" }}
            />
            <img
              src={logoRemax}
              alt="RE/MAX"
              className="w-auto"
              style={{ height: "clamp(26px, 3.5vw, 32px)" }}
            />
          </div>
        </div>

        {/* Dynamic link columns */}
        {footerColumns.map((col) => (
          <div key={col.title}>
            <p className="mb-4 font-body text-[0.75rem] font-semibold uppercase tracking-[0.12em] opacity-35">
              {col.title}
            </p>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    to={l.href}
                    className="text-[0.875rem] opacity-55 transition-opacity hover:opacity-100"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-primary-foreground/8 pt-6 text-center">
        <p className="text-[0.75rem] opacity-30">
          © {new Date().getFullYear()} Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau.
          Tous droits réservés.
        </p>
        <p className="mt-1.5 text-[0.75rem] opacity-20">
          [Politique de confidentialité] · [Conditions d'utilisation]
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
