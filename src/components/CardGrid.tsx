import * as React from "react";
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
 * Asymmetric boxed grid. The first box leads in navy, the others are white.
 * Widths alternate on a 12-column grid (desktop); boxes stack on phones.
 * No icons: the `icon` prop is kept for compatibility and ignored.
 * `variant` only decides whether titles are h3 (icon-top) or p (icon-inline),
 * exactly as before, so heading outlines do not change.
 */
const layoutFor = (n: number): string[] => {
  if (n === 3) return ["lg:col-span-5 lg:row-span-2", "lg:col-span-7", "lg:col-span-7"];
  if (n === 4) return ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
  if (n === 5) return ["lg:col-span-5 lg:row-span-2", "lg:col-span-7", "lg:col-span-7", "lg:col-span-6", "lg:col-span-6"];
  return Array.from({ length: n }, (_, i) => (i % 4 === 0 || i % 4 === 3 ? "lg:col-span-7" : "lg:col-span-5"));
};

const CardGrid = ({
  title,
  items,
  background = "default",
  variant = "icon-top",
}: CardGridProps) => {
  const bg = background === "alt" ? "bg-[var(--cream)]" : background === "white" ? "bg-white" : "bg-background";
  const spans = layoutFor(items.length);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);

  // Phones: boxes sit in a horizontal row the visitor swipes through.
  // The counter follows the box closest to the left edge.
  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const kids = Array.from(el.children) as HTMLElement[];
    const left = el.scrollLeft;
    let best = 0;
    kids.forEach((k, i) => {
      if (Math.abs(k.offsetLeft - el.offsetLeft - left) < Math.abs(kids[best].offsetLeft - el.offsetLeft - left)) best = i;
    });
    setActive(best);
  };

  return (
    <section className={`section-padding ${bg}`}>
      <div className="section-container">
        <div className="flex items-end justify-between gap-6">
          <h2 className="max-w-[36rem]">{title}</h2>
          <p className="shrink-0 pb-1 text-[0.8125rem] font-medium tabular-nums tracking-[0.02em] text-[#4A5475] lg:hidden" aria-hidden="true">
            {String(active + 1).padStart(2, "0")} <span className="text-[rgba(0,14,53,0.3)]">/ {String(items.length).padStart(2, "0")}</span>
          </p>
        </div>
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="cardgrid-track scroll-px-5 sm:scroll-px-6 md:scroll-px-8 lg:scroll-px-0 -mx-5 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:mx-0 lg:mt-14 lg:grid lg:snap-none lg:grid-cols-12 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {items.map((item, i) => {
            const lead = i === 0;
            const titleClass = `[font-family:var(--display)] font-semibold tracking-[-0.03em] ${
              lead
                ? "text-[1.625rem] leading-[1.05] lg:text-[clamp(1.75rem,3vw,2.5rem)] lg:leading-[1.02] text-[var(--cream)]"
                : "text-[1.375rem] leading-[1.1] lg:text-[clamp(1.375rem,1.9vw,1.75rem)] lg:leading-[1.08] text-[var(--ink)]"
            }`;
            return (
              <div
                key={item.title}
                className={`${spans[i]} flex w-[84%] max-w-[22rem] shrink-0 snap-start flex-col rounded-[1.25rem] p-6 sm:w-[60%] lg:w-auto lg:max-w-none lg:shrink lg:rounded-[1.5rem] lg:p-10 ${
                  lead
                    ? "justify-end bg-[var(--ink)] lg:min-h-[17rem]"
                    : "bg-white border border-[rgba(0,14,53,0.09)] shadow-[0_1px_2px_rgba(0,14,53,0.04),0_18px_40px_-24px_rgba(0,14,53,0.28)]"
                }`}
              >
                {variant === "icon-top" ? (
                  <h3 className={titleClass}>{item.title}</h3>
                ) : (
                  <p className={titleClass}>{item.title}</p>
                )}
                <p
                  className={`mt-3 max-w-[32rem] text-[0.9375rem] leading-[1.6] lg:mt-4 lg:text-[1rem] ${
                    lead ? "text-[rgba(247,244,238,0.78)]" : "text-[#4A5475]"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
