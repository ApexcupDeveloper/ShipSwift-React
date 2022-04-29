import { useCallback } from 'react';
import { useStoreFilter, useTagsFilter, useStockQuantityFilter } from '../../../../@core/modules/FilterBuilder/hooks';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { Modal, ModalProps } from '../../../../@core/modules/Modal';

import * as styled from './FiltersProductsModal.styled';
import { cacheService } from '../../../../../utils/cache-service';

type Props = Pick<ModalProps, 'visible' | 'onClose'>;

export const FiltersProductsModal: React.FC<Props> = ({ children, visible = false, onClose }) => {
  const { word } = useLocale();
  const { apply: storeApply, clear: storeClear } = useStoreFilter();
  const { apply: tagsApply, clear: tagsClear } = useTagsFilter();
  const { apply: stockQuantityApply, clear: stockQuantityClear } = useStockQuantityFilter();

  const apply = useCallback(
    () => [storeApply, tagsApply, stockQuantityApply].forEach((items) => items()),
    [storeApply, tagsApply, stockQuantityApply]
  );

  const clear = useCallback(
    () => [storeClear, tagsClear, stockQuantityClear].forEach((items) => items()),
    [stockQuantityClear, storeClear, tagsClear]
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
          <MainButton flat type="text" children={word('global.clear.all.filters')} onClick={() => { clear(); cacheService.clearCache('main_orders'); }} />
          <MainButton children={word('global.apply')} onClick={() => { apply(); onClose?.(); cacheService.clearCache('main_orders');}} />
        </styled.FoterWrapper>
      }
    >
      {children}
    </Modal>
  );
};
