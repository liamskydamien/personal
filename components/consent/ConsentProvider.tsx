'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  acceptAnalytics,
  getConsentStatus,
  rejectAnalytics,
  type ConsentStatus,
} from '@/lib/analytics/consent';

type ConsentContextValue = {
  consentStatus: ConsentStatus;
  settingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  accept: () => void;
  reject: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');
  const [settingsOpen, setSettingsOpen] = useState(false);

  const syncStatus = useCallback(() => {
    setConsentStatus(getConsentStatus());
  }, []);

  useEffect(() => {
    syncStatus();
  }, [syncStatus]);

  const closeSettings = useCallback(() => {
    setSettingsOpen(false);
  }, []);

  const openSettings = useCallback(() => {
    setSettingsOpen(true);
  }, []);

  const accept = useCallback(() => {
    acceptAnalytics();
    syncStatus();
    setSettingsOpen(false);
  }, [syncStatus]);

  const reject = useCallback(() => {
    rejectAnalytics();
    syncStatus();
    setSettingsOpen(false);
  }, [syncStatus]);

  const value = useMemo(
    () => ({
      consentStatus,
      settingsOpen,
      openSettings,
      closeSettings,
      accept,
      reject,
    }),
    [consentStatus, settingsOpen, openSettings, closeSettings, accept, reject],
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error('useConsent must be used within ConsentProvider');
  }
  return ctx;
}
