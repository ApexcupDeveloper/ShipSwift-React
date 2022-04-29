// package: ebay_connector
// file: ebay_connector.proto

import * as ebay_connector_pb from "./ebay_connector_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EbayConnectorAddStore = {
  readonly methodName: string;
  readonly service: typeof EbayConnector;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ebay_connector_pb.AddStoreReq;
  readonly responseType: typeof ebay_connector_pb.AddStoreReply;
};

export class EbayConnector {
  static readonly serviceName: string;
  static readonly AddStore: EbayConnectorAddStore;
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

export class EbayConnectorClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  addStore(
    requestMessage: ebay_connector_pb.AddStoreReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ebay_connector_pb.AddStoreReply|null) => void
  ): UnaryResponse;
  addStore(
    requestMessage: ebay_connector_pb.AddStoreReq,
    callback: (error: ServiceError|null, responseMessage: ebay_connector_pb.AddStoreReply|null) => void
  ): UnaryResponse;
}

