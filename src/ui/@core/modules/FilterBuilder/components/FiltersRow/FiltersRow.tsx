import { useMemo } from 'react';
import { FiltersCell } from './FiltersCell';
import { SelectType } from '../Select/Select.config';

import * as styled from './FiltersRow.styled';

type Props = {
  filters: { type: SelectType; applied: any }[];
};

export const FiltersRow: React.FC<Props> = ({ filters }) => {

  return (
    <styled.BodyWrapper>
      {useMemo(
        () => filters.filter((item) => item.applied).map(({ type }) => <FiltersCell key={type} type={type} />) || [],
        [filters]
      )}
    </styled.BodyWrapper>
  );
};
