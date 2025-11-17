"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  Copy,
  ChevronDown,
  Mail,
  Layers,
  HelpCircle,
  Plus,
  Trash2,
  MoreHorizontal,
  RefreshCcw,
  X,
  Check,
  Timer,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const mails = [
  {
    id: 1,
    sender: "ashish sharma",
    subject: "Fwd: 📊 PRO: This Week in Visuals",
    preview:
      "-------- Forwarded message -------- From: App Economy Insights <appeconomyinsights@substack.com> Date: Sat, 30 Aug 2025 at 19:38 Subject: 📊 PRO: This Week in Visuals To: <ashish.isitwa@gmail.com> HD BABA PDD CRWD DELL SNOW MRVL ADSK VEEV...",
    time: "a few seconds ago",
    unread: true,
  },
  {
    id: 2,
    sender: "ashish sharma",
    subject: "Fwd: ⚖️ Google Saved by ChatGPT?",
    preview:
      "-------- Forwarded message -------- From: App Economy Insights <appeconomyinsights@substack.com> Date: Fri, 5 Sept 2025 at 17:42 Subject: ⚖️ Google Saved by ChatGPT? To: <ashish.isitwa@gmail.com> What the latest antitrust verdict means for Big Tech...",
    time: "2 minutes ago",
    unread: false,
  },
  {
    id: 3,
    sender: "ashish sharma",
    subject: "Fwd: 📊 PRO: This Week in Visuals",
    preview:
      "-------- Forwarded message -------- From: App Economy Insights <appeconomyinsights@substack.com> Date: Sat, 30 Aug 2025 at 19:38 Subject: 📊 PRO: This Week in Visuals To: <ashish.isitwa@gmail.com> HD BABA PDD CRWD DELL SNOW MRVL ADSK VEEV...",
    time: "a few seconds ago",
    unread: true,
  },
  {
    id: 4,
    sender: "ashish sharma",
    subject: "Fwd: ⚖️ Google Saved by ChatGPT?",
    preview:
      "-------- Forwarded message -------- From: App Economy Insights <appeconomyinsights@substack.com> Date: Fri, 5 Sept 2025 at 17:42 Subject: ⚖️ Google Saved by ChatGPT? To: <ashish.isitwa@gmail.com> What the latest antitrust verdict means for Big Tech...",
    time: "2 minutes ago",
    unread: false,
  },
  {
    id: 5,
    sender: "ashish sharma",
    subject: "Fwd: 📊 PRO: This Week in Visuals",
    preview:
      "-------- Forwarded message -------- From: App Economy Insights <appeconomyinsights@substack.com> Date: Sat, 30 Aug 2025 at 19:38 Subject: 📊 PRO: This Week in Visuals To: <ashish.isitwa@gmail.com> HD BABA PDD CRWD DELL SNOW MRVL ADSK VEEV...",
    time: "a few seconds ago",
    unread: true,
  },
  {
    id: 6,
    sender: "ashish sharma",
    subject: "Fwd: ⚖️ Google Saved by ChatGPT?",
    preview:
      "-------- Forwarded message -------- From: App Economy Insights <appeconomyinsights@substack.com> Date: Fri, 5 Sept 2025 at 17:42 Subject: ⚖️ Google Saved by ChatGPT? To: <ashish.isitwa@gmail.com> What the latest antitrust verdict means for Big Tech...",
    time: "2 minutes ago",
    unread: false,
  },
];

export default function MinuteMail() {
  const t = useTranslations("MinuteMail");

  const actions = [
    { key: "copy", icon: Copy },
    { key: "change", icon: RefreshCcw },
    { key: "reset", icon: Timer },
  ];

  const [email] = useState("3j7w79khlv@mrotzis.com");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
  };

  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes = 600 seconds

  // Timer countdown logic
  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Format mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <section className="bg-[#eee] block">
        <div className="grow max-w-[1000px] w-full mx-auto px-5 pt-10 pb-20 ">
          <h1 className="text-center mb-3 text-[48px] font-semibold">
            {t("title")}
          </h1>
          <p className="text-center mb-5 sm:mb-10 text-gray-600 sm:text-lg">
            {t("subtitle")}
          </p>
          <div className="flex items-center justify-center mb-4">
            <div className="relative flex gap-4 w-full sm:w-auto touch-manipulation">
              <div className="bg-white shadow-md rounded-xl w-full border border-gray-300 ">
                <div className="flex items-center relative w-full sm:min-w-[400px] px-4">
                  {/* Email input (readonly) */}
                  <Input
                    id="email"
                    type="text"
                    value={email}
                    readOnly
                    aria-label="Email"
                    className="cursor-pointer text-ellipsis !text-[18px] h-16 pl-5 border-0 shadow-none focus-visible:ring-0"
                  />

                  {/* Copy button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyToClipboard}
                    className="px-3 sm:px-4"
                  >
                    <Copy className="w-5 h-5 text-gray-600" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white border rounded-lg px-4 py-2 shadow-sm w-[105px]">
                <Timer size={18} className="text-gray-700" />
                <span className="text-[18px] font-medium text-gray-800">
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center gap-6 p-4 mb-10">
            {actions.map(({ key, icon: Icon }, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <button type="button" className="flex gap-2 items-center text-gray-700 hover:text-black transition-colors cursor-pointer">
                    <Icon size={18} strokeWidth={1.5} />
                    <span className="text-[16px]">{t(`actions.${key}`)}</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-black text-white">
                  {t(`actions.${key}`)}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* Ads and messages */}
          <div className="relative block">
            <div className="w-[160px] h-[600px] absolute top-0 left-[-200px]">
              <Image
                src="/assets/images/add.webp"
                fill
                className="object-cover rounded-md"
                alt="image"
              />
            </div>
            <div className="w-[160px] h-[600px] absolute top-0 right-[-200px]">
              <Image
                src="/assets/images/add.webp"
                fill
                className="object-cover rounded-md"
                alt="image"
              />
            </div>
            <div className="flex flex-col bg-white rounded-sm shadow">
              <div className="flex items-center justify-between p-4 border-b border-slate-300">
                <h4 className="text-black text-[16px] font-medium">
                  {t("messagesTitle")}
                </h4>
                <Tooltip>
                  <TooltipTrigger>
                    <button
                      type="button"
                      className="flex gap-2 items-center text-black text-[16px] cursor-pointer"
                    >
                      <RefreshCcw size={15} /> {t("refresh")}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t("reloadInbox")}</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className="h-[600px] overflow-y-auto scrollthin">
                <div className="bg-blue-100 text-gray-800 px-4 py-2 flex items-center justify-between sticky top-0">
                  <p className="text-sm">{t("notificationPrompt")}</p>
                  <div className="flex gap-2">
                    <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-blue-200">
                      <X size={18} />
                    </button>
                    <button className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-orange-600 w-[70px] flex justify-center gap-2 items-center">
                      <Check size={18} /> <span>{t("yes")}</span>
                    </button>
                  </div>
                </div>

                {/* Mail List */}
                <div>
                  {mails.map((mail) => (
                    <div
                      key={mail.id}
                      className="border-b border-gray-200 p-4 hover:bg-gray-50 transition cursor-pointer"
                    >
                      {/* Sender and time */}
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-[16px] font-medium text-gray-800">
                          {mail.sender}
                        </h4>
                        <span className="text-[14px] text-gray-500">
                          {mail.time}
                        </span>
                      </div>

                      {/* Subject */}
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900 text-[16px]">
                          {mail.subject}
                        </span>
                        {mail.unread && (
                          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        )}
                      </div>

                      {/* Preview */}
                      <div className="mt-1 text-[16px] text-gray-600 line-clamp-2">
                        {mail.preview}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
