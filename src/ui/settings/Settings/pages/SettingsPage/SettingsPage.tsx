import { useEffect, useMemo, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { config } from '../../../../../private';

import { SettingsCard } from '../../components/SettingsCard';

import * as settingConfig from './SettingsPage.config';
import * as styled from './SettingsPage.styled';

type Props = {};

export const SettingsPage: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showUserbox, setShowUserbox] = useState(false);
  const settings = useMemo(() => settingConfig.Settings(word), [word]);

  useEffect(() => {
    if (user) {
      let roleKey = config.auth0.namespace + '/roles';
      let role: string[] = (user as any)[roleKey];
      if (role && role.length > 0 && role.some(item => item === 'ShipSwift Admin')) {
        setIsAdmin(true);
        setShowUserbox(true);
      } else if (role && role.length > 0 && role.some(item => item === 'Free Trial' || item === 'Account Owner')) {
        setShowUserbox(true);
        setIsAdmin(false);
      } else {
        setShowUserbox(false);
        setIsAdmin(false);
      }
    }
  }, [user])

  return (
    <styled.BodyWrapper>
      <styled.SettingsList>
        {settings.cards.map((props) => {
          if (!isAdmin && props.isAdmin) {
            if (showUserbox && props.userBox) {
              return (
                <SettingsCard
                  key={props.link}
                  {...props}
                  description={props.description}
                />
              )
            } else {
              return null;
            }
          }
          return (
            <SettingsCard
              key={props.link}
              {...props}
              description={props.description}
            />
          )
        })}
      </styled.SettingsList>
    </styled.BodyWrapper>
  );
};
