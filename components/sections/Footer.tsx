import Link from "next/link";
import { PROFILE } from "@/lib/profile";

export function Footer() {
  return (
    <section className="section section-footer" data-screen-label="Footer">
      <div className="page">
        <div className="footer">
          <div>© 2026 Liam Hess · Built with AI and Passion</div>
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
