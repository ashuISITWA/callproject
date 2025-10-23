"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface WeTestedProps {
  pageKey: "topChats" | "sexCams";
}
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function WeTested({ pageKey }: WeTestedProps) {
  const t = useTranslations("weTested");



  return (
    <section className="block py-[40px] bg-[#fafafa]">
      <div className="w-full max-w-[1030px] mx-auto px-[15px]">
        <h2 className="text-black text-[32px] md:text-[41px] font-bold mb-[20px]">
        {t(`${pageKey}.heading`)}
        </h2>
        <div className="flex flex-col md:flex-row gap-5 mb-4">
          <div className="grow flex flex-col gap-3">
          <p className="text-[18px] text-black font-light">
              {t(`${pageKey}.paragraph1`)}
            </p>
            <p className="text-[18px] text-black font-light">
              {t(`${pageKey}.paragraph2`)}
            </p>
          </div>
          <div className="shrink-0">
            <div className="inline-block w-[300px] rounded-md overflow-hidden">
            <img
              src={`${SERVER_URL}${t(`${pageKey}.image`)}`} 
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
    {t(`${pageKey}.sectionHeading1`)}
  </h3>
  <p className="text-[18px] text-black font-light">
    {t(`${pageKey}.sectionParagraph1`)}
  </p>
  <p className="text-[18px] text-black font-light">
    {t(`${pageKey}.sectionParagraph2`)}
  </p>
  <ul className="text-[18px] text-black font-light list-disc pl-5">
    <li>{t(`${pageKey}.sectionList1`)}</li>
    <li>{t(`${pageKey}.sectionList2`)}</li>
    <li>{t(`${pageKey}.sectionList3`)}</li>
    <li>{t(`${pageKey}.sectionList4`)}</li>
    <li>{t(`${pageKey}.sectionList5`)}</li>
  </ul>

  <h3 className="text-black text-[24px] md:text-[27px] font-bold">
    {t(`${pageKey}.sectionHeading2`)}
  </h3>
  <p className="text-[18px] text-black font-light">
    {t(`${pageKey}.sectionParagraph3`)}
  </p>

  <h3 className="text-black text-[24px] md:text-[27px] font-bold">
    {t(`${pageKey}.sectionHeading3`)}
  </h3>
  <p className="text-[18px] text-black font-light">
    {t(`${pageKey}.sectionParagraph4`)}
  </p>
  <p className="text-[18px] text-black font-light">
    {t(`${pageKey}.sectionParagraph5`)}
  </p>
  <ul className="text-[18px] text-black font-light list-disc pl-5">
    <li>
      <Link href="/" className="text-primary">{t(`${pageKey}.sectionList6`)}</Link>
    </li>
    <li>
      <Link href="/" className="text-primary">{t(`${pageKey}.sectionList7`)}</Link>
    </li>
    <li>{t(`${pageKey}.sectionList8`)}</li>
  </ul>
</div>
      </div>
    </section>
  );
}
