import { NavTab } from '../../../../@core/modules/Navigation';
import * as styled from './NavTabsView.styled';

type Props = {};

export const NavTabsView: React.FC<Props> = ({ children }) => {
  return (
    <styled.BodyWrapper>
      <NavTab />
      {children}
    </styled.BodyWrapper>
  );
};
