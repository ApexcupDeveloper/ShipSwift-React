import { EditIcon18 } from '../../../../../assets/icons';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { NavTabContainer } from '../../../../@core/modules/Navigation';

import * as styled from './NavTabView.styled';

type Props = {};

export const NavTabView: React.FC<Props> = () => {
  const { word } = useLocale();

  return (
    <NavTabContainer>
      <styled.BodyWrapper>
        {/* <MainButton flat icon={<EditIcon18 />} type={'text-green'} children={word('global.edit.warehouse')} /> */}
      </styled.BodyWrapper>
    </NavTabContainer>
  );
};
