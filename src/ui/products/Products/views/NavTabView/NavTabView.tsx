import { useLocale } from '../../../../../assets/locale';

import { PlusIcon16, UploadIcon16 } from '../../../../../assets/icons';
import { MainButton } from '../../../../@core/modules/Button';
import { NavTabContainer } from '../../../../@core/modules/Navigation';

import * as styled from './NavTabView.styled';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { AppRoutes } from '../../../../app/api';

type Props = {};

export const NavTabView: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { push } = useHistory();
  const onAdd = useCallback(() => push(AppRoutes.Products.Add), [push]);

  return (
    <NavTabContainer>
      <styled.BodyWrapper>
        <MainButton icon={<UploadIcon16/>} type='text' children={word('global.upload.csv')} />
        <MainButton icon={<PlusIcon16/>} children={word('global.add.product')} onClick={onAdd} />
      </styled.BodyWrapper>
    </NavTabContainer>
  );
};
