import { useCallback, useMemo, useState } from 'react';
import { CommonDictionary, LocaleKeys, DictionaryKeys } from '../models/common';

export type WordFunc = ReturnType<typeof _useLocale>['word'];

export const _useLocale = (locales: CommonDictionary, defaultLocale: LocaleKeys) => {
  const [localeKey, setLocaleKey] = useState(defaultLocale);

  const locale = useMemo(() => {		
    switch (localeKey) {
      case 'en':
        return locales.en;

      default:
				
        setLocaleKey('en');
        return locales.en;
    }
  }, [localeKey, locales]);

  const word = useCallback((key: DictionaryKeys, orValue?: string) => locale[key] ?? orValue ?? 'Unknown', [locale]);

  return { word, setLocale: setLocaleKey };
};
