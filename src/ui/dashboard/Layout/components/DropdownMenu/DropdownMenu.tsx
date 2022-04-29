import { createRef, useMemo, useEffect, useCallback } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { Link } from 'react-router-dom';

import * as styled from './DropdownMenu.styled';
import * as config from './DropdownMenu.config';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { cacheService } from '../../../../../utils/cache-service';

type Props = {
  visible: boolean;
  onBlur: () => void;
  onClose?: () => void;
};

export const DropdownMenu: React.FC<Props> = ({ visible, onBlur, onClose }) => {
  const { word } = useLocale();
  const { logout } = useAuth0();
  const menuRef = createRef<HTMLDivElement>();
  const navigation = useMemo(() => config.navMap(word), [word]);
  const onBubbleFocus = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  }, []);

  const onLogout = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    // cacheService.clearCache('stores');
    // cacheService.clearCache('main_orders');
    // cacheService.clearCache('dash_orders');
    logout();
  }, []);

  useEffect(() => {
    visible && menuRef.current?.focus();
  }, [menuRef, visible]);

  return (
    <styled.BodyWrapper tabIndex={0} ref={menuRef} onBlur={onBlur} data-visible={visible}>
      {navigation.map((props) => (
        <styled.RowWrapper key={props.link}>
          <Link onMouseDown={onBubbleFocus} to={props.link} onClick={onClose}>
            {props.label}
          </Link>
        </styled.RowWrapper>
      ))}
      <styled.RowWrapper key={'logout'}>
        <Link onMouseDown={onBubbleFocus} to="" onClick={onLogout}>
          {word('global.logout')}
        </Link>
      </styled.RowWrapper>
    </styled.BodyWrapper>
  );
};
