import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MetaMaskErrorBoundary from "@/components/MetaMaskErrorBoundary";
import Script from "next/script";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "https://next.x-u.cc";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  const metadata = messages.metadata;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords || "chat, rooms, online, cam girls",
    icons: {
      icon: [
        {
          url: `${SERVER_URL}/images/ficon.jpg`,
          type: "image/jpeg",
        },
      ],
      shortcut: `${SERVER_URL}/images/ficon.jpg`,
      apple: `${SERVER_URL}/images/ficon.jpg`,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "website",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        de: "/de",
        fr: "/fr",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head />
      <body>
        {/* ✅ Use Next.js Script instead of raw <script> */}
        <Script
          src="/metamask-error-handler.js"
          strategy="afterInteractive"
        />
        <MetaMaskErrorBoundary>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </MetaMaskErrorBoundary>
      </body>
    </html>
  );
}
