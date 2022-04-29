import { useCallback } from 'react';
import {useLocale} from '../../../../../assets/locale';
import { useHistory } from 'react-router';

import { AppRoutes } from '../../../../app/api';

import { MainButton } from '../../../../@core/modules/Button';
import {TitleRaw} from '../../../../@core/modules/ListBuilder';
import {PaymentCardsRow} from './PaymentCardsRow';
import axios from "axios";
import {useAuth0} from "../../../../../business/auth/hooks";
import {useEffect, useState} from "react";
import {addErrorToast, addSuccessToast} from "../../../../toast";

import * as styled from "./PaymentCardsList.styled";
import {AlertInfoIcon20, PlusIcon16} from "../../../../../assets/icons"
import { generateArray, getCompanyId } from '../../../../../utils';
import { useGrpcClient } from '../../../../../client/client-hook';

type Props = {
  cards: CardProps[];
  handleChanged: () => void;
};

type CardProps = {
	stripeId: string;
	brand: string;
	last4Digit: string;
	expiryMonth: string;
	expiryYear: number;
	isDefault: boolean;
}

const mock = generateArray(3, (i):any => ({
  id: i + '',
  brand: i < 2? 'Visa': 'Master Card',
  last4: 4444,
  exp_month: '06',
  exp_year: '01',
  isDefault: i === 2,
}));

export const PaymentCardsList: React.FC<Props> = ({ cards, handleChanged }) => {
  const {word} = useLocale();
  const {push} = useHistory();
  const { user } = useAuth0();
  const getClient = useGrpcClient();
  const companyId = getCompanyId(user);
	const onAdd = useCallback(() => push(AppRoutes.Settings.Billing.BillingSettings.AddNewCard), [ push ]);

  const updateDefaultCard = (cardId: string) => {
    getClient()
    .then((client) => {
      client
      .setDefaultCard({
        cardId,
        companyId
      })
      .then((res) => {
        handleChanged();
        addSuccessToast('Successfully updated!');
      })
      .catch((err) => {
        addErrorToast(err.message);
      })
    })
    .catch((err) => {
      addErrorToast(err.message);
    })
  }

  const deleteCard = (cardId: string) => {
    getClient()
    .then((client) => {
      client
      .deleteCard({
        cardId,
        companyId
      })
      .then((res) => {
        handleChanged();
        addSuccessToast('Successfully deleted!');
      })
      .catch((err) => {
        addErrorToast(err.message);
      })
    })
    .catch((err) => {
      addErrorToast(err.message);
    })
  }

  return (
    <styled.BodyWrapper>
    {(cards && cards.length &&
      <TitleRaw>
        <TitleRaw.Space flex={0} minWidth={30}/>
        <TitleRaw.Item align='left' children={word('global.type')}/>
        <TitleRaw.Item align='left' children={word('global.number')}/>
        <TitleRaw.Item align='left' children={word('global.expires')}/>
        <TitleRaw.Space/>
        <TitleRaw.Space flex={0} minWidth={20}/>
      </TitleRaw>
    ) || 
   <styled.EmptyCardsList><AlertInfoIcon20/>{word('settings.empty-cards-list')}</styled.EmptyCardsList>
    }
      {(cards && cards.map((props, index) => {
        return (<PaymentCardsRow {...props} setDefaultCard={(stripeId) => updateDefaultCard(stripeId)} deleteCard={(stripeId) => deleteCard(stripeId)} key={index} />)
      }))}
      <styled.AddButtonWrapper>
					<MainButton
						type={'text-green'}
						icon={<PlusIcon16 />}
						iconSize={22}
						children={mock.length? word('global.add.new'): word('global.add.card')}
						flat
						onClick={onAdd}
					/>
      </styled.AddButtonWrapper>
    </styled.BodyWrapper>
  );
};
