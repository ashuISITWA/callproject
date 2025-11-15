import SinglePage from "@/components/SinglePage";
import type { Metadata } from "next";
import linksData from "@/messages/links.json";
import messagesMap from "@/messages";
import type { AppLocale } from "@/messages";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// Helper function to capitalize text
function capitalizeText(text: string): string {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale = (locale in messagesMap ? locale : "en") as AppLocale;

  // Get metadata from links.json (priority source)
  const linkData = linksData.links[slug as keyof typeof linksData.links];
  const linkMetadata = linkData?.metadata;

  // Priority: links.json metadata > translated content > fallback
  const siteTitle = linkMetadata?.title || slug;
  const siteDescription = linkMetadata?.description || 
    `Discover ${siteTitle} - Premium adult cam site with live performers and interactive chat.`;

  // Get translated site content if available (for additional context)
  const messages = messagesMap[safeLocale];
  const slugMessages = (messages as any)?.singlePageBySlug?.[slug] || {};
  
  // Use links.json title/description as primary, translated as fallback
  const finalTitle = linkMetadata?.title || slugMessages?.title || slug;
  const finalDescription = linkMetadata?.description || 
    slugMessages?.excerpt || 
    slugMessages?.overview || 
    siteDescription;

  // Capitalize the title
  const capitalizedTitle = capitalizeText(finalTitle);
  const titleWithSuffix = `${capitalizedTitle} - #1 Video Chat with Girls | Official Site`;

  return {
    title: titleWithSuffix,
    description: finalDescription,
    keywords: `${capitalizedTitle}, ${siteTitle}, adult cam, live chat, cam site, ${linkMetadata?.category || "adult"}`,
    openGraph: {
      title: titleWithSuffix,
      description: finalDescription,
      type: "website",
      locale: safeLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: titleWithSuffix,
      description: finalDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SingleSlugPage({ params }: Props) {
  const { slug } = await params;
  return <SinglePage pageKey={slug} title={slug} />;
}


