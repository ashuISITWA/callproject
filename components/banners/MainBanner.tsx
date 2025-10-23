
import React from "react";
import { useTranslations } from "next-intl";

export default function MainBanner() {
  const t = useTranslations("gbanner");

  return (
    <section className="block gbanner">
      <div
        className="py-[10px] bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${t("bgImage")})` }}
      >
        <div className="w-full md:w-[1140px] mx-auto px-[15px]">
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full md:w-[900px] mx-auto">
            <h6 className="text-[22px] font-semibold md:font-normal text-white md:w-[256px] py-[15px] md:py-[60px]">
              {t("title1")}
            </h6>
            <h6 className="text-[22px] font-semibold md:font-normal text-white md:w-[256px] py-[15px] md:py-[60px] text-center">
              {t("title2")}
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
