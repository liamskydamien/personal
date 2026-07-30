'use client';

import posthog from "posthog-js";
import { SectionHead } from "@/components/SectionHead";
import { YourtShowcase } from "@/components/yourt/YourtShowcase";
import { useLocale, useProfile } from "@/lib/i18n/LocaleProvider";

export function SideProjects() {
  const { t } = useLocale();
  const profile = useProfile();

  return (
    <section className="section" id="side" data-screen-label="Side projects">
      <div className="page">
        <SectionHead
          eyebrow={t.sideProjects.eyebrow}
          title={t.sideProjects.title}
          meta={t.sideProjects.meta}
        />
      </div>
      <YourtShowcase />
      <div className="page">
        <div className="side-grid">
          {profile.sideProjects.map((s, i) => (
            <div key={i} className="side-card">
              <div className="side-card-head">
                <h3>{s.title}</h3>
                {s.grade && <span className="grade-pill">{s.grade}</span>}
              </div>
              <p>{s.description}</p>
              <div className="chips" style={{ marginBottom: s.link ? 10 : 0 }}>
                {s.tags.map((tag) => (
                  <span key={tag} className="chip chip-mono">
                    {tag}
                  </span>
                ))}
              </div>
              {s.link && (
                <a
                  href={s.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ext-link"
                  onClick={() => posthog.capture("side_project_link_clicked", { title: s.title, href: s.link!.href })}
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
