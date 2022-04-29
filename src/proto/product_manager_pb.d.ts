// package: productmanager
// file: product_manager.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class AddProductRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setPrice(value?: google_protobuf_wrappers_pb.FloatValue): void;

  getUrl(): string;
  setUrl(value: string): void;

  getBarcode(): string;
  setBarcode(value: string): void;

  getOriginCountry(): string;
  setOriginCountry(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  getLength(): number;
  setLength(value: number): void;

  getWeight(): number;
  setWeight(value: number): void;

  getStockOnHand(): number;
  setStockOnHand(value: number): void;

  getStockAllocated(): number;
  setStockAllocated(value: number): void;

  getCustomsInfoValue(): number;
  setCustomsInfoValue(value: number): void;

  getCustomsInfoDescription(): string;
  setCustomsInfoDescription(value: string): void;

  getCustomsInfoTariff(): string;
  setCustomsInfoTariff(value: string): void;

  clearImageUrlsList(): void;
  getImageUrlsList(): Array<string>;
  setImageUrlsList(value: Array<string>): void;
  addImageUrls(value: string, index?: number): string;

  getStoreProductSku(): string;
  setStoreProductSku(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddProductRequest): AddProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddProductRequest;
  static deserializeBinaryFromReader(message: AddProductRequest, reader: jspb.BinaryReader): AddProductRequest;
}

export namespace AddProductRequest {
  export type AsObject = {
    companyId: string,
    name: string,
    sku: string,
    price?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    url: string,
    barcode: string,
    originCountry: string,
    description: string,
    height: number,
    width: number,
    length: number,
    weight: number,
    stockOnHand: number,
    stockAllocated: number,
    customsInfoValue: number,
    customsInfoDescription: string,
    customsInfoTariff: string,
    imageUrlsList: Array<string>,
    storeProductSku: string,
  }
}

export class AddProductReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddProductReply.AsObject;
  static toObject(includeInstance: boolean, msg: AddProductReply): AddProductReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddProductReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddProductReply;
  static deserializeBinaryFromReader(message: AddProductReply, reader: jspb.BinaryReader): AddProductReply;
}

export namespace AddProductReply {
  export type AsObject = {
  }
}

export class LinkProductRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getStoreProductSku(): string;
  setStoreProductSku(value: string): void;

  getStoreProductUrl(): string;
  setStoreProductUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LinkProductRequest): LinkProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkProductRequest;
  static deserializeBinaryFromReader(message: LinkProductRequest, reader: jspb.BinaryReader): LinkProductRequest;
}

export namespace LinkProductRequest {
  export type AsObject = {
    companyId: string,
    sku: string,
    storeProductSku: string,
    storeProductUrl: string,
  }
}

export class LinkProductReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkProductReply.AsObject;
  static toObject(includeInstance: boolean, msg: LinkProductReply): LinkProductReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkProductReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkProductReply;
  static deserializeBinaryFromReader(message: LinkProductReply, reader: jspb.BinaryReader): LinkProductReply;
}

export namespace LinkProductReply {
  export type AsObject = {
  }
}

export class UnlinkStoreProductRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreProductSku(): string;
  setStoreProductSku(value: string): void;

  getStoreProductUrl(): string;
  setStoreProductUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlinkStoreProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlinkStoreProductRequest): UnlinkStoreProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnlinkStoreProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlinkStoreProductRequest;
  static deserializeBinaryFromReader(message: UnlinkStoreProductRequest, reader: jspb.BinaryReader): UnlinkStoreProductRequest;
}

export namespace UnlinkStoreProductRequest {
  export type AsObject = {
    companyId: string,
    storeProductSku: string,
    storeProductUrl: string,
  }
}

export class UnlinkStoreProductReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlinkStoreProductReply.AsObject;
  static toObject(includeInstance: boolean, msg: UnlinkStoreProductReply): UnlinkStoreProductReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnlinkStoreProductReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlinkStoreProductReply;
  static deserializeBinaryFromReader(message: UnlinkStoreProductReply, reader: jspb.BinaryReader): UnlinkStoreProductReply;
}

export namespace UnlinkStoreProductReply {
  export type AsObject = {
  }
}

export class UnlinkAllStoreProductsFromStoreRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlinkAllStoreProductsFromStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlinkAllStoreProductsFromStoreRequest): UnlinkAllStoreProductsFromStoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnlinkAllStoreProductsFromStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlinkAllStoreProductsFromStoreRequest;
  static deserializeBinaryFromReader(message: UnlinkAllStoreProductsFromStoreRequest, reader: jspb.BinaryReader): UnlinkAllStoreProductsFromStoreRequest;
}

export namespace UnlinkAllStoreProductsFromStoreRequest {
  export type AsObject = {
    companyId: string,
    sku: string,
  }
}

export class UnlinkAllStoreProductsFromStoreReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlinkAllStoreProductsFromStoreReply.AsObject;
  static toObject(includeInstance: boolean, msg: UnlinkAllStoreProductsFromStoreReply): UnlinkAllStoreProductsFromStoreReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnlinkAllStoreProductsFromStoreReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlinkAllStoreProductsFromStoreReply;
  static deserializeBinaryFromReader(message: UnlinkAllStoreProductsFromStoreReply, reader: jspb.BinaryReader): UnlinkAllStoreProductsFromStoreReply;
}

export namespace UnlinkAllStoreProductsFromStoreReply {
  export type AsObject = {
  }
}

export class EditProductRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setPrice(value?: google_protobuf_wrappers_pb.FloatValue): void;

  getUrl(): string;
  setUrl(value: string): void;

  getBarcode(): string;
  setBarcode(value: string): void;

  getOriginCountry(): string;
  setOriginCountry(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  getLength(): number;
  setLength(value: number): void;

  getWeight(): number;
  setWeight(value: number): void;

  getCustomsInfoValue(): number;
  setCustomsInfoValue(value: number): void;

  getCustomsInfoDescription(): string;
  setCustomsInfoDescription(value: string): void;

  getCustomsInfoTariff(): string;
  setCustomsInfoTariff(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditProductRequest): EditProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditProductRequest;
  static deserializeBinaryFromReader(message: EditProductRequest, reader: jspb.BinaryReader): EditProductRequest;
}

export namespace EditProductRequest {
  export type AsObject = {
    companyId: string,
    name: string,
    sku: string,
    price?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    url: string,
    barcode: string,
    originCountry: string,
    description: string,
    height: number,
    width: number,
    length: number,
    weight: number,
    customsInfoValue: number,
    customsInfoDescription: string,
    customsInfoTariff: string,
  }
}

export class EditProductReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditProductReply.AsObject;
  static toObject(includeInstance: boolean, msg: EditProductReply): EditProductReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditProductReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditProductReply;
  static deserializeBinaryFromReader(message: EditProductReply, reader: jspb.BinaryReader): EditProductReply;
}

export namespace EditProductReply {
  export type AsObject = {
  }
}

export class SetStoreProductArchivedRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreProductSku(): string;
  setStoreProductSku(value: string): void;

  getArchived(): boolean;
  setArchived(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetStoreProductArchivedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetStoreProductArchivedRequest): SetStoreProductArchivedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetStoreProductArchivedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetStoreProductArchivedRequest;
  static deserializeBinaryFromReader(message: SetStoreProductArchivedRequest, reader: jspb.BinaryReader): SetStoreProductArchivedRequest;
}

export namespace SetStoreProductArchivedRequest {
  export type AsObject = {
    companyId: string,
    storeProductSku: string,
    archived: boolean,
  }
}

export class SetStoreProductArchivedReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetStoreProductArchivedReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetStoreProductArchivedReply): SetStoreProductArchivedReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetStoreProductArchivedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetStoreProductArchivedReply;
  static deserializeBinaryFromReader(message: SetStoreProductArchivedReply, reader: jspb.BinaryReader): SetStoreProductArchivedReply;
}

export namespace SetStoreProductArchivedReply {
  export type AsObject = {
  }
}

export class SetProductArchivedRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getProductSku(): string;
  setProductSku(value: string): void;

  getArchived(): boolean;
  setArchived(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetProductArchivedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetProductArchivedRequest): SetProductArchivedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetProductArchivedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetProductArchivedRequest;
  static deserializeBinaryFromReader(message: SetProductArchivedRequest, reader: jspb.BinaryReader): SetProductArchivedRequest;
}

export namespace SetProductArchivedRequest {
  export type AsObject = {
    companyId: string,
    productSku: string,
    archived: boolean,
  }
}

export class SetProductArchivedReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetProductArchivedReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetProductArchivedReply): SetProductArchivedReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetProductArchivedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetProductArchivedReply;
  static deserializeBinaryFromReader(message: SetProductArchivedReply, reader: jspb.BinaryReader): SetProductArchivedReply;
}

export namespace SetProductArchivedReply {
  export type AsObject = {
  }
}

export class ResetStoreProductLastPolledRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreProductSku(): string;
  setStoreProductSku(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetStoreProductLastPolledRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetStoreProductLastPolledRequest): ResetStoreProductLastPolledRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetStoreProductLastPolledRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetStoreProductLastPolledRequest;
  static deserializeBinaryFromReader(message: ResetStoreProductLastPolledRequest, reader: jspb.BinaryReader): ResetStoreProductLastPolledRequest;
}

export namespace ResetStoreProductLastPolledRequest {
  export type AsObject = {
    companyId: string,
    storeProductSku: string,
  }
}

export class ResetStoreProductLastPolledReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetStoreProductLastPolledReply.AsObject;
  static toObject(includeInstance: boolean, msg: ResetStoreProductLastPolledReply): ResetStoreProductLastPolledReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetStoreProductLastPolledReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetStoreProductLastPolledReply;
  static deserializeBinaryFromReader(message: ResetStoreProductLastPolledReply, reader: jspb.BinaryReader): ResetStoreProductLastPolledReply;
}

export namespace ResetStoreProductLastPolledReply {
  export type AsObject = {
  }
}

export class StoreFilter extends jspb.Message {
  clearStoreIdsList(): void;
  getStoreIdsList(): Array<string>;
  setStoreIdsList(value: Array<string>): void;
  addStoreIds(value: string, index?: number): string;

  getNameSkuFreeTextSearch(): string;
  setNameSkuFreeTextSearch(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreFilter.AsObject;
  static toObject(includeInstance: boolean, msg: StoreFilter): StoreFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreFilter;
  static deserializeBinaryFromReader(message: StoreFilter, reader: jspb.BinaryReader): StoreFilter;
}

export namespace StoreFilter {
  export type AsObject = {
    storeIdsList: Array<string>,
    nameSkuFreeTextSearch: string,
  }
}

export class GetAllProductsRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  hasStoreFilter(): boolean;
  clearStoreFilter(): void;
  getStoreFilter(): StoreFilter | undefined;
  setStoreFilter(value?: StoreFilter): void;

  getMinQuantity(): number;
  setMinQuantity(value: number): void;

  getMaxQuantity(): number;
  setMaxQuantity(value: number): void;

  getIncludeArchived(): boolean;
  setIncludeArchived(value: boolean): void;

  getPaginationCursor(): string;
  setPaginationCursor(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllProductsRequest): GetAllProductsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllProductsRequest;
  static deserializeBinaryFromReader(message: GetAllProductsRequest, reader: jspb.BinaryReader): GetAllProductsRequest;
}

export namespace GetAllProductsRequest {
  export type AsObject = {
    companyId: string,
    storeFilter?: StoreFilter.AsObject,
    minQuantity: number,
    maxQuantity: number,
    includeArchived: boolean,
    paginationCursor: string,
    pageSize: number,
  }
}

export class ImageInfo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ImageInfo): ImageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageInfo;
  static deserializeBinaryFromReader(message: ImageInfo, reader: jspb.BinaryReader): ImageInfo;
}

export namespace ImageInfo {
  export type AsObject = {
    id: number,
    url: string,
  }
}

export class StoreProductInfo extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setPrice(value?: google_protobuf_wrappers_pb.FloatValue): void;

  getUrl(): string;
  setUrl(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getId(): number;
  setId(value: number): void;

  getArchived(): boolean;
  setArchived(value: boolean): void;

  getIsLinked(): boolean;
  setIsLinked(value: boolean): void;

  getProductId(): number;
  setProductId(value: number): void;

  clearImagesList(): void;
  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): void;
  addImages(value: string, index?: number): string;

  getProductSku(): string;
  setProductSku(value: string): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setHeight(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setWidth(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasLength(): boolean;
  clearLength(): void;
  getLength(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setLength(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasCostPrice(): boolean;
  clearCostPrice(): void;
  getCostPrice(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setCostPrice(value?: google_protobuf_wrappers_pb.FloatValue): void;

  getWeight(): number;
  setWeight(value: number): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getWeightUnit(): string;
  setWeightUnit(value: string): void;

  getDimensionUnit(): string;
  setDimensionUnit(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreProductInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StoreProductInfo): StoreProductInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreProductInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreProductInfo;
  static deserializeBinaryFromReader(message: StoreProductInfo, reader: jspb.BinaryReader): StoreProductInfo;
}

export namespace StoreProductInfo {
  export type AsObject = {
    storeId: string,
    name: string,
    price?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    url: string,
    sku: string,
    id: number,
    archived: boolean,
    isLinked: boolean,
    productId: number,
    imagesList: Array<string>,
    productSku: string,
    height?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    width?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    length?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    costPrice?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    weight: number,
    quantity: number,
    weightUnit: string,
    dimensionUnit: string,
  }
}

export class ProductInfo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setPrice(value?: google_protobuf_wrappers_pb.FloatValue): void;

  getUrl(): string;
  setUrl(value: string): void;

  getBarcode(): string;
  setBarcode(value: string): void;

  getOriginCountry(): string;
  setOriginCountry(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  getLength(): number;
  setLength(value: number): void;

  getWeight(): number;
  setWeight(value: number): void;

  getStockOnHand(): number;
  setStockOnHand(value: number): void;

  getStockAllocated(): number;
  setStockAllocated(value: number): void;

  getCustomsInfoValue(): number;
  setCustomsInfoValue(value: number): void;

  getCustomsInfoDescription(): string;
  setCustomsInfoDescription(value: string): void;

  getCustomsInfoTariff(): string;
  setCustomsInfoTariff(value: string): void;

  clearImagesList(): void;
  getImagesList(): Array<ImageInfo>;
  setImagesList(value: Array<ImageInfo>): void;
  addImages(value?: ImageInfo, index?: number): ImageInfo;

  clearStoreProductsList(): void;
  getStoreProductsList(): Array<StoreProductInfo>;
  setStoreProductsList(value: Array<StoreProductInfo>): void;
  addStoreProducts(value?: StoreProductInfo, index?: number): StoreProductInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductInfo): ProductInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductInfo;
  static deserializeBinaryFromReader(message: ProductInfo, reader: jspb.BinaryReader): ProductInfo;
}

export namespace ProductInfo {
  export type AsObject = {
    id: number,
    name: string,
    sku: string,
    price?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    url: string,
    barcode: string,
    originCountry: string,
    description: string,
    height: number,
    width: number,
    length: number,
    weight: number,
    stockOnHand: number,
    stockAllocated: number,
    customsInfoValue: number,
    customsInfoDescription: string,
    customsInfoTariff: string,
    imagesList: Array<ImageInfo.AsObject>,
    storeProductsList: Array<StoreProductInfo.AsObject>,
  }
}

export class GetAllProductsReply extends jspb.Message {
  clearProductsList(): void;
  getProductsList(): Array<ProductInfo>;
  setProductsList(value: Array<ProductInfo>): void;
  addProducts(value?: ProductInfo, index?: number): ProductInfo;

  getNextPageCursor(): string;
  setNextPageCursor(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllProductsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllProductsReply): GetAllProductsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllProductsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllProductsReply;
  static deserializeBinaryFromReader(message: GetAllProductsReply, reader: jspb.BinaryReader): GetAllProductsReply;
}

export namespace GetAllProductsReply {
  export type AsObject = {
    productsList: Array<ProductInfo.AsObject>,
    nextPageCursor: string,
    pageSize: number,
  }
}

export class GetAllStoreProductsRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  hasStoreFilter(): boolean;
  clearStoreFilter(): void;
  getStoreFilter(): StoreFilter | undefined;
  setStoreFilter(value?: StoreFilter): void;

  getIncludeArchived(): boolean;
  setIncludeArchived(value: boolean): void;

  getLinkedOnly(): boolean;
  setLinkedOnly(value: boolean): void;

  getUnlinkedOnly(): boolean;
  setUnlinkedOnly(value: boolean): void;

  getPaginationCursor(): string;
  setPaginationCursor(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllStoreProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllStoreProductsRequest): GetAllStoreProductsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllStoreProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllStoreProductsRequest;
  static deserializeBinaryFromReader(message: GetAllStoreProductsRequest, reader: jspb.BinaryReader): GetAllStoreProductsRequest;
}

export namespace GetAllStoreProductsRequest {
  export type AsObject = {
    companyId: string,
    storeFilter?: StoreFilter.AsObject,
    includeArchived: boolean,
    linkedOnly: boolean,
    unlinkedOnly: boolean,
    paginationCursor: string,
    pageSize: number,
  }
}

export class GetAllStoreProductsReply extends jspb.Message {
  clearStoreProductsList(): void;
  getStoreProductsList(): Array<StoreProductInfo>;
  setStoreProductsList(value: Array<StoreProductInfo>): void;
  addStoreProducts(value?: StoreProductInfo, index?: number): StoreProductInfo;

  getNextPageCursor(): string;
  setNextPageCursor(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllStoreProductsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllStoreProductsReply): GetAllStoreProductsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllStoreProductsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllStoreProductsReply;
  static deserializeBinaryFromReader(message: GetAllStoreProductsReply, reader: jspb.BinaryReader): GetAllStoreProductsReply;
}

export namespace GetAllStoreProductsReply {
  export type AsObject = {
    storeProductsList: Array<StoreProductInfo.AsObject>,
    nextPageCursor: string,
    pageSize: number,
  }
}

export class ProductsCountRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  hasStoreFilter(): boolean;
  clearStoreFilter(): void;
  getStoreFilter(): StoreFilter | undefined;
  setStoreFilter(value?: StoreFilter): void;

  getMinQuantity(): number;
  setMinQuantity(value: number): void;

  getMaxQuantity(): number;
  setMaxQuantity(value: number): void;

  getIncludeArchived(): boolean;
  setIncludeArchived(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductsCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductsCountRequest): ProductsCountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductsCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductsCountRequest;
  static deserializeBinaryFromReader(message: ProductsCountRequest, reader: jspb.BinaryReader): ProductsCountRequest;
}

export namespace ProductsCountRequest {
  export type AsObject = {
    companyId: string,
    storeFilter?: StoreFilter.AsObject,
    minQuantity: number,
    maxQuantity: number,
    includeArchived: boolean,
  }
}

export class ProductsCountReply extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductsCountReply.AsObject;
  static toObject(includeInstance: boolean, msg: ProductsCountReply): ProductsCountReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductsCountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductsCountReply;
  static deserializeBinaryFromReader(message: ProductsCountReply, reader: jspb.BinaryReader): ProductsCountReply;
}

export namespace ProductsCountReply {
  export type AsObject = {
    count: number,
  }
}

export class StoreProductsCountRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  hasStoreFilter(): boolean;
  clearStoreFilter(): void;
  getStoreFilter(): StoreFilter | undefined;
  setStoreFilter(value?: StoreFilter): void;

  getIncludeArchived(): boolean;
  setIncludeArchived(value: boolean): void;

  getLinkedOnly(): boolean;
  setLinkedOnly(value: boolean): void;

  getUnlinkedOnly(): boolean;
  setUnlinkedOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreProductsCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StoreProductsCountRequest): StoreProductsCountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreProductsCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreProductsCountRequest;
  static deserializeBinaryFromReader(message: StoreProductsCountRequest, reader: jspb.BinaryReader): StoreProductsCountRequest;
}

export namespace StoreProductsCountRequest {
  export type AsObject = {
    companyId: string,
    storeFilter?: StoreFilter.AsObject,
    includeArchived: boolean,
    linkedOnly: boolean,
    unlinkedOnly: boolean,
  }
}

export class StoreProductsCountReply extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreProductsCountReply.AsObject;
  static toObject(includeInstance: boolean, msg: StoreProductsCountReply): StoreProductsCountReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreProductsCountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreProductsCountReply;
  static deserializeBinaryFromReader(message: StoreProductsCountReply, reader: jspb.BinaryReader): StoreProductsCountReply;
}

export namespace StoreProductsCountReply {
  export type AsObject = {
    count: number,
  }
}

export class StoreProductDetails extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getApi2cartId(): string;
  setApi2cartId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setPrice(value?: google_protobuf_wrappers_pb.FloatValue): void;

  getUrl(): string;
  setUrl(value: string): void;

  clearImagesList(): void;
  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): void;
  addImages(value: string, index?: number): string;

  getShopifyProductId(): string;
  setShopifyProductId(value: string): void;

  hasInventoryItemId(): boolean;
  clearInventoryItemId(): void;
  getInventoryItemId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setInventoryItemId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setHeight(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setWidth(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasLength(): boolean;
  clearLength(): void;
  getLength(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setLength(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasCostPrice(): boolean;
  clearCostPrice(): void;
  getCostPrice(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setCostPrice(value?: google_protobuf_wrappers_pb.FloatValue): void;

  getWeight(): number;
  setWeight(value: number): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getWeightUnit(): string;
  setWeightUnit(value: string): void;

  getDimensionUnit(): string;
  setDimensionUnit(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreProductDetails.AsObject;
  static toObject(includeInstance: boolean, msg: StoreProductDetails): StoreProductDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreProductDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreProductDetails;
  static deserializeBinaryFromReader(message: StoreProductDetails, reader: jspb.BinaryReader): StoreProductDetails;
}

export namespace StoreProductDetails {
  export type AsObject = {
    companyId: string,
    storeId: string,
    api2cartId: string,
    name: string,
    sku: string,
    price?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    url: string,
    imagesList: Array<string>,
    shopifyProductId: string,
    inventoryItemId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    height?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    width?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    length?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    costPrice?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    weight: number,
    quantity: number,
    weightUnit: string,
    dimensionUnit: string,
  }
}

export class IntUpdateStoreProductReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntUpdateStoreProductReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntUpdateStoreProductReply): IntUpdateStoreProductReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntUpdateStoreProductReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntUpdateStoreProductReply;
  static deserializeBinaryFromReader(message: IntUpdateStoreProductReply, reader: jspb.BinaryReader): IntUpdateStoreProductReply;
}

export namespace IntUpdateStoreProductReply {
  export type AsObject = {
  }
}

export class AddImageRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getProductSku(): string;
  setProductSku(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddImageRequest): AddImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddImageRequest;
  static deserializeBinaryFromReader(message: AddImageRequest, reader: jspb.BinaryReader): AddImageRequest;
}

export namespace AddImageRequest {
  export type AsObject = {
    companyId: string,
    productSku: string,
    url: string,
  }
}

export class AddImageReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddImageReply.AsObject;
  static toObject(includeInstance: boolean, msg: AddImageReply): AddImageReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddImageReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddImageReply;
  static deserializeBinaryFromReader(message: AddImageReply, reader: jspb.BinaryReader): AddImageReply;
}

export namespace AddImageReply {
  export type AsObject = {
  }
}

export class DeleteImageRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getProductSku(): string;
  setProductSku(value: string): void;

  getImageId(): number;
  setImageId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteImageRequest): DeleteImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteImageRequest;
  static deserializeBinaryFromReader(message: DeleteImageRequest, reader: jspb.BinaryReader): DeleteImageRequest;
}

export namespace DeleteImageRequest {
  export type AsObject = {
    companyId: string,
    productSku: string,
    imageId: number,
  }
}

export class DeleteImageReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteImageReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteImageReply): DeleteImageReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteImageReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteImageReply;
  static deserializeBinaryFromReader(message: DeleteImageReply, reader: jspb.BinaryReader): DeleteImageReply;
}

export namespace DeleteImageReply {
  export type AsObject = {
  }
}

export class ChangeImagesOrderRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getProductSku(): string;
  setProductSku(value: string): void;

  clearImageIdsList(): void;
  getImageIdsList(): Array<number>;
  setImageIdsList(value: Array<number>): void;
  addImageIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeImagesOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeImagesOrderRequest): ChangeImagesOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeImagesOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeImagesOrderRequest;
  static deserializeBinaryFromReader(message: ChangeImagesOrderRequest, reader: jspb.BinaryReader): ChangeImagesOrderRequest;
}

export namespace ChangeImagesOrderRequest {
  export type AsObject = {
    companyId: string,
    productSku: string,
    imageIdsList: Array<number>,
  }
}

export class ChangeImagesOrderReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeImagesOrderReply.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeImagesOrderReply): ChangeImagesOrderReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeImagesOrderReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeImagesOrderReply;
  static deserializeBinaryFromReader(message: ChangeImagesOrderReply, reader: jspb.BinaryReader): ChangeImagesOrderReply;
}

export namespace ChangeImagesOrderReply {
  export type AsObject = {
  }
}

export class IntGetProductForStoreProductRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getProductSku(): string;
  setProductSku(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntGetProductForStoreProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IntGetProductForStoreProductRequest): IntGetProductForStoreProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntGetProductForStoreProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntGetProductForStoreProductRequest;
  static deserializeBinaryFromReader(message: IntGetProductForStoreProductRequest, reader: jspb.BinaryReader): IntGetProductForStoreProductRequest;
}

export namespace IntGetProductForStoreProductRequest {
  export type AsObject = {
    companyId: string,
    storeId: string,
    productSku: string,
  }
}

export class IntGetProductForStoreProductReply extends jspb.Message {
  hasProduct(): boolean;
  clearProduct(): void;
  getProduct(): ProductInfo | undefined;
  setProduct(value?: ProductInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntGetProductForStoreProductReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntGetProductForStoreProductReply): IntGetProductForStoreProductReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntGetProductForStoreProductReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntGetProductForStoreProductReply;
  static deserializeBinaryFromReader(message: IntGetProductForStoreProductReply, reader: jspb.BinaryReader): IntGetProductForStoreProductReply;
}

export namespace IntGetProductForStoreProductReply {
  export type AsObject = {
    product?: ProductInfo.AsObject,
  }
}

export class UpdateStockRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getStockOnHandAdjustment(): number;
  setStockOnHandAdjustment(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStockRequest): UpdateStockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateStockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStockRequest;
  static deserializeBinaryFromReader(message: UpdateStockRequest, reader: jspb.BinaryReader): UpdateStockRequest;
}

export namespace UpdateStockRequest {
  export type AsObject = {
    companyId: string,
    sku: string,
    stockOnHandAdjustment: number,
  }
}

export class UpdateStockReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStockReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStockReply): UpdateStockReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateStockReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStockReply;
  static deserializeBinaryFromReader(message: UpdateStockReply, reader: jspb.BinaryReader): UpdateStockReply;
}

export namespace UpdateStockReply {
  export type AsObject = {
  }
}

export class IntUpdateStockForShippedRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getProductId(): number;
  setProductId(value: number): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntUpdateStockForShippedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IntUpdateStockForShippedRequest): IntUpdateStockForShippedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntUpdateStockForShippedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntUpdateStockForShippedRequest;
  static deserializeBinaryFromReader(message: IntUpdateStockForShippedRequest, reader: jspb.BinaryReader): IntUpdateStockForShippedRequest;
}

export namespace IntUpdateStockForShippedRequest {
  export type AsObject = {
    companyId: string,
    productId: number,
    quantity: number,
  }
}

export class IntUpdateStockForShippedReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntUpdateStockForShippedReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntUpdateStockForShippedReply): IntUpdateStockForShippedReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntUpdateStockForShippedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntUpdateStockForShippedReply;
  static deserializeBinaryFromReader(message: IntUpdateStockForShippedReply, reader: jspb.BinaryReader): IntUpdateStockForShippedReply;
}

export namespace IntUpdateStockForShippedReply {
  export type AsObject = {
  }
}

export class IntUpdateStockForCancelledRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getProductId(): number;
  setProductId(value: number): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntUpdateStockForCancelledRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IntUpdateStockForCancelledRequest): IntUpdateStockForCancelledRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntUpdateStockForCancelledRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntUpdateStockForCancelledRequest;
  static deserializeBinaryFromReader(message: IntUpdateStockForCancelledRequest, reader: jspb.BinaryReader): IntUpdateStockForCancelledRequest;
}

export namespace IntUpdateStockForCancelledRequest {
  export type AsObject = {
    companyId: string,
    productId: number,
    quantity: number,
  }
}

export class IntUpdateStockForCancelledReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntUpdateStockForCancelledReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntUpdateStockForCancelledReply): IntUpdateStockForCancelledReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntUpdateStockForCancelledReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntUpdateStockForCancelledReply;
  static deserializeBinaryFromReader(message: IntUpdateStockForCancelledReply, reader: jspb.BinaryReader): IntUpdateStockForCancelledReply;
}

export namespace IntUpdateStockForCancelledReply {
  export type AsObject = {
  }
}

export class IntUpdateAllocatedStockRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getProductId(): number;
  setProductId(value: number): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntUpdateAllocatedStockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IntUpdateAllocatedStockRequest): IntUpdateAllocatedStockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntUpdateAllocatedStockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntUpdateAllocatedStockRequest;
  static deserializeBinaryFromReader(message: IntUpdateAllocatedStockRequest, reader: jspb.BinaryReader): IntUpdateAllocatedStockRequest;
}

export namespace IntUpdateAllocatedStockRequest {
  export type AsObject = {
    companyId: string,
    productId: number,
    quantity: number,
  }
}

export class IntUpdateAllocatedStockReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntUpdateAllocatedStockReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntUpdateAllocatedStockReply): IntUpdateAllocatedStockReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntUpdateAllocatedStockReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntUpdateAllocatedStockReply;
  static deserializeBinaryFromReader(message: IntUpdateAllocatedStockReply, reader: jspb.BinaryReader): IntUpdateAllocatedStockReply;
}

export namespace IntUpdateAllocatedStockReply {
  export type AsObject = {
  }
}

