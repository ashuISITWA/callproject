import React from "react";
import Shortcuts from "@/components/Shortcuts";
import WeTested from "@/components/WeTested";
import YouLike from "@/components/YouLike";
import HeroBanner from "@/components/banners/HeroBanner";
import VerticalList from "@/components/VerticalList";
import RandomChatPageclient from "./randomchatpageclient";
import RandomChatGrid from "./randomchatgrid";


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

  const seoData = messages.SEO?.RandomChat  || {
    Title: "Random Chat",
    Description: "Meet strangers from around the world instantly with Random Chat — free and fun connections anytime.",
    Keywords: "Random Chat, Chat with Strangers, Free Random Video Chat"
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
      <HeroBanner pageKey="randomChat" />
      <RandomChatGrid category="random" siteKey="random"/>
      <YouLike category="random"/>
      <RandomChatPageclient/>
      <Shortcuts />
    </>
  );
}
