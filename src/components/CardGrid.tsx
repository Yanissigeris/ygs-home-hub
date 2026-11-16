import * as React from "react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import yanisAvatar from "@/assets/yanis-avatar.webp";

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
  /**
   * boxes (default): asymmetric boxed grid, for service menus.
   * select: questions in large type, the chosen answer shown beside them (desktop), accordion on phones.
   * strike: pitfalls as large struck-through words beside a real photo.
   */
  layout?: "boxes" | "select" | "strike";
  /** Photo for the strike layout. */
  image?: { src: string; alt: string; width: number; height: number };
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
  layout = "boxes",
  image,
}: CardGridProps) => {
  const bg = background === "alt" ? "bg-[var(--cream)]" : background === "white" ? "bg-white" : "bg-background";
  const [open, setOpen] = React.useState(0);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);
  const strikeRef = React.useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = React.useState(false);

  React.useEffect(() => {
    if (layout !== "strike" || !strikeRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(strikeRef.current);
    return () => io.disconnect();
  }, [layout]);

  const Title = ({ className, style, children }: { className?: string; style?: React.CSSProperties; children: React.ReactNode }) =>
    variant === "icon-top" ? <h3 className={className} style={style}>{children}</h3> : <p className={className} style={style}>{children}</p>;

  if (layout === "select") {
    return (
      <section className={`section-padding ${bg}`}>
        <div className="section-container">
          <h2 className="max-w-[36rem]">{title}</h2>
          <div className="mt-8 lg:mt-14 lg:grid lg:grid-cols-12 lg:gap-x-10">
            {items.map((item, i) => {
              const active = open === i;
              return (
                <React.Fragment key={item.title}>
                  <Title className="border-t border-[rgba(0,14,53,0.12)] lg:col-span-6 lg:col-start-1" style={{ gridRow: i + 1 }}>
                    <button
                      type="button"
                      aria-expanded={active}
                      aria-controls={`cg-answer-${i}`}
                      onClick={() => setOpen(i)}
                      onMouseEnter={() => setOpen(i)}
                      onFocus={() => setOpen(i)}
                      className={`group flex w-full items-start justify-between gap-6 py-6 text-left [font-family:var(--display)] text-[1.5rem] font-semibold leading-[1.12] tracking-[-0.03em] transition-colors duration-200 lg:py-8 lg:text-[clamp(1.625rem,2.5vw,2.375rem)] ${
                        active ? "text-[var(--ink)]" : "text-[rgba(0,14,53,0.34)] hover:text-[var(--ink)]"
                      }`}
                    >
                      <span>{item.title}</span>
                      <span
                        aria-hidden="true"
                        className={`mt-2 inline-block h-3 w-3 shrink-0 rounded-full transition-colors duration-200 lg:mt-4 ${active ? "bg-[var(--action)]" : "bg-transparent"}`}
                      />
                    </button>
                  </Title>
                  <div
                    id={`cg-answer-${i}`}
                    style={{ gridRow: `1 / span ${items.length}` }}
                    className={`${active ? "block" : "hidden"} pb-7 lg:col-span-5 lg:col-start-8 lg:self-start lg:pb-0`}
                  >
                    <div className="lg:sticky lg:top-28 lg:rounded-[1.5rem] lg:bg-[var(--ink)] lg:p-12">
                      <p className="text-[1rem] leading-[1.65] text-[#4A5475] lg:[font-family:var(--display)] lg:text-[1.625rem] lg:font-medium lg:leading-[1.35] lg:tracking-[-0.02em] lg:text-[var(--cream)]">
                        {item.text}
                      </p>
                      <div className="mt-10 hidden items-center gap-3 border-t border-[rgba(247,244,238,0.14)] pt-6 lg:flex">
                        <img src={yanisAvatar} alt="" width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
                        <span className="text-[0.875rem] font-medium text-[rgba(247,244,238,0.78)]">Yanis Gauthier-Sigeris</span>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (layout === "strike") {
    return (
      <section className={`section-padding ${bg}`}>
        <div className="section-container lg:grid lg:grid-cols-12 lg:gap-x-10">
          {image && (
            <div className="lg:col-span-5">
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full rounded-[1.25rem] object-cover lg:sticky lg:top-28 lg:aspect-[4/5] lg:rounded-[1.5rem]"
              />
            </div>
          )}
          <div ref={strikeRef} className={`mt-10 lg:mt-0 ${image ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-12"}`}>
            <h2 className="max-w-[36rem]">{title}</h2>
            <div className="mt-8 lg:mt-12">
              {items.map((item, i) => (
                <div key={item.title} className="border-t border-[rgba(0,14,53,0.12)] py-7 lg:py-9">
                  <Title className="[font-family:var(--display)] text-[2.5rem] font-semibold leading-[1] tracking-[-0.045em] text-[var(--ink)] lg:text-[clamp(3rem,5.2vw,4.75rem)]">
                    <span className="relative inline-block">
                      {item.title}
                      <span
                        aria-hidden="true"
                        style={{ transitionDelay: `${i * 160}ms` }}
                        className={`strike-line absolute left-[-0.04em] right-[-0.04em] top-[54%] h-[0.075em] origin-left rounded-full bg-[var(--action)] transition-transform duration-[700ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${drawn ? "scale-x-100" : "scale-x-0"}`}
                      />
                    </span>
                  </Title>
                  <p className="mt-4 max-w-[30rem] text-[1rem] leading-[1.6] text-[#4A5475] lg:text-[1.0625rem]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const spans = layoutFor(items.length);

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
