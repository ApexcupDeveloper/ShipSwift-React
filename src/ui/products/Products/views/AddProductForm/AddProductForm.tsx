import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { FormSection, SplitInput } from '../../../../@core/modules/FormBuilder';
import { MainButton } from '../../../../@core/modules/Button';
import { Modal } from '../../../../@core/modules/Modal';

import * as styled from './AddProductForm.styled';
import { Devider } from '../../../../@core/modules/Devider';
import { ImageDropzone } from '../../../../@core/modules/ImageDropzone';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';
import { useGrpcClient, useProductClient } from '../../../../../client/client-hook';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import { useHistory } from 'react-router';
import { AppRoutes } from '../../../../app/api';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebase from '../../../../../utils/firebase';
import { config } from '../../../../../private';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';
import Resizer from "react-image-file-resizer";
import { MultiImageDropzone } from '../../../../@core/modules/MultiImageDropzone';
import { useSelector } from 'react-redux';

type Props = {
  visible?: boolean;
  onClose?: () => void;
};

const initialArray = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined
];

export const AddProductForm: React.VFC<Props> = ({ visible = true, onClose }) => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const toastId = useRef<any>(null);
  const companyId = getCompanyId(user);
  const getClient = useProductClient();
  const companyInfo = useSelector((state: any) => state.company.company);
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState({
    id: 0,
    percent: 0
  });

  const [errorName, setErrorName] = useState(false);
  const [errorPrice, setErrorPrice] = useState(false);
  const [errorSKU, setErrorSKU] = useState(false);
  const [images, setImages] = useState<any[]>([]);
  const [imageUrls, setImageUrls] = useState<any[]>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  ]);
  const [uploadPercents, setUploadPercents] = useState<any[]>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  ]);
  const [product, setProduct] = useState<any>({
    companyId: '',
    name: '',
    sku: '',
    price: {
      value: ''
    },
    barcode: '',
    originCountry: '',
    description: '',
    height: '',
    width: '',
    length: '',
    weight: '',
    stockOnHand: '',
    customsInfoValue: '',
    customsInfoDescription: '',
    customsInfoTariff: '',
    imageUrlsList: []
  });

  useEffect(() => {
    let tempArr = uploadPercents;
    tempArr[progress.id] = progress.percent;
    setUploadPercents(tempArr);
  }, [progress])

  const getCurrency = (currency: string) => {
    if (currency === 'GBP') {
      return '£';
    } else if (currency === 'EUR') {
      return '€';
    } else {
      return '$';
    }
  }

  const onAdd = () => {
    if (product.sku.length === 0) {
      addErrorToast('SKU could not be empty.');
      setErrorSKU(true);
    } else {
      setErrorSKU(false);
    }
    if (product.name.length === 0) {
      addErrorToast('Name could not be empty.');
      setErrorName(true);
    } else {
      setErrorName(false);
    }
    if (product.price.value.length === 0) {
      addErrorToast('Price could not be empty.');
      setErrorPrice(true);
    } else {
      setErrorPrice(false);
    }

    if (
      product.sku.length === 0 ||
      product.price.value.length === 0 ||
      product.name.length === 0
    ) {
      return;
    }
    setLoading(true);

    if (images.length > 0) {
      toastId.current = addInfoToast('Uploading images...', false);
      setUploading(true);
      const storage = getStorage(firebase, config.firebase.productImages);
      Promise.all(
        images.map((image: any) => {
          const fileType = image.img.name.replace(/^.*\./, '');

          return new Promise((resolve, reject) => {
            Resizer.imageFileResizer(
              image.img,
              2000,
              2000,
              fileType,
              80,
              0,
              (uri: any) => {
                resolve({
                  id: image.id,
                  img: uri,
                  type: fileType
                })
              },
              "file"
            );
          })
        })
      )
        .then((resizedImages) => {
          Promise.all(
            resizedImages.map((imageData: any) => {
              const storageRef = ref(storage, `${companyId}/${product.name}/${Math.random()}.${imageData.type}`);
              return new Promise((resolve, reject) => {
                const uploadTask = uploadBytesResumable(storageRef, imageData.img);
                uploadTask.on('state_changed', async (snapshot: any) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  setProgress({
                    id: imageData.id,
                    percent: progress
                  });
                }, (err) => {
                  reject(err);
                }, () => {
                  getDownloadURL(uploadTask.snapshot.ref)
                    .then((url) => {
                      resolve(url);
                    })
                    .catch((err) => {
                      reject(err);
                    })
                })
              })
            })
          )
            .then((urls) => {
              updateToast(toastId.current, `Creating product...`, 'info', false);
              setUploading(false);
              getClient()
                .then((client) => {
                  client
                    .addProduct({
                      ...product,
                      companyId: companyId,
                      imageUrlsList: urls
                    })
                    .then((res) => {
                      updateToast(toastId.current, `Successfully created`, 'success', 2000);
                      push(AppRoutes.Products.Index);
                      setLoading(false);
                    })
                    .catch((err) => {
                      updateToast(toastId.current, err.message, 'error', 2000);
                      setLoading(false);
                    })
                })
                .catch((err) => {
                  updateToast(toastId.current, err.message, 'error', 2000);
                  setLoading(false);
                })
            })
            .catch((err) => {
              updateToast(toastId.current, err.message, 'error', 2000);
              setUploading(false);
              setLoading(false);
            })
        })
        .catch((err) => {
          updateToast(toastId.current, err.message, 'error', 2000);
          setUploading(false);
          setLoading(false);
        })
    } else {
      toastId.current = addInfoToast('Creating product...', false);
      getClient()
        .then((client) => {
          client
            .addProduct({
              ...product,
              companyId: companyId
            })
            .then((res) => {
              updateToast(toastId.current, `Successfully created`, 'success', 2000);
              push(AppRoutes.Products.Index);
              setLoading(false);
            })
            .catch((err) => {
              updateToast(toastId.current, err.message, 'error', 2000);
              setLoading(false);
            })
        })
        .catch((err) => {
          updateToast(toastId.current, err.message, 'error', 2000);
          setLoading(false);
        })
    }
  }

  const handleChange = (name: string, value: string) => {
    if(name === 'sku') {
      value = value.replace(/\s/g, '');
      setProduct((prev: any) => ({
        ...prev,
        [name]: value,
      }))
    } else {
      setProduct((prev: any) => ({
        ...prev,
        [name]: name === 'price' ? { value: value } : value,
      }))
    }
  }

  const handleMultiImage = (files: any[]) => {
    let tempUrlArr: any[] = imageUrls;
    let tempArr: any[] = images;

    if(files.length) {
      let id = 0;
      imageUrls.map((url, index) => {
        if(url === undefined) {
          if(files[id]) {
            tempUrlArr[index] = URL.createObjectURL(files[id]);
            tempArr = [...tempArr, { id: index, img: files[id] }];
            id++;
          }
        }
      })
      setImageUrls(tempUrlArr);
      setImages(tempArr);
    }
  }

  const handleImage = (id: number, files: any[]) => {
    let tempArr: any[] = [];
    let tempUrlArr: any[] = imageUrls;
    const img = files[0];
    tempArr = [...images, { id, img }];
    tempUrlArr[id] = URL.createObjectURL(img);
    setImages(tempArr);
    setImageUrls(tempUrlArr);
  }

  const onRemoveImage = (id: number) => {
    let tempArr: any[] = images;
    let tempUrlArr: any[] = imageUrls;
    tempArr = tempArr.filter((image: any) => image.id === id);
    setImages(tempArr);
    tempUrlArr[id] = undefined;
    setImageUrls(tempUrlArr);
  }

  const onClearAll = () => {
    setImages([]);
    setImageUrls([
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    ]);
  }

  return (
    <Modal
      title={word('global.add.product')}
      width={830}
      visible={visible}
      onClose={onClose}
      footer={
        <styled.ButtonsWrapper>
          <MainButton type="text" children={word('global.cancel')} onClick={onClose} disabled={loading} />
          <MainButton children={word('global.save')} onClick={onAdd} disabled={loading} />
        </styled.ButtonsWrapper>
      }
    >
      {companyInfo && (
        <styled.BodyWrapper>
          <FormSection>
            <FormCaption caption={`${word('global.name')} *`}>
              <InputCustom placeholder={'Your Product Name'} value={product.name} onChange={(e) => handleChange('name', e)} error={errorName} />
            </FormCaption>
          </FormSection>
          <FormSection>
            <SplitInput>
              <FormCaption caption={`${word('global.sku')} *`}>
                <InputCustom placeholder={'e.g. 121243232'} value={product.sku} onChange={(e) => handleChange('sku', e)} error={errorSKU} />
              </FormCaption>
              <FormCaption caption={`${word('global.price')} *`}>
                <InputCustom type={'number'} placeholder={'Enter your price'} prefix={getCurrency(companyInfo?.defaultCurrency || '')} value={product.price.value} onChange={(e) => handleChange('price', e)} error={errorPrice} />
              </FormCaption>
            </SplitInput>
          </FormSection>
          <FormSection>
            <SplitInput>
              <FormCaption caption={word('global.barcode')}>
                <InputCustom placeholder={'e.g. CJJM09083'} value={product.barcode} onChange={(e) => handleChange('barcode', e)} />
              </FormCaption>
              <FormCaption caption={word('global.stock.qty')}>
                <InputCustom type={'number'} placeholder={'Enter your QTY'} value={product.stockOnHand} onChange={(e) => handleChange('stockOnHand', e)} />
              </FormCaption>
            </SplitInput>
          </FormSection>
          <FormSection>
            <FormCaption caption={word('global.description')}>
              <InputCustom placeholder={'Enter your description'} multiline height={112} maxLength={200} prefix={'0/200'} fixedMaxLength value={product.description} onChange={(e) => handleChange('description', e)} />
            </FormCaption>
          </FormSection>
          <Devider />
          <FormSection title={word('global.images')}>
            <MultiImageDropzone onChange={handleMultiImage} maxCount={20 - images.length < 0 ? 0 : 20 - images.length} showClear={images.length > 0} onClearAll={onClearAll}>
              <styled.DragWrapper>
                <FormCaption>
                  <ImageDropzone uploading={uploading} percent={uploadPercents[0]} onChange={(e) => handleImage(0, e)} image={imageUrls[0]} onDeleteImage={() => onRemoveImage(0)} />
                </FormCaption>
                <FormCaption>
                  <ImageDropzone uploading={uploading} percent={uploadPercents[1]} onChange={(e) => handleImage(1, e)} image={imageUrls[1]} onDeleteImage={() => onRemoveImage(1)} />
                </FormCaption>
                <FormCaption>
                  <ImageDropzone uploading={uploading} percent={uploadPercents[2]} onChange={(e) => handleImage(2, e)} image={imageUrls[2]} onDeleteImage={() => onRemoveImage(2)} />
                </FormCaption>
                <FormCaption>
                  <ImageDropzone uploading={uploading} percent={uploadPercents[3]} onChange={(e) => handleImage(3, e)} image={imageUrls[3]} onDeleteImage={() => onRemoveImage(3)} />
                </FormCaption>
                <FormCaption>
                  <ImageDropzone uploading={uploading} percent={uploadPercents[4]} onChange={(e) => handleImage(4, e)} image={imageUrls[4]} onDeleteImage={() => onRemoveImage(4)} />
                </FormCaption>
                <FormCaption>
                  <ImageDropzone uploading={uploading} percent={uploadPercents[5]} onChange={(e) => handleImage(5, e)} image={imageUrls[5]} onDeleteImage={() => onRemoveImage(5)} />
                </FormCaption>
              </styled.DragWrapper>
              <styled.DragWrapper>
                <FormCaption>
                  <ImageDropzone uploading={uploading} percent={uploadPercents[6]} onChange={(e) => handleImage(6, e)} image={imageUrls[6]} onDeleteImage={() => onRemoveImage(6)} />
                </FormCaption>
                <FormCaption>
                  <ImageDropzone uploading={uploading} percent={uploadPercents[7]} onChange={(e) => handleImage(7, e)} image={imageUrls[7]} onDeleteImage={() => onRemoveImage(7)} />
                </FormCaption>
                <FormCaption>
                  <ImageDropzone uploading={uploading} percent={uploadPercents[8]} onChange={(e) => handleImage(8, e)} image={imageUrls[8]} onDeleteImage={() => onRemoveImage(8)} />
                </FormCaption>
                <FormCaption>
                  <ImageDropzone uploading={uploading} percent={uploadPercents[9]} onChange={(e) => handleImage(9, e)} image={imageUrls[9]} onDeleteImage={() => onRemoveImage(9)} />
                </FormCaption>
                <FormCaption>
                  <ImageDropzone uploading={uploading} percent={uploadPercents[10]} onChange={(e) => handleImage(10, e)} image={imageUrls[10]} onDeleteImage={() => onRemoveImage(10)} />
                </FormCaption>
                <FormCaption>
                  <ImageDropzone uploading={uploading} percent={uploadPercents[11]} onChange={(e) => handleImage(11, e)} image={imageUrls[11]} onDeleteImage={() => onRemoveImage(11)} />
                </FormCaption>
              </styled.DragWrapper>
            </MultiImageDropzone>
          </FormSection>
          <Devider />
          <FormSection title={`${word('global.weight')} & ${word('global.dimensions')}`}>
            <SplitInput>
              <FormCaption caption={word('global.height')}>
                <InputCustom type={'number'} placeholder={'0'} prefix={companyInfo?.dimensionUnit} value={product.height} onChange={(e) => handleChange('height', e)} />
              </FormCaption>
              <FormCaption caption={word('global.width')}>
                <InputCustom type={'number'} placeholder={'0'} prefix={companyInfo?.dimensionUnit} value={product.width} onChange={(e) => handleChange('width', e)} />
              </FormCaption>
              <FormCaption caption={word('global.length')}>
                <InputCustom type={'number'} placeholder={'0'} prefix={companyInfo?.dimensionUnit} value={product.length} onChange={(e) => handleChange('length', e)} />
              </FormCaption>
              <FormCaption caption={word('global.weight')}>
                <InputCustom type={'number'} placeholder={'0'} prefix={companyInfo?.weightUnit} value={product.weight} onChange={(e) => handleChange('weight', e)} />
              </FormCaption>
            </SplitInput>
          </FormSection>
          <Devider />
          <FormSection title={word('global.international')}>
            <SplitInput>
              <FormCaption caption={word('global.customs.value')}>
                <InputCustom type={'number'} placeholder={'0'} prefix={getCurrency(companyInfo?.defaultCurrency || '')} value={product.customsInfoValue} onChange={(e) => handleChange('customsInfoValue', e)} />
              </FormCaption>
              <FormCaption caption={word('global.customs.description')}>
                <InputCustom placeholder={'Customs Description'} value={product.customsInfoDescription} onChange={(e) => handleChange('customsInfoDescription', e)} />
              </FormCaption>
            </SplitInput>
          </FormSection>
          <FormSection>
            <SplitInput>
              <FormCaption caption={word('global.customs.tariff.code')}>
                <InputCustom placeholder={'0'} value={product.customsInfoTariff} onChange={(e) => handleChange('customsInfoTariff', e)} />
              </FormCaption>
              <FormCaption caption={word('global.origin.country')}>
                <InputCustom placeholder={'UK'} value={product.originCountry} onChange={(e) => handleChange('originCountry', e)} />
              </FormCaption>
            </SplitInput>
          </FormSection>
        </styled.BodyWrapper>
      )}
    </Modal>
  );
};
