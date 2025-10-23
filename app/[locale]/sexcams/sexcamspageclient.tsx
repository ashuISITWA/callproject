"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";


const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

type Props = {
  category?: string;
  siteKey: string; // e.g. "topChats"
};

export default function SexCamsPageClient({ category, siteKey }: Props) {
  const t = useTranslations("weTested.sexCams");

  return (
    <section className="block py-[40px] bg-[#fafafa]">
      <div className="w-full max-w-[1030px] mx-auto px-[15px]">
        <h2 className="text-black text-[32px] md:text-[41px] font-bold mb-[20px]">
          {t("title")}
        </h2>

        <div className="flex flex-col md:flex-row gap-5 mb-4">
          <div className="grow flex flex-col gap-3">
            <p className="text-[18px] text-black font-light">{t("paragraph1")}</p>
            <p className="text-[18px] text-black font-light">{t("paragraph2")}</p>
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
            {t("heading1")}
          </h3>
          <p className="text-[18px] text-black font-light">{t("paragraph3")}</p>
          <p className="text-[18px] text-black font-light">{t("paragraph4")}</p>
          <ul className="text-[18px] text-black font-light list-disc pl-5">
            {t.raw("list1").map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("heading2")}
          </h3>
          <p className="text-[18px] text-black font-light">{t("paragraph5")}</p>

          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("heading3")}
          </h3>
          <p className="text-[18px] text-black font-light">{t("paragraph6")}</p>
          <p className="text-[18px] text-black font-light">{t("paragraph7")}</p>

          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("heading4")}
          </h3>
          <p className="text-[18px] text-black font-light">{t("paragraph8")}</p>

          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("heading5")}
          </h3>
          <p className="text-[18px] text-black font-light">{t("paragraph9")}</p>
          <p className="text-[18px] text-black font-light">{t("paragraph10")}</p>
        </div>
      </div>
    </section>
  );
}
