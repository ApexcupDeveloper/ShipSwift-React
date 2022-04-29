import { useLocale } from '../../../../../assets/locale';

import { Checkbox } from '../../../../@core/modules/Checkbox';
import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { NoServiceAlert } from './NoServiceAlert';

import * as styled from './NoServiceSection.styled';

type Props = {
  key: string,
  item: {
      name: string,
      description: string,
      image: string,
      account: string
  },
  path: string,
  editPath: string,
  selectedService: string,
  carrier: string;
  onChange: (service: string, carrier: string) => void;
};

export const NoServiceSection: React.VFC<Props> = ({ key, item, selectedService, carrier, onChange }) => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <Checkbox label={word('global.ship.without.label')} checked={selectedService === carrier + 'ship_without_label'} onChange={() => {
        if (selectedService === carrier + 'ship_without_label') {
          onChange('', carrier)
        } else {
          onChange(carrier + 'ship_without_label', carrier)
        }
      }} />
      {selectedService === carrier + 'ship_without_label' && (
        <FormCaption caption={word('global.track.number')}>
          <InputCustom />
        </FormCaption>
      )}
      <NoServiceAlert alert={'connect-now'} name={item.name} />
    </styled.BodyWrapper>
  );
};
