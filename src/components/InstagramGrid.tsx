import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ig1 from "@/assets/instagram-1.webp";
import ig2 from "@/assets/instagram-2.webp";
import ig3 from "@/assets/instagram-3.webp";
import ig4 from "@/assets/instagram-4.webp";
import ig5 from "@/assets/instagram-5.webp";
import ig6 from "@/assets/instagram-6.webp";

const images = [ig1, ig2, ig3, ig4, ig5, ig6];
const HANDLE = "yanissigeris";
const PROFILE_URL = `https://www.instagram.com/${HANDLE}/`;

const InstagramGrid = () => {
  const lang = useLanguage();
  const gridRef = useRef<HTMLDivElement>(null);

  const t = {
    eyebrow: lang === "en" ? "ON INSTAGRAM" : "SUR INSTAGRAM",
    title: lang === "en" ? "Follow the market" : "Suivez le marché",
    titleItalic: lang === "en" ? "in real time" : "en temps réel",
    follow: lang === "en" ? "Follow →" : "Suivre →",
    tagline: lang === "en"
      ? "Local market · Recent listings · Real estate tips"
      : "Marché local · Propriétés récentes · Conseils immobiliers",
  };

  return (
    <section style={{ background: "var(--ink)", padding: "4rem 0" }}>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <span className="flex items-center gap-2.5 text-[.62rem] font-bold tracking-[.2em] uppercase before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#A88A5A]" style={{ color: "var(--gold)" }}>
              {t.eyebrow}
            </span>
            <h2 className="mt-2 font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light tracking-tight leading-[1.15]" style={{ color: "#F7F4EE" }}>
              {t.title}
              <br />
              <em style={{ color: "var(--gold)" }}>{t.titleItalic}</em>
            </h2>
          </div>

          {/* Desktop handle + follow */}
          <div className="flex items-center gap-2.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(255,255,255,.7)" }}>
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            <span className="text-[.85rem] font-semibold" style={{ color: "rgba(255,255,255,.7)" }}>@{HANDLE}</span>
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="me noopener"
              className="ml-4 inline-flex items-center gap-1.5 px-5 py-2 text-[.78rem] font-semibold tracking-[.04em] rounded-full transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
              style={{ background: "transparent", border: "1.5px solid #A88A5A", color: "#A88A5A" }}
            >
              {t.follow}
            </a>
          </div>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 md:grid-cols-6 gap-[3px] md:gap-1"
        >
          {images.map((src, i) => (
            <a
              key={i}
              href={PROFILE_URL}
              target="_blank"
              rel="noopener"
              className="group relative aspect-square overflow-hidden rounded-[2px]"
            >
              <img
                src={src}
                alt={`Instagram ${i + 1}`}
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="scale-75 group-hover:scale-100 transition-transform duration-300">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-5 text-center text-[.78rem] md:text-[.78rem]" style={{ color: "rgba(255,255,255,.4)" }}>
          {t.tagline}
        </p>
      </div>
    </section>
  );
};

export default InstagramGrid;
