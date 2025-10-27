"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

type Props = {
  category?: string;
  siteKey: string; // e.g. "topChats"
};


export default function FetishChatPageclient() {
  // 👇 get translations from the "weTested.fetishCams" namespace
  const t = useTranslations("weTested.fetishCams");

  return (
    <section className="block py-[40px] bg-[#fafafa]">
      <div className="w-full max-w-[1030px] mx-auto px-[15px]">
        <h2 className="text-black text-[32px] md:text-[41px] font-bold mb-[20px]">
          {t("title")}
        </h2>
        <div className="flex flex-col md:flex-row gap-5 mb-4">
          <div className="grow flex flex-col gap-3">
            <p className="text-[18px] text-black font-light">{t("intro1")}</p>
            <p className="text-[18px] text-black font-light">{t("intro2")}</p>
          </div>
          <div className="shrink-0">
            <div className="inline-block w-[300px] rounded-md overflow-hidden">
              <img
                src={`${SERVER_URL}${t("image")}`}
                className="w-full"
                width={300}
                height={300}
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-[700px]">
          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("fantasiesTitle")}
          </h3>
          <p className="text-[18px] text-black font-light">{t("fantasiesDesc")}</p>
          <p className="text-[18px] text-black font-light">{t("fetishesInclude")}</p>
          <ul className="text-[18px] text-black font-light list-disc pl-5">
            <li>{t("li1")}</li>
            <li>{t("li2")}</li>
            <li>{t("li3")}</li>
            <li>{t("li4")}</li>
            <li>{t("li5")}</li>
            <li>{t("li6")}</li>
          </ul>
          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("trustTitle")}
          </h3>
          <p className="text-[18px] text-black font-light">{t("trustDesc")}</p>
          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("desiresTitle")}
          </h3>
          <p className="text-[18px] text-black font-light">{t("desiresDesc")}</p>
          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("exploreTitle")}
          </h3>
          <p className="text-[18px] text-black font-light">{t("exploreDesc")}</p>
        </div>
      </div>
    </section>
  );
}
