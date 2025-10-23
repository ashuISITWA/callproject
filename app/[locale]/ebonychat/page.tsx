import React from "react";
import Shortcuts from "@/components/Shortcuts";
import WeTested from "@/components/WeTested";
import YouLike from "@/components/YouLike";
import HeroBanner from "@/components/banners/HeroBanner";
import VerticalList from "@/components/VerticalList";
import EbonychatPageclient from "./ebonychatpageclient";
import EbonyChatGrid from "./ebonychatgrid";

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

  const seoData = messages.SEO?.EbonyChat  || {
    Title: "Ebony Chat",
   Description: "Connect with stunning Black models and join exciting Ebony Chat rooms for free live experiences.",
    Keywords: "Ebony Chat, Black Chat, Ebony Live Cams"
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
      <HeroBanner pageKey="ebonyChat" />
      <EbonyChatGrid category="ebony" siteKey="ebonyChat"/>
      <YouLike category="ebony"/>
      <EbonychatPageclient siteKey="ebonyChat" />
      <Shortcuts />
    </>
  );
}
