import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, DollarSign } from "lucide-react";

import { sexSites } from "@/data/sexSites";
import SexPost from "@/components/SexPost";
import GetUpdateInbox from "./GetUpdateInbox";

export default function VerticalList() {
  return (
    <>
      <section className="block pt-[60px] pb-[30px] bg-[#fafafa]">
        <div className="w-full max-w-[1030px] mx-auto px-[15px]">
          <h2 className="text-black font-bold text-[32px] md:text-[41px] text-center mb-[20px]">
            Top 10 Chat Sites 2025
          </h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-[20px]">
            {sexSites.map((site, i) => (
              <SexPost
                key={site.id}
                index={i}
                title={site.title}
                logo={site.logo}
                hero={site.hero}
                reviewUrl={site.reviewUrl}
                visitUrl={site.visitUrl}
                features={site.features}
              />
            ))}
          </div>
          <GetUpdateInbox/>
        </div>
      </section>
    </>
  );
}
