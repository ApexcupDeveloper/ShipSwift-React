import { useCallback, useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';

import { AppRoutes } from '../../../../app/api';

import { MainButton } from '../../../../@core/modules/Button';
import { Modal } from '../../../../@core/modules/Modal';
import { WelcomeModal } from '../../components/WelcomeModal';
import { WelcomeStep } from '../../components/WelcomeStep';

import { getSteps } from './WelcomeSection.config';
import * as styled from './WelcomeSection.styled';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useEffect } from 'react';
import { config } from '../../../../../private';
import { useState } from 'react';

type Props = {
  onClose: () => void;
};

export const WelcomeSection: React.VFC<Props> = ({ onClose }) => {
  const { push } = useHistory();
  const { word } = useLocale();
  const { user } = useAuth0();
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    if(user) {
      let key = config.auth0.namespace + '/firstName';
      let name: string = (user as any)[key];
      setFirstName(name)
    }
  }, [user])

  const steps = useMemo(() => getSteps(word), [word]);

  const onNext = useCallback(() => push(AppRoutes.Auth.Welcome.Step1.Index), [push]);

  return (
    <WelcomeModal
      title={word('welcome.to-ship-swift') + `, ${firstName}`}
      onClose={onClose}
      footer={
        <>
          <Modal.SecondaryButton children={word('welcome.skip-to-account')} onClick={onClose} />
          <MainButton children={word('global.next')} onClick={onNext} />
        </>
      }
    >
      <styled.BodyWrapper>
        <styled.Description children={word('welcome.description.only-3-steps')} />
        {steps.map((props) => (
          <WelcomeStep key={props.step} {...props} />
        ))}
      </styled.BodyWrapper>
    </WelcomeModal>
  );
};
