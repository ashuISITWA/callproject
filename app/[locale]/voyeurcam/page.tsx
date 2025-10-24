import React from "react";
import Shortcuts from "@/components/Shortcuts";
import WeTested from "@/components/WeTested";
import YouLike from "@/components/YouLike";
import HeroBanner from "@/components/banners/HeroBanner";

import VoyeurCamPageclient from "./voyeurcampageclient";
import VoyeurCamGrid from "./voyeurcamgrid";

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

  const seoData = messages.SEO?.VoyeurCam  || {
    Title: "Voyeur Cam",
    Description: "Watch private moments live on Voyeur Cam and discover the best voyeur cam sites online.",
    Keywords: "Voyeur Cam, Voyeur Sites, Live Voyeur Cameras"
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
      <HeroBanner pageKey="voyeurCam" />
      <VoyeurCamGrid category="voyeur" siteKey="voyeur"/>
      <YouLike category="voyeur"/>
      <VoyeurCamPageclient/>
      <Shortcuts />
    </>
  );
}
