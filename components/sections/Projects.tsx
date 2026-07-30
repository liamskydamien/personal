'use client';

import { SectionHead } from "@/components/SectionHead";
import { ProjectCard } from "@/components/ProjectCard";
import { SecacamShowcase } from "@/components/secacam/SecacamShowcase";
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
      </div>
      <SecacamShowcase />
      <div className="page">
        <div className="bento">
          {profile.projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
