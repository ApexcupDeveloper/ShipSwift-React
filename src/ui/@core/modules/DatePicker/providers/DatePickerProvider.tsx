import React from 'react';
import { _useDatePicker } from '../__hooks/_useDatePicker';

import { DatePickerContext } from '../context/DatePickerContext';
import { DateChangeEvent } from '../views/DatePickerView/DatePickerView.types';
import { DateSelectMode } from '../components/DateCell';

import { Nullable } from '../../../../../utils';

type Props = {
  /**
   * Target name.
   */
  name?: string;

  /**
   * Start date milliseconds.
   */
  startDate?: Nullable<number>;

  /**
   * Start date milliseconds.
   */
  endDate?: Nullable<number>;

  /**
   * @default 'one'
   */
  mode?: DateSelectMode;

  /**
   * Handle select start range or one value.
   * @param value Milliseconds
   */
  onSelectStart?: (event: DateChangeEvent) => void;

  /**
   * Handle select end range for multi mode.
   * @param value Milliseconds
   */
  onSelectEnd?: (event: DateChangeEvent) => void;
};

export const DatePickerProvider: React.FC<Props> = ({ children, ...props }) => {
  const context = _useDatePicker(props);

  return <DatePickerContext.Provider value={context}>{children}</DatePickerContext.Provider>;
};
