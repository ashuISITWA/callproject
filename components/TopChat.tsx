import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DollarSign, Check } from "lucide-react";
import { camSites } from "@/data/camSites";
import CamPost from "@/components/CamPost";
import GetUpdateInbox from "./GetUpdateInbox";
import TopChatGrid from "@/app/[locale]/topchatgrid";




export default function TopChat() {
  return (
    <>
      <section className="block pt-[60px] pb-[30px] bg-[#fafafa]">
        <div className="w-full max-w-[1030px] mx-auto">
          <h2 className="text-black font-bold text-[32px] md:text-[41px] text-center mb-[20px]">
            Top 10 Chat Sites 2025
          </h2>
      
          <TopChatGrid siteKey="topChats" />
          <GetUpdateInbox />
        </div>
      </section>
    </>
  );
}
