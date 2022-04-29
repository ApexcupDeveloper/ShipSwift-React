// package: ebay_connector
// file: ebay_connector.proto

import * as jspb from "google-protobuf";

export class parameters extends jspb.Message {
  getEbaySiteId(): number;
  setEbaySiteId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): parameters.AsObject;
  static toObject(includeInstance: boolean, msg: parameters): parameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: parameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): parameters;
  static deserializeBinaryFromReader(message: parameters, reader: jspb.BinaryReader): parameters;
}

export namespace parameters {
  export type AsObject = {
    ebaySiteId: number,
  }
}

export class AddStoreReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getCompanyId(): string;
  setCompanyId(value: string): void;

  getShortName(): string;
  setShortName(value: string): void;

  getIconColour(): string;
  setIconColour(value: string): void;

  getStoreUrl(): string;
  setStoreUrl(value: string): void;

  hasParameters(): boolean;
  clearParameters(): void;
  getParameters(): parameters | undefined;
  setParameters(value?: parameters): void;

  getCode(): string;
  setCode(value: string): void;

  getImportAllOrders(): boolean;
  setImportAllOrders(value: boolean): void;
  setImportAllProducts(value: boolean): void;

  getImportAllProducts(): boolean;
  setImportAllProducts(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddStoreReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddStoreReq): AddStoreReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddStoreReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddStoreReq;
  static deserializeBinaryFromReader(message: AddStoreReq, reader: jspb.BinaryReader): AddStoreReq;
}

export namespace AddStoreReq {
  export type AsObject = {
    name: string,
    type: string,
    companyId: string,
    shortName: string,
    iconColour: string,
    storeUrl: string,
    parameters?: parameters.AsObject,
    code: string,
    importAllOrders: boolean,
    importAllProducts: boolean,
  }
}

export class AddStoreReply extends jspb.Message {
  getStoreid(): string;
  setStoreid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddStoreReply.AsObject;
  static toObject(includeInstance: boolean, msg: AddStoreReply): AddStoreReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddStoreReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddStoreReply;
  static deserializeBinaryFromReader(message: AddStoreReply, reader: jspb.BinaryReader): AddStoreReply;
}

export namespace AddStoreReply {
  export type AsObject = {
    storeid: string,
  }
}

