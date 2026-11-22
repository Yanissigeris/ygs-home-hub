import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { canonicalPath } from "@/lib/url-utils";

export interface LinkColumn {
  /** Rendu en h2 : garde les mêmes titres de section que les anciens blocs de cartes */
  title: string;
  links: { label: string; href: string }[];
  /** Liens courts (noms de secteurs) : deux colonnes au lieu d'une liste */
  twoUp?: boolean;
}

/**
 * Fin de page compacte : plusieurs listes de liens côte à côte au lieu de grilles de cartes.
 * Mêmes liens, mêmes titres, beaucoup moins de hauteur (surtout au téléphone).
 */
const LinkColumns = ({ columns, background = "white" }: { columns: LinkColumn[]; background?: "white" | "alt" }) => (
  <section className={`section-padding ${background === "alt" ? "bg-[var(--cream)]" : "bg-white"}`}>
    <div className="section-container grid gap-12 lg:grid-cols-3 lg:gap-14">
      {columns.map((col) => (
        <div key={col.title} className="min-w-0">
          <h2 className="!text-[1.375rem] sm:!text-[1.5rem] !leading-[1.2]">{col.title}</h2>
          <ul className={`mt-5 ${col.twoUp ? "grid grid-cols-2 gap-x-6" : ""}`} style={{ borderTop: col.twoUp ? undefined : "1px solid rgba(0,14,53,.1)" }}>
            {col.links.map((l) => (
              <li key={l.href} style={{ borderBottom: col.twoUp ? undefined : "1px solid rgba(0,14,53,.1)" }}>
                <Link
                  to={canonicalPath(l.href)}
                  className={`group flex items-center gap-3 text-[0.9375rem] font-medium text-[var(--gold-text)] ${col.twoUp ? "py-2" : "py-3.5"}`}
                >
                  <span className="min-w-0 underline-offset-4 group-hover:underline">{l.label}</span>
                  {!col.twoUp && (
                    <ArrowRight size={15} aria-hidden="true" className="ml-auto shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default LinkColumns;
