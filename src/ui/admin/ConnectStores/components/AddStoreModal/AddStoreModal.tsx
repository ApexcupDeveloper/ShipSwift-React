import { useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { Checkbox } from '../../../../@core/modules/Checkbox';
import { Modal, ModalProps } from '../../../../@core/modules/Modal';
import { useGrpcClient } from '../../../../../client/client-hook';
import { addErrorToast, addSuccessToast } from '../../../../toast';
import * as styled from './AddStoreModal.styled';
import { AddStoreRequest } from '../../../../../proto/company_manager_pb';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { config } from '../../../../../private';
import { mapInstuctions } from './AddStoreModal.config';
import { getColor } from '../../../../@core/modules/Other/AvatarLetter/AvatarLetter.config';
import { getCompanyId, updateMetadata } from '../../../../../utils';

type Props = Pick<ModalProps, 'onClose'> & {
  storeName: string;
  nextPath: string;
  data?: any;
};

const storeKey = '{{STORE}}';

export const AddStoreModal: React.FC<Props> = ({ storeName, nextPath, children, onClose, data }) => {
  const { word } = useLocale();
  const { push, goBack } = useHistory();
  const getclient = useGrpcClient();
  const { user, setUser } = useAuth0();
  const onBack = useCallback(() => goBack(), [goBack]);
  const onNext = useCallback(() => push(nextPath), [nextPath, push]);
  const instructions = useMemo(() => mapInstuctions(word), [word]);
  const userId = user?.sub ? user.sub : '';
  const companyId = getCompanyId(user);

  const howConnect = useMemo(() => instructions(storeName).replace(storeKey, storeName), [instructions, storeName]);
  const storeTitle = useMemo(() => word('setup-store.add-store').replace(storeKey, storeName), [storeName, word]);
  const viewGuide = useMemo(() => word('setup-store.view-full-guide').replace(storeKey, storeName), [storeName, word]);
  const iconColor = useMemo(() => getColor(storeName ? storeName : ''), []);

  useEffect(() => {

  }, [])

  const onAdd = () => {
    if (storeName === 'WooCommerce') {
      const requestData: any = {
        name: data.name,
        type: storeName,
        companyId: companyId,
        storeUrl: data.url,
        parameters: {
          bridgeUrl: '',
          storeRoot: '',
          validateVersion: 'false',

          storeKey: '',

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

          squarespaceApiKey: '',

          bigcommerceapiClientId: '',
          bigcommerceapiAccessToken: '',
          bigcommerceapiContext: '',

          etsyKeystring: '',
          etsySharedSecret: '',
          etsyAccessToken: '',
          etsyTokenSecret: ''
        },
        shortName: data.name.slice(0, 2).toUpperCase(),
        iconColour: iconColor,
        defaultDeliveryMethod: '',
        importAllOrders: false,
        importAllProducts: false
      };
      getclient()
        .then((client) => {
          client
            .addStore(requestData)
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
                  //Update user data
                  setUser({
                    ...user,
                    [key]: res.data.user_metadata,
                  });

                  onNext();

                  addSuccessToast('Successfully added store');
                })
                .catch((err) => {
                  addErrorToast(err.message);
                });
            })
            .catch((er) => {
              
              addErrorToast(er.message);
            });
        })
        .catch((er) => {
          
          addErrorToast(er);
        });
    } else if (storeName === 'Shopify') {
      const requestData: any = {
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

          storeKey: '',

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

          squarespaceApiKey: '',

          bigcommerceapiClientId: '',
          bigcommerceapiAccessToken: '',
          bigcommerceapiContext: '',

          etsyKeystring: '',
          etsySharedSecret: '',
          etsyAccessToken: '',
          etsyTokenSecret: ''
        },
        defaultDeliveryMethod: '',
        importAllOrders: false,
        importAllProducts: false
      };
      getclient()
        .then((client) => {
          client
            .addStore(requestData)
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
                  //Update user data
                  setUser({
                    ...user,
                    [key]: res.data.user_metadata,
                  });
                  onNext();

                  addSuccessToast('Successfully added store');

                  window.open(`${data.url}/admin/oauth/authorize?client_id=${process.env.REACT_APP_API_KEY}&scope=${process.env.REACT_APP_SCOPE}&redirect_uri=${process.env.REACT_APP_DEPLOYMENT_URL}`, '_blank');
                })
                .catch((err) => {
                  addErrorToast(err.message);
                });
            })
            .catch((er) => {
              
              addErrorToast(er.message);
            });
        })
        .catch((er) => {
          
          addErrorToast(er);
        });
    }
  };

  return (
    <Modal
      title={storeTitle}
      width={680}
      height={468}
      onClose={onClose}
      visible
      footer={
        <styled.FooterWrapper>
          <Checkbox label={word('setup-store.download-all')} />
          <styled.ButtonWrapper>
            <MainButton type="text" children={word('global.back')} onClick={onBack} />
            <MainButton children={storeName !== 'Shopify' ? word('global.add') : word('global.authorise')} onClick={onAdd} />
          </styled.ButtonWrapper>
        </styled.FooterWrapper>
      }
    >
      <styled.BodyWrapper>
        {children}
        <styled.HelpConnectContainer>
          <p children={howConnect} />
          <MainButton flat type="text-green" children={viewGuide} />
        </styled.HelpConnectContainer>
      </styled.BodyWrapper>
    </Modal>
  );
};
