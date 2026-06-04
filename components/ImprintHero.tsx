import Link from "next/link";

export function ImprintHero() {
  return (
    <section className="hero legal-hero" id="impressum">
      <div className="page">
        <Link href="/" className="legal-back">
          ← Zur Startseite
        </Link>
        <div className="hero-eyebrow" style={{ marginBottom: 20 }}>
          <span className="dot" />
          <span>Rechtliche Angaben · § 5 DDG</span>
        </div>
        <h1 style={{ fontSize: "clamp(36px, 4.6vw, 52px)" }}>
          <span className="grad">Impressum</span>
        </h1>
        <p className="hero-lede" style={{ marginTop: 18 }}>
          Anbieterkennzeichnung nach dem Digitale-Dienste-Gesetz (DDG) — leicht erkennbar,
          unmittelbar erreichbar und ständig verfügbar.
        </p>
      </div>
    </section>
  );
}
