import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="section-container section-padding">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <span className="font-heading text-[1.75rem] font-bold">YGS</span>
          <p className="mt-1 text-[0.8125rem] font-medium opacity-70">Votre allié en immobilier à Gatineau</p>
          <p className="mt-4 text-[0.8125rem] leading-relaxed opacity-60">
            Stratégie claire. Zéro pression.<br />Pas de mauvaises surprises.
          </p>
          <p className="mt-4 text-[0.6875rem] opacity-30">
            Courtier affilié RE/MAX · Équipe Marty Waite
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-4 font-body text-[0.6875rem] font-semibold uppercase tracking-[0.15em] opacity-50">Navigation</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Accueil", href: "/" },
              { label: "Vendre", href: "/vendre-ma-maison-gatineau" },
              { label: "Acheter", href: "/acheter-a-gatineau" },
              { label: "Plex / Investissement", href: "/investir-plex-gatineau" },
              { label: "Plateau / Aylmer", href: "/plateau-aylmer" },
              { label: "Contact", href: "/contact-yanis" },
              { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
            ].map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-[0.8125rem] opacity-70 transition-opacity hover:opacity-100">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Secteurs */}
        <div>
          <h4 className="mb-4 font-body text-[0.6875rem] font-semibold uppercase tracking-[0.15em] opacity-50">Secteurs desservis</h4>
          <p className="text-[0.8125rem] leading-relaxed opacity-70">
            Gatineau, Aylmer, Hull, Plateau, Buckingham, Masson-Angers et secteurs environnants
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-body text-[0.6875rem] font-semibold uppercase tracking-[0.15em] opacity-50">Contact</h4>
          <ul className="space-y-2.5 text-[0.8125rem] opacity-70">
            <li>[Téléphone]</li>
            <li>[Courriel]</li>
            <li>[Adresse / secteur desservi]</li>
          </ul>
          <div className="mt-5 flex gap-5">
            <a href="#" aria-label="Facebook" className="text-[0.8125rem] opacity-50 transition-opacity hover:opacity-100">[Facebook]</a>
            <a href="#" aria-label="Instagram" className="text-[0.8125rem] opacity-50 transition-opacity hover:opacity-100">[Instagram]</a>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-[0.6875rem] opacity-40">
          © {new Date().getFullYear()} Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau. Tous droits réservés.
        </p>
        <p className="mt-1 text-[0.6875rem] opacity-25">
          [Mentions légales] · [Politique de confidentialité]
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
