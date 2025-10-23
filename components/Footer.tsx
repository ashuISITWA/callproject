"use client";
import Link from "next/link";
import React from "react";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
  { label: "Disclosure", href: "/disclosure" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "FAQ", href: "/faq" },
  { label: "Awards", href: "/awards" },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <>
      <div className="bg-black block">
        <div className="px-5 py-20 mx-auto max-w-[1040px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-2 md:gap-4 items-center justify-center flex-wrap">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={`/${locale}${href.startsWith("/") ? href : `/${href}`}`}
                  className="text-[14px] md:text-[18px] text-white font-semibold hover:text-[#808080]"
                >
                  {t(`navLinks.${label}`)}
                </Link>
              ))}
            </div>

            <p className="text-white text-[12px] text-center">
              {t("copyright")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}