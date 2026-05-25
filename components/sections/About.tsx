import { PROFILE } from "@/lib/profile";
import { SectionHead } from "@/components/SectionHead";

export function About() {
  return (
    <section className="section" id="about" data-screen-label="About">
      <div className="page">
        <SectionHead
          eyebrow="01 / About"
          title="From customer service to product owner — through design and code."
          meta="// the journey"
        />
        <div className="about-grid">
          <div className="about-text">
            <p>
              I started in <strong>customer service</strong> at Carl Zeiss Consumer Products in 2020 — answering tickets,
              tracking issues, and building an internal JIRA workflow when I saw a process gap. That&apos;s where I learned
              what users actually struggle with.
            </p>
            <p>
              While studying <strong>Business Information Systems</strong>, I freelanced as a web designer and developer
              for four clients — owning everything from requirements to deployment. Design, code, scope — all on me.
            </p>
            <p>
              In 2023 I joined the <strong>ZEISS Secacam</strong> team as a designer and quickly grew into a Proxy Product
              Owner role. In 2024 I became the official Product Owner for the mobile and web app — a product that now
              reaches over <strong>200,000 users</strong>.
            </p>
            <p>
              That journey through every adjacent discipline is the foundation I bring to product:
              <strong> I can talk to engineers in their language, design with the team, and still keep my head on the roadmap.</strong>
            </p>
          </div>
          <div className="about-stats">
            {PROFILE.stats.map((s, i) => (
              <div key={i} className="stat">
                <div className="stat-num">
                  {s.num}
                  <span className="unit">{s.unit}</span>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
