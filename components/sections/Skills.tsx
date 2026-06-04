'use client';

import { SectionHead } from "@/components/SectionHead";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const SKILL_ITEMS = {
  product: [
    "Product Management",
    "Roadmap Management",
    "Stakeholder Management",
    "User Research",
    "SCRUM",
    "JIRA",
    "Confluence",
  ],
  design: ["UX Design", "Figma", "Prototyping", "Design Systems", "Localisation"],
  engineering: ["React Native", "React.js", "TypeScript", "Next.js", "Java", "Spring Boot", "SQL"],
};

export function Skills() {
  const { t } = useLocale();

  const groups = [
    { title: t.skills.groupProduct, items: SKILL_ITEMS.product },
    { title: t.skills.groupDesign, items: SKILL_ITEMS.design },
    { title: t.skills.groupEngineering, items: SKILL_ITEMS.engineering },
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
