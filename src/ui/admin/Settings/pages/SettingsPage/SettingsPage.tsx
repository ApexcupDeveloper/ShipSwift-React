import { useEffect } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { config } from '../../../../../private';

import { SettingsCard } from '../../components/SettingsCard';

import * as config1 from './SettingsPage.config';
import * as styled from './SettingsPage.styled';

type Props = {};

export const SettingsPage: React.VFC<Props> = () => {
	const { word } = useLocale();
  const history = useHistory();
	const settings = useMemo(() => config1.Settings(word), [word]);
  const { user } = useAuth0();
  const [show, setShow] = useState(false)

  useEffect(() => {
    if(user) {
      let roleKey = config.auth0.namespace + '/roles';
      let role: string[] = (user as any)[roleKey];
      if (role && role.length > 0 && role.some(item => item === 'ShipSwift Admin')) {
        setShow(true);
      } else {
        history.goBack();        
      }
    }
  }, [user])

  if(show) {
    return (
      <styled.BodyWrapper>
        <styled.SettingsList>
          {settings.cards.map((props) => (
            <SettingsCard
              key={props.link}
              {...props}
              description={'Et sit mauris porttitor convallis. Vel egestas lobortis purus amet.'}
            />
          ))}
        </styled.SettingsList>
      </styled.BodyWrapper>
    );
  } else {
    return (<></>)
  }
};
