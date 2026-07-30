'use client';

import { SectionHead } from "@/components/SectionHead";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { SECACAM_FEATURE_IDS, SECACAM_WIDE_FEATURES } from "@/lib/secacam/content";

export function SecacamFeatures() {
  const { t } = useLocale();
  const f = t.secacam.features;

  return (
    <section className="cs-section" data-screen-label="Secacam features">
      <div className="page">
        <SectionHead eyebrow={f.eyebrow} title={f.title} meta={f.meta} />
        <div className="cs-feature-grid">
          {SECACAM_FEATURE_IDS.map((id) => {
            const item = f.items[id];
            const wide = SECACAM_WIDE_FEATURES.includes(id);
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
