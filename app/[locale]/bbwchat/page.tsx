import React from "react";
import Shortcuts from "@/components/Shortcuts";
import WeTested from "@/components/WeTested";
import YouLike from "@/components/YouLike";
import HeroBanner from "@/components/banners/HeroBanner";
import VerticalList from "@/components/VerticalList";
import BbwchatPageclient from "./bbwchatpageclient";
import BbwChatGrid from "./bbwchatgrid";

import type { Metadata } from "next";
import messagesMap from "@/messages"; 
import type { AppLocale } from "@/messages"; 

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const { locale } = awaitedParams;

  const safeLocale = (locale in messagesMap ? locale : "en") as AppLocale;
  const messages = messagesMap[safeLocale];

  const seoData = messages.SEO?.BbwChat  || {
    Title: "BBW Chat",
    Description: "Meet and chat live with beautiful BBW models in the best BBW Chat rooms online.",
    Keywords: "BBW Chat, Plus Size Chat, BBW Live Cams"
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
      <HeroBanner pageKey="bbwChat" />
      <BbwChatGrid category="bbwt" siteKey="bbwChat"/>
      <YouLike  category="bbw"/>
      <BbwchatPageclient siteKey="bbwChat" />
      <Shortcuts />
    </>
  );
}
