import Image from "next/image";
import type { Project } from "@/lib/profile";

export function ProjectCard({ p }: { p: Project; idx?: number }) {
  if (p.isStat) {
    return (
      <div className={"proj-card proj-stat " + p.size}>
        <div className="proj-eyebrow">{p.eyebrow}</div>
        <div className="big">{p.title}</div>
        <p style={{ marginTop: 6 }}>{p.role}</p>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "var(--fg-muted)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "var(--nino-emerald-500)",
            }}
          />
          ZEISS Secacam · live
        </div>
      </div>
    );
  }

  if (p.size === "feature") {
    return (
      <div className="proj-card feature">
        <div className="proj-inner">
          <div className="proj-eyebrow">{p.eyebrow}</div>
          <h3>{p.title}</h3>
          <div className="proj-role">{p.role}</div>
          <p>{p.description}</p>
          <div className="proj-meta">
            {p.tags?.map((t) => (
              <span key={t} className="chip chip-mono">
                {t}
              </span>
            ))}
          </div>
          <div className="proj-image-slot">
            <Image
              src="/images/projects/secacam-placeholder.svg"
              alt={`Screenshot placeholder for ${p.title}`}
              width={800}
              height={440}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={"proj-card " + p.size}>
      <div className="proj-eyebrow">{p.eyebrow}</div>
      <h3>{p.title}</h3>
      <div className="proj-role">{p.role}</div>
      <p>{p.description}</p>
      <div className="proj-meta">
        {p.tags?.map((t) => (
          <span key={t} className="chip chip-mono">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
