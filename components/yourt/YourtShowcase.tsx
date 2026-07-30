'use client';

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { ShotScroller } from "@/components/ShotScroller";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  YOURT_APP_ICON,
  YOURT_CASE_STUDY_PATH,
  YOURT_SHOTS,
  YOURT_SHOT_FRAME,
} from "@/lib/yourt/content";

/**
 * Second full-bleed band under the Secacam one on the home page. Same layout,
 * different project — it also sits outside `.page` so the scroller can run edge
 * to edge (see --band-gutter in site.css).
 */
export function YourtShowcase() {
  const { t } = useLocale();
  const y = t.yourt;

  const shots = YOURT_SHOTS.map((shot) => ({
    id: shot.id,
    src: shot.src,
    caption: y.shots[shot.id].caption,
    alt: y.shots[shot.id].alt,
  }));

  return (
    <div className="showcase-band">
      <div className="page showcase-band-inner">
        <div className="showcase-band-head">
          <Image
            className="showcase-appicon"
            src={YOURT_APP_ICON}
            alt={y.appIconAlt}
            width={144}
            height={144}
          />
          <div>
            <div className="eyebrow">{y.showcase.eyebrow}</div>
            <h3 className="showcase-band-title">{y.showcase.title}</h3>
            <div className="showcase-band-meta">{y.showcase.meta}</div>
          </div>
        </div>
        <p className="showcase-band-lede">{y.showcase.lede}</p>
      </div>

      <ShotScroller
        shots={shots}
        variant="compact"
        label={y.scroller.label}
        hint={y.scroller.hint}
        prevLabel={y.scroller.prev}
        nextLabel={y.scroller.next}
        source="home_showcase"
        project="yourt"
        frame={YOURT_SHOT_FRAME}
      />

      <div className="page showcase-band-cta">
        <Link
          href={YOURT_CASE_STUDY_PATH}
          className="btn btn-primary"
          onClick={() =>
            posthog.capture("yourt_cta_clicked", {
              source: "home_showcase",
              target: "case_study",
            })
          }
        >
          {y.showcase.ctaPrimary}
        </Link>
        <Link
          href={`${YOURT_CASE_STUDY_PATH}#screens`}
          className="btn btn-ghost"
          onClick={() =>
            posthog.capture("yourt_cta_clicked", {
              source: "home_showcase",
              target: "gallery",
            })
          }
        >
          {y.showcase.ctaSecondary}
        </Link>
      </div>
    </div>
  );
}
