"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";

interface FeedPost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

export default function TrinityFeed({ posts }: { posts: FeedPost[] }) {
  const t = useTranslations("Disposable");
  const locale = useLocale();

  // ❗️State to track how many posts to show initially 4
  const [visibleCount, setVisibleCount] = useState(4);

  if (!posts || posts.length === 0) {
    return (
      <section className="bg-[#eee] py-[60px] text-center">
        <p>No posts available.</p>
      </section>
    );
  }

  const showMore = () => {
    // Increase by 4 each click (or set to posts.length to show all at once)
    setVisibleCount((prev) => Math.min(prev + 4, posts.length));
  };

  return (
    <section className="bg-[#eee] block py-[60px]">
      <div className="flex flex-col px-[15px]">
        <h2 className="mb-5 text-center text-black text-[29px] font-semibold">
          {t("blogTitle")}
        </h2>
        <p className="mb-10 max-w-[540px] mx-auto text-center text-[16px]">
          {t("blogDescription")}
        </p>

        {/* Posts Grid */}
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.slice(0, visibleCount).map((post, idx) => (
            <Link
              key={idx}
              href={post.link}
              target="_blank"
              className="flex flex-col rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white p-5"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p
                className="text-sm text-gray-700 line-clamp-3 mb-3"
                dangerouslySetInnerHTML={{ __html: post.description }}
              />
              <time className="text-xs text-gray-500">
                {new Date(post.pubDate).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </Link>
          ))}
        </div>

        {/* Read More Button */}
        {visibleCount < posts.length && (
          <div className="text-center mt-[40px]">
            <button
              onClick={showMore}
              className="inline-flex items-center justify-center font-medium transition duration-100 rounded-3xl h-12 px-5 bg-gray-200 text-black hover:bg-gray-300 focus:outline-none focus-visible:outline-gray-400 cursor-pointer"
            >
              {t("readAllPosts")} {/* You can change key to "readMore" if you have it */}
            </button>
          </div>
        )}

  
      </div>
    </section>
  );
}
