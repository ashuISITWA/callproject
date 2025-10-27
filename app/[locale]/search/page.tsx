import SearchList from "./searchList";
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

  const seoData = (messages.SEO as any)?.Search || {
    Title: "Search - Find the Best Adult Chat Sites",
    Description: "Search and discover the top adult chat sites, cam sites, and live sex chat platforms.",
    Keywords: "search adult chat, find cam sites, adult sites search"
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

export default function SearchPage() {
  return (
    <>
      <SearchList />
    </>
  );
}
