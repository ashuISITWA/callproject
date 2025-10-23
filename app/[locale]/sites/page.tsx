import React from 'react'
import type { Metadata } from "next";
import FullSite from '@/components/FullSite'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Sites",
    description: "Browse all top-rated live chat and cam sites reviewed for your best online experience.",
    keywords: "Chat Sites, Cam Sites, Top Chat Platforms",
    openGraph: {
      title: "Sites",
      description: "Browse all top-rated live chat and cam sites reviewed for your best online experience.",
      type: "website",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: "Sites",
      description: "Browse all top-rated live chat and cam sites reviewed for your best online experience.",
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
