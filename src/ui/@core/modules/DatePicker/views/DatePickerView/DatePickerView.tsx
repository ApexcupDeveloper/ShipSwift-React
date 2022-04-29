import { useCallback, useEffect, useState } from 'react';
import { useDatePicker } from '../../hooks/useDatePicker';

import { ArrowsSelect } from '../../components/ArrowsSelect';
import { DateMatrix } from '../../components/DateMatrix';
import { Input } from '../../components/Input';
import { WeekDays } from '../../components/WeekDays';

import { isEmpty } from '../../../../../../utils';

import * as styled from './DatePickerView.styled';

type Props = {
  /**
   * @default false
   */
  dropdown?: boolean;

  /**
   * @default false
   */
  clearable?: boolean;
};

export const DatePickerView: React.VFC<Props> = ({
  clearable = false,
  dropdown = false,
}) => {
  const { startRange, endRange, mode } = useDatePicker();
  const [showPicker, setShowPicker] = useState(false);

  const onToggleShow = useCallback(() => setShowPicker((prev) => !prev), []);
  const onHidden = useCallback(() => setShowPicker(false), []);

  useEffect(() => {
    if (!isEmpty(startRange)) {
      if (mode === 'one' || !isEmpty(endRange)) return setShowPicker(false);
    }
  }, [startRange, mode, endRange, onToggleShow]);
  
  return (
    <styled.BodyWrapper tabIndex={0} onBlur={onHidden}>
      <Input mode={mode} onClick={onToggleShow} showPicker={showPicker} clearable={clearable} />
      <styled.RelativeContainer data-show={showPicker}>
        <styled.DropdownContainer data-dropdown={dropdown}>
          <styled.DateWrapper>
            <ArrowsSelect />
            <WeekDays />
            <DateMatrix />
          </styled.DateWrapper>
        </styled.DropdownContainer>
      </styled.RelativeContainer>
    </styled.BodyWrapper>
  );
};
