'use client';

import { AISvg } from "@/components/AISvg";
import { SectionHead } from "@/components/SectionHead";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function CurrentlyExploring() {
  const { t } = useLocale();
  const ce = t.currentlyExploring;

  return (
    <section className="section" id="ai" data-screen-label="AI exploration">
      <div className="page">
        <SectionHead
          eyebrow={ce.eyebrow}
          title={ce.title}
          meta={ce.meta}
        />
        <div className="ai-block">
          <div>
            <h2>{ce.heading}</h2>
            <p>{ce.p}</p>
            <ul className="ai-list">
              <li>
                <span className="chk">✓</span>
                <span>{ce.item1}</span>
              </li>
              <li>
                <span className="chk">✓</span>
                <span>{ce.item2}</span>
              </li>
              <li>
                <span className="chk">~</span>
                <span>{ce.item3}</span>
              </li>
              <li>
                <span className="chk">~</span>
                <span>{ce.item4}</span>
              </li>
            </ul>
          </div>
          <div className="ai-visual">
            <AISvg />
          </div>
        </div>
      </div>
    </section>
  );
}
