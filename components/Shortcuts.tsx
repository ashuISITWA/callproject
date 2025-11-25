"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const chatLinks = [
  { key: "freeChat", label: "Free Chat", href: "/freechat" },
  { key: "teenChat", label: "Teen Chat", href: "/teenchat" },
  { key: "voyeurCam", label: "Voyeur Cams", href: "/voyeurcam" },
  { key: "sexCams", label: "Sex Cams", href: "/sexcams" },
  { key: "bbwChat", label: "BBW Chat", href: "/bbwchat" },
  { key: "milfChat", label: "MILF Chat", href: "/milfchat" },
  { key: "ebonyChat", label: "Ebony Chat", href: "/ebonychat" },
  { key: "fetishChat", label: "Fetish Chat", href: "/fetishchat" },
  { key: "sexChatSites", label: "Sex Chat Sites", href: "/search?q=Sex%20Chat%20Sites" },
  { key: "mobileSexCams", label: "Mobile Sex Cams", href: "/search?q=Mobile%20Sex%20Cams" },
  { key: "adultChat", label: "Adult Chat", href: "/search?q=Adult%20Chat" },
  { key: "chatRoomSites", label: "Chat Room Sites", href: "/search?q=Chat%20Room%20Sites" },
  { key: "bigTitsChat", label: "Big Tits Chat", href: "/search?q=Big%20Tits%20Chat" },
  { key: "bdsmSites", label: "BDSM Sites", href: "/search?q=BDSM%20Sites" },
  { key: "rouletteChatSites", label: "Roulette Chat Sites", href: "/search?q=Roulette%20Chat%20Sites" },
  { key: "webcamChatSites", label: "Webcam Chat Sites", href: "/search?q=Webcam%20Chat%20Sites" },
  { key: "randomChat", label: "Random Chat", href: "/randomchat" },
  { key: "camGirls", label: "Cam Girls", href: "/search?q=Cam%20Girls" },
  { key: "asianChatSites", label: "Asian Chat Sites", href: "/search?q=Asian%20Chat%20Sites" },
  { key: "lesbianChat", label: "Lesbian Chat", href: "/search?q=Lesbian%20Chat" },
  { key: "latinaChat", label: "Latina Chat", href: "/search?q=Latina%20Chat" },
  { key: "hairyCams", label: "Hairy Cams", href: "/search?q=Hairy%20Cams" },
  { key: "amateurChat", label: "Amateur Chat", href: "/search?q=Amateur%20Chat" },
  { key: "transsexualCams", label: "Transsexual Cams", href: "/search?q=Transsexual%20Cams" },
  { key: "gayChatSites", label: "Gay Chat Sites", href: "/search?q=Gay%20Chat%20Sites" },
  { key: "webcamJobSites", label: "Webcam Job Sites", href: "/search?q=Webcam%20Job%20Sites" },
  { key: "analChat", label: "Anal Chat", href: "/search?q=Anal%20Chat" },
  { key: "smokingChatSites", label: "Smoking Chat Sites", href: "/search?q=Smoking%20Chat%20Sites" },
  { key: "masturbationChat", label: "Masturbation Chat", href: "/search?q=Masturbation%20Chat" },
  { key: "arabChat", label: "Arab Chat", href: "/search?q=Arab%20Chat" },
  { key: "dirtyTalkChat", label: "Dirty Talk Chat", href: "/search?q=Dirty%20Talk%20Chat" },
  { key: "toyChat", label: "Toy Chat", href: "/search?q=Toy%20Chat" },
  { key: "indianChatSites", label: "Indian Chat Sites", href: "/search?q=Indian%20Chat%20Sites" },
  { key: "findomSites", label: "Findom Sites", href: "/search?q=Findom%20Sites" },
  { key: "footFetishSites", label: "Foot Fetish Sites", href: "/search?q=Foot%20Fetish%20Sites" },
];

export default function Shortcuts() {

  const locale = useLocale();
  return (
    <>
      <div className="block w-full py-[56px] border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1030px] px-[15px]">
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-[27px] text-black font-bold text-center capitalize">
            quick links
            </h3>

            <div className="flex justify-center flex-wrap gap-3">
              {chatLinks.map(({ key, label, href }) => {
                return (
                  <Link
                    key={key}
                    href={`/${locale}${href}`}
                    className="text-[12px] text-black hover:bg-white bg-[#fafafa] border border-transparent hover:border-[#fafafa] rounded-full py-[6px] px-[15px] inline-block"
                  >
                    {label}
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
