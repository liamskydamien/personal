import { PROFILE } from "@/lib/profile";
import { SectionHead } from "@/components/SectionHead";

export function SideProjects() {
  return (
    <section className="section" id="side" data-screen-label="Side projects">
      <div className="page">
        <SectionHead
          eyebrow="05 / Side projects"
          title="Things I build outside of work."
          meta="// thesis · uni · exploration"
        />
        <div className="side-grid">
          {PROFILE.sideProjects.map((s, i) => (
            <div key={i} className="side-card">
              <div className="side-card-head">
                <h3>{s.title}</h3>
                {s.grade && <span className="grade-pill">{s.grade}</span>}
              </div>
              <p>{s.description}</p>
              <div className="chips" style={{ marginBottom: s.link ? 10 : 0 }}>
                {s.tags.map((t) => (
                  <span key={t} className="chip chip-mono">
                    {t}
                  </span>
                ))}
              </div>
              {s.link && (
                <a
                  href={s.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ext-link"
                >
                  → {s.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
