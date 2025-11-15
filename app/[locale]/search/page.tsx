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

  // If query length is greater than 0, insert it into meta tags
  const hasQuery = query.length > 0;
  
  const title = hasQuery 
    ? `${query} - ${seoData.Title}`
    : seoData.Title;

  const description = hasQuery
    ? `Search results for "${query}". ${seoData.Description}`
    : seoData.Description;

  const keywords = hasQuery
    ? `${query}, ${seoData.Keywords}`
    : seoData.Keywords;

  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      type: "website",
      locale: safeLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
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
