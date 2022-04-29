import { useEffect } from 'react';
import { useLocale } from '../../../../../../assets/locale';
import { useNumberOfLineItemsFilter } from '../../hooks/useNumberOfLineItemsFilter';
import { useInputState } from '../../../../hooks/useInputState';

import { InputCustom } from '../../../Input';
import { Radio } from '../../../Radio';
import { List } from '../../components/List';

import * as styled from './NumberOfLineItemsFilter.styled';

type Props = {};
type ShowDate = {
  above: boolean;
  below: boolean;
  between: boolean;
};

export const NumberOfLineItemsFilter: React.VFC<Props> = () => {
  const { word } = useLocale();
  const [showDate, handleShowDate] = useInputState<ShowDate>();
  const { data, handleChange, hasApplied, dataApplied } = useNumberOfLineItemsFilter();

  useEffect(() => {
    if (hasApplied()) {
      const min = dataApplied?.min;
      const max = dataApplied?.max;
      if ((min || min === 0) && (max || max === 0)) handleShowDate({ target: { name: 'between', value: true } });
      else {
        if (min || min === 0) handleShowDate({ target: { name: 'above', value: true } });
        if (max || max === 0) handleShowDate({ target: { name: 'below', value: true } });
      }
    }
  }, [dataApplied, handleShowDate, hasApplied]);

  return (
    <List>
      <Radio label={word('global.above')} name="above" checked={showDate?.above} handleChangeEvent={handleShowDate} />
      {showDate?.above && (
        <InputCustom type="number" name="min" value={data?.min + ''} handleChangeEvent={handleChange} />
      )}
      <Radio label={word('global.below')} name="below" checked={showDate?.below} handleChangeEvent={handleShowDate} />
      {showDate?.below && (
        <InputCustom type="number" name="max" value={data?.max + ''} handleChangeEvent={handleChange} />
      )}
      <Radio
        label={word('global.between')}
        name="between"
        checked={showDate?.between}
        handleChangeEvent={handleShowDate}
      />
      {showDate?.between && (
        <>
          <styled.MaxMinRow>
            <styled.MaxMinCollumn>{word('global.min')}</styled.MaxMinCollumn>
            <styled.MaxMinCollumn>{word('global.max')}</styled.MaxMinCollumn>
          </styled.MaxMinRow>
          <styled.MaxMinRow>
            <styled.MaxMinCollumn>
              <InputCustom type="number" name="min" value={data?.min + ''} handleChangeEvent={handleChange} />
            </styled.MaxMinCollumn>
            <styled.MaxMinDevider>-</styled.MaxMinDevider>
            <styled.MaxMinCollumn>
              <InputCustom type="number" name="max" value={data?.max + ''} handleChangeEvent={handleChange} />
            </styled.MaxMinCollumn>
          </styled.MaxMinRow>
        </>
      )}
    </List>
  );
};
