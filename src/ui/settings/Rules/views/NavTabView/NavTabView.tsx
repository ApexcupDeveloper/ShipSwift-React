import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

import { AppRoutes } from '../../../../app/api';

import { MainButton } from '../../../../@core/modules/Button';
import { NavTabContainer } from '../../../../@core/modules/Navigation';

import { PlusIcon16 } from '../../../../../assets/icons';

import * as styled from './NavTabView.styled';

type Props = {};

export const NavTabView: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { push } = useHistory();

  const onAdd = useCallback(() => push(AppRoutes.Settings.Rules.Add), [push]);

  return (
    <NavTabContainer>
      <styled.BodyWrapper>
        <MainButton icon={<PlusIcon16 />} children={word('global.add.rule')} onClick={onAdd} />
      </styled.BodyWrapper>
    </NavTabContainer>
  );
};
