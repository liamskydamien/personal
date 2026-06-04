'use client';

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function BackgroundHero() {
  const { t } = useLocale();

  return (
    <section className="hero" id="home" style={{ paddingTop: 56, paddingBottom: 32 }}>
      <div className="page">
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--nino-emerald-400)",
            marginBottom: 18,
          }}
        >
          {t.background.backLink}
        </Link>
        <div className="hero-eyebrow" style={{ marginBottom: 20 }}>
          <span className="dot" />
          <span>{t.background.eyebrow}</span>
        </div>
        <h1 style={{ fontSize: "clamp(36px, 4.6vw, 52px)" }}>
          {t.background.heading}
          <span className="grad">{t.background.headingAccent}</span>
        </h1>
        <p className="hero-lede" style={{ marginTop: 18 }}>
          {t.background.lede}
        </p>
      </div>
    </section>
  );
}
