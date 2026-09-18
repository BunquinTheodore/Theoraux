import type { Metadata } from "next";

export const siteUrl = "https://theoraux.com";
export const siteName = "Theoraux";
export const siteTitle = "Theoraux | Custom Software & n8n Automation Studio";
export const siteDescription =
  "Theoraux is a Philippines-based software studio building custom websites, mobile apps, and n8n workflow automations for businesses worldwide.";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
}

export function createPageMetadata({
  title,
  description,
  path,
  image = "/og-image.png",
  type = "website",
  publishedTime,
  authors,
}: PageMetadataOptions): Metadata {
  const brandedTitle = path === "/" ? title : `${title} | ${siteName}`;

  return {
    title: { absolute: brandedTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: absoluteUrl(path),
      siteName,
      locale: "en_PH",
      title: brandedTitle,
      description,
      images: [{ url: image, alt: brandedTitle }],
      ...(type === "article" ? { publishedTime, authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [image],
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/brand-logo.svg"),
        width: 256,
        height: 256,
      },
      description: siteDescription,
      email: "bunquintheodore@gmail.com",
      telephone: "+639629935762",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PH",
      },
      sameAs: [
        "https://www.linkedin.com/company/112286976",
        "https://www.facebook.com/profile.php?id=61582763437544",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      alternateName: ["THEORAUX", "theoraux.com"],
      url: absoluteUrl("/"),
      description: siteDescription,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};
