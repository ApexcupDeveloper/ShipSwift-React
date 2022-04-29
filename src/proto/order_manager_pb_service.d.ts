// package: ordermanager
// file: order_manager.proto

import * as order_manager_pb from "./order_manager_pb";
import {grpc} from "@improbable-eng/grpc-web";

type OrderManagerUpdateOrder = {
  readonly methodName: string;
  readonly service: typeof OrderManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof order_manager_pb.OrderDetails;
  readonly responseType: typeof order_manager_pb.UpdateOrderReply;
};

type OrderManagerListOrders = {
  readonly methodName: string;
  readonly service: typeof OrderManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof order_manager_pb.ListOrdersRequest;
  readonly responseType: typeof order_manager_pb.ListOrdersReply;
};

type OrderManagerUpdateOrderStatus = {
  readonly methodName: string;
  readonly service: typeof OrderManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof order_manager_pb.UpdateOrderStatusRequest;
  readonly responseType: typeof order_manager_pb.UpdateOrderStatusReply;
};

type OrderManagerOrdersCount = {
  readonly methodName: string;
  readonly service: typeof OrderManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof order_manager_pb.OrdersCountRequest;
  readonly responseType: typeof order_manager_pb.OrdersCountReply;
};

type OrderManagerGetOrder = {
  readonly methodName: string;
  readonly service: typeof OrderManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof order_manager_pb.GetOrderRequest;
  readonly responseType: typeof order_manager_pb.OrderDetails;
};

type OrderManagerGetReport = {
  readonly methodName: string;
  readonly service: typeof OrderManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof order_manager_pb.CompanyReq;
  readonly responseType: typeof order_manager_pb.ReportReply;
};

export class OrderManager {
  static readonly serviceName: string;
  static readonly UpdateOrder: OrderManagerUpdateOrder;
  static readonly ListOrders: OrderManagerListOrders;
  static readonly UpdateOrderStatus: OrderManagerUpdateOrderStatus;
  static readonly OrdersCount: OrderManagerOrdersCount;
  static readonly GetOrder: OrderManagerGetOrder;
  static readonly GetReport: OrderManagerGetReport;
}

type InternalIntUpdateOrder = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof order_manager_pb.OrderDetails;
  readonly responseType: typeof order_manager_pb.UpdateOrderReply;
};

type InternalIntGetOrder = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof order_manager_pb.GetOrderRequest;
  readonly responseType: typeof order_manager_pb.OrderDetails;
};

type InternalIntUpdateOrderStatus = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof order_manager_pb.UpdateOrderStatusRequest;
  readonly responseType: typeof order_manager_pb.UpdateOrderStatusReply;
};

type InternalIntEnrichProduct = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof order_manager_pb.IntEnrichProductRequest;
  readonly responseType: typeof order_manager_pb.IntEnrichProductReply;
};

export class Internal {
  static readonly serviceName: string;
  static readonly IntUpdateOrder: InternalIntUpdateOrder;
  static readonly IntGetOrder: InternalIntGetOrder;
  static readonly IntUpdateOrderStatus: InternalIntUpdateOrderStatus;
  static readonly IntEnrichProduct: InternalIntEnrichProduct;
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

export class OrderManagerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  updateOrder(
    requestMessage: order_manager_pb.OrderDetails,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.UpdateOrderReply|null) => void
  ): UnaryResponse;
  updateOrder(
    requestMessage: order_manager_pb.OrderDetails,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.UpdateOrderReply|null) => void
  ): UnaryResponse;
  listOrders(
    requestMessage: order_manager_pb.ListOrdersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.ListOrdersReply|null) => void
  ): UnaryResponse;
  listOrders(
    requestMessage: order_manager_pb.ListOrdersRequest,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.ListOrdersReply|null) => void
  ): UnaryResponse;
  updateOrderStatus(
    requestMessage: order_manager_pb.UpdateOrderStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.UpdateOrderStatusReply|null) => void
  ): UnaryResponse;
  updateOrderStatus(
    requestMessage: order_manager_pb.UpdateOrderStatusRequest,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.UpdateOrderStatusReply|null) => void
  ): UnaryResponse;
  ordersCount(
    requestMessage: order_manager_pb.OrdersCountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.OrdersCountReply|null) => void
  ): UnaryResponse;
  ordersCount(
    requestMessage: order_manager_pb.OrdersCountRequest,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.OrdersCountReply|null) => void
  ): UnaryResponse;
  getOrder(
    requestMessage: order_manager_pb.GetOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.OrderDetails|null) => void
  ): UnaryResponse;
  getOrder(
    requestMessage: order_manager_pb.GetOrderRequest,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.OrderDetails|null) => void
  ): UnaryResponse;
  getReport(
    requestMessage: order_manager_pb.CompanyReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.ReportReply|null) => void
  ): UnaryResponse;
  getReport(
    requestMessage: order_manager_pb.CompanyReq,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.ReportReply|null) => void
  ): UnaryResponse;
}

export class InternalClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  intUpdateOrder(
    requestMessage: order_manager_pb.OrderDetails,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.UpdateOrderReply|null) => void
  ): UnaryResponse;
  intUpdateOrder(
    requestMessage: order_manager_pb.OrderDetails,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.UpdateOrderReply|null) => void
  ): UnaryResponse;
  intGetOrder(
    requestMessage: order_manager_pb.GetOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.OrderDetails|null) => void
  ): UnaryResponse;
  intGetOrder(
    requestMessage: order_manager_pb.GetOrderRequest,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.OrderDetails|null) => void
  ): UnaryResponse;
  intUpdateOrderStatus(
    requestMessage: order_manager_pb.UpdateOrderStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.UpdateOrderStatusReply|null) => void
  ): UnaryResponse;
  intUpdateOrderStatus(
    requestMessage: order_manager_pb.UpdateOrderStatusRequest,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.UpdateOrderStatusReply|null) => void
  ): UnaryResponse;
  intEnrichProduct(
    requestMessage: order_manager_pb.IntEnrichProductRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.IntEnrichProductReply|null) => void
  ): UnaryResponse;
  intEnrichProduct(
    requestMessage: order_manager_pb.IntEnrichProductRequest,
    callback: (error: ServiceError|null, responseMessage: order_manager_pb.IntEnrichProductReply|null) => void
  ): UnaryResponse;
}

