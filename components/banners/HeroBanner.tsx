"use client";
import { Heading1 } from "lucide-react";
import { useTranslations } from "next-intl";

interface SexcamsProps {
  pageKey: string;
  subtitle?: string;
  titleProps?: Record<string, string>;
}

export default function HeroBanner({ pageKey, subtitle, titleProps }: SexcamsProps) {
  const t = useTranslations("Banner");
  return (
    <>
      <section className="block bg-black/3">
        <div
          className="py-[40px] md:py-[60px]">
          <div className="w-full mx-auto px-[15px]">
            <div className="flex flex-col gap-[15px]">
              <h1 className="md:text-[40px] lg:text-[80px] text-black font-bold text-center capitalize">
                {t(`${pageKey}.title`, titleProps)}
              </h1>
              <p className="text-[14px] md:text-[20px] text-black text-center">
                {subtitle || t(`${pageKey}.subtitle`)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
