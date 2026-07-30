'use client';

import { SectionHead } from "@/components/SectionHead";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { SECACAM_STACK } from "@/lib/secacam/content";

export function SecacamOwnership() {
  const { t } = useLocale();
  const o = t.secacam.owned;
  const points = [o.points.p1, o.points.p2, o.points.p3, o.points.p4, o.points.p5, o.points.p6];

  return (
    <section className="cs-section" data-screen-label="Secacam role">
      <div className="page">
        <SectionHead eyebrow={o.eyebrow} title={o.title} meta={o.meta} />
        <div className="cs-owned">
          <div>
            <p>{o.lede}</p>
            <ul className="cs-owned-list">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="cs-owned-aside">
              <div className="cs-owned-aside-title">{o.stackTitle}</div>
              <div className="chips">
                {SECACAM_STACK.map((tool) => (
                  <span key={tool} className="chip chip-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="cs-owned-aside">
              <div className="cs-owned-aside-title">{o.teamTitle}</div>
              <p>{o.teamText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
