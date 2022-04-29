import { useCallback } from 'react';
import { DisplayRound } from '../../Other';

import * as styled from './ToggleButton.styled';
import * as icons from './ToggleButton.icons';

type Props = {
	toggled?: boolean;
	onToggle?: (value: boolean) => void;
};

export const ToggleButton: React.FC<Props> = ({ toggled, onToggle, children }) => {
	const toggle = useCallback(() => onToggle && onToggle(!toggled), [onToggle, toggled]);

  return (
    <DisplayRound>
      <styled.BodyWrapper onClick={toggle}>
        {children}
        <styled.IconWrapper data-toggled={toggled} >
          <icons.ArrowIcon16 />
        </styled.IconWrapper>
      </styled.BodyWrapper>
    </DisplayRound>
  );
};
