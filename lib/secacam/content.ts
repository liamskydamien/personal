/**
 * Non-localised manifest for the ZEISS Secacam case study.
 * Ids declared here key the translated copy in lib/i18n/translations.ts,
 * so a missing German entry becomes a type error instead of a silent gap.
 */

const SHOT_DIR = "/images/projects/secacam-app";

export const SECACAM_APP_ICON = `${SHOT_DIR}/app-icon.webp`;
export const SECACAM_COVER = `${SHOT_DIR}/00-cover.webp`;
export const SECACAM_APP_STORE =
  "https://apps.apple.com/de/app/zeiss-secacam/id6445957316";
export const SECACAM_PLAY_STORE = "https://play.google.com/store/apps/details?id=de.zeiss.cop.caledonia&hl=en";
export const SECACAM_CASE_STUDY_PATH = "/projects/secacam";

export const SECACAM_SHOTS = [
  { id: "manage", src: `${SHOT_DIR}/01-manage.webp` },
  { id: "settings", src: `${SHOT_DIR}/02-settings.webp` },
  { id: "filters", src: `${SHOT_DIR}/03-filters.webp` },
  { id: "video", src: `${SHOT_DIR}/04-video.webp` },
  { id: "night", src: `${SHOT_DIR}/05-color-the-night.webp` },
  { id: "track", src: `${SHOT_DIR}/06-secatrack.webp` },
  { id: "dark", src: `${SHOT_DIR}/07-dark-mode.webp` },
] as const;

export type SecacamShotId = (typeof SECACAM_SHOTS)[number]["id"];

export const SECACAM_FEATURE_IDS = [
  "recognition",
  "colorNight",
  "activity",
  "secatrack",
  "remote",
  "gallery",
  "sharing",
  "darkmode",
  "notifications",
] as const;

export type SecacamFeatureId = (typeof SECACAM_FEATURE_IDS)[number];

/** Features that get a double-width card in the grid. */
export const SECACAM_WIDE_FEATURES: readonly SecacamFeatureId[] = [
  "recognition",
  "colorNight",
];

/** Tool names are the same in every locale, so they live here rather than in translations. */
export const SECACAM_STACK = [
  "React Native",
  "Next.js",
  "TypeScript",
  "Figma",
  "SCRUM",
  "JIRA",
  "Confluence",
] as const;

export const SECACAM_VIDEOS = [
  {
    id: "aiExplainer",
    youtubeId: "7kKJOphMxUw",
    aspect: "wide",
    poster: "/images/videos/7kKJOphMxUw.jpg",
    ledByMe: true,
  },
  {
    id: "conservation",
    youtubeId: "IwU1mJE0H_0",
    aspect: "wide",
    poster: "/images/videos/IwU1mJE0H_0.jpg",
    ledByMe: false,
  },
  {
    id: "short",
    youtubeId: "TQPfFH45t_4",
    aspect: "short",
    poster: "/images/videos/TQPfFH45t_4.jpg",
    ledByMe: false,
  },
] as const;

export type SecacamVideoId = (typeof SECACAM_VIDEOS)[number]["id"];
export type SecacamVideoAspect = (typeof SECACAM_VIDEOS)[number]["aspect"];

export const SECACAM_REFS = [
  {
    id: "appFeatures",
    href: "https://www.zeiss.de/photonics-and-optics/jagd/content/secacam-app-features.html",
  },
  {
    id: "activityCenter",
    href: "https://www.zeiss.de/photonics-and-optics/jagd/content/secacam-app-aktivitaetscenter.html",
  },
  {
    id: "colorNight",
    href: "https://blogs.zeiss.com/sports-optics/hunting/de/secacam-color-the-night/",
  },
  {
    id: "aiRecognition",
    href: "https://blogs.zeiss.com/sports-optics/hunting/de/zeiss-ki-tiererkennung/",
  },
  {
    id: "product",
    href: "https://blogs.zeiss.com/sports-optics/hunting/de/die-zeiss-secacam-ihre-perfekte-jagdkamera-fuer-wildbeobachtung/",
  },
  { id: "appStore", href: SECACAM_APP_STORE },
  { id: "playStore", href: SECACAM_PLAY_STORE }
] as const;

export type SecacamRefId = (typeof SECACAM_REFS)[number]["id"];

/** "blogs.zeiss.com" from a full URL — shown as the muted right-hand label on reference rows. */
export function refHost(href: string): string {
  return new URL(href).hostname.replace(/^www\./, "");
}
