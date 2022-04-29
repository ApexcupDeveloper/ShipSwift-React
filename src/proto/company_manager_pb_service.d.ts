// package: companymanager
// file: company_manager.proto

import * as company_manager_pb from "./company_manager_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CompanyManagerAddCompany = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.CompanyInfo;
  readonly responseType: typeof company_manager_pb.AddCompanyReply;
};

type CompanyManagerEditCompany = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.EditCompanyRequest;
  readonly responseType: typeof company_manager_pb.EditCompanyReply;
};

type CompanyManagerDeleteCompany = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.DeleteCompanyRequest;
  readonly responseType: typeof company_manager_pb.DeleteCompanyReply;
};

type CompanyManagerGetCompany = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.GetCompanyRequest;
  readonly responseType: typeof company_manager_pb.GetCompanyReply;
};

type CompanyManagerAddWarehouse = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.AddWarehouseRequest;
  readonly responseType: typeof company_manager_pb.AddWarehouseReply;
};

type CompanyManagerEditWarehouse = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.EditWarehouseRequest;
  readonly responseType: typeof company_manager_pb.EditWarehouseReply;
};

type CompanyManagerDeleteWarehouse = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.DeleteWarehouseRequest;
  readonly responseType: typeof company_manager_pb.DeleteWarehouseReply;
};

type CompanyManagerListWarehouses = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.ListWarehousesRequest;
  readonly responseType: typeof company_manager_pb.ListWarehousesReply;
};

type CompanyManagerAddStore = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.AddStoreRequest;
  readonly responseType: typeof company_manager_pb.AddStoreReply;
};

type CompanyManagerEditStore = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.EditStoreRequest;
  readonly responseType: typeof company_manager_pb.EditStoreReply;
};

type CompanyManagerDeleteStore = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.DeleteStoreRequest;
  readonly responseType: typeof company_manager_pb.DeleteStoreReply;
};

type CompanyManagerEnableStore = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.EnableDisableStoreRequest;
  readonly responseType: typeof company_manager_pb.EnableDisableStoreReply;
};

type CompanyManagerDisableStore = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.EnableDisableStoreRequest;
  readonly responseType: typeof company_manager_pb.EnableDisableStoreReply;
};

type CompanyManagerResetStoreOrdersLastPolled = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.ResetStoreOrdersLastPolledRequest;
  readonly responseType: typeof company_manager_pb.ResetStoreOrdersLastPolledReply;
};

type CompanyManagerResetStoreProductsLastPolled = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.ResetStoreProductsLastPolledRequest;
  readonly responseType: typeof company_manager_pb.ResetStoreProductsLastPolledReply;
};

type CompanyManagerGetAllStores = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.GetAllStoresRequest;
  readonly responseType: typeof company_manager_pb.GetAllStoresReply;
};

type CompanyManagerStoresCount = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.StoresCountRequest;
  readonly responseType: typeof company_manager_pb.StoresCountReply;
};

type CompanyManagerGetStoreType = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.GetStoreTypeRequest;
  readonly responseType: typeof company_manager_pb.GetStoreTypeReply;
};

type CompanyManagerGetEtsyAuthToken = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.EtsyAuthTokenRequest;
  readonly responseType: typeof company_manager_pb.EtsyAuthTokenReply;
};

type CompanyManagerGetBillingInfo = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.BillingInfoRequest;
  readonly responseType: typeof company_manager_pb.BillingInfoReply;
};

type CompanyManagerSetDefaultCard = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.SetDefaultCardRequest;
  readonly responseType: typeof company_manager_pb.SetDefaultCardReply;
};

type CompanyManagerUpdateBillingAddress = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.UpdateCompanyBillingAddressRequest;
  readonly responseType: typeof company_manager_pb.UpdateCompanyBillingAddressReply;
};

type CompanyManagerGetBillingInvoices = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.BillingInvoiceReq;
  readonly responseType: typeof company_manager_pb.BillingInvoiceReply;
};

type CompanyManagerDeleteCard = {
  readonly methodName: string;
  readonly service: typeof CompanyManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.DeleteCardRequest;
  readonly responseType: typeof company_manager_pb.DeleteCardReply;
};

export class CompanyManager {
  static readonly serviceName: string;
  static readonly AddCompany: CompanyManagerAddCompany;
  static readonly EditCompany: CompanyManagerEditCompany;
  static readonly DeleteCompany: CompanyManagerDeleteCompany;
  static readonly GetCompany: CompanyManagerGetCompany;
  static readonly AddWarehouse: CompanyManagerAddWarehouse;
  static readonly EditWarehouse: CompanyManagerEditWarehouse;
  static readonly DeleteWarehouse: CompanyManagerDeleteWarehouse;
  static readonly ListWarehouses: CompanyManagerListWarehouses;
  static readonly AddStore: CompanyManagerAddStore;
  static readonly EditStore: CompanyManagerEditStore;
  static readonly DeleteStore: CompanyManagerDeleteStore;
  static readonly EnableStore: CompanyManagerEnableStore;
  static readonly DisableStore: CompanyManagerDisableStore;
  static readonly ResetStoreOrdersLastPolled: CompanyManagerResetStoreOrdersLastPolled;
  static readonly ResetStoreProductsLastPolled: CompanyManagerResetStoreProductsLastPolled;
  static readonly GetAllStores: CompanyManagerGetAllStores;
  static readonly StoresCount: CompanyManagerStoresCount;
  static readonly GetStoreType: CompanyManagerGetStoreType;
  static readonly GetEtsyAuthToken: CompanyManagerGetEtsyAuthToken;
  static readonly GetBillingInfo: CompanyManagerGetBillingInfo;
  static readonly SetDefaultCard: CompanyManagerSetDefaultCard;
  static readonly UpdateBillingAddress: CompanyManagerUpdateBillingAddress;
  static readonly GetBillingInvoices: CompanyManagerGetBillingInvoices;
  static readonly DeleteCard: CompanyManagerDeleteCard;
}

type InternalIntGetStoresToPollForOrders = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.IntGetStoresToPollForOrdersRequest;
  readonly responseType: typeof company_manager_pb.IntGetStoresToPollForOrdersReply;
};

type InternalIntGetStoresToPollForProducts = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.IntGetStoresToPollForProductsRequest;
  readonly responseType: typeof company_manager_pb.IntGetStoresToPollForProductsReply;
};

type InternalIntGetStoreKey = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.GetStoreKeyRequest;
  readonly responseType: typeof company_manager_pb.GetStoreKeyReply;
};

type InternalIntGetStoreType = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.GetStoreTypeRequest;
  readonly responseType: typeof company_manager_pb.GetStoreTypeReply;
};

type InternalIntSetShopifyAccessToken = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.SetShopifyAccessTokenRequest;
  readonly responseType: typeof company_manager_pb.SetShopifyAccessTokenReply;
};

type InternalIntAllStoreList = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.IntAllStoreListReq;
  readonly responseType: typeof company_manager_pb.IntAllStoreListReply;
};

type InternalIntGetStoreInfoBulk = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.IntGetStoreInfoBulkReq;
  readonly responseType: typeof company_manager_pb.IntGetStoreInfoBulkReply;
};

type InternalIntUpdateSubscription = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.SubscriptionUpdateRequest;
  readonly responseType: typeof company_manager_pb.SubscriptionUpdateReply;
};

type InternalIntAddSubscription = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.SubscriptionAddRequest;
  readonly responseType: typeof company_manager_pb.SubscriptionAddReply;
};

type InternalIntDeleteSubscription = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.SubscriptionDeleteRequest;
  readonly responseType: typeof company_manager_pb.SubscriptionDeleteReply;
};

type InternalIntAddCard = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.AddCardRequest;
  readonly responseType: typeof company_manager_pb.AddCardReply;
};

type InternalIntUpdateCard = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.UpdateCardRequest;
  readonly responseType: typeof company_manager_pb.UpdateCardReply;
};

type InternalIntDeleteCard = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.IntDeleteCardRequest;
  readonly responseType: typeof company_manager_pb.IntDeleteCardReply;
};

type InternalIntUpdateBillingAddress = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.UpdateBillingAddressRequest;
  readonly responseType: typeof company_manager_pb.UpdateBillingAddressReply;
};

type InternalIntAddInvoice = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.IntCreateInvoiceRequest;
  readonly responseType: typeof company_manager_pb.IntCreateInvoiceReply;
};

type InternalIntUpdateInvoice = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.IntUpdateInvoiceRequest;
  readonly responseType: typeof company_manager_pb.IntUpdateInvoiceReply;
};

type InternalIntUpdateCompanyUserCount = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.IntUpdateCompanyUserCountReq;
  readonly responseType: typeof company_manager_pb.IntUpdateCompanyUserCountReply;
};

type InternalIntUpdateCompanyOrderCount = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof company_manager_pb.IntUpdateCompanyOrderCountReq;
  readonly responseType: typeof company_manager_pb.IntUpdateCompanyOrderCountReply;
};

export class Internal {
  static readonly serviceName: string;
  static readonly IntGetStoresToPollForOrders: InternalIntGetStoresToPollForOrders;
  static readonly IntGetStoresToPollForProducts: InternalIntGetStoresToPollForProducts;
  static readonly IntGetStoreKey: InternalIntGetStoreKey;
  static readonly IntGetStoreType: InternalIntGetStoreType;
  static readonly IntSetShopifyAccessToken: InternalIntSetShopifyAccessToken;
  static readonly IntAllStoreList: InternalIntAllStoreList;
  static readonly IntGetStoreInfoBulk: InternalIntGetStoreInfoBulk;
  static readonly IntUpdateSubscription: InternalIntUpdateSubscription;
  static readonly IntAddSubscription: InternalIntAddSubscription;
  static readonly IntDeleteSubscription: InternalIntDeleteSubscription;
  static readonly IntAddCard: InternalIntAddCard;
  static readonly IntUpdateCard: InternalIntUpdateCard;
  static readonly IntDeleteCard: InternalIntDeleteCard;
  static readonly IntUpdateBillingAddress: InternalIntUpdateBillingAddress;
  static readonly IntAddInvoice: InternalIntAddInvoice;
  static readonly IntUpdateInvoice: InternalIntUpdateInvoice;
  static readonly IntUpdateCompanyUserCount: InternalIntUpdateCompanyUserCount;
  static readonly IntUpdateCompanyOrderCount: InternalIntUpdateCompanyOrderCount;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CompanyManagerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  addCompany(
    requestMessage: company_manager_pb.CompanyInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.AddCompanyReply|null) => void
  ): UnaryResponse;
  addCompany(
    requestMessage: company_manager_pb.CompanyInfo,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.AddCompanyReply|null) => void
  ): UnaryResponse;
  editCompany(
    requestMessage: company_manager_pb.EditCompanyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.EditCompanyReply|null) => void
  ): UnaryResponse;
  editCompany(
    requestMessage: company_manager_pb.EditCompanyRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.EditCompanyReply|null) => void
  ): UnaryResponse;
  deleteCompany(
    requestMessage: company_manager_pb.DeleteCompanyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.DeleteCompanyReply|null) => void
  ): UnaryResponse;
  deleteCompany(
    requestMessage: company_manager_pb.DeleteCompanyRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.DeleteCompanyReply|null) => void
  ): UnaryResponse;
  getCompany(
    requestMessage: company_manager_pb.GetCompanyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.GetCompanyReply|null) => void
  ): UnaryResponse;
  getCompany(
    requestMessage: company_manager_pb.GetCompanyRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.GetCompanyReply|null) => void
  ): UnaryResponse;
  addWarehouse(
    requestMessage: company_manager_pb.AddWarehouseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.AddWarehouseReply|null) => void
  ): UnaryResponse;
  addWarehouse(
    requestMessage: company_manager_pb.AddWarehouseRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.AddWarehouseReply|null) => void
  ): UnaryResponse;
  editWarehouse(
    requestMessage: company_manager_pb.EditWarehouseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.EditWarehouseReply|null) => void
  ): UnaryResponse;
  editWarehouse(
    requestMessage: company_manager_pb.EditWarehouseRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.EditWarehouseReply|null) => void
  ): UnaryResponse;
  deleteWarehouse(
    requestMessage: company_manager_pb.DeleteWarehouseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.DeleteWarehouseReply|null) => void
  ): UnaryResponse;
  deleteWarehouse(
    requestMessage: company_manager_pb.DeleteWarehouseRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.DeleteWarehouseReply|null) => void
  ): UnaryResponse;
  listWarehouses(
    requestMessage: company_manager_pb.ListWarehousesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.ListWarehousesReply|null) => void
  ): UnaryResponse;
  listWarehouses(
    requestMessage: company_manager_pb.ListWarehousesRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.ListWarehousesReply|null) => void
  ): UnaryResponse;
  addStore(
    requestMessage: company_manager_pb.AddStoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.AddStoreReply|null) => void
  ): UnaryResponse;
  addStore(
    requestMessage: company_manager_pb.AddStoreRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.AddStoreReply|null) => void
  ): UnaryResponse;
  editStore(
    requestMessage: company_manager_pb.EditStoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.EditStoreReply|null) => void
  ): UnaryResponse;
  editStore(
    requestMessage: company_manager_pb.EditStoreRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.EditStoreReply|null) => void
  ): UnaryResponse;
  deleteStore(
    requestMessage: company_manager_pb.DeleteStoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.DeleteStoreReply|null) => void
  ): UnaryResponse;
  deleteStore(
    requestMessage: company_manager_pb.DeleteStoreRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.DeleteStoreReply|null) => void
  ): UnaryResponse;
  enableStore(
    requestMessage: company_manager_pb.EnableDisableStoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.EnableDisableStoreReply|null) => void
  ): UnaryResponse;
  enableStore(
    requestMessage: company_manager_pb.EnableDisableStoreRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.EnableDisableStoreReply|null) => void
  ): UnaryResponse;
  disableStore(
    requestMessage: company_manager_pb.EnableDisableStoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.EnableDisableStoreReply|null) => void
  ): UnaryResponse;
  disableStore(
    requestMessage: company_manager_pb.EnableDisableStoreRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.EnableDisableStoreReply|null) => void
  ): UnaryResponse;
  resetStoreOrdersLastPolled(
    requestMessage: company_manager_pb.ResetStoreOrdersLastPolledRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.ResetStoreOrdersLastPolledReply|null) => void
  ): UnaryResponse;
  resetStoreOrdersLastPolled(
    requestMessage: company_manager_pb.ResetStoreOrdersLastPolledRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.ResetStoreOrdersLastPolledReply|null) => void
  ): UnaryResponse;
  resetStoreProductsLastPolled(
    requestMessage: company_manager_pb.ResetStoreProductsLastPolledRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.ResetStoreProductsLastPolledReply|null) => void
  ): UnaryResponse;
  resetStoreProductsLastPolled(
    requestMessage: company_manager_pb.ResetStoreProductsLastPolledRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.ResetStoreProductsLastPolledReply|null) => void
  ): UnaryResponse;
  getAllStores(
    requestMessage: company_manager_pb.GetAllStoresRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.GetAllStoresReply|null) => void
  ): UnaryResponse;
  getAllStores(
    requestMessage: company_manager_pb.GetAllStoresRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.GetAllStoresReply|null) => void
  ): UnaryResponse;
  storesCount(
    requestMessage: company_manager_pb.StoresCountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.StoresCountReply|null) => void
  ): UnaryResponse;
  storesCount(
    requestMessage: company_manager_pb.StoresCountRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.StoresCountReply|null) => void
  ): UnaryResponse;
  getStoreType(
    requestMessage: company_manager_pb.GetStoreTypeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.GetStoreTypeReply|null) => void
  ): UnaryResponse;
  getStoreType(
    requestMessage: company_manager_pb.GetStoreTypeRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.GetStoreTypeReply|null) => void
  ): UnaryResponse;
  getEtsyAuthToken(
    requestMessage: company_manager_pb.EtsyAuthTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.EtsyAuthTokenReply|null) => void
  ): UnaryResponse;
  getEtsyAuthToken(
    requestMessage: company_manager_pb.EtsyAuthTokenRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.EtsyAuthTokenReply|null) => void
  ): UnaryResponse;
  getBillingInfo(
    requestMessage: company_manager_pb.BillingInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.BillingInfoReply|null) => void
  ): UnaryResponse;
  getBillingInfo(
    requestMessage: company_manager_pb.BillingInfoRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.BillingInfoReply|null) => void
  ): UnaryResponse;
  setDefaultCard(
    requestMessage: company_manager_pb.SetDefaultCardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.SetDefaultCardReply|null) => void
  ): UnaryResponse;
  setDefaultCard(
    requestMessage: company_manager_pb.SetDefaultCardRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.SetDefaultCardReply|null) => void
  ): UnaryResponse;
  updateBillingAddress(
    requestMessage: company_manager_pb.UpdateCompanyBillingAddressRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.UpdateCompanyBillingAddressReply|null) => void
  ): UnaryResponse;
  updateBillingAddress(
    requestMessage: company_manager_pb.UpdateCompanyBillingAddressRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.UpdateCompanyBillingAddressReply|null) => void
  ): UnaryResponse;
  getBillingInvoices(
    requestMessage: company_manager_pb.BillingInvoiceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.BillingInvoiceReply|null) => void
  ): UnaryResponse;
  getBillingInvoices(
    requestMessage: company_manager_pb.BillingInvoiceReq,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.BillingInvoiceReply|null) => void
  ): UnaryResponse;
  deleteCard(
    requestMessage: company_manager_pb.DeleteCardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.DeleteCardReply|null) => void
  ): UnaryResponse;
  deleteCard(
    requestMessage: company_manager_pb.DeleteCardRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.DeleteCardReply|null) => void
  ): UnaryResponse;
}

export class InternalClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  intGetStoresToPollForOrders(
    requestMessage: company_manager_pb.IntGetStoresToPollForOrdersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntGetStoresToPollForOrdersReply|null) => void
  ): UnaryResponse;
  intGetStoresToPollForOrders(
    requestMessage: company_manager_pb.IntGetStoresToPollForOrdersRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntGetStoresToPollForOrdersReply|null) => void
  ): UnaryResponse;
  intGetStoresToPollForProducts(
    requestMessage: company_manager_pb.IntGetStoresToPollForProductsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntGetStoresToPollForProductsReply|null) => void
  ): UnaryResponse;
  intGetStoresToPollForProducts(
    requestMessage: company_manager_pb.IntGetStoresToPollForProductsRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntGetStoresToPollForProductsReply|null) => void
  ): UnaryResponse;
  intGetStoreKey(
    requestMessage: company_manager_pb.GetStoreKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.GetStoreKeyReply|null) => void
  ): UnaryResponse;
  intGetStoreKey(
    requestMessage: company_manager_pb.GetStoreKeyRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.GetStoreKeyReply|null) => void
  ): UnaryResponse;
  intGetStoreType(
    requestMessage: company_manager_pb.GetStoreTypeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.GetStoreTypeReply|null) => void
  ): UnaryResponse;
  intGetStoreType(
    requestMessage: company_manager_pb.GetStoreTypeRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.GetStoreTypeReply|null) => void
  ): UnaryResponse;
  intSetShopifyAccessToken(
    requestMessage: company_manager_pb.SetShopifyAccessTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.SetShopifyAccessTokenReply|null) => void
  ): UnaryResponse;
  intSetShopifyAccessToken(
    requestMessage: company_manager_pb.SetShopifyAccessTokenRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.SetShopifyAccessTokenReply|null) => void
  ): UnaryResponse;
  intAllStoreList(
    requestMessage: company_manager_pb.IntAllStoreListReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntAllStoreListReply|null) => void
  ): UnaryResponse;
  intAllStoreList(
    requestMessage: company_manager_pb.IntAllStoreListReq,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntAllStoreListReply|null) => void
  ): UnaryResponse;
  intGetStoreInfoBulk(
    requestMessage: company_manager_pb.IntGetStoreInfoBulkReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntGetStoreInfoBulkReply|null) => void
  ): UnaryResponse;
  intGetStoreInfoBulk(
    requestMessage: company_manager_pb.IntGetStoreInfoBulkReq,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntGetStoreInfoBulkReply|null) => void
  ): UnaryResponse;
  intUpdateSubscription(
    requestMessage: company_manager_pb.SubscriptionUpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.SubscriptionUpdateReply|null) => void
  ): UnaryResponse;
  intUpdateSubscription(
    requestMessage: company_manager_pb.SubscriptionUpdateRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.SubscriptionUpdateReply|null) => void
  ): UnaryResponse;
  intAddSubscription(
    requestMessage: company_manager_pb.SubscriptionAddRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.SubscriptionAddReply|null) => void
  ): UnaryResponse;
  intAddSubscription(
    requestMessage: company_manager_pb.SubscriptionAddRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.SubscriptionAddReply|null) => void
  ): UnaryResponse;
  intDeleteSubscription(
    requestMessage: company_manager_pb.SubscriptionDeleteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.SubscriptionDeleteReply|null) => void
  ): UnaryResponse;
  intDeleteSubscription(
    requestMessage: company_manager_pb.SubscriptionDeleteRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.SubscriptionDeleteReply|null) => void
  ): UnaryResponse;
  intAddCard(
    requestMessage: company_manager_pb.AddCardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.AddCardReply|null) => void
  ): UnaryResponse;
  intAddCard(
    requestMessage: company_manager_pb.AddCardRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.AddCardReply|null) => void
  ): UnaryResponse;
  intUpdateCard(
    requestMessage: company_manager_pb.UpdateCardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.UpdateCardReply|null) => void
  ): UnaryResponse;
  intUpdateCard(
    requestMessage: company_manager_pb.UpdateCardRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.UpdateCardReply|null) => void
  ): UnaryResponse;
  intDeleteCard(
    requestMessage: company_manager_pb.IntDeleteCardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntDeleteCardReply|null) => void
  ): UnaryResponse;
  intDeleteCard(
    requestMessage: company_manager_pb.IntDeleteCardRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntDeleteCardReply|null) => void
  ): UnaryResponse;
  intUpdateBillingAddress(
    requestMessage: company_manager_pb.UpdateBillingAddressRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.UpdateBillingAddressReply|null) => void
  ): UnaryResponse;
  intUpdateBillingAddress(
    requestMessage: company_manager_pb.UpdateBillingAddressRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.UpdateBillingAddressReply|null) => void
  ): UnaryResponse;
  intAddInvoice(
    requestMessage: company_manager_pb.IntCreateInvoiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntCreateInvoiceReply|null) => void
  ): UnaryResponse;
  intAddInvoice(
    requestMessage: company_manager_pb.IntCreateInvoiceRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntCreateInvoiceReply|null) => void
  ): UnaryResponse;
  intUpdateInvoice(
    requestMessage: company_manager_pb.IntUpdateInvoiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntUpdateInvoiceReply|null) => void
  ): UnaryResponse;
  intUpdateInvoice(
    requestMessage: company_manager_pb.IntUpdateInvoiceRequest,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntUpdateInvoiceReply|null) => void
  ): UnaryResponse;
  intUpdateCompanyUserCount(
    requestMessage: company_manager_pb.IntUpdateCompanyUserCountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntUpdateCompanyUserCountReply|null) => void
  ): UnaryResponse;
  intUpdateCompanyUserCount(
    requestMessage: company_manager_pb.IntUpdateCompanyUserCountReq,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntUpdateCompanyUserCountReply|null) => void
  ): UnaryResponse;
  intUpdateCompanyOrderCount(
    requestMessage: company_manager_pb.IntUpdateCompanyOrderCountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntUpdateCompanyOrderCountReply|null) => void
  ): UnaryResponse;
  intUpdateCompanyOrderCount(
    requestMessage: company_manager_pb.IntUpdateCompanyOrderCountReq,
    callback: (error: ServiceError|null, responseMessage: company_manager_pb.IntUpdateCompanyOrderCountReply|null) => void
  ): UnaryResponse;
}

