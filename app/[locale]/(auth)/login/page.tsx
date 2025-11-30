import LoginCard from '@/components/LoginCard'
import React from 'react'
import type { Metadata } from "next";
import { headers } from "next/headers";

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
  let pageUrl = `${BASE_URL}/login`;
  if (pathname && pathname !== "/") {
    pageUrl = `${BASE_URL}${pathname}`;
  } else {
    pageUrl = locale === "en" ? `${BASE_URL}/login` : `${BASE_URL}/${locale}/login`;
  }

  return {
    metadataBase: new URL(BASE_URL),
    title: "Login - Top Chats",
    description: "Login to access premium features and connect with live cam models.",
    openGraph: {
      type: "website",
      locale: locale,
      url: pageUrl,
      siteName: "Top Chats",
      title: "Login - Top Chats",
      description: "Login to access premium features and connect with live cam models.",
      images: [{
        url: `${BASE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Login - Top Chats",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Login - Top Chats",
      description: "Login to access premium features and connect with live cam models.",
      images: [`${BASE_URL}/images/og-image.jpg`],
    },
  };
}

export default function page() {
  return (
    <>
    <LoginCard/>
    </>
  )
}
