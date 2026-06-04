'use client';

import Link from "next/link";
import posthog from "posthog-js";
import { useRouter } from "next/navigation";
import { PROFILE } from "@/lib/profile";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { setLocale } from "@/lib/i18n/actions";
import type { Locale } from "@/lib/i18n/translations";
import { useConsent } from "@/components/consent/ConsentProvider";

const FLAG_CDN = 'https://hatscripts.github.io/circle-flags/flags';

const LANGUAGES: { locale: Locale; flag: string; label: string }[] = [
  { locale: 'en', flag: 'gb', label: 'EN' },
  { locale: 'de', flag: 'de', label: 'DE' },
];

function LanguageSelector() {
  const { locale } = useLocale();
  const router = useRouter();

  async function handleSelect(next: Locale) {
    if (next === locale) return;
    posthog.capture("language_changed", { from: locale, to: next });
    await setLocale(next);
    router.refresh();
  }

  return (
    <div className="lang-selector" role="group" aria-label="Language">
      {LANGUAGES.map(({ locale: l, flag, label }) => (
        <button
          key={l}
          type="button"
          className={`lang-btn${locale === l ? ' lang-btn--active' : ''}`}
          onClick={() => handleSelect(l)}
          aria-pressed={locale === l}
          aria-label={label}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${FLAG_CDN}/${flag}.svg`}
            width={18}
            height={18}
            alt=""
            aria-hidden="true"
          />
          {label}
        </button>
      ))}
    </div>
  );
}

export function Footer() {
  const { t } = useLocale();
  const { openSettings } = useConsent();

  function handlePrivacySettings() {
    if (posthog.is_capturing()) {
      posthog.capture("footer_link_clicked", { label: "privacy_settings" });
    }
    openSettings();
  }

  return (
    <section className="section section-footer" data-screen-label="Footer">
      <div className="page">
        <div className="footer">
          <div>{t.footer.copyright}</div>
          <div className="footer-links">
            <button type="button" className="footer-link-btn" onClick={handlePrivacySettings}>
              {t.footer.privacySettingsLink}
            </button>
            <Link href="/impressum" onClick={() => posthog.capture("footer_link_clicked", { label: "imprint" })}>{t.footer.imprintLink}</Link>
            <Link href="https://cv.liamhess.dev" onClick={() => posthog.capture("footer_link_clicked", { label: "cv" })}>{t.footer.backgroundLink}</Link>
            <a
              href={`https://${PROFILE.contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => posthog.capture("footer_link_clicked", { label: "website" })}
            >
              {PROFILE.contact.website}
            </a>
          </div>
          <LanguageSelector />
        </div>
      </div>
    </section>
  );
}
