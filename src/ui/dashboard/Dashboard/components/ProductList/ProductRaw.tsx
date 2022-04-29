import { useHistory } from 'react-router';
import { AppRoutes } from '../../../../app/api';
import { useMemo, useCallback } from 'react';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';

type Props = {
  name: string;
  sku: string;
  barcode: string;
  onHand: string;
  available: string;
  backorder: string;
  allocated: string;
};

export const ProductRaw: React.VFC<Props> = ({ name, sku, barcode, onHand, available, backorder, allocated }) => {
  const { push } = useHistory();
  const productLink = useMemo(() => AppRoutes.Products.Product.Index.replace(':id', sku), []);
  const onOpenProduct = useCallback(() => push(productLink, sku), [productLink, push]); //props for Product. Looks like in OrderRaw
  
  return (
    <ItemRaw hover onClick={onOpenProduct}>
      <ItemRaw.Title bold children={name} />
      <ItemRaw.Title children={sku} />
      <ItemRaw.Title children={barcode} />
      <ItemRaw.Title flex={0.5} children={onHand} />
      <ItemRaw.Title flex={0.5} children={allocated} />
      <ItemRaw.Title flex={0.5} children={available} />
      <ItemRaw.Title flex={0.5} children={backorder} />
    </ItemRaw>
  );
};
