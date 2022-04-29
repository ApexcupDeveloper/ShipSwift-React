import { useLocale } from '../../../../../assets/locale';
import { MainButton } from '../../../../@core/modules/Button';

import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { ListSection } from '../../../../@core/modules/ListBuilder';
import { AddStoreModal } from '../../components/AddStoreModal';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { GenerateMagentoKey } from '../../../../../utils';
import { useState } from 'react';
import { addErrorToast } from '../../../../toast';
import { config } from '../../../../../private';
import { AppRoutes } from '../../../../app/api';

type Props = {
  onClose: () => void;
};

export const AddMagento2Section: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const [storeKey, setStoreKey] = useState('');
  var zip = new JSZip();
  var connectorZip = zip.folder("shipswift-magento-bridge");
  var bridgePath = require('../../../../../utils/store-connect/bridge.txt')
  var baseURL = config.hostname;

  const generateConnector = () => {
    fetch(baseURL + bridgePath.default)
      .then(f => f.text())
      .then(bridge => {
        const magento_key = GenerateMagentoKey();
        setStoreKey(magento_key);

        const config = `<?php
          define("M1_TOKEN", "${magento_key}");`;
        const index = `
          <?php
          header("X-Robots-Tag: noindex,nofollow", true);
          header('Location: ../', true, 302);`;

        connectorZip?.file("config.php", config);
        connectorZip?.file("index.php", index);
        connectorZip?.file("bridge.php", bridge);

        connectorZip?.generateAsync({ type: 'blob' })
          .then((blob) => {
            saveAs(blob, "shipswift-magento-bridge.zip")
          })
          .catch((err) => {
            addErrorToast(err)
          })
      })

  }

  return (
    <AddStoreModal storeName={'Magento2'} nextPath={AppRoutes.Auth.Welcome.Step2} onClose={onClose}>
      <ListSection>
        <FormCaption caption={word('global.store.name')}>
          <InputCustom />
        </FormCaption>
        <FormCaption caption={word('global.store.url')}>
          <InputCustom />
        </FormCaption>
        {storeKey.length > 0 ?
          <FormCaption caption={word('global.store.key')}>
            <InputCustom value={storeKey} />
          </FormCaption> : null
        }
        {!storeKey.length && (<MainButton children={word('global.store.download')} onClick={generateConnector} />)}
      </ListSection>
    </AddStoreModal>
  );
};
