import React from 'react'
import type { Metadata } from "next";
import { headers } from "next/headers";
import FullSite from '@/components/FullSite'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Generate full page URL dynamically
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://x-chats.com";
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  
  // Use pathname if available, otherwise construct from locale
  let pageUrl = `${BASE_URL}/sites`;
  if (pathname && pathname !== "/") {
    pageUrl = `${BASE_URL}${pathname}`;
  } else {
    pageUrl = locale === "en" ? `${BASE_URL}/sites` : `${BASE_URL}/${locale}/sites`;
  }

  return {
    metadataBase: new URL(BASE_URL),
    title: "Sites",
    description: "Browse all top-rated live chat and cam sites reviewed for your best online experience.",
    keywords: "Chat Sites, Cam Sites, Top Chat Platforms",
    openGraph: {
      type: "website",
      locale: locale,
      url: pageUrl,
      siteName: "Top Chats",
      title: "Sites",
      description: "Browse all top-rated live chat and cam sites reviewed for your best online experience.",
      images: [{
        url: `${BASE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Sites",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Sites",
      description: "Browse all top-rated live chat and cam sites reviewed for your best online experience.",
      images: [`${BASE_URL}/images/og-image.jpg`],
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
    <FullSite/>
    </>
  )
}
