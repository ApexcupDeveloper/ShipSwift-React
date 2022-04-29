import { createRef, useEffect } from 'react';
import { useCallback, useState } from 'react';

import { TooltipAdapter } from '../../../Tooltip';
import { MoreHorizontalIcon16 } from '../../../../../../assets/icons';
import { IconButton } from '../../../Button';
import { Tooltip } from '../../../Tooltip';
import { Align, Position } from '../../../Tooltip/Tooltip/Tooltip.styled';
import { Button } from './Button';

import * as styled from './MoreMenu.styled';

type Props = {
  align?: Align;
  position?: Position;
  visible?: boolean;
} & { flex?: number; onClickWrapper?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void };
type FCMoreMenu = React.FC<Props> & {
  Button: typeof Button;
};

const MoreMenu: FCMoreMenu = ({ children, align = 'right', position = 'center', onClickWrapper, visible }) => {
  const [showMenu, setShowMenu] = useState(false);
  const onClose = useCallback(() => setShowMenu(false), []);
  const onToggle = useCallback(() => setShowMenu((prev) => !prev), []);

  const menuRef = createRef<HTMLDivElement>();

  useEffect(() => {
    showMenu && menuRef.current?.focus();
    
    if(visible) {
      setShowMenu(false);
    }
  }, [menuRef, showMenu]);

  return (
    <styled.BodyWrapper onClick={onClickWrapper} tabIndex={0} ref={menuRef} onBlur={onClose}>
      <TooltipAdapter
        tooltip={
          <Tooltip content={children} visible={showMenu} disabled={!showMenu} align={align} position={position}>
            <IconButton onClick={onToggle}>
              <MoreHorizontalIcon16 className={showMenu ? 'active' : ''} />
            </IconButton>
          </Tooltip>
        }
      />
    </styled.BodyWrapper>
  );
};

MoreMenu.Button = Button;

export { MoreMenu };
