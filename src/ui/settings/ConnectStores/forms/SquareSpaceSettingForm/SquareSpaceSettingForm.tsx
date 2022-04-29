import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';
import { StoresItem } from '../../../../../client/client';

import { FormCaption } from '../../../../@core/modules/Container';
import { FormSection, SplitInput } from '../../../../@core/modules/FormBuilder';
import { InputCustom } from '../../../../@core/modules/Input';
import { AvatarLetter, SmallAlert } from '../../../../@core/modules/Other';
import { Select } from '../../../../@core/modules/Select';
import { DictionaryMap } from '../../components/DictionaryMap';
import { EditStoreModal } from '../../components/EditStoreModal';
import { SettingsSwitch } from '../../components/SettingsSwitch';
import InputColor from 'react-input-color';

import * as styled from './SquareSpaceSettingForm.styled';
import { AppRoutes } from '../../../../app/api';
import { useSelector } from 'react-redux';

type Props = {
  onClose: () => void
};

const currencies = [
  {
    label: 'US Dollar ($)',
    value: 'USD'
  }, {
    label: 'Great British Pounds (£)',
    value: 'GBP'
  }, {
    label: 'Euros (€)',
    value: 'EUR'
  }
]

export const SquareSpaceSettingForm: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const location = useLocation();
  const isDark = useSelector((state: any) => state.theme.isDark);
  const store = location.state as StoresItem;
  const [name, setName] = useState(store.name);
  const [shortName, setShortName] = useState(store.shortName);
  const [iconColour, setIconColoour] = useState(store.iconColour);
  const [storeEmail, setStoreEmail] = useState(store.storeEmail);
  const [storeCurrency, setStoreCurrency] = useState(currencies.filter(item => item.value === store.storeCurrency));
  const [shouldSkipIu, setShouldSkipIu] = useState(store.shouldSkipIu || false);

  if (!store) return (<></>)
  return (
    <EditStoreModal storeName={store.name} nextPath={AppRoutes.Settings.ConnectStores.Index} onClose={onClose} data={{ name, shortName, iconColour, storeEmail, storeCurrency, shouldSkipIu }} store={store}>
      <styled.BodyWrapper isDark={isDark}>
        <DictionaryMap field={word('global.store.id')} value={store.id} />
        <DictionaryMap field={word('global.store.url')} value={store.storeUrl} />
        <FormSection title={word('settings')} list>
          <AvatarLetter name={shortName} backgroundColor={iconColour} />
          <SplitInput>
            <FormCaption caption={word('global.name')}>
              <InputCustom value={name} onChange={(e) => setName(e)} />
            </FormCaption>
            <FormCaption caption={word('global.short.name')}>
              <InputCustom value={shortName} onChange={(e) => setShortName(e)} maxLength={2} />
            </FormCaption>
          </SplitInput>
          <SplitInput>
            <FormCaption caption={word('global.currency')}>
              <Select selectedValues={storeCurrency} values={currencies} onSelectedChanged={(e) => setStoreCurrency(e)} />
            </FormCaption>
            <FormCaption caption={word('global.store.icon')}>
              <InputCustom value={iconColour} onChange={(e) => setIconColoour(e)} icon={<InputColor
                initialValue={iconColour}
                onChange={(e) => { setIconColoour(e.hex) }}
                placement="right"
              />} />
            </FormCaption>
          </SplitInput>
          <FormCaption caption={word('global.store.email')}>
            <InputCustom value={storeEmail} onChange={(e) => setStoreEmail(e)} />
          </FormCaption>
        </FormSection>
        <FormSection title={word('setup-store.how-synced')} list>
          <SmallAlert description={word('setup-store.how-synced.description')} />
          <SettingsSwitch tooltip={'When true, ShipSwift will push stock levels to your store'} name={word('setup-store.push-stock')} onChange={(e) => setShouldSkipIu(!e)} value={!shouldSkipIu} />
          <SettingsSwitch tooltip={'Some help description with tooltip'} name={word('setup-store.search-product')} />
          <SettingsSwitch tooltip={'Some help description with tooltip'} name={word('setup-store.same-name')} />
          <SettingsSwitch tooltip={'Some help description with tooltip'} name={word('setup-store.with-same-sku')} />
        </FormSection>
      </styled.BodyWrapper>
    </EditStoreModal>

  );
};
