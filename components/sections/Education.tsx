import { PROFILE } from "@/lib/profile";
import { SectionHead } from "@/components/SectionHead";

export function Education() {
  return (
    <section className="section" id="edu" data-screen-label="Education">
      <div className="page">
        <SectionHead
          eyebrow="07 / Education"
          title="School and study."
          meta="// 2012 — 2024"
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
