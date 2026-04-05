import type { MetadataRoute } from "next";
import { zLang, type Lang } from "@/lib/types";
import { BASE_URL, getLangPath } from "@/lib/seo";

export const dynamic = "force-static";

function langUrl(lang: Lang) {
  return `${BASE_URL}${getLangPath(lang).slice(1)}`;
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
