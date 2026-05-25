"use client";

export type HeroVariant = "terminal" | "profile";

export function HeroVariantToggle({
  value,
  onChange,
}: {
  value: HeroVariant;
  onChange: (v: HeroVariant) => void;
}) {
  return (
    <div className="hero-variant-toggle" role="group" aria-label="Hero variant">
      <button
        type="button"
        className={value === "terminal" ? "active" : ""}
        onClick={() => onChange("terminal")}
      >
        Terminal
      </button>
      <button
        type="button"
        className={value === "profile" ? "active" : ""}
        onClick={() => onChange("profile")}
      >
        Profile
      </button>
    </div>
  );
}
