import { useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';

import { ItemRaw, MoreMenu } from '../../../../@core/modules/ListBuilder';

type Props = {
  name     : string;
  sku      : string;
  barcode  : string;
  onHand   : string;
  available: string;
  backorder: string;
  allocated: string;
};

export const ProductRaw: React.VFC<Props> = ({ name, sku, barcode, onHand, available, backorder, allocated }) => {
  const { word } = useLocale();

  return (
    <ItemRaw>
      <ItemRaw.Merge flex={1.5}>
        <ItemRaw.Checkbox />
        <Link to={useMemo(() => AppRoutes.Products.Product.Index.replace(':id', '1'), [])}>
          <ItemRaw.Title bold children={name} />
        </Link>
      </ItemRaw.Merge>
      <ItemRaw.Title children={sku} />
      <ItemRaw.Title children={barcode} />
      <ItemRaw.Title flex={0.5} children={onHand} />
      <ItemRaw.Title flex={0.5} children={available} />
      <ItemRaw.Title flex={0.5} children={backorder} />
      <ItemRaw.Merge flex={0.5}>
        <ItemRaw.Space flex={1} />
        <ItemRaw.Title children={allocated} />
        <MoreMenu position="bottom">
          <MoreMenu.Button children={word('global.print.label')} />
          <MoreMenu.Button children={word('global.export.csv')} />
          <MoreMenu.Button children={word('global.edit')} />
          <MoreMenu.Button children={word('global.inactivate.store')} />
          <MoreMenu.Button children={word('global.delete')} />
        </MoreMenu>
      </ItemRaw.Merge>
    </ItemRaw>
  );
};
