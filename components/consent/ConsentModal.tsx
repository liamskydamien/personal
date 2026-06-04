'use client';

import { useEffect } from 'react';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { useConsent } from './ConsentProvider';

export function ConsentModal() {
  const { t } = useLocale();
  const { consentStatus, settingsOpen, closeSettings, accept, reject } =
    useConsent();

  useEffect(() => {
    if (!settingsOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeSettings();
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [settingsOpen, closeSettings]);

  if (!settingsOpen) return null;

  const statusLabel =
    consentStatus === 'granted'
      ? t.consent.statusGranted
      : consentStatus === 'denied'
        ? t.consent.statusDenied
        : t.consent.statusPending;

  return (
    <div className="consent-modal" aria-hidden={false}>
      <button
        type="button"
        className="consent-modal-backdrop"
        aria-label={t.consent.close}
        onClick={closeSettings}
      />
      <div
        className="consent-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-modal-title"
        aria-describedby="consent-modal-desc"
      >
        <div className="consent-modal-head">
          <h2 id="consent-modal-title" className="consent-modal-title">
            {t.consent.modalTitle}
          </h2>
          <button
            type="button"
            className="consent-modal-close"
            aria-label={t.consent.close}
            onClick={closeSettings}
          >
            ×
          </button>
        </div>
        <p id="consent-modal-desc" className="consent-modal-text">
          {t.consent.modalText}
        </p>
        <p className="consent-modal-status">
          <span className="consent-modal-status-label">
            {t.consent.statusLabel}
          </span>{' '}
          <span
            className={`consent-modal-status-value consent-modal-status-value--${consentStatus}`}
          >
            {statusLabel}
          </span>
        </p>
        <div className="consent-modal-actions">
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
