// package: courierapi
// file: courierapi.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class BatchCountReq extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCountReq.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCountReq): BatchCountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchCountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCountReq;
  static deserializeBinaryFromReader(message: BatchCountReq, reader: jspb.BinaryReader): BatchCountReq;
}

export namespace BatchCountReq {
  export type AsObject = {
    companyId: string,
  }
}

export class BatchCountReply extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCountReply.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCountReply): BatchCountReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchCountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCountReply;
  static deserializeBinaryFromReader(message: BatchCountReply, reader: jspb.BinaryReader): BatchCountReply;
}

export namespace BatchCountReply {
  export type AsObject = {
    count: number,
  }
}

export class BatchShipmentCountReq extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getBatchId(): string;
  setBatchId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchShipmentCountReq.AsObject;
  static toObject(includeInstance: boolean, msg: BatchShipmentCountReq): BatchShipmentCountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchShipmentCountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchShipmentCountReq;
  static deserializeBinaryFromReader(message: BatchShipmentCountReq, reader: jspb.BinaryReader): BatchShipmentCountReq;
}

export namespace BatchShipmentCountReq {
  export type AsObject = {
    companyId: string,
    batchId: string,
  }
}

export class BatchShipmentCountReply extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchShipmentCountReply.AsObject;
  static toObject(includeInstance: boolean, msg: BatchShipmentCountReply): BatchShipmentCountReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchShipmentCountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchShipmentCountReply;
  static deserializeBinaryFromReader(message: BatchShipmentCountReply, reader: jspb.BinaryReader): BatchShipmentCountReply;
}

export namespace BatchShipmentCountReply {
  export type AsObject = {
    count: number,
  }
}

export class ListBatchesReq extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getPaginationCursor(): string;
  setPaginationCursor(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBatchesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListBatchesReq): ListBatchesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBatchesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBatchesReq;
  static deserializeBinaryFromReader(message: ListBatchesReq, reader: jspb.BinaryReader): ListBatchesReq;
}

export namespace ListBatchesReq {
  export type AsObject = {
    companyId: string,
    paginationCursor: string,
    pageSize: number,
  }
}

export class ListBatchesReply extends jspb.Message {
  clearBatchesList(): void;
  getBatchesList(): Array<BatchInfo>;
  setBatchesList(value: Array<BatchInfo>): void;
  addBatches(value?: BatchInfo, index?: number): BatchInfo;

  getNextPageCursor(): string;
  setNextPageCursor(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBatchesReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListBatchesReply): ListBatchesReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBatchesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBatchesReply;
  static deserializeBinaryFromReader(message: ListBatchesReply, reader: jspb.BinaryReader): ListBatchesReply;
}

export namespace ListBatchesReply {
  export type AsObject = {
    batchesList: Array<BatchInfo.AsObject>,
    nextPageCursor: string,
    pageSize: number,
  }
}

export class ListBatchShipmentsReq extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getBatchId(): string;
  setBatchId(value: string): void;

  getPaginationCursor(): string;
  setPaginationCursor(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBatchShipmentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListBatchShipmentsReq): ListBatchShipmentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBatchShipmentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBatchShipmentsReq;
  static deserializeBinaryFromReader(message: ListBatchShipmentsReq, reader: jspb.BinaryReader): ListBatchShipmentsReq;
}

export namespace ListBatchShipmentsReq {
  export type AsObject = {
    companyId: string,
    batchId: string,
    paginationCursor: string,
    pageSize: number,
  }
}

export class ListBatchShipmentsReply extends jspb.Message {
  clearShipmentsList(): void;
  getShipmentsList(): Array<ShipmentBatchInfo>;
  setShipmentsList(value: Array<ShipmentBatchInfo>): void;
  addShipments(value?: ShipmentBatchInfo, index?: number): ShipmentBatchInfo;

  getNextPageCursor(): string;
  setNextPageCursor(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBatchShipmentsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListBatchShipmentsReply): ListBatchShipmentsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBatchShipmentsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBatchShipmentsReply;
  static deserializeBinaryFromReader(message: ListBatchShipmentsReply, reader: jspb.BinaryReader): ListBatchShipmentsReply;
}

export namespace ListBatchShipmentsReply {
  export type AsObject = {
    shipmentsList: Array<ShipmentBatchInfo.AsObject>,
    nextPageCursor: string,
    pageSize: number,
  }
}

export class ShipmentBatchInfo extends jspb.Message {
  hasSuccess(): boolean;
  clearSuccess(): void;
  getSuccess(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setSuccess(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasShipment(): boolean;
  clearShipment(): void;
  getShipment(): ShipmentLite | undefined;
  setShipment(value?: ShipmentLite): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShipmentBatchInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ShipmentBatchInfo): ShipmentBatchInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShipmentBatchInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShipmentBatchInfo;
  static deserializeBinaryFromReader(message: ShipmentBatchInfo, reader: jspb.BinaryReader): ShipmentBatchInfo;
}

export namespace ShipmentBatchInfo {
  export type AsObject = {
    success?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    shipment?: ShipmentLite.AsObject,
  }
}

export class ShipmentLite extends jspb.Message {
  getOrderNumber(): string;
  setOrderNumber(value: string): void;

  getLabelUrl(): string;
  setLabelUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShipmentLite.AsObject;
  static toObject(includeInstance: boolean, msg: ShipmentLite): ShipmentLite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShipmentLite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShipmentLite;
  static deserializeBinaryFromReader(message: ShipmentLite, reader: jspb.BinaryReader): ShipmentLite;
}

export namespace ShipmentLite {
  export type AsObject = {
    orderNumber: string,
    labelUrl: string,
  }
}

export class BatchInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPdfUrl(): string;
  setPdfUrl(value: string): void;

  getShipmentCount(): number;
  setShipmentCount(value: number): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BatchInfo): BatchInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchInfo;
  static deserializeBinaryFromReader(message: BatchInfo, reader: jspb.BinaryReader): BatchInfo;
}

export namespace BatchInfo {
  export type AsObject = {
    id: string,
    pdfUrl: string,
    shipmentCount: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
  }
}

export class CreateBatchLabelRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  clearBatchLabelsList(): void;
  getBatchLabelsList(): Array<BatchLabelInfo>;
  setBatchLabelsList(value: Array<BatchLabelInfo>): void;
  addBatchLabels(value?: BatchLabelInfo, index?: number): BatchLabelInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBatchLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBatchLabelRequest): CreateBatchLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBatchLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBatchLabelRequest;
  static deserializeBinaryFromReader(message: CreateBatchLabelRequest, reader: jspb.BinaryReader): CreateBatchLabelRequest;
}

export namespace CreateBatchLabelRequest {
  export type AsObject = {
    companyId: string,
    batchLabelsList: Array<BatchLabelInfo.AsObject>,
  }
}

export class BatchLabelInfo extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): void;

  getOrderNumber(): string;
  setOrderNumber(value: string): void;

  getCourier(): string;
  setCourier(value: string): void;

  getService(): string;
  setService(value: string): void;

  hasShipment(): boolean;
  clearShipment(): void;
  getShipment(): Shipment | undefined;
  setShipment(value?: Shipment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchLabelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BatchLabelInfo): BatchLabelInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchLabelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchLabelInfo;
  static deserializeBinaryFromReader(message: BatchLabelInfo, reader: jspb.BinaryReader): BatchLabelInfo;
}

export namespace BatchLabelInfo {
  export type AsObject = {
    storeId: string,
    orderNumber: string,
    courier: string,
    service: string,
    shipment?: Shipment.AsObject,
  }
}

export class CreateBatchLabelReply extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getMessage(): string;
  setMessage(value: string): void;

  getBatchId(): string;
  setBatchId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBatchLabelReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBatchLabelReply): CreateBatchLabelReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBatchLabelReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBatchLabelReply;
  static deserializeBinaryFromReader(message: CreateBatchLabelReply, reader: jspb.BinaryReader): CreateBatchLabelReply;
}

export namespace CreateBatchLabelReply {
  export type AsObject = {
    success: boolean,
    message: string,
    batchId: string,
  }
}

export class CreateLabelRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getOrderNumber(): string;
  setOrderNumber(value: string): void;

  getCourier(): string;
  setCourier(value: string): void;

  getService(): string;
  setService(value: string): void;

  hasShipment(): boolean;
  clearShipment(): void;
  getShipment(): Shipment | undefined;
  setShipment(value?: Shipment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelRequest): CreateLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelRequest;
  static deserializeBinaryFromReader(message: CreateLabelRequest, reader: jspb.BinaryReader): CreateLabelRequest;
}

export namespace CreateLabelRequest {
  export type AsObject = {
    companyId: string,
    storeId: string,
    orderNumber: string,
    courier: string,
    service: string,
    shipment?: Shipment.AsObject,
  }
}

export class Shipment extends jspb.Message {
  hasCollectionDate(): boolean;
  clearCollectionDate(): void;
  getCollectionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCollectionDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDeliveryInstructions(): string;
  setDeliveryInstructions(value: string): void;

  hasShipFrom(): boolean;
  clearShipFrom(): void;
  getShipFrom(): ShipFrom | undefined;
  setShipFrom(value?: ShipFrom): void;

  hasShipTo(): boolean;
  clearShipTo(): void;
  getShipTo(): ShipTo | undefined;
  setShipTo(value?: ShipTo): void;

  clearParcelsList(): void;
  getParcelsList(): Array<Parcel>;
  setParcelsList(value: Array<Parcel>): void;
  addParcels(value?: Parcel, index?: number): Parcel;

  getGenerateInvoice(): boolean;
  setGenerateInvoice(value: boolean): void;

  getGeneratePackingSlip(): boolean;
  setGeneratePackingSlip(value: boolean): void;

  getDcServiceId(): string;
  setDcServiceId(value: string): void;

  getCourierSpecificsMap(): jspb.Map<string, string>;
  clearCourierSpecificsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Shipment.AsObject;
  static toObject(includeInstance: boolean, msg: Shipment): Shipment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Shipment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Shipment;
  static deserializeBinaryFromReader(message: Shipment, reader: jspb.BinaryReader): Shipment;
}

export namespace Shipment {
  export type AsObject = {
    collectionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deliveryInstructions: string,
    shipFrom?: ShipFrom.AsObject,
    shipTo?: ShipTo.AsObject,
    parcelsList: Array<Parcel.AsObject>,
    generateInvoice: boolean,
    generatePackingSlip: boolean,
    dcServiceId: string,
    courierSpecificsMap: Array<[string, string]>,
  }
}

export class Parcel extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getLength(): number;
  setLength(value: number): void;

  getUnit(): string;
  setUnit(value: string): void;

  clearItemsList(): void;
  getItemsList(): Array<Item>;
  setItemsList(value: Array<Item>): void;
  addItems(value?: Item, index?: number): Item;

  getWeight(): number;
  setWeight(value: number): void;

  getWeightUnit(): string;
  setWeightUnit(value: string): void;

  getPackagingWeight(): number;
  setPackagingWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Parcel.AsObject;
  static toObject(includeInstance: boolean, msg: Parcel): Parcel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Parcel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Parcel;
  static deserializeBinaryFromReader(message: Parcel, reader: jspb.BinaryReader): Parcel;
}

export namespace Parcel {
  export type AsObject = {
    width: number,
    height: number,
    length: number,
    unit: string,
    itemsList: Array<Item.AsObject>,
    weight: number,
    weightUnit: string,
    packagingWeight: number,
  }
}

export class Item extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): void;

  getOriginCountry(): string;
  setOriginCountry(value: string): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getValue(): number;
  setValue(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getWeight(): number;
  setWeight(value: number): void;

  getWeightUnit(): string;
  setWeightUnit(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getHsCode(): string;
  setHsCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    description: string,
    originCountry: string,
    quantity: number,
    value: number,
    currency: string,
    weight: number,
    weightUnit: string,
    sku: string,
    hsCode: string,
  }
}

export class ShipInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getCompanyName(): string;
  setCompanyName(value: string): void;

  getAddress1(): string;
  setAddress1(value: string): void;

  getAddress2(): string;
  setAddress2(value: string): void;

  getAddress3(): string;
  setAddress3(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getPostcode(): string;
  setPostcode(value: string): void;

  getCounty(): string;
  setCounty(value: string): void;

  getCountryIso(): string;
  setCountryIso(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShipInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ShipInfo): ShipInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShipInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShipInfo;
  static deserializeBinaryFromReader(message: ShipInfo, reader: jspb.BinaryReader): ShipInfo;
}

export namespace ShipInfo {
  export type AsObject = {
    name: string,
    phone: string,
    email: string,
    companyName: string,
    address1: string,
    address2: string,
    address3: string,
    city: string,
    postcode: string,
    county: string,
    countryIso: string,
  }
}

export class ShipTo extends jspb.Message {
  hasShipInfo(): boolean;
  clearShipInfo(): void;
  getShipInfo(): ShipInfo | undefined;
  setShipInfo(value?: ShipInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShipTo.AsObject;
  static toObject(includeInstance: boolean, msg: ShipTo): ShipTo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShipTo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShipTo;
  static deserializeBinaryFromReader(message: ShipTo, reader: jspb.BinaryReader): ShipTo;
}

export namespace ShipTo {
  export type AsObject = {
    shipInfo?: ShipInfo.AsObject,
  }
}

export class ShipFrom extends jspb.Message {
  hasShipInfo(): boolean;
  clearShipInfo(): void;
  getShipInfo(): ShipInfo | undefined;
  setShipInfo(value?: ShipInfo): void;

  getTaxId(): string;
  setTaxId(value: string): void;

  getEoriId(): string;
  setEoriId(value: string): void;

  getCompanyNumber(): string;
  setCompanyNumber(value: string): void;

  getIossNumber(): string;
  setIossNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShipFrom.AsObject;
  static toObject(includeInstance: boolean, msg: ShipFrom): ShipFrom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShipFrom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShipFrom;
  static deserializeBinaryFromReader(message: ShipFrom, reader: jspb.BinaryReader): ShipFrom;
}

export namespace ShipFrom {
  export type AsObject = {
    shipInfo?: ShipInfo.AsObject,
    taxId: string,
    eoriId: string,
    companyNumber: string,
    iossNumber: string,
  }
}

export class CreateLabelReply extends jspb.Message {
  getLabelUrl(): string;
  setLabelUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelReply): CreateLabelReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLabelReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelReply;
  static deserializeBinaryFromReader(message: CreateLabelReply, reader: jspb.BinaryReader): CreateLabelReply;
}

export namespace CreateLabelReply {
  export type AsObject = {
    labelUrl: string,
  }
}

export class GetShipmentRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getOrderNumber(): string;
  setOrderNumber(value: string): void;

  getLatestOnly(): boolean;
  setLatestOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetShipmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetShipmentRequest): GetShipmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetShipmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetShipmentRequest;
  static deserializeBinaryFromReader(message: GetShipmentRequest, reader: jspb.BinaryReader): GetShipmentRequest;
}

export namespace GetShipmentRequest {
  export type AsObject = {
    companyId: string,
    storeId: string,
    orderNumber: string,
    latestOnly: boolean,
  }
}

export class ShipmentInfo extends jspb.Message {
  hasShipmentDate(): boolean;
  clearShipmentDate(): void;
  getShipmentDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setShipmentDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCarrier(): string;
  setCarrier(value: string): void;

  getService(): string;
  setService(value: string): void;

  getTrackingNumber(): string;
  setTrackingNumber(value: string): void;

  getLabelUrl(): string;
  setLabelUrl(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShipmentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ShipmentInfo): ShipmentInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShipmentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShipmentInfo;
  static deserializeBinaryFromReader(message: ShipmentInfo, reader: jspb.BinaryReader): ShipmentInfo;
}

export namespace ShipmentInfo {
  export type AsObject = {
    shipmentDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    carrier: string,
    service: string,
    trackingNumber: string,
    labelUrl: string,
    status: string,
  }
}

export class GetShipmentReply extends jspb.Message {
  clearShipmentsList(): void;
  getShipmentsList(): Array<ShipmentInfo>;
  setShipmentsList(value: Array<ShipmentInfo>): void;
  addShipments(value?: ShipmentInfo, index?: number): ShipmentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetShipmentReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetShipmentReply): GetShipmentReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetShipmentReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetShipmentReply;
  static deserializeBinaryFromReader(message: GetShipmentReply, reader: jspb.BinaryReader): GetShipmentReply;
}

export namespace GetShipmentReply {
  export type AsObject = {
    shipmentsList: Array<ShipmentInfo.AsObject>,
  }
}

export class CancelShipmentRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getOrderNumber(): string;
  setOrderNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelShipmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelShipmentRequest): CancelShipmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelShipmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelShipmentRequest;
  static deserializeBinaryFromReader(message: CancelShipmentRequest, reader: jspb.BinaryReader): CancelShipmentRequest;
}

export namespace CancelShipmentRequest {
  export type AsObject = {
    companyId: string,
    storeId: string,
    orderNumber: string,
  }
}

export class CancelShipmentReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelShipmentReply.AsObject;
  static toObject(includeInstance: boolean, msg: CancelShipmentReply): CancelShipmentReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelShipmentReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelShipmentReply;
  static deserializeBinaryFromReader(message: CancelShipmentReply, reader: jspb.BinaryReader): CancelShipmentReply;
}

export namespace CancelShipmentReply {
  export type AsObject = {
  }
}

export class CreateCompanyRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCompanyRequest): CreateCompanyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCompanyRequest;
  static deserializeBinaryFromReader(message: CreateCompanyRequest, reader: jspb.BinaryReader): CreateCompanyRequest;
}

export namespace CreateCompanyRequest {
  export type AsObject = {
    companyId: string,
  }
}

export class CreateCompanyReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCompanyReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCompanyReply): CreateCompanyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCompanyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCompanyReply;
  static deserializeBinaryFromReader(message: CreateCompanyReply, reader: jspb.BinaryReader): CreateCompanyReply;
}

export namespace CreateCompanyReply {
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

export class CreateCarrierRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getCarrierName(): string;
  setCarrierName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getCutoffTime(): string;
  setCutoffTime(value: string): void;

  getTest(): boolean;
  setTest(value: boolean): void;

  getAuthMap(): jspb.Map<string, string>;
  clearAuthMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCarrierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCarrierRequest): CreateCarrierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCarrierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCarrierRequest;
  static deserializeBinaryFromReader(message: CreateCarrierRequest, reader: jspb.BinaryReader): CreateCarrierRequest;
}

export namespace CreateCarrierRequest {
  export type AsObject = {
    companyId: string,
    carrierName: string,
    type: string,
    cutoffTime: string,
    test: boolean,
    authMap: Array<[string, string]>,
  }
}

export class CreateCarrierReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCarrierReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCarrierReply): CreateCarrierReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCarrierReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCarrierReply;
  static deserializeBinaryFromReader(message: CreateCarrierReply, reader: jspb.BinaryReader): CreateCarrierReply;
}

export namespace CreateCarrierReply {
  export type AsObject = {
  }
}

export class ChangeCarrierCutoffTimeRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getCarrierName(): string;
  setCarrierName(value: string): void;

  getCutoffTime(): string;
  setCutoffTime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeCarrierCutoffTimeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeCarrierCutoffTimeRequest): ChangeCarrierCutoffTimeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeCarrierCutoffTimeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeCarrierCutoffTimeRequest;
  static deserializeBinaryFromReader(message: ChangeCarrierCutoffTimeRequest, reader: jspb.BinaryReader): ChangeCarrierCutoffTimeRequest;
}

export namespace ChangeCarrierCutoffTimeRequest {
  export type AsObject = {
    companyId: string,
    carrierName: string,
    cutoffTime: string,
  }
}

export class ChangeCarrierCutoffTimeReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeCarrierCutoffTimeReply.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeCarrierCutoffTimeReply): ChangeCarrierCutoffTimeReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeCarrierCutoffTimeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeCarrierCutoffTimeReply;
  static deserializeBinaryFromReader(message: ChangeCarrierCutoffTimeReply, reader: jspb.BinaryReader): ChangeCarrierCutoffTimeReply;
}

export namespace ChangeCarrierCutoffTimeReply {
  export type AsObject = {
  }
}

export class DeleteCarrierRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getCarrierName(): string;
  setCarrierName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCarrierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCarrierRequest): DeleteCarrierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCarrierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCarrierRequest;
  static deserializeBinaryFromReader(message: DeleteCarrierRequest, reader: jspb.BinaryReader): DeleteCarrierRequest;
}

export namespace DeleteCarrierRequest {
  export type AsObject = {
    companyId: string,
    carrierName: string,
  }
}

export class DeleteCarrierReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCarrierReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCarrierReply): DeleteCarrierReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCarrierReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCarrierReply;
  static deserializeBinaryFromReader(message: DeleteCarrierReply, reader: jspb.BinaryReader): DeleteCarrierReply;
}

export namespace DeleteCarrierReply {
  export type AsObject = {
  }
}

export class ToggleCarrierRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getCarrierName(): string;
  setCarrierName(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleCarrierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleCarrierRequest): ToggleCarrierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToggleCarrierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleCarrierRequest;
  static deserializeBinaryFromReader(message: ToggleCarrierRequest, reader: jspb.BinaryReader): ToggleCarrierRequest;
}

export namespace ToggleCarrierRequest {
  export type AsObject = {
    companyId: string,
    carrierName: string,
    enabled: boolean,
  }
}

export class ToggleCarrierReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleCarrierReply.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleCarrierReply): ToggleCarrierReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToggleCarrierReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleCarrierReply;
  static deserializeBinaryFromReader(message: ToggleCarrierReply, reader: jspb.BinaryReader): ToggleCarrierReply;
}

export namespace ToggleCarrierReply {
  export type AsObject = {
  }
}

export class ListCarriersRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCarriersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCarriersRequest): ListCarriersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCarriersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCarriersRequest;
  static deserializeBinaryFromReader(message: ListCarriersRequest, reader: jspb.BinaryReader): ListCarriersRequest;
}

export namespace ListCarriersRequest {
  export type AsObject = {
    companyId: string,
  }
}

export class CarrierInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getEnabledServices(): string;
  setEnabledServices(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getCutoffTime(): string;
  setCutoffTime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarrierInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CarrierInfo): CarrierInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CarrierInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarrierInfo;
  static deserializeBinaryFromReader(message: CarrierInfo, reader: jspb.BinaryReader): CarrierInfo;
}

export namespace CarrierInfo {
  export type AsObject = {
    name: string,
    type: string,
    enabledServices: string,
    enabled: boolean,
    cutoffTime: string,
  }
}

export class ListCarriersReply extends jspb.Message {
  clearCarriersList(): void;
  getCarriersList(): Array<CarrierInfo>;
  setCarriersList(value: Array<CarrierInfo>): void;
  addCarriers(value?: CarrierInfo, index?: number): CarrierInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCarriersReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListCarriersReply): ListCarriersReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCarriersReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCarriersReply;
  static deserializeBinaryFromReader(message: ListCarriersReply, reader: jspb.BinaryReader): ListCarriersReply;
}

export namespace ListCarriersReply {
  export type AsObject = {
    carriersList: Array<CarrierInfo.AsObject>,
  }
}

export class GetServicesRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getCarrierName(): string;
  setCarrierName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServicesRequest): GetServicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServicesRequest;
  static deserializeBinaryFromReader(message: GetServicesRequest, reader: jspb.BinaryReader): GetServicesRequest;
}

export namespace GetServicesRequest {
  export type AsObject = {
    companyId: string,
    carrierName: string,
  }
}

export class GetServicesReply extends jspb.Message {
  clearEnabledServicesList(): void;
  getEnabledServicesList(): Array<string>;
  setEnabledServicesList(value: Array<string>): void;
  addEnabledServices(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServicesReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetServicesReply): GetServicesReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServicesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServicesReply;
  static deserializeBinaryFromReader(message: GetServicesReply, reader: jspb.BinaryReader): GetServicesReply;
}

export namespace GetServicesReply {
  export type AsObject = {
    enabledServicesList: Array<string>,
  }
}

export class SetCarrierServicesRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getCarrierName(): string;
  setCarrierName(value: string): void;

  clearEnabledServicesList(): void;
  getEnabledServicesList(): Array<string>;
  setEnabledServicesList(value: Array<string>): void;
  addEnabledServices(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCarrierServicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetCarrierServicesRequest): SetCarrierServicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetCarrierServicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCarrierServicesRequest;
  static deserializeBinaryFromReader(message: SetCarrierServicesRequest, reader: jspb.BinaryReader): SetCarrierServicesRequest;
}

export namespace SetCarrierServicesRequest {
  export type AsObject = {
    companyId: string,
    carrierName: string,
    enabledServicesList: Array<string>,
  }
}

export class SetCarrierServicesReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCarrierServicesReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetCarrierServicesReply): SetCarrierServicesReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetCarrierServicesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCarrierServicesReply;
  static deserializeBinaryFromReader(message: SetCarrierServicesReply, reader: jspb.BinaryReader): SetCarrierServicesReply;
}

export namespace SetCarrierServicesReply {
  export type AsObject = {
  }
}

export class CreateManifestRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getCarrierName(): string;
  setCarrierName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateManifestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateManifestRequest): CreateManifestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateManifestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateManifestRequest;
  static deserializeBinaryFromReader(message: CreateManifestRequest, reader: jspb.BinaryReader): CreateManifestRequest;
}

export namespace CreateManifestRequest {
  export type AsObject = {
    companyId: string,
    carrierName: string,
  }
}

export class CreateManifestReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateManifestReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateManifestReply): CreateManifestReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateManifestReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateManifestReply;
  static deserializeBinaryFromReader(message: CreateManifestReply, reader: jspb.BinaryReader): CreateManifestReply;
}

export namespace CreateManifestReply {
  export type AsObject = {
  }
}

export class CreateShipmentReq extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getTracking(): string;
  setTracking(value: string): void;

  getOrderNumber(): string;
  setOrderNumber(value: string): void;

  getCourier(): string;
  setCourier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateShipmentReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateShipmentReq): CreateShipmentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateShipmentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateShipmentReq;
  static deserializeBinaryFromReader(message: CreateShipmentReq, reader: jspb.BinaryReader): CreateShipmentReq;
}

export namespace CreateShipmentReq {
  export type AsObject = {
    companyId: string,
    storeId: string,
    tracking: string,
    orderNumber: string,
    courier: string,
  }
}

export class CreateShipmentReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateShipmentReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateShipmentReply): CreateShipmentReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateShipmentReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateShipmentReply;
  static deserializeBinaryFromReader(message: CreateShipmentReply, reader: jspb.BinaryReader): CreateShipmentReply;
}

export namespace CreateShipmentReply {
  export type AsObject = {
  }
}

