'use client';

import { SectionHead } from "@/components/SectionHead";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { YOURT_FEATURE_IDS, YOURT_WIDE_FEATURES } from "@/lib/yourt/content";

export function YourtFeatures() {
  const { t } = useLocale();
  const f = t.yourt.features;

  return (
    <section className="cs-section" data-screen-label="Yourt features">
      <div className="page">
        <SectionHead eyebrow={f.eyebrow} title={f.title} meta={f.meta} />
        <div className="cs-feature-grid">
          {YOURT_FEATURE_IDS.map((id) => {
            const item = f.items[id];
            const wide = YOURT_WIDE_FEATURES.includes(id);
            return (
              <article
                key={id}
                className={`cs-feature${wide ? " cs-feature--wide" : ""}`}
              >
                <span className="chip chip-mono chip-accent">{item.badge}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
