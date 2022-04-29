import { useLocale } from '../../../../../assets/locale';

import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { ListSection } from '../../../../@core/modules/ListBuilder';

import * as styled from './NewPaymentMethod.styled';

type Props = {};

export const NewPaymentMethod: React.FC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <ListSection>
        <FormCaption caption={word('global.full-name')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.expired')}>
          <InputCustom placeholder={'MM/YY'} />
        </FormCaption>
        <FormCaption caption={word('global.card-number')}>
          <InputCustom />
        </FormCaption>
      </ListSection>
    </styled.BodyWrapper>
  );
};
