'use client';

import { SectionHead } from "@/components/SectionHead";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { YOURT_LEARNING_IDS, YOURT_PHASES } from "@/lib/yourt/content";

/**
 * Placeholder for the zero-to-one write-up: the three-week arc and first
 * learnings. The long-form text replaces the note and both grids later, so the
 * ids stay in lib/yourt/content.ts rather than being inlined here.
 */
export function YourtCaseStudy() {
  const { t } = useLocale();
  const c = t.yourt.caseStudy;

  return (
    <section className="cs-section" id="case-study" data-screen-label="Yourt case study">
      <div className="page">
        <SectionHead eyebrow={c.eyebrow} title={c.title} meta={c.meta} />

        <div className="cs-note">
          <span className="chip chip-mono chip-accent">{c.noteBadge}</span>
          <h3>{c.noteTitle}</h3>
          <p>{c.noteBody}</p>
        </div>

        <h3 className="cs-subhead">{c.phasesTitle}</h3>
        <div className="cs-feature-grid">
          {YOURT_PHASES.map((id) => (
            <article key={id} className="cs-feature">
              <h3>{c.phases[id].title}</h3>
              <p>{c.phases[id].body}</p>
            </article>
          ))}
        </div>

        <h3 className="cs-subhead">{c.learningsTitle}</h3>
        <div className="cs-feature-grid">
          {YOURT_LEARNING_IDS.map((id) => (
            <article key={id} className="cs-feature">
              <h3>{c.learnings[id].title}</h3>
              <p>{c.learnings[id].body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
