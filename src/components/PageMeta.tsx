import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
}

const SITE = "YGS — Yanis Gauthier-Sigeris";

const PageMeta = ({ title, description, canonical }: PageMetaProps) => (
  <Helmet>
    <title>{`${title} | ${SITE}`}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {canonical && <link rel="canonical" href={canonical} />}
  </Helmet>
);

export default PageMeta;
