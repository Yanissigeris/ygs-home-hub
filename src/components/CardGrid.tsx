import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

interface CardItem {
  icon?: LucideIcon;
  title: string;
  text: string;
}

interface CardGridProps {
  overline?: string;
  title: string;
  items: CardItem[];
  columns?: 2 | 3;
  background?: "default" | "alt" | "white";
  variant?: "icon-top" | "icon-inline";
  centered?: boolean;
}

/**
 * Editorial grid: each item is a title and a short text under a hairline.
 * No card boxes, no icons (the `icon` prop is kept for compatibility and
 * ignored; `variant` only decides whether titles are h3 or p, as before).
 */
const CardGrid = ({
  overline,
  title,
  items,
  columns = 2,
  background = "default",
  variant = "icon-top",
  centered = true,
}: CardGridProps) => (
  <section className={`section-padding ${background === "alt" ? "bg-[var(--cream)]" : background === "white" ? "bg-white" : "bg-background"}`}>
    <div className="section-container">
      <div
        className={centered ? "text-center mb-12 max-w-[40rem] mx-auto" : "mb-12"}
      >
        <SectionHeading overline={overline} title={title} centered={centered} />
      </div>
      <div className={`grid gap-x-12 gap-y-10 ${columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {items.map((item) => (
          <div key={item.title} className="border-t border-[rgba(0,14,53,0.14)] pt-6">
            {variant === "icon-top" ? (
              <h3 className="text-[1.125rem] leading-snug text-foreground">{item.title}</h3>
            ) : (
              // Kept as <p> to leave the page heading outline exactly as before.
              <p className="text-[1.125rem] font-semibold leading-snug tracking-[-0.01em] text-foreground">{item.title}</p>
            )}
            <p className="mt-2.5 max-w-[34rem] text-[0.9375rem] leading-[1.65] text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CardGrid;
