"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

type Props = {
  category?: string;
  siteKey: string; // e.g. "topChats"
};

export default function TopchatPageClient({ category, siteKey }: Props) {
  const t = useTranslations(`weTested.${siteKey}`);

  // Get list items safely from translations
  const findList = t.raw("findList") as string[];
  const opinionList = t.raw("opinionList") as string[];

  return (
    <section className="block py-[40px] bg-[#fafafa]">
      <div className="w-full max-w-[1030px] mx-auto px-[15px]">
        {/* --- Heading & Intro --- */}
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

        {/* --- Section 1: Find the Best Live Cam Sites --- */}
        <div className="flex flex-col gap-4 w-full max-w-[700px]">
          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("findTitle")}
          </h3>
          <p className="text-[18px] text-black font-light">{t("findDesc1")}</p>
          <p className="text-[18px] text-black font-light">{t("findDesc2")}</p>

          <ul className="text-[18px] text-black font-light list-disc pl-5">
            {findList?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* --- Section 2: Browse Our Live Cam Reviews --- */}
          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("reviewTitle")}
          </h3>
          <p className="text-[18px] text-black font-light">{t("reviewDesc")}</p>

          {/* --- Section 3: Give Us Your Opinion --- */}
          <h3 className="text-black text-[24px] md:text-[27px] font-bold">
            {t("opinionTitle")}
          </h3>
          <p className="text-[18px] text-black font-light">{t("opinionDesc1")}</p>
          <p className="text-[18px] text-black font-light">{t("opinionDesc2")}</p>

          <ul className="text-[18px] text-black font-light list-disc pl-5">
            {opinionList?.map((item, i) => (
              <li key={i}>
                {i === 0 ? (
                  <Link href="/contact" className="text-primary">
                    {item}
                  </Link>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
