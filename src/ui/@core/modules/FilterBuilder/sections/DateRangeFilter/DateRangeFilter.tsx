import { useInputState } from '../../../../hooks/useInputState';
import { useEffect } from 'react';
import { useLocale } from '../../../../../../assets/locale';
import { useDateRangeFilter, DateRangeFilter as DateRangeFilterType } from '../../hooks/useDateRangeFilters';

import { DatePickerContainer } from './DatePickerContainer';
import { DatePickerProvider } from '../../../DatePicker/providers/DatePickerProvider';
import { Checkbox } from '../../../Checkbox';
import { List } from '../../components/List';

type Props = {};
type ShowDate = { [k in keyof DateRangeFilterType]: boolean };

export const DateRangeFilter: React.VFC<Props> = () => {
  const { word } = useLocale();
  const [showDate, handleShowDate] = useInputState<ShowDate>();
  const { data, hasApplied, dataApplied } = useDateRangeFilter();

  useEffect(() => {
    if (!hasApplied()) return;
    Object.entries({ ...dataApplied }).forEach((item) => {
      handleShowDate({
        target: {
          name: item[0],
          value: true,
        },
      });
    });
  }, [dataApplied, handleShowDate, hasApplied]);

  return (
    <List>
      <Checkbox
        label={word('global.order')}
        name={'order'}
        handleChangeEvent={handleShowDate}
        checked={showDate?.order}
      />
      {showDate?.order && (
        <DatePickerContainer name={'order'} startDate={data?.order?.[0]} endDate={data?.order?.[1]} />
      )}
      <DatePickerProvider>
        <Checkbox
          label={word('global.shipped')}
          name={'shipped'}
          handleChangeEvent={handleShowDate}
          checked={showDate?.shipped}
        />
      </DatePickerProvider>
      {showDate?.shipped && (
        <DatePickerContainer name="shipped" startDate={data?.shipped?.[0]} endDate={data?.shipped?.[1]} />
      )}
      <Checkbox label={word('global.due')} name={'due'} handleChangeEvent={handleShowDate} checked={showDate?.due} />
      {showDate?.due && <DatePickerContainer name="due" startDate={data?.due?.[0]} endDate={data?.due?.[1]} />}
    </List>
  );
};
