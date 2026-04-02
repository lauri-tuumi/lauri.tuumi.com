import type { MetadataRoute } from "next";
import { zLang } from "@/lib/types";
import { BASE_URL } from "@/lib/seo";

export const dynamic = "force-static";

function langUrl(lang: string) {
  return `${BASE_URL}${lang === "en" ? "/" : `/${lang}/`}`;
}

const alternateLanguages = Object.fromEntries(
  zLang.options.map((lang) => [lang, langUrl(lang)])
);

export default function sitemap(): MetadataRoute.Sitemap {
  return zLang.options.map((lang) => ({
    url: langUrl(lang),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: alternateLanguages },
  }));
}
