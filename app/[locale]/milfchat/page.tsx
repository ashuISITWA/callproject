import React from "react";
import Shortcuts from "@/components/Shortcuts";
import WeTested from "@/components/WeTested";
import YouLike from "@/components/YouLike";
import HeroBanner from "@/components/banners/HeroBanner";
import VerticalList from "@/components/VerticalList";
import MilfchatPageclient from "./milfchatpageclient";
import MilfChatGrid from "./milfchatgrid";

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

  const seoData = messages.SEO?.MilfChat  || {
    Title: "Milf Chat",
    Description: "Join the best Milf Chat sites and connect with mature women in live chat and cam rooms.",
    Keywords: "Milf Chat, Mature Chat, Milf Live Cams"
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
      <HeroBanner pageKey="milfChat" />
      <MilfChatGrid category="milfchat" siteKey="milfChat"/>
      <YouLike category="milfchat"/>
      <MilfchatPageclient siteKey="milfCams"  />
      <Shortcuts />
    </>
  );
}
