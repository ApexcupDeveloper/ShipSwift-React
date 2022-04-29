// package: productmanager
// file: product_manager.proto

import * as product_manager_pb from "./product_manager_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProductManagerAddProduct = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.AddProductRequest;
  readonly responseType: typeof product_manager_pb.AddProductReply;
};

type ProductManagerLinkProduct = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.LinkProductRequest;
  readonly responseType: typeof product_manager_pb.LinkProductReply;
};

type ProductManagerUnlinkProduct = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.UnlinkStoreProductRequest;
  readonly responseType: typeof product_manager_pb.UnlinkStoreProductReply;
};

type ProductManagerEditProduct = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.EditProductRequest;
  readonly responseType: typeof product_manager_pb.EditProductReply;
};

type ProductManagerGetAllProducts = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.GetAllProductsRequest;
  readonly responseType: typeof product_manager_pb.GetAllProductsReply;
};

type ProductManagerProductsCount = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.ProductsCountRequest;
  readonly responseType: typeof product_manager_pb.ProductsCountReply;
};

type ProductManagerArchivedProductsCount = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.ProductsCountRequest;
  readonly responseType: typeof product_manager_pb.ProductsCountReply;
};

type ProductManagerSetProductArchived = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.SetProductArchivedRequest;
  readonly responseType: typeof product_manager_pb.SetProductArchivedReply;
};

type ProductManagerGetAllArchivedProducts = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.GetAllProductsRequest;
  readonly responseType: typeof product_manager_pb.GetAllProductsReply;
};

type ProductManagerUpdateStock = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.UpdateStockRequest;
  readonly responseType: typeof product_manager_pb.UpdateStockReply;
};

type ProductManagerUnlinkAllStoreProductsFromStore = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.UnlinkAllStoreProductsFromStoreRequest;
  readonly responseType: typeof product_manager_pb.UnlinkAllStoreProductsFromStoreReply;
};

type ProductManagerSetStoreProductArchived = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.SetStoreProductArchivedRequest;
  readonly responseType: typeof product_manager_pb.SetStoreProductArchivedReply;
};

type ProductManagerGetAllStoreProducts = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.GetAllStoreProductsRequest;
  readonly responseType: typeof product_manager_pb.GetAllStoreProductsReply;
};

type ProductManagerStoreProductsCount = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.StoreProductsCountRequest;
  readonly responseType: typeof product_manager_pb.StoreProductsCountReply;
};

type ProductManagerArchivedStoreProductsCount = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.StoreProductsCountRequest;
  readonly responseType: typeof product_manager_pb.StoreProductsCountReply;
};

type ProductManagerGetAllArchivedStoreProducts = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.GetAllStoreProductsRequest;
  readonly responseType: typeof product_manager_pb.GetAllStoreProductsReply;
};

type ProductManagerAddImage = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.AddImageRequest;
  readonly responseType: typeof product_manager_pb.AddImageReply;
};

type ProductManagerDeleteImage = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.DeleteImageRequest;
  readonly responseType: typeof product_manager_pb.DeleteImageReply;
};

type ProductManagerChangeImagesOrder = {
  readonly methodName: string;
  readonly service: typeof ProductManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.ChangeImagesOrderRequest;
  readonly responseType: typeof product_manager_pb.ChangeImagesOrderReply;
};

export class ProductManager {
  static readonly serviceName: string;
  static readonly AddProduct: ProductManagerAddProduct;
  static readonly LinkProduct: ProductManagerLinkProduct;
  static readonly UnlinkProduct: ProductManagerUnlinkProduct;
  static readonly EditProduct: ProductManagerEditProduct;
  static readonly GetAllProducts: ProductManagerGetAllProducts;
  static readonly ProductsCount: ProductManagerProductsCount;
  static readonly ArchivedProductsCount: ProductManagerArchivedProductsCount;
  static readonly SetProductArchived: ProductManagerSetProductArchived;
  static readonly GetAllArchivedProducts: ProductManagerGetAllArchivedProducts;
  static readonly UpdateStock: ProductManagerUpdateStock;
  static readonly UnlinkAllStoreProductsFromStore: ProductManagerUnlinkAllStoreProductsFromStore;
  static readonly SetStoreProductArchived: ProductManagerSetStoreProductArchived;
  static readonly GetAllStoreProducts: ProductManagerGetAllStoreProducts;
  static readonly StoreProductsCount: ProductManagerStoreProductsCount;
  static readonly ArchivedStoreProductsCount: ProductManagerArchivedStoreProductsCount;
  static readonly GetAllArchivedStoreProducts: ProductManagerGetAllArchivedStoreProducts;
  static readonly AddImage: ProductManagerAddImage;
  static readonly DeleteImage: ProductManagerDeleteImage;
  static readonly ChangeImagesOrder: ProductManagerChangeImagesOrder;
}

type InternalIntUpdateStoreProduct = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.StoreProductDetails;
  readonly responseType: typeof product_manager_pb.IntUpdateStoreProductReply;
};

type InternalIntGetProductForStoreProduct = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.IntGetProductForStoreProductRequest;
  readonly responseType: typeof product_manager_pb.IntGetProductForStoreProductReply;
};

type InternalIntUpdateStockForShipped = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.IntUpdateStockForShippedRequest;
  readonly responseType: typeof product_manager_pb.IntUpdateStockForShippedReply;
};

type InternalIntUpdateStockForCancelled = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.IntUpdateStockForCancelledRequest;
  readonly responseType: typeof product_manager_pb.IntUpdateStockForCancelledReply;
};

type InternalIntUpdateAllocatedStock = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_manager_pb.IntUpdateAllocatedStockRequest;
  readonly responseType: typeof product_manager_pb.IntUpdateAllocatedStockReply;
};

export class Internal {
  static readonly serviceName: string;
  static readonly IntUpdateStoreProduct: InternalIntUpdateStoreProduct;
  static readonly IntGetProductForStoreProduct: InternalIntGetProductForStoreProduct;
  static readonly IntUpdateStockForShipped: InternalIntUpdateStockForShipped;
  static readonly IntUpdateStockForCancelled: InternalIntUpdateStockForCancelled;
  static readonly IntUpdateAllocatedStock: InternalIntUpdateAllocatedStock;
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

export class ProductManagerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  addProduct(
    requestMessage: product_manager_pb.AddProductRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.AddProductReply|null) => void
  ): UnaryResponse;
  addProduct(
    requestMessage: product_manager_pb.AddProductRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.AddProductReply|null) => void
  ): UnaryResponse;
  linkProduct(
    requestMessage: product_manager_pb.LinkProductRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.LinkProductReply|null) => void
  ): UnaryResponse;
  linkProduct(
    requestMessage: product_manager_pb.LinkProductRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.LinkProductReply|null) => void
  ): UnaryResponse;
  unlinkProduct(
    requestMessage: product_manager_pb.UnlinkStoreProductRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.UnlinkStoreProductReply|null) => void
  ): UnaryResponse;
  unlinkProduct(
    requestMessage: product_manager_pb.UnlinkStoreProductRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.UnlinkStoreProductReply|null) => void
  ): UnaryResponse;
  editProduct(
    requestMessage: product_manager_pb.EditProductRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.EditProductReply|null) => void
  ): UnaryResponse;
  editProduct(
    requestMessage: product_manager_pb.EditProductRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.EditProductReply|null) => void
  ): UnaryResponse;
  getAllProducts(
    requestMessage: product_manager_pb.GetAllProductsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.GetAllProductsReply|null) => void
  ): UnaryResponse;
  getAllProducts(
    requestMessage: product_manager_pb.GetAllProductsRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.GetAllProductsReply|null) => void
  ): UnaryResponse;
  productsCount(
    requestMessage: product_manager_pb.ProductsCountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.ProductsCountReply|null) => void
  ): UnaryResponse;
  productsCount(
    requestMessage: product_manager_pb.ProductsCountRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.ProductsCountReply|null) => void
  ): UnaryResponse;
  archivedProductsCount(
    requestMessage: product_manager_pb.ProductsCountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.ProductsCountReply|null) => void
  ): UnaryResponse;
  archivedProductsCount(
    requestMessage: product_manager_pb.ProductsCountRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.ProductsCountReply|null) => void
  ): UnaryResponse;
  setProductArchived(
    requestMessage: product_manager_pb.SetProductArchivedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.SetProductArchivedReply|null) => void
  ): UnaryResponse;
  setProductArchived(
    requestMessage: product_manager_pb.SetProductArchivedRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.SetProductArchivedReply|null) => void
  ): UnaryResponse;
  getAllArchivedProducts(
    requestMessage: product_manager_pb.GetAllProductsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.GetAllProductsReply|null) => void
  ): UnaryResponse;
  getAllArchivedProducts(
    requestMessage: product_manager_pb.GetAllProductsRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.GetAllProductsReply|null) => void
  ): UnaryResponse;
  updateStock(
    requestMessage: product_manager_pb.UpdateStockRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.UpdateStockReply|null) => void
  ): UnaryResponse;
  updateStock(
    requestMessage: product_manager_pb.UpdateStockRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.UpdateStockReply|null) => void
  ): UnaryResponse;
  unlinkAllStoreProductsFromStore(
    requestMessage: product_manager_pb.UnlinkAllStoreProductsFromStoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.UnlinkAllStoreProductsFromStoreReply|null) => void
  ): UnaryResponse;
  unlinkAllStoreProductsFromStore(
    requestMessage: product_manager_pb.UnlinkAllStoreProductsFromStoreRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.UnlinkAllStoreProductsFromStoreReply|null) => void
  ): UnaryResponse;
  setStoreProductArchived(
    requestMessage: product_manager_pb.SetStoreProductArchivedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.SetStoreProductArchivedReply|null) => void
  ): UnaryResponse;
  setStoreProductArchived(
    requestMessage: product_manager_pb.SetStoreProductArchivedRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.SetStoreProductArchivedReply|null) => void
  ): UnaryResponse;
  getAllStoreProducts(
    requestMessage: product_manager_pb.GetAllStoreProductsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.GetAllStoreProductsReply|null) => void
  ): UnaryResponse;
  getAllStoreProducts(
    requestMessage: product_manager_pb.GetAllStoreProductsRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.GetAllStoreProductsReply|null) => void
  ): UnaryResponse;
  storeProductsCount(
    requestMessage: product_manager_pb.StoreProductsCountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.StoreProductsCountReply|null) => void
  ): UnaryResponse;
  storeProductsCount(
    requestMessage: product_manager_pb.StoreProductsCountRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.StoreProductsCountReply|null) => void
  ): UnaryResponse;
  archivedStoreProductsCount(
    requestMessage: product_manager_pb.StoreProductsCountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.StoreProductsCountReply|null) => void
  ): UnaryResponse;
  archivedStoreProductsCount(
    requestMessage: product_manager_pb.StoreProductsCountRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.StoreProductsCountReply|null) => void
  ): UnaryResponse;
  getAllArchivedStoreProducts(
    requestMessage: product_manager_pb.GetAllStoreProductsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.GetAllStoreProductsReply|null) => void
  ): UnaryResponse;
  getAllArchivedStoreProducts(
    requestMessage: product_manager_pb.GetAllStoreProductsRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.GetAllStoreProductsReply|null) => void
  ): UnaryResponse;
  addImage(
    requestMessage: product_manager_pb.AddImageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.AddImageReply|null) => void
  ): UnaryResponse;
  addImage(
    requestMessage: product_manager_pb.AddImageRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.AddImageReply|null) => void
  ): UnaryResponse;
  deleteImage(
    requestMessage: product_manager_pb.DeleteImageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.DeleteImageReply|null) => void
  ): UnaryResponse;
  deleteImage(
    requestMessage: product_manager_pb.DeleteImageRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.DeleteImageReply|null) => void
  ): UnaryResponse;
  changeImagesOrder(
    requestMessage: product_manager_pb.ChangeImagesOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.ChangeImagesOrderReply|null) => void
  ): UnaryResponse;
  changeImagesOrder(
    requestMessage: product_manager_pb.ChangeImagesOrderRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.ChangeImagesOrderReply|null) => void
  ): UnaryResponse;
}

export class InternalClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  intUpdateStoreProduct(
    requestMessage: product_manager_pb.StoreProductDetails,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.IntUpdateStoreProductReply|null) => void
  ): UnaryResponse;
  intUpdateStoreProduct(
    requestMessage: product_manager_pb.StoreProductDetails,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.IntUpdateStoreProductReply|null) => void
  ): UnaryResponse;
  intGetProductForStoreProduct(
    requestMessage: product_manager_pb.IntGetProductForStoreProductRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.IntGetProductForStoreProductReply|null) => void
  ): UnaryResponse;
  intGetProductForStoreProduct(
    requestMessage: product_manager_pb.IntGetProductForStoreProductRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.IntGetProductForStoreProductReply|null) => void
  ): UnaryResponse;
  intUpdateStockForShipped(
    requestMessage: product_manager_pb.IntUpdateStockForShippedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.IntUpdateStockForShippedReply|null) => void
  ): UnaryResponse;
  intUpdateStockForShipped(
    requestMessage: product_manager_pb.IntUpdateStockForShippedRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.IntUpdateStockForShippedReply|null) => void
  ): UnaryResponse;
  intUpdateStockForCancelled(
    requestMessage: product_manager_pb.IntUpdateStockForCancelledRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.IntUpdateStockForCancelledReply|null) => void
  ): UnaryResponse;
  intUpdateStockForCancelled(
    requestMessage: product_manager_pb.IntUpdateStockForCancelledRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.IntUpdateStockForCancelledReply|null) => void
  ): UnaryResponse;
  intUpdateAllocatedStock(
    requestMessage: product_manager_pb.IntUpdateAllocatedStockRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.IntUpdateAllocatedStockReply|null) => void
  ): UnaryResponse;
  intUpdateAllocatedStock(
    requestMessage: product_manager_pb.IntUpdateAllocatedStockRequest,
    callback: (error: ServiceError|null, responseMessage: product_manager_pb.IntUpdateAllocatedStockReply|null) => void
  ): UnaryResponse;
}

