import { useCallback, useMemo, useRef, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useHistory, useLocation } from 'react-router-dom';

import { AppRoutes } from '../../../../app/api';

import { FormCaption } from '../../../../@core/modules/Container';
import { ShipModal } from '../../components/ShipModal';
import { Dimensions } from '../../components/Dimensions';
import { InputCustom } from '../../../../@core/modules/Input';
import { Select } from '../../../../@core/modules/Select';

import { CourierView } from './CourierView';

import * as styled from './ShipStep2View.styled';
import { OrderItem } from '../../../../../client/client';
import { carriersData } from '../../../Orders/views/MultiShipView/MultiShipView.config';
import { useEffect } from 'react';
import { useCourierClient, useGrpcClient, useOrderClient, useProductClient } from '../../../../../client/client-hook';
import { addErrorToast, addInfoToast, addWarningToast, updateToast } from '../../../../toast';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { CreateLabelRequest, Item, Parcel, Shipment } from '../../../../../proto/courierapi_pb';
import { getCollectionDate, getCompanyId } from '../../../../../utils';
import { cacheService } from '../../../../../utils/cache-service';
import { GetAllProductsRequest, ProductInfo } from '../../../../../proto/product_manager_pb';
import { useSelector } from 'react-redux';

const requestSignatureList = [
  'RMCD-MTO',
  'RMCD-MTP',
  'RMCD-MTG',
  'RMCD-MPM',
  'RMCD-MPP',
  'RMCD-MP5',
  'RMCD-MP9',
  'RMCD-MTA',
  'RMCD-MTE',
  'RMCD-OSA',
  'RMCD-OSB',
  'RMCD-OTC',
  'RMCD-OTD',
  'RMCD-BPR1',
  'RMCD-BPR2'
]

type Props = {};
type ServiceProps = {
  label: string,
  value: string
}

type StateProps = {
  orderData: OrderItem;
  nRoute: string;
  cRoute: string;
}

export const ShipStep2View: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { push, goBack } = useHistory();
  const { state } = useLocation();
  const { user } = useAuth0();
  const { orderData, nRoute, cRoute } = state as StateProps;
  const getclient = useCourierClient();
  const getCompanyClient = useGrpcClient();
  const getProductClient = useProductClient();
  const getOrderClient = useOrderClient();
  const [trackNumber, setTrackNumber] = useState('');
  const [packages, setPackages] = useState<ServiceProps[]>([]);
  const [carrier, setCarrier] = useState('');
  const [carriers, setCarriers] = useState<any[]>([]);
  const companyData = useSelector((state: any) => state.company.company);
  const [products, setProducts] = useState<ProductInfo.AsObject[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<ServiceProps[]>([]);
  const [weight, setWeight] = useState('');
  const toastId = useRef<any>(null);
  const companyId = getCompanyId(user);
  const [selectedService, setSelectedService] = useState('');
  const [weightError, setWeightError] = useState(false);

  useEffect(() => {
    setSelectedPackage([]);
  }, [packages])

  useEffect(() => {
    if (companyId) {
      Promise.all([
        getCarriers(),
        getProduct(),
      ])
        .then((data: any) => {
          setCarriers(data[0]);
        })
        .catch((err) => {
          addErrorToast(err.message);
        })
    }
  }, [companyId])

  const getCarriers = () => {
    return new Promise<any>((resolve, reject) => {
      getclient()
        .then((client) => {
          client.listCarriers({
            companyId: companyId
          })
            .then((res: any) => {
              resolve(res.carriersList)
            })
            .catch((err) => {
              reject(err);
            })
        })
        .catch((err) => {
          reject(err);
        })
    })
  }

  const getProduct = () => {
    getProductClient()
      .then((client) => {
        const promises: any = [];
        orderData.productsList.map((item) => {
          promises.push(
            new Promise<any>((resolve, reject) => {
              const requestProduct: GetAllProductsRequest.AsObject = {
                companyId: companyId,
                minQuantity: 0,
                maxQuantity: 0,
                storeFilter: {
                  storeIdsList: [],
                  nameSkuFreeTextSearch: item.shipswiftProductSku
                },
                paginationCursor: "",
                pageSize: 1,
                includeArchived: false
              };
              client
                .getAllProducts(requestProduct)
                .then((res: any) => {
                  resolve(res.productsList[0])
                })
                .catch((err) => {
                  reject(err);
                })
            })
          );
        })

        Promise.all(promises)
          .then((data: any) => {
            setProducts(data);
          })
          .catch((err) => {
            addErrorToast(err);
          })
      })
      .catch((err) => {
        addErrorToast(err);
      })
  }

  if (!orderData) {
    goBack();
  }

  const onClose = useCallback(() => push(cRoute), [push]);

  const onChangePackage = (carrier: string) => {
    let packages = carriersData.filter((item) => item.account === carrier)[0].packages;
    let tempArr: ServiceProps[] = [];
    packages.map((item) => {
      let value = ''
      if (item === "Letter") {
        value = 'letter'
      } else if (item === "Large Letter") {
        value = 'largeLetter'
      } else if (item === 'Small Parcel') {
        value = 'smallParcel'
      } else if (item === 'Medium Parcel') {
        value = 'mediumParcel'
      } else if (item === 'Parcel') {
        value = 'parcel'
      } else if (item === 'Documents') {
        value = 'documents'
      } else {
        value = item
      }
      tempArr.push({ label: item, value: value })
    })
    setPackages(tempArr);
  }

  const onNext = () => {
    if (!weight) {
      addWarningToast('Please input the weight');
      setWeightError(true);
      return;
    }
    if (!carrier) {
      addWarningToast('Please select the carrier');
      return;
    }

    if (selectedService.includes('ship_without_label')) {
      if (trackNumber) {
        toastId.current = addInfoToast('Creating the label...', false);
        getclient()
          .then((client) => {
            let shipmentRequest = {
              companyId: companyId,
              storeId: orderData.storeId,
              tracking: trackNumber,
              orderNumber: orderData.orderNumber,
              courier: carrier
            };

            client
              .addLabel(shipmentRequest)
              .then((res) => {
                cacheService.clearCache('main_orders');
                updateToast(toastId.current, 'Successfully created label', 'success', 5000);
                push(cRoute);
              })
              .catch((err) => {
                updateToast(toastId.current, err.message, 'error', 5000);
              })
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 5000);
          })
      } else {
        toastId.current = addInfoToast('Updating the order...', false);
        getCompanyClient()
          .then((companyClient) => {
            companyClient.getStoreType({
              companyId: companyId,
              storeId: orderData.storeId
            }).then((res: any) => {
              const storeType = res.type;
              getOrderClient()
                .then((client) => {
                  let orderRequest = {
                    companyId: companyId,
                    storeId: orderData.storeId,
                    storeType: storeType,
                    orderId: orderData.orderNumber,
                    status: "Shipped"
                  };

                  client
                    .updateOrderStatus(orderRequest)
                    .then((res) => {
                      cacheService.clearCache('main_orders');
                      updateToast(toastId.current, 'Successfully updated order', 'success', 5000);
                      push(cRoute);
                    })
                    .catch((err) => {
                      updateToast(toastId.current, err.message, 'error', 5000);
                    })
                })
                .catch((err) => {
                  updateToast(toastId.current, err.message, 'error', 5000);
                })
            }).catch((err) => {
              updateToast(toastId.current, err.message, 'error', 5000);
            })
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 5000);
          })
      }
    } else {
      toastId.current = addInfoToast('Creating the label...', false);
      getclient()
        .then((client) => {
          let parcelsList: Parcel.AsObject[];
          let collectionDate = {
            seconds: 0,
            nanos: 0
          };
          let items = orderData.productsList.map((item, index) => {
            return {
              description: item.shipswiftProductName,
              originCountry: products[index] && products[index].originCountry ? products[index].originCountry : '',
              quantity: item.quantity,
              value: item.price?.value ? item.price.value : 0,
              currency: companyData?.defaultCurrency || '',
              weight: products[index] && products[index].weight ? products[index].weight : 0,
              weightUnit: companyData?.weightUnit || '',
              sku: item.shipswiftProductSku,
              hsCode: products[index] && products[index].customsInfoTariff ? products[index].customsInfoTariff : ''
            };
          });
          parcelsList = [
            {
              width: 1,
              height: 1,
              length: 1,
              unit: companyData?.dimensionUnit || '',
              weight: Number(weight),
              weightUnit: companyData?.weightUnit || '',
              packagingWeight: 0,
              itemsList: items
            }
          ];

          if (carriers.length) {
            const carrierList = carriers.filter((item: any) => item.name === carrier)
            if (carrierList.length > 0 && carrierList[0].enabled) {
              collectionDate = {
                seconds: getCollectionDate(carrierList[0].cutoffTime) / 1000,
                nanos: 0
              }
            }
          }

          let shipment: Shipment.AsObject = {
            collectionDate: collectionDate,
            deliveryInstructions: "",
            shipFrom: {
              shipInfo: {
                name: companyData?.name || '',
                phone: companyData?.phone || '',
                email: companyData?.email || '',
                companyName: companyData?.name || '',
                address1: companyData?.address1 || '',
                address2: companyData?.address2 || '',
                address3: companyData?.address3 || '',
                city: companyData?.city || '',
                postcode: companyData?.postcode || '',
                county: companyData?.region || '',
                countryIso: companyData?.country || ''
              },
              taxId: companyData?.vatNumber || '',
              eoriId: companyData?.eoriNumber || '',
              companyNumber: "",
              iossNumber: companyData?.ioss?.value || ''
            },
            shipTo: {
              shipInfo: {
                name: orderData.customer ? orderData.customer.fullName : '',
                phone: orderData.customer ? orderData.customer.phoneNumber : '',
                email: orderData.customer ? orderData.customer.email : '',
                companyName: orderData.customer ? orderData.customer.company : '',
                address1: orderData.customer ? orderData.customer.address1 : '',
                address2: orderData.customer ? orderData.customer.address2 : '',
                address3: "",
                city: orderData.customer ? orderData.customer.city : '',
                postcode: orderData.customer ? orderData.customer.postcode : '',
                county: orderData.customer ? orderData.customer.country : '',
                countryIso: orderData.customer ? orderData.customer.countryCode2 : ''
              }
            },
            parcelsList: parcelsList,
            generateInvoice: false,
            generatePackingSlip: false,
            dcServiceId: "",
            courierSpecificsMap:
              carrier === 'RoyalMailClickAndDrop' ?
                requestSignatureList.includes(selectedService) ? [["signature_required", "true"], ["parcel_identifier", selectedPackage[0].value]] : [["parcel_identifier", selectedPackage[0].value]] : []
          };
          let request: CreateLabelRequest.AsObject = {
            companyId: companyId,
            storeId: orderData.storeId,
            orderNumber: orderData.orderNumber,
            courier: carrier,
            service: selectedService,
            shipment: shipment
          }
          client.createLabel(request)
            .then(async (data: any) => {
              window.open(data.labelUrl, '_blank');
              cacheService.clearCache('main_orders');
              updateToast(toastId.current, 'Successfully created label', 'success', 5000);
              push(cRoute);
            })
            .catch((err) => {
              updateToast(toastId.current, err.message, 'error', 5000);
            })
        })
    }
  }

  const onChange = (service: string, carrier: string) => {
    setSelectedService(service);
    onChangePackage(carrier);
    setCarrier(carrier);
  }

  const onChangeTrack = (e: string) => {
    setTrackNumber(e);
  }

  return (
    <ShipModal orderNumber={`#${orderData.orderNumber}`} orderData={orderData} onClose={onClose} nextButtonTitle={word('global.ship')}
      onNext={onNext}
    >
      <styled.BodyWrapper>
        <styled.DimensionWrapper>
          <styled.InputWrapper>
            <FormCaption caption={word('global.package')}>
              <Select
                values={packages}
                selectedValues={selectedPackage}
                onSelectedChanged={setSelectedPackage}
              />
            </FormCaption>
            <FormCaption caption={word('global.weight')}>
              <InputCustom placeholder={'0.00'} prefix={'kg'} value={weight} onChange={(e) => {
                setWeightError(false);
                setWeight(e);
              }} error={weightError} />
            </FormCaption>
          </styled.InputWrapper>
          <Dimensions height={3.94} width={3.94} weight={5.91} />
        </styled.DimensionWrapper>
        <CourierView onChangePackage={onChangePackage} onChange={onChange} selectedService={selectedService} trackNumber={trackNumber} onChangeTrack={onChangeTrack} />
      </styled.BodyWrapper>
    </ShipModal>
  );
};
