import type { Metadata } from "next";
import { company, getDictionary, type Locale } from "@/content/site";

export const siteUrl = "https://delitech.tech";

export function pageMetadata(
  locale: Locale,
  options: { title?: string; description: string; path?: string },
): Metadata {
  const dict = getDictionary(locale);
  const path = options.path && options.path !== "/" ? options.path : "";
  const suffix = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const canonical = `${siteUrl}/${locale}${suffix}`;
  const homeTitle = dict.meta.title;
  const branded = options.title ? `${options.title} · ${dict.brand}` : homeTitle;

  return {
    title: options.title ? options.title : { absolute: homeTitle },
    description: options.description,
    alternates: {
      canonical,
      languages: {
        ar: `${siteUrl}/ar${suffix}`,
        en: `${siteUrl}/en${suffix}`,
        "x-default": `${siteUrl}/ar${suffix}`,
      },
    },
    openGraph: {
      title: branded,
      description: options.description,
      url: canonical,
      siteName: dict.brand,
      locale: locale === "ar" ? "ar_PS" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_PS"],
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: dict.brand }],
    },
    twitter: {
      card: "summary_large_image",
      title: branded,
      description: options.description,
      images: ["/og.png"],
    },
  };
}

export function organizationJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  const otherName = locale === "ar" ? company.name.en : company.name.ar;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${siteUrl}/#organization`,
        name: dict.brand,
        alternateName: [otherName, "Deli Tech", "Delitech"],
        url: siteUrl,
        description: dict.meta.description,
        image: `${siteUrl}/logo.png`,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#logo`,
          url: `${siteUrl}/logo.png`,
          contentUrl: `${siteUrl}/logo.png`,
          caption: dict.brand,
        },
        email: company.email,
        telephone: company.phoneTel,
        address: {
          "@type": "PostalAddress",
          addressCountry: "PS",
          addressRegion: "Palestine",
        },
        areaServed: { "@type": "Country", name: "Palestine" },
        foundingDate: company.officialYear,
        knowsLanguage: ["Arabic", "English"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: company.phoneTel,
            email: company.email,
            contactType: "customer support",
            areaServed: "PS",
            availableLanguage: ["Arabic", "English"],
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "17:00",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: dict.brand,
        url: siteUrl,
        inLanguage: ["ar", "en"],
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
}

export function jsonLdScript(locale: Locale) {
  return JSON.stringify(organizationJsonLd(locale)).replace(/</g, "\\u003c");
}
