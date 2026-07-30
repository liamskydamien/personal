'use client';

import Link from "next/link";
import posthog from "posthog-js";
import { ExternalLink } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { SECACAM_APP_STORE } from "@/lib/secacam/content";

export function SecacamHero() {
  const { t } = useLocale();
  const h = t.secacam.hero;

  return (
    <section className="cs-hero" data-screen-label="Secacam hero">
      <div className="page">
        <div style={{ display: "flex", alignItems: "start", gap: 4, flexDirection: "column" }}>
        <Link href="/#work" className="cs-back">
          {h.back}
        </Link>
        <div className="hero-eyebrow" style={{ marginBottom: 20 }}>
          <span className="dot" />
          <span>{h.eyebrow}</span>
        </div>
        </div>
        <h1>
          {h.headingLead}
          <span className="grad">{h.headingAccent}</span>
        </h1>
        <p className="hero-lede">{h.lede}</p>
        <div className="cs-meta">
          <span className="cs-meta-item">{h.metaRole}</span>
          <span className="cs-meta-item">{h.metaSince}</span>
          <span className="cs-meta-item">{h.metaScale}</span>
          <span className="cs-meta-item">{h.metaPlatforms}</span>
        </div>
        <div className="cs-cta">
          <a
            href={SECACAM_APP_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={() =>
              posthog.capture("secacam_cta_clicked", {
                source: "case_study_hero",
                target: "app_store",
              })
            }
          >
            {h.ctaAppStore}
            <ExternalLink width={13} height={13} />
          </a>
          <a href="#videos" className="btn btn-ghost">
            {h.ctaVideos}
          </a>
        </div>
      </div>
    </section>
  );
}
