import { Link } from "react-router-dom";
import { canonicalPath } from "@/lib/url-utils";
import { ArrowRight, LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

interface LinkedCard {
  icon: LucideIcon;
  title: string;
  text: string;
  cta: string;
  href: string;
}

interface LinkedCardGridProps {
  overline?: string;
  title: string;
  items: LinkedCard[];
  columns?: 2 | 3;
  background?: "default" | "alt" | "white";
}

const LinkedCardGrid = ({
  overline,
  title,
  items,
  columns = 2,
  background = "default",
}: LinkedCardGridProps) => (
  <section className={`section-padding ${background === "alt" ? "bg-[var(--cream)]" : background === "white" ? "bg-white" : "bg-background"}`}>
    <div className="section-container">
      <div
        className="mb-12 max-w-[40rem]"
      >
        <SectionHeading overline={overline} title={title} />
      </div>
      <div className={`grid gap-6 ${columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {items.map((card, i) => (
          <div
            key={card.title}
          >
            <Link to={canonicalPath(card.href)} className="card-elevated group block border border-border/40 bg-card p-7 sm:p-8 h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/[0.06] text-primary mb-5">
                <card.icon size={24} />
              </div>
              <h3 className="text-[1.125rem]">{card.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">{card.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-primary">
                {card.cta} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LinkedCardGrid;
