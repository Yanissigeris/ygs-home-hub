import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

interface Sector {
  name: string;
  href: string;
  detail?: string;
}

export interface SectorLinksProps {
  id?: string;
  overline?: string;
  title?: string;
  sectors: Sector[];
  background?: "default" | "alt" | "white";
  /** Show only first N sectors + "see all" link */
  teaserCount?: number;
  /** Label for "see all" link */
  seeAllLabel?: string;
  /** Href for "see all" link */
  seeAllHref?: string;
}

const SectorLinks = ({
  id,
  overline = "Quartiers",
  title = "Secteurs à comparer",
  sectors,
  background = "default",
  teaserCount,
  seeAllLabel,
  seeAllHref,
}: SectorLinksProps) => {
  const visible = teaserCount ? sectors.slice(0, teaserCount) : sectors;
  return (
    <section id={id} className={`section-padding ${background === "alt" ? "bg-[var(--cream)]" : background === "white" ? "bg-white" : "bg-background"}`}>
      <div className="section-container max-w-[52rem]">
        <div
          className="text-center mb-6 sm:mb-10 max-w-[40rem] mx-auto"
        >
          <SectionHeading overline={overline} title={title} centered />
        </div>
        <div className={`grid gap-4 sm:gap-5 ${teaserCount ? "sm:grid-cols-3" : "sm:grid-cols-2 md:grid-cols-3"}`}>
          {visible.map((s, i) => (
            <div
              key={s.name}
            >
              <Link to={s.href} className="card-elevated group flex flex-col border border-border/40 bg-card px-6 py-5 transition-[border-color,box-shadow,transform] duration-300 hover:border-accent/25 hover:shadow-[0_4px_24px_-6px_hsl(var(--accent)/0.10)] hover:-translate-y-0.5">
                <div className="flex items-center gap-3">
                  <MapPin size={15} className="text-[var(--ink-soft)] shrink-0" />
                  <span className="text-[1rem] font-semibold text-foreground group-hover:text-primary transition-colors">{s.name}</span>
                  <ArrowRight size={14} className="ml-auto text-muted-foreground/20 group-hover:text-primary transition-colors" />
                </div>
                {s.detail && (
                  <p className="mt-2 text-[0.875rem] text-muted-foreground">{s.detail}</p>
                )}
              </Link>
            </div>
          ))}
        </div>
        {seeAllHref && seeAllLabel && (
          <div className="mt-5 text-center">
            <Link to={seeAllHref} className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-primary hover:underline">
              {seeAllLabel}
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectorLinks;
