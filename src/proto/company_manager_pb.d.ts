// package: companymanager
// file: company_manager.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class CompanyInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getLogoUrl(): string;
  setLogoUrl(value: string): void;

  getVatNumber(): string;
  setVatNumber(value: string): void;

  getEoriNumber(): string;
  setEoriNumber(value: string): void;

  getDefaultCurrency(): string;
  setDefaultCurrency(value: string): void;

  getPurchaseOrderPrefix(): string;
  setPurchaseOrderPrefix(value: string): void;

  getWeightUnit(): string;
  setWeightUnit(value: string): void;

  getDimensionUnit(): string;
  setDimensionUnit(value: string): void;

  getInvoiceNote(): string;
  setInvoiceNote(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getAddress1(): string;
  setAddress1(value: string): void;

  getAddress2(): string;
  setAddress2(value: string): void;

  getAddress3(): string;
  setAddress3(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getPostcode(): string;
  setPostcode(value: string): void;

  getId(): string;
  setId(value: string): void;

  getBarcodeFormat(): string;
  setBarcodeFormat(value: string): void;

  hasIoss(): boolean;
  clearIoss(): void;
  getIoss(): google_protobuf_wrappers_pb.StringValue | undefined;
  setIoss(value?: google_protobuf_wrappers_pb.StringValue): void;

  getUserCount(): number;
  setUserCount(value: number): void;

  getImportedOrderCount(): number;
  setImportedOrderCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompanyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CompanyInfo): CompanyInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompanyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompanyInfo;
  static deserializeBinaryFromReader(message: CompanyInfo, reader: jspb.BinaryReader): CompanyInfo;
}

export namespace CompanyInfo {
  export type AsObject = {
    name: string,
    email: string,
    logoUrl: string,
    vatNumber: string,
    eoriNumber: string,
    defaultCurrency: string,
    purchaseOrderPrefix: string,
    weightUnit: string,
    dimensionUnit: string,
    invoiceNote: string,
    phone: string,
    address1: string,
    address2: string,
    address3: string,
    country: string,
    region: string,
    city: string,
    postcode: string,
    id: string,
    barcodeFormat: string,
    ioss?: google_protobuf_wrappers_pb.StringValue.AsObject,
    userCount: number,
    importedOrderCount: number,
  }
}

export class AddCompanyReply extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCompanyReply.AsObject;
  static toObject(includeInstance: boolean, msg: AddCompanyReply): AddCompanyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddCompanyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCompanyReply;
  static deserializeBinaryFromReader(message: AddCompanyReply, reader: jspb.BinaryReader): AddCompanyReply;
}

export namespace AddCompanyReply {
  export type AsObject = {
    companyId: string,
  }
}

export class EditCompanyRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  hasCompanyInfo(): boolean;
  clearCompanyInfo(): void;
  getCompanyInfo(): CompanyInfo | undefined;
  setCompanyInfo(value?: CompanyInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditCompanyRequest): EditCompanyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditCompanyRequest;
  static deserializeBinaryFromReader(message: EditCompanyRequest, reader: jspb.BinaryReader): EditCompanyRequest;
}

export namespace EditCompanyRequest {
  export type AsObject = {
    companyId: string,
    companyInfo?: CompanyInfo.AsObject,
  }
}

export class EditCompanyReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditCompanyReply.AsObject;
  static toObject(includeInstance: boolean, msg: EditCompanyReply): EditCompanyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditCompanyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditCompanyReply;
  static deserializeBinaryFromReader(message: EditCompanyReply, reader: jspb.BinaryReader): EditCompanyReply;
}

export namespace EditCompanyReply {
  export type AsObject = {
  }
}

export class DeleteCompanyRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCompanyRequest): DeleteCompanyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCompanyRequest;
  static deserializeBinaryFromReader(message: DeleteCompanyRequest, reader: jspb.BinaryReader): DeleteCompanyRequest;
}

export namespace DeleteCompanyRequest {
  export type AsObject = {
    companyId: string,
  }
}

export class DeleteCompanyReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCompanyReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCompanyReply): DeleteCompanyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCompanyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCompanyReply;
  static deserializeBinaryFromReader(message: DeleteCompanyReply, reader: jspb.BinaryReader): DeleteCompanyReply;
}

export namespace DeleteCompanyReply {
  export type AsObject = {
  }
}

export class GetCompanyRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompanyRequest): GetCompanyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompanyRequest;
  static deserializeBinaryFromReader(message: GetCompanyRequest, reader: jspb.BinaryReader): GetCompanyRequest;
}

export namespace GetCompanyRequest {
  export type AsObject = {
    companyId: string,
  }
}

export class GetCompanyReply extends jspb.Message {
  hasCompanyInfo(): boolean;
  clearCompanyInfo(): void;
  getCompanyInfo(): CompanyInfo | undefined;
  setCompanyInfo(value?: CompanyInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompanyReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompanyReply): GetCompanyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompanyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompanyReply;
  static deserializeBinaryFromReader(message: GetCompanyReply, reader: jspb.BinaryReader): GetCompanyReply;
}

export namespace GetCompanyReply {
  export type AsObject = {
    companyInfo?: CompanyInfo.AsObject,
  }
}

export class AddWarehouseRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  hasWarehouseInfo(): boolean;
  clearWarehouseInfo(): void;
  getWarehouseInfo(): CompanyInfo | undefined;
  setWarehouseInfo(value?: CompanyInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddWarehouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddWarehouseRequest): AddWarehouseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddWarehouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddWarehouseRequest;
  static deserializeBinaryFromReader(message: AddWarehouseRequest, reader: jspb.BinaryReader): AddWarehouseRequest;
}

export namespace AddWarehouseRequest {
  export type AsObject = {
    companyId: string,
    warehouseInfo?: CompanyInfo.AsObject,
  }
}

export class AddWarehouseReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddWarehouseReply.AsObject;
  static toObject(includeInstance: boolean, msg: AddWarehouseReply): AddWarehouseReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddWarehouseReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddWarehouseReply;
  static deserializeBinaryFromReader(message: AddWarehouseReply, reader: jspb.BinaryReader): AddWarehouseReply;
}

export namespace AddWarehouseReply {
  export type AsObject = {
  }
}

export class EditWarehouseRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getWarehouseId(): string;
  setWarehouseId(value: string): void;

  hasWarehouseInfo(): boolean;
  clearWarehouseInfo(): void;
  getWarehouseInfo(): CompanyInfo | undefined;
  setWarehouseInfo(value?: CompanyInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditWarehouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditWarehouseRequest): EditWarehouseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditWarehouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditWarehouseRequest;
  static deserializeBinaryFromReader(message: EditWarehouseRequest, reader: jspb.BinaryReader): EditWarehouseRequest;
}

export namespace EditWarehouseRequest {
  export type AsObject = {
    companyId: string,
    warehouseId: string,
    warehouseInfo?: CompanyInfo.AsObject,
  }
}

export class EditWarehouseReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditWarehouseReply.AsObject;
  static toObject(includeInstance: boolean, msg: EditWarehouseReply): EditWarehouseReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditWarehouseReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditWarehouseReply;
  static deserializeBinaryFromReader(message: EditWarehouseReply, reader: jspb.BinaryReader): EditWarehouseReply;
}

export namespace EditWarehouseReply {
  export type AsObject = {
  }
}

export class DeleteWarehouseRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getWarehouseId(): string;
  setWarehouseId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWarehouseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWarehouseRequest): DeleteWarehouseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWarehouseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWarehouseRequest;
  static deserializeBinaryFromReader(message: DeleteWarehouseRequest, reader: jspb.BinaryReader): DeleteWarehouseRequest;
}

export namespace DeleteWarehouseRequest {
  export type AsObject = {
    companyId: string,
    warehouseId: string,
  }
}

export class DeleteWarehouseReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWarehouseReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWarehouseReply): DeleteWarehouseReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWarehouseReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWarehouseReply;
  static deserializeBinaryFromReader(message: DeleteWarehouseReply, reader: jspb.BinaryReader): DeleteWarehouseReply;
}

export namespace DeleteWarehouseReply {
  export type AsObject = {
  }
}

export class ListWarehousesRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWarehousesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWarehousesRequest): ListWarehousesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWarehousesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWarehousesRequest;
  static deserializeBinaryFromReader(message: ListWarehousesRequest, reader: jspb.BinaryReader): ListWarehousesRequest;
}

export namespace ListWarehousesRequest {
  export type AsObject = {
    companyId: string,
  }
}

export class ListWarehousesReply extends jspb.Message {
  clearWarehousesList(): void;
  getWarehousesList(): Array<CompanyInfo>;
  setWarehousesList(value: Array<CompanyInfo>): void;
  addWarehouses(value?: CompanyInfo, index?: number): CompanyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWarehousesReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListWarehousesReply): ListWarehousesReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWarehousesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWarehousesReply;
  static deserializeBinaryFromReader(message: ListWarehousesReply, reader: jspb.BinaryReader): ListWarehousesReply;
}

export namespace ListWarehousesReply {
  export type AsObject = {
    warehousesList: Array<CompanyInfo.AsObject>,
  }
}

export class AddStoreRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreUrl(): string;
  setStoreUrl(value: string): void;

  hasParameters(): boolean;
  clearParameters(): void;
  getParameters(): StoreParams | undefined;
  setParameters(value?: StoreParams): void;

  getShortName(): string;
  setShortName(value: string): void;

  getIconColour(): string;
  setIconColour(value: string): void;

  getDefaultDeliveryMethod(): string;
  setDefaultDeliveryMethod(value: string): void;

  getImportAllOrders(): boolean;
  setImportAllOrders(value: boolean): void;

  getStoreCurrency(): string;
  setStoreCurrency(value: string): void;

  getStoreEmail(): string;
  setStoreEmail(value: string): void;

  getImportAllProducts(): boolean;
  setImportAllProducts(value: boolean): void;

  hasShouldSkipIu(): boolean;
  clearShouldSkipIu(): void;
  getShouldSkipIu(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setShouldSkipIu(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddStoreRequest): AddStoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddStoreRequest;
  static deserializeBinaryFromReader(message: AddStoreRequest, reader: jspb.BinaryReader): AddStoreRequest;
}

export namespace AddStoreRequest {
  export type AsObject = {
    name: string,
    type: string,
    companyId: string,
    storeUrl: string,
    parameters?: StoreParams.AsObject,
    shortName: string,
    iconColour: string,
    defaultDeliveryMethod: string,
    importAllOrders: boolean,
    storeCurrency: string,
    storeEmail: string,
    importAllProducts: boolean,
    shouldSkipIu?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class StoreParams extends jspb.Message {
  getBridgeUrl(): string;
  setBridgeUrl(value: string): void;

  getStoreRoot(): string;
  setStoreRoot(value: string): void;

  getValidateVersion(): string;
  setValidateVersion(value: string): void;

  getStoreKey(): string;
  setStoreKey(value: string): void;

  getAmazonSellerId(): string;
  setAmazonSellerId(value: string): void;

  getAmazonSpClientId(): string;
  setAmazonSpClientId(value: string): void;

  getAmazonSpClientSecret(): string;
  setAmazonSpClientSecret(value: string): void;

  getAmazonSpAwsUserKeyId(): string;
  setAmazonSpAwsUserKeyId(value: string): void;

  getAmazonSpAwsUserSecret(): string;
  setAmazonSpAwsUserSecret(value: string): void;

  getAmazonSpAwsRegion(): string;
  setAmazonSpAwsRegion(value: string): void;

  getAmazonSpAwsRoleArn(): string;
  setAmazonSpAwsRoleArn(value: string): void;

  getAmazonSpRefreshToken(): string;
  setAmazonSpRefreshToken(value: string): void;

  getAmazonSpApiEnvironment(): string;
  setAmazonSpApiEnvironment(value: string): void;

  getEbayClientId(): string;
  setEbayClientId(value: string): void;

  getEbayClientSecret(): string;
  setEbayClientSecret(value: string): void;

  getEbayRefreshToken(): string;
  setEbayRefreshToken(value: string): void;

  getEbayEnvironment(): string;
  setEbayEnvironment(value: string): void;

  getEbaySiteId(): string;
  setEbaySiteId(value: string): void;

  getSquarespaceApiKey(): string;
  setSquarespaceApiKey(value: string): void;

  getBigcommerceapiClientId(): string;
  setBigcommerceapiClientId(value: string): void;

  getBigcommerceapiAccessToken(): string;
  setBigcommerceapiAccessToken(value: string): void;

  getBigcommerceapiContext(): string;
  setBigcommerceapiContext(value: string): void;

  getEtsyKeystring(): string;
  setEtsyKeystring(value: string): void;

  getEtsySharedSecret(): string;
  setEtsySharedSecret(value: string): void;

  getEtsyAccessToken(): string;
  setEtsyAccessToken(value: string): void;

  getEtsyTokenSecret(): string;
  setEtsyTokenSecret(value: string): void;

  getEtsyAppAccessToken(): string;
  setEtsyAppAccessToken(value: string): void;

  getEtsyAppTokenSecret(): string;
  setEtsyAppTokenSecret(value: string): void;

  getEtsyVerifier(): string;
  setEtsyVerifier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreParams.AsObject;
  static toObject(includeInstance: boolean, msg: StoreParams): StoreParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreParams;
  static deserializeBinaryFromReader(message: StoreParams, reader: jspb.BinaryReader): StoreParams;
}

export namespace StoreParams {
  export type AsObject = {
    bridgeUrl: string,
    storeRoot: string,
    validateVersion: string,
    storeKey: string,
    amazonSellerId: string,
    amazonSpClientId: string,
    amazonSpClientSecret: string,
    amazonSpAwsUserKeyId: string,
    amazonSpAwsUserSecret: string,
    amazonSpAwsRegion: string,
    amazonSpAwsRoleArn: string,
    amazonSpRefreshToken: string,
    amazonSpApiEnvironment: string,
    ebayClientId: string,
    ebayClientSecret: string,
    ebayRefreshToken: string,
    ebayEnvironment: string,
    ebaySiteId: string,
    squarespaceApiKey: string,
    bigcommerceapiClientId: string,
    bigcommerceapiAccessToken: string,
    bigcommerceapiContext: string,
    etsyKeystring: string,
    etsySharedSecret: string,
    etsyAccessToken: string,
    etsyTokenSecret: string,
    etsyAppAccessToken: string,
    etsyAppTokenSecret: string,
    etsyVerifier: string,
  }
}

export class AddStoreReply extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): void;

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
    storeId: string,
  }
}

export class EditStoreRequest extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getCompanyId(): string;
  setCompanyId(value: string): void;

  hasParameters(): boolean;
  clearParameters(): void;
  getParameters(): StoreParams | undefined;
  setParameters(value?: StoreParams): void;

  getShortName(): string;
  setShortName(value: string): void;

  getIconColour(): string;
  setIconColour(value: string): void;

  getStoreCurrency(): string;
  setStoreCurrency(value: string): void;

  getStoreEmail(): string;
  setStoreEmail(value: string): void;

  hasShouldSkipIu(): boolean;
  clearShouldSkipIu(): void;
  getShouldSkipIu(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setShouldSkipIu(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditStoreRequest): EditStoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditStoreRequest;
  static deserializeBinaryFromReader(message: EditStoreRequest, reader: jspb.BinaryReader): EditStoreRequest;
}

export namespace EditStoreRequest {
  export type AsObject = {
    storeId: string,
    name: string,
    type: string,
    companyId: string,
    parameters?: StoreParams.AsObject,
    shortName: string,
    iconColour: string,
    storeCurrency: string,
    storeEmail: string,
    shouldSkipIu?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class EditStoreReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditStoreReply.AsObject;
  static toObject(includeInstance: boolean, msg: EditStoreReply): EditStoreReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditStoreReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditStoreReply;
  static deserializeBinaryFromReader(message: EditStoreReply, reader: jspb.BinaryReader): EditStoreReply;
}

export namespace EditStoreReply {
  export type AsObject = {
  }
}

export class DeleteStoreRequest extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): void;

  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStoreRequest): DeleteStoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStoreRequest;
  static deserializeBinaryFromReader(message: DeleteStoreRequest, reader: jspb.BinaryReader): DeleteStoreRequest;
}

export namespace DeleteStoreRequest {
  export type AsObject = {
    storeId: string,
    companyId: string,
  }
}

export class DeleteStoreReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStoreReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStoreReply): DeleteStoreReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteStoreReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStoreReply;
  static deserializeBinaryFromReader(message: DeleteStoreReply, reader: jspb.BinaryReader): DeleteStoreReply;
}

export namespace DeleteStoreReply {
  export type AsObject = {
  }
}

export class EnableDisableStoreRequest extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): void;

  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableDisableStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnableDisableStoreRequest): EnableDisableStoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableDisableStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableDisableStoreRequest;
  static deserializeBinaryFromReader(message: EnableDisableStoreRequest, reader: jspb.BinaryReader): EnableDisableStoreRequest;
}

export namespace EnableDisableStoreRequest {
  export type AsObject = {
    storeId: string,
    companyId: string,
  }
}

export class EnableDisableStoreReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableDisableStoreReply.AsObject;
  static toObject(includeInstance: boolean, msg: EnableDisableStoreReply): EnableDisableStoreReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableDisableStoreReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableDisableStoreReply;
  static deserializeBinaryFromReader(message: EnableDisableStoreReply, reader: jspb.BinaryReader): EnableDisableStoreReply;
}

export namespace EnableDisableStoreReply {
  export type AsObject = {
  }
}

export class IntGetStoresToPollForOrdersRequest extends jspb.Message {
  getNotUpdatedInSeconds(): number;
  setNotUpdatedInSeconds(value: number): void;

  getBatchSize(): number;
  setBatchSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntGetStoresToPollForOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IntGetStoresToPollForOrdersRequest): IntGetStoresToPollForOrdersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntGetStoresToPollForOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntGetStoresToPollForOrdersRequest;
  static deserializeBinaryFromReader(message: IntGetStoresToPollForOrdersRequest, reader: jspb.BinaryReader): IntGetStoresToPollForOrdersRequest;
}

export namespace IntGetStoresToPollForOrdersRequest {
  export type AsObject = {
    notUpdatedInSeconds: number,
    batchSize: number,
  }
}

export class IntGetStoresToPollForOrdersReply extends jspb.Message {
  clearStoresList(): void;
  getStoresList(): Array<StoreInfo>;
  setStoresList(value: Array<StoreInfo>): void;
  addStores(value?: StoreInfo, index?: number): StoreInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntGetStoresToPollForOrdersReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntGetStoresToPollForOrdersReply): IntGetStoresToPollForOrdersReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntGetStoresToPollForOrdersReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntGetStoresToPollForOrdersReply;
  static deserializeBinaryFromReader(message: IntGetStoresToPollForOrdersReply, reader: jspb.BinaryReader): IntGetStoresToPollForOrdersReply;
}

export namespace IntGetStoresToPollForOrdersReply {
  export type AsObject = {
    storesList: Array<StoreInfo.AsObject>,
  }
}

export class IntGetStoresToPollForProductsRequest extends jspb.Message {
  getNotUpdatedInSeconds(): number;
  setNotUpdatedInSeconds(value: number): void;

  getBatchSize(): number;
  setBatchSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntGetStoresToPollForProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IntGetStoresToPollForProductsRequest): IntGetStoresToPollForProductsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntGetStoresToPollForProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntGetStoresToPollForProductsRequest;
  static deserializeBinaryFromReader(message: IntGetStoresToPollForProductsRequest, reader: jspb.BinaryReader): IntGetStoresToPollForProductsRequest;
}

export namespace IntGetStoresToPollForProductsRequest {
  export type AsObject = {
    notUpdatedInSeconds: number,
    batchSize: number,
  }
}

export class IntGetStoresToPollForProductsReply extends jspb.Message {
  clearStoresList(): void;
  getStoresList(): Array<StoreInfo>;
  setStoresList(value: Array<StoreInfo>): void;
  addStores(value?: StoreInfo, index?: number): StoreInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntGetStoresToPollForProductsReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntGetStoresToPollForProductsReply): IntGetStoresToPollForProductsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntGetStoresToPollForProductsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntGetStoresToPollForProductsReply;
  static deserializeBinaryFromReader(message: IntGetStoresToPollForProductsReply, reader: jspb.BinaryReader): IntGetStoresToPollForProductsReply;
}

export namespace IntGetStoresToPollForProductsReply {
  export type AsObject = {
    storesList: Array<StoreInfo.AsObject>,
  }
}

export class StoreInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getCompanyId(): string;
  setCompanyId(value: string): void;

  getApi2cartStoreKey(): string;
  setApi2cartStoreKey(value: string): void;

  getType(): string;
  setType(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getShortName(): string;
  setShortName(value: string): void;

  getIconColour(): string;
  setIconColour(value: string): void;

  getStoreUrl(): string;
  setStoreUrl(value: string): void;

  getDefaultDeliveryMethod(): string;
  setDefaultDeliveryMethod(value: string): void;

  getImportAllOrders(): boolean;
  setImportAllOrders(value: boolean): void;

  getStoreCurrency(): string;
  setStoreCurrency(value: string): void;

  getStoreEmail(): string;
  setStoreEmail(value: string): void;

  getShopifyAccessToken(): string;
  setShopifyAccessToken(value: string): void;

  getImportAllProducts(): boolean;
  setImportAllProducts(value: boolean): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getShouldSkipIu(): boolean;
  setShouldSkipIu(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StoreInfo): StoreInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreInfo;
  static deserializeBinaryFromReader(message: StoreInfo, reader: jspb.BinaryReader): StoreInfo;
}

export namespace StoreInfo {
  export type AsObject = {
    id: string,
    name: string,
    companyId: string,
    api2cartStoreKey: string,
    type: string,
    enabled: boolean,
    shortName: string,
    iconColour: string,
    storeUrl: string,
    defaultDeliveryMethod: string,
    importAllOrders: boolean,
    storeCurrency: string,
    storeEmail: string,
    shopifyAccessToken: string,
    importAllProducts: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    shouldSkipIu: boolean,
  }
}

export class GetAllStoresRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getBatchSize(): number;
  setBatchSize(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllStoresRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllStoresRequest): GetAllStoresRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllStoresRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllStoresRequest;
  static deserializeBinaryFromReader(message: GetAllStoresRequest, reader: jspb.BinaryReader): GetAllStoresRequest;
}

export namespace GetAllStoresRequest {
  export type AsObject = {
    companyId: string,
    batchSize: number,
    page: number,
  }
}

export class GetAllStoresReply extends jspb.Message {
  clearStoresList(): void;
  getStoresList(): Array<StoreInfo>;
  setStoresList(value: Array<StoreInfo>): void;
  addStores(value?: StoreInfo, index?: number): StoreInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllStoresReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllStoresReply): GetAllStoresReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllStoresReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllStoresReply;
  static deserializeBinaryFromReader(message: GetAllStoresReply, reader: jspb.BinaryReader): GetAllStoresReply;
}

export namespace GetAllStoresReply {
  export type AsObject = {
    storesList: Array<StoreInfo.AsObject>,
  }
}

export class StoresCountRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoresCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StoresCountRequest): StoresCountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoresCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoresCountRequest;
  static deserializeBinaryFromReader(message: StoresCountRequest, reader: jspb.BinaryReader): StoresCountRequest;
}

export namespace StoresCountRequest {
  export type AsObject = {
    companyId: string,
  }
}

export class StoresCountReply extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoresCountReply.AsObject;
  static toObject(includeInstance: boolean, msg: StoresCountReply): StoresCountReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoresCountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoresCountReply;
  static deserializeBinaryFromReader(message: StoresCountReply, reader: jspb.BinaryReader): StoresCountReply;
}

export namespace StoresCountReply {
  export type AsObject = {
    count: number,
  }
}

export class GetStoreKeyRequest extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStoreKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStoreKeyRequest): GetStoreKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStoreKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStoreKeyRequest;
  static deserializeBinaryFromReader(message: GetStoreKeyRequest, reader: jspb.BinaryReader): GetStoreKeyRequest;
}

export namespace GetStoreKeyRequest {
  export type AsObject = {
    storeId: string,
  }
}

export class GetStoreKeyReply extends jspb.Message {
  getApi2cartStoreKey(): string;
  setApi2cartStoreKey(value: string): void;

  hasShopifyCredentials(): boolean;
  clearShopifyCredentials(): void;
  getShopifyCredentials(): ShopifyCredentials | undefined;
  setShopifyCredentials(value?: ShopifyCredentials): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStoreKeyReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetStoreKeyReply): GetStoreKeyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStoreKeyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStoreKeyReply;
  static deserializeBinaryFromReader(message: GetStoreKeyReply, reader: jspb.BinaryReader): GetStoreKeyReply;
}

export namespace GetStoreKeyReply {
  export type AsObject = {
    api2cartStoreKey: string,
    shopifyCredentials?: ShopifyCredentials.AsObject,
  }
}

export class ShopifyCredentials extends jspb.Message {
  getStoreUrl(): string;
  setStoreUrl(value: string): void;

  getAccessToken(): string;
  setAccessToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShopifyCredentials.AsObject;
  static toObject(includeInstance: boolean, msg: ShopifyCredentials): ShopifyCredentials.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShopifyCredentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShopifyCredentials;
  static deserializeBinaryFromReader(message: ShopifyCredentials, reader: jspb.BinaryReader): ShopifyCredentials;
}

export namespace ShopifyCredentials {
  export type AsObject = {
    storeUrl: string,
    accessToken: string,
  }
}

export class SetShopifyAccessTokenRequest extends jspb.Message {
  getStoreUrl(): string;
  setStoreUrl(value: string): void;

  getShopifyAccessToken(): string;
  setShopifyAccessToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetShopifyAccessTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetShopifyAccessTokenRequest): SetShopifyAccessTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetShopifyAccessTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetShopifyAccessTokenRequest;
  static deserializeBinaryFromReader(message: SetShopifyAccessTokenRequest, reader: jspb.BinaryReader): SetShopifyAccessTokenRequest;
}

export namespace SetShopifyAccessTokenRequest {
  export type AsObject = {
    storeUrl: string,
    shopifyAccessToken: string,
  }
}

export class SetShopifyAccessTokenReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetShopifyAccessTokenReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetShopifyAccessTokenReply): SetShopifyAccessTokenReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetShopifyAccessTokenReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetShopifyAccessTokenReply;
  static deserializeBinaryFromReader(message: SetShopifyAccessTokenReply, reader: jspb.BinaryReader): SetShopifyAccessTokenReply;
}

export namespace SetShopifyAccessTokenReply {
  export type AsObject = {
  }
}

export class GetStoreTypeRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStoreTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStoreTypeRequest): GetStoreTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStoreTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStoreTypeRequest;
  static deserializeBinaryFromReader(message: GetStoreTypeRequest, reader: jspb.BinaryReader): GetStoreTypeRequest;
}

export namespace GetStoreTypeRequest {
  export type AsObject = {
    companyId: string,
    storeId: string,
  }
}

export class GetStoreTypeReply extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStoreTypeReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetStoreTypeReply): GetStoreTypeReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStoreTypeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStoreTypeReply;
  static deserializeBinaryFromReader(message: GetStoreTypeReply, reader: jspb.BinaryReader): GetStoreTypeReply;
}

export namespace GetStoreTypeReply {
  export type AsObject = {
    type: string,
  }
}

export class ResetStoreOrdersLastPolledRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetStoreOrdersLastPolledRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetStoreOrdersLastPolledRequest): ResetStoreOrdersLastPolledRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetStoreOrdersLastPolledRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetStoreOrdersLastPolledRequest;
  static deserializeBinaryFromReader(message: ResetStoreOrdersLastPolledRequest, reader: jspb.BinaryReader): ResetStoreOrdersLastPolledRequest;
}

export namespace ResetStoreOrdersLastPolledRequest {
  export type AsObject = {
    companyId: string,
    storeId: string,
  }
}

export class ResetStoreOrdersLastPolledReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetStoreOrdersLastPolledReply.AsObject;
  static toObject(includeInstance: boolean, msg: ResetStoreOrdersLastPolledReply): ResetStoreOrdersLastPolledReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetStoreOrdersLastPolledReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetStoreOrdersLastPolledReply;
  static deserializeBinaryFromReader(message: ResetStoreOrdersLastPolledReply, reader: jspb.BinaryReader): ResetStoreOrdersLastPolledReply;
}

export namespace ResetStoreOrdersLastPolledReply {
  export type AsObject = {
  }
}

export class ResetStoreProductsLastPolledRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetStoreProductsLastPolledRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetStoreProductsLastPolledRequest): ResetStoreProductsLastPolledRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetStoreProductsLastPolledRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetStoreProductsLastPolledRequest;
  static deserializeBinaryFromReader(message: ResetStoreProductsLastPolledRequest, reader: jspb.BinaryReader): ResetStoreProductsLastPolledRequest;
}

export namespace ResetStoreProductsLastPolledRequest {
  export type AsObject = {
    companyId: string,
    storeId: string,
  }
}

export class ResetStoreProductsLastPolledReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetStoreProductsLastPolledReply.AsObject;
  static toObject(includeInstance: boolean, msg: ResetStoreProductsLastPolledReply): ResetStoreProductsLastPolledReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetStoreProductsLastPolledReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetStoreProductsLastPolledReply;
  static deserializeBinaryFromReader(message: ResetStoreProductsLastPolledReply, reader: jspb.BinaryReader): ResetStoreProductsLastPolledReply;
}

export namespace ResetStoreProductsLastPolledReply {
  export type AsObject = {
  }
}

export class EtsyAuthTokenRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EtsyAuthTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EtsyAuthTokenRequest): EtsyAuthTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EtsyAuthTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EtsyAuthTokenRequest;
  static deserializeBinaryFromReader(message: EtsyAuthTokenRequest, reader: jspb.BinaryReader): EtsyAuthTokenRequest;
}

export namespace EtsyAuthTokenRequest {
  export type AsObject = {
  }
}

export class EtsyAuthTokenReply extends jspb.Message {
  getLoginUrl(): string;
  setLoginUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EtsyAuthTokenReply.AsObject;
  static toObject(includeInstance: boolean, msg: EtsyAuthTokenReply): EtsyAuthTokenReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EtsyAuthTokenReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EtsyAuthTokenReply;
  static deserializeBinaryFromReader(message: EtsyAuthTokenReply, reader: jspb.BinaryReader): EtsyAuthTokenReply;
}

export namespace EtsyAuthTokenReply {
  export type AsObject = {
    loginUrl: string,
  }
}

export class BillingInfoRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BillingInfoRequest): BillingInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingInfoRequest;
  static deserializeBinaryFromReader(message: BillingInfoRequest, reader: jspb.BinaryReader): BillingInfoRequest;
}

export namespace BillingInfoRequest {
  export type AsObject = {
    companyId: string,
  }
}

export class BillingInfoReply extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getStripeId(): string;
  setStripeId(value: string): void;

  hasBillingAddress(): boolean;
  clearBillingAddress(): void;
  getBillingAddress(): BillingAddress | undefined;
  setBillingAddress(value?: BillingAddress): void;

  clearCardsList(): void;
  getCardsList(): Array<Card>;
  setCardsList(value: Array<Card>): void;
  addCards(value?: Card, index?: number): Card;

  hasCurrentSubscription(): boolean;
  clearCurrentSubscription(): void;
  getCurrentSubscription(): CurrentSubscription | undefined;
  setCurrentSubscription(value?: CurrentSubscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: BillingInfoReply): BillingInfoReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingInfoReply;
  static deserializeBinaryFromReader(message: BillingInfoReply, reader: jspb.BinaryReader): BillingInfoReply;
}

export namespace BillingInfoReply {
  export type AsObject = {
    name: string,
    stripeId: string,
    billingAddress?: BillingAddress.AsObject,
    cardsList: Array<Card.AsObject>,
    currentSubscription?: CurrentSubscription.AsObject,
  }
}

export class BillingAddress extends jspb.Message {
  getLine1(): string;
  setLine1(value: string): void;

  getLine2(): string;
  setLine2(value: string): void;

  getPostalCode(): string;
  setPostalCode(value: string): void;

  getState(): string;
  setState(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingAddress.AsObject;
  static toObject(includeInstance: boolean, msg: BillingAddress): BillingAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingAddress;
  static deserializeBinaryFromReader(message: BillingAddress, reader: jspb.BinaryReader): BillingAddress;
}

export namespace BillingAddress {
  export type AsObject = {
    line1: string,
    line2: string,
    postalCode: string,
    state: string,
    city: string,
    country: string,
  }
}

export class CurrentSubscription extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getInterval(): string;
  setInterval(value: string): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  clearProductsList(): void;
  getProductsList(): Array<Product>;
  setProductsList(value: Array<Product>): void;
  addProducts(value?: Product, index?: number): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentSubscription): CurrentSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentSubscription;
  static deserializeBinaryFromReader(message: CurrentSubscription, reader: jspb.BinaryReader): CurrentSubscription;
}

export namespace CurrentSubscription {
  export type AsObject = {
    status: string,
    amount: number,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    interval: string,
    currency: string,
    productsList: Array<Product.AsObject>,
  }
}

export class Product extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    productId: string,
    name: string,
    quantity: number,
  }
}

export class Card extends jspb.Message {
  getStripeId(): string;
  setStripeId(value: string): void;

  getBrand(): string;
  setBrand(value: string): void;

  getLast4Digit(): string;
  setLast4Digit(value: string): void;

  getExpiryMonth(): string;
  setExpiryMonth(value: string): void;

  getExpiryYear(): number;
  setExpiryYear(value: number): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Card.AsObject;
  static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Card;
  static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
}

export namespace Card {
  export type AsObject = {
    stripeId: string,
    brand: string,
    last4Digit: string,
    expiryMonth: string,
    expiryYear: number,
    isDefault: boolean,
  }
}

export class SubscriptionUpdateRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getInterval(): string;
  setInterval(value: string): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getProducts(): Uint8Array | string;
  getProducts_asU8(): Uint8Array;
  getProducts_asB64(): string;
  setProducts(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionUpdateRequest): SubscriptionUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionUpdateRequest;
  static deserializeBinaryFromReader(message: SubscriptionUpdateRequest, reader: jspb.BinaryReader): SubscriptionUpdateRequest;
}

export namespace SubscriptionUpdateRequest {
  export type AsObject = {
    customerId: string,
    subscriptionId: string,
    amount: number,
    status: string,
    interval: string,
    currency: string,
    products: Uint8Array | string,
  }
}

export class SubscriptionUpdateReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionUpdateReply.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionUpdateReply): SubscriptionUpdateReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionUpdateReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionUpdateReply;
  static deserializeBinaryFromReader(message: SubscriptionUpdateReply, reader: jspb.BinaryReader): SubscriptionUpdateReply;
}

export namespace SubscriptionUpdateReply {
  export type AsObject = {
  }
}

export class SubscriptionAddRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getInterval(): string;
  setInterval(value: string): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getInvoiceId(): string;
  setInvoiceId(value: string): void;

  getProducts(): Uint8Array | string;
  getProducts_asU8(): Uint8Array;
  getProducts_asB64(): string;
  setProducts(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionAddRequest): SubscriptionAddRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionAddRequest;
  static deserializeBinaryFromReader(message: SubscriptionAddRequest, reader: jspb.BinaryReader): SubscriptionAddRequest;
}

export namespace SubscriptionAddRequest {
  export type AsObject = {
    customerId: string,
    subscriptionId: string,
    amount: number,
    status: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    interval: string,
    currency: string,
    invoiceId: string,
    products: Uint8Array | string,
  }
}

export class SubscriptionAddReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionAddReply.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionAddReply): SubscriptionAddReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionAddReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionAddReply;
  static deserializeBinaryFromReader(message: SubscriptionAddReply, reader: jspb.BinaryReader): SubscriptionAddReply;
}

export namespace SubscriptionAddReply {
  export type AsObject = {
  }
}

export class SubscriptionDeleteRequest extends jspb.Message {
  getSubscriptionId(): string;
  setSubscriptionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionDeleteRequest): SubscriptionDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionDeleteRequest;
  static deserializeBinaryFromReader(message: SubscriptionDeleteRequest, reader: jspb.BinaryReader): SubscriptionDeleteRequest;
}

export namespace SubscriptionDeleteRequest {
  export type AsObject = {
    subscriptionId: string,
  }
}

export class SubscriptionDeleteReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionDeleteReply.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionDeleteReply): SubscriptionDeleteReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionDeleteReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionDeleteReply;
  static deserializeBinaryFromReader(message: SubscriptionDeleteReply, reader: jspb.BinaryReader): SubscriptionDeleteReply;
}

export namespace SubscriptionDeleteReply {
  export type AsObject = {
  }
}

export class UpdateBillingAddressRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getLine1(): string;
  setLine1(value: string): void;

  getLine2(): string;
  setLine2(value: string): void;

  getPostalCode(): string;
  setPostalCode(value: string): void;

  getState(): string;
  setState(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBillingAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBillingAddressRequest): UpdateBillingAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBillingAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBillingAddressRequest;
  static deserializeBinaryFromReader(message: UpdateBillingAddressRequest, reader: jspb.BinaryReader): UpdateBillingAddressRequest;
}

export namespace UpdateBillingAddressRequest {
  export type AsObject = {
    customerId: string,
    line1: string,
    line2: string,
    postalCode: string,
    state: string,
    city: string,
    country: string,
  }
}

export class UpdateBillingAddressReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBillingAddressReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBillingAddressReply): UpdateBillingAddressReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBillingAddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBillingAddressReply;
  static deserializeBinaryFromReader(message: UpdateBillingAddressReply, reader: jspb.BinaryReader): UpdateBillingAddressReply;
}

export namespace UpdateBillingAddressReply {
  export type AsObject = {
  }
}

export class AddCardRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getStripeId(): string;
  setStripeId(value: string): void;

  getBrand(): string;
  setBrand(value: string): void;

  getLast4Digit(): string;
  setLast4Digit(value: string): void;

  getExpiryMonth(): number;
  setExpiryMonth(value: number): void;

  getExpiryYear(): number;
  setExpiryYear(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCardRequest): AddCardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCardRequest;
  static deserializeBinaryFromReader(message: AddCardRequest, reader: jspb.BinaryReader): AddCardRequest;
}

export namespace AddCardRequest {
  export type AsObject = {
    customerId: string,
    stripeId: string,
    brand: string,
    last4Digit: string,
    expiryMonth: number,
    expiryYear: number,
  }
}

export class AddCardReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCardReply.AsObject;
  static toObject(includeInstance: boolean, msg: AddCardReply): AddCardReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddCardReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCardReply;
  static deserializeBinaryFromReader(message: AddCardReply, reader: jspb.BinaryReader): AddCardReply;
}

export namespace AddCardReply {
  export type AsObject = {
  }
}

export class UpdateCardRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getStripeId(): string;
  setStripeId(value: string): void;

  getBrand(): string;
  setBrand(value: string): void;

  getLast4Digit(): string;
  setLast4Digit(value: string): void;

  getExpiryMonth(): number;
  setExpiryMonth(value: number): void;

  getExpiryYear(): number;
  setExpiryYear(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCardRequest): UpdateCardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCardRequest;
  static deserializeBinaryFromReader(message: UpdateCardRequest, reader: jspb.BinaryReader): UpdateCardRequest;
}

export namespace UpdateCardRequest {
  export type AsObject = {
    customerId: string,
    stripeId: string,
    brand: string,
    last4Digit: string,
    expiryMonth: number,
    expiryYear: number,
  }
}

export class UpdateCardReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCardReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCardReply): UpdateCardReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCardReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCardReply;
  static deserializeBinaryFromReader(message: UpdateCardReply, reader: jspb.BinaryReader): UpdateCardReply;
}

export namespace UpdateCardReply {
  export type AsObject = {
  }
}

export class IntDeleteCardRequest extends jspb.Message {
  getStripeCardId(): string;
  setStripeCardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntDeleteCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IntDeleteCardRequest): IntDeleteCardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntDeleteCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntDeleteCardRequest;
  static deserializeBinaryFromReader(message: IntDeleteCardRequest, reader: jspb.BinaryReader): IntDeleteCardRequest;
}

export namespace IntDeleteCardRequest {
  export type AsObject = {
    stripeCardId: string,
  }
}

export class IntDeleteCardReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntDeleteCardReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntDeleteCardReply): IntDeleteCardReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntDeleteCardReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntDeleteCardReply;
  static deserializeBinaryFromReader(message: IntDeleteCardReply, reader: jspb.BinaryReader): IntDeleteCardReply;
}

export namespace IntDeleteCardReply {
  export type AsObject = {
  }
}

export class UpdateCompanyBillingAddressRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getLine1(): string;
  setLine1(value: string): void;

  getLine2(): string;
  setLine2(value: string): void;

  getPostalCode(): string;
  setPostalCode(value: string): void;

  getState(): string;
  setState(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCompanyBillingAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCompanyBillingAddressRequest): UpdateCompanyBillingAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCompanyBillingAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCompanyBillingAddressRequest;
  static deserializeBinaryFromReader(message: UpdateCompanyBillingAddressRequest, reader: jspb.BinaryReader): UpdateCompanyBillingAddressRequest;
}

export namespace UpdateCompanyBillingAddressRequest {
  export type AsObject = {
    companyId: string,
    line1: string,
    line2: string,
    postalCode: string,
    state: string,
    city: string,
    country: string,
  }
}

export class UpdateCompanyBillingAddressReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCompanyBillingAddressReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCompanyBillingAddressReply): UpdateCompanyBillingAddressReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCompanyBillingAddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCompanyBillingAddressReply;
  static deserializeBinaryFromReader(message: UpdateCompanyBillingAddressReply, reader: jspb.BinaryReader): UpdateCompanyBillingAddressReply;
}

export namespace UpdateCompanyBillingAddressReply {
  export type AsObject = {
  }
}

export class SetDefaultCardRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getCardId(): string;
  setCardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultCardRequest): SetDefaultCardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultCardRequest;
  static deserializeBinaryFromReader(message: SetDefaultCardRequest, reader: jspb.BinaryReader): SetDefaultCardRequest;
}

export namespace SetDefaultCardRequest {
  export type AsObject = {
    companyId: string,
    cardId: string,
  }
}

export class SetDefaultCardReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultCardReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultCardReply): SetDefaultCardReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultCardReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultCardReply;
  static deserializeBinaryFromReader(message: SetDefaultCardReply, reader: jspb.BinaryReader): SetDefaultCardReply;
}

export namespace SetDefaultCardReply {
  export type AsObject = {
  }
}

export class IntCreateInvoiceRequest extends jspb.Message {
  getStripeCustomerId(): string;
  setStripeCustomerId(value: string): void;

  getInvoiceStripeId(): string;
  setInvoiceStripeId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntCreateInvoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IntCreateInvoiceRequest): IntCreateInvoiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntCreateInvoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntCreateInvoiceRequest;
  static deserializeBinaryFromReader(message: IntCreateInvoiceRequest, reader: jspb.BinaryReader): IntCreateInvoiceRequest;
}

export namespace IntCreateInvoiceRequest {
  export type AsObject = {
    stripeCustomerId: string,
    invoiceStripeId: string,
    status: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class IntCreateInvoiceReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntCreateInvoiceReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntCreateInvoiceReply): IntCreateInvoiceReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntCreateInvoiceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntCreateInvoiceReply;
  static deserializeBinaryFromReader(message: IntCreateInvoiceReply, reader: jspb.BinaryReader): IntCreateInvoiceReply;
}

export namespace IntCreateInvoiceReply {
  export type AsObject = {
  }
}

export class IntUpdateInvoiceRequest extends jspb.Message {
  getInvoiceStripeId(): string;
  setInvoiceStripeId(value: string): void;

  getInvoiceNumber(): string;
  setInvoiceNumber(value: string): void;

  getTotal(): number;
  setTotal(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getPdfUrl(): string;
  setPdfUrl(value: string): void;

  getPaymentType(): string;
  setPaymentType(value: string): void;

  getCustomerId(): string;
  setCustomerId(value: string): void;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntUpdateInvoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IntUpdateInvoiceRequest): IntUpdateInvoiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntUpdateInvoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntUpdateInvoiceRequest;
  static deserializeBinaryFromReader(message: IntUpdateInvoiceRequest, reader: jspb.BinaryReader): IntUpdateInvoiceRequest;
}

export namespace IntUpdateInvoiceRequest {
  export type AsObject = {
    invoiceStripeId: string,
    invoiceNumber: string,
    total: number,
    status: string,
    pdfUrl: string,
    paymentType: string,
    customerId: string,
    subscriptionId: string,
  }
}

export class IntUpdateInvoiceReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntUpdateInvoiceReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntUpdateInvoiceReply): IntUpdateInvoiceReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntUpdateInvoiceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntUpdateInvoiceReply;
  static deserializeBinaryFromReader(message: IntUpdateInvoiceReply, reader: jspb.BinaryReader): IntUpdateInvoiceReply;
}

export namespace IntUpdateInvoiceReply {
  export type AsObject = {
  }
}

export class BillingInvoiceReq extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingInvoiceReq.AsObject;
  static toObject(includeInstance: boolean, msg: BillingInvoiceReq): BillingInvoiceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingInvoiceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingInvoiceReq;
  static deserializeBinaryFromReader(message: BillingInvoiceReq, reader: jspb.BinaryReader): BillingInvoiceReq;
}

export namespace BillingInvoiceReq {
  export type AsObject = {
    companyId: string,
  }
}

export class BillingInvoiceReply extends jspb.Message {
  clearInvoicesList(): void;
  getInvoicesList(): Array<Invoice>;
  setInvoicesList(value: Array<Invoice>): void;
  addInvoices(value?: Invoice, index?: number): Invoice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingInvoiceReply.AsObject;
  static toObject(includeInstance: boolean, msg: BillingInvoiceReply): BillingInvoiceReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingInvoiceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingInvoiceReply;
  static deserializeBinaryFromReader(message: BillingInvoiceReply, reader: jspb.BinaryReader): BillingInvoiceReply;
}

export namespace BillingInvoiceReply {
  export type AsObject = {
    invoicesList: Array<Invoice.AsObject>,
  }
}

export class Invoice extends jspb.Message {
  getInvoiceNumber(): string;
  setInvoiceNumber(value: string): void;

  getTotal(): number;
  setTotal(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getPdfUrl(): string;
  setPdfUrl(value: string): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPaymentType(): string;
  setPaymentType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoice.AsObject;
  static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoice;
  static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
  export type AsObject = {
    invoiceNumber: string,
    total: number,
    status: string,
    pdfUrl: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    paymentType: string,
  }
}

export class DeleteCardRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getCardId(): string;
  setCardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCardRequest): DeleteCardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCardRequest;
  static deserializeBinaryFromReader(message: DeleteCardRequest, reader: jspb.BinaryReader): DeleteCardRequest;
}

export namespace DeleteCardRequest {
  export type AsObject = {
    companyId: string,
    cardId: string,
  }
}

export class DeleteCardReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCardReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCardReply): DeleteCardReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCardReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCardReply;
  static deserializeBinaryFromReader(message: DeleteCardReply, reader: jspb.BinaryReader): DeleteCardReply;
}

export namespace DeleteCardReply {
  export type AsObject = {
  }
}

export class IntAllStoreListReq extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntAllStoreListReq.AsObject;
  static toObject(includeInstance: boolean, msg: IntAllStoreListReq): IntAllStoreListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntAllStoreListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntAllStoreListReq;
  static deserializeBinaryFromReader(message: IntAllStoreListReq, reader: jspb.BinaryReader): IntAllStoreListReq;
}

export namespace IntAllStoreListReq {
  export type AsObject = {
    companyId: string,
  }
}

export class IntAllStoreListReply extends jspb.Message {
  clearStoresList(): void;
  getStoresList(): Array<string>;
  setStoresList(value: Array<string>): void;
  addStores(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntAllStoreListReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntAllStoreListReply): IntAllStoreListReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntAllStoreListReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntAllStoreListReply;
  static deserializeBinaryFromReader(message: IntAllStoreListReply, reader: jspb.BinaryReader): IntAllStoreListReply;
}

export namespace IntAllStoreListReply {
  export type AsObject = {
    storesList: Array<string>,
  }
}

export class IntUpdateCompanyUserCountReq extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getAdd(): boolean;
  setAdd(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntUpdateCompanyUserCountReq.AsObject;
  static toObject(includeInstance: boolean, msg: IntUpdateCompanyUserCountReq): IntUpdateCompanyUserCountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntUpdateCompanyUserCountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntUpdateCompanyUserCountReq;
  static deserializeBinaryFromReader(message: IntUpdateCompanyUserCountReq, reader: jspb.BinaryReader): IntUpdateCompanyUserCountReq;
}

export namespace IntUpdateCompanyUserCountReq {
  export type AsObject = {
    companyId: string,
    add: boolean,
  }
}

export class IntUpdateCompanyUserCountReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntUpdateCompanyUserCountReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntUpdateCompanyUserCountReply): IntUpdateCompanyUserCountReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntUpdateCompanyUserCountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntUpdateCompanyUserCountReply;
  static deserializeBinaryFromReader(message: IntUpdateCompanyUserCountReply, reader: jspb.BinaryReader): IntUpdateCompanyUserCountReply;
}

export namespace IntUpdateCompanyUserCountReply {
  export type AsObject = {
  }
}

export class IntUpdateCompanyOrderCountReq extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): void;

  getOrderCount(): number;
  setOrderCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntUpdateCompanyOrderCountReq.AsObject;
  static toObject(includeInstance: boolean, msg: IntUpdateCompanyOrderCountReq): IntUpdateCompanyOrderCountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntUpdateCompanyOrderCountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntUpdateCompanyOrderCountReq;
  static deserializeBinaryFromReader(message: IntUpdateCompanyOrderCountReq, reader: jspb.BinaryReader): IntUpdateCompanyOrderCountReq;
}

export namespace IntUpdateCompanyOrderCountReq {
  export type AsObject = {
    storeId: string,
    orderCount: number,
  }
}

export class IntUpdateCompanyOrderCountReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntUpdateCompanyOrderCountReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntUpdateCompanyOrderCountReply): IntUpdateCompanyOrderCountReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntUpdateCompanyOrderCountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntUpdateCompanyOrderCountReply;
  static deserializeBinaryFromReader(message: IntUpdateCompanyOrderCountReply, reader: jspb.BinaryReader): IntUpdateCompanyOrderCountReply;
}

export namespace IntUpdateCompanyOrderCountReply {
  export type AsObject = {
  }
}

export class IntGetStoreInfoBulkReq extends jspb.Message {
  clearStoreIdsList(): void;
  getStoreIdsList(): Array<string>;
  setStoreIdsList(value: Array<string>): void;
  addStoreIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntGetStoreInfoBulkReq.AsObject;
  static toObject(includeInstance: boolean, msg: IntGetStoreInfoBulkReq): IntGetStoreInfoBulkReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntGetStoreInfoBulkReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntGetStoreInfoBulkReq;
  static deserializeBinaryFromReader(message: IntGetStoreInfoBulkReq, reader: jspb.BinaryReader): IntGetStoreInfoBulkReq;
}

export namespace IntGetStoreInfoBulkReq {
  export type AsObject = {
    storeIdsList: Array<string>,
  }
}

export class IntGetStoreInfoBulkReply extends jspb.Message {
  clearStoresList(): void;
  getStoresList(): Array<StoreInfo>;
  setStoresList(value: Array<StoreInfo>): void;
  addStores(value?: StoreInfo, index?: number): StoreInfo;

  clearLocationsList(): void;
  getLocationsList(): Array<ShopifyWareHouse>;
  setLocationsList(value: Array<ShopifyWareHouse>): void;
  addLocations(value?: ShopifyWareHouse, index?: number): ShopifyWareHouse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntGetStoreInfoBulkReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntGetStoreInfoBulkReply): IntGetStoreInfoBulkReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntGetStoreInfoBulkReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntGetStoreInfoBulkReply;
  static deserializeBinaryFromReader(message: IntGetStoreInfoBulkReply, reader: jspb.BinaryReader): IntGetStoreInfoBulkReply;
}

export namespace IntGetStoreInfoBulkReply {
  export type AsObject = {
    storesList: Array<StoreInfo.AsObject>,
    locationsList: Array<ShopifyWareHouse.AsObject>,
  }
}

export class ShopifyWareHouse extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getShopifyLocationId(): number;
  setShopifyLocationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShopifyWareHouse.AsObject;
  static toObject(includeInstance: boolean, msg: ShopifyWareHouse): ShopifyWareHouse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShopifyWareHouse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShopifyWareHouse;
  static deserializeBinaryFromReader(message: ShopifyWareHouse, reader: jspb.BinaryReader): ShopifyWareHouse;
}

export namespace ShopifyWareHouse {
  export type AsObject = {
    companyId: string,
    shopifyLocationId: number,
  }
}

