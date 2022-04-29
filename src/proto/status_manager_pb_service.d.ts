// package: statusmanager
// file: status_manager.proto

import * as status_manager_pb from "./status_manager_pb";
import {grpc} from "@improbable-eng/grpc-web";

type StatusManagerGetStatus = {
  readonly methodName: string;
  readonly service: typeof StatusManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof status_manager_pb.StatusReq;
  readonly responseType: typeof status_manager_pb.StatusReply;
};

export class StatusManager {
  static readonly serviceName: string;
  static readonly GetStatus: StatusManagerGetStatus;
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

export class StatusManagerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getStatus(
    requestMessage: status_manager_pb.StatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: status_manager_pb.StatusReply|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: status_manager_pb.StatusReq,
    callback: (error: ServiceError|null, responseMessage: status_manager_pb.StatusReply|null) => void
  ): UnaryResponse;
}

