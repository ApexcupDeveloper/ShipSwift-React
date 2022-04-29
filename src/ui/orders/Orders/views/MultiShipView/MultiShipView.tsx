import { useCallback, useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { AppRoutes } from '../../../../app/api';
import { services as APCServices } from '../../../../settings/ConnectCarriers/sections/Step2/ApcServiceSection/ApcServiceSection.config';
import { services as DeutschePostServices } from '../../../../settings/ConnectCarriers/sections/Step2/DeutschePostServiceSection/DeutschePostServiceSection.config';
import { services as DHLServices } from '../../../../settings/ConnectCarriers/sections/Step2/DHLServiceSection/DHLServiceSection.config';
import { services as DPDLocalServices } from '../../../../settings/ConnectCarriers/sections/Step2/DPDLocalServiceSection/DPDLocalServiceSection.config';
import { services as DPDServices } from '../../../../settings/ConnectCarriers/sections/Step2/DPDServiceSection/DPDServiceSection.config';
import { services as FedexServices } from '../../../../settings/ConnectCarriers/sections/Step2/FedExServiceSection/FedExServiceSection.config';
import { services as HermesServices } from '../../../../settings/ConnectCarriers/sections/Step2/HermesServiceSection/HermesServiceSection.config';
import { services as ParcelforceServices } from '../../../../settings/ConnectCarriers/sections/Step2/ParcelforceServiceSection/ParcelforceServiceSection.config';
import { services as RoyalMailServices } from '../../../../settings/ConnectCarriers/sections/Step2/RoyalMailServiceSection/RoyalMailServiceSection.config';
import { services as RoyalMailClickDropServices } from '../../../../settings/ConnectCarriers/sections/Step2/RoyalMailClickDropServiceSection/RoyalMailClickDropServiceSection.config';
import { services as UPSServices } from '../../../../settings/ConnectCarriers/sections/Step2/UPSServiceSection/UPSServiceSection.config';
import { services as TestServices } from '../../../../settings/ConnectCarriers/sections/Step2/TestServiceSection/TestServiceSection.config';

import { MainButton } from '../../../../@core/modules/Button';
import { Modal } from '../../../../@core/modules/Modal';
import { Select } from '../../../../@core/modules/Select';
import { OrderList } from '../../../Ship/components/OrderList';

import * as styled from './MultiShipView.styled';
import { OrderItem } from '../../../../../client/client';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import { carriersData } from './MultiShipView.config';
import { useCourierClient, useProductClient } from '../../../../../client/client-hook';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { BatchLabelInfo, CreateBatchLabelRequest, Parcel, Shipment } from '../../../../../proto/courierapi_pb';
import { getCollectionDate, getCompanyId } from '../../../../../utils';
import { GetAllProductsRequest, ProductInfo } from '../../../../../proto/product_manager_pb';
import { OrderDetails } from '../../../../../proto/order_manager_pb';
import { useSelector } from 'react-redux';

type Props = {};

type ServiceProps = {
  value: string,
  label: string
}

type ShipmentProps = {
  id: string,
  service: string,
  weight: string,
  package: string
}

type ProductProps = {
  id: string,
  productsList: ProductInfo.AsObject[]
}

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

export const MultiShipView: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { push, goBack } = useHistory();
  const { state, pathname } = useLocation();
  const { user } = useAuth0();
  const getclient = useCourierClient();
  const getProductClient = useProductClient();
  const companyData = useSelector((state: any) => state.company.company);

  const [carriers, setCarriers] = useState<any[]>([]);
  const [carriersList, setCarriersList] = useState<ServiceProps[]>([]);
  const [selectedCarrier, setSelectedCarrier] = useState<ServiceProps[]>([]);
  const [selectedPackages, setSelectedPackages] = useState<ServiceProps[]>([]);
  const [selected, setSelected] = useState<ServiceProps[]>([]);
  const [shipments, setShipments] = useState<ShipmentProps[]>([]);
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<ProductProps[]>([])
  const [tempProducts, setTempProducts] = useState<ProductInfo.AsObject[]>([]);
  const orderData = state as OrderDetails.AsObject[];
  const [orders, setOrders] = useState<OrderDetails.AsObject[]>([]);
  const [errorCarrier, setErrorCarrier] = useState(false);
  const [errorWeight, setErrorWeight] = useState<string[]>([]);
  const [errorService, setErrorService] = useState<string[]>([]);
  const [errorPackage, setErrorPackage] = useState<string[]>([]);

  const toastId = useRef<any>(null);
  const userId = user?.sub ? user.sub : '';
  const companyId = getCompanyId(user);

  const onClose = useCallback(() => push(AppRoutes.Orders.Index), [push]);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      getclient()
        .then((client) => {
          client
            .listCarriers({ companyId: companyId })
            .then((data: any) => {
              setIsLoading(false);
              let tempArr = data.carriersList.filter((item: any) => item.enabled === true);
              tempArr.sort((a: any, b: any) => a.name.localeCompare(b.name));
              let carriers: any[] = [];
              tempArr.map((item: any) => {
                carriers.push({ label: carriersData.filter((carrier) => carrier.account === item.name)[0].name, value: item.name })
              })
              setCarriers(tempArr);
              setCarriersList(carriers);
            })
            .catch((err) => {
              setIsLoading(false);
              addErrorToast(err);
            })
        })
        .catch((err) => {
          setIsLoading(false);
          addErrorToast(err);
        })
    }
  }, [pathname, user])

  useEffect(() => {
    if (orderData) {
      let tempShipments: ShipmentProps[] = [];
      orderData.map((item) => {
        tempShipments.push({
          id: item.orderNumber,
          weight: '',
          service: '',
          package: '',
        })
      })
      setShipments(tempShipments);
    }
  }, [orderData])

  const getProduct = (order: OrderDetails.AsObject) => {
    getProductClient()
      .then((client) => {
        const promises: any = [];
        order.productsList.map((item) => {
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
            let temp = products;
            temp.push({
              id: order.orderNumber,
              productsList: data
            })
            setProducts(temp);
          })
          .catch((err) => {
            addErrorToast(err);
          })
      })
      .catch((err) => {
        addErrorToast(err);
      })
  }

  const getProducts = () => {
    orderData.map((order) => {
      getProduct(order)
    })
  }


  useEffect(() => {
    setOrders(orderData);
    if (companyId) {
      getProducts()
    }
  }, [orderData, companyId])

  if (!orderData)
    goBack();

  if (isLoading)
    return null

  const setCarrier = (e: any) => {
    setSelectedCarrier(e);
    setErrorCarrier(false);
    let tempArr = [];
    if (e.length > 0) {
      tempArr = carriers.filter(item => item.name === e[0].value);
      let services: string[] = tempArr[0].enabledServices.split(',');
      let carrierName = tempArr[0].name
      let tempServices: ServiceProps[] = [];
      services.map((item) => {
        if (item) {
          let staticServices =
            carrierName === 'APC' ? APCServices :
              carrierName === 'DeutschePost' ? DeutschePostServices :
                carrierName === 'DHL' ? DHLServices :
                  carrierName === 'DPDLocal' ? DPDLocalServices :
                    carrierName === 'DPD' ? DPDServices :
                      carrierName === 'Fedex' ? FedexServices :
                        carrierName === 'Hermes' ? HermesServices :
                          carrierName === 'Parcelforce' ? ParcelforceServices :
                            carrierName === 'RoyalMail' ? RoyalMailServices :
                              carrierName === 'RoyalMailClickAndDrop' ? RoyalMailClickDropServices :
                                carrierName === 'UPS' ? UPSServices :
                                  carrierName === 'Test' ? TestServices : [];

          let service = staticServices.filter(s => s.value === item);

          let tempService = service.length > 0 ? service[0].label : '';
          tempServices.push({ label: tempService, value: item })
        }
      });
      let tempPackageArr: ServiceProps[] = [];
      let packages = carriersData.filter((item) => item.account === e[0].value)[0].packages;
      packages.map((item) => {
        if (item) {
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
          tempPackageArr.push({ label: item, value: value })
        }
      })
      setSelectedPackages(tempPackageArr);
      setSelected(tempServices);
    } else {
      setSelected([]);
    }
  }

  const onRemove = (e: string) => {
    let tempArr = orders.filter((item) => item.orderNumber !== e);
    let tempShipmentArr = shipments.filter((item) => item.id !== e);
    setOrders(tempArr);
    setShipments(tempShipmentArr);
  }




  const onShip = () => {
    if (selectedCarrier.length === 0) {
      addErrorToast("Please select the carrier.");
      setErrorCarrier(true);
      return
    }
    const checkWeight = shipments.filter((item) => item.weight === '')
    if (checkWeight.length > 0) {
      let tempErrorWeight: string[] = [];
      checkWeight.map((we) => {
        tempErrorWeight.push(we.id);
      })
      setErrorWeight(tempErrorWeight);
      addErrorToast("Please input weight.")
      return
    }
    const checkService = shipments.filter((item) => item.service === '')
    if (checkService.length > 0) {
      let tempErrorService: string[] = [];
      checkService.map((we) => {
        tempErrorService.push(we.id);
      })
      setErrorService(tempErrorService);
      addErrorToast("Please select service.")
      return
    }

    if (selectedPackages.length > 0) {
      const checkPackage = shipments.filter((item) => item.package === '')
      if (checkPackage.length > 0) {
        let tempErrorPackage: string[] = [];
        checkPackage.map((we) => {
          tempErrorPackage.push(we.id);
        })
        setErrorPackage(tempErrorPackage);
        addErrorToast("Please select package.")
        return
      }
    }

    toastId.current = addInfoToast('Creating the label...', false);
    let batchLabelsList: BatchLabelInfo.AsObject[] = [];
    orders.map((order) => {
      let parcelsList: Parcel.AsObject[];
      let collectionDate = {
        seconds: 0,
        nanos: 0
      };
      let items = order.productsList.map((item, index) => {
        let productsArr = products.filter((prod) => prod.id === order.orderNumber)[0].productsList;
        return {
          description: item.shipswiftProductName,
          originCountry: productsArr[index] && productsArr[index].originCountry ? productsArr[index].originCountry : '',
          quantity: item.quantity,
          value: item.price?.value ? item.price.value : 0,
          currency: companyData?.defaultCurrency || '',
          weight: productsArr[index] && productsArr[index].weight ? productsArr[index].weight : 0,
          weightUnit: companyData?.weightUnit || '',
          sku: item.shipswiftProductSku,
          hsCode: productsArr[index] && productsArr[index].customsInfoTariff ? productsArr[index].customsInfoTariff : ''
        };
      });
      parcelsList = [
        {
          width: 1,
          height: 1,
          length: 1,
          unit: companyData?.dimensionUnit || '',
          weight: Number(shipments.filter((item) => item.id === order.orderNumber)[0].weight || 0),
          weightUnit: companyData?.weightUnit || '',
          packagingWeight: 0,
          itemsList: items
        }
      ];

      if (carriers.length) {
        const carrierList = carriers.filter((item: any) => item.name === selectedCarrier[0].value)
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
            name: order.customer ? order.customer.fullName : '',
            phone: order.customer ? order.customer.phoneNumber : '',
            email: order.customer ? order.customer.email : '',
            companyName: order.customer ? order.customer.company : '',
            address1: order.customer ? order.customer.address1 : '',
            address2: order.customer ? order.customer.address2 : '',
            address3: "",
            city: order.customer ? order.customer.city : '',
            postcode: order.customer ? order.customer.postcode : '',
            county: order.customer ? order.customer.country : '',
            countryIso: order.customer ? order.customer.countryCode2 : ''
          }
        },
        parcelsList: parcelsList,
        generateInvoice: false,
        generatePackingSlip: false,
        dcServiceId: "",
        courierSpecificsMap:
          selectedCarrier[0].value === 'RoyalMailClickAndDrop' ?
            requestSignatureList.includes(shipments.filter((item) => item.id === order.orderNumber)[0].service) ? [["signature_required", "true"], ["parcel_identifier", selectedPackages[0].value]] : [["parcel_identifier", shipments.filter((item) => item.id === order.orderNumber)[0].package]] : []
      };

      batchLabelsList.push({
        storeId: order.storeId,
        orderNumber: order.orderNumber,
        courier: selectedCarrier[0].value,
        service: shipments.filter((item) => item.id === order.orderNumber)[0].service || '',
        shipment: shipment
      })
    })

    getclient()
      .then((client) => {
        let request: CreateBatchLabelRequest.AsObject = {
          companyId: companyId,
          batchLabelsList: batchLabelsList
        }
        client.createBatchLabel(request)
          .then((data: any) => {
            updateToast(toastId.current, 'Successfully created label', 'success', 5000);
            push(AppRoutes.Shipments.Batches);
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 5000);
          })
      })
  }

  const onChangeShipments = async (item: ShipmentProps) => {
    let objIndex = shipments.findIndex(ship => ship.id === item.id);
    let oldShipments = shipments
    let updatedItem = { ...item }
    oldShipments[objIndex] = updatedItem;

    setShipments(oldShipments);

    if (item.weight) {
      let temp = errorWeight.filter((we) => we !== item.id);
      setErrorWeight(temp);
    }
    if (item.service) {
      let temp = errorService.filter((we) => we !== item.id);
      setErrorService(temp);
    }
    if (item.package) {
      let temp = errorPackage.filter((we) => we !== item.id);
      setErrorPackage(temp);
    }
  }
  return (
    <Modal
      title={word('global.bulk.shipping')}
      visible
      onClose={onClose}
      width={1280}
      footer={<MainButton children={word('global.ship')} onClick={onShip} />}
    >
      <styled.BodyWrapper>
        <Select
          values={carriersList}
          selectedValues={selectedCarrier}
          placeholder={'Select Shipping Carrier'}
          onSelectedChanged={(e) => setCarrier(e)}
          error={errorCarrier}
        />
        <OrderList
          orders={orders}
          services={selected}
          packages={selectedPackages}
          errorWeight={errorWeight}
          errorService={errorService}
          errorPackage={errorPackage}
          onRemove={onRemove}
          onChangeShipments={onChangeShipments}
        />
      </styled.BodyWrapper>
    </Modal>
  );
};
