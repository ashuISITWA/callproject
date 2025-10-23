import React from "react";
import Shortcuts from "@/components/Shortcuts";
import WeTested from "@/components/WeTested";
import YouLike from "@/components/YouLike";
import HeroBanner from "@/components/banners/HeroBanner";
import VerticalList from "@/components/VerticalList";
import SexCamPageClient from "./sexcamspageclient";
import SexCamsGrid from "./sexcamsgrid";
import { getSitesByCategory } from "@/lib/sites";
import SiteCard from "@/components/SiteCard";





import type { Metadata } from "next";
import messagesMap from "@/messages"; 
import type { AppLocale } from "@/messages"; 

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const safeLocale = (locale in messagesMap ? locale : "en") as AppLocale;
  const messages = messagesMap[safeLocale];

  const seoData = messages.SEO?.SexCam  || {
    Title: "Sex Cam",
     Description: "Enjoy high-quality live shows on the top Sex Cam sites and meet real models in private chats.",
    Keywords: "Sex Cam, Live Sex Chat, Free Sex Cams"
  };

  return {
    title: seoData.Title,
    description: seoData.Description,
    keywords: seoData.Keywords,
    openGraph: {
      title: seoData.Title,
      description: seoData.Description,
      type: "website",
      locale: safeLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.Title,
      description: seoData.Description,
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
      <SexCamsGrid category="sexcam" />

      {/* {sites.map((site) => (
        <SiteCard key={site.id} site={site} />
      ))} */}

      <YouLike category="sexcam"  />
      <SexCamPageClient siteKey="sexCams" />
      <Shortcuts />
    </>
  );
}
