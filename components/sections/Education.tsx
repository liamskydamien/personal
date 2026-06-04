'use client';

import { PROFILE } from "@/lib/profile";
import { SectionHead } from "@/components/SectionHead";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Education() {
  const { t } = useLocale();

  return (
    <section className="section" id="edu" data-screen-label="Education">
      <div className="page">
        <SectionHead
          eyebrow={t.education.eyebrow}
          title={t.education.title}
          meta={t.education.meta}
        />
        <div className="edu-list">
          {PROFILE.education.map((e, i) => (
            <div key={i} className="edu-card">
              <div className="edu-date">{e.date}</div>
              <h4>{e.school}</h4>
              <div className="edu-degree">{e.degree}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
