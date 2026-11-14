import PageMeta from "@/components/PageMeta";
import { heroPhotoCredits } from "@/data/photo-credits";
import { getPublishedPosts } from "@/data/blog-posts";

export const PhotoCredits = ({ lang = "fr" }: { lang?: "fr" | "en" }) => {
  const fr = lang === "fr";
  const posts = getPublishedPosts(lang).filter((p) => p.featuredImageCredit);
  const rows = [
    ...heroPhotoCredits.map((c) => ({ page: fr ? c.page : c.pageEn, place: fr ? c.place : c.placeEn, artist: c.artist, license: c.license, href: c.href })),
    ...posts.map((p) => ({
      page: fr ? p.title : p.titleEn,
      place: fr ? p.featuredImageCredit!.alt : p.featuredImageCredit!.altEn,
      artist: p.featuredImageCredit!.artist,
      license: p.featuredImageCredit!.license,
      href: p.featuredImageCredit!.href,
    })),
  ];
  return (
    <>
      <PageMeta
        title={fr ? "Crédits photos | YGS" : "Photo credits | YGS"}
        description={fr ? "Auteurs et licences des photos libres de droits utilisées sur yanisgauthier.com." : "Authors and licences of the freely licensed photos used on yanisgauthier.com."}
        ogImage="https://yanisgauthier.com/og/og-default.jpg"
      />
      <article className="bg-white">
        <div className="section-container pt-32 pb-20 sm:pt-40">
          <div className="max-w-[48rem]">
            <h1 className="font-display" style={{ color: "var(--ink)", fontWeight: 600, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              {fr ? "Crédits photos" : "Photo credits"}
            </h1>
            <p className="prose-body mt-5">
              {fr
                ? "Plusieurs photos de ce site sont de vraies photos de Gatineau et de l'Outaouais, publiées sous licence libre sur Wikimedia Commons. Elles ont été recadrées pour le site. Voici leurs auteurs et leurs licences."
                : "Several photos on this site are real photos of Gatineau and the Outaouais, published under free licences on Wikimedia Commons. They were cropped for the site. Here are their authors and licences."}
            </p>
            <ul className="mt-10">
              {rows.map((r) => (
                <li key={r.page + r.href} className="border-t py-4 text-[0.9375rem] leading-[1.55]" style={{ borderColor: "rgba(0,14,53,0.12)" }}>
                  <span className="font-semibold" style={{ color: "var(--ink)" }}>{r.page}</span>
                  <span style={{ color: "var(--ink-soft)" }}> · {r.place} · </span>
                  <a href={r.href} target="_blank" rel="noopener noreferrer license nofollow" className="underline underline-offset-2" style={{ color: "var(--gold-text)" }}>
                    {r.artist}, {r.license}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

const PhotoCreditsPage = () => <PhotoCredits lang="fr" />;
export default PhotoCreditsPage;
