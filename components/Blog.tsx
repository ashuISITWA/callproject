"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

import TrinityFeed from "./TrinityFeed";



export default function Blog() {
  const t = useTranslations("Disposable");
  const locale = useLocale();
  return (
    <>
      <section className="bg-[#eee] block py-[60px]">
        <div className="flex flex-col">
          <h2 className="mb-5 text-center text-black text-[29px] font-semibold">
            {t("blogTitle")}
          </h2>
          <p className="mb-10 max-w-[540px] mx-auto text-center text-[16px]">
            {t("blogDescription")}
          </p>
          <TrinityFeed posts={[]} />
          {/* <div className="max-w-[860px] mx-auto mb-5 sm:mb-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {posts.map((post, idx) => (
              <Link
                key={idx}
                href={post.href}
                className="post flex flex-col rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white overflow-hidden"
              >
                <div className="relative w-full h-[200px] bg-gray-200">
                  <Image
                    src={post.image}
                    alt={t(`blogPosts.${post.titleKey}.title`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div> 
                <div className="p-5 flex flex-col grow">
                  <h2 className="sm:text-xl font-medium mb-3">
                    {t(`blogPosts.${post.titleKey}.title`)}
                  </h2>
                  <p className="text-sm transition-transform mb-3 line-clamp-3 sm:line-clamp-none">
                    {t(`blogPosts.${post.titleKey}.description`)}
                  </p>
                  <div className="flex items-center gap-2 mt-auto text-xs text-gray-500">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span className="flex items-center">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div> */}
          <div className="text-center mt-[40px]">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center justify-center font-medium transition duration-100 rounded-3xl disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none h-12 px-5 bg-gray-200 text-black fill-black focus-visible:outline-gray-400 hover:bg-gray-300"
              type="button"
              title={t("readAllPosts")}
            >
              {t("readAllPosts")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
