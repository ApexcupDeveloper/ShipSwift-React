import { useDateRangeFilter } from '../../hooks';

import * as styled from './DatePickerContainer.styled';
import { Nullable } from '../../../../../../utils';
import { DatePicker } from '../../../DatePicker';

type Props = {
  name: string;
  startDate: Nullable<number>;
  endDate: Nullable<number>;
};

export const DatePickerContainer: React.FC<Props> = ({ name, startDate, endDate }) => {
  const { handleStart, handleEnd } = useDateRangeFilter();  

  return (
    <styled.BodyWrapper>
      <DatePicker
        name={name}
        onSelectStart={handleStart}
        onSelectEnd={handleEnd}
        startDate={startDate}
        endDate={endDate}
        mode="multi"
        clearable={false}
      />
    </styled.BodyWrapper>
  );
};
