import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="section-container section-padding">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <span className="font-heading text-2xl">YGS</span>
          <p className="mt-3 text-sm opacity-80">
            Votre allié en immobilier à Gatineau. Stratégie claire, zéro pression, pas de mauvaises surprises.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-3 font-body text-sm font-semibold uppercase tracking-wider opacity-60">Navigation</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:opacity-100">Accueil</Link></li>
            <li><Link to="/vendre-ma-maison-gatineau" className="hover:opacity-100">Vendre</Link></li>
            <li><Link to="/acheter-a-gatineau" className="hover:opacity-100">Acheter</Link></li>
            <li><Link to="/investir-plex-gatineau" className="hover:opacity-100">Plex</Link></li>
            <li><Link to="/plateau-aylmer" className="hover:opacity-100">Plateau / Aylmer</Link></li>
            <li><Link to="/contact-yanis" className="hover:opacity-100">Contact</Link></li>
          </ul>
        </div>

        {/* Secteurs */}
        <div>
          <h4 className="mb-3 font-body text-sm font-semibold uppercase tracking-wider opacity-60">Secteurs desservis</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Gatineau</li>
            <li>Aylmer</li>
            <li>Hull</li>
            <li>Plateau</li>
            <li>Buckingham / Masson-Angers</li>
            <li>Outaouais</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 font-body text-sm font-semibold uppercase tracking-wider opacity-60">Contact</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>[Téléphone — à ajouter]</li>
            <li>[Courriel — à ajouter]</li>
          </ul>
          <div className="mt-4 flex gap-4">
            <a href="#" aria-label="Facebook" className="opacity-60 hover:opacity-100">FB</a>
            <a href="#" aria-label="Instagram" className="opacity-60 hover:opacity-100">IG</a>
            <a href="#" aria-label="LinkedIn" className="opacity-60 hover:opacity-100">LI</a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs opacity-50">
        <p>© {new Date().getFullYear()} Yanis Gauthier-Sigeris. Tous droits réservés.</p>
        <p className="mt-1">[Mentions légales] · [Politique de confidentialité]</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
