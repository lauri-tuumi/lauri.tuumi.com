import type { Metadata } from "next";
import { ui } from "@/lib/translations";
import { contact } from "@/data/contact";

const BASE_URL = "https://lauri.tuumi.com";
const GOOGLE_VERIFICATION = "EhBTEivXaWO5ENPRMgOpsXS-jGO4NXLdZA2Uc8hbFEs";

export function createMetadata(lang: "en" | "fi"): Metadata {
  const t = ui[lang];
  const locale = lang === "en" ? "en_US" : "fi_FI";
  const altLocale = lang === "en" ? "fi_FI" : "en_US";

  return {
    metadataBase: new URL(BASE_URL),
    title: `Lauri Tuumi – ${t.subtitle}`,
    description: t.summary[0],
    verification: { google: GOOGLE_VERIFICATION },
    alternates: {
      canonical: lang === "en" ? "/" : "/fi",
      languages: { en: "/", fi: "/fi" },
    },
    openGraph: {
      type: "profile",
      url: lang === "en" ? "/" : "/fi",
      title: `Lauri Tuumi – ${t.subtitle}`,
      description: t.summary[0],
      siteName: "Lauri Tuumi",
      locale,
      alternateLocale: [altLocale],
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: `Lauri Tuumi – ${t.subtitle}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Lauri Tuumi – ${t.subtitle}`,
      description: t.summary[0],
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
    url: lang === "en" ? BASE_URL : `${BASE_URL}/fi`,
    jobTitle: t.subtitle,
    description: t.summary[0],
    sameAs: [contact.linkedin, "https://github.com/lauri-tuumi"],
  };
}
