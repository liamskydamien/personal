import type { Locale } from "@/lib/i18n/translations";
import { profileDe } from "./de";
import { profileEn } from "./en";
import {
  PROFILE_CONTACT,
  PROFILE_INITIALS,
  PROFILE_NAME,
} from "./shared";
import type { Profile } from "./types";

export type {
  Contact,
  Education,
  Profile,
  Project,
  Role,
  RoleId,
  SideProject,
  SideProjectLink,
  Stat,
  WorkItem,
} from "./types";

const LOCALIZED = { en: profileEn, de: profileDe } as const;

export function getProfile(locale: Locale): Profile {
  const content = LOCALIZED[locale] ?? profileEn;
  return {
    name: PROFILE_NAME,
    initials: PROFILE_INITIALS,
    contact: PROFILE_CONTACT,
    ...content,
  };
}

/** Default English profile (e.g. static imports). Prefer `getProfile(locale)` when locale is known. */
export const PROFILE: Profile = getProfile("en");
