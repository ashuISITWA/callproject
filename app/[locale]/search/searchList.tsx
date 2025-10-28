"use client";
import Image from "next/image";
import Link from "next/link";
import { Check, DollarSign, Crown } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useTranslations, useLocale, useMessages } from "next-intl";
import camSites from "@/data/sites.json";
import HeroBanner from "@/components/banners/HeroBanner";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

// Map search terms to category keywords
const categoryMappings: Record<string, string[]> = {
  "sex chat sites": ["sexcam", "sex"],
  "mobile sex cams": ["sexcam", "mobile"],
  "adult chat": ["sexcam", "adult"],
  "chat room sites": ["chat", "room"],
  "big tits chat": ["big", "tits", "bbw"],
  "bdsm sites": ["fetish", "bdsm"],
  "roulette chat sites": ["random", "roulette"],
  "webcam chat sites": ["webcam", "chat"],
  "cam girls": ["sexcam", "cam"],
  "asian chat sites": ["asian"],
  "lesbian chat": ["lesbian"],
  "latina chat": ["latina"],
  "hairy cams": ["hairy"],
  "amateur chat": ["amateur"],
  "transsexual cams": ["transsexual", "trans"],
  "gay chat sites": ["gay"],
  "webcam job sites": ["webcam", "job"],
  "anal chat": ["anal"],
  "smoking chat sites": ["smoking"],
  "masturbation chat": ["masturbation"],
  "arab chat": ["arab"],
  "dirty talk chat": ["dirty", "talk"],
  "toy chat": ["toy"],
  "indian chat sites": ["indian"],
  "findom sites": ["findom"],
  "foot fetish sites": ["foot", "fetish"],
};

export default function searchList() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const t = useTranslations("SearchPage");
  const tr = useTranslations();
  const messages = useMessages(); // ✅ added this
  const query = (searchParams.get("q") || "").trim();
  const normalized = query.toLowerCase();
  const searchWords = normalized.split(/\s+/).filter(Boolean);

  // Get category keywords for the search query
  const categoryKeywords = categoryMappings[normalized] || [];

  const results = normalized
    ? camSites.filter((site) => {
        const haystack = [site.title, site.slug, ...(site.categories || [])]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        // Check if any category keyword matches OR if search words match
        const categoryMatch = categoryKeywords.some((keyword) =>
          haystack.includes(keyword)
        );
        const wordMatch = searchWords.some((word) => haystack.includes(word));

        return categoryMatch || wordMatch;
      })
    : [];

  return (
    <>
      <section className="block bg-black/3">
        <div className="py-[40px] md:py-[60px]">
          <div className="w-full mx-auto px-[15px]">
            <div className="flex flex-col gap-[15px]">
              <h1 className="md:text-[40px] lg:text-[80px] text-black font-bold text-center capitalize">
                {query ? `Searching for: ${query}` : t("searchBanner.title")}
              </h1>
              <p className="text-[20px] text-black text-center">
                {query ? t("showing", { query }) : t("searchBanner.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="block py-[40px] bg-[#fafafa] min-h-[80vh]">
        <div className="w-full max-w-[1030px] mx-auto px-[15px]">
          {/* <div className="mb-5">
            <h1 className="text-[22px] font-semibold text-black">
              {t("title", { count: results.length })}
            </h1>
            <p className="text-[14px] text-slate-600">
              {t("showing", { query })}
            </p>
          </div> */}

          {results.length === 0 ? (
            <div className="text-[14px] text-slate-700">
              {query ? t("noResults") : t("noQuery")}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {results.map((site, index) => {
                const slugMessages =
                  messages?.singlePageBySlug?.[site.slug] || {};

                // Merge features: prefer slugMessages.features if it's an array
                const siteFeatures = Array.isArray(slugMessages?.features)
                  ? slugMessages.features
                  : [];

                const performers =
                  (slugMessages?.performers as string) ||
                  site.performers ||
                  "10,000+ active users";

                return (
                  <div
                    key={site.id ?? index}
                    className="flex flex-wrap gap-4 items-center bg-white py-[15px] px-[20px] rounded-md grow md:grow-0 md:basis-[calc(25%-1rem)] justify-center md:justify-between shadow"
                  >
                    {/* Thumbnail with index */}
                    <div className="grow md:grow-0 md:basis-[300px]">
                      <div className="aspect-video w-full rounded-md overflow-hidden relative">
                        <h2 className="text-black aspect-square w-[40px] absolute top-1/2 left-0 transform -translate-y-1/2 z-[3] bg-yellow-500 rounded-r-full text-center leading-[35px] font-semibold text-[14px] grid place-items-center">
                          <span className="relative">
                            {index === 0 && (
                              <Crown
                                size={13}
                                className="absolute top-[-2px] left-1/2 -translate-x-1/2"
                              />
                            )}
                            <span>{index + 1}</span>
                          </span>
                        </h2>
                        <img
                          src={`${SERVER_URL}${site.hero}`}
                          alt={site.title}
                          width={500}
                          height={281}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Logo + review link */}
                    <div className="shrink-0 w-[200px] text-center">
                      <div className="h-[30px] mx-auto table">
                        <img
                          src={`${SERVER_URL}${site.logo}`}
                          width={192}
                          height={50}
                          alt={`${site.title} logo`}
                          className="h-full mx-auto"
                        />
                      </div>
                      <Link
                        href={`/${locale}/sites/${site.slug}`}
                        className="text-black underline uppercase text-[12px] hover:text-[var(--primary)]"
                      >
                        {t("readReview")}
                      </Link>
                    </div>

                    {/* Feature list */}
                    <div className="grow">
                      <div className="flex flex-col mx-auto w-auto">
                        {siteFeatures
                          .slice(0, 3)
                          .map((feature: string, i: number) => (
                            <div key={i} className="flex gap-1 items-center">
                              <Check size={13} />
                              <span className="text-[12px] text-black capitalize truncate w-[180px]">
                                {feature}
                              </span>
                            </div>
                          ))}

                        {siteFeatures[3] && (
                          <div className="flex gap-1 items-center">
                            <DollarSign size={13} className="text-yellow-500" />
                            <span className="text-[12px] text-black capitalize truncate w-[180px]">
                              {siteFeatures[3]}
                            </span>
                          </div>
                        )}

                        {performers && (
                          <div className="w-auto self-start flex gap-2 items-center border border-green-500 py-[2px] px-[6px] rounded-full mx-auto md:ml-0 mt-3">
                            <span className="bg-green-500 aspect-square h-[8px] rounded-full"></span>
                            <span className="text-[12px] text-green-500 truncate max-w-[180px]">
                              {performers} {tr("performersText")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Visit button */}
                    <div className="shrink-0">
                      <Link
                        href={site.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[13px] text-white uppercase font-medium rounded-md bg-black text-center py-[12px] px-[30px]"
                      >
                        {t("visit", { title: site.title })}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-8">
            <Link
              href={`/${locale}/`}
              className="text-[13px] text-black underline"
            >
              {t("backToHome")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
