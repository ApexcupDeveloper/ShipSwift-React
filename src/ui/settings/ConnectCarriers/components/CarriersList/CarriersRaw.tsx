import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

import { MainButton } from '../../../../@core/modules/Button';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { HideWhenShipping } from '../HideWhenShipping';

import { SettingsIcon20 } from '../../../../../assets/icons';
import { AppRoutes } from '../../../../app/api';

type Props = {
  item: {
    name: string;
    description: string;
    image: string;
    account: string;
  };
  status: boolean;
  toggle: boolean;
  path: string;
  editPath: string;
  onToggle: () => void;
};

export const CarriersRaw: React.VFC<Props> = ({ item, status, path, editPath, toggle, onToggle }) => {
  const { word } = useLocale();
  const { push } = useHistory();

  const onConnect = useCallback(() => push(path), [path, push]);
  const onEdit = useCallback(() => push(editPath), [editPath, push]);

  return (
    <ItemRaw>
      <ItemRaw.Merge flex={2}>
        <ItemRaw.ProductImage contain src={item.image} />
        <ItemRaw.NameContainer>
          <ItemRaw.Title bold children={item.name} />
          <ItemRaw.Title children={item.description} />
        </ItemRaw.NameContainer>
      </ItemRaw.Merge>
      <ItemRaw.Switch checked={toggle} onClick={onToggle} />
      <ItemRaw.ActiveStatus label={toggle ? 'active' : 'inactive'} />
      {status && <MainButton icon={<SettingsIcon20 />} children={word('settings')} onClick={onEdit} />}
      {!status && <MainButton type={'secondary'} children={word('global.connect')} onClick={onConnect} />}
    </ItemRaw>
  );
};
