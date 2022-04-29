import { useLocale } from '../../../../../assets/locale';

import { IconButton, MainButton } from '../../../../@core/modules/Button';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';

import { EditIcon18, TrashIcon16 } from '../../../../../assets/icons';

import * as styled from './WarehouseList.styled';

type Props = {
  name: string;
  account: string;
  service: string;
  activated: boolean;
};

export const WarehouseRaw: React.VFC<Props> = ({ name, account, service, activated }) => {
  const { word } = useLocale();

  return (
    <ItemRaw>
      <ItemRaw.Title bold children={name} />
      <ItemRaw.Title children={account || '-'} />
      <ItemRaw.Title children={service || word('global.none')} />
      {!activated && <MainButton type="text-green" flat children={word('global.activate')} />}
      {activated && (
        <styled.IconButtonWrapper>
          <IconButton>
            <EditIcon18 />
          </IconButton>
          <IconButton>
            <TrashIcon16 />
          </IconButton>
        </styled.IconButtonWrapper>
      )}
    </ItemRaw>
  );
};
