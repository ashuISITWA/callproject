import SearchList from "./searchList";
import type { Metadata } from "next";
import messagesMap from "@/messages"; 
import type { AppLocale } from "@/messages"; 

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { q } = await searchParams;
  const query = q?.trim() || "";

  const safeLocale = (locale in messagesMap ? locale : "en") as AppLocale;
  const messages = messagesMap[safeLocale];

  const seoData = (messages.SEO as any)?.Search || {
    Title: "Search - Find the Best Adult Chat Sites",
    Description: "Search and discover the top adult chat sites, cam sites, and live sex chat platforms.",
    Keywords: "search adult chat, find cam sites, adult sites search"
  };

  const title = query 
    ? `Searching for: ${query} - Find the Best Adult Chat Sites`
    : seoData.Title;

  return {
    title: title,
    description: seoData.Description,
    keywords: seoData.Keywords,
    openGraph: {
      title: title,
      description: seoData.Description,
      type: "website",
      locale: safeLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: title,
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
