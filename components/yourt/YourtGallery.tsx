'use client';

import { SectionHead } from "@/components/SectionHead";
import { ShotScroller } from "@/components/ShotScroller";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { YOURT_SHOTS, YOURT_SHOT_FRAME } from "@/lib/yourt/content";

export function YourtGallery() {
  const { t } = useLocale();
  const y = t.yourt;

  const shots = YOURT_SHOTS.map((shot) => ({
    id: shot.id,
    src: shot.src,
    caption: y.shots[shot.id].caption,
    alt: y.shots[shot.id].alt,
  }));

  return (
    <section className="cs-section" id="screens" data-screen-label="Yourt gallery">
      <div className="page">
        <SectionHead
          eyebrow={y.gallery.eyebrow}
          title={y.gallery.title}
          meta={y.gallery.meta}
        />
      </div>
      <ShotScroller
        shots={shots}
        variant="full"
        label={y.scroller.label}
        hint={y.scroller.hint}
        prevLabel={y.scroller.prev}
        nextLabel={y.scroller.next}
        source="case_study"
        project="yourt"
        frame={YOURT_SHOT_FRAME}
      />
    </section>
  );
}
