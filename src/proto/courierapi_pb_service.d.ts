// package: courierapi
// file: courierapi.proto

import * as courierapi_pb from "./courierapi_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CourierapiCreateLabel = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.CreateLabelRequest;
  readonly responseType: typeof courierapi_pb.CreateLabelReply;
};

type CourierapiGetShipment = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.GetShipmentRequest;
  readonly responseType: typeof courierapi_pb.GetShipmentReply;
};

type CourierapiCancelShipment = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.CancelShipmentRequest;
  readonly responseType: typeof courierapi_pb.CancelShipmentReply;
};

type CourierapiCreateCompany = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.CreateCompanyRequest;
  readonly responseType: typeof courierapi_pb.CreateCompanyReply;
};

type CourierapiDeleteCompany = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.DeleteCompanyRequest;
  readonly responseType: typeof courierapi_pb.DeleteCompanyReply;
};

type CourierapiCreateCarrier = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.CreateCarrierRequest;
  readonly responseType: typeof courierapi_pb.CreateCarrierReply;
};

type CourierapiChangeCarrierCutoffTime = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.ChangeCarrierCutoffTimeRequest;
  readonly responseType: typeof courierapi_pb.ChangeCarrierCutoffTimeReply;
};

type CourierapiDeleteCarrier = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.DeleteCarrierRequest;
  readonly responseType: typeof courierapi_pb.DeleteCarrierReply;
};

type CourierapiToggleCarrier = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.ToggleCarrierRequest;
  readonly responseType: typeof courierapi_pb.ToggleCarrierReply;
};

type CourierapiListCarriers = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.ListCarriersRequest;
  readonly responseType: typeof courierapi_pb.ListCarriersReply;
};

type CourierapiGetServices = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.GetServicesRequest;
  readonly responseType: typeof courierapi_pb.GetServicesReply;
};

type CourierapiSetCarrierServices = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.SetCarrierServicesRequest;
  readonly responseType: typeof courierapi_pb.SetCarrierServicesReply;
};

type CourierapiCreateManifest = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.CreateManifestRequest;
  readonly responseType: typeof courierapi_pb.CreateManifestReply;
};

type CourierapiAddLabel = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.CreateShipmentReq;
  readonly responseType: typeof courierapi_pb.CreateShipmentReply;
};

type CourierapiCreateBatchLabel = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.CreateBatchLabelRequest;
  readonly responseType: typeof courierapi_pb.CreateBatchLabelReply;
};

type CourierapiListBatches = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.ListBatchesReq;
  readonly responseType: typeof courierapi_pb.ListBatchesReply;
};

type CourierapiListBatchShipments = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.ListBatchShipmentsReq;
  readonly responseType: typeof courierapi_pb.ListBatchShipmentsReply;
};

type CourierapiBatchCount = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.BatchCountReq;
  readonly responseType: typeof courierapi_pb.BatchCountReply;
};

type CourierapiBatchShipmentsCount = {
  readonly methodName: string;
  readonly service: typeof Courierapi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof courierapi_pb.BatchShipmentCountReq;
  readonly responseType: typeof courierapi_pb.BatchShipmentCountReply;
};

export class Courierapi {
  static readonly serviceName: string;
  static readonly CreateLabel: CourierapiCreateLabel;
  static readonly GetShipment: CourierapiGetShipment;
  static readonly CancelShipment: CourierapiCancelShipment;
  static readonly CreateCompany: CourierapiCreateCompany;
  static readonly DeleteCompany: CourierapiDeleteCompany;
  static readonly CreateCarrier: CourierapiCreateCarrier;
  static readonly ChangeCarrierCutoffTime: CourierapiChangeCarrierCutoffTime;
  static readonly DeleteCarrier: CourierapiDeleteCarrier;
  static readonly ToggleCarrier: CourierapiToggleCarrier;
  static readonly ListCarriers: CourierapiListCarriers;
  static readonly GetServices: CourierapiGetServices;
  static readonly SetCarrierServices: CourierapiSetCarrierServices;
  static readonly CreateManifest: CourierapiCreateManifest;
  static readonly AddLabel: CourierapiAddLabel;
  static readonly CreateBatchLabel: CourierapiCreateBatchLabel;
  static readonly ListBatches: CourierapiListBatches;
  static readonly ListBatchShipments: CourierapiListBatchShipments;
  static readonly BatchCount: CourierapiBatchCount;
  static readonly BatchShipmentsCount: CourierapiBatchShipmentsCount;
}

export class Internal {
  static readonly serviceName: string;
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

export class CourierapiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createLabel(
    requestMessage: courierapi_pb.CreateLabelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CreateLabelReply|null) => void
  ): UnaryResponse;
  createLabel(
    requestMessage: courierapi_pb.CreateLabelRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CreateLabelReply|null) => void
  ): UnaryResponse;
  getShipment(
    requestMessage: courierapi_pb.GetShipmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.GetShipmentReply|null) => void
  ): UnaryResponse;
  getShipment(
    requestMessage: courierapi_pb.GetShipmentRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.GetShipmentReply|null) => void
  ): UnaryResponse;
  cancelShipment(
    requestMessage: courierapi_pb.CancelShipmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CancelShipmentReply|null) => void
  ): UnaryResponse;
  cancelShipment(
    requestMessage: courierapi_pb.CancelShipmentRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CancelShipmentReply|null) => void
  ): UnaryResponse;
  createCompany(
    requestMessage: courierapi_pb.CreateCompanyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CreateCompanyReply|null) => void
  ): UnaryResponse;
  createCompany(
    requestMessage: courierapi_pb.CreateCompanyRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CreateCompanyReply|null) => void
  ): UnaryResponse;
  deleteCompany(
    requestMessage: courierapi_pb.DeleteCompanyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.DeleteCompanyReply|null) => void
  ): UnaryResponse;
  deleteCompany(
    requestMessage: courierapi_pb.DeleteCompanyRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.DeleteCompanyReply|null) => void
  ): UnaryResponse;
  createCarrier(
    requestMessage: courierapi_pb.CreateCarrierRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CreateCarrierReply|null) => void
  ): UnaryResponse;
  createCarrier(
    requestMessage: courierapi_pb.CreateCarrierRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CreateCarrierReply|null) => void
  ): UnaryResponse;
  changeCarrierCutoffTime(
    requestMessage: courierapi_pb.ChangeCarrierCutoffTimeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.ChangeCarrierCutoffTimeReply|null) => void
  ): UnaryResponse;
  changeCarrierCutoffTime(
    requestMessage: courierapi_pb.ChangeCarrierCutoffTimeRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.ChangeCarrierCutoffTimeReply|null) => void
  ): UnaryResponse;
  deleteCarrier(
    requestMessage: courierapi_pb.DeleteCarrierRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.DeleteCarrierReply|null) => void
  ): UnaryResponse;
  deleteCarrier(
    requestMessage: courierapi_pb.DeleteCarrierRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.DeleteCarrierReply|null) => void
  ): UnaryResponse;
  toggleCarrier(
    requestMessage: courierapi_pb.ToggleCarrierRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.ToggleCarrierReply|null) => void
  ): UnaryResponse;
  toggleCarrier(
    requestMessage: courierapi_pb.ToggleCarrierRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.ToggleCarrierReply|null) => void
  ): UnaryResponse;
  listCarriers(
    requestMessage: courierapi_pb.ListCarriersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.ListCarriersReply|null) => void
  ): UnaryResponse;
  listCarriers(
    requestMessage: courierapi_pb.ListCarriersRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.ListCarriersReply|null) => void
  ): UnaryResponse;
  getServices(
    requestMessage: courierapi_pb.GetServicesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.GetServicesReply|null) => void
  ): UnaryResponse;
  getServices(
    requestMessage: courierapi_pb.GetServicesRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.GetServicesReply|null) => void
  ): UnaryResponse;
  setCarrierServices(
    requestMessage: courierapi_pb.SetCarrierServicesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.SetCarrierServicesReply|null) => void
  ): UnaryResponse;
  setCarrierServices(
    requestMessage: courierapi_pb.SetCarrierServicesRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.SetCarrierServicesReply|null) => void
  ): UnaryResponse;
  createManifest(
    requestMessage: courierapi_pb.CreateManifestRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CreateManifestReply|null) => void
  ): UnaryResponse;
  createManifest(
    requestMessage: courierapi_pb.CreateManifestRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CreateManifestReply|null) => void
  ): UnaryResponse;
  addLabel(
    requestMessage: courierapi_pb.CreateShipmentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CreateShipmentReply|null) => void
  ): UnaryResponse;
  addLabel(
    requestMessage: courierapi_pb.CreateShipmentReq,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CreateShipmentReply|null) => void
  ): UnaryResponse;
  createBatchLabel(
    requestMessage: courierapi_pb.CreateBatchLabelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CreateBatchLabelReply|null) => void
  ): UnaryResponse;
  createBatchLabel(
    requestMessage: courierapi_pb.CreateBatchLabelRequest,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.CreateBatchLabelReply|null) => void
  ): UnaryResponse;
  listBatches(
    requestMessage: courierapi_pb.ListBatchesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.ListBatchesReply|null) => void
  ): UnaryResponse;
  listBatches(
    requestMessage: courierapi_pb.ListBatchesReq,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.ListBatchesReply|null) => void
  ): UnaryResponse;
  listBatchShipments(
    requestMessage: courierapi_pb.ListBatchShipmentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.ListBatchShipmentsReply|null) => void
  ): UnaryResponse;
  listBatchShipments(
    requestMessage: courierapi_pb.ListBatchShipmentsReq,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.ListBatchShipmentsReply|null) => void
  ): UnaryResponse;
  batchCount(
    requestMessage: courierapi_pb.BatchCountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.BatchCountReply|null) => void
  ): UnaryResponse;
  batchCount(
    requestMessage: courierapi_pb.BatchCountReq,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.BatchCountReply|null) => void
  ): UnaryResponse;
  batchShipmentsCount(
    requestMessage: courierapi_pb.BatchShipmentCountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.BatchShipmentCountReply|null) => void
  ): UnaryResponse;
  batchShipmentsCount(
    requestMessage: courierapi_pb.BatchShipmentCountReq,
    callback: (error: ServiceError|null, responseMessage: courierapi_pb.BatchShipmentCountReply|null) => void
  ): UnaryResponse;
}

export class InternalClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
}

