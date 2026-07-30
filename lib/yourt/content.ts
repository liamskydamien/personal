/**
 * Non-localised manifest for the Yourt case study.
 * Ids declared here key the translated copy in lib/i18n/translations.ts,
 * so a missing German entry becomes a type error instead of a silent gap.
 */

const SHOT_DIR = "/images/projects/yourt-app";

export const YOURT_APP_ICON = `${SHOT_DIR}/app-icon.png`;
export const YOURT_COVER = `${SHOT_DIR}/00-home.webp`;
export const YOURT_CASE_STUDY_PATH = "/projects/yourt";

/** These exports are 9:16, unlike the taller Secacam ones. */
export const YOURT_SHOT_FRAME = { width: 1080, height: 1920 };

export const YOURT_SHOTS = [
  { id: "home", src: `${SHOT_DIR}/00-home.webp` },
  { id: "timetable", src: `${SHOT_DIR}/01-timetable.webp` },
  { id: "map", src: `${SHOT_DIR}/02-map.webp` },
  { id: "lists", src: `${SHOT_DIR}/03-lists.webp` },
  { id: "expenses", src: `${SHOT_DIR}/04-expenses.webp` },
  { id: "rating", src: `${SHOT_DIR}/05-rating.webp` },
] as const;

export type YourtShotId = (typeof YOURT_SHOTS)[number]["id"];

export const YOURT_FEATURE_IDS = [
  "lineup",
  "map",
  "social",
  "privacy",
  "expenses",
  "shopping",
  "rating",
  "crossPlatform",
] as const;

export type YourtFeatureId = (typeof YOURT_FEATURE_IDS)[number];

/** Features that get a double-width card in the grid. */
export const YOURT_WIDE_FEATURES: readonly YourtFeatureId[] = ["lineup", "map"];

/** Tool names are the same in every locale, so they live here rather than in translations. */
export const YOURT_STACK = [
  "React Native",
  "Expo",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Claude Code",
  "Cursor",
] as const;

/** Phases of the three-week zero-to-one build. */
export const YOURT_PHASES = ["week1", "week2", "week3"] as const;

export type YourtPhaseId = (typeof YOURT_PHASES)[number];

/** Placeholder learnings — replaced once the full case study text lands. */
export const YOURT_LEARNING_IDS = ["scope", "schema", "review"] as const;

export type YourtLearningId = (typeof YOURT_LEARNING_IDS)[number];
