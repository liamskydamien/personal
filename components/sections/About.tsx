'use client';

import { SectionHead } from "@/components/SectionHead";
import { useLocale, useProfile } from "@/lib/i18n/LocaleProvider";
import type { RichText } from "@/lib/i18n/translations";

function Rich({ parts }: { parts: RichText }) {
  return (
    <>
      {parts.map((part, i) =>
        part.b ? <strong key={i}>{part.t}</strong> : part.t
      )}
    </>
  );
}

export function About() {
  const { t } = useLocale();
  const profile = useProfile();

  return (
    <section className="section" id="about" data-screen-label="About">
      <div className="page">
        <SectionHead
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          meta={t.about.meta}
        />
        <div className="about-grid">
          <div className="about-text">
            <p><Rich parts={t.about.p1} /></p>
            <p><Rich parts={t.about.p2} /></p>
            <p><Rich parts={t.about.p3} /></p>
            <p><Rich parts={t.about.p4} /></p>
          </div>
          <div className="about-stats">
            {profile.stats.map((s, i) => (
              <div key={i} className="stat">
                <div className="stat-num">
                  {s.num}
                  <span className="unit">{s.unit}</span>
                </div>
                <div className="stat-label">{t.about.statLabels[i] ?? s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
