import posthog from "posthog-js";

// Requires "Cookieless server hash mode" in PostHog project settings (Web analytics).
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
  api_host: "/ingest",
  ui_host: "https://eu.posthog.com",
  defaults: "2026-01-30",
  capture_exceptions: true,
  cookieless_mode: "on_reject",
  debug: process.env.NODE_ENV === "development",
});
