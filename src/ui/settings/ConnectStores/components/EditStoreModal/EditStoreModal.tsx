import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { Modal, ModalProps } from '../../../../@core/modules/Modal';
import { useGrpcClient } from '../../../../../client/client-hook';
import { addErrorToast, addSuccessToast } from '../../../../toast';
import * as styled from './EditStoreModal.styled';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { EditStoresItem, StoresItem } from '../../../../../client/client';
import { getCompanyId } from '../../../../../utils';
import { cacheService } from '../../../../../utils/cache-service';

type Props = Pick<ModalProps, 'onClose'> & {
  storeName: string;
  nextPath: string;
  data?: any;
  store: StoresItem;
};

type StoreProps = {
  id: string;
  shortName: string;
  iconColour: string;
  type: string;
};

const storeKey = '{{STORE}}';

export const EditStoreModal: React.FC<Props> = ({ storeName, nextPath, children, onClose, data, store }) => {
  const { word } = useLocale();
  const { push } = useHistory();
  const getclient = useGrpcClient();
  const { user } = useAuth0();
  // const onBack = useCallback(() => goBack(), [goBack]);
  const onNext = useCallback(() => push(nextPath), [nextPath, push]);
  // const instructions = useMemo(() => mapInstuctions(word), [word]);

  // const howConnect = useMemo(() => instructions(storeName).replace(storeKey, storeName), [instructions, storeName]);
  // const viewGuide = useMemo(() => word('setup-store.view-full-guide').replace(storeKey, storeName), [storeName, word]);
  // const iconColor = useMemo(() => getColor(storeName ? storeName : ''), []);
  const onUpdate = () => {
    const requestData: EditStoresItem = {
      storeId: store.id,
      name: data.name,
      type: store.type,
      companyId: getCompanyId(user),
      shortName: data.shortName,
      iconColour: data.iconColour,
      storeCurrency: data.storeCurrency && data.storeCurrency.length ? data.storeCurrency[0].value : '',
      storeEmail: data.storeEmail || '',
      shouldSkipIu: {
        value: data.shouldSkipIu
      }
    };

    getclient()
      .then((client) => {
        client
          .editStore(requestData)
          .then(async (resp: any) => {
            cacheService.clearCache('stores');
            onNext();
            addSuccessToast('Successfully updated store');
          })
          .catch((er) => {
            
            addErrorToast(er.message);
          });
      })
      .catch((er) => {
        
        addErrorToast(er);
      });
  };

  return (
    <Modal
      title={storeName}
      width={680}
      onClose={onClose}
      visible
      footer={
        <styled.FooterWrapper>
          <styled.ButtonWrapper>
            <MainButton type="text" children={word('global.cancel')} onClick={onClose} />
            <MainButton children={word('global.save')} onClick={onUpdate} />
          </styled.ButtonWrapper>
        </styled.FooterWrapper>
      }
    >
      <styled.BodyWrapper>
        {children}
      </styled.BodyWrapper>
    </Modal>
  );
};
