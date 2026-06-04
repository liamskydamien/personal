import posthog from "posthog-js";

export type ConsentStatus = "pending" | "granted" | "denied";

export function getConsentStatus(): ConsentStatus {
  const explicit = posthog.get_explicit_consent_status?.();
  if (explicit === "pending") return "pending";
  if (posthog.has_opted_in_capturing()) return "granted";
  if (posthog.has_opted_out_capturing()) return "denied";
  return "pending";
}

export function acceptAnalytics(): void {
  posthog.opt_in_capturing();
}

export function rejectAnalytics(): void {
  posthog.opt_out_capturing();
}
