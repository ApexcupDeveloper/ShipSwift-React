import { useLocale } from '../../../../../../assets/locale';

import { WeekDay } from './WeekDay';

import * as styled from './WeekDays.styled';

type Props = {};

export const WeekDays: React.VFC<Props> = () => {
  const { word } = useLocale();
	
  return (
		<styled.BodyWrapper>
			<WeekDay children={word('date-picker.week.sunday.short')} />
      <WeekDay children={word('date-picker.week.monday.short')} />
      <WeekDay children={word('date-picker.week.tuesday.short')} />
      <WeekDay children={word('date-picker.week.wednesday.short')} />
      <WeekDay children={word('date-picker.week.thursday.short')} />
      <WeekDay children={word('date-picker.week.friday.short')} />
      <WeekDay children={word('date-picker.week.saturday.short')} />
    </styled.BodyWrapper>
  );
};
