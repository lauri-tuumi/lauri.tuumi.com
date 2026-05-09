import type { MetadataRoute } from "next";
import { zLang } from "@/lib/types";
import { getLangUrl } from "@/lib/seo";

export const dynamic = "force-static";

const alternateLanguages = Object.fromEntries(
  zLang.options.map((lang) => [lang, getLangUrl(lang)])
);

export default function sitemap(): MetadataRoute.Sitemap {
  return zLang.options.map((lang) => ({
    url: getLangUrl(lang),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: alternateLanguages },
  }));
}
