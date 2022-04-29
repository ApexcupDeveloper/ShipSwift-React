// package: ordermanager
// file: order_manager.proto

var order_manager_pb = require("./order_manager_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var OrderManager = (function () {
  function OrderManager() {}
  OrderManager.serviceName = "ordermanager.OrderManager";
  return OrderManager;
}());

OrderManager.UpdateOrder = {
  methodName: "UpdateOrder",
  service: OrderManager,
  requestStream: false,
  responseStream: false,
  requestType: order_manager_pb.OrderDetails,
  responseType: order_manager_pb.UpdateOrderReply
};

OrderManager.ListOrders = {
  methodName: "ListOrders",
  service: OrderManager,
  requestStream: false,
  responseStream: false,
  requestType: order_manager_pb.ListOrdersRequest,
  responseType: order_manager_pb.ListOrdersReply
};

OrderManager.UpdateOrderStatus = {
  methodName: "UpdateOrderStatus",
  service: OrderManager,
  requestStream: false,
  responseStream: false,
  requestType: order_manager_pb.UpdateOrderStatusRequest,
  responseType: order_manager_pb.UpdateOrderStatusReply
};

OrderManager.OrdersCount = {
  methodName: "OrdersCount",
  service: OrderManager,
  requestStream: false,
  responseStream: false,
  requestType: order_manager_pb.OrdersCountRequest,
  responseType: order_manager_pb.OrdersCountReply
};

OrderManager.GetOrder = {
  methodName: "GetOrder",
  service: OrderManager,
  requestStream: false,
  responseStream: false,
  requestType: order_manager_pb.GetOrderRequest,
  responseType: order_manager_pb.OrderDetails
};

OrderManager.GetReport = {
  methodName: "GetReport",
  service: OrderManager,
  requestStream: false,
  responseStream: false,
  requestType: order_manager_pb.CompanyReq,
  responseType: order_manager_pb.ReportReply
};

exports.OrderManager = OrderManager;

function OrderManagerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OrderManagerClient.prototype.updateOrder = function updateOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrderManager.UpdateOrder, {
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

OrderManagerClient.prototype.listOrders = function listOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrderManager.ListOrders, {
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

OrderManagerClient.prototype.updateOrderStatus = function updateOrderStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrderManager.UpdateOrderStatus, {
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

OrderManagerClient.prototype.ordersCount = function ordersCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrderManager.OrdersCount, {
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

OrderManagerClient.prototype.getOrder = function getOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrderManager.GetOrder, {
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

OrderManagerClient.prototype.getReport = function getReport(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrderManager.GetReport, {
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

exports.OrderManagerClient = OrderManagerClient;

var Internal = (function () {
  function Internal() {}
  Internal.serviceName = "ordermanager.Internal";
  return Internal;
}());

Internal.IntUpdateOrder = {
  methodName: "IntUpdateOrder",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: order_manager_pb.OrderDetails,
  responseType: order_manager_pb.UpdateOrderReply
};

Internal.IntGetOrder = {
  methodName: "IntGetOrder",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: order_manager_pb.GetOrderRequest,
  responseType: order_manager_pb.OrderDetails
};

Internal.IntUpdateOrderStatus = {
  methodName: "IntUpdateOrderStatus",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: order_manager_pb.UpdateOrderStatusRequest,
  responseType: order_manager_pb.UpdateOrderStatusReply
};

Internal.IntEnrichProduct = {
  methodName: "IntEnrichProduct",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: order_manager_pb.IntEnrichProductRequest,
  responseType: order_manager_pb.IntEnrichProductReply
};

exports.Internal = Internal;

function InternalClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InternalClient.prototype.intUpdateOrder = function intUpdateOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntUpdateOrder, {
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

InternalClient.prototype.intGetOrder = function intGetOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntGetOrder, {
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

InternalClient.prototype.intUpdateOrderStatus = function intUpdateOrderStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntUpdateOrderStatus, {
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

InternalClient.prototype.intEnrichProduct = function intEnrichProduct(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntEnrichProduct, {
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

