// package: productmanager
// file: product_manager.proto

var product_manager_pb = require("./product_manager_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ProductManager = (function () {
  function ProductManager() {}
  ProductManager.serviceName = "productmanager.ProductManager";
  return ProductManager;
}());

ProductManager.AddProduct = {
  methodName: "AddProduct",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.AddProductRequest,
  responseType: product_manager_pb.AddProductReply
};

ProductManager.LinkProduct = {
  methodName: "LinkProduct",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.LinkProductRequest,
  responseType: product_manager_pb.LinkProductReply
};

ProductManager.UnlinkProduct = {
  methodName: "UnlinkProduct",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.UnlinkStoreProductRequest,
  responseType: product_manager_pb.UnlinkStoreProductReply
};

ProductManager.EditProduct = {
  methodName: "EditProduct",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.EditProductRequest,
  responseType: product_manager_pb.EditProductReply
};

ProductManager.GetAllProducts = {
  methodName: "GetAllProducts",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.GetAllProductsRequest,
  responseType: product_manager_pb.GetAllProductsReply
};

ProductManager.ProductsCount = {
  methodName: "ProductsCount",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.ProductsCountRequest,
  responseType: product_manager_pb.ProductsCountReply
};

ProductManager.ArchivedProductsCount = {
  methodName: "ArchivedProductsCount",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.ProductsCountRequest,
  responseType: product_manager_pb.ProductsCountReply
};

ProductManager.SetProductArchived = {
  methodName: "SetProductArchived",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.SetProductArchivedRequest,
  responseType: product_manager_pb.SetProductArchivedReply
};

ProductManager.GetAllArchivedProducts = {
  methodName: "GetAllArchivedProducts",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.GetAllProductsRequest,
  responseType: product_manager_pb.GetAllProductsReply
};

ProductManager.UpdateStock = {
  methodName: "UpdateStock",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.UpdateStockRequest,
  responseType: product_manager_pb.UpdateStockReply
};

ProductManager.UnlinkAllStoreProductsFromStore = {
  methodName: "UnlinkAllStoreProductsFromStore",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.UnlinkAllStoreProductsFromStoreRequest,
  responseType: product_manager_pb.UnlinkAllStoreProductsFromStoreReply
};

ProductManager.SetStoreProductArchived = {
  methodName: "SetStoreProductArchived",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.SetStoreProductArchivedRequest,
  responseType: product_manager_pb.SetStoreProductArchivedReply
};

ProductManager.GetAllStoreProducts = {
  methodName: "GetAllStoreProducts",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.GetAllStoreProductsRequest,
  responseType: product_manager_pb.GetAllStoreProductsReply
};

ProductManager.StoreProductsCount = {
  methodName: "StoreProductsCount",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.StoreProductsCountRequest,
  responseType: product_manager_pb.StoreProductsCountReply
};

ProductManager.ArchivedStoreProductsCount = {
  methodName: "ArchivedStoreProductsCount",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.StoreProductsCountRequest,
  responseType: product_manager_pb.StoreProductsCountReply
};

ProductManager.GetAllArchivedStoreProducts = {
  methodName: "GetAllArchivedStoreProducts",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.GetAllStoreProductsRequest,
  responseType: product_manager_pb.GetAllStoreProductsReply
};

ProductManager.AddImage = {
  methodName: "AddImage",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.AddImageRequest,
  responseType: product_manager_pb.AddImageReply
};

ProductManager.DeleteImage = {
  methodName: "DeleteImage",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.DeleteImageRequest,
  responseType: product_manager_pb.DeleteImageReply
};

ProductManager.ChangeImagesOrder = {
  methodName: "ChangeImagesOrder",
  service: ProductManager,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.ChangeImagesOrderRequest,
  responseType: product_manager_pb.ChangeImagesOrderReply
};

exports.ProductManager = ProductManager;

function ProductManagerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProductManagerClient.prototype.addProduct = function addProduct(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.AddProduct, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.linkProduct = function linkProduct(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.LinkProduct, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.unlinkProduct = function unlinkProduct(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.UnlinkProduct, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.editProduct = function editProduct(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.EditProduct, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.getAllProducts = function getAllProducts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.GetAllProducts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.productsCount = function productsCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.ProductsCount, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.archivedProductsCount = function archivedProductsCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.ArchivedProductsCount, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.setProductArchived = function setProductArchived(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.SetProductArchived, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.getAllArchivedProducts = function getAllArchivedProducts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.GetAllArchivedProducts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.updateStock = function updateStock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.UpdateStock, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.unlinkAllStoreProductsFromStore = function unlinkAllStoreProductsFromStore(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.UnlinkAllStoreProductsFromStore, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.setStoreProductArchived = function setStoreProductArchived(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.SetStoreProductArchived, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.getAllStoreProducts = function getAllStoreProducts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.GetAllStoreProducts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.storeProductsCount = function storeProductsCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.StoreProductsCount, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.archivedStoreProductsCount = function archivedStoreProductsCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.ArchivedStoreProductsCount, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.getAllArchivedStoreProducts = function getAllArchivedStoreProducts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.GetAllArchivedStoreProducts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.addImage = function addImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.AddImage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.deleteImage = function deleteImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.DeleteImage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductManagerClient.prototype.changeImagesOrder = function changeImagesOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductManager.ChangeImagesOrder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ProductManagerClient = ProductManagerClient;

var Internal = (function () {
  function Internal() {}
  Internal.serviceName = "productmanager.Internal";
  return Internal;
}());

Internal.IntUpdateStoreProduct = {
  methodName: "IntUpdateStoreProduct",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.StoreProductDetails,
  responseType: product_manager_pb.IntUpdateStoreProductReply
};

Internal.IntGetProductForStoreProduct = {
  methodName: "IntGetProductForStoreProduct",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.IntGetProductForStoreProductRequest,
  responseType: product_manager_pb.IntGetProductForStoreProductReply
};

Internal.IntUpdateStockForShipped = {
  methodName: "IntUpdateStockForShipped",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.IntUpdateStockForShippedRequest,
  responseType: product_manager_pb.IntUpdateStockForShippedReply
};

Internal.IntUpdateStockForCancelled = {
  methodName: "IntUpdateStockForCancelled",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.IntUpdateStockForCancelledRequest,
  responseType: product_manager_pb.IntUpdateStockForCancelledReply
};

Internal.IntUpdateAllocatedStock = {
  methodName: "IntUpdateAllocatedStock",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: product_manager_pb.IntUpdateAllocatedStockRequest,
  responseType: product_manager_pb.IntUpdateAllocatedStockReply
};

exports.Internal = Internal;

function InternalClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InternalClient.prototype.intUpdateStoreProduct = function intUpdateStoreProduct(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntUpdateStoreProduct, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

InternalClient.prototype.intGetProductForStoreProduct = function intGetProductForStoreProduct(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntGetProductForStoreProduct, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

InternalClient.prototype.intUpdateStockForShipped = function intUpdateStockForShipped(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntUpdateStockForShipped, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

InternalClient.prototype.intUpdateStockForCancelled = function intUpdateStockForCancelled(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntUpdateStockForCancelled, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

InternalClient.prototype.intUpdateAllocatedStock = function intUpdateAllocatedStock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntUpdateAllocatedStock, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.InternalClient = InternalClient;

