'use client';

import { PROFILE } from "@/lib/profile";
import { SectionHead } from "@/components/SectionHead";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Timeline() {
  const { t } = useLocale();

  return (
    <section className="section" id="timeline" data-screen-label="Timeline">
      <div className="page">
        <SectionHead
          eyebrow={t.timeline.eyebrow}
          title={t.timeline.title}
          meta={t.timeline.meta}
        />
        <div className="timeline">
          {PROFILE.work.map((w, i) => (
            <div key={i} className={"tl-item" + (w.current ? " current" : "")}>
              <div className="tl-row">
                <div className="tl-date">{w.date}</div>
                <div className="tl-card">
                  <div className="tl-head">
                    <span className="tl-title">{w.title}</span>
                    <span className="tl-company">· {w.company}</span>
                  </div>
                  <p className="tl-desc">{w.description}</p>
                  {w.highlights && w.highlights.length > 0 && (
                    <ul className="tl-highlights">
                      {w.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  )}
                  <div className="chips" style={{ marginTop: 4 }}>
                    {w.badges.map((b) => (
                      <span key={b} className="chip chip-mono">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
