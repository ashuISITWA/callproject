import Image from "next/image";
import Link from "next/link";
import { Check, DollarSign } from "lucide-react";

interface CamPostProps {
  index: number;
  title: string;
  logo: string;
  hero: string;
  reviewUrl: string;
  visitUrl: string;
  features?: string[];   // ✅ optional now
  big?: boolean;
}

export default function CamPost({
  index,
  title,
  logo,
  hero,
  reviewUrl,
  visitUrl,
  features = [],         // ✅ default to empty array
  big,
}: CamPostProps) {
  return (
    <div className={big ? "row-span-2 col-span-12 md:col-span-6" : "col-span-12 md:col-span-3"}>
      <div className="flex flex-col rounded-md overflow-hidden group h-full">
        <div className="relative h-full">
          {/* Hover overlay */}
          <div className="hidden absolute inset-0 z-20 bg-white p-3 group-hover:block">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col mx-auto mt-6 w-auto">
                {features.slice(0, 3).map((t) => (
                  <div key={t} className="flex gap-1 items-center">
                    <Check size={13} />
                    <span className="text-[12px] text-black">{t}</span>
                  </div>
                ))}
                {features[3] && (
                  <div className="flex gap-1 items-center">
                    <DollarSign size={13} className="text-yellow-500" />
                    <span className="text-[12px] text-black">{features[3]}</span>
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                <div className="flex gap-2 items-center border border-green-500 py-[2px] px-[6px] rounded-full">
                  <span className="bg-green-500 aspect-square h-[8px] rounded-full"></span>
                  <span className="text-[12px] text-green-500">
                    {features[4] ?? "Active users"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <img
            src={`${SERVER_URL}${hero}`}
            width={500}
            height={500}
            alt={title}
            className="w-full h-full object-cover aspect-square"
          />

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 z-30 backdrop-blur-[10px] bg-white/50 p-2 flex flex-col">
            <div className="flex justify-between items-center gap-2">
              <h1 className="text-black bg-white rounded-full aspect-square w-[30px] grid place-items-center font-bold text-[14px]">
                {index + 1}
              </h1>
              <div className="w-[192px]">
                <img src={`${SERVER_URL}${logo}`} width={192} height={50} alt={`${title} logo`} className="w-full" />
              </div>
              <Link
                href={reviewUrl}
                className="text-black underline uppercase text-[12px] hover:text-[var(--primary)]"
              >
                Read the Review
              </Link>
            </div>
            <Link
              href={visitUrl}
              className="block mt-1 text-[13px] text-white uppercase font-medium rounded-md bg-[var(--primary)] text-center py-[6px]"
            >
              Visit {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}