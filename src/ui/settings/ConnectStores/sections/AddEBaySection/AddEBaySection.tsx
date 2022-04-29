import { useEffect, useMemo, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { MainButton } from '../../../../@core/modules/Button';

import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { ListSection } from '../../../../@core/modules/ListBuilder';
import { Select } from '../../../../@core/modules/Select';
import { AppRoutes } from '../../../../app/api';
import { AddStoreModal } from '../../components/AddStoreModal';
import { countries } from './AddEBaySection.config';

type Props = {
  onClose: () => void;
};

type CountryProps = {
  label: string;
  value: string;
}

const store = 'eBay';
const eBayURL = 'https://auth.ebay.com/oauth2/authorize?client_id=GaryGood-ShipSwif-PRD-51d9af84c-7d4bec58&response_type=code&redirect_uri=ShipSwift_Limit-GaryGood-ShipSw-rblonnv&scope=https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.marketing.readonly%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.marketing%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.inventory.readonly%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.inventory%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.account.readonly%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.account%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.fulfillment.readonly%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.fulfillment%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.analytics.readonly%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.finances%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.payment.dispute%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fcommerce.identity.readonly%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fcommerce.notification.subscription%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fcommerce.notification.subscription.readonly';

export const AddEBaySection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const [authenticated, setAuthenticated] = useState(false);
  const [name, setName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<CountryProps[]>([]);
  const [code, setCode] = useState('');
  const eBayRegion = useMemo(() => `${store} ${word('global.region')}`, [word]);
  const eBayCountries = countries;

  useEffect(() => {
    if (window.location) {
      const urls = window.location.href.split(AppRoutes.Settings.ConnectStores.SetUpStore.EBay + '?code=');
      setCode(decodeURIComponent(urls[1]));
    }
  }, [window.location])

  useEffect(() => {
    if (code && code !== 'undefined') {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [code])

  const onAuth = () => {
    window.location.href = eBayURL;
  }

  return (
    <AddStoreModal storeName={store} nextPath={AppRoutes.Settings.ConnectStores.Index} onClose={onClose} data={{ name: name, country: selectedCountry, code: code }}>
      {
        authenticated ?
          <ListSection>
            <FormCaption caption={word('global.store.name')}>
              <InputCustom value={name} onChange={(e) => setName(e)} />
            </FormCaption>
            <FormCaption caption={eBayRegion}>
              <Select
                searchable
                values={eBayCountries}
                selectedValues={selectedCountry}
                onSelectedChanged={(e) => setSelectedCountry(e)}
              />
            </FormCaption>
          </ListSection>
          :
          <ListSection>
            <MainButton children={word('global.store.auth.ebay')} onClick={onAuth} />
          </ListSection>
      }
    </AddStoreModal>
  );
};
