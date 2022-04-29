import { useLocale } from '../../../../../assets/locale';

import { NavButton } from '../NavLink';
import { SupportIcon } from '../../../../../assets/icons';

import * as styled from './NavSupport.styled';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { addErrorToast } from '../../../../toast';
import { SupportDropdownMenu } from '../SupportDropdownMenu';
import { useLocation } from 'react-router';
import { useStatusClient } from '../../../../../client/client-hook';
import { useAuth0 } from '../../../../../business/auth/hooks';

type Props = {
  showLabel?: boolean;
  email: string;
  username: string;
  token: string;
  label: string;
  link: string
};

export const NavSupport: React.VFC<Props> = ({ showLabel, email, username, token, link }) => {
  const { word } = useLocale();
  const { pathname } = useLocation();
  const { refreshToken } = useAuth0();
  const [menuVisibility, setMenuVisibility] = useState(false);
  const active = useMemo(() => pathname.includes(link), [link, pathname]);
  const toggleMenuVisibility = useCallback(() => setMenuVisibility((prev) => !prev), []);
  const onCloseMenu = useCallback(() => setMenuVisibility(false), []);
  const [online, setOnline] = useState<any>('');
  const [status, setStatus] = useState('');
  const getClient = useStatusClient();

  useEffect(() => {
    getStatus()

    const interval = setInterval(() => {
      getStatus()
    }, 60000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  const getStatus = () => {
    getClient()
      .then((client) => {
        client
          .getStatus({})
          .then((res: any) => {
            if (res.siteStatus) {
              setStatus(res.siteStatus.status);
            }
            if (res.supportStatus.status === "online") {
              setOnline(true);
            } else {
              setOnline(false);
            }
          })
          .catch(err => {
            if (err.code === 16) {
              refreshToken()
                .then((token) => {
                })
                .catch((err) => {
                  addErrorToast(err.message);
                })
            } else {
              addErrorToast(err.message);
            }
          })
      })
      .catch((err) => {
        addErrorToast(err.message);
      })
  }

  return (
    <styled.BodyWrapper data-is-open={showLabel}>
      <NavButton
        icon={<SupportIcon />}
        label={word('support.and.help')}
        showLabel={showLabel}
        isOpen={active}
        onOpen={toggleMenuVisibility}
        type={'support'}
      />
      {online === '' && status === '' ? null : <styled.Counter data-is-open={showLabel} data-is={online && status === "UP" ? 'online' : ''}></styled.Counter>}
      <SupportDropdownMenu visible={menuVisibility} onBlur={onCloseMenu} onClose={onCloseMenu} online={online} status={status} />
    </styled.BodyWrapper>
  );


};
