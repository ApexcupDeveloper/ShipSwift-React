import { useMemo } from 'react';
import { useLocale } from '../../../../../../assets/locale';
import { useDatePicker } from '../../hooks/useDatePicker';
import { useWithoutBubble } from '../../../../hooks/useWithoutBubble';

import { DateSelectMode } from '../DateCell';
import { DateCell } from '../../utils/get-days-cells';
import { IconButton } from '../../../Button';
import { ArrowDownIconSmall16, CloseIconSquare16 } from '../../../../../../assets/icons';

import * as styled from './Input.styled';
import * as config from './Input.config';

type Props = {
  disabled?: boolean;
  clearable: boolean;
  showPicker: boolean;
  mode: DateSelectMode;
  onClick: () => void;
};

export const Input: React.VFC<Props> = ({ disabled = false, showPicker, clearable, mode, onClick }) => {
  const { startRange, endRange, setStartRange, setEndRange } = useDatePicker();
  const { word } = useLocale();

  const onClear = useWithoutBubble(() => {    
    setStartRange({});
    setEndRange({});
  });

  const formatted = useMemo(() => {
    const start = config.formatDate(startRange as DateCell, word);
    if (mode === 'one') return start;

    const end = config.formatDate(endRange as DateCell, word);
    if (!end) return '';

    return start + ' - ' + end;
  }, [startRange, word, endRange, mode]);

  const showClear = formatted && clearable;

  return (
    <styled.BodyWrapper data-disabled={disabled} onClick={onClick}>
      <styled.Date data-disabled={disabled}>{formatted}</styled.Date>
      {!showClear && (
        <styled.IconWrapper data-toggle={showPicker}>
          <IconButton disabled={disabled}>
            <ArrowDownIconSmall16 />
          </IconButton>
        </styled.IconWrapper>
      )}
      {showClear && (
        <styled.IconWrapper onClick={onClear}>
          <IconButton disabled={disabled}>
            <CloseIconSquare16 />
          </IconButton>
        </styled.IconWrapper>
      )}
    </styled.BodyWrapper>
  );
};
