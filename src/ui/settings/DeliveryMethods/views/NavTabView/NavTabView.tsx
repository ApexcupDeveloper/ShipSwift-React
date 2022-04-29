import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { AppRoutes } from '../../../../app/api';

import { MainButton } from '../../../../@core/modules/Button';
import { NavTabContainer } from '../../../../@core/modules/Navigation';

import { PlusIcon16 } from '../../../../../assets/icons';

import * as styled from './NavTabView.styled';

type Props = {};

export const NavTabView: React.VFC<Props> = () => {
	const { word } = useLocale();
  const { push } = useHistory();

  const onAddMethod = useCallback(() => push(AppRoutes.Settings.DeliveryMethods.Add), [push]);

  return (
    <NavTabContainer>
      <styled.BodyWrapper>
        <MainButton icon={<PlusIcon16 />} children={word('global.add.method')} onClick={onAddMethod} />
      </styled.BodyWrapper>
    </NavTabContainer>
  );
};
