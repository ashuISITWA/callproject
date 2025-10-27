import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl"; // ✅ Import this
import { Site } from "@/lib/sites";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;



export default function SiteCard({ site }: { site: Site }) {
  const t = useTranslations(); 

  return (
    <div className="border rounded-md shadow-sm overflow-hidden">
      <div className="relative h-48 w-full">
        {site.image && (
          <img
            src={site.image}
            alt={site.title}
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{site.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{site.excerpt}</p>
        <Link
          href={`/site/${site.slug}`}
          className="inline-block mt-2 bg-red-500 text-white px-4 py-2 rounded"
        >
          {t("readReview")} 
        </Link>
      </div>
    </div>
  );
}
