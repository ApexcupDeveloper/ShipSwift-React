import { useLocale } from '../../../../../assets/locale';
import { AddressSection } from '../../../../@core/modules/FormBuilder';
import { DisplayRound } from '../../../../@core/modules/Other';
import * as styled from './AddressView.styled';

type Props = {};

export const AddressView: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <DisplayRound overflow>
      <styled.BodyWrapper>
        <AddressSection label={word('global.customer')}>
          <AddressSection.Field children={'Brooklyn Simmons'} />
          <AddressSection.Field children={'+3(989) 7312879'} />
          <AddressSection.Field children={'customer@gmail.com'} />
        </AddressSection>
        <AddressSection label={word('global.billing.address')}>
          <AddressSection.Field children={'Brooklyn Simmons'} />
          <AddressSection.Field children={'+3(989) 7312879'} />
          <AddressSection.Field children={'294 queenstown road, London, London, sw8 4lt, United Kingdom'} />
        </AddressSection>
        <AddressSection label={word('global.shipping.address')}>
          <AddressSection.Field children={'Brooklyn Simmons'} />
          <AddressSection.Field children={'+3(989) 7312879'} />
          <AddressSection.Field children={'4 Livingstone Brook Drive, Haverstraw, NY, 129127'} />
        </AddressSection>
      </styled.BodyWrapper>
    </DisplayRound>
  );
};
