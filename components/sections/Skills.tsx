'use client';

import { SectionHead } from "@/components/SectionHead";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Skills() {
  const { t } = useLocale();

  const groups = [
    { title: t.skills.groupProduct, items: t.skills.product },
    { title: t.skills.groupDesign, items: t.skills.design },
    { title: t.skills.groupEngineering, items: t.skills.engineering },
  ];

  return (
    <section className="section" id="skills" data-screen-label="Skills">
      <div className="page">
        <SectionHead
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          meta={t.skills.meta}
        />
        <div className="skills-grid">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>
                {g.title}
              </div>
              <div className="chips">
                {g.items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
