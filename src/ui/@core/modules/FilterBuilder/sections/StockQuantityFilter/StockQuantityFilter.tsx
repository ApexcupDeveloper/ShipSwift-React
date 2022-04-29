import { useCallback } from 'react';
import { useLocale } from '../../../../../../assets/locale';
import { useStockQuantityFilter } from '../../hooks/useStockQuantityFilter';

import { Slider } from '../../../Slider';
import { InputCustom } from '../../../Input';
import { List } from '../../components/List';

import * as styled from './StockQuantityFilter.styled';
import { range } from 'lodash';

type Props = {};

const MIN = 0;
const MAX = 5000;

const getFormated = (value: number | undefined | null) => {
  if (value || value === 0) return value + '';
  return '';
};

export const StockQuantityFilter: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { dataMin, dataMax,  handleStart, handleEnd, handleRange } = useStockQuantityFilter();

  const normalize = useCallback(() => {
    const min = dataMin;
    const max = dataMax;
    if (!min && !max) return;
    else if ((max || 0) > MAX) {
      handleEnd({ target: { name: range, value: MAX } });
    } else if ((min || 0) > (max || 0)) {
      handleRange({
        target: {
          name: 'range',
          value: [max || 0, (min || 0) > MAX ? MAX : min],
        },
      });
    }
  }, [dataMax, dataMin, handleEnd, handleRange]);

  return (
    <List>
      <styled.MaxMinRow>
        <styled.MaxMinCollumn>{word('global.min')}</styled.MaxMinCollumn>
        <styled.MaxMinCollumn>{word('global.max')}</styled.MaxMinCollumn>
      </styled.MaxMinRow>
      <styled.MaxMinRow>
        <styled.MaxMinCollumn>
          <InputCustom
            name="range"
            type="number"
            value={getFormated(dataMin)}
            handleChangeEvent={handleStart}
            onBlur={normalize}
          />
        </styled.MaxMinCollumn>
        <styled.MaxMinDevider>-</styled.MaxMinDevider>
        <styled.MaxMinCollumn>
          <InputCustom
            name="range"
            type="number"
            value={getFormated(dataMax)}
            handleChangeEvent={handleEnd}
            onBlur={normalize}
          />
        </styled.MaxMinCollumn>
      </styled.MaxMinRow>
      <Slider
        name="range"
        range={true}
        min={MIN}
        max={MAX}
        value={[dataMin || 0, dataMax || 0] as [number, number]}
        handleChangeEvent={handleRange}
      />
    </List>
  );
};
