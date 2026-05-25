import Link from "next/link";
import { PROFILE } from "@/lib/profile";

export function Contact() {
  return (
    <section
      className="section"
      id="contact"
      data-screen-label="Contact"
      style={{ paddingBottom: 0 }}
    >
      <div className="page">
        <div className="contact-block">
          <div
            className="eyebrow"
            style={{ color: "var(--nino-emerald-400)", marginBottom: 14 }}
          >
            {"// let's talk"}
          </div>
          <h2>Looking for a Product Manager who&nbsp;codes and designs?</h2>
          <p>
            I&apos;m open to senior PM / Product Owner roles where breadth across design,
            engineering and product actually matters. Drop me a line — I read everything.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${PROFILE.contact.email}`} className="btn btn-primary">
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              {PROFILE.contact.email}
            </a>
            <a
              href={`https://www.linkedin.com/in/${PROFILE.contact.linkedin}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V8h3v11zM6.5 6.7A1.7 1.7 0 1 1 6.5 3.3a1.7 1.7 0 0 1 0 3.4zM19 19h-3v-5.5c0-1.3-.5-2.2-1.7-2.2A1.85 1.85 0 0 0 12.5 13V19h-3V8h3v1.5A3.3 3.3 0 0 1 15.4 8c2.3 0 3.6 1.5 3.6 4.4V19z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={`https://github.com/${PROFILE.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55 0-.28-.01-1-.02-1.97-3.2.69-3.87-1.55-3.87-1.55-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.93 10.93 0 0 1 5.76 0c2.19-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.21.66.8.55 4.56-1.53 7.85-5.83 7.85-10.91C23.5 5.66 18.35.5 12 .5z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
        <div className="footer">
          <div>© 2026 Liam Hess · Built with Next.js</div>
          <div className="footer-links">
            <Link href="/background">Experience &amp; Education →</Link>
            <a href={`mailto:${PROFILE.contact.email}`}>Email</a>
            <a
              href={`https://${PROFILE.contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {PROFILE.contact.website}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
