import React from "react";
import Shortcuts from "@/components/Shortcuts";
import WeTested from "@/components/WeTested";
import YouLike from "@/components/YouLike";
import HeroBanner from "@/components/banners/HeroBanner";

import FetishChatPageclient from "./fetishchatpageclient";
import FetishChatGrid from "./fetishchatgrid";

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

  const seoData = messages.SEO?.FetishChat  || {
    Title: "Fetish Chat",
 Description: "Discover your fantasies with Fetish Chat — the best places to explore kink and live fetish cams.",
    Keywords: "Fetish Chat, Kink Chat, Fetish Live Cams"
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

export default function Page() {
  return (
    <>
      <HeroBanner pageKey="fetishChat" />
      <FetishChatGrid category="fetish" siteKey="fetish"/>
      <YouLike category="fetish"/>
      <FetishChatPageclient />
      <Shortcuts />
    </>
  );
}
