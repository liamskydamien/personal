'use client';

import posthog from "posthog-js";
import { ExternalLink } from "lucide-react";
import { SectionHead } from "@/components/SectionHead";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { SECACAM_REFS, refHost } from "@/lib/secacam/content";

export function SecacamReferences() {
  const { t } = useLocale();
  const r = t.secacam.refs;

  return (
    <section className="cs-section" data-screen-label="Secacam sources">
      <div className="page">
        <SectionHead eyebrow={r.eyebrow} title={r.title} meta={r.meta} />
        <div className="cs-refs">
          {SECACAM_REFS.map((ref) => (
            <a
              key={ref.id}
              href={ref.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-ref"
              onClick={() =>
                posthog.capture("secacam_reference_clicked", {
                  ref_id: ref.id,
                  href: ref.href,
                  source: "case_study",
                })
              }
            >
              <ExternalLink width={14} height={14} aria-hidden />
              {r.items[ref.id]}
              <span className="cs-ref-host">{refHost(ref.href)}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
