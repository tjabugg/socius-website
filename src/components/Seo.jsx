import { Helmet } from "react-helmet";

// The canonical production origin. Used to build absolute canonical URLs and
// absolute Open Graph / Twitter image URLs (social crawlers require absolute
// URLs and ignore root-relative ones).
export const SITE_URL = "https://socius.org";
export const SITE_NAME = "Socius Labs";

const DEFAULT_DESCRIPTION =
  "Socius Labs creates experimental collisions between machine intelligence and the human sciences — open-source AI models and datasets for social scientists.";

const toAbsoluteUrl = (path) => {
  if (!path) return undefined;
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
};

/**
 * Centralised <head> management for a page. Renders title, meta description,
 * canonical link, Open Graph and Twitter Card tags so every route is
 * consistently optimised for search engines and link previews.
 *
 * @param {string}  title        Full page title (e.g. "About | socius labs").
 * @param {string}  description  Meta + OG + Twitter description.
 * @param {string}  image        Imported asset or URL used as the share image.
 * @param {string}  path         Route path beginning with "/" (e.g. "/about").
 * @param {string}  type         Open Graph type ("website" or "article").
 * @param {boolean} noindex      When true, asks crawlers not to index the page.
 */
const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image,
  path = "/",
  type = "website",
  noindex = false,
}) => {
  const canonical = `${SITE_URL}${path}`;
  const ogImage = toAbsoluteUrl(image);

  return (
    <Helmet>
      {/* Primary meta tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default Seo;
