"use client";
import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

type Props = {
  category?: string;
  siteKey: string; // e.g. "topChats"
};

export default function FreechatPageClient({ category, siteKey }: Props) {
  const t = useTranslations("weTested.freeChat"); // <-- connected to your JSON
  const messages = useMessages();
  const discoverList = ((messages as any)?.weTested?.freeChat?.discover_list ?? []) as string[];

  return (
    <section className="block py-[40px] bg-[#fafafa]">
      <div className="w-full max-w-[1030px] mx-auto px-[15px]">
        <h2 className="text-black text-[32px] md:text-[41px] font-bold mb-[20px]">
          {t("title")}
        </h2>
        <div className="flex flex-col md:flex-row gap-5 mb-4">
          <div className="grow flex flex-col gap-3">
            <p className="text-[18px] text-black font-light">
              {t("intro_paragraph_1")}
            </p>
            <p className="text-[18px] text-black font-light">
              {t("intro_paragraph_2")}
            </p>
          </div>
          <div className="shrink-0">
            <div className="inline-block w-[300px] rounded-md overflow-hidden">
              <img
                src={`${SERVER_URL}${t("image")}`}
                width={300}
                height={300}
                alt={t("title")}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[700px]">
          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("discover_title")}
          </h3>
          <p className="text-[18px] text-black font-light">
            {t("discover_paragraph_1")}
          </p>
          <p className="text-[18px] text-black font-light">
            {t("discover_paragraph_2")}
          </p>
          <ul className="text-[18px] text-black font-light list-disc pl-5">
            {discoverList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("gorgeous_girls_title")}
          </h3>
          <p className="text-[18px] text-black font-light">
            {t("gorgeous_girls_paragraph")}
          </p>

          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("variety_title")}
          </h3>
          <p className="text-[18px] text-black font-light">
            {t("variety_paragraph")}
          </p>

          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("top_sites_title")}
          </h3>
          <p className="text-[18px] text-black font-light">
            {t("top_sites_paragraph")}
          </p>

          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("avoid_spending_title")}
          </h3>
          <p className="text-[18px] text-black font-light">
            {t("avoid_spending_paragraph")}
          </p>
        </div>
      </div>
    </section>
  );
}
