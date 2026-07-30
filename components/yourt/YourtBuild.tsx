'use client';

import { SectionHead } from "@/components/SectionHead";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { YOURT_STACK } from "@/lib/yourt/content";

export function YourtBuild() {
  const { t } = useLocale();
  const b = t.yourt.build;
  const points = [b.points.p1, b.points.p2, b.points.p3, b.points.p4, b.points.p5, b.points.p6];

  return (
    <section className="cs-section" id="build" data-screen-label="Yourt build">
      <div className="page">
        <SectionHead eyebrow={b.eyebrow} title={b.title} meta={b.meta} />
        <div className="cs-owned">
          <div>
            <p>{b.lede}</p>
            <ul className="cs-owned-list">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="cs-owned-aside">
              <div className="cs-owned-aside-title">{b.stackTitle}</div>
              <div className="chips">
                {YOURT_STACK.map((tool) => (
                  <span key={tool} className="chip chip-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="cs-owned-aside">
              <div className="cs-owned-aside-title">{b.teamTitle}</div>
              <p>{b.teamText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
