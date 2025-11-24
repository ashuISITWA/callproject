import React from "react";
import Shortcuts from "@/components/Shortcuts";
import SitesSlider from "@/components/SitesSlider";
import HeroBanner from "@/components/banners/HeroBanner";

import type { Metadata } from "next";
import messagesMap from "@/messages";
import type { AppLocale } from "@/messages";
import CamGrid from "@/components/CamGrid";
import CategoryContent from "@/components/CategoryContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const safeLocale = (locale in messagesMap ? locale : "en") as AppLocale;
  const messages = messagesMap[safeLocale];

  // Get SEO data from indexPage.sexCam.seo (messages/en.json)
  const localization = messages as any;
  const categorySeoData = localization.indexPage?.sexCam?.seo || {};
  const seoData = localization.indexPage?.seo || {};
  const openGraphData = categorySeoData.openGraph || seoData.openGraph || {};

  // Generate languages object for alternates from available locales
  const languages: Record<string, string> = {};
  Object.keys(messagesMap).forEach((loc) => {
    languages[loc] = loc === "en" ? "/sexcams" : `/${loc}/sexcams`;
  });

  // Generate canonical URL
  const canonical = locale === "en" ? "/sexcams" : `/${locale}/sexcams`;

  // Replace {year} with current year in title
  const currentYear = new Date().getFullYear();
  const finalTitle = (categorySeoData.title || seoData.title || "Sex Cams").replace("{year}", currentYear.toString());
  const finalOpenGraphTitle = (openGraphData.title || categorySeoData.title || seoData.title || "Sex Cams").replace("{year}", currentYear.toString());

  return {
    metadataBase: categorySeoData.metadataBase ? new URL(categorySeoData.metadataBase) : (seoData.metadataBase ? new URL(seoData.metadataBase) : new URL("https://coomeets.vercel.app")),
    title: finalTitle,
    description: categorySeoData.description || seoData.description || "",
    openGraph: {
      type: openGraphData.type || "website",
      title: finalOpenGraphTitle,
      description: openGraphData.description || categorySeoData.description || seoData.description || "",
      images: openGraphData.image ? [openGraphData.image] : [],
      url: openGraphData.url || "",
      siteName: openGraphData.siteName || "Top Chats",
      locale: safeLocale,
    },
    alternates: {
      canonical: canonical,
      languages: languages,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page() {
  // const sites = await getSitesByCategory("sexcam-sites");
  return (
    <>
      <HeroBanner pageKey="sexCams" />
      <CamGrid category="sexcam" siteKey="sexCams" />
      <SitesSlider category="sexcam" />
      <CategoryContent category="sexcam" siteKey="sexCams" />
      <Shortcuts />
    </>
  );
}
