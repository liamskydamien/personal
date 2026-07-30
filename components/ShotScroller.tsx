'use client';

import Image from "next/image";
import posthog from "posthog-js";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export interface Shot {
  id: string;
  src: string;
  caption: string;
  alt: string;
}

type ScrollerSource = "home_showcase" | "case_study";

/**
 * App Store style screenshot strip: native horizontal scroll-snap for touch and
 * trackpad, arrow buttons for mouse, and a focusable track so the keyboard can
 * reach it. No drag handling — native momentum already does the job and JS drag
 * would break the snap points.
 */
export function ShotScroller({
  shots,
  variant = "compact",
  label,
  hint,
  prevLabel,
  nextLabel,
  source,
}: {
  shots: Shot[];
  variant?: "compact" | "full";
  label: string;
  hint: string;
  prevLabel: string;
  nextLabel: string;
  source: ScrollerSource;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const trackId = useId();
  const hintId = useId();
  const [edges, setEdges] = useState({ start: true, end: false });

  // Read in event handlers only, never during render, so SSR and the first
  // client render agree.
  const reduced = useRef(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = mq.matches;
    const onChange = (e: MediaQueryListEvent) => {
      reduced.current = e.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const syncEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({ start: el.scrollLeft <= 1, end: el.scrollLeft >= max - 1 });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    syncEdges();
    const ro = new ResizeObserver(syncEdges);
    ro.observe(el);
    return () => ro.disconnect();
  }, [syncEdges]);

  const frame = useRef(0);
  const onScroll = useCallback(() => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(syncEdges);
  }, [syncEdges]);

  const scrollByCard = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".shot-card");
    const gap = parseFloat(getComputedStyle(el).columnGap || "16") || 16;
    const step = (card?.getBoundingClientRect().width ?? 208) + gap;
    // An explicit `behavior` overrides the CSS scroll-behavior, so the
    // reduced-motion check has to happen here too — CSS alone is not enough.
    el.scrollBy({
      left: direction * step,
      behavior: reduced.current ? "auto" : "smooth",
    });
    posthog.capture("secacam_scroller_navigated", {
      source,
      direction: direction === 1 ? "next" : "prev",
    });
  };

  return (
    <div className={`shot-scroller shot-scroller--${variant}`}>
      <button
        type="button"
        className="shot-nav shot-nav--prev"
        aria-label={prevLabel}
        aria-controls={trackId}
        disabled={edges.start}
        onClick={() => scrollByCard(-1)}
      >
        <ChevronLeft width={20} height={20} aria-hidden />
      </button>

      <div
        id={trackId}
        ref={trackRef}
        className="shot-track"
        tabIndex={0}
        role="region"
        aria-label={label}
        aria-describedby={hintId}
        onScroll={onScroll}
      >
        {shots.map((shot, i) => (
          <figure key={shot.id} className="shot-card">
            <div className="shot-frame">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={460}
                height={998}
                sizes="(max-width: 720px) 70vw, 260px"
                loading={i < 2 ? "eager" : "lazy"}
              />
            </div>
            <figcaption className="shot-cap">
              <span className="shot-cap-index" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="shot-nav shot-nav--next"
        aria-label={nextLabel}
        aria-controls={trackId}
        disabled={edges.end}
        onClick={() => scrollByCard(1)}
      >
        <ChevronRight width={20} height={20} aria-hidden />
      </button>

      <p id={hintId} className="visually-hidden">
        {hint}
      </p>
    </div>
  );
}
