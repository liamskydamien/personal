'use client';

import type { ReactNode } from "react";
import { IMPRINT, formatImprintAddress } from "@/lib/imprint";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="legal-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function ImprintContent() {
  const { t } = useLocale();
  const imp = t.imprint;
  const providerLine = `${IMPRINT.provider.name} (${imp.legalForm})`;

  return (
    <div className="page legal-content">
      <LegalSection title={imp.providerTitle}>
        <p>{imp.providerIntro}</p>
        <address className="legal-address">
          <strong>{providerLine}</strong>
          <br />
          {formatImprintAddress(imp.addressCountry)}
        </address>
      </LegalSection>

      <LegalSection title={imp.contactTitle}>
        <dl className="legal-dl">
          <div>
            <dt>{imp.emailLabel}</dt>
            <dd>
              <a href={`mailto:${IMPRINT.contact.email}`}>{IMPRINT.contact.email}</a>
            </dd>
          </div>
          <div>
            <dt>{imp.websiteLabel}</dt>
            <dd>
              <a href={IMPRINT.website} rel="noopener noreferrer">
                {IMPRINT.website.replace(/^https?:\/\//, "")}
              </a>
            </dd>
          </div>
        </dl>
        <p className="legal-note">{imp.contactNote}</p>
      </LegalSection>

      {IMPRINT.vatId ? (
        <LegalSection title={imp.vatTitle}>
          <p>
            {imp.vatText} <strong>{IMPRINT.vatId}</strong>
          </p>
        </LegalSection>
      ) : null}

      <LegalSection title={imp.disputeTitle}>
        <p>{imp.disputeP1}</p>
        <p>
          {imp.disputeP2Prefix}{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
      </LegalSection>

      <LegalSection title={imp.liabilityContentTitle}>
        {imp.liabilityContent.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </LegalSection>

      <LegalSection title={imp.liabilityLinksTitle}>
        {imp.liabilityLinks.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </LegalSection>

      <LegalSection title={imp.copyrightTitle}>
        {imp.copyright.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </LegalSection>
    </div>
  );
}
