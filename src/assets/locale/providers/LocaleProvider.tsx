import React from 'react';
import { _useLocale } from '../__hooks/_useLocale';

import { LocaleContext } from '../context/LocaleContext';
import { LocaleKeys } from '../models/common';
import { dictionary } from '../dictionary';

type Props = {
  defaultLocale: LocaleKeys;
};

export const LocaleProvider: React.FC<Props> = ({ children, defaultLocale }) => {
  const context = _useLocale(dictionary, defaultLocale);

  return <LocaleContext.Provider value={context}>{children}</LocaleContext.Provider>;
};
