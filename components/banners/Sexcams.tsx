"use client";
import { useTranslations } from "next-intl";

interface SexcamsProps {
  pageKey: string; 
}




export default function Sexcams({ pageKey }: SexcamsProps) {
  const t = useTranslations("Banner");
  return (
    <>
      <section className="block gbanner">
        <div
          className="py-[10px] bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${t(`${pageKey}.bgImage`)})` }}
        >
          <div className="w-full mx-auto px-[15px]">
            <h6 className="text-[40px] md:text-[90px] text-white py-[15px] md:py-[60px] bannertext text-center">
            {t(`${pageKey}.title`)}
            </h6>
          </div>
        </div>
      </section>
    </>
  );
}
