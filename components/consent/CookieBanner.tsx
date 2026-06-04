'use client';

import { useLocale } from '@/lib/i18n/LocaleProvider';
import { useConsent } from './ConsentProvider';

export function CookieBanner() {
  const { t } = useLocale();
  const { consentStatus, accept, reject } = useConsent();

  if (consentStatus !== 'pending') return null;

  return (
    <div
      className="cookie-banner"
      role="region"
      aria-label={t.consent.bannerAriaLabel}
    >
      <div className="cookie-banner-inner page">
        <div className="cookie-banner-copy">
          <p className="cookie-banner-title">{t.consent.bannerTitle}</p>
          <p className="cookie-banner-text">{t.consent.bannerText}</p>
        </div>
        <div className="cookie-banner-actions">
          <button type="button" className="btn btn-ghost" onClick={reject}>
            {t.consent.reject}
          </button>
          <button type="button" className="btn btn-primary" onClick={accept}>
            {t.consent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
