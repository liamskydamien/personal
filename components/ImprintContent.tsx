import type { ReactNode } from "react";
import { IMPRINT, formatImprintAddress } from "@/lib/imprint";

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
  const providerLine = IMPRINT.provider.legalForm
    ? `${IMPRINT.provider.name} (${IMPRINT.provider.legalForm})`
    : IMPRINT.provider.name;

  return (
    <div className="page legal-content">
      <LegalSection title="Angaben gemäß § 5 DDG">
        <p>
          Diensteanbieter im Sinne des Digitale-Dienste-Gesetzes (DDG) ist:
        </p>
        <address className="legal-address">
          <strong>{providerLine}</strong>
          <br />
          {formatImprintAddress()}
        </address>
      </LegalSection>

      <LegalSection title="Kontakt">
        <dl className="legal-dl">
          <div>
            <dt>E-Mail</dt>
            <dd>
              <a href={`mailto:${IMPRINT.contact.email}`}>{IMPRINT.contact.email}</a>
            </dd>
          </div>
          <div>
            <dt>Telefon</dt>
            <dd>
              <a href={`tel:${IMPRINT.contact.phone.replace(/\s/g, "")}`}>
                {IMPRINT.contact.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt>Website</dt>
            <dd>
              <a href={IMPRINT.website} rel="noopener noreferrer">
                {IMPRINT.website.replace(/^https?:\/\//, "")}
              </a>
            </dd>
          </div>
        </dl>
        <p className="legal-note">
          Für eine schnelle, unmittelbare Erreichbarkeit stehen E-Mail und Telefon zur Verfügung.
        </p>
      </LegalSection>

      {IMPRINT.vatId ? (
        <LegalSection title="Umsatzsteuer">
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:{" "}
            <strong>{IMPRINT.vatId}</strong>
          </p>
        </LegalSection>
      ) : null}

      <LegalSection title="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
          bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte">
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
          Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
          als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
          allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
          erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
          entfernen.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
          übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
          Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
          Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
          Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
          Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
          gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
          bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </LegalSection>
    </div>
  );
}
