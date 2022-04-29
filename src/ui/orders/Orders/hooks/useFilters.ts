import { useCallback } from 'react';
import {
  useCustomerFilter,
  useDateRangeFilter,
  useStatusFilter,
  useNumberOfLineItemsFilter,
  useOrderFilter,
  useStoreFilter,
  useTagsFilter,
} from '../../../@core/modules/FilterBuilder/hooks';

export const _useuseFilters = () => {
  const { apply: customerApply, clear: customerClear }                     = useCustomerFilter();
  const { apply: dateRangeApply, clear: dateRangeClear }                   = useDateRangeFilter();
  const { apply: statusApply, clear: statusClear }                         = useStatusFilter();
  const { apply: numberOfLinesItemsApply, clear: numberOfLinesItemsClear } = useNumberOfLineItemsFilter();
  const { apply: orderApply, clear: orderClear }                           = useOrderFilter();
  const { apply: storeApply, clear: storeClear }                           = useStoreFilter();
  const { apply: tagsApply, clear: tagsClear }                             = useTagsFilter();

  const apply = useCallback(
    () =>
      [customerApply, dateRangeApply, statusApply, numberOfLinesItemsApply, orderApply, storeApply, tagsApply].forEach(
        (items) => items()
      ),
    [customerApply, dateRangeApply, numberOfLinesItemsApply, orderApply, statusApply, storeApply, tagsApply]
  );

  const clear = useCallback(
    () =>
      [customerClear, dateRangeClear, numberOfLinesItemsClear, orderClear, statusClear, storeClear, tagsClear].forEach(
        (items) => items()
      ),
    [customerClear, dateRangeClear, numberOfLinesItemsClear, orderClear, statusClear, storeClear, tagsClear]
  );

  return { apply, clear };
};
