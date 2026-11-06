import * as React from "react";
import { Link } from "react-router-dom";

interface AwardsStripProps {
  lang?: "fr" | "en";
}

/**
 * Bloc de preuve sous le hero de l'accueil (option J, nov. 2026).
 *
 * - Un grand « 300+ » à gauche, la fiche (note, Hall of Fame, année) à droite.
 * - Chaque chiffre est un odomètre : une colonne 0-9 qui roule une seule fois,
 *   quand le bloc entre à l'écran.
 * - HTML statique (prerender Puppeteer, window.__PRERENDER__) et visiteurs
 *   « prefers-reduced-motion » : chiffres affichés à la valeur finale, immobiles.
 * - Hors animation, le DOM ne contient que le texte final (« 300 », « 5,0 ») :
 *   Google, les agents IA et les lecteurs d'écran lisent les vraies valeurs.
 *   Pendant le roulement (~3 s), colonnes aria-hidden + texte sr-only.
 *
 * Contraste (WCAG) :
 *  - #000E35 sur #F5F1EA → 17,4:1 (AAA)
 *  - #4A5475 sur #F5F1EA → 7,2:1 (AAA)
 *  - #2B4FD6 (+) sur #F5F1EA → 5,6:1 (AA)
 */

type Phase = "final" | "reset" | "run";

const DIGIT_DELAY_MS = 60;

function buildDigits(value: string) {
  const digitCount = value.replace(/\D/g, "").length;
  let index = 0;
  return value.split("").map((ch) => {
    if (!/\d/.test(ch)) return { kind: "punct" as const, ch };
    const d = Number(ch);
    const fromRight = digitCount - 1 - index;
    // Premier chiffre d'un nombre : un seul passage. Unités : deux tours.
    const cycles = index === 0 && digitCount > 1 ? 0 : fromRight === 0 ? 2 : 1;
    const strip = Array.from({ length: cycles * 10 + d + 1 }, (_, k) => k % 10);
    const item = { kind: "digit" as const, strip, i: index };
    index += 1;
    return item;
  });
}

const Odometer = ({ value, phase, delay = 0 }: { value: string; phase: Phase; delay?: number }) => {
  const parts = React.useMemo(() => buildDigits(value), [value]);

  // État final (HTML statique, fin d'animation, mouvement réduit) : texte simple,
  // un seul chiffre par case. Google et les agents IA lisent « 300 », pas 0-9.
  if (phase === "final") {
    return (
      <span className="ps-odo">
        {value.split("").map((ch, k) => (
          <span key={k} className={/\d/.test(ch) ? "ps-d" : "ps-punct"}>
            {ch}
          </span>
        ))}
      </span>
    );
  }

  return (
    <>
      <span className="ps-odo" aria-hidden="true">
        {parts.map((p, k) =>
          p.kind === "punct" ? (
            <span key={k} className="ps-punct">{p.ch}</span>
          ) : (
            <span key={k} className="ps-d">
              <span
                className={`ps-s${phase === "run" ? " ps-blur" : ""}`}
                style={{
                  transform: `translateY(${phase === "reset" ? 0 : -(p.strip.length - 1)}em)`,
                  transition:
                    phase === "run"
                      ? `transform ${1500 + (p.strip.length - 1) * 45}ms cubic-bezier(.16,1,.3,1) ${delay + p.i * DIGIT_DELAY_MS}ms`
                      : "none",
                  animationDelay: `${delay}ms`,
                }}
              >
                {p.strip.map((n, j) => (
                  <i key={j}>{n}</i>
                ))}
              </span>
            </span>
          )
        )}
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
};

const AwardsStrip = React.forwardRef<HTMLElement, AwardsStripProps>(({ lang = "fr" }, ref) => {
  const isEn = lang === "en";
  const t = isEn
    ? {
        caption: "transactions closed in the Outaouais",
        rating: "Average rating on Google and Facebook",
        ratingValue: "5.0",
        ratingHref: "/en/testimonials/",
        hof: "RE/MAX, LLC Hall of Fame",
        since: "Broker in the Outaouais since",
        aria: "Track record",
      }
    : {
        caption: "transactions conclues en Outaouais",
        rating: "Note moyenne sur Google et Facebook",
        ratingValue: "5,0",
        ratingHref: "/temoignages/",
        hof: "Hall of Fame RE/MAX, LLC",
        since: "Courtier en Outaouais depuis",
        aria: "Parcours en chiffres",
      };

  const localRef = React.useRef<HTMLElement | null>(null);
  const setRefs = (node: HTMLElement | null) => {
    localRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
  };

  const [phase, setPhase] = React.useState<Phase>("final");

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const isPrerender = Boolean((window as unknown as { __PRERENDER__?: boolean }).__PRERENDER__);
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const el = localRef.current;
    if (isPrerender || reduce || !el || !("IntersectionObserver" in window)) return;

    setPhase("reset");
    let raf = 0;
    let done = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          // Deux frames : laisse le navigateur peindre l'état « reset » avant de lancer.
          raf = requestAnimationFrame(() => {
            raf = requestAnimationFrame(() => {
              setPhase("run");
              done = window.setTimeout(() => setPhase("final"), 3400);
            });
          });
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(done);
    };
  }, []);

  const rowsClass = phase === "reset" ? "ps-rows ps-rows--hidden" : "ps-rows";

  return (
    <section ref={setRefs} className="proof-strip" aria-label={t.aria}>
      <div className="section-container ps-grid">
        <div className="ps-main">
          <p className="ps-big">
            <Odometer value="300" phase={phase} />
            <span className="ps-plus">+</span>
          </p>
          <p className="ps-caption">{t.caption}</p>
        </div>

        <div className={rowsClass}>
          <Link to={t.ratingHref} className="ps-row ps-row--link">
            <span className="ps-label">{t.rating}</span>
            <span className="ps-value">
              <Odometer value={t.ratingValue} phase={phase} delay={350} />
              <small>/5</small>
            </span>
          </Link>
          <div className="ps-row">
            <span className="ps-label">{t.hof}</span>
            <span className="ps-value">
              <Odometer value="2024" phase={phase} delay={480} />
            </span>
          </div>
          <div className="ps-row">
            <span className="ps-label">{t.since}</span>
            <span className="ps-value">
              <Odometer value="2017" phase={phase} delay={610} />
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .proof-strip{background:var(--cream-deep);color:var(--ink);border-bottom:1px solid rgba(0,14,53,.12);padding:44px 0 40px}
        .proof-strip .ps-grid{display:block}
        .proof-strip .ps-big{display:block;white-space:nowrap;font-weight:300;line-height:1;font-size:clamp(7.25rem,30vw,8.25rem);margin:0 0 0 -.04em}
        .proof-strip .ps-big .ps-d{margin-right:-.11em}
        .proof-strip .ps-big .ps-d:last-of-type{margin-right:-.06em}
        .proof-strip .ps-plus{display:inline-block;vertical-align:top;font-size:.34em;line-height:1;font-weight:300;color:#2B4FD6;margin:.12em 0 0 .12em}
        .proof-strip .ps-caption{margin:14px 0 30px;font-size:.9375rem;line-height:1.45;color:#4A5475}
        .proof-strip .ps-rows{transition:opacity .6s ease .35s,transform .8s cubic-bezier(.16,1,.3,1) .35s}
        .proof-strip .ps-rows--hidden{opacity:0;transform:translateY(6px);transition:none}
        .proof-strip .ps-row{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:13px 0;border-top:1px solid rgba(0,14,53,.14);color:#4A5475;font-size:.84rem;text-decoration:none}
        .proof-strip .ps-row:last-child{border-bottom:1px solid rgba(0,14,53,.14)}
        .proof-strip .ps-value{display:inline-block;white-space:nowrap;line-height:1;color:var(--ink);font-size:1.2rem;letter-spacing:-.02em}
        .proof-strip .ps-value .ps-d{margin-right:-.085em}
        .proof-strip .ps-value .ps-d:last-of-type{margin-right:-.06em}
        .proof-strip .ps-punct{display:inline-block;vertical-align:top;line-height:1}
        .proof-strip .ps-value .ps-odo{vertical-align:bottom}
        .proof-strip .ps-value small{display:inline-block;vertical-align:bottom;line-height:1.1;font-size:.875rem;color:#4A5475;margin-left:3px;letter-spacing:0}
        .proof-strip .ps-row--link .ps-label{background:linear-gradient(currentColor,currentColor) 0 100%/0 1px no-repeat;transition:background-size .35s ease,color .2s ease}
        .proof-strip .ps-row--link:hover .ps-label,.proof-strip .ps-row--link:focus-visible .ps-label{background-size:100% 1px;color:var(--ink)}
        .proof-strip .ps-row--link:focus-visible{outline:2px solid #3366FF;outline-offset:4px}

        .proof-strip .ps-odo{display:inline-block;white-space:nowrap;vertical-align:top;font-variant-numeric:tabular-nums;line-height:1}
        .proof-strip .ps-d{display:inline-block;vertical-align:top;height:1em;overflow:hidden;padding:0 .06em;margin-left:-.06em;-webkit-mask:linear-gradient(transparent 0,#000 10%,#000 90%,transparent);mask:linear-gradient(transparent 0,#000 10%,#000 90%,transparent)}
        .proof-strip .ps-s{display:block;will-change:transform}
        .proof-strip .ps-s i{display:block;height:1em;font-style:normal;text-align:center;letter-spacing:0}
        .proof-strip .ps-blur{animation:psBlur 1.1s ease both}
        @keyframes psBlur{0%,55%{filter:blur(.012em)}100%{filter:none}}

        @media (min-width:1024px){
          .proof-strip{padding:72px 0 78px}
          .proof-strip .ps-grid{display:grid;grid-template-columns:1fr minmax(0,470px);gap:80px;align-items:end}
          .proof-strip .ps-big{font-size:clamp(10rem,15vw,13.25rem);margin-left:-.05em}
          .proof-strip .ps-caption{margin:22px 0 0;font-size:1.0625rem}
          .proof-strip .ps-row{padding:16px 0;font-size:.9375rem}
          .proof-strip .ps-value{font-size:1.5rem}
        }
        @media (prefers-reduced-motion:reduce){
          .proof-strip .ps-rows,.proof-strip .ps-row--link .ps-label{transition:none}
          .proof-strip .ps-blur{animation:none}
        }
      `}</style>
    </section>
  );
});

AwardsStrip.displayName = "AwardsStrip";
export default AwardsStrip;
