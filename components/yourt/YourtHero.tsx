'use client';

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function YourtHero() {
  const { t } = useLocale();
  const h = t.yourt.hero;

  return (
    <section className="cs-hero" data-screen-label="Yourt hero">
      <div className="page">
        <div style={{ display: "flex", alignItems: "start", gap: 4, flexDirection: "column" }}>
          <Link href="/#side" className="cs-back">
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
          <a href="#screens" className="btn btn-primary">
            {h.ctaScreens}
          </a>
          <a href="#build" className="btn btn-ghost">
            {h.ctaBuild}
          </a>
        </div>
      </div>
    </section>
  );
}
