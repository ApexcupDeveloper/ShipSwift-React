import { useCallback } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { cacheService } from '../../../../../utils/cache-service';

import { MainButton } from '../../../../@core/modules/Button';
import {
  useCustomerFilter,
  useDateRangeFilter,
  useStatusFilter,
  useNumberOfLineItemsFilter,
  useOrderFilter,
  useStoreFilter,
  useTagsFilter,
} from '../../../../@core/modules/FilterBuilder/hooks';
import { Modal, ModalProps } from '../../../../@core/modules/Modal';

import * as styled from './FiltersOrderModal.styled';

type Props = Pick<ModalProps, 'visible' | 'onClose'>;

export const FiltersOrderModal: React.FC<Props> = ({ children, visible = false, onClose }) => {
  const { word } = useLocale();
  const { apply: customerApply, clear: customerClear } = useCustomerFilter();
  const { apply: dateRangeApply, clear: dateRangeClear } = useDateRangeFilter();
  const { apply: statusApply, clear: statusClear } = useStatusFilter();
  const { apply: numberOfLinesItemsApply, clear: numberOfLinesItemsClear } = useNumberOfLineItemsFilter();
  const { apply: orderApply, clear: orderClear } = useOrderFilter();
  const { apply: storeApply, clear: storeClear } = useStoreFilter();
  const { apply: tagsApply, clear: tagsClear } = useTagsFilter();

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

  return (
    <Modal
      title={word('global.filters')}
      width={332}
      height={500}
      visible={visible}
      onClose={onClose}
      containerPin
      contentBottomPadding
      footer={
        <styled.FoterWrapper>
          <MainButton flat type="text" children={word('global.clear.all.filters')} onClick={() => {
            clear();
            cacheService.clearCache('main_orders');
          }} />
          <MainButton
            children={word('global.apply')}
            onClick={() => {
              apply();
              onClose?.();
              cacheService.clearCache('main_orders');
            }}
          />
        </styled.FoterWrapper>
      }
    >
      {children}
    </Modal>
  );
};
