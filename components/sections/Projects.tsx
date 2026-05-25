import { PROFILE } from "@/lib/profile";
import { SectionHead } from "@/components/SectionHead";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section className="section" id="work" data-screen-label="Projects">
      <div className="page">
        <SectionHead
          eyebrow="04 / Work"
          title="Selected projects."
          meta="// owned, designed or built"
        />
        <div className="bento">
          {PROFILE.projects.map((p, i) => (
            <ProjectCard key={i} p={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
