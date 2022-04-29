import { grpc } from '@improbable-eng/grpc-web';
import {
  AddStoreRequest,
  AddWarehouseRequest,
  CompanyInfo,
  DeleteStoreRequest,
  DeleteWarehouseRequest,
  EditCompanyRequest,
  EditStoreRequest,
  EditWarehouseRequest,
  EnableDisableStoreRequest,
  EtsyAuthTokenRequest,
  GetAllStoresRequest,
  GetCompanyRequest,
  GetStoreTypeRequest,
  ListWarehousesRequest,
  StoreParams,
  StoresCountRequest,
  BillingInfoRequest,
  UpdateCompanyBillingAddressRequest,
  SetDefaultCardRequest,
  BillingInvoiceReq,
  DeleteCardRequest
} from '../proto/company_manager_pb';
import {
  CompanyReq,
  CustomerInfo,
  FilterCustomer,
  FilterDate,
  FilterLineItems,
  FilterOrder,
  GetOrderRequest,
  ListOrdersRequest,
  OrderDetails,
  OrdersCountReply,
  OrdersCountRequest,
  OrderValue,
  Product,
  UpdateOrderStatusRequest,
} from '../proto/order_manager_pb';
import {
  CancelShipmentRequest,
  ChangeCarrierCutoffTimeRequest,
  CreateCarrierRequest,
  CreateCompanyRequest,
  CreateLabelRequest,
  DeleteCarrierRequest,
  GetServicesRequest,
  GetShipmentRequest,
  Item,
  ListCarriersRequest,
  Parcel,
  SetCarrierServicesRequest,
  ShipFrom,
  ShipInfo,
  Shipment,
  ShipTo,
  ToggleCarrierRequest,
  CreateShipmentReq,
  CreateBatchLabelRequest,
  BatchLabelInfo,
  ListBatchesReq, ListBatchShipmentsReq, BatchCountReq, BatchShipmentCountReq
} from '../proto/courierapi_pb';
import {
  AddImageRequest,
  AddProductRequest,
  ChangeImagesOrderRequest,
  DeleteImageRequest,
  EditProductRequest,
  GetAllProductsRequest,
  GetAllStoreProductsRequest,
  LinkProductRequest,
  ProductsCountRequest,
  SetProductArchivedRequest,
  StoreFilter,
  StoreProductsCountRequest,
  UnlinkAllStoreProductsFromStoreRequest,
  UnlinkStoreProductRequest,
  UpdateStockRequest
} from '../proto/product_manager_pb';

import { 
  AddStoreReq, 
  parameters as EbayParameters 
} from '../proto/ebay_connector_pb';

import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import { CompanyManagerClient, CompanyManagerGetBillingInfo } from '../proto/company_manager_pb_service';
import { OrderManagerClient } from '../proto/order_manager_pb_service';
import { CourierapiClient } from '../proto/courierapi_pb_service';
import { ProductManagerClient } from '../proto/product_manager_pb_service';
import { EbayConnectorClient } from '../proto/ebay_connector_pb_service';
import { StatusManagerClient } from '../proto/status_manager_pb_service';
import { UserManagerClient } from '../proto/user_manager_pb_service';
import { config } from '../private';
import { BoolValue, FloatValue, StringValue } from 'google-protobuf/google/protobuf/wrappers_pb';
import { StatusReq } from '../proto/status_manager_pb';
import { AddUserReq, DeleteUserReq, EditUserReq, EnableUserReq, GetUsersReq } from '../proto/user_manager_pb';

var __client: CompanyManagerClient;
var __orderClient: OrderManagerClient;
var __courierClient: CourierapiClient;
var __productClient: ProductManagerClient;
var __ebayClient: EbayConnectorClient;
var __statusClient: StatusManagerClient;
var __userClient: UserManagerClient;
const gatewayAddress = config.envoy_hostname;

export interface StoresItem {
  id: string;
  name: string;
  companyId: string;
  type: string;
  enabled: boolean;
  shortName: string;
  iconColour: string;
  storeUrl: string;
  storeEmail: string;
  storeCurrency: string;
  shouldSkipIu: boolean;
}

export interface EditStoresItem {
  storeId: string;
  name: string;
  type: string;
  companyId: string;
  shortName: string;
  iconColour: string;
  storeEmail: string;
  storeCurrency: string;
  shouldSkipIu: BoolValue.AsObject;
}

export interface AddShopifyStore {
  name: string;
  type: string;
  companyId: string;
  shortName: string;
  storeUrl: string;
  iconColour: string;
  parameters: StoreParams.AsObject
}

export class GrpcClient {
  meta: grpc.Metadata.HeaderObject = {};
  constructor() {
    this.meta = {};
  }
  setMeta(key: string, value: string | string[]) {
    this.meta[key] = value;
  }
  getClient = () => {
    if (__client != null) {
      return __client;
    }
    __client = new CompanyManagerClient(gatewayAddress);
    return __client;
  };

  fromCompanyParams = (s: CompanyInfo.AsObject): CompanyInfo => {
    if (s === null) {
      return null as any;
    }
    let companyParams = new CompanyInfo();
    companyParams.setName(s.name);
    companyParams.setEmail(s.email);
    companyParams.setLogoUrl(s.logoUrl);
    companyParams.setVatNumber(s.vatNumber);
    companyParams.setEoriNumber(s.eoriNumber);
    companyParams.setDefaultCurrency(s.defaultCurrency);
    companyParams.setPurchaseOrderPrefix(s.purchaseOrderPrefix);
    companyParams.setWeightUnit(s.weightUnit);
    companyParams.setDimensionUnit(s.dimensionUnit);
    companyParams.setInvoiceNote(s.invoiceNote);
    companyParams.setPhone(s.phone);
    companyParams.setAddress1(s.address1);
    companyParams.setAddress2(s.address2);
    companyParams.setAddress3(s.address3);
    companyParams.setCountry(s.country);
    companyParams.setRegion(s.region);
    companyParams.setCity(s.city);
    companyParams.setPostcode(s.postcode);
    companyParams.setBarcodeFormat(s.barcodeFormat);
    companyParams.setIoss(this.fromGoogleStringParams(s.ioss as any));
    return companyParams;
  }

  fromGoogleStringParams = (s: StringValue.AsObject): StringValue => {
    if (s === null || s === undefined) {
      return null as any;
    }
    let companyParams = new StringValue();
    companyParams.setValue(s.value);
    return companyParams;
  }

  addCompany = (company: CompanyInfo.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new CompanyInfo();
      req.setName(company.name);
      req.setEmail(company.email);
      req.setLogoUrl(company.logoUrl);
      req.setVatNumber(company.vatNumber);
      req.setEoriNumber(company.eoriNumber);
      req.setDefaultCurrency(company.defaultCurrency);
      req.setPurchaseOrderPrefix(company.purchaseOrderPrefix);
      req.setWeightUnit(company.weightUnit);
      req.setDimensionUnit(company.dimensionUnit);
      req.setInvoiceNote(company.invoiceNote);
      req.setPhone(company.phone);
      req.setAddress1(company.address1);
      req.setAddress2(company.address2);
      req.setAddress3(company.address3);
      req.setCountry(company.country);
      req.setRegion(company.region);
      req.setCity(company.city);
      req.setPostcode(company.postcode);
      req.setBarcodeFormat(company.barcodeFormat);
      req.setIoss(this.fromGoogleStringParams(company.ioss as any));
      
      const client = this.getClient();
      client.addCompany(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  editCompany = (company: any) => {
    return new Promise((resolve, reject) => {
      let req = new EditCompanyRequest();
      req.setCompanyId(company.companyId);
      req.setCompanyInfo(this.fromCompanyParams(company.companyInfo as any))
      const client = this.getClient();
      client.editCompany(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  getCompany = (company: GetCompanyRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new GetCompanyRequest();
      req.setCompanyId(company.companyId);
      const client = this.getClient();
      client.getCompany(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  getEtsyAuthToken = (store: EtsyAuthTokenRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new EtsyAuthTokenRequest();
      const client = this.getClient();
      client.getEtsyAuthToken(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  sotresCount = (companyId: string) => {
    return new Promise<number>((resolve, reject) => {
      let req = new StoresCountRequest();
      req.setCompanyId(companyId);
      const client = this.getClient();
      client.storesCount(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let count: number = resp?.getCount() || 0;
          resolve(count);
        }
      });
    });
  };
  getAllStores = (companyId: string, options?: { batchSize?: number; pageNo?: number }) => {
    return new Promise<Array<StoresItem>>((resolve, reject) => {
      let req = new GetAllStoresRequest();
      req.setCompanyId(companyId);
      req.setBatchSize(options?.batchSize || 20);
      req.setPage(options?.pageNo || 1);
      const client = this.getClient();
      client.getAllStores(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let lst = resp?.getStoresList() || [];
          let mapped = lst.map((a) => {
            let itm: StoresItem = {
              id: a.getId(),
              name: a.getName(),
              companyId: a.getCompanyId(),
              type: a.getType(),
              enabled: a.getEnabled(),
              shortName: a.getShortName(),
              iconColour: a.getIconColour(),
              storeUrl: a.getStoreUrl(),
              storeEmail: a.getStoreEmail(),
              storeCurrency: a.getStoreCurrency(),
              shouldSkipIu: a.getShouldSkipIu()
            };
            return itm;
          });
          resolve(mapped);
        }
      });
    });
  };
  fromStoreParams = (s: StoreParams.AsObject): StoreParams => {
    if (s == null) {
      return null as any;
    }
    let storePram = new StoreParams();
    storePram.setBridgeUrl(s.bridgeUrl);
    storePram.setStoreRoot(s.storeRoot);
    storePram.setValidateVersion(s.validateVersion);

    storePram.setStoreKey(s.storeKey);

    storePram.setAmazonSellerId(s.amazonSellerId);
    storePram.setAmazonSpClientId(s.amazonSpClientId);
    storePram.setAmazonSpClientSecret(s.ebayClientSecret);
    storePram.setAmazonSpAwsUserKeyId(s.amazonSpAwsUserKeyId);
    storePram.setAmazonSpAwsUserSecret(s.amazonSpAwsUserSecret);
    storePram.setAmazonSpAwsRegion(s.amazonSpAwsRegion);
    storePram.setAmazonSpAwsRoleArn(s.amazonSpAwsRoleArn);
    storePram.setAmazonSpRefreshToken(s.amazonSpRefreshToken);
    storePram.setAmazonSpApiEnvironment(s.amazonSpApiEnvironment);

    storePram.setEbayClientId(s.ebayClientId);
    storePram.setEbayClientSecret(s.ebayClientSecret);
    storePram.setEbayRefreshToken(s.ebayRefreshToken);
    storePram.setEbayEnvironment(s.ebayEnvironment);
    storePram.setEbaySiteId(s.ebaySiteId);

    storePram.setSquarespaceApiKey(s.squarespaceApiKey);

    storePram.setBigcommerceapiClientId(s.bigcommerceapiClientId);
    storePram.setBigcommerceapiAccessToken(s.bigcommerceapiAccessToken);
    storePram.setBigcommerceapiContext(s.bigcommerceapiContext);

    storePram.setEtsyKeystring(s.etsyKeystring);
    storePram.setEtsySharedSecret(s.etsySharedSecret);
    storePram.setEtsyAccessToken(s.etsyAccessToken);
    storePram.setEtsyTokenSecret(s.etsyTokenSecret);

    storePram.setEtsyAppAccessToken(s.etsyAppAccessToken);
    storePram.setEtsyAppTokenSecret(s.etsyAppTokenSecret);
    storePram.setEtsyVerifier(s.etsyVerifier);

    return storePram;
  };

  addStore = (store: any) => {
    return new Promise((resolve, reject) => {
      let req = new AddStoreRequest();
      req.setCompanyId(store.companyId);
      req.setName(store.name);
      req.setParameters(this.fromStoreParams(store.parameters as any));
      req.setStoreUrl(store.storeUrl);
      req.setIconColour(store.iconColour);
      req.setShortName(store.shortName);
      req.setType(store.type);
      req.setDefaultDeliveryMethod(store.defaultDeliveryMethod);
      req.setImportAllOrders(store.importAllOrders);
      req.setImportAllProducts(store.importAllProducts);
      const client = this.getClient();
      client.addStore(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  fromGoogleBoolParams = (s: BoolValue.AsObject): BoolValue => {
    if (s === null || s === undefined) {
      return null as any;
    }
    let storeParams = new BoolValue();
    storeParams.setValue(s.value);
    return storeParams;
  }

  editStore = (store: EditStoresItem) => {
    return new Promise((resolve, reject) => {
      let req = new EditStoreRequest();
      req.setCompanyId(store.companyId);
      req.setName(store.name);
      req.setStoreId(store.storeId);
      req.setType(store.type);
      req.setShortName(store.shortName);
      req.setIconColour(store.iconColour);
      req.setStoreEmail(store.storeEmail);
      req.setStoreCurrency(store.storeCurrency);
      req.setShouldSkipIu(this.fromGoogleBoolParams(store.shouldSkipIu as any))
      const client = this.getClient();
      client.editStore(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };
  deleteStore = (store: DeleteStoreRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new DeleteStoreRequest();
      req.setCompanyId(store.companyId);
      req.setStoreId(store.storeId);
      const client = this.getClient();
      client.deleteStore(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };
  enableStore = (store: EnableDisableStoreRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new EnableDisableStoreRequest();
      req.setCompanyId(store.companyId);
      req.setStoreId(store.storeId);
      const client = this.getClient();
      client.enableStore(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };
  disableStore = (store: EnableDisableStoreRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new EnableDisableStoreRequest();
      req.setCompanyId(store.companyId);
      req.setStoreId(store.storeId);
      const client = this.getClient();
      client.disableStore(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  getStoreType = (store: GetStoreTypeRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new GetStoreTypeRequest();
      req.setCompanyId(store.companyId);
      req.setStoreId(store.storeId);
      const client = this.getClient();
      client.getStoreType(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  listWarehouses = (warehouse: ListWarehousesRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new ListWarehousesRequest();
      req.setCompanyId(warehouse.companyId);
      const client = this.getClient();
      client.listWarehouses(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  editWarehouse = (warehouse: EditWarehouseRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new EditWarehouseRequest();
      req.setCompanyId(warehouse.companyId);
      req.setWarehouseId(warehouse.warehouseId);
      req.setWarehouseInfo(this.fromCompanyParams(warehouse.warehouseInfo as any))
      const client = this.getClient();
      client.editWarehouse(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  deleteWarehouse = (warehouse: DeleteWarehouseRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new DeleteWarehouseRequest();
      req.setCompanyId(warehouse.companyId);
      req.setWarehouseId(warehouse.warehouseId);
      const client = this.getClient();
      client.deleteWarehouse(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  addWarehouse = (warehouse: AddWarehouseRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new AddWarehouseRequest();
      req.setCompanyId(warehouse.companyId);
      req.setWarehouseInfo(this.fromCompanyParams(warehouse.warehouseInfo as any));
      const client = this.getClient();
      client.addWarehouse(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  getBillingInfo = (billing: BillingInfoRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new BillingInfoRequest();
      req.setCompanyId(billing.companyId);
      const client = this.getClient();
      client.getBillingInfo(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  updateBillingAddress = (billing: UpdateCompanyBillingAddressRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new UpdateCompanyBillingAddressRequest();
      req.setCompanyId(billing.companyId);
      req.setLine1(billing.line1);
      req.setLine2(billing.line2);
      req.setPostalCode(billing.postalCode);
      req.setState(billing.state);
      req.setCity(billing.city);
      req.setCountry(billing.country);
      const client = this.getClient();
      client.updateBillingAddress(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  setDefaultCard = (card: SetDefaultCardRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new SetDefaultCardRequest();
      req.setCompanyId(card.companyId);
      req.setCardId(card.cardId);
      const client = this.getClient();
      client.setDefaultCard(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  getBillingInvoices = (invoice: BillingInvoiceReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new BillingInvoiceReq();
      req.setCompanyId(invoice.companyId);
      const client = this.getClient();
      client.getBillingInvoices(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  deleteCard = (card: DeleteCardRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new DeleteCardRequest();
      req.setCompanyId(card.companyId);
      req.setCardId(card.cardId);
      const client = this.getClient();
      client.deleteCard(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }
}

export type OrderItem = OrderDetails.AsObject;

// Order Client
export class OrderClient {
  meta: grpc.Metadata.HeaderObject = {};
  constructor() {
    this.meta = {};
  }
  setMeta(key: string, value: string | string[]) {
    this.meta[key] = value;
  }
  getClient = () => {
    if (__orderClient != null) {
      return __orderClient;
    }
    __orderClient = new OrderManagerClient(gatewayAddress)
    return __orderClient;
  }
  fromOrderFilterParams = (s: FilterOrder.AsObject): FilterOrder => {
    if (s === null) {
      return null as any;
    }
    let orderParam = new FilterOrder();
    orderParam.setOrderNumber(s.orderNumber);
    orderParam.setProductNameCustomerFreeTextSearch(s.productNameCustomerFreeTextSearch);
    orderParam.setSku(s.sku);
    orderParam.setShipswiftProductSku(s.shipswiftProductSku);
    return orderParam;
  }
  fromCustomerFilterParams = (s: FilterCustomer.AsObject): FilterCustomer => {
    if (s === null) {
      return null as any;
    }
    let customerParam = new FilterCustomer();
    customerParam.setCustomerName(s.customerName);
    customerParam.setCustomerEmail(s.customerEmail);
    customerParam.setCustomerPostcode(s.customerPostcode);
    return customerParam;
  }
  fromDateFilterParams = (s: FilterDate.AsObject): FilterDate => {
    if (s === null) {
      return null as any;
    }
    let dateParam = new FilterDate();
    dateParam.setOrderFrom(s.orderFrom as any); // google time
    dateParam.setOrderTo(s.orderTo as any); // google time
    return dateParam;
  }
  fromLineItemsFilterParams = (s: FilterLineItems.AsObject): FilterLineItems => {
    if (s === null) {
      return null as any;
    }
    let lineParam = new FilterLineItems();
    lineParam.setType(s.type);
    lineParam.setValue(s.value);
    lineParam.setMaxValue(s.maxValue);
    lineParam.setMinValue(s.minValue);
    return lineParam;
  }
  fromCustomerParams = (s: CustomerInfo.AsObject): CustomerInfo => {
    if (s === null) {
      return null as any;
    }
    let customerParam = new CustomerInfo();
    customerParam.setId(s.id);
    customerParam.setFullName(s.fullName);
    customerParam.setCompany(s.company);
    customerParam.setAddress1(s.address1);
    customerParam.setAddress2(s.address2);
    customerParam.setCity(s.city);
    customerParam.setCountry(s.country);
    customerParam.setCountryCode2(s.countryCode2);
    customerParam.setStateCode(s.stateCode);
    customerParam.setStateName(s.stateName);
    customerParam.setPostcode(s.postcode);
    customerParam.setPhoneNumber(s.phoneNumber);
    customerParam.setEmail(s.email);
    return customerParam;
  }
  fromProductParams = (s: Product.AsObject): Product => {
    if (s === null) {
      return null as any;
    }
    let productParam = new Product();
    productParam.setId(s.id);
    productParam.setName(s.name);
    productParam.setSku(s.sku);
    productParam.setQuantity(s.quantity);
    return productParam;
  }
  fromOrderParams = (s: OrderValue.AsObject): OrderValue => {
    if (s === null) {
      return null as any;
    }
    let orderParam = new OrderValue();
    orderParam.setTotal(s.total);
    orderParam.setSubtotal(s.subtotal);
    orderParam.setTax(s.tax);
    orderParam.setDiscount(s.discount);
    return orderParam;
  }

  listOrders = (order: ListOrdersRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new ListOrdersRequest();
      req.setCompanyId(order.companyId)
      req.setStatusFilterList(order.statusFilterList)
      req.setOrderFilter(this.fromOrderFilterParams(order.orderFilter as any))
      req.setCustomerFilter(this.fromCustomerFilterParams(order.customerFilter as any))
      req.setDateFilter(this.fromDateFilterParams(order.dateFilter as any))
      req.setStoresFilterList(order.storesFilterList)
      req.setLineItems(this.fromLineItemsFilterParams(order.lineItems as any))
      req.setProductsEnrichedOnly(order.productsEnrichedOnly)
      req.setPaginationCursor(order.paginationCursor);
      req.setPageSize(order.pageSize);
      const client = this.getClient();
      client.listOrders(req, this.meta as any, (err, resp) => {
        if (err !== null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  getOrder = (order: GetOrderRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new GetOrderRequest();
      req.setStoreId(order.storeId)
      req.setCompanyId(order.companyId)
      req.setOrderNumber(order.orderNumber)
      const client = this.getClient();
      client.getOrder(req, this.meta as any, (err, resp) => {
        if (err !== null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  updateOrderStatus = (order: UpdateOrderStatusRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new UpdateOrderStatusRequest();
      req.setCompanyId(order.companyId);
      req.setStoreId(order.storeId);
      req.setStoreType(order.storeType);
      req.setOrderId(order.orderId);
      req.setStatus(order.status);
      const client = this.getClient();
      client.updateOrderStatus(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  updateOrder = (order: OrderDetails.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new OrderDetails();
      req.setStoreId(order.storeId);
      req.setCompanyId(order.companyId);
      req.setOrderNumber(order.orderNumber);
      req.setCustomer(this.fromCustomerParams(order.customer as any));
      req.setPaymentMethod(order.paymentMethod);
      // req.setProductsList(this.fromProductParams(order.productsList as any));
      req.setOrderValue(this.fromOrderParams(order.orderValue as any));
      req.setShippingMethod(order.shippingMethod);
      req.setStatus(order.status);
      req.setCustomerNotes(order.customerNotes);
      req.setTimestamp(order.timestamp as any); // google time
      req.setLabelLink(order.labelLink);
      const client = this.getClient();
      client.updateOrder(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  ordersCount = (order: OrdersCountRequest.AsObject) => {
    return new Promise<OrdersCountReply.AsObject>((resolve, reject) => {
      let req = new OrdersCountRequest();
      req.setCompanyId(order.companyId)
      req.setStatusFilterList(order.statusFilterList)
      req.setOrderFilter(this.fromOrderFilterParams(order.orderFilter as any))
      req.setCustomerFilter(this.fromCustomerFilterParams(order.customerFilter as any))
      req.setDateFilter(this.fromDateFilterParams(order.dateFilter as any))
      req.setStoresFilterList(order.storesFilterList)
      req.setLineItems(this.fromLineItemsFilterParams(order.lineItems as any))
      req.setProductsEnrichedOnly(order.productsEnrichedOnly)
      const client = this.getClient();
      client.ordersCount(req, this.meta as any, (err, resp) => {
        if (err !== null) {
          reject(err);
        } else {
          let count = resp?.getCount() || 0;
          resolve({ count: count });
        }
      });
    });
  }

  getReport = (order: CompanyReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new CompanyReq();
      req.setCompanyId(order.companyId)
      const client = this.getClient();
      client.getReport(req, this.meta as any, (err, resp) => {
        if (err !== null) {
          reject(err);
        } else {
         let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }
}

// Courier Client
export class CourierClient {
  meta: grpc.Metadata.HeaderObject = {};
  constructor() {
    this.meta = {};
  }
  setMeta(key: string, value: string | string[]) {
    this.meta[key] = value;
  }
  getClient = () => {
    if (__courierClient != null) {
      return __courierClient;
    }
    __courierClient = new CourierapiClient(gatewayAddress)
    return __courierClient;
  }

  createCompany = (companyId: string) => {
    return new Promise((resolve, reject) => {
      let req = new CreateCompanyRequest();
      req.setCompanyId(companyId);
      const client = this.getClient();
      client.createCompany(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  createCarrier = (carrier: CreateCarrierRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new CreateCarrierRequest();
      req.setCompanyId(carrier.companyId);
      req.setCarrierName(carrier.carrierName);
      req.setType(carrier.type);
      req.setCutoffTime(carrier.cutoffTime);
      req.setTest(carrier.test);
      carrier.authMap.map((item) => {
        return req.getAuthMap().set(item[0], item[1])
      })
      const client = this.getClient();
      client.createCarrier(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  toggleCarrier = (carrier: ToggleCarrierRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new ToggleCarrierRequest();
      req.setCompanyId(carrier.companyId);
      req.setCarrierName(carrier.carrierName);
      req.setEnabled(carrier.enabled);

      const client = this.getClient();
      client.toggleCarrier(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  listCarriers = (carrier: ListCarriersRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new ListCarriersRequest();
      req.setCompanyId(carrier.companyId);

      const client = this.getClient();
      client.listCarriers(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  setCarrierServices = (services: SetCarrierServicesRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new SetCarrierServicesRequest();
      req.setCompanyId(services.companyId);
      req.setCarrierName(services.carrierName);
      req.setEnabledServicesList(services.enabledServicesList);
      const client = this.getClient();
      client.setCarrierServices(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  changeCarrierCutoff = (cutoff: ChangeCarrierCutoffTimeRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new ChangeCarrierCutoffTimeRequest();
      req.setCarrierName(cutoff.carrierName);
      req.setCompanyId(cutoff.companyId);
      req.setCutoffTime(cutoff.cutoffTime);
      const client = this.getClient();
      client.changeCarrierCutoffTime(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  getServices = (services: GetServicesRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new GetServicesRequest();
      req.setCompanyId(services.companyId);
      req.setCarrierName(services.carrierName);
      const client = this.getClient();
      client.getServices(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  deleteCarrier = (carrier: DeleteCarrierRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new DeleteCarrierRequest();
      req.setCompanyId(carrier.companyId);
      req.setCarrierName(carrier.carrierName);
      const client = this.getClient();
      client.deleteCarrier(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  fromShipinfoParams = (s: ShipInfo.AsObject): ShipInfo => {
    if (s === null) {
      return null as any;
    }
    let shipinfoParam = new ShipInfo();
    shipinfoParam.setName(s.name);
    shipinfoParam.setPhone(s.phone);
    shipinfoParam.setEmail(s.email);
    shipinfoParam.setCompanyName(s.companyName);
    shipinfoParam.setAddress1(s.address1);
    shipinfoParam.setAddress2(s.address2);
    shipinfoParam.setAddress3(s.address3);
    shipinfoParam.setCity(s.city);
    shipinfoParam.setPostcode(s.postcode);
    shipinfoParam.setCounty(s.county);
    shipinfoParam.setCountryIso(s.countryIso);
    return shipinfoParam;
  }

  fromShipfromParams = (s: ShipFrom.AsObject): ShipFrom => {
    if (s === null) {
      return null as any;
    }
    let shipfromParam = new ShipFrom();
    shipfromParam.setShipInfo(this.fromShipinfoParams(s.shipInfo as any));
    shipfromParam.setTaxId(s.taxId);
    shipfromParam.setEoriId(s.eoriId);
    shipfromParam.setCompanyNumber(s.companyNumber);
    shipfromParam.setIossNumber(s.iossNumber)
    return shipfromParam;
  }

  fromShiptoParams = (s: ShipTo.AsObject): ShipTo => {
    if (s === null) {
      return null as any;
    }
    let shiptoParams = new ShipTo();
    shiptoParams.setShipInfo(this.fromShipinfoParams(s.shipInfo as any));
    return shiptoParams;
  }

  fromItemsParams = (s: Item.AsObject): Item => {
    if (s === null) {
      return null as any;
    }
    let itemsParam = new Item();
    itemsParam.setDescription(s.description);
    itemsParam.setOriginCountry(s.originCountry);
    itemsParam.setQuantity(s.quantity);
    itemsParam.setValue(s.value);
    itemsParam.setCurrency(s.currency);
    itemsParam.setWeight(s.weight);
    itemsParam.setWeightUnit(s.weightUnit);
    itemsParam.setSku(s.sku);
    itemsParam.setHsCode(s.hsCode);

    return itemsParam;
  }

  fromParcelParams = (s: Parcel.AsObject): Parcel => {
    if (s === null) {
      return null as any;
    }
    let parcelParams = new Parcel();
    parcelParams.setWidth(s.width);
    parcelParams.setHeight(s.height);
    parcelParams.setLength(s.length);
    parcelParams.setUnit(s.unit);
    let itemsList = s.itemsList.map((item) => {
      let it = this.fromItemsParams(item)
      return it
    })
    parcelParams.setItemsList(itemsList);
    parcelParams.setWeight(s.weight);
    parcelParams.setWeightUnit(s.weightUnit);
    parcelParams.setPackagingWeight(s.packagingWeight);
    return parcelParams;
  }

  fromTimeParams = (s: google_protobuf_timestamp_pb.Timestamp.AsObject): google_protobuf_timestamp_pb.Timestamp => {
    if (s === null) {
      return null as any;
    }
    let timeParams = new google_protobuf_timestamp_pb.Timestamp();
    timeParams.setSeconds(s.seconds);
    timeParams.setNanos(s.nanos);
    return timeParams;
  }

  fromShipmentParams = (s: Shipment.AsObject): Shipment => {
    if (s === null) {
      return null as any;
    }
    let shipmentParam = new Shipment();
    shipmentParam.setCollectionDate(this.fromTimeParams(s.collectionDate as any));
    shipmentParam.setDeliveryInstructions(s.deliveryInstructions);
    shipmentParam.setShipFrom(this.fromShipfromParams(s.shipFrom as any));
    shipmentParam.setShipTo(this.fromShiptoParams(s.shipTo as any));
    let parcelsList = s.parcelsList.map((item) => {
      let prod = this.fromParcelParams(item)
      return prod
    })
    shipmentParam.setParcelsList(parcelsList);
    shipmentParam.setGenerateInvoice(s.generateInvoice);
    shipmentParam.setGeneratePackingSlip(s.generatePackingSlip);
    shipmentParam.setDcServiceId(s.dcServiceId);
    s.courierSpecificsMap.map((item) => {
      return shipmentParam.getCourierSpecificsMap().set(item[0], item[1])
    })

    return shipmentParam;
  }

  fromBatchLabelParams = (s: BatchLabelInfo.AsObject): BatchLabelInfo => {
    if (s === null) {
      return null as any;
    }
    let batchParam = new BatchLabelInfo();
    batchParam.setStoreId(s.storeId);
    batchParam.setOrderNumber(s.orderNumber);
    batchParam.setCourier(s.courier);
    batchParam.setService(s.service);
    batchParam.setShipment(this.fromShipmentParams(s.shipment as any))

    return batchParam;
  }

  createLabel = (label: CreateLabelRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new CreateLabelRequest();
      req.setCompanyId(label.companyId);
      req.setStoreId(label.storeId);
      req.setOrderNumber(label.orderNumber);
      req.setCourier(label.courier);
      req.setService(label.service);
      req.setShipment(this.fromShipmentParams(label.shipment as any));

      const client = this.getClient();
      client.createLabel(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  createBatchLabel = (label: CreateBatchLabelRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new CreateBatchLabelRequest();
      req.setCompanyId(label.companyId);

      let batchLabelsList: BatchLabelInfo[] = [];
      label.batchLabelsList.map((item) => {
        batchLabelsList.push(this.fromBatchLabelParams(item as any))
      })
      req.setBatchLabelsList(batchLabelsList);

      const client = this.getClient();
      client.createBatchLabel(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  getShipment = (shipment: GetShipmentRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new GetShipmentRequest();
      req.setCompanyId(shipment.companyId);
      req.setStoreId(shipment.storeId);
      req.setOrderNumber(shipment.orderNumber);
      req.setLatestOnly(shipment.latestOnly);

      const client = this.getClient();
      client.getShipment(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  cancelShipment = (shipment: CancelShipmentRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new CancelShipmentRequest();
      req.setCompanyId(shipment.companyId);
      req.setStoreId(shipment.storeId);
      req.setOrderNumber(shipment.orderNumber);

      const client = this.getClient();
      client.cancelShipment(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  addLabel = (shipment: CreateShipmentReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new CreateShipmentReq();
      req.setCompanyId(shipment.companyId);
      req.setStoreId(shipment.storeId);
      req.setTracking(shipment.tracking);
      req.setOrderNumber(shipment.orderNumber);
      req.setCourier(shipment.courier);

      const client = this.getClient();
      client.addLabel(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  listBatches = (listBatchesReq: ListBatchesReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new ListBatchesReq();
      req.setCompanyId(listBatchesReq.companyId);
      req.setPageSize(listBatchesReq.pageSize);
      req.setPaginationCursor(listBatchesReq.paginationCursor);

      const client = this.getClient();
      client.listBatches(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  batchCount = (batchCountReq: BatchCountReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new ListBatchesReq();
      req.setCompanyId(batchCountReq.companyId);

      const client = this.getClient();
      client.batchCount(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  listBatchShipments = (listBatchShipmentsReq: ListBatchShipmentsReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new ListBatchShipmentsReq();
      req.setCompanyId(listBatchShipmentsReq.companyId);
      req.setPageSize(listBatchShipmentsReq.pageSize);
      req.setPaginationCursor(listBatchShipmentsReq.paginationCursor);
      req.setBatchId(listBatchShipmentsReq.batchId);

      const client = this.getClient();
      client.listBatchShipments(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  batchShipmentsCount = (batchCountReq: BatchShipmentCountReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new BatchShipmentCountReq();
      req.setCompanyId(batchCountReq.companyId);
      req.setBatchId(batchCountReq.batchId);

      const client = this.getClient();
      client.batchShipmentsCount(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

}

// Product Client
export class ProductClient {
  meta: grpc.Metadata.HeaderObject = {};
  constructor() {
    this.meta = {};
  }
  setMeta(key: string, value: string | string[]) {
    this.meta[key] = value;
  }
  getClient = () => {
    if (__productClient != null) {
      return __productClient;
    }
    __productClient = new ProductManagerClient(gatewayAddress)
    return __productClient;
  }

  fromStoreParams = (s: StoreFilter.AsObject): StoreFilter => {
    if (s === null) {
      return null as any;
    }
    let storeParams = new StoreFilter();
    storeParams.setStoreIdsList(s.storeIdsList);
    storeParams.setNameSkuFreeTextSearch(s.nameSkuFreeTextSearch);
    return storeParams;
  }

  getAllProducts = (product: GetAllProductsRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new GetAllProductsRequest();
      req.setCompanyId(product.companyId);
      req.setMinQuantity(product.minQuantity);
      req.setMaxQuantity(product.maxQuantity);
      req.setStoreFilter(this.fromStoreParams(product.storeFilter as any));
      req.setPaginationCursor(product.paginationCursor);
      req.setPageSize(product.pageSize);
      req.setIncludeArchived(product.includeArchived);
      const client = this.getClient();
      client.getAllProducts(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  getAllArchivedProducts = (product: any) => {
    return new Promise((resolve, reject) => {
      let req = new GetAllProductsRequest();
      req.setCompanyId(product.companyId);
      req.setMinQuantity(product.minQuantity);
      req.setMaxQuantity(product.maxQuantity);
      req.setStoreFilter(this.fromStoreParams(product.storeFilter as any));
      req.setPaginationCursor(product.paginationCursor);
      req.setPageSize(product.pageSize);
      const client = this.getClient();
      client.getAllArchivedProducts(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  productsCount = (product: ProductsCountRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new ProductsCountRequest();
      req.setCompanyId(product.companyId);
      req.setStoreFilter(this.fromStoreParams(product.storeFilter as any));
      req.setMinQuantity(product.minQuantity);
      req.setMaxQuantity(product.maxQuantity);
      req.setIncludeArchived(product.includeArchived);
      const client = this.getClient();
      client.productsCount(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let count = resp?.getCount() || 0;
          resolve({ count: count });
        }
      });
    });
  }

  archivedProductsCount = (product: any) => {
    return new Promise((resolve, reject) => {
      let req = new ProductsCountRequest();
      req.setCompanyId(product.companyId);
      req.setStoreFilter(this.fromStoreParams(product.storeFilter as any));
      req.setMinQuantity(product.minQuantity);
      req.setMaxQuantity(product.maxQuantity);
      req.setIncludeArchived(product.includeArchived);
      const client = this.getClient();
      client.archivedProductsCount(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let count = resp?.getCount() || 0;
          resolve({ count: count });
        }
      });
    });
  }

  fromPriceParams = (s: FloatValue.AsObject): FloatValue => {
    if (s === null || s === undefined) {
      return null as any;
    }
    let priceParam = new FloatValue();
    priceParam.setValue(s.value);
    return priceParam;
  }

  editProduct = (product: any) => {
    return new Promise((resolve, reject) => {
      let req = new EditProductRequest();
      req.setCompanyId(product.companyId);
      req.setName(product.name);
      req.setSku(product.sku);
      req.setPrice(this.fromPriceParams(product.price as any));
      req.setUrl(product.url);
      req.setBarcode(product.barcode);
      req.setOriginCountry(product.originCountry);
      req.setDescription(product.description);
      req.setHeight(product.height);
      req.setWidth(product.width);
      req.setLength(product.length);
      req.setWeight(product.weight);
      req.setCustomsInfoValue(product.customsInfoValue);
      req.setCustomsInfoDescription(product.customsInfoDescription);
      req.setCustomsInfoTariff(product.customsInfoTariff);
      const client = this.getClient();
      client.editProduct(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  getAllStoreProducts = (product: GetAllStoreProductsRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new GetAllStoreProductsRequest();
      req.setCompanyId(product.companyId);
      req.setStoreFilter(this.fromStoreParams(product.storeFilter as any));
      req.setIncludeArchived(product.includeArchived);
      req.setPaginationCursor(product.paginationCursor);
      req.setPageSize(product.pageSize);
      req.setLinkedOnly(product.linkedOnly);
      req.setUnlinkedOnly(product.unlinkedOnly);

      const client = this.getClient();
      client.getAllStoreProducts(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  storeProductsCount = (product: StoreProductsCountRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new StoreProductsCountRequest();
      req.setCompanyId(product.companyId);
      req.setStoreFilter(this.fromStoreParams(product.storeFilter as any));
      req.setIncludeArchived(product.includeArchived);
      req.setLinkedOnly(product.linkedOnly);
      req.setUnlinkedOnly(product.unlinkedOnly);

      const client = this.getClient();
      client.storeProductsCount(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  addProduct = (product: any) => {
    return new Promise((resolve, reject) => {
      let req = new AddProductRequest();
      req.setCompanyId(product.companyId);
      req.setName(product.name);
      req.setSku(product.sku);
      req.setPrice(this.fromPriceParams(product.price as any));
      req.setImageUrlsList(product.imageUrlsList);
      req.setUrl(product.url);
      req.setBarcode(product.barcode);
      req.setOriginCountry(product.originCountry);
      req.setDescription(product.description);
      req.setHeight(product.height);
      req.setWidth(product.width);
      req.setLength(product.length);
      req.setWeight(product.weight);
      req.setStockOnHand(product.stockOnHand);
      req.setStockAllocated(product.stockAllocated);
      req.setCustomsInfoValue(product.customsInfoValue);
      req.setCustomsInfoDescription(product.customsInfoDescription);
      req.setCustomsInfoTariff(product.customsInfoTariff);
      req.setStoreProductSku(product.storeProductSku);

      const client = this.getClient();
      client.addProduct(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  linkProduct = (product: LinkProductRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new LinkProductRequest();
      req.setCompanyId(product.companyId);
      req.setSku(product.sku);
      req.setStoreProductSku(product.storeProductSku);
      req.setStoreProductUrl(product.storeProductUrl);
      
      const client = this.getClient();
      client.linkProduct(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  unlinkProduct = (product: UnlinkStoreProductRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new UnlinkStoreProductRequest();
      req.setCompanyId(product.companyId);
      req.setStoreProductSku(product.storeProductSku);
      req.setStoreProductUrl(product.storeProductUrl);

      const client = this.getClient();
      client.unlinkProduct(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  updateStock = (product: UpdateStockRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new UpdateStockRequest();
      req.setCompanyId(product.companyId);
      req.setSku(product.sku);
      req.setStockOnHandAdjustment(product.stockOnHandAdjustment);

      const client = this.getClient();
      client.updateStock(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  addImage = (product: AddImageRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new AddImageRequest();
      req.setCompanyId(product.companyId);
      req.setProductSku(product.productSku);
      req.setUrl(product.url);

      const client = this.getClient();
      client.addImage(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  deleteImage = (product: DeleteImageRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new DeleteImageRequest();
      req.setCompanyId(product.companyId);
      req.setProductSku(product.productSku);
      req.setImageId(product.imageId);

      const client = this.getClient();
      client.deleteImage(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  changeImagesOrder = (images: ChangeImagesOrderRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new ChangeImagesOrderRequest();
      req.setCompanyId(images.companyId);
      req.setProductSku(images.productSku);
      req.setImageIdsList(images.imageIdsList);

      const client = this.getClient();
      client.changeImagesOrder(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  unlinkAllStoreProductsFromStore = (product: UnlinkAllStoreProductsFromStoreRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new UnlinkAllStoreProductsFromStoreRequest();
      req.setCompanyId(product.companyId);
      req.setSku(product.sku);

      const client = this.getClient();
      client.unlinkAllStoreProductsFromStore(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }

  setProductArchived = (product: SetProductArchivedRequest.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new SetProductArchivedRequest();
      req.setCompanyId(product.companyId);
      req.setProductSku(product.productSku);
      req.setArchived(product.archived);

      const client = this.getClient();
      client.setProductArchived(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  }
}

// Ebay Connector Client
export class EbayClient {
  meta: grpc.Metadata.HeaderObject = {};
  constructor() {
    this.meta = {};
  }
  setMeta(key: string, value: string | string[]) {
    this.meta[key] = value;
  }
  getClient = () => {
    if (__ebayClient != null) {
      return __ebayClient;
    }
    __ebayClient = new EbayConnectorClient(gatewayAddress)
    return __ebayClient;
  }

  fromStoreParams = (s: EbayParameters.AsObject): EbayParameters => {
    if (s === null) {
      return null as any;
    }
    let storeParams = new EbayParameters();
    storeParams.setEbaySiteId(s.ebaySiteId);
    return storeParams;
  }

  addStore = (store: AddStoreReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new AddStoreReq();
      req.setCompanyId(store.companyId);
      req.setName(store.name);
      req.setParameters(this.fromStoreParams(store.parameters as any));
      req.setStoreUrl(store.storeUrl);
      req.setIconColour(store.iconColour);
      req.setShortName(store.shortName);
      req.setType(store.type);
      req.setCode(store.code);
      req.setImportAllOrders(store.importAllOrders);
      req.setImportAllProducts(store.importAllProducts);
      const client = this.getClient();
      client.addStore(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };
}


// Status Client
export class StatusClient {
  meta: grpc.Metadata.HeaderObject = {};
  constructor() {
    this.meta = {};
  }
  setMeta(key: string, value: string | string[]) {
    this.meta[key] = value;
  }
  getClient = () => {
    if (__statusClient != null) {
      return __statusClient;
    }
    __statusClient = new StatusManagerClient(gatewayAddress)
    return __statusClient;
  }

  getStatus = (store: StatusReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new StatusReq();
      
      const client = this.getClient();
      client.getStatus(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };
}

export class UserClient {
  meta: grpc.Metadata.HeaderObject = {};
  constructor() {
    this.meta = {};
  }
  setMeta(key: string, value: string | string[]) {
    this.meta[key] = value;
  }
  getClient = () => {
    if (__userClient != null) {
      return __userClient;
    }
    __userClient = new UserManagerClient(gatewayAddress)
    return __userClient;
  }

  addUser = (user: AddUserReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new AddUserReq();
      req.setFirstName(user.firstName);
      req.setLastName(user.lastName);
      req.setEmail(user.email);
      req.setPassword(user.password);
      req.setCompanyId(user.companyId);
      req.setTimeZone(user.timeZone);
      req.setIsOwner(user.isOwner);
      req.setRole(user.role);

      const client = this.getClient();
      client.addUser(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  editUser = (user: EditUserReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new EditUserReq();
      req.setUserId(user.userId);
      req.setFirstName(user.firstName);
      req.setLastName(user.lastName);
      req.setEmail(user.email);
      req.setTimeZone(user.timeZone);
      req.setCompanyId(user.companyId);
      req.setRole(user.role);
      
      const client = this.getClient();
      client.editUser(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  deleteUser = (user: DeleteUserReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new DeleteUserReq();
      req.setUserId(user.userId);
      req.setCompanyId(user.companyId);

      const client = this.getClient();
      client.deleteUser(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  enableUser = (user: EnableUserReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new EnableUserReq();
      req.setUserId(user.userId);
      req.setCompanyId(user.companyId);
      req.setEnabled(user.enabled);

      const client = this.getClient();
      client.enableUser(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };

  getUsers = (user: GetUsersReq.AsObject) => {
    return new Promise((resolve, reject) => {
      let req = new GetUsersReq();
      req.setCompanyId(user.companyId);

      const client = this.getClient();
      client.getUsers(req, this.meta as any, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          let obj = resp?.toObject();
          resolve(obj);
        }
      });
    });
  };
}
