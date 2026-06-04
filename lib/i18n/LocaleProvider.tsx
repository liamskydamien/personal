'use client';

import { createContext, useContext } from 'react';
import { translations, type Locale, type Translations } from './translations';

type LocaleContextValue = {
  locale: Locale;
  t: Translations;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  t: translations.en,
});

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}
