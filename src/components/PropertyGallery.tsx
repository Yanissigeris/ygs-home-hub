import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryPhoto } from "@/data/property-pages";

interface PropertyGalleryProps {
  photos: GalleryPhoto[];
  alt: string;
  lang: "fr" | "en";
}

const t = {
  fr: { all: (n: number) => `Voir les ${n} photos`, close: "Fermer", prev: "Photo précédente", next: "Photo suivante", photo: "Photo" },
  en: { all: (n: number) => `View all ${n} photos`, close: "Close", prev: "Previous photo", next: "Next photo", photo: "Photo" },
};

/**
 * Galerie d'une page propriété.
 * Téléphone : rangée pleine largeur à glisser (scroll-snap), compteur en bas.
 * Ordinateur : mosaïque une grande + quatre petites.
 * Un toucher ou un clic ouvre la visionneuse plein écran (flèches, Échap, glisser).
 */
const PropertyGallery = ({ photos, alt, lang }: PropertyGalleryProps) => {
  const s = t[lang];
  const total = photos.length;
  const [mobileIndex, setMobileIndex] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const onRowScroll = () => {
    const el = rowRef.current;
    if (!el) return;
    setMobileIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const photoAlt = (i: number) => `${alt}, ${s.photo.toLowerCase()} ${i + 1}`;

  return (
    <>
      {/* Téléphone */}
      <div className="relative md:hidden -mx-5 sm:-mx-6">
        <div
          ref={rowRef}
          onScroll={onRowScroll}
          className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ aspectRatio: "4 / 3" }}
        >
          {photos.map((p, i) => (
            <button
              key={p.small}
              type="button"
              onClick={() => setOpen(i)}
              className="h-full w-full flex-none snap-center bg-[var(--cream-deep)]"
              aria-label={photoAlt(i)}
            >
              <img
                src={p.small}
                alt={photoAlt(i)}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
                decoding="async"
              />
            </button>
          ))}
        </div>
        {total > 1 && (
          <span
            className="pointer-events-none absolute bottom-3 right-3 rounded-full px-3 py-1 text-[12.5px] font-semibold tabular-nums"
            style={{ background: "rgba(0,14,53,.72)", color: "#fff" }}
          >
            {mobileIndex + 1} / {total}
          </span>
        )}
      </div>

      {/* Ordinateur */}
      <div
        className="hidden md:grid gap-2 overflow-hidden"
        style={{
          borderRadius: 20,
          gridTemplateColumns: total >= 5 ? "2fr 1fr 1fr" : total >= 3 ? "2fr 1fr" : "1fr",
          gridTemplateRows: total >= 3 ? "repeat(2, minmax(0, 1fr))" : "1fr",
          height: "min(560px, 58vw)",
        }}
      >
        {photos.slice(0, total >= 5 ? 5 : total >= 3 ? 3 : 1).map((p, i) => {
          const isLast = i === (total >= 5 ? 4 : total >= 3 ? 2 : 0);
          return (
            <button
              key={p.large}
              type="button"
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden bg-[var(--cream-deep)] ${i === 0 && total >= 3 ? "row-span-2" : ""}`}
              aria-label={photoAlt(i)}
            >
              <img
                src={i === 0 ? p.large : p.small}
                alt={photoAlt(i)}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
                decoding="async"
              />
              {isLast && total > 1 && (
                <span
                  className="absolute bottom-4 right-4 rounded-full px-4 py-2 text-[14px] font-semibold"
                  style={{ background: "#fff", color: "var(--ink)" }}
                >
                  {s.all(total)}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {open !== null && (
        <Lightbox photos={photos} start={open} onClose={() => setOpen(null)} altFor={photoAlt} lang={lang} />
      )}
    </>
  );
};

const Lightbox = ({
  photos,
  start,
  onClose,
  altFor,
  lang,
}: {
  photos: GalleryPhoto[];
  start: number;
  onClose: () => void;
  altFor: (i: number) => string;
  lang: "fr" | "en";
}) => {
  const s = t[lang];
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(start);

  const go = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const next = Math.max(0, Math.min(photos.length - 1, i));
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  }, [photos.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (el) el.scrollLeft = start * el.clientWidth;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [start]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[1000] flex flex-col"
      style={{ background: "rgba(0,8,30,.96)" }}
    >
      <div className="flex items-center justify-between px-4 py-3 text-white">
        <span className="text-[14px] font-semibold tabular-nums">
          {index + 1} / {photos.length}
        </span>
        <button type="button" onClick={onClose} aria-label={s.close} className="rounded-full p-2 hover:bg-white/10">
          <X size={26} />
        </button>
      </div>
      <div
        ref={trackRef}
        onScroll={(e) => {
          const el = e.currentTarget;
          setIndex(Math.round(el.scrollLeft / el.clientWidth));
        }}
        className="flex flex-1 snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((p, i) => (
          <div key={p.large} className="flex h-full w-full flex-none snap-center items-center justify-center px-2 md:px-16">
            <img
              src={p.large}
              alt={altFor(i)}
              className="max-h-full max-w-full object-contain"
              loading={Math.abs(i - start) <= 1 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>
      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label={s.prev}
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 text-[var(--ink)] disabled:opacity-0 md:block"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === photos.length - 1}
            aria-label={s.next}
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 text-[var(--ink)] disabled:opacity-0 md:block"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default PropertyGallery;
