import { useEffect, useState } from 'react';
import { ProductInfo } from '../../../../../proto/product_manager_pb';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { NavTabContainer } from '../../../../@core/modules/Navigation';
import { Select } from '../../../../@core/modules/Select';

import * as styled from './NavTabView.styled';

type Props = {
  data: ProductInfo.AsObject,
  onDelete: () => void,
  onPrint: () => void
};

type SelectProps = {
  label: string,
  value: string
}

const actions = [
  {
    label: 'Print Barcode',
    value: 'print_barcode'
  }, {
    label: 'Delete Product',
    value: 'delete_product'
  }
];

export const NavTabView: React.VFC<Props> = ({ data, onDelete, onPrint }) => {
  let available = data.stockOnHand - data.stockAllocated;
  const [selectedAction, setSelectedAction] = useState<SelectProps[]>([]);

  useEffect(() => {
    if(selectedAction && selectedAction.length) {
      if(selectedAction[0].value === 'print_barcode') {
        onPrint();
      } else if(selectedAction[0].value === 'delete_product') {
        onDelete()
      }
    }
  }, [selectedAction])

  return (
    <NavTabContainer>
      <styled.BodyWrapper>
        <styled.TagsContainer>
          {available < 1 && (<ItemRaw.ProductTag label="out-of-stock" />)}
          {available >= 1 && (<ItemRaw.ProductTag label="in-stock" />)}
        </styled.TagsContainer>
        <Select
          width={184}
          values={actions}
          selectedValues={selectedAction}
          onSelectedChanged={setSelectedAction}
          placeholder="Actions"
        />
      </styled.BodyWrapper>
    </NavTabContainer>
  );
};
