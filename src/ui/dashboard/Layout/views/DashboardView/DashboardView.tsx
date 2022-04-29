import { useState } from 'react';

import { NavBar } from '../../sections/NavBar';
import { Notifications } from '../../../../notifications';

import * as styled from './DashboardView.styled';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FreeTrialMultiSelect } from '../../../../@core/modules/MultiSelectBuilder/components/FreeTrialMultiSelect';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { config } from '../../../../../private';
import { getDays } from '../../../../../utils';
import { AppRoutes } from '../../../../app/api';

type Props = {};

export const DashboardView: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showTrial, setShowTrial] = useState(false);
  const [trialDays, setTrialDays] = useState(14);
  const { user } = useAuth0();

  const onOpenNotifications = useCallback(() => setShowNotifications(true), []);
  const onCloseNotifications = useCallback(() => setShowNotifications(false), []);

  useEffect(() => {
    let doc: any = document;
    doc.querySelector('.main_component').scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    if (user) {
      let key = config.auth0.namespace + '/user_metadata';
      let roleKey = config.auth0.namespace + '/roles';
      let endTrial: string = (user as any)[key].freeTrial;
      let signupFinished: string = (user as any)[key].isSignUpFinished;
      let role: string[] = (user as any)[roleKey];
      let days = getDays(new Date(), endTrial);
      let regDays = localStorage.getItem('trial');
      setTrialDays(days);
      
      if (role && role.length > 0 && role.some((item => item === 'Free Trial'))) {
        if (regDays) {
          if (Number(regDays) === days) {
            setShowTrial(true);
          } else {
            setShowTrial(false);
          }
        } else {
          setShowTrial(true);
        }
      } else {
        setShowTrial(false);
      }

      if (signupFinished === 'false') {
        if (!pathname.includes(AppRoutes.Auth.NewAccount)) {
          push(AppRoutes.Auth.NewAccount);
        }
      }
    }
  }, [user, pathname])

  const closeTrial = () => {
    let regDays = localStorage.getItem('trial');
    if (regDays) {
      if (regDays === '7') {
        localStorage.setItem('trial', '3');
        setShowTrial(false);
      } else if (regDays === '3') {
        localStorage.setItem('trial', '1');
        setShowTrial(false);
      } else if (regDays === '1') {
        setShowTrial(false);
      } else {
        // console.log('free trial expired.');
      }
    } else {
      localStorage.setItem('trial', '7');
      setShowTrial(false);
    }
  }

  return (
    <styled.BodyWrapper>
      <NavBar onOpenNotifications={onOpenNotifications} showNotifications={showNotifications} />
      <styled.ComponentContainer>
        <styled.Component className="main_component">{children}</styled.Component>
      </styled.ComponentContainer>
      <Notifications visible={showNotifications} onClose={onCloseNotifications} />
      <FreeTrialMultiSelect visible={showTrial} trial={trialDays} children={'Lorem ipsum dolor sit amet'} onClose={closeTrial} />
    </styled.BodyWrapper>
  );
};
