import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

import { AppRoutes } from '../../../../app/api';

import { MainButton } from '../../../../@core/modules/Button';
import { NavTabContainer } from '../../../../@core/modules/Navigation';

import { PlusIcon16 } from '../../../../../assets/icons';

import * as styled from './NavTabsView.styled';
import { InputSearch } from '../../../../@core/modules/Input';

type Props = {};

export const NavTabsView: React.FC<Props> = () => {
  const { word } = useLocale();
	const { push } = useHistory();

	const onAdd = useCallback(() => push(AppRoutes.Settings.Warehouses.Add), [push]);

  return (
    <NavTabContainer>
      <styled.ButtonWrapper>
        <InputSearch />
        <MainButton icon={<PlusIcon16 />} children={word('global.add.warehouse')} onClick={onAdd} />
      </styled.ButtonWrapper>
    </NavTabContainer>
  );
};
