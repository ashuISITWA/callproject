// lib/sites.ts

export type Site = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt?: string;
  features: string[];
  image?: string;
  link?: string;
  performers?: string;
  hero?: string;
  logo?: string;
  visitUrl?: string;
};

export async function getSites(locale: string = "en"): Promise<Site[]> {
  try {
    const raw = await import(`../messages/${locale}.json`);
    const data = raw.default;

    // ✅ Collect all sites arrays from blocks
    const allSites: Site[] = [];

    for (const key of Object.keys(data)) {
      const dataItem = (data as any)[key];
      if (dataItem?.sites && Array.isArray(dataItem.sites)) {
        allSites.push(...dataItem.sites);
      }
    }

    return allSites;
  } catch (error) {
    console.error(`⚠️ Locale file not found for: ${locale}, falling back to en.json`);
    const fallback = await import("../messages/en.json");
    const data = fallback.default;

    const allSites: Site[] = [];
    for (const key of Object.keys(data)) {
      const dataItem = (data as any)[key];
      if (dataItem?.sites && Array.isArray(dataItem.sites)) {
        allSites.push(...dataItem.sites);
      }
    }

    return allSites;
  }
}

export async function getSitesByCategory(
  category: string,
  locale: string = "en"
): Promise<Site[]> {
  const sites = await getSites(locale);
  return sites.filter((s) => s.category === category);
}

export async function getSiteBySlug(
  slug: string,
  locale: string = "en"
): Promise<Site | undefined> {
  const sites = await getSites(locale);
  return sites.find((s) => s.slug === slug);
}

export async function getAllCategories(locale: string = "en"): Promise<string[]> {
  const sites = await getSites(locale);
  return Array.from(new Set(sites.map((s) => s.category)));
}

export async function getAllSlugs(locale: string = "en"): Promise<string[]> {
  const sites = await getSites(locale);
  return sites.map((s) => s.slug);
}
