import { BlobProvider } from '@react-pdf/renderer';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { OrderItem } from '../../../../../client/client';
import { useGrpcClient } from '../../../../../client/client-hook';
import { config } from '../../../../../private';
import { getCompanyId } from '../../../../../utils';
import { cacheService } from '../../../../../utils/cache-service';
import { InvoiceComponent } from '../../../../@core/modules/Invoice/Invocie';
import { ItemRaw, StatusLabel } from '../../../../@core/modules/ListBuilder';
import { NavTabContainer } from '../../../../@core/modules/Navigation';
import { Select } from '../../../../@core/modules/Select';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@firebase/storage';
import firebase from '../../../../../utils/firebase';

import * as styled from './NavTabView.styled';

type Props = {
  orderData: OrderItem,
  cancelOrder: (storeId: string, storeType: string, name: string) => void,
  selectOrder: (storeId: string, storeType: string, name: string) => void,
  shipOrder: () => void
};

type SelectProps = {
  label: string,
  value: string
}

type StoreProps = {
  id: string;
  shortName: string;
  iconColour: string;
  type: string;
};

const actions = [
  {
    label: 'Ship Order',
    value: 'ship_order'
  }, {
    label: 'Print Invoice',
    value: 'print_invoice'
  }, {
    label: 'Cancel Order',
    value: 'cancel_order'
  }
];

export const NavTabView: React.VFC<Props> = ({ orderData, cancelOrder, selectOrder, shipOrder }) => {
  let dataSubscription: any;

  const toastId = useRef<any>(null);
  const getGrpcClieht = useGrpcClient();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const companyLogo = useSelector((state: any) => state.company.logo);
  const companyInfo = useSelector((state: any) => state.company.company);

  const [orderStatus, setOrderSatus] = useState('');
  const [stores, setStores] = useState<StoreProps[]>([]);
  const [selectedAction, setSelectedAction] = useState<SelectProps[]>([]);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    let status =
      orderData.status === 'Ready to ship' ? 'ready-to-ship' :
        orderData.status === 'Pending Payment' ? 'pending-payment' :
          orderData.status === 'Shipped' ? 'shipped' :
            orderData.status === 'On-Hold' ? 'on-hold' :
              orderData.status === 'Backordered' ? 'waiting-for-stock' :
                orderData.status === 'Cancelled' ? 'cancelled' :
                  orderData.status === 'Refunded' ? 'refunded' : 'default';

    setOrderSatus(status);
  }, [orderData])

  useEffect(() => {
    return () => {
      cacheService.stopPoll('stores');
    }
  }, [])

  useEffect(() => {
    if (companyId) {
      cacheService.stopPoll('stores');
      dataSubscription = cacheService.callWithCache('stores', 'main_stores', getStores.bind(this), [], config.cache.store_timeout)
        .subscribe((data: any[]) => {
          setStores(data);
        }, err => {
          addErrorToast(err.message)
        })
    }
  }, [user, companyId]);

  useEffect(() => {
    if (selectedAction && selectedAction.length) {
      if (selectedAction[0].value === 'cancel_order') {
        let key = config.auth0.namespace + '/user_metadata';
        let cancelOrderWarning: string = (user as any)[key].cancelOrderWarning;
        let storeData: StoreProps[] = stores.filter((item: any) => item.id === orderData.storeId);
        if (cancelOrderWarning === 'true') {
          selectOrder(orderData.storeId, storeData.length ? storeData[0].type : '', orderData.orderNumber)
        } else {
          cancelOrder(orderData.storeId, storeData.length ? storeData[0].type : '', orderData.orderNumber);
        }
      } else if (selectedAction[0].value === 'ship_order') {
        shipOrder()
      } else if (selectedAction[0].value === 'print_invoice') {
        setGenerating(true)
      }
    }
  }, [selectedAction])

  const getStores = () => {
    return new Promise<any>((resolve, reject) => {
      getGrpcClieht()
        .then((client) => {
          Promise.all([
            client.getAllStores(companyId)
          ])
            .then(data => {
              resolve(data[0]);
            }, error => {
              reject(error);
            })
        })
        .catch((err) => {
          reject(err);
        });
    })
  };



  return (
    <NavTabContainer>
      <styled.BodyWrapper>
        <styled.TagsContainer>
          <ItemRaw.OrderStatus label={orderStatus as StatusLabel} />
        </styled.TagsContainer>
        <Select
          width={184}
          values={actions}
          selectedValues={selectedAction}
          onSelectedChanged={setSelectedAction}
          placeholder="Actions"
        />
      </styled.BodyWrapper>
      {companyInfo && companyLogo && generating && (
        <BlobProvider document={<InvoiceComponent order={[orderData]} companyData={companyInfo} logoUrl={companyLogo} />}>
          {({ blob, url, loading, error }) => {
            if (!loading && url && blob) {
              toastId.current = addInfoToast(`Generating invoice...`, false);

              const storage = getStorage(firebase, config.firebase.invoices);
              const storageRef = ref(storage, `${companyId}/${orderData.orderNumber}/${Math.random()}.pdf`);
              const uploadTask = uploadBytesResumable(storageRef, blob);

              uploadTask.on('state_changed', async (snapshot: any) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                updateToast(toastId.current, `Generating invoice... ${Math.round(progress)}%`, 'info', false);
              }, (err) => {
                updateToast(toastId.current, err.message, 'error', 2000);
              }, () => {
                getDownloadURL(uploadTask.snapshot.ref)
                  .then((downloadUrl) => {
                    updateToast(toastId.current, `Successfully generated.`, 'success', 2000);
                    window.open(downloadUrl, '_blank')
                    setGenerating(false);
                  })
                  .catch((err) => {
                    setGenerating(false);
                    updateToast(toastId.current, err.message, 'error', 2000);
                  })
              })
            }
            return null
          }}
        </BlobProvider>
      )}
    </NavTabContainer>
  );
};
