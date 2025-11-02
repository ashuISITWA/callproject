import React from "react";
import Shortcuts from "@/components/Shortcuts";
import WeTested from "@/components/WeTested";
import YouLike from "@/components/YouLike";
import HeroBanner from "@/components/banners/HeroBanner";

import FreechatPageClient from "./freechatpageclient";
import FreeChatGrid from "./freechatgrid";

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

  const seoData = messages.SEO?.FreeChat  || {
    Title: "Free Chat",
     Description: "Chat for free on the top live chat platforms — no signup, no fees, just instant fun conversations.",
    Keywords: "Free Chat, Free Video Chat, Free Online Chat Rooms"
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
      <HeroBanner pageKey="freeChat" />
      <FreeChatGrid category="freecams" siteKey="topsites" />
      <YouLike  category="freecams" />
      <FreechatPageClient siteKey="freeChat" />
      <Shortcuts />
    </>
  );
}
