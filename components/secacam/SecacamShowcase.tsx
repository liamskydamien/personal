'use client';

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { ExternalLink } from "lucide-react";
import { ShotScroller } from "@/components/ShotScroller";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  SECACAM_APP_ICON,
  SECACAM_APP_STORE,
  SECACAM_CASE_STUDY_PATH,
  SECACAM_SHOTS,
} from "@/lib/secacam/content";

/**
 * Full-bleed band under the bento grid on the home page. It deliberately sits
 * outside `.page` so the scroller can run edge to edge while its first card
 * still lines up with the grid above (see --band-gutter in site.css).
 */
export function SecacamShowcase() {
  const { t } = useLocale();
  const s = t.secacam;

  const shots = SECACAM_SHOTS.map((shot) => ({
    id: shot.id,
    src: shot.src,
    caption: s.shots[shot.id].caption,
    alt: s.shots[shot.id].alt,
  }));

  return (
    <div className="secacam-band">
      <div className="page secacam-band-inner">
        <div className="secacam-band-head">
          <Image
            className="secacam-appicon"
            src={SECACAM_APP_ICON}
            alt={s.appIconAlt}
            width={144}
            height={144}
          />
          <div>
            <div className="eyebrow">{s.showcase.eyebrow}</div>
            <h3 className="secacam-band-title">{s.showcase.title}</h3>
            <div className="secacam-band-meta">{s.showcase.meta}</div>
          </div>
        </div>
        <p className="secacam-band-lede">{s.showcase.lede}</p>
      </div>

      <ShotScroller
        shots={shots}
        variant="compact"
        label={s.scroller.label}
        hint={s.scroller.hint}
        prevLabel={s.scroller.prev}
        nextLabel={s.scroller.next}
        source="home_showcase"
      />

      <div className="page secacam-band-cta">
        <Link
          href={SECACAM_CASE_STUDY_PATH}
          className="btn btn-primary"
          onClick={() =>
            posthog.capture("secacam_cta_clicked", {
              source: "home_showcase",
              target: "case_study",
            })
          }
        >
          {s.showcase.ctaPrimary}
        </Link>
        <a
          href={SECACAM_APP_STORE}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
          onClick={() =>
            posthog.capture("secacam_cta_clicked", {
              source: "home_showcase",
              target: "app_store",
            })
          }
        >
          {s.showcase.ctaSecondary}
          <ExternalLink width={13} height={13} />
        </a>
      </div>
    </div>
  );
}
