"use client";
import { useParams } from "next/navigation";
import SinglePage from "@/components/SinglePage";

export default function SingleSlugPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "";

  return <SinglePage pageKey={slug} title={slug} />;
}


