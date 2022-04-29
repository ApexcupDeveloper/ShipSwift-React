import {useLocale} from '../../../../../assets/locale';
import {FormCaption} from '../../../../@core/modules/Container';
import {ListSection} from '../../../../@core/modules/ListBuilder';

import * as styled from './NewPaymentMethod.styled';
import {ChangeEventHandler} from "../../../../@core/hooks/useInputState";

type Props = {
  handleEventChange: ChangeEventHandler,
  data: {
    number: string,
    exp_month: string,
    exp_year: string,
    cvc: string
    expired: string
  }
};

export const NewPaymentMethod: React.FC<Props> = ({handleEventChange, data}) => {
  const {number, exp_month, exp_year, cvc, expired} = data;
  const {word} = useLocale();
  return (
    <styled.BodyWrapper>
      <ListSection>
        <FormCaption caption={word('global.card-number')}>
          <styled.CardInputStyled  id={'card-number'}></styled.CardInputStyled>
        </FormCaption>
        <FormCaption caption={word('global.expired')}>
          <styled.CardInputStyled id={'card-expiry'}></styled.CardInputStyled>
        </FormCaption>
        <FormCaption caption={word('global.cvc')}>
          <styled.CardInputStyled id={'card-cvc'}></styled.CardInputStyled>
        </FormCaption>
      </ListSection>
    </styled.BodyWrapper>
  );
};
