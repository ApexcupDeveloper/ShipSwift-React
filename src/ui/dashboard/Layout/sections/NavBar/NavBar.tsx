import { useMemo, useState, useCallback } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { AppRoutes } from '../../../../app/api';

import { CollapsedButton } from '../../components/CollapsedButton';
import { Notifications } from '../../components/Notifications';
import { NavLink } from '../../components/NavLink';
import { User } from '../../components/User';
import { LogoImage, NamedLogoImage } from '../../../../../assets/images';
import { SettingsIcon20, AdminIcon20, SupportIcon } from '../../../../../assets/icons';

import { navMap } from './NavBar.config';
import * as styled from './NavBar.styled';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useEffect } from 'react';
import { config } from '../../../../../private';
import { useHistory } from 'react-router';
import { onSupport } from '../../../../../utils';
import { NavSupport } from '../../components/NavSupport';

type Props = {
  onOpenNotifications: () => void;
  showNotifications: boolean;
};

export const NavBar: React.VFC<Props> = ({ onOpenNotifications, showNotifications }) => {
  const { word } = useLocale();
  const { push } = useHistory();
  const { user, logout, accessToken } = useAuth0();
  const [collapse, setCollapse] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [username, setUsername] = useState('');
  const showLabel = !collapse;
  const email = user?.email;

  const onClickCollapsedButton = useCallback(() => setCollapse((collapse) => !collapse), []);
  const logo = useMemo(() => (showLabel ? NamedLogoImage : LogoImage), [showLabel]);
  const navigation = useMemo(() => navMap(word), [word]);

  useEffect(() => {
    if (user) {
      let key = config.auth0.namespace + '/roles';
      let nameKey = config.auth0.namespace + '/user_metadata';
      let role: string[] = (user as any)[key]
      let metaData: any = (user as any)[nameKey]
      setUsername(metaData.firstName + ' ' + metaData.lastName);

      if (role && role.length > 0 && role.some(item => item === 'ShipSwift Admin')) {
        setAdmin(true)
      } else {
        setAdmin(false)
      }
    }
  }, [user])

  const onHome = () => {
    push(AppRoutes.Dashboard.Index);
  }

  return (
    <styled.BodyWrapper data-is-open={showLabel}>
      <styled.MenuWrapper>
        <styled.Logo onClick={onHome}>
          <img src={logo} alt="ShipSwift" />
        </styled.Logo>
        <styled.List>
          {navigation.map((props) => (
            <NavLink key={props.link} {...props} showLabel={showLabel} />
          ))}
        </styled.List>
        <CollapsedButton showLabel={showLabel} onClick={onClickCollapsedButton} />
        <styled.ListBottom>
          <Notifications showLabel={showLabel} onOpen={onOpenNotifications} isOpen={showNotifications} />
          <NavSupport
            showLabel={showLabel}
            email={email ? email : ''}
            username={username}
            token={accessToken ? accessToken : ''}
            label={word('settings')}
            link={AppRoutes.Support.Index}
          />
          {/* <NavLink
            showLabel={showLabel}
            icon={<SupportIcon />}
            link={'support'}
            label={word('support')}
            onClick={() => { onSupport(email, username, accessToken) }}
          /> */}
          <NavLink
            showLabel={showLabel}
            icon={<SettingsIcon20 />}
            link={AppRoutes.Settings.Index}
            label={word('settings')}
          />
          {admin && (
            <NavLink
              showLabel={showLabel}
              icon={<AdminIcon20 />}
              link={AppRoutes.Admin.Index}
              label={word('admin')}
            />
          )}
        </styled.ListBottom>
      </styled.MenuWrapper>
      <styled.UserContainer>
        <User
          avatar={user?.picture}
          name={user?.firstName || user?.name || user?.nickname || user?.given_name || user?.email || ''}
          surname={user?.family_name || ''}
          showLabel={showLabel}
        />
      </styled.UserContainer>
    </styled.BodyWrapper>
  );
};
