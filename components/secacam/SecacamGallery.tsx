'use client';

import { SectionHead } from "@/components/SectionHead";
import { ShotScroller } from "@/components/ShotScroller";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { SECACAM_SHOTS } from "@/lib/secacam/content";

export function SecacamGallery() {
  const { t } = useLocale();
  const s = t.secacam;

  const shots = SECACAM_SHOTS.map((shot) => ({
    id: shot.id,
    src: shot.src,
    caption: s.shots[shot.id].caption,
    alt: s.shots[shot.id].alt,
  }));

  return (
    <section className="cs-section" data-screen-label="Secacam gallery">
      <div className="page">
        <SectionHead
          eyebrow={s.gallery.eyebrow}
          title={s.gallery.title}
          meta={s.gallery.meta}
        />
      </div>
      <ShotScroller
        shots={shots}
        variant="full"
        label={s.scroller.label}
        hint={s.scroller.hint}
        prevLabel={s.scroller.prev}
        nextLabel={s.scroller.next}
        source="case_study"
      />
    </section>
  );
}
