// package: ordermanager
// file: order_manager.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class OrderValue extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  getSubtotal(): number;
  setSubtotal(value: number): void;

  getShipping(): number;
  setShipping(value: number): void;

  getTax(): number;
  setTax(value: number): void;

  getDiscount(): number;
  setDiscount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderValue.AsObject;
  static toObject(includeInstance: boolean, msg: OrderValue): OrderValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderValue;
  static deserializeBinaryFromReader(message: OrderValue, reader: jspb.BinaryReader): OrderValue;
}

export namespace OrderValue {
  export type AsObject = {
    total: number,
    subtotal: number,
    shipping: number,
    tax: number,
    discount: number,
  }
}

export class Product extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getApi2cartOrderProductId(): string;
  setApi2cartOrderProductId(value: string): void;

  getShopifyOrderProductId(): string;
  setShopifyOrderProductId(value: string): void;

  getShipswiftProductId(): number;
  setShipswiftProductId(value: number): void;

  getShipswiftProductName(): string;
  setShipswiftProductName(value: string): void;

  getShipswiftProductSku(): string;
  setShipswiftProductSku(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setPrice(value?: google_protobuf_wrappers_pb.FloatValue): void;

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
    id: string,
    name: string,
    sku: string,
    quantity: number,
    api2cartOrderProductId: string,
    shopifyOrderProductId: string,
    shipswiftProductId: number,
    shipswiftProductName: string,
    shipswiftProductSku: string,
    price?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class CustomerInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFullName(): string;
  setFullName(value: string): void;

  getCompany(): string;
  setCompany(value: string): void;

  getAddress1(): string;
  setAddress1(value: string): void;

  getAddress2(): string;
  setAddress2(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getCountryCode2(): string;
  setCountryCode2(value: string): void;

  getStateCode(): string;
  setStateCode(value: string): void;

  getStateName(): string;
  setStateName(value: string): void;

  getPostcode(): string;
  setPostcode(value: string): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerInfo): CustomerInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerInfo;
  static deserializeBinaryFromReader(message: CustomerInfo, reader: jspb.BinaryReader): CustomerInfo;
}

export namespace CustomerInfo {
  export type AsObject = {
    id: string,
    fullName: string,
    company: string,
    address1: string,
    address2: string,
    city: string,
    country: string,
    countryCode2: string,
    stateCode: string,
    stateName: string,
    postcode: string,
    phoneNumber: string,
    email: string,
  }
}

export class UpdateOrderReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrderReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrderReply): UpdateOrderReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrderReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrderReply;
  static deserializeBinaryFromReader(message: UpdateOrderReply, reader: jspb.BinaryReader): UpdateOrderReply;
}

export namespace UpdateOrderReply {
  export type AsObject = {
  }
}

export class FilterCustomer extends jspb.Message {
  getCustomerName(): string;
  setCustomerName(value: string): void;

  getCustomerEmail(): string;
  setCustomerEmail(value: string): void;

  getCustomerPostcode(): string;
  setCustomerPostcode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterCustomer.AsObject;
  static toObject(includeInstance: boolean, msg: FilterCustomer): FilterCustomer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterCustomer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterCustomer;
  static deserializeBinaryFromReader(message: FilterCustomer, reader: jspb.BinaryReader): FilterCustomer;
}

export namespace FilterCustomer {
  export type AsObject = {
    customerName: string,
    customerEmail: string,
    customerPostcode: string,
  }
}

export class FilterOrder extends jspb.Message {
  getOrderNumber(): string;
  setOrderNumber(value: string): void;

  getProductNameCustomerFreeTextSearch(): string;
  setProductNameCustomerFreeTextSearch(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getShipswiftProductSku(): string;
  setShipswiftProductSku(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterOrder.AsObject;
  static toObject(includeInstance: boolean, msg: FilterOrder): FilterOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterOrder;
  static deserializeBinaryFromReader(message: FilterOrder, reader: jspb.BinaryReader): FilterOrder;
}

export namespace FilterOrder {
  export type AsObject = {
    orderNumber: string,
    productNameCustomerFreeTextSearch: string,
    sku: string,
    shipswiftProductSku: string,
  }
}

export class FilterDate extends jspb.Message {
  hasOrderFrom(): boolean;
  clearOrderFrom(): void;
  getOrderFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOrderFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasOrderTo(): boolean;
  clearOrderTo(): void;
  getOrderTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOrderTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterDate.AsObject;
  static toObject(includeInstance: boolean, msg: FilterDate): FilterDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterDate;
  static deserializeBinaryFromReader(message: FilterDate, reader: jspb.BinaryReader): FilterDate;
}

export namespace FilterDate {
  export type AsObject = {
    orderFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    orderTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class FilterLineItems extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getMinValue(): number;
  setMinValue(value: number): void;

  getMaxValue(): number;
  setMaxValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterLineItems.AsObject;
  static toObject(includeInstance: boolean, msg: FilterLineItems): FilterLineItems.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterLineItems, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterLineItems;
  static deserializeBinaryFromReader(message: FilterLineItems, reader: jspb.BinaryReader): FilterLineItems;
}

export namespace FilterLineItems {
  export type AsObject = {
    type: string,
    value: number,
    minValue: number,
    maxValue: number,
  }
}

export class ListOrdersRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  clearStatusFilterList(): void;
  getStatusFilterList(): Array<string>;
  setStatusFilterList(value: Array<string>): void;
  addStatusFilter(value: string, index?: number): string;

  hasOrderFilter(): boolean;
  clearOrderFilter(): void;
  getOrderFilter(): FilterOrder | undefined;
  setOrderFilter(value?: FilterOrder): void;

  hasCustomerFilter(): boolean;
  clearCustomerFilter(): void;
  getCustomerFilter(): FilterCustomer | undefined;
  setCustomerFilter(value?: FilterCustomer): void;

  hasDateFilter(): boolean;
  clearDateFilter(): void;
  getDateFilter(): FilterDate | undefined;
  setDateFilter(value?: FilterDate): void;

  clearStoresFilterList(): void;
  getStoresFilterList(): Array<string>;
  setStoresFilterList(value: Array<string>): void;
  addStoresFilter(value: string, index?: number): string;

  hasLineItems(): boolean;
  clearLineItems(): void;
  getLineItems(): FilterLineItems | undefined;
  setLineItems(value?: FilterLineItems): void;

  getPaginationCursor(): string;
  setPaginationCursor(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getProductsEnrichedOnly(): boolean;
  setProductsEnrichedOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrdersRequest): ListOrdersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrdersRequest;
  static deserializeBinaryFromReader(message: ListOrdersRequest, reader: jspb.BinaryReader): ListOrdersRequest;
}

export namespace ListOrdersRequest {
  export type AsObject = {
    companyId: string,
    statusFilterList: Array<string>,
    orderFilter?: FilterOrder.AsObject,
    customerFilter?: FilterCustomer.AsObject,
    dateFilter?: FilterDate.AsObject,
    storesFilterList: Array<string>,
    lineItems?: FilterLineItems.AsObject,
    paginationCursor: string,
    pageSize: number,
    productsEnrichedOnly: boolean,
  }
}

export class ListOrdersReply extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<OrderDetails>;
  setOrdersList(value: Array<OrderDetails>): void;
  addOrders(value?: OrderDetails, index?: number): OrderDetails;

  getNextPageCursor(): string;
  setNextPageCursor(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrdersReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrdersReply): ListOrdersReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrdersReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrdersReply;
  static deserializeBinaryFromReader(message: ListOrdersReply, reader: jspb.BinaryReader): ListOrdersReply;
}

export namespace ListOrdersReply {
  export type AsObject = {
    ordersList: Array<OrderDetails.AsObject>,
    nextPageCursor: string,
    pageSize: number,
  }
}

export class OrderDetails extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): void;

  getCompanyId(): string;
  setCompanyId(value: string): void;

  getOrderNumber(): string;
  setOrderNumber(value: string): void;

  hasCustomer(): boolean;
  clearCustomer(): void;
  getCustomer(): CustomerInfo | undefined;
  setCustomer(value?: CustomerInfo): void;

  hasBilling(): boolean;
  clearBilling(): void;
  getBilling(): CustomerInfo | undefined;
  setBilling(value?: CustomerInfo): void;

  getPaymentMethod(): string;
  setPaymentMethod(value: string): void;

  clearProductsList(): void;
  getProductsList(): Array<Product>;
  setProductsList(value: Array<Product>): void;
  addProducts(value?: Product, index?: number): Product;

  hasOrderValue(): boolean;
  clearOrderValue(): void;
  getOrderValue(): OrderValue | undefined;
  setOrderValue(value?: OrderValue): void;

  getShippingMethod(): string;
  setShippingMethod(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getCustomerNotes(): string;
  setCustomerNotes(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLabelLink(): string;
  setLabelLink(value: string): void;

  getProductsEnriched(): boolean;
  setProductsEnriched(value: boolean): void;

  getShopifyOrderId(): number;
  setShopifyOrderId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderDetails.AsObject;
  static toObject(includeInstance: boolean, msg: OrderDetails): OrderDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderDetails;
  static deserializeBinaryFromReader(message: OrderDetails, reader: jspb.BinaryReader): OrderDetails;
}

export namespace OrderDetails {
  export type AsObject = {
    storeId: string,
    companyId: string,
    orderNumber: string,
    customer?: CustomerInfo.AsObject,
    billing?: CustomerInfo.AsObject,
    paymentMethod: string,
    productsList: Array<Product.AsObject>,
    orderValue?: OrderValue.AsObject,
    shippingMethod: string,
    status: string,
    customerNotes: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    labelLink: string,
    productsEnriched: boolean,
    shopifyOrderId: number,
  }
}

export class UpdateOrderStatusRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getStoreType(): string;
  setStoreType(value: string): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasShippedAt(): boolean;
  clearShippedAt(): void;
  getShippedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setShippedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDoesStoreNeedUpdate(): boolean;
  clearDoesStoreNeedUpdate(): void;
  getDoesStoreNeedUpdate(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setDoesStoreNeedUpdate(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrderStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrderStatusRequest): UpdateOrderStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrderStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrderStatusRequest;
  static deserializeBinaryFromReader(message: UpdateOrderStatusRequest, reader: jspb.BinaryReader): UpdateOrderStatusRequest;
}

export namespace UpdateOrderStatusRequest {
  export type AsObject = {
    companyId: string,
    storeId: string,
    storeType: string,
    orderId: string,
    status: string,
    shippedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    doesStoreNeedUpdate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class UpdateOrderStatusReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrderStatusReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrderStatusReply): UpdateOrderStatusReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrderStatusReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrderStatusReply;
  static deserializeBinaryFromReader(message: UpdateOrderStatusReply, reader: jspb.BinaryReader): UpdateOrderStatusReply;
}

export namespace UpdateOrderStatusReply {
  export type AsObject = {
  }
}

export class OrdersCountRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  clearStatusFilterList(): void;
  getStatusFilterList(): Array<string>;
  setStatusFilterList(value: Array<string>): void;
  addStatusFilter(value: string, index?: number): string;

  hasOrderFilter(): boolean;
  clearOrderFilter(): void;
  getOrderFilter(): FilterOrder | undefined;
  setOrderFilter(value?: FilterOrder): void;

  hasCustomerFilter(): boolean;
  clearCustomerFilter(): void;
  getCustomerFilter(): FilterCustomer | undefined;
  setCustomerFilter(value?: FilterCustomer): void;

  hasDateFilter(): boolean;
  clearDateFilter(): void;
  getDateFilter(): FilterDate | undefined;
  setDateFilter(value?: FilterDate): void;

  clearStoresFilterList(): void;
  getStoresFilterList(): Array<string>;
  setStoresFilterList(value: Array<string>): void;
  addStoresFilter(value: string, index?: number): string;

  hasLineItems(): boolean;
  clearLineItems(): void;
  getLineItems(): FilterLineItems | undefined;
  setLineItems(value?: FilterLineItems): void;

  getProductsEnrichedOnly(): boolean;
  setProductsEnrichedOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrdersCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrdersCountRequest): OrdersCountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrdersCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrdersCountRequest;
  static deserializeBinaryFromReader(message: OrdersCountRequest, reader: jspb.BinaryReader): OrdersCountRequest;
}

export namespace OrdersCountRequest {
  export type AsObject = {
    companyId: string,
    statusFilterList: Array<string>,
    orderFilter?: FilterOrder.AsObject,
    customerFilter?: FilterCustomer.AsObject,
    dateFilter?: FilterDate.AsObject,
    storesFilterList: Array<string>,
    lineItems?: FilterLineItems.AsObject,
    productsEnrichedOnly: boolean,
  }
}

export class OrdersCountReply extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrdersCountReply.AsObject;
  static toObject(includeInstance: boolean, msg: OrdersCountReply): OrdersCountReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrdersCountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrdersCountReply;
  static deserializeBinaryFromReader(message: OrdersCountReply, reader: jspb.BinaryReader): OrdersCountReply;
}

export namespace OrdersCountReply {
  export type AsObject = {
    count: number,
  }
}

export class GetOrderRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getOrderNumber(): string;
  setOrderNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderRequest): GetOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderRequest;
  static deserializeBinaryFromReader(message: GetOrderRequest, reader: jspb.BinaryReader): GetOrderRequest;
}

export namespace GetOrderRequest {
  export type AsObject = {
    companyId: string,
    storeId: string,
    orderNumber: string,
  }
}

export class IntEnrichProductRequest extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getShipswiftProductId(): number;
  setShipswiftProductId(value: number): void;

  getShipswiftProductName(): string;
  setShipswiftProductName(value: string): void;

  getShipswiftProductSku(): string;
  setShipswiftProductSku(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntEnrichProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IntEnrichProductRequest): IntEnrichProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntEnrichProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntEnrichProductRequest;
  static deserializeBinaryFromReader(message: IntEnrichProductRequest, reader: jspb.BinaryReader): IntEnrichProductRequest;
}

export namespace IntEnrichProductRequest {
  export type AsObject = {
    companyId: string,
    sku: string,
    shipswiftProductId: number,
    shipswiftProductName: string,
    shipswiftProductSku: string,
  }
}

export class IntEnrichProductReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntEnrichProductReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntEnrichProductReply): IntEnrichProductReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntEnrichProductReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntEnrichProductReply;
  static deserializeBinaryFromReader(message: IntEnrichProductReply, reader: jspb.BinaryReader): IntEnrichProductReply;
}

export namespace IntEnrichProductReply {
  export type AsObject = {
  }
}

export class EmptyRequestBody extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyRequestBody): EmptyRequestBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmptyRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyRequestBody;
  static deserializeBinaryFromReader(message: EmptyRequestBody, reader: jspb.BinaryReader): EmptyRequestBody;
}

export namespace EmptyRequestBody {
  export type AsObject = {
  }
}

export class CompanyReq extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompanyReq.AsObject;
  static toObject(includeInstance: boolean, msg: CompanyReq): CompanyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompanyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompanyReq;
  static deserializeBinaryFromReader(message: CompanyReq, reader: jspb.BinaryReader): CompanyReq;
}

export namespace CompanyReq {
  export type AsObject = {
    companyId: string,
  }
}

export class Report extends jspb.Message {
  getTotalSalesValue(): number;
  setTotalSalesValue(value: number): void;

  getTotalOrders(): number;
  setTotalOrders(value: number): void;

  getTotalOrdersShipped(): number;
  setTotalOrdersShipped(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Report.AsObject;
  static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Report;
  static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
  export type AsObject = {
    totalSalesValue: number,
    totalOrders: number,
    totalOrdersShipped: number,
  }
}

export class ReportReply extends jspb.Message {
  hasToday(): boolean;
  clearToday(): void;
  getToday(): Report | undefined;
  setToday(value?: Report): void;

  hasYesterday(): boolean;
  clearYesterday(): void;
  getYesterday(): Report | undefined;
  setYesterday(value?: Report): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportReply.AsObject;
  static toObject(includeInstance: boolean, msg: ReportReply): ReportReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportReply;
  static deserializeBinaryFromReader(message: ReportReply, reader: jspb.BinaryReader): ReportReply;
}

export namespace ReportReply {
  export type AsObject = {
    today?: Report.AsObject,
    yesterday?: Report.AsObject,
  }
}

