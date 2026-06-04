import { PROFILE } from "@/lib/profile";

/**
 * Provider identification per § 5 DDG (Digitale-Dienste-Gesetz).
 * Update street, postal code, and phone before publishing — a Postfach is not sufficient.
 */
export const IMPRINT = {
  provider: {
    name: PROFILE.name,
  },
  address: {
    street: "Alter Heeresweg 11",
    postalCode: "53639",
    city: "Königswinter",
    country: "Deutschland",
  },
  contact: {
    email: PROFILE.contact.email,
  },
  website: `https://${PROFILE.contact.website}`,
  /** Leave undefined if you do not have a VAT ID (USt-IdNr.). */
  vatId: undefined as string | undefined,
} as const;

export function formatImprintAddress(country?: string): string {
  const { street, postalCode, city } = IMPRINT.address;
  const countryLabel = country ?? IMPRINT.address.country;
  return `${street}, ${postalCode} ${city}, ${countryLabel}`;
}
