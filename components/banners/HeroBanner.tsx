"use client";
import { useTranslations } from "next-intl";

interface SexcamsProps {
  pageKey: string; 
  subtitle?: string;
}




export default function HeroBanner({ pageKey, subtitle }: SexcamsProps) {
  const t = useTranslations("Banner");
  return (
    <>
      <section className="block bg-black/3">
        <div
          className="py-[10px]"
          // style={{ backgroundImage: `url(${t(`${pageKey}.bgImage`)})` }}
        >
          <div className="w-full mx-auto px-[15px]">
            <h6 className="md:text-[40px] lg:text-[80px] text-black py-[15px] md:py-[60px] font-bold text-center capitalize">
            {t(`${pageKey}.title`)} {subtitle}
            </h6>
          </div>
        </div>
      </section>
    </>
  );
}
