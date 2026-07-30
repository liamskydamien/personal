'use client';

import Image from "next/image";
import posthog from "posthog-js";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/translations";
import type { SecacamVideoAspect, SecacamVideoId } from "@/lib/secacam/content";

/**
 * Click-to-load YouTube embed. Nothing is requested from a Google host until
 * the visitor presses play — the poster is served from /public — so the page
 * sets no third-party cookies before consent.
 */
export function VideoFacade({
  videoId,
  youtubeId,
  title,
  description,
  poster,
  aspect,
  ledByMe,
  ledBadge,
  playLabel,
  locale,
  source,
}: {
  videoId: SecacamVideoId;
  youtubeId: string;
  title: string;
  description: string;
  poster: string;
  aspect: SecacamVideoAspect;
  ledByMe?: boolean;
  ledBadge: string;
  playLabel: string;
  locale: Locale;
  source: "case_study";
}) {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (playing) iframeRef.current?.focus();
  }, [playing]);

  const short = aspect === "short";
  const dims = short ? { width: 1080, height: 1920 } : { width: 1280, height: 720 };

  return (
    <div className="cs-video">
      <div className={`cs-video-frame${short ? " cs-video-frame--short" : ""}`}>
        {ledByMe && !playing && <span className="cs-video-badge">{ledBadge}</span>}
        {playing ? (
          <iframe
            ref={iframeRef}
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&hl=${locale}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="cs-video-btn"
            aria-label={`${playLabel}: ${title}`}
            onClick={() => {
              posthog.capture("secacam_video_played", {
                video_id: videoId,
                youtube_id: youtubeId,
                aspect,
                led_by_me: Boolean(ledByMe),
                source,
              });
              setPlaying(true);
            }}
          >
            <Image
              src={poster}
              alt=""
              width={dims.width}
              height={dims.height}
              sizes={short ? "(max-width: 720px) 100vw, 300px" : "(max-width: 900px) 100vw, 560px"}
            />
            <span className="cs-video-play" aria-hidden>
              <Play width={26} height={26} fill="currentColor" />
            </span>
          </button>
        )}
      </div>
      <div className="cs-video-meta">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
