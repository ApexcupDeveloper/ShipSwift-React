import { useLocale } from '../../../../../assets/locale';

import { MultiSelect } from '../../../../@core/modules/MultiSelectBuilder';
import { MainButton } from '../../../../@core/modules/Button';
import { BlobProvider } from '@react-pdf/renderer';
import { InvoiceComponent } from '../../../../@core/modules/Invoice/Invocie';
import { OrderItem } from '../../../../../client/client';
import { useEffect, useRef, useState } from 'react';
import { addInfoToast, updateToast } from '../../../../toast';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@firebase/storage';
import firebase from '../../../../../utils/firebase';
import { config } from '../../../../../private';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';
import { useSelector } from 'react-redux';

type Props = {
  count: number,
  orderData: OrderItem[],
  companyData: CompanyInfo.AsObject,
  onClear: () => void,
  onCancel: () => void,
  onShip: () => void
};


export const MultiSelectOrders: React.FC<Props> = ({ count, orderData, companyData, onClear, onCancel, onShip }) => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const toastId = useRef<any>(null);
  const companyLogo = useSelector((state: any) => state.company.logo);
  const [generating, setGenerating] = useState(false);


  return (
    <MultiSelect visible={true}>
      <MultiSelect.ItemsSelected items={count} />
      <MainButton flat type="text-white" children={word('global.ship')} onClick={onShip} />
      {companyLogo && (
        <>
          {
            !generating ?
              <MainButton flat type="text-white" children={word('global.print.labels')} onClick={() => setGenerating(true)} />
              :
              <BlobProvider document={<InvoiceComponent order={orderData} companyData={companyData} logoUrl={companyLogo} />}>
                {({ blob, url, loading, error }) => {
                  if (!loading && url && blob) {
                    toastId.current = addInfoToast(`Generating invoice...`, false);

                    const storage = getStorage(firebase, config.firebase.invoices);
                    const storageRef = ref(storage, `${companyId}/multiples/${Math.random()}.pdf`);
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
                  return (
                    <MainButton flat type="text-white" children={word('global.print.labels')} disabled />
                  )
                }}
              </BlobProvider>
          }
        </>
      )}
      <MainButton flat type="text-white" children={word('global.export.csv')} />
      <MainButton flat type="text-red" children={word('global.cancel.orders')} onClick={onCancel} />
      <MultiSelect.Devider />
      <MainButton flat type="text-white" children={word('global.clear.selections')} onClick={onClear} />
    </MultiSelect>
  );
};
