import Link from "next/link";

export function BackgroundHero() {
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
          ← Back to home
        </Link>
        <div className="hero-eyebrow" style={{ marginBottom: 20 }}>
          <span className="dot" />
          <span>Experience &amp; Education · the long form</span>
        </div>
        <h1 style={{ fontSize: "clamp(36px, 4.6vw, 52px)" }}>
          The full <span className="grad">background.</span>
        </h1>
        <p className="hero-lede" style={{ marginTop: 18 }}>
          Every role and every school behind the journey from customer service to Product Owner —
          start to now.
        </p>
      </div>
    </section>
  );
}
