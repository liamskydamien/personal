import { SectionHead } from "@/components/SectionHead";

const groups = [
  {
    title: "Product",
    items: [
      "Product Management",
      "Roadmap Management",
      "Stakeholder Management",
      "User Research",
      "SCRUM",
      "JIRA",
      "Confluence",
    ],
  },
  {
    title: "Design",
    items: ["UX Design", "Figma", "Prototyping", "Design Systems", "Localisation"],
  },
  {
    title: "Engineering",
    items: ["React Native", "React.js", "TypeScript", "Next.js", "Java", "Spring Boot", "SQL"],
  },
];

export function Skills() {
  return (
    <section className="section" id="skills" data-screen-label="Skills">
      <div className="page">
        <SectionHead
          eyebrow="02 / Toolkit"
          title="What I work with."
          meta="// 3 disciplines, 17 tools"
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
