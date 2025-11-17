import { getSiteBySlug } from "@/lib/sites";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string; slug: string }> };

export default async function SitePage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "camPost" });
  const site = await getSiteBySlug(slug);

  if (!site) return notFound();

  return (
    <main className="w-full max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{site.title}</h1>
      <div className="relative h-60 w-full mb-4">
        {site.image && (
          <Image src={site.image} alt={site.title} fill style={{ objectFit: "cover" }} />
        )}
      </div>
      {site.excerpt && <p className="mb-4">{site.excerpt}</p>}
      {site.features && site.features.length > 0 && (
        <ul className="list-disc pl-5 mb-4">
          {site.features.map((f: string, i: number) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
      {site.performers && <div className="text-green-600 mb-4">{site.performers}</div>}
      <a
        href={site.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-500 text-white px-6 py-2 rounded"
      >
        {t("visit")}
      </a>
    </main>
  );
}
