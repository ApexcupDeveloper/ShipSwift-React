import { useLocale } from '../../../../../assets/locale';

import { Modal } from '../../../../@core/modules/Modal';
import { AddNewCard } from '../../components/AddNewCard';
import { MainButton } from '../../../../@core/modules/Button';

import * as styled from './AddNewCardSection.styled';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from "react";
import axios from 'axios';
import { addErrorToast } from '../../../../toast';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';
import { useGrpcClient } from '../../../../../client/client-hook';
import { useSelector } from 'react-redux';
import { config } from '../../../../../private';
import { Spinner, CardSpinner } from '../../../../@core/modules/Other';

type Props = {
  onClose: () => void;
  onEditClose: () => void;
};

const stripePromise = loadStripe(config.stripe_pk);

export const AddNewCardSection: React.FC<Props> = ({ onClose, onEditClose }) => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const getClient = useGrpcClient();
  const [customerId, setCustomerId] = useState('');
  const [submit, setSubmit] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [ephemeralKey, setEphemeralKey] = useState('');
  const [loaded, setLoaded] = useState(false);
  const isDark = useSelector((state: any) => state.theme.isDark);

  const appearance: any = {
    theme: isDark ? 'night' : 'stripe',

    variables: {
      colorPrimary: '#1FC8BE',
      colorBackground: isDark ? '#1C1C1E' : '#FFFFFF',
      colorText: isDark ? '#FFFFFF' : '#29292a',
      fontFamily: 'Roboto',
      fontSizeBase: '14px',
      // See all possible variables below
    }
  }

  const fonts = [
    {
      cssSrc: 'https://fonts.googleapis.com/css2?family=Roboto'
    }
  ]

  useEffect(() => {
    if (companyId) {
      getClient()
        .then((client) => {
          client
            .getBillingInfo({ companyId })
            .then((res: any) => {
              setCustomerId(res.stripeId);
            })
            .catch((err) => {
              addErrorToast(err.message);
            })
        })
        .catch((err) => {
          addErrorToast(err.message);
        })
    }
  }, [user])

  useEffect(() => {
    if (customerId) {
      axios.post(`${config.node_url}/payment-sheet`, {
        customerId: customerId
      }).then((res) => {
        setClientSecret(res.data.clientSecret);
        setEphemeralKey(res.data.ephemeralKey);
      }).catch((err) => {
        addErrorToast(err.message);
      })
    }
  }, [customerId])

  const addCard = async () => {
    setSubmit(true);
  };

  return (
    <Modal
      width={730}
      height={407}
      title={word('global.add.new.card')}
      visible
      onClose={onClose}
      footer={
        <>
          <MainButton flat type={'text'} children={word('global.back')} onClick={onEditClose} />
          <MainButton
            flat
            children={<styled.AddButtonWrp>{word('global.add')}</styled.AddButtonWrp>}
            onClick={addCard}
          />
        </>
      }
    >
      {clientSecret && (
        <styled.CardWrapper>
          <Elements stripe={stripePromise} options={{ clientSecret, appearance, fonts }} >
            {!loaded && (<CardSpinner />)}
            <AddNewCard
              handleEventChange={() => { setSubmit(false) }}
              submit={submit}
              clientSecret={clientSecret}
              loadCompleted={() => { setLoaded(true) }}
            />
          </Elements>
        </styled.CardWrapper>
      )}
    </Modal>
  );
};
