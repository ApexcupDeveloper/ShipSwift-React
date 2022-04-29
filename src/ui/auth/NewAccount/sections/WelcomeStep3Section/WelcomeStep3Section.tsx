import { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { AppRoutes } from '../../../../app/api';

import { WelcomeModal } from '../../components/WelcomeModal';
import { WelcomeCheck } from '../../components/WelcomeCheck';
import { MainButton } from '../../../../@core/modules/Button';
import { Modal } from '../../../../@core/modules/Modal';

import { LogoImage } from '../../../../../assets/images';

import { getChecked, getUnchecked } from './WelcomeStep3Section.config';
import * as styled from './WelcomeStep3Section.styled';
import * as welcomeStyled from '../WelcomeSection/WelcomeSection.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { getStores } from '../WelcomeStep1Section/WelcomeStep1Section.config';
import { config } from '../../../../../private';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { updateMetadata } from '../../../../../utils';
import { addErrorToast } from '../../../../toast';
import { useSelector } from 'react-redux';

type Props = {
  onClose: () => void;
};

const storeKey = '{{STORE}}';

export const WelcomeStep3Section: React.FC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const { push, goBack } = useHistory();
  const { user, setUser } = useAuth0();
  const location = useLocation();
  const isDark = useSelector((state: any) => state.theme.isDark);
  const checked = useMemo(() => getChecked(word), [word]);
  const unchecked = useMemo(() => getUnchecked(word), [word]);
  const [image, setImage] = useState('');
  const stores = useMemo(() => getStores(isDark), []);
  const userId = user?.sub ? user.sub : '';

  const store: any = location.state;

  const storeName = useMemo(() => word('welcome.step-3.almost-done').replace(storeKey, store ? store : ''), [store, word]);

  const onNext = () => {
    updateMetadata({ user_metadata: { isSignUpFinished: 'true' }}, userId)
      .then(async (res) => {
        let key = config.auth0.namespace + '/user_metadata';
        //Update user data
        setUser({
          ...user,
          [key]: res.data.user_metadata
        });
        push(AppRoutes.Dashboard.Index)
      })
      .catch((err) => {
        addErrorToast(err.message);
      });
  }

  useEffect(() => {
    let selectedStore = stores.filter(item => item.name === store);
    if(selectedStore.length) {
      setImage(selectedStore[0].image);
    } else {
      setImage(LogoImage);
    }
  }, [location])

  return (
    <WelcomeModal
      title={storeName}
      onClose={onClose}
      footer={
        <>
          <Modal.SecondaryButton children={word('global.back')} onClick={goBack} />
          <MainButton children={word('global.continue')} onClick={onNext} />
        </>
      }
    >
      <styled.BodyWrapper>
        <welcomeStyled.Description children={word('welcome.step-3.by-default-ship-swift')} />
        <styled.CircleWrapper>
          <styled.StoreCircle>
            <img src={image} alt='' />
          </styled.StoreCircle>
          <styled.ShipSwiftCircle>
            <img src={LogoImage} alt='' />
          </styled.ShipSwiftCircle>
        </styled.CircleWrapper>
        <styled.AboutData children={word('welcome.step-3.what-with-data')} />
        <styled.CheckListWrapper>
          <styled.CheckList>
            {checked.map(({ title }, i) => <WelcomeCheck key={i} checked title={title} />)}
          </styled.CheckList>
          <styled.CheckList>
            {unchecked.map(({ title }, i) => <WelcomeCheck key={i} title={title} />)}
          </styled.CheckList>
        </styled.CheckListWrapper>
      </styled.BodyWrapper>
    </WelcomeModal>
  );
};
