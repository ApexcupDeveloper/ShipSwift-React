import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';
import { MainButton } from '../../../../@core/modules/Button';

import { AppRoutes } from '../../../../app/api';
import { Modal } from '../../../../@core/modules/Modal';
import { WelcomeAlert } from '../../components/WelcomeAlert';
import { WelcomeModal } from '../../components/WelcomeModal';
import { WelcomeStore } from '../../components/WelcomeStore';
import { getStores } from './WelcomeStep1Section.config';

import * as styled from './WelcomeStep1Section.styled';
import { useSelector } from 'react-redux';

type Props = {
  onClose: () => void;
};

export const WelcomeStep1Section: React.FC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const { push } = useHistory();
  const isDark = useSelector((state: any) => state.theme.isDark);
  const stores = useMemo(() => getStores(isDark), []);
  const onNext = useCallback(() => push(AppRoutes.Auth.Welcome.Step2), [push]);

  return (
    <WelcomeModal title={word('welcome.step-1.setup-your-store')} onClose={onClose}>
      <styled.BodyWrapper>
        <styled.StoresList>
          {stores.map((props) => (
            <WelcomeStore key={props.image} {...props} />
          ))}
        </styled.StoresList>

        <styled.FooterWrapper>
          <WelcomeAlert
            title={word('welcome.step-1.have-multiple-stores')}
            description={word('welcome.step-1.connect-store')}
            customStyle={{
              width: '70%',
              marginTop: 0
            }}
          />
           <MainButton children={word('global.skip')} onClick={onNext} />
        </styled.FooterWrapper>
      </styled.BodyWrapper>
    </WelcomeModal>
  );
};
