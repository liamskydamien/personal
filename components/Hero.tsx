"use client";

import { useState, useEffect } from "react";
import posthog from "posthog-js";
import type { RoleId } from "@/lib/profile";
import { useLocale, useProfile } from "@/lib/i18n/LocaleProvider";

const TERMINAL_SCRIPT = [
  { kind: "cmd" as const, text: "whoami" },
  { kind: "out" as const, lines: ["Liam Hess — Cologne, Germany"] },
  { kind: "spacer" as const },
  { kind: "cmd" as const, text: "cat roles.json" },
  {
    kind: "json" as const,
    lines: [
      { k: "primary", v: '"Product Manager"' },
      { k: "also", v: '["Designer", "Developer"]' },
      { k: "exploring", v: '"AI & the world"' },
      { k: "based_in", v: '"Cologne, Germany 🌍"', last: true },
    ],
  },
  { kind: "spacer" as const },
  { kind: "cmd" as const, text: "stats --since 2021" },
  {
    kind: "out" as const,
    lines: [
      "→ 200,000+ users reached at ZEISS Group",
      "→ 3+ years shipping mobile & web products",
      "→ 1.2 B.Sc. grade — top 20 in 10 years of program",
      "→ 36+ countries travelled",
      "→ Soon first startup launch 🚀",
    ],
  },
  { kind: "spacer" as const },
  { kind: "cmd" as const, text: "echo $ready_for_more" },
  { kind: "out" as const, lines: ["true"], accent: true },
];

function TypedLine({
  text,
  speed = 28,
  onDone,
}: {
  text: string;
  speed?: number;
  onDone?: () => void;
}) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      i++;
      setShown(text.slice(0, i));
      if (i < text.length) {
        setTimeout(tick, speed + (Math.random() * 30 - 10));
      } else if (onDone) {
        setTimeout(onDone, 200);
      }
    };
    tick();
    return () => {
      cancelled = true;
    };
  }, [text, speed, onDone]);

  return <span>{shown}</span>;
}

function Prompt() {
  return (
    <span className="t-prompt">
      <span className="path">~/liam-hess</span>
      <span className="arr">❯</span>
    </span>
  );
}

function TerminalHero() {
  const [step, setStep] = useState(0);
  const advance = () => setStep((s) => Math.min(s + 1, TERMINAL_SCRIPT.length));

  useEffect(() => {
    if (step >= TERMINAL_SCRIPT.length) return;
    const item = TERMINAL_SCRIPT[step];
    if (!item || item.kind === "cmd") return;
    const delay = item.kind === "spacer" ? 120 : 380;
    const t = setTimeout(advance, delay);
    return () => clearTimeout(t);
  }, [step]);

  const restart = () => setStep(0);

  return (
    <div className="terminal" onDoubleClick={restart}>
      <div className="terminal-chrome">
        <span className="tdot" />
        <span className="tdot" />
        <span className="tdot" />
        <span className="terminal-title">liam@world — zsh — 78×24</span>
      </div>
      <div className="terminal-body">
        {TERMINAL_SCRIPT.slice(0, step + 1).map((item, i) => {
          const isLast = i === step;
          if (item.kind === "spacer") return <div key={i} style={{ height: 8 }} />;
          if (item.kind === "cmd") {
            return (
              <div className="t-line" key={i}>
                <Prompt />
                <span className="t-cmd">
                  {isLast ? <TypedLine text={item.text} onDone={advance} /> : item.text}
                  {isLast && <span className="t-cursor" />}
                </span>
              </div>
            );
          }
          if (item.kind === "out") {
            return (
              <div key={i}>
                {item.lines.map((l, j) => (
                  <div className={"t-out" + (item.accent ? " " : "")} key={j}>
                    {item.accent ? (
                      <span style={{ color: "var(--nino-emerald-400)" }}>{l}</span>
                    ) : (
                      l
                    )}
                  </div>
                ))}
              </div>
            );
          }
          if (item.kind === "json") {
            return (
              <div key={i} className="t-out">
                <div>{"{"}</div>
                {item.lines.map((row, j) => (
                  <div key={j} style={{ paddingLeft: 18 }}>
                    <span className="t-key">&quot;{row.k}&quot;</span>
                    <span>: </span>
                    <span className="t-str">{row.v}</span>
                    {!row.last && <span>,</span>}
                  </div>
                ))}
                <div>{"}"}</div>
              </div>
            );
          }
          return null;
        })}
        {step >= TERMINAL_SCRIPT.length && (
          <div className="t-line" style={{ marginTop: 8 }}>
            <Prompt />
            <span className="t-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

function ProfileCardHero() {
  const { t } = useLocale();
  const profile = useProfile();
  const tabs: { id: RoleId; label: string }[] = [
    { id: "designer", label: t.hero.tabDesigner },
    { id: "developer", label: t.hero.tabDeveloper },
    { id: "product", label: t.hero.tabProduct },
    { id: "ai", label: t.hero.tabAI },
  ];
  const [active, setActive] = useState<RoleId>("product");
  const r = profile.roles[active];

  function handleTabChange(id: RoleId) {
    setActive(id);
    posthog.capture("hero_role_tab_changed", { tab: id });
  }

  return (
    <div className="profile-card">
      <div className="profile-tabs" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={"profile-tab" + (active === tab.id ? " active" : "")}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="profile-body" key={active}>
        <div className="fade-in">
          <div className="role-title">{r.title}</div>
          <div className="role-sub">{r.sub}</div>
          <ul className="role-points">
            {r.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <div className="role-tools chips">
            {r.tools.map((tool) => (
              <span key={tool} className="chip chip-mono">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useLocale();
  const profile = useProfile();
  return (
    <section className="hero" id="home">
      <div className="page">
        <div className="hero-grid">
          <div>
            <h1>
              {t.hero.line1}
              <br />
              {t.hero.line2}
              <br />
              <span className="grad">{t.hero.line3}</span>
            </h1>
            <p className="hero-lede">
              {t.hero.ledePrefix}{" "}
              <strong style={{ color: "var(--fg-primary)" }}>{profile.name}</strong>{" "}
              {t.hero.ledeSuffix}
            </p>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {profile.location}
              </div>
              <div className="hero-meta-item">
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
                {profile.contact.email}
              </div>
              <div className="hero-meta-item">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15 15 0 0 1 0 20" />
                  <path d="M12 2a15 15 0 0 0 0 20" />
                </svg>
                {profile.contact.website}
              </div>
            </div>
            <div className="hero-cta">
              <a
                href={`mailto:${profile.contact.email}`}
                className="btn btn-primary"
                onClick={() => posthog.capture("contact_email_clicked", { source: "hero" })}
              >
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
                {t.hero.ctaContact}
              </a>
              <a href="#work" className="btn btn-ghost" onClick={() => posthog.capture("hero_cta_work_clicked")}>
                {t.hero.ctaWork}
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <TerminalHero />
          </div>
        </div>
      </div>
    </section>
  );
}
