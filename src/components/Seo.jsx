import { Helmet } from "react-helmet";

// The canonical production origin. Used to build absolute canonical URLs and
// absolute Open Graph / Twitter image URLs (social crawlers require absolute
// URLs and ignore root-relative ones).
export const SITE_URL = "https://socius.org";
export const SITE_NAME = "Socius Labs";

const DEFAULT_DESCRIPTION =
  "Socius Labs creates experimental collisions between machine intelligence and the human sciences — open-source AI models and datasets for social scientists.";

const PUBLISHER = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/android-chrome-256x256.png`,
  },
};

const toAbsoluteUrl = (path) => {
  if (!path) return undefined;
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
};

// Strip the trailing brand suffix so structured-data headlines/labels read as
// the bare page name (e.g. "Between Fast and Slow Thinking of Machines").
const cleanTitle = (title) =>
  title.replace(/\s*\|\s*socius(?:\s+labs)?\s*$/i, "").trim();

// schema.org Article markup for publication pages — makes them eligible for
// richer search results and ties them to the Socius Labs organisation.
const buildArticleSchema = ({ title, description, image, canonical }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: cleanTitle(title),
  description,
  ...(image ? { image: [toAbsoluteUrl(image)] } : {}),
  author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  publisher: PUBLISHER,
  mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  url: canonical,
});

// schema.org BreadcrumbList (Home › Section › Page) for nested pages. Surfaces
// the breadcrumb trail in search results and reinforces the site hierarchy.
const buildBreadcrumbSchema = ({ title, path, canonical }) => {
  const segments = path.split("/").filter(Boolean);
  if (segments.length < 2) return null;
  const section = segments[0];
  const sectionName = section.charAt(0).toUpperCase() + section.slice(1);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: sectionName,
        item: `${SITE_URL}/${section}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cleanTitle(title),
        item: canonical,
      },
    ],
  };
};

/**
 * Centralised <head> management for a page. Renders title, meta description,
 * canonical link, Open Graph and Twitter Card tags so every route is
 * consistently optimised for search engines and link previews. Pages with
 * type="article" additionally emit Article + BreadcrumbList JSON-LD.
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
  const isArticle = type === "article";
  const articleSchema = isArticle
    ? buildArticleSchema({ title, description, image, canonical })
    : null;
  const breadcrumbSchema = isArticle
    ? buildBreadcrumbSchema({ title, path, canonical })
    : null;

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

      {/* Structured data (article pages only) */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
