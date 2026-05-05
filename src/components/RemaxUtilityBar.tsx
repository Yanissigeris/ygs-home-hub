import remaxLogotypeBlack from "@/assets/remax-logotype-black.png";
import remaxBalloonOfficial from "@/assets/remax-balloon-official.png";

/**
 * RE/MAX Utility Bar — sits at the very top of every page in normal flow.
 * Cream neutral background (Guide p.6) so the official RE/MAX logos stay
 * unmodified (no filter, no invert, no transform).
 */
const RemaxUtilityBar = () => {
  return (
    <div
      role="complementary"
      aria-label="RE/MAX Direct Inc."
      style={{
        background: "#F7F4EE",
        borderBottom: "1px solid var(--ygs-border, #D9E1E5)",
        color: "#222831",
        position: "relative",
        zIndex: 60,
      }}
    >
      <div className="section-container flex flex-col gap-1.5 py-2 md:flex-row md:items-center md:justify-between md:gap-6 md:py-0 md:h-11">
        {/* Left: official RE/MAX logos (no filter, no recoloring) */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            src={remaxLogotypeBlack}
            alt="RE/MAX"
            width={96}
            height={28}
            style={{ height: 28, width: "auto" }}
            loading="eager"
            decoding="async"
            fetchPriority="low"
          />
          <img
            src={remaxBalloonOfficial}
            alt=""
            aria-hidden="true"
            width={24}
            height={28}
            style={{ height: 28, width: "auto" }}
            loading="eager"
            decoding="async"
            fetchPriority="low"
          />
        </div>

        {/* Right: agency identification block */}
        <div
          className="font-body text-xs md:text-sm md:text-right leading-snug"
          style={{ color: "#222831" }}
        >
          <span className="block md:inline">
            RE/MAX Direct Inc., Agence immobilière
          </span>
          <span aria-hidden="true" className="hidden md:inline"> · </span>
          <span className="block md:inline">
            216 Chemin d'Aylmer, Gatineau, QC J9H 1A4
            <span aria-hidden="true"> · </span>
            <a
              href="tel:+18196840000"
              style={{ color: "inherit", textDecoration: "none" }}
              className="hover:underline"
            >
              819-684-0000
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RemaxUtilityBar;
