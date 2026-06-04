'use client';

import { ConsentProvider } from './ConsentProvider';
import { CookieBanner } from './CookieBanner';
import { ConsentModal } from './ConsentModal';

export function PostHogConsent({ children }: { children: React.ReactNode }) {
  return (
    <ConsentProvider>
      {children}
      <CookieBanner />
      <ConsentModal />
    </ConsentProvider>
  );
}
