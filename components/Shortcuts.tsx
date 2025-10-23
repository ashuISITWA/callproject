"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

const chatLinks = [
  { key: "freeChat", href: "/free-chat" },
  { key: "sexChatSites", href: "/sex-chat-sites" },
  { key: "mobileSexCams", href: "/mobile-sex-cams" },
  { key: "adultChat", href: "/adult-chat" },
  { key: "teenChat", href: "/teen-chat" },
  { key: "chatRoomSites", href: "/chat-room-sites" },
  { key: "bigTitsChat", href: "/big-tits-chat" },
  { key: "voyeurCam", href: "/voyeur-cam" },
  { key: "bdsmSites", href: "/bdsm-sites" },
  { key: "rouletteChatSites", href: "/roulette-chat-sites" },
  { key: "sexCams", href: "/sex-cams" },
  { key: "webcamChatSites", href: "/webcam-chat-sites" },
  { key: "randomChat", href: "/random-chat" },
  { key: "camGirls", href: "/cam-girls" },
  { key: "bbwChat", href: "/bbw-chat" },
  { key: "asianChatSites", href: "/asian-chat-sites" },
  { key: "lesbianChat", href: "/lesbian-chat" },
  { key: "latinaChat", href: "/latina-chat" },
  { key: "milfChat", href: "/milf-chat" },
  { key: "hairyCams", href: "/hairy-cams" },
  { key: "amateurChat", href: "/amateur-chat" },
  { key: "ebonyChat", href: "/ebony-chat" },
  { key: "fetishChat", href: "/fetish-chat" },
  { key: "transsexualCams", href: "/transsexual-cams" },
  { key: "gayChatSites", href: "/gay-chat-sites" },
  { key: "webcamJobSites", href: "/webcam-job-sites" },
  { key: "analChat", href: "/anal-chat" },
  { key: "smokingChatSites", href: "/smoking-chat-sites" },
  { key: "masturbationChat", href: "/masturbation-chat" },
  { key: "arabChat", href: "/arab-chat" },
  { key: "dirtyTalkChat", href: "/dirty-talk-chat" },
  { key: "toyChat", href: "/toy-chat" },
  { key: "indianChatSites", href: "/indian-chat-sites" },
  { key: "findomSites", href: "/findom-sites" },
  { key: "footFetishSites", href: "/foot-fetish-sites" },
];

export default function Shortcuts() {
  const t = useTranslations("shortcuts");
  return (
    <>
      <div className="block w-full py-[56px] border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1030px] px-[15px]">
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-[27px] text-black font-bold text-center">
              {t("title")}
            </h3>

            <div className="flex justify-center flex-wrap gap-3">
              {chatLinks.map(({ key, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[12px] text-black hover:bg-white bg-[#fafafa] border border-transparent hover:border-[#fafafa] rounded-full py-[6px] px-[15px] inline-block"
                >
                  {t(`links.${key}`)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
