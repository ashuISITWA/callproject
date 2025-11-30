import SignupCard from '@/components/SignupCard'
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
  let pageUrl = `${BASE_URL}/signup`;
  if (pathname && pathname !== "/") {
    pageUrl = `${BASE_URL}${pathname}`;
  } else {
    pageUrl = locale === "en" ? `${BASE_URL}/signup` : `${BASE_URL}/${locale}/signup`;
  }

  return {
    metadataBase: new URL(BASE_URL),
    title: "Sign Up - Top Chats",
    description: "Create an account to access premium features and connect with live cam models.",
    openGraph: {
      type: "website",
      locale: locale,
      url: pageUrl,
      siteName: "Top Chats",
      title: "Sign Up - Top Chats",
      description: "Create an account to access premium features and connect with live cam models.",
      images: [{
        url: `${BASE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Sign Up - Top Chats",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Sign Up - Top Chats",
      description: "Create an account to access premium features and connect with live cam models.",
      images: [`${BASE_URL}/images/og-image.jpg`],
    },
  };
}

export default function page() {
  return (
    <>
    <SignupCard/>
    </>
  )
}
