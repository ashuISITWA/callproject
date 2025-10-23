"use client";

import * as React from "react";

interface YoutubeEmbedProps {
  videoId: string;
}

export function YoutubeEmbed({ videoId }: YoutubeEmbedProps) {
  return (
    <div className="relative w-full pb-[56.25%] overflow-hidden rounded-xl border bg-muted shadow-sm">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
