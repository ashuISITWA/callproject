import { parseStringPromise } from "xml2js";
import TrinityFeed from "./TrinityFeed";

export const revalidate = 1800;

async function fetchRSS() {
  const res = await fetch("https://trinitytuts.com/rss.xml", {
    next: { revalidate: 1800 },
  });
  if (!res.ok) throw new Error("Failed to fetch RSS");
  const xml = await res.text();
  const json = await parseStringPromise(xml);
  const items = json.rss.channel[0].item;

  return items.map((item: any) => ({
    title: item.title[0],
    link: item.link[0],
    description: item.description?.[0] ?? "",
    pubDate: item.pubDate?.[0] ?? "",
  }));
}

export default async function TrinityFeedServer() {
  const posts = await fetchRSS();
  return <TrinityFeed posts={posts} />;
}
