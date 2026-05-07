import remaxLogotypeBlack from "@/assets/remax-logotype-black.png";
// TODO: replace with @/assets/remax-balloon-color.svg once uploaded by user (official RE/MAX color balloon required by Guide section 1.4)
import remaxBalloonColor from "@/assets/remax-balloon-official.png";

interface RemaxAgencyBlockProps {
  lang: "fr" | "en";
}

const RemaxAgencyBlock = ({ lang }: RemaxAgencyBlockProps) => {
  const isFr = lang === "fr";
  const tagline = isFr ? "Agence immobilière" : "Real estate agency";
  const phoneLabel = isFr ? "Bur." : "Office";

  return (
    <div
      className="rounded-2xl p-5 text-left"
      style={{ background: "#F7F4EE", color: "#1A1A1A" }}
    >
      <div className="flex items-end gap-4 mb-4">
        <img
          src={remaxLogotypeBlack}
          alt="RE/MAX"
          className="h-7 w-auto"
          loading="lazy"
          decoding="async"
        />
        <img
          src={remaxBalloonColor}
          alt=""
          aria-hidden="true"
          className="h-9 w-auto"
          loading="lazy"
          decoding="async"
        />
      </div>
      <p
        className="font-semibold leading-tight"
        style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "1.25rem" }}
      >
        RE/MAX Direct inc.
      </p>
      <p
        className="mt-0.5 leading-snug"
        style={{ fontSize: "0.8125rem", color: "rgba(26,26,26,.7)" }}
      >
        {tagline}
      </p>
      <p
        className="mt-3 leading-snug"
        style={{ fontSize: "0.875rem", color: "rgba(26,26,26,.85)" }}
      >
        216, chemin d'Aylmer
        <br />
        Gatineau (Québec) J9H 1A4
      </p>
      <p
        className="mt-2"
        style={{ fontSize: "0.875rem", color: "rgba(26,26,26,.85)" }}
      >
        {phoneLabel} :{" "}
        <a
          href="tel:+18196840000"
          className="underline-offset-2 hover:underline"
          style={{ color: "inherit" }}
        >
          819-684-0000
        </a>
      </p>
    </div>
  );
};

export default RemaxAgencyBlock;
