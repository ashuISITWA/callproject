import { getSitesByCategory } from "@/lib/sites";
import SiteCard from "@/components/SiteCard";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string; category: string }> };

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;
  const sites = await getSitesByCategory(category);

  if (!sites || sites.length === 0) return notFound();

  return (
    <main className="w-full max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        {category.replace(/-/g, " ")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sites.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
      </div>
    </main>
  );
}
