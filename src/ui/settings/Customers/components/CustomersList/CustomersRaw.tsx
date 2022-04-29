import { useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { Link } from 'react-router-dom';
import { ItemRaw, MoreMenu } from '../../../../@core/modules/ListBuilder';
import { AppRoutes } from '../../../../app/api';

type Props = {
  name   : string;
  surname: string;
  email  : string;
  phone  : string;
  orders : number | string;
};

export const CustomersRaw: React.VFC<Props> = ({ name, surname, email, phone, orders }) => {
  const { word } = useLocale();

  const customerPath = useMemo(() => AppRoutes.Settings.Customers.Selected.Index.replace(':id', '1'), []);
  const fullName = useMemo(() => `${name} ${surname}`, [name, surname]);

  return (
    <ItemRaw>
      <ItemRaw.Merge>
        <ItemRaw.Checkbox />
        <Link to={customerPath}>
          <ItemRaw.Title bold children={fullName} />
        </Link>
      </ItemRaw.Merge>
      <ItemRaw.Title children={email} />
      <ItemRaw.Title children={phone} />
      <ItemRaw.Title flex={0} children={orders} />
      <MoreMenu>
        <MoreMenu.Button children={word('global.edit')} />
        <MoreMenu.Button children={word('global.delete')} />
      </MoreMenu>
    </ItemRaw>
  );
};
