import { useMemo } from 'react';
import { useStoreFilter, useTagsFilter, useStockQuantityFilter } from '../../../../@core/modules/FilterBuilder/hooks';

import { SelectType } from '../../../../@core/modules/FilterBuilder/components/Select/Select.config';

import * as styled from './AppliedFilters.styled';
import { FiltersRow } from '../../../../@core/modules/FilterBuilder';

type Props = {};

export const AppliedFilters: React.FC<Props> = () => {
  const { hasApplied: store } = useStoreFilter();
  const { hasApplied: tags } = useTagsFilter();
  const { hasApplied: stockQuantity } = useStockQuantityFilter();

  const filters: { type: SelectType; applied: boolean }[] = useMemo(
    () => [
      { type: 'store', applied: store() },
      { type: 'tags', applied: tags() },
      { type: 'stockQuantity', applied: stockQuantity() },
    ],
    [stockQuantity, store, tags]
  );

  return (
    <styled.BodyWrapper>
      <FiltersRow filters={filters} />
    </styled.BodyWrapper>
  );
};
