"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";


const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

type Props = {
  category?: string;
  siteKey: string; // e.g. "topChats"
};

export default function VoyeurCamsPageClient() {
  const t = useTranslations("weTested.voyeurCams");

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
                width={300}
                height={300}
                alt={t("title")}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[700px]">
          <h3 className="text-black text-[24px] md:text-[27px] font-bold">{t("listTitle")}</h3>
          <p className="text-[18px] text-black font-light">{t("listDesc")}</p>
          <ul className="text-[18px] text-black font-light list-disc pl-5">
            <li>{t("li1")}</li>
            <li>{t("li2")}</li>
            <li>{t("li3")}</li>
            <li>{t("li4")}</li>
            <li>{t("li5")}</li>
            <li>{t("li6")}</li>
          </ul>

          <h3 className="text-black text-[24px] md:text-[27px] font-bold">{t("spyTitle")}</h3>
          <p className="text-[18px] text-black font-light">{t("spyDesc")}</p>

          <h3 className="text-black text-[24px] md:text-[27px] font-bold">{t("mobileTitle")}</h3>
          <p className="text-[18px] text-black font-light">{t("mobileDesc")}</p>
        </div>
      </div>
    </section>
  );
}
