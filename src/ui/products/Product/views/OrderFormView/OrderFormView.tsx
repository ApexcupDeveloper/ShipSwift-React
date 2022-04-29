import { BlobProvider } from '@react-pdf/renderer';
import { createRef, useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { CameraIcon64 } from '../../../../../assets/icons';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useProductClient } from '../../../../../client/client-hook';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';
import { getCompanyId } from '../../../../../utils';
import { BarcodeComponent } from '../../../../@core/modules/Barcode/Barcode';

import { MainButton } from '../../../../@core/modules/Button';
import { FormCaption } from '../../../../@core/modules/Container';
import { FormSection } from '../../../../@core/modules/FormBuilder';
import { InputCustom } from '../../../../@core/modules/Input';
import { DisplayRound } from '../../../../@core/modules/Other';
import { Select } from '../../../../@core/modules/Select';
import { AppRoutes } from '../../../../app/api';
import { addInfoToast, updateToast } from '../../../../toast';

import { PlaceholderImage } from './images';

import * as styled from './OrderFormView.styled';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@firebase/storage';
import firebase from '../../../../../utils/firebase';
import { config } from '../../../../../private';
import { countries } from '../../../../settings/General/pages/GeneralPage/GeneralPage.config';

type Props = {
  productData: any,
  companyInfo: CompanyInfo.AsObject | undefined,
  handleChangeEvent: () => void
};

type EditedDataProps = {
  name: string,
  value: any
}

type SelectProps = {
  label: string,
  value: any
}

export const OrderFormView: React.VFC<Props> = ({ productData, companyInfo, handleChangeEvent }) => {
  const { word } = useLocale();
  const getProductClient = useProductClient();
  const { user } = useAuth0();
  const { push } = useHistory();
  const toastId = useRef<any>(null);
  const imgRef = createRef<any>()
  const companyId = getCompanyId(user);
  const [generating, setGenerating] = useState(false);
  const [errorLoadImage, setErrorLoadImage] = useState(false);
  const [data, setData] = useState<any>(productData);
  const [selectedCountry, setSelectedCountry] = useState<SelectProps[]>(
    countries.filter(item => item.value === productData.originCountry)
  )
  const [updating, setUpdating] = useState(false);
  const [imgHeight, setImgHeight] = useState(200);
  const [increaseStock, setIncreaseStock] = useState('');
  const [decreaseStock, setDecreaseStock] = useState('');
  const [editedData, setEditedData] = useState<EditedDataProps>({
    name: '',
    value: ''
  })

  useEffect(() => {
    setData({
      ...productData,
      height: productData.height.toFixed(2),
      width: productData.width.toFixed(2),
      length: productData.length.toFixed(2),
      weight: productData.weight.toFixed(2),
      price: { value: productData.price.value.toFixed(2) },
      customsInfoValue: productData.customsInfoValue.toFixed(2)
    });
  }, [productData])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (companyId && !updating && editedData.name.length > 0) {
        setUpdating(true);
        toastId.current = addInfoToast('Updating product...', false);
        getProductClient()
          .then((client) => {
            const request = {
              [editedData.name]: editedData.name !== 'price' ? editedData.value : { value: editedData.value },
              sku: data.sku,
              companyId: companyId
            }
            client
              .editProduct(request)
              .then((res) => {
                // handleChangeEvent();
                setEditedData({ name: '', value: '' })
                setUpdating(false);
                updateToast(toastId.current, `Successfully updated`, 'success', 2000);
              })
              .catch((err) => {
                setUpdating(false);
                updateToast(toastId.current, err.message, 'error', 2000);
              })
          })
          .catch((err) => {
            setUpdating(false);
            updateToast(toastId.current, err.message, 'error', 2000);
          })
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [editedData])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (companyId && !updating) {
        if (increaseStock || decreaseStock) {
          setUpdating(true);
          toastId.current = addInfoToast('Updating product...', false);
          const adjustment = increaseStock ? Number(increaseStock) : Number(decreaseStock) * -1;
          getProductClient()
            .then((client) => {
              client
                .updateStock({
                  sku: data.sku,
                  companyId: companyId,
                  stockOnHandAdjustment: adjustment
                })
                .then((res) => {
                  handleChangeEvent();
                  setIncreaseStock('');
                  setDecreaseStock('');
                  setUpdating(false);
                  updateToast(toastId.current, `Successfully updated`, 'success', 2000);
                })
                .catch((err) => {
                  setUpdating(false);
                  setIncreaseStock('');
                  setDecreaseStock('');
                  updateToast(toastId.current, err.message, 'error', 2000);
                })
            })
            .catch((err) => {
              setUpdating(false);
              setIncreaseStock('');
              setDecreaseStock('');
              updateToast(toastId.current, err.message, 'error', 2000);
            })
        }
      }
    }, 800);
    return () => clearTimeout(timeoutId);
  }, [increaseStock, decreaseStock])

  useEffect(() => {
    if (imgRef && imgRef.current) {
      const { current } = imgRef;
      const boundingRect = current.getBoundingClientRect()
      const { height } = boundingRect;
      setImgHeight(height);
    }
  }, [imgRef])

  const onEditImage = useCallback(() => push(AppRoutes.Products.Product.EditImage.replace(':id', data.sku), data.name), [data, push]);

  const getCurrency = (currency: string) => {
    if (currency === 'GBP') {
      return '£';
    } else if (currency === 'EUR') {
      return '€';
    } else {
      return '$';
    }
  }

  return (
    <DisplayRound overflow flex={0}>
      <styled.BodyWrapper>
        <styled.ImageWrapper>
          <styled.OrderImage className="product-image" ref={imgRef} src={data.imagesList.length > 0 && !errorLoadImage ? data.imagesList[0].url : PlaceholderImage} onError={() => setErrorLoadImage(true)} />
          <styled.ButtonImage className="button-image" style={{ height: imgHeight }} onClick={onEditImage} >
            <CameraIcon64 />
          </styled.ButtonImage>
        </styled.ImageWrapper>
        <FormSection topPadding list>
          <FormCaption caption={word('product.name')}>
            <InputCustom value={data.name} onChange={(e) => {
              if (updating) return;
              setEditedData({ name: 'name', value: e });
              setData((prev: any) => ({ ...prev, name: e }));
            }} />
          </FormCaption>
          <FormCaption caption={word('global.sku')}>
            <InputCustom disabled value={data.sku} />
          </FormCaption>
          <styled.PrintWrapper>
            <FormCaption caption={word('global.barcode')}>
              <InputCustom value={data.barcode} onChange={(e) => {
                if (updating) return;
                setEditedData({ name: 'barcode', value: e });
                setData((prev: any) => ({ ...prev, barcode: e }));
              }} />
            </FormCaption>
            {!generating ?
              <MainButton children={word('global.print')} onClick={() => setGenerating(true)} />
              :
              <BlobProvider document={<BarcodeComponent products={[data]} />} >
                {({ blob, url, loading, error }) => {
                  if (!loading && url && blob) {
                    toastId.current = addInfoToast(`Generating barcode...`, false);

                    const storage = getStorage(firebase, config.firebase.barcodes);
                    const storageRef = ref(storage, `${companyId}/${data.name}/${Math.random()}.pdf`);
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
                  return <MainButton children={word('global.print')} />
                }}
              </BlobProvider>
            }


          </styled.PrintWrapper>
        </FormSection>
        <FormSection title={word('global.dimensions')} showSplitter list>
          <styled.DimensionFieldWrapper>
            <FormCaption caption={word('global.height')}>
              <InputCustom type={'number'} prefix={companyInfo?.dimensionUnit} placeholder="0.00" value={data.height.toString()} onChange={(e) => {
                if (updating) return;
                setEditedData({ name: 'height', value: e });
                setData((prev: any) => ({ ...prev, height: e }));
              }} />
            </FormCaption>
            <FormCaption caption={word('global.width')}>
              <InputCustom type={'number'} prefix={companyInfo?.dimensionUnit} placeholder="0.00" value={data.width.toString()} onChange={(e) => {
                if (updating) return;
                setEditedData({ name: 'width', value: e });
                setData((prev: any) => ({ ...prev, width: e }));
              }} />
            </FormCaption>
            <FormCaption caption={word('global.length')}>
              <InputCustom type={'number'} prefix={companyInfo?.dimensionUnit} placeholder="0.00" value={data.length.toString()} onChange={(e) => {
                if (updating) return;
                setEditedData({ name: 'length', value: e });
                setData((prev: any) => ({ ...prev, length: e }));
              }} />
            </FormCaption>
          </styled.DimensionFieldWrapper>
          <FormCaption caption={word('global.weight')}>
            <InputCustom type={'number'} prefix={companyInfo?.weightUnit} placeholder="0.00" value={data.weight.toString()} onChange={(e) => {
              if (updating) return;
              setEditedData({ name: 'weight', value: e });
              setData((prev: any) => ({ ...prev, weight: e }));
            }} />
          </FormCaption>
        </FormSection>
        <FormSection title={word('global.pricing')} showSplitter list>
          <FormCaption caption={word('global.retail-price')}>
            <InputCustom type={'number'} prefix={getCurrency(companyInfo?.defaultCurrency || '')} placeholder="0.00" value={data.price.value.toString()} onChange={(e) => {
              if (updating) return;
              setEditedData({ name: 'price', value: e });
              setData((prev: any) => ({ ...prev, price: { value: e } }));
            }} />
          </FormCaption>
          <FormCaption caption={word('global.cost-price')}>
            <InputCustom prefix={getCurrency(companyInfo?.defaultCurrency || '')} placeholder="0.00" />
          </FormCaption>
          <FormCaption caption={word('global.tax.rate')}>
            <InputCustom type={'number'} prefix={getCurrency(companyInfo?.defaultCurrency || '')} placeholder="0.00" />
          </FormCaption>
        </FormSection>
        <FormSection title={word('global.stock')} showSplitter list>
          <FormCaption caption={word('global.stock.qty.increase')}>
            <InputCustom placeholder="0" type={'number'} value={increaseStock} onChange={(e) => {
              if (updating) return;
              setIncreaseStock(e);
            }} />
          </FormCaption>
          <FormCaption caption={word('global.stock.qty.decrease')}>
            <InputCustom placeholder="0" type={'number'} value={decreaseStock} onChange={(e) => {
              if (updating) return;
              setDecreaseStock(e);
            }} />
          </FormCaption>
          <FormCaption caption={word('global.min-stock-level')}>
            <InputCustom placeholder="0" />
          </FormCaption>
          <FormCaption caption={word('global.reorder.qty')}>
            <InputCustom placeholder="0" />
          </FormCaption>
        </FormSection>
        <FormSection title={word('global.international')} showSplitter list>
          <FormCaption caption={word('global.customs.description')}>
            <InputCustom value={data.customsInfoDescription} onChange={(e) => {
              if (updating) return;
              setEditedData({ name: 'customsInfoDescription', value: e });
              setData((prev: any) => ({ ...prev, customsInfoDescription: e }));
            }} />
          </FormCaption>
          <FormCaption caption={word('global.customs.value')}>
            <InputCustom type={'number'} value={data.customsInfoValue.toString()} onChange={(e) => {
              if (updating) return;
              setEditedData({ name: 'customsInfoValue', value: e });
              setData((prev: any) => ({ ...prev, customsInfoValue: e }));
            }} />
          </FormCaption>
          <FormCaption caption={word('global.tariff.code')}>
            <InputCustom value={data.customsInfoTariff} onChange={(e) => {
              if (updating) return;
              setEditedData({ name: 'customsInfoTariff', value: e });
              setData((prev: any) => ({ ...prev, customsInfoTariff: e }));
            }} />
          </FormCaption>
          <FormCaption caption={word('global.country-of-manufacture')}>
            <Select
              searchable
              selectedValues={selectedCountry}
              values={countries}
              position="top"
              onSelectedChanged={(e) => {
                if (updating) return;
                setEditedData({ name: 'originCountry', value: e && e.length ? e[0].value : '' });
                setSelectedCountry(e);
              }}
            />
          </FormCaption>
        </FormSection>
        <FormSection title={word('global.additional')} showSplitter list>
          <FormCaption caption={word('global.tag')}>
            <Select />
          </FormCaption>
        </FormSection>
      </styled.BodyWrapper>
    </DisplayRound>
  );
};
