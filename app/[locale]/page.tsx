import Image from "next/image";
import Shortcuts from "@/components/Shortcuts";
import WeTested from "@/components/WeTested";
import MainBanner from "@/components/banners/MainBanner";
import YouLike from "@/components/YouLike";
import Link from "next/link";
import TopchatPageClient from "./topchatpageclient";
import TopChatGrid from "./topchatgrid";
import GetUpdateInbox from "@/components/GetUpdateInbox";
import HeroBanner from "@/components/banners/HeroBanner";

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

  const seoData = messages.SEO?.Top10Chat  || {
    Title: "Top 10 chat site",
     Description: "Top 10 chat site Enjoy high-quality live shows on the top Sex Cam sites and meet real models in private chats.",
    Keywords: "Top 10 chat site, Sex Cam, Live Sex Chat, Free Sex Cams"
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



export default async function Home() {
  return (
    <>
    
    <HeroBanner pageKey="top10chat" />
      {/* <MainBanner /> */}
      <section className="block pt-[60px] pb-[30px] bg-[#fafafa]">
        <div className="w-full max-w-[1030px] mx-auto px-[15px]">
          <TopChatGrid category="top10chat" siteKey="topchat"/>
          <GetUpdateInbox />
        </div>
      </section>
      <YouLike category="top10chat"  />
      <TopchatPageClient siteKey="topChats" />
      <Shortcuts />
    </>
  );
}
