import { PROFILE } from "@/lib/profile";

/**
 * Provider identification per § 5 DDG (Digitale-Dienste-Gesetz).
 * Update street, postal code, and phone before publishing — a Postfach is not sufficient.
 */
export const IMPRINT = {
  provider: {
    name: PROFILE.name,
    /** e.g. "Natürliche Person", "Einzelunternehmer", "GmbH" */
    legalForm: "Natürliche Person",
  },
  address: {
    street: "Musterstraße 1",
    postalCode: "50667",
    city: "Köln",
    country: "Deutschland",
  },
  contact: {
    email: PROFILE.contact.email,
    phone: "+49 221 1234567",
  },
  website: `https://${PROFILE.contact.website}`,
  /** Leave undefined if you do not have a VAT ID (USt-IdNr.). */
  vatId: undefined as string | undefined,
} as const;

export function formatImprintAddress(): string {
  const { street, postalCode, city, country } = IMPRINT.address;
  return `${street}, ${postalCode} ${city}, ${country}`;
}
