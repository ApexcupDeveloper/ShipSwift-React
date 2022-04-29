import { useMemo } from 'react';
import {
  useCustomerFilter,
  useDateRangeFilter,
  useStatusFilter,
  useNumberOfLineItemsFilter,
  useOrderFilter,
  useStoreFilter,
  useTagsFilter,
} from '../../../../@core/modules/FilterBuilder/hooks';

import { SelectType } from '../../../../@core/modules/FilterBuilder/components/Select/Select.config';

import * as styled from './AppliedFilters.styled';
import { FiltersRow } from '../../../../@core/modules/FilterBuilder';

type Props = {};

export const AppliedFilters: React.FC<Props> = () => {
  const { hasApplied: customer }           = useCustomerFilter();
  const { hasApplied: dateRange }          = useDateRangeFilter();
  const { hasApplied: status }             = useStatusFilter();
  const { hasApplied: numberOfLinesItems } = useNumberOfLineItemsFilter();
  const { hasApplied: order }              = useOrderFilter();
  const { hasApplied: store }              = useStoreFilter();
  const { hasApplied: tags }               = useTagsFilter();

  const filters: { type: SelectType; applied: boolean}[] = useMemo(
    () => [
      { type: 'customer', applied: customer() },
      { type: 'dateRange', applied: dateRange() },
      { type: 'status', applied: status() },
      { type: 'numberOfLinesItems', applied: numberOfLinesItems() },
      { type: 'order', applied: order() },
      { type: 'store', applied: store() },
      { type: 'tags', applied: tags() },
    ],
    [customer, dateRange, numberOfLinesItems, order, status, store, tags]
  );

  return (
    <styled.BodyWrapper>
      <FiltersRow filters={filters} />
    </styled.BodyWrapper>
  );
};
