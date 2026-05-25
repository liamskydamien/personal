export function AISvg() {
  return (
    <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="line" x1="0" x2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <circle cx="160" cy="120" r="100" fill="url(#glow)" />
      <g stroke="url(#line)" strokeWidth="1.4" fill="none">
        <path d="M60 60 L160 120" />
        <path d="M260 60 L160 120" />
        <path d="M40 160 L160 120" />
        <path d="M280 170 L160 120" />
        <path d="M120 200 L160 120" />
        <path d="M210 210 L160 120" />
      </g>
      <g fill="#0F131A" stroke="#10B981" strokeWidth="1.5">
        <circle cx="60" cy="60" r="14" />
        <circle cx="260" cy="60" r="14" />
        <circle cx="40" cy="160" r="12" />
        <circle cx="280" cy="170" r="12" />
        <circle cx="120" cy="200" r="10" />
        <circle cx="210" cy="210" r="10" />
      </g>
      <circle cx="160" cy="120" r="28" fill="#10B981" opacity="0.18" />
      <circle cx="160" cy="120" r="20" fill="#10B981" opacity="0.35" />
      <circle cx="160" cy="120" r="12" fill="#34D399" />
      <g fontFamily="var(--font-mono)" fontSize="9" fill="#9099AE">
        <text x="60" y="42" textAnchor="middle">
          discovery
        </text>
        <text x="260" y="42" textAnchor="middle">
          spec
        </text>
        <text x="40" y="184" textAnchor="middle">
          triage
        </text>
        <text x="280" y="194" textAnchor="middle">
          eval
        </text>
        <text x="120" y="222" textAnchor="middle">
          research
        </text>
        <text x="210" y="232" textAnchor="middle">
          prompts
        </text>
      </g>
      <text
        x="160"
        y="124"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="10"
        fill="#02201A"
        fontWeight="600"
      >
        PM × AI
      </text>
    </svg>
  );
}
