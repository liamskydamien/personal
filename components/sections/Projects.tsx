'use client';

import { SectionHead } from "@/components/SectionHead";
import { ProjectCard } from "@/components/ProjectCard";
import { useLocale, useProfile } from "@/lib/i18n/LocaleProvider";

export function Projects() {
  const { t } = useLocale();
  const profile = useProfile();

  return (
    <section className="section" id="work" data-screen-label="Projects">
      <div className="page">
        <SectionHead
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          meta={t.projects.meta}
        />
        <div className="bento">
          {profile.projects.map((p, i) => (
            <ProjectCard key={i} p={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
