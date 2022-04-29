import { Tooltip } from '../../../../@core/modules/Tooltip';

import * as styled from './NavLink.styled';

type Props = {
  icon: React.ReactNode;
  label: string;
  showLabel?: boolean;
  onOpen: () => void;
  isOpen: boolean;
  type?: string;
};

export const NavButton: React.VFC<Props> = ({ icon, label, showLabel = true, onOpen, isOpen, type }) => {
  return (
    <button onClick={onOpen}>
      <styled.BodyWrapper data-is-open={showLabel}>
        <styled.IconWrapper data-active={isOpen} data-is-open={showLabel}>
          <Tooltip align="left" position="center" disabled={showLabel} content={label}>
            {icon}
          </Tooltip>
        </styled.IconWrapper>
        {showLabel && <styled.Label data-active={isOpen}>{label}</styled.Label>}
      </styled.BodyWrapper>
    </button>
  );
};
