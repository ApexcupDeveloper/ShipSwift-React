import { useMemo } from 'react';
import { useLocale } from '../../../../../../assets/locale';
import { useDatePicker } from '../../hooks/useDatePicker';

import { ArrowLeftIcon16, ArrowRightIcon16 } from '../../../../../../assets/icons';
import { IconButton } from '../../../Button';

import * as config from './ArrowsSelect.config';
import * as styled from './ArrowsSelect.styled';

type Props = {};

export const ArrowsSelect: React.VFC<Props> = () => {
	const { word } = useLocale();
	const { currentYear, currentMonth, nextMonth, prevMonth } = useDatePicker();

	const month = useMemo(() => config.monthMap(currentMonth, word), [currentMonth, word]);
	const formatDate = useMemo(() => `${month} ${currentYear}`, [month, currentYear]);

  return (
    <styled.BodyWrapper>
      <IconButton onClick={prevMonth}>
        <ArrowLeftIcon16 />
      </IconButton>
			<styled.Title>{formatDate}</styled.Title>
      <IconButton onClick={nextMonth}>
        <ArrowRightIcon16 />
      </IconButton>
    </styled.BodyWrapper>
  );
};
