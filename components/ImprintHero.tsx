'use client';

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function ImprintHero() {
  const { t } = useLocale();
  const imp = t.imprint;

  return (
    <section className="hero legal-hero" id="impressum">
      <div className="page">
        <Link href="/" className="legal-back">
          {imp.backLink}
        </Link>
        <div className="hero-eyebrow" style={{ marginBottom: 20 }}>
          <span className="dot" />
          <span>{imp.eyebrow}</span>
        </div>
        <h1 style={{ fontSize: "clamp(36px, 4.6vw, 52px)" }}>
          <span className="grad">{imp.heading}</span>
        </h1>
        <p className="hero-lede" style={{ marginTop: 18 }}>
          {imp.lede}
        </p>
      </div>
    </section>
  );
}
