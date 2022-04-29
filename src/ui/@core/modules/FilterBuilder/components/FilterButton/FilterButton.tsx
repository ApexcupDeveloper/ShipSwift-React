import { useMemo } from 'react';
import { useLocale } from '../../../../../../assets/locale';
import {
  useCustomerFilter,
  useDateRangeFilter,
  useStatusFilter,
  useNumberOfLineItemsFilter,
  useOrderFilter,
  useStoreFilter,
  useTagsFilter,
  useStockQuantityFilter,
} from '../../hooks';

import { MainButton } from '../../../Button';

import * as styled from './FilterButton.styled';
import { FiltersIcon16 } from '../../../../../../assets/icons';

type Props = { onClick: () => void; showed?: boolean };

export const FilterButton: React.VFC<Props> = ({ onClick, showed }) => {
  const { hasApplied: customer } = useCustomerFilter();
  const { hasApplied: dateRange } = useDateRangeFilter();
  const { hasApplied: status } = useStatusFilter();
  const { hasApplied: numberOfLinesItems } = useNumberOfLineItemsFilter();
  const { hasApplied: order } = useOrderFilter();
  const { hasApplied: store } = useStoreFilter();
  const { hasApplied: tags } = useTagsFilter();
  const { hasApplied: stockQuantity } = useStockQuantityFilter();

  const applieds = useMemo(
    () =>
      [customer, dateRange, status, numberOfLinesItems, order, store, tags, stockQuantity]
        .map((item) => item?.())
        .filter(Boolean).length,
    [customer, dateRange, numberOfLinesItems, order, status, stockQuantity, store, tags]
  );

  const { word } = useLocale();
  const icon = useMemo(
    () => (applieds <= 0 ? <FiltersIcon16 /> : <styled.IconWrapper children={<div>{applieds}</div>} />),
    [applieds]
  );
  const typeText = showed ? 'text-green' : 'text';

  return <MainButton onClick={onClick} flat type={typeText} icon={icon} children={word('global.filters')} />;
};
