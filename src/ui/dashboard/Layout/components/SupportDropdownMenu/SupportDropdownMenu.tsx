import { createRef, useMemo, useEffect, useCallback, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { Link } from 'react-router-dom';

import * as styled from './SupportDropdownMenu.styled';
import * as config from './SupportDropdownMenu.config';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { cacheService } from '../../../../../utils/cache-service';
import { onSupport } from '../../../../../utils';
import { addErrorToast, addWarningToast } from '../../../../toast';
import axios from 'axios';
import { onShowLiveChat } from '../../../../../utils/support';
import { useStatusClient } from '../../../../../client/client-hook';

type Props = {
  visible: boolean;
  onBlur: () => void;
  onClose: () => void;
  online: any;
  status: string;
};

export const SupportDropdownMenu: React.FC<Props> = ({ visible, onBlur, onClose, online, status }) => {
  const { word } = useLocale();
  const menuRef = createRef<HTMLDivElement>();
  const navigation = useMemo(() => config.navMap(word), [word]);
  const onBubbleFocus = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    visible && menuRef.current?.focus();
  }, [menuRef, visible]);

  const onLiveChat = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (online) {
      onShowLiveChat();
    } else {
      addWarningToast('Our support team are currently offline')
      return;
    }
  }, [online]);

  return (
    <styled.BodyWrapper tabIndex={0} ref={menuRef} onBlur={onBlur} data-visible={visible}>
      <styled.RowWrapper key={'live-chat'}>
        <Link onMouseDown={onBubbleFocus} to={""} onClick={onLiveChat}>
          {word('support.live.chat')}
          {online !== '' && (<styled.ChatStatusDot status={online} />)}
          
        </Link>
      </styled.RowWrapper>
      {navigation.map((props, index) => (
        <styled.RowWrapper key={index}>
          <Link onMouseDown={onBubbleFocus} to={props.link} onClick={() => {
            if (props.label === word('support.status.page')) {
              window.open('https://status.shipswift.com', '_blank');
            }
            if (props.label === word('support.help.article')) {
              window.open('https://docs.shipswift.com', '_blank');
            }
            onClose();
          }}>
            {props.label}
            {props.label === word('support.status.page') && status !== '' && (
              <styled.StatusDot status={status} />
            )}
          </Link>
        </styled.RowWrapper>
      ))}
    </styled.BodyWrapper>
  );
};
