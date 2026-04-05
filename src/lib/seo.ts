import type { Metadata } from "next";
import { ui } from "@/lib/translations";
import { contact } from "@/data/contact";

export const BASE_URL = "https://lauri.tuumi.com";
const GOOGLE_VERIFICATION = "EhBTEivXaWO5ENPRMgOpsXS-jGO4NXLdZA2Uc8hbFEs";

export function getLangPath(lang: "en" | "fi"): "/" | "/fi/" {
  return lang === "en" ? "/" : "/fi/";
}

export function createMetadata(lang: "en" | "fi"): Metadata {
  const t = ui[lang];
  const locale = lang === "en" ? "en_US" : "fi_FI";
  const altLocale = lang === "en" ? "fi_FI" : "en_US";
  const path = getLangPath(lang);

  return {
    metadataBase: new URL(BASE_URL),
    title: `Lauri Tuumi – ${t.subtitle}`,
    description: t.metaDescription,
    verification: { google: GOOGLE_VERIFICATION },
    alternates: {
      canonical: path,
      languages: { en: "/", fi: "/fi/" },
    },
    openGraph: {
      type: "profile",
      url: path,
      title: `Lauri Tuumi – ${t.subtitle}`,
      description: t.metaDescription,
      siteName: "Lauri Tuumi",
      locale,
      alternateLocale: [altLocale],
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: `Lauri Tuumi – ${t.subtitle}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Lauri Tuumi – ${t.subtitle}`,
      description: t.metaDescription,
      images: ["/opengraph-image.png"],
    },
  };
}

export function createJsonLd(lang: "en" | "fi"): object {
  const t = ui[lang];
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lauri Tuumi",
    url: `${BASE_URL}${getLangPath(lang).slice(1)}`,
    jobTitle: t.subtitle,
    description: t.metaDescription,
    sameAs: [contact.linkedin, "https://github.com/lauri-tuumi"],
  };
}
