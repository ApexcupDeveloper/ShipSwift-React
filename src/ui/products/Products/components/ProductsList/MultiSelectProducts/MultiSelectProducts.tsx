import { useLocale } from '../../../../../../assets/locale';

import { MultiSelect } from '../../../../../@core/modules/MultiSelectBuilder/components/MultiSelect';
import { MainButton } from '../../../../../@core/modules/Button';
import { useRef, useState } from 'react';
import { BarcodeComponent } from '../../../../../@core/modules/Barcode/Barcode';
import { BlobProvider } from '@react-pdf/renderer';
import { ProductInfo } from '../../../../../../proto/product_manager_pb';
import { addInfoToast, updateToast } from '../../../../../toast';
import { getDownloadURL, getStorage, ref } from '@firebase/storage';
import firebase from '../../../../../../utils/firebase';
import { config } from '../../../../../../private';
import { useAuth0 } from '../../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../../utils';
import { uploadBytesResumable } from 'firebase/storage';

type Props = {
  count: number,
  productData: ProductInfo.AsObject[],
  onClear: () => void,
  onDelete: () => void
};

const mocks = {
  items: 4,
};

export const MultiSelectProducts: React.FC<Props> = ({ count, productData, onClear, onDelete }) => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const toastId = useRef<any>(null);

  const [generating, setGenerating] = useState(false);

  return (
    <MultiSelect visible={true}>
      <MultiSelect.ItemsSelected items={count} />
      {
        !generating ?
          <MainButton flat type="text-white" children={word('global.print.barcodes')} onClick={() => setGenerating(true)} />
          :
          <BlobProvider document={<BarcodeComponent products={productData} />}>
            {({ blob, url, loading, error }) => {
              if (!loading && url && blob) {
                toastId.current = addInfoToast(`Generating barcode...`, false);

                const storage = getStorage(firebase, config.firebase.barcodes);
                const storageRef = ref(storage, `${companyId}/multiples/${Math.random()}.pdf`);
                const uploadTask = uploadBytesResumable(storageRef, blob);

                uploadTask.on('state_changed', async (snapshot: any) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                  updateToast(toastId.current, `Generating barcode... ${Math.round(progress)}%`, 'info', false);
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
                <MainButton flat type="text-white" children={word('global.print.barcodes')} disabled />
              )
            }}
          </BlobProvider>
      }
      <MainButton flat type="text-white" children={word('global.export.csv')} />
      <MainButton flat type="text-red" children={word('global.delete')} onClick={onDelete} />
      <MultiSelect.Devider />
      <MainButton flat type="text" children={word('global.clear.selections')} onClick={onClear} />
    </MultiSelect>
  );
};
