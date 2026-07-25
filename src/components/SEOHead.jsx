
import { Head } from "vite-react-ssg";
import { SITE_URL } from "../data/locations";

/**
 * SEOHead - sets per-page <title>, meta description, canonical,
 * Open Graph, Twitter Card, and optional JSON-LD structured data.
 *
 * @param {object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} [props.canonical] - Canonical URL
 * @param {string} [props.ogImage] - OG image URL (defaults to SITE_URL/og-image.png)
 * @param {object|object[]} [props.schema] - JSON-LD schema(s)
 * @param {Array<{name:string, url:string}>} [props.breadcrumbs] - Breadcrumb list for BreadcrumbList schema
 */
export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = `${SITE_URL}/og-image.png`,
  schema,
  breadcrumbs,
}) {
  const schemaItems = Array.isArray(schema) ? schema : schema ? [schema] : [];

  // Build breadcrumb schema if breadcrumbs provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemaItems.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: crumb.url.startsWith("http") ? crumb.url : `${SITE_URL}${crumb.url}`,
      })),
    });
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content="Adapt Physiotherapy" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {schemaItems.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Head>
  );
}