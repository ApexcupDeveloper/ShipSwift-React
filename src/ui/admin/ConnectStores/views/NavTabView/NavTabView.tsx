import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';
import { useCallback, useState } from 'react';

import { AppRoutes } from '../../../../app/api';

import { MainButton } from '../../../../@core/modules/Button';
import { NavTabContainer } from '../../../../@core/modules/Navigation';
import { Select, SelectOption } from '../../../../@core/modules/Select';

import { PlusIcon16 } from '../../../../../assets/icons';

import * as config from './NavTabView.config';
import * as styled from './NavTabView.styled';

type Props = {};

export const NavTabView: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { push } = useHistory();

  const [selectedQuick, setSelectedQuick] = useState<SelectOption[]>([]);

  const onAdd = useCallback(() => {
    const [quick] = selectedQuick;
    push((quick?.value as string) ?? AppRoutes.Settings.ConnectStores.SetUpStore.Index);
  }, [push, selectedQuick]);

  return (
    <NavTabContainer>
      <styled.BodyWrapper>
        <Select
          width={160}
          values={config.quickStoresList}
          selectedValues={selectedQuick}
          onSelectedChanged={setSelectedQuick}
          placeholder={word('global.quick.adding')}
        />
        <MainButton children={word('global.add.store')} icon={<PlusIcon16 />} onClick={onAdd} />
      </styled.BodyWrapper>
    </NavTabContainer>
  );
};
