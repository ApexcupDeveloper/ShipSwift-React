// package: statusmanager
// file: status_manager.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class StatusReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: StatusReq): StatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusReq;
  static deserializeBinaryFromReader(message: StatusReq, reader: jspb.BinaryReader): StatusReq;
}

export namespace StatusReq {
  export type AsObject = {
  }
}

export class StatusReply extends jspb.Message {
  hasSupportStatus(): boolean;
  clearSupportStatus(): void;
  getSupportStatus(): SupportStatus | undefined;
  setSupportStatus(value?: SupportStatus): void;

  hasSiteStatus(): boolean;
  clearSiteStatus(): void;
  getSiteStatus(): SiteStatus | undefined;
  setSiteStatus(value?: SiteStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusReply.AsObject;
  static toObject(includeInstance: boolean, msg: StatusReply): StatusReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusReply;
  static deserializeBinaryFromReader(message: StatusReply, reader: jspb.BinaryReader): StatusReply;
}

export namespace StatusReply {
  export type AsObject = {
    supportStatus?: SupportStatus.AsObject,
    siteStatus?: SiteStatus.AsObject,
  }
}

export class SupportStatus extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  hasSince(): boolean;
  clearSince(): void;
  getSince(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setSince(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupportStatus.AsObject;
  static toObject(includeInstance: boolean, msg: SupportStatus): SupportStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupportStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupportStatus;
  static deserializeBinaryFromReader(message: SupportStatus, reader: jspb.BinaryReader): SupportStatus;
}

export namespace SupportStatus {
  export type AsObject = {
    status: string,
    since?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class SiteStatus extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteStatus.AsObject;
  static toObject(includeInstance: boolean, msg: SiteStatus): SiteStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SiteStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteStatus;
  static deserializeBinaryFromReader(message: SiteStatus, reader: jspb.BinaryReader): SiteStatus;
}

export namespace SiteStatus {
  export type AsObject = {
    status: string,
  }
}

