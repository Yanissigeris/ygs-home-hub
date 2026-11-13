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
  return (
    <section className={`section-padding ${bg}`}>
      <div className="section-container">
        <h2 className="max-w-[36rem]">{title}</h2>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:gap-4 lg:mt-14 lg:grid-cols-12 lg:gap-5">
          {items.map((item, i) => {
            const lead = i === 0;
            const titleClass = `[font-family:var(--display)] font-semibold tracking-[-0.03em] ${
              lead ? "text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.02] text-[var(--cream)]" : "text-[clamp(1.375rem,1.9vw,1.75rem)] leading-[1.08] text-[var(--ink)]"
            }`;
            return (
              <div
                key={item.title}
                className={`${spans[i]} flex flex-col rounded-[1.5rem] p-6 sm:p-8 lg:p-10 ${
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
                  className={`mt-3 max-w-[32rem] text-[1rem] leading-[1.6] lg:mt-4 ${
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
