import { useCallback, useMemo, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { Checkbox } from '../../../../@core/modules/Checkbox';
import { Modal, ModalProps } from '../../../../@core/modules/Modal';
import { useEbayClient, useGrpcClient } from '../../../../../client/client-hook';
import { addInfoToast, updateToast } from '../../../../toast';
import * as styled from './AddStoreModal.styled';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { config } from '../../../../../private';
import { guideInstuctions, mapInstuctions } from './AddStoreModal.config';
import { getColor } from '../../../../@core/modules/Other/AvatarLetter/AvatarLetter.config';
import { getCompanyId, updateMetadata } from '../../../../../utils';
import { cacheService } from '../../../../../utils/cache-service';
import { AddStoreReq } from '../../../../../proto/ebay_connector_pb';

type Props = Pick<ModalProps, 'onClose'> & {
  storeName: string;
  nextPath: string;
  data?: any;
};

const bridgeEndPath = 'shipswift-magento-bridge/bridge.php';
const eBayURL = 'https://auth.ebay.com/oauth2/authorize?client_id=GaryGood-ShipSwif-PRD-51d9af84c-7d4bec58&response_type=code&redirect_uri=ShipSwift_Limit-GaryGood-ShipSw-rblonnv&scope=https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.marketing.readonly%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.marketing%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.inventory.readonly%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.inventory%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.account.readonly%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.account%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.fulfillment.readonly%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.fulfillment%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.analytics.readonly%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.finances%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.payment.dispute%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fcommerce.identity.readonly%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fcommerce.notification.subscription%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fcommerce.notification.subscription.readonly';
const storeKey = '{{STORE}}';

export const AddStoreModal: React.FC<Props> = ({ storeName, nextPath, children, onClose, data }) => {
  const { word } = useLocale();
  const { push, goBack } = useHistory();
  const getclient = useGrpcClient();
  const getEbayClient = useEbayClient();
  const { user, setUser } = useAuth0();
  const [importAll, setImportAll] = useState(false);
  const onBack = useCallback(() => goBack(), [goBack]);
  const onNext = useCallback(() => push(nextPath), [nextPath, push]);
  const instructions = useMemo(() => mapInstuctions(word), [word]);
  const userId = user?.sub ? user.sub : '';
  const companyId = getCompanyId(user);
  const toastId = useRef<any>(null);

  const howConnect = useMemo(() => instructions(storeName).replace(storeKey, storeName), [instructions, storeName]);
  const storeTitle = useMemo(() => word('setup-store.add-store').replace(storeKey, storeName), [storeName, word]);
  const viewGuide = useMemo(() => word('setup-store.view-full-guide').replace(storeKey, storeName), [storeName, word]);
  const iconColor = useMemo(() => getColor(storeName ? storeName : ''), [storeName]);

  const onAdd = () => {
    if (storeName === 'eBay') {
      if (data.code && data.code === 'undefined') {
        window.location.href = eBayURL;
        return;
      }
      if (!data.name || !data.country.length) {
        return;
      }
      toastId.current = addInfoToast('Adding store...', false);

      const requestAddStore: AddStoreReq.AsObject = {
        name: data.name,
        type: storeName,
        companyId: companyId,
        shortName: data.name.slice(0, 2).toUpperCase(),
        iconColour: iconColor,
        storeUrl: "",
        code: data.code,
        parameters: {
          ebaySiteId: data.country[0].value
        },
        importAllOrders: importAll,
        importAllProducts: false
      }

      getEbayClient()
        .then((client) => {
          client
            .addStore(requestAddStore)
            .then((resp: any) => {

              // Update Auth0 User Metadata
              let key = config.auth0.namespace + '/user_metadata';
              let newStoreList = '';
              let storeList: string = (user as any)[key].storeList;
              if (storeList.length > 0) {
                newStoreList = storeList + ',' + resp.storeid;
              } else {
                newStoreList = resp.storeid
              }
              updateMetadata({ user_metadata: { storeList: newStoreList } }, userId)
                .then(async (res) => {
                  // Update user data
                  setUser({
                    ...user,
                    [key]: res.data.user_metadata,
                  });

                  cacheService.clearCache('stores');

                  onNext();

                  updateToast(toastId.current, 'Successfully added store.', 'success', 5000);
                })
                .catch((err) => {
                  
                  updateToast(toastId.current, err.message, 'error', 5000);
                });
            })
            .catch((err) => {
              
              updateToast(toastId.current, err.message, 'error', 5000);
            })
        })
        .catch((err) => {
          
          updateToast(toastId.current, err.message, 'error', 5000);
        })
    } else {
      toastId.current = addInfoToast('Adding store...', false);

      let requestAddStore: any = '';

      if (storeName === 'Etsy') {
        requestAddStore = {
          name: data.name,
          type: storeName,
          companyId: companyId,
          storeUrl: '',
          shortName: data.name.slice(0, 2).toUpperCase(),
          iconColour: iconColor,
          parameters: {
            etsyAppAccessToken: data.oauthId,
            etsyAppTokenSecret: data.oauthSecret,
            etsyVerifier: data.verification
          },
          importAllOrders: importAll,
          importAllProducts: importAll
        }
      } else if (storeName === 'Magento2') {
        let bridgeUrl = '';
        if (data.url[data.url.length - 1] === '/') {
          bridgeUrl = data.url + bridgeEndPath;
        } else {
          bridgeUrl = data.url + '/' + bridgeEndPath;
        }
        requestAddStore = {
          name: data.name,
          type: storeName,
          companyId: companyId,
          storeUrl: data.url,
          shortName: data.name.slice(0, 2).toUpperCase(),
          iconColour: iconColor,
          parameters: {
            bridgeUrl: bridgeUrl,
            storeKey: data.key,
          },
          importAllOrders: importAll,
          importAllProducts: importAll
        };
      } else {
        requestAddStore = {
          name: data.name,
          type: storeName,
          companyId: companyId,
          storeUrl: data.url,
          shortName: data.name.slice(0, 2).toUpperCase(),
          iconColour: iconColor,
          parameters: {
            bridgeUrl: '',
            storeRoot: '',
            validateVersion: 'false',

            storeKey: storeName === 'WooCommerce' ? data.key : '',

            amazonSellerId: '',
            amazonSpClientId: '',
            amazonSpClientSecret: '',
            amazonSpAwsUserKeyId: '',
            amazonSpAwsUserSecret: '',
            amazonSpAwsRegion: '',
            amazonSpAwsRoleArn: '',
            amazonSpRefreshToken: '',
            amazonSpApiEnvironment: '',

            ebayClientId: '',
            ebayClientSecret: '',
            ebayRefreshToken: '',
            ebayEnvironment: '',
            ebaySiteId: '',

            squarespaceApiKey: storeName === 'Squarespace' ? data.key : '',

            bigcommerceapiClientId: storeName === 'BigCommerce' ? data.id : '',
            bigcommerceapiAccessToken: storeName === 'BigCommerce' ? data.token : '',
            bigcommerceapiContext: storeName === 'BigCommerce' ? data.context : '',

            etsyKeystring: '',
            etsySharedSecret: '',
            etsyAccessToken: '',
            etsyTokenSecret: ''
          },
          defaultDeliveryMethod: '',
          importAllOrders: importAll,
          importAllProducts: importAll
        };
      }

      getclient()
        .then((client) => {
          client
            .addStore(requestAddStore)
            .then(async (resp: any) => {
              // Update Auth0 User Metadata
              let key = config.auth0.namespace + '/user_metadata';
              let newStoreList = '';
              let storeList: string = (user as any)[key].storeList;
              if (storeList.length > 0) {
                newStoreList = storeList + ',' + resp.storeId;
              } else {
                newStoreList = resp.storeId
              }
              updateMetadata({ user_metadata: { storeList: newStoreList } }, userId)
                .then(async (res) => {
                  // Update user data
                  setUser({
                    ...user,
                    [key]: res.data.user_metadata,
                  });

                  cacheService.clearCache('stores');

                  onNext();

                  updateToast(toastId.current, 'Successfully added store.', 'success', 5000);

                  if (storeName === 'Shopify') {
                    window.open(`${data.url}/admin/oauth/authorize?client_id=${process.env.REACT_APP_API_KEY}&scope=${process.env.REACT_APP_SCOPE}&redirect_uri=${process.env.REACT_APP_DEPLOYMENT_URL}`, '_blank');
                  }
                })
                .catch((err) => {
                  
                  updateToast(toastId.current, err.message, 'error', 5000);
                });
            })
            .catch((er) => {
              
              updateToast(toastId.current, er.message, 'error', 5000);
            });
        })
        .catch((er) => {
          
          updateToast(toastId.current, er.message, 'error', 5000);
        });
    }
  };

  const onGuide = () => {
    if (storeName === 'Etsy') {
      window.open(guideInstuctions(storeName), "_blank");
    }
  }

  return (
    <Modal
      title={storeTitle}
      width={680}
      height={548}
      onClose={onClose}
      visible
      footer={
        <styled.FooterWrapper>
          <Checkbox label={word('setup-store.download-all')} checked={importAll} onChange={(e) => setImportAll(!importAll)} />
          <styled.ButtonWrapper>
            <MainButton type="text" children={word('global.back')} onClick={onBack} />
            <MainButton children={
                storeName === 'Shopify' ? word('global.authorise') :
                storeName === 'eBay' && data.code === 'undefined' ? word('global.authenticate') : word('global.add')
            } onClick={onAdd} />
          </styled.ButtonWrapper>
        </styled.FooterWrapper>
      }
    >
      <styled.BodyWrapper>
        {children}
        <styled.HelpConnectContainer>
          <p children={howConnect} />
          <MainButton flat type="text-green" children={viewGuide} onClick={onGuide} />
        </styled.HelpConnectContainer>
      </styled.BodyWrapper>
    </Modal>
  );
};
