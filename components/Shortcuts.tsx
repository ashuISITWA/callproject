"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const chatLinks = [
  { key: "freeChat", href: "/freechat" },
  { key: "teenChat", href: "/teenchat" },
  { key: "voyeurCam", href: "/voyeurcam" },
  { key: "sexCams", href: "/sexcams" },
  { key: "bbwChat", href: "/bbwchat" },
  { key: "milfChat", href: "/milfchat" },
  { key: "ebonyChat", href: "/ebonychat" },
  { key: "fetishChat", href: "/fetishchat" },
  { key: "sexChatSites", href: "/search?q=Sex%20Chat%20Sites" },
  { key: "mobileSexCams", href: "/search?q=Mobile%20Sex%20Cams" },
  { key: "adultChat", href: "/search?q=Adult%20Chat" },
  { key: "chatRoomSites", href: "/search?q=Chat%20Room%20Sites" },
  { key: "bigTitsChat", href: "/search?q=Big%20Tits%20Chat" },
  { key: "bdsmSites", href: "/search?q=BDSM%20Sites" },
  { key: "rouletteChatSites", href: "/search?q=Roulette%20Chat%20Sites" },
  { key: "webcamChatSites", href: "/search?q=Webcam%20Chat%20Sites" },
  { key: "randomChat", href: "/randomchat" },
  { key: "camGirls", href: "/search?q=Cam%20Girls" },
  { key: "asianChatSites", href: "/search?q=Asian%20Chat%20Sites" },
  { key: "lesbianChat", href: "/search?q=Lesbian%20Chat" },
  { key: "latinaChat", href: "/search?q=Latina%20Chat" },
  { key: "hairyCams", href: "/search?q=Hairy%20Cams" },
  { key: "amateurChat", href: "/search?q=Amateur%20Chat" },
  { key: "transsexualCams", href: "/search?q=Transsexual%20Cams" },
  { key: "gayChatSites", href: "/search?q=Gay%20Chat%20Sites" },
  { key: "webcamJobSites", href: "/search?q=Webcam%20Job%20Sites" },
  { key: "analChat", href: "/search?q=Anal%20Chat" },
  { key: "smokingChatSites", href: "/search?q=Smoking%20Chat%20Sites" },
  { key: "masturbationChat", href: "/search?q=Masturbation%20Chat" },
  { key: "arabChat", href: "/search?q=Arab%20Chat" },
  { key: "dirtyTalkChat", href: "/search?q=Dirty%20Talk%20Chat" },
  { key: "toyChat", href: "/search?q=Toy%20Chat" },
  { key: "indianChatSites", href: "/search?q=Indian%20Chat%20Sites" },
  { key: "findomSites", href: "/search?q=Findom%20Sites" },
  { key: "footFetishSites", href: "/search?q=Foot%20Fetish%20Sites" },
];

export default function Shortcuts() {
  const t = useTranslations("shortcuts");
  const locale = useLocale();
  return (
    <>
      <div className="block w-full py-[56px] border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1030px] px-[15px]">
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-[27px] text-black font-bold text-center">
              {t("title")}
            </h3>

            <div className="flex justify-center flex-wrap gap-3">
              {chatLinks.map(({ key, href }) => {
                // Check if href is a search link and generate it with translated text
                const linkHref = href.startsWith("/search?q=")
                  ? `/search?q=${encodeURIComponent(t(`links.${key}`))}`
                  : href;
                
                return (
                  <Link
                    key={key}
                    href={`/${locale}${linkHref}`}
                    className="text-[12px] text-black hover:bg-white bg-[#fafafa] border border-transparent hover:border-[#fafafa] rounded-full py-[6px] px-[15px] inline-block"
                  >
                    {t(`links.${key}`)}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
