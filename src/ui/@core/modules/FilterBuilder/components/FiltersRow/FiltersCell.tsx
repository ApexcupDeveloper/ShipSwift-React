import { useCallback, useMemo } from 'react';
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
} from '../../../../modules/FilterBuilder/hooks';
import { useShowedItemFilter } from './useShowedItemFilter';

import { Modal } from '../../../Modal';
import { MainButton } from '../../../Button';
import { ToggleButton } from '../../../Button';

import * as config from '../Select/Select.config';
import * as styled from './FiltersRow.styled';
import { cacheService } from '../../../../../../utils/cache-service';

type Props = {
  type: config.SelectType;
};

export const FiltersCell: React.FC<Props> = ({ type }) => {
  const { word } = useLocale();
  const { showed, setShowed } = useShowedItemFilter();

  const isVisible = useCallback(() => type === showed, [showed, type]);

  const toggleVisible = useCallback(() => {
    if (showed === type) setShowed(undefined);
    else setShowed(type);
  }, [setShowed, showed, type]);

  const typeObjectList = useMemo(() => config.selectMap(word), [word]);
  const typeObject = useMemo(() => typeObjectList(type), [typeObjectList, type]);

  const { getAllAplieds: customerGetAllAplieds, apply: customerApply, clear: customerClear } = useCustomerFilter();
  const { getAllAplieds: dateRangeGetAllAplieds, apply: dateRangeApply, clear: dateRangeClear } = useDateRangeFilter();
  const { getAllAplieds: statusGetAllAplieds, apply: statusApply, clear: statusClear } = useStatusFilter();
  const {
    getAllAplieds: numberOfLineItemsGetAllAplieds,
    apply: numberOfLineItemsApply,
    clear: numberOfLineItemsClear,
  } = useNumberOfLineItemsFilter();
  const { getAllAplieds: orderGetAllAplieds, apply: orderApply, clear: orderClear } = useOrderFilter();
  const { getAllAplieds: storeGetAllAplieds, apply: storeApply, clear: storeClear } = useStoreFilter();
  const { getAllAplieds: tagsGetAllAplieds, apply: tagsApply, clear: tagsClear } = useTagsFilter();
  const {
    getAllAplieds: stockQuantityGetAllAplieds,
    apply: stockQuantityApply,
    clear: stockQuantityClear,
  } = useStockQuantityFilter();

  const getAllApplieds = useCallback(() => {
    switch (type) {
      case 'customer':
        return customerGetAllAplieds;
      case 'dateRange':
        return dateRangeGetAllAplieds(word);
      case 'status':
        return statusGetAllAplieds;
      case 'numberOfLinesItems':
        return numberOfLineItemsGetAllAplieds;
      case 'order':
        return orderGetAllAplieds;
      case 'store':
        return storeGetAllAplieds;
      case 'tags':
        return tagsGetAllAplieds;
      case 'stockQuantity':
        return stockQuantityGetAllAplieds;
    }
  }, [
    customerGetAllAplieds,
    dateRangeGetAllAplieds,
    numberOfLineItemsGetAllAplieds,
    orderGetAllAplieds,
    statusGetAllAplieds,
    stockQuantityGetAllAplieds,
    storeGetAllAplieds,
    tagsGetAllAplieds,
    type,
    word,
  ]);

  const getApply = useCallback(() => {
    switch (type) {
      case 'customer':
        return customerApply;
      case 'dateRange':
        return dateRangeApply;
      case 'status':
        return statusApply;
      case 'numberOfLinesItems':
        return numberOfLineItemsApply;
      case 'order':
        return orderApply;
      case 'store':
        return storeApply;
      case 'tags':
        return tagsApply;
      case 'stockQuantity':
        return stockQuantityApply;
    }
  }, [
    customerApply,
    dateRangeApply,
    numberOfLineItemsApply,
    orderApply,
    statusApply,
    stockQuantityApply,
    storeApply,
    tagsApply,
    type,
  ]);

  const getClear = useCallback(() => {
    switch (type) {
      case 'customer':
        return customerClear;
      case 'dateRange':
        return dateRangeClear;
      case 'status':
        return statusClear;
      case 'numberOfLinesItems':
        return numberOfLineItemsClear;
      case 'order':
        return orderClear;
      case 'store':
        return storeClear;
      case 'tags':
        return tagsClear;
      case 'stockQuantity':
        return stockQuantityClear;
    }
  }, [
    customerClear,
    dateRangeClear,
    numberOfLineItemsClear,
    orderClear,
    statusClear,
    stockQuantityClear,
    storeClear,
    tagsClear,
    type,
  ]);

  return (
    <styled.CellWrapper>
      <styled.ButtonWrapper>
        <ToggleButton toggled={!isVisible()} onToggle={toggleVisible}>
          <styled.AllApliedsName>{useMemo(() => typeObject.label + ': ', [typeObject.label])}</styled.AllApliedsName>
          <styled.AllApliedsText>{getAllApplieds()}</styled.AllApliedsText>
        </ToggleButton>
      </styled.ButtonWrapper>
      <Modal
        title={typeObject.label}
        width={332}
        height={500}
        visible={isVisible()}
        onClose={toggleVisible}
        containerPin
        contentBottomPadding
        footer={
          <styled.FoterWrapper>
            <MainButton flat type="text" children={word('global.clear')} onClick={() => {
              getClear()();
              cacheService.clearCache('main_orders');
            }} />
            <MainButton
              children={word('global.apply')}
              onClick={() => {
                getApply()();
                toggleVisible();
                cacheService.clearCache('main_orders');
              }}
            />
          </styled.FoterWrapper>
        }
      >
        {typeObject.section}
      </Modal>
    </styled.CellWrapper>
  );
};
