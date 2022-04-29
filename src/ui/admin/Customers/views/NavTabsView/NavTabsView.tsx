import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

import { AppRoutes } from '../../../../app/api';

import { MainButton } from '../../../../@core/modules/Button';
import { NavTabContainer } from '../../../../@core/modules/Navigation';

import { PlusIcon16 } from '../../../../../assets/icons';

import * as styled from './NavTabsView.styled';

type Props = {};

export const NavTabsView: React.FC<Props> = () => {
  const { word } = useLocale();
	const { push } = useHistory();

	const onAdd = useCallback(() => push(AppRoutes.Settings.Customers.Add), [push]);

  return (
    <NavTabContainer>
      <styled.ButtonWrapper>
        <MainButton icon={<PlusIcon16 />} children={word('global.add.customer')} onClick={onAdd} />
      </styled.ButtonWrapper>
    </NavTabContainer>
  );
};
