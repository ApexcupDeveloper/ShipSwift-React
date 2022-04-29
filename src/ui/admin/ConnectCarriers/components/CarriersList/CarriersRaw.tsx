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
  };
  hideWhenShipping: boolean;
  connected: boolean;
};

export const CarriersRaw: React.VFC<Props> = ({ item, hideWhenShipping, connected }) => {
  const { word } = useLocale();
  const { push } = useHistory();

  const onConnect = useCallback(() => push(AppRoutes.Settings.ConnectCarriers.Step1.Index), [push]);

  return (
    <ItemRaw>
      <ItemRaw.Merge flex={2}>
        <ItemRaw.ProductImage contain src={item.image} />
        <ItemRaw.NameContainer>
          <ItemRaw.Title bold children={item.name} />
          <ItemRaw.Title children={item.description} />
        </ItemRaw.NameContainer>
      </ItemRaw.Merge>
      <HideWhenShipping hide={hideWhenShipping} />
      {connected && <MainButton icon={<SettingsIcon20 />} children={word('settings')} />}
      {!connected && <MainButton type={'secondary'} children={word('global.connect')} onClick={onConnect} />}
    </ItemRaw>
  );
};
