import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { CheckIcon16, CloseIconSquare16, PlusIcon16 } from '../../../../../assets/icons';
import { IconButton } from '../../../../@core/modules/Button';
import { InputSearch } from '../../../../@core/modules/Input';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { AvatarLetter } from '../../../../@core/modules/Other';
import { AppRoutes } from '../../../../app/api';

import * as styled from './ProductsList.styled';

type Props = {
  product: {
    image: string;
    name: string;
    code: string;
  };
  shipSwiftProduct?: {
    image: string;
    name: string;
    code: string;
  };
};

export const ProductRaw: React.VFC<Props> = ({ product, shipSwiftProduct }) => {
  const { push } = useHistory();

  const onAdd = useCallback(() => push(AppRoutes.Settings.LinkProducts.Search.Product), [push]);

  return (
    <ItemRaw>
      <ItemRaw.Merge>
        <ItemRaw.Checkbox />
        <AvatarLetter name={product.name} />
        <ItemRaw.ProductImage src={product.image} />
        <ItemRaw.NameContainer>
          <ItemRaw.Title bold children={product.name} />
          <ItemRaw.Title children={product.code} />
        </ItemRaw.NameContainer>
      </ItemRaw.Merge>
      {shipSwiftProduct && (
        <>
          <ItemRaw.Merge>
            <ItemRaw.ProductImage src={shipSwiftProduct.image} />
            <ItemRaw.NameContainer>
              <ItemRaw.Title bold children={shipSwiftProduct.name} />
              <ItemRaw.Title children={shipSwiftProduct.code} />
            </ItemRaw.NameContainer>
          </ItemRaw.Merge>
          <styled.IconButtonWrapper>
            <IconButton>
              <CheckIcon16 className={'green'} />
            </IconButton>
            <IconButton>
              <CloseIconSquare16 className={'red smaller-close'} />
            </IconButton>
          </styled.IconButtonWrapper>
        </>
      )}
      {!shipSwiftProduct && (
        <>
          <InputSearch />
          <styled.IconButtonWrapper>
            <IconButton onClick={onAdd}>
              <PlusIcon16 className={'grey'} />
            </IconButton>
          </styled.IconButtonWrapper>
        </>
      )}
    </ItemRaw>
  );
};
