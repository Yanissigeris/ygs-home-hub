import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
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
  const selectRef = React.useRef<HTMLDivElement>(null);
  const rowRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const [answerY, setAnswerY] = React.useState(0);

  React.useLayoutEffect(() => {
    if (layout !== "select") return;
    const place = () => {
      const grid = selectRef.current;
      const row = rowRefs.current[open];
      if (!grid || !row || !window.matchMedia("(min-width: 1024px)").matches) return setAnswerY(0);
      setAnswerY(row.getBoundingClientRect().top - grid.getBoundingClientRect().top + 24);
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [layout, open]);
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
          <div ref={selectRef} className="relative mt-8 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-x-10">
            {items.map((item, i) => {
              const active = open === i;
              return (
                <React.Fragment key={item.title}>
                  <Title
                    className="border-t border-[rgba(0,14,53,0.12)] last-of-type:border-b lg:col-span-6 lg:col-start-1"
                    style={{ gridRow: i + 1 }}
                  >
                    <button
                      type="button"
                      ref={(el) => (rowRefs.current[i] = el)}
                      aria-expanded={active}
                      aria-controls={`cg-answer-${i}`}
                      onClick={() => setOpen(i)}
                      onMouseEnter={() => setOpen(i)}
                      onFocus={() => setOpen(i)}
                      className={`flex w-full items-baseline justify-between gap-6 py-6 text-left [font-family:var(--display)] text-[1.5rem] font-semibold leading-[1.1] tracking-[-0.035em] transition-colors duration-200 lg:py-7 lg:text-[clamp(1.75rem,2.6vw,2.5rem)] ${
                        active ? "text-[var(--ink)]" : "text-[rgba(0,14,53,0.72)] hover:text-[var(--ink)]"
                      }`}
                    >
                      <span>{item.title}</span>
                      {/* Ordinateur : flèche qui montre que la question s'ouvre à droite (les questions inactives ne paraissent plus désactivées) */}
                      <ArrowRight
                        aria-hidden="true"
                        strokeWidth={2}
                        className={`hidden h-6 w-6 shrink-0 self-center transition-[color,transform] duration-200 lg:block ${active ? "translate-x-1 text-[var(--action)]" : "text-[rgba(0,14,53,0.35)]"}`}
                      />
                      <span aria-hidden="true" className="relative h-4 w-4 shrink-0 lg:hidden">
                        <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-current" />
                        <span className={`absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-200 ${active ? "scale-y-0" : "scale-y-100"}`} />
                      </span>
                    </button>
                  </Title>
                  <div
                    id={`cg-answer-${i}`}
                    className={`${active ? "block" : "hidden"} pb-8 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:pb-0`}
                    style={{ gridRow: `1 / span ${items.length}` }}
                  >
                    <div
                      className="lg:border-l-2 lg:border-[var(--action)] lg:pl-8 lg:transition-transform lg:duration-300 lg:ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ transform: answerY ? `translateY(${answerY}px)` : undefined }}
                    >
                      <p className={`max-w-[30rem] text-[1rem] leading-[1.65] text-[#4A5475] lg:[font-family:var(--display)] lg:font-medium lg:leading-[1.4] lg:tracking-[-0.015em] lg:text-[var(--ink)] ${item.text.split(" ").length > 32 ? "lg:text-[1.25rem]" : "lg:text-[1.5rem]"}`}>
                        {item.text}
                      </p>
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
      <section className={`${bg} lg:grid lg:grid-cols-2`}>
        {image && (
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
            />
          </div>
        )}
        <div
          ref={strikeRef}
          className={`px-5 sm:px-6 md:px-8 ${image ? "lg:pl-20 lg:pr-[max(2rem,calc((100vw-1240px)/2+2rem))]" : ""}`}
          style={{ paddingTop: "var(--section-padding-lg)", paddingBottom: "var(--section-padding-lg)" }}
        >
          <h2 className="max-w-[30rem]">{title}</h2>
          <div className="mt-10 lg:mt-14">
            {items.map((item, i) => (
              <div key={item.title} className={i > 0 ? "mt-10 lg:mt-14" : ""}>
                <Title className="[font-family:var(--display)] text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--ink)] lg:text-[clamp(3.25rem,5vw,5rem)]">
                  <span className="relative inline-block">
                    {item.title}
                    <span
                      aria-hidden="true"
                      style={{ transitionDelay: `${i * 180}ms` }}
                      className={`strike-line absolute left-[-0.03em] right-[-0.03em] top-[52%] h-[3px] origin-left bg-[var(--action)] transition-transform duration-[650ms] ease-[cubic-bezier(0.65,0,0.35,1)] lg:h-[4px] ${drawn ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </span>
                </Title>
                <p className="mt-4 max-w-[28rem] text-[1.0625rem] leading-[1.55] text-[#4A5475]">{item.text}</p>
              </div>
            ))}
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
            {String(active + 1).padStart(2, "0")} <span className="text-[rgba(0,14,53,0.64)]">/ {String(items.length).padStart(2, "0")}</span>
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
