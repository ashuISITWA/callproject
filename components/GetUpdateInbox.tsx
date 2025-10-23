"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;


export default function GetUpdateInbox() {
  const t = useTranslations("getUpdateInbox");

  return (
    <div className="w-full md:w-[686px] text-center mt-[50px] mx-auto bg-white rounded-md p-[15px] shadow">
      <div className="mx-auto w-[100px] mt-[-30px]">
        <img
         src={`${SERVER_URL}/special.png`}
          // src="/assets/images/special.png"
          width={100}
          height={100}
          alt="image"
        />
      </div>
      <div className="flex flex-col gap-[15px] text-center">
        <h3 className="text-black text-[20px] font-bold">
          {t("title")}
        </h3>
        <div className="flex justify-center w-full">
          <form action="" className="w-full">
            <div className="flex overflow-hidden rounded-lg w-full">
              <div className="grow">
                <input
                  type="text"
                  className="
                    w-full
                    text-[14px]
                    py-[10px]
                    px-[20px]
                    text-black
                    bg-[#fafafa]
                    border-none
                    focus:outline-none
                    focus:ring-0
                  "
                  placeholder={t("placeholder")}
                />
              </div>
              <div className="shrink-0">
                <button
                  type="button"
                  className=" text-white text-[14px] py-[10px] px-[30px] bg-black hover:bg-slate-900 hover:text-slate-200  font-bold uppercase cursor-pointer"
                >
                  {t("button")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
