// package: courierapi
// file: courierapi.proto

var courierapi_pb = require("./courierapi_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Courierapi = (function () {
  function Courierapi() {}
  Courierapi.serviceName = "courierapi.Courierapi";
  return Courierapi;
}());

Courierapi.CreateLabel = {
  methodName: "CreateLabel",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.CreateLabelRequest,
  responseType: courierapi_pb.CreateLabelReply
};

Courierapi.GetShipment = {
  methodName: "GetShipment",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.GetShipmentRequest,
  responseType: courierapi_pb.GetShipmentReply
};

Courierapi.CancelShipment = {
  methodName: "CancelShipment",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.CancelShipmentRequest,
  responseType: courierapi_pb.CancelShipmentReply
};

Courierapi.CreateCompany = {
  methodName: "CreateCompany",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.CreateCompanyRequest,
  responseType: courierapi_pb.CreateCompanyReply
};

Courierapi.DeleteCompany = {
  methodName: "DeleteCompany",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.DeleteCompanyRequest,
  responseType: courierapi_pb.DeleteCompanyReply
};

Courierapi.CreateCarrier = {
  methodName: "CreateCarrier",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.CreateCarrierRequest,
  responseType: courierapi_pb.CreateCarrierReply
};

Courierapi.ChangeCarrierCutoffTime = {
  methodName: "ChangeCarrierCutoffTime",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.ChangeCarrierCutoffTimeRequest,
  responseType: courierapi_pb.ChangeCarrierCutoffTimeReply
};

Courierapi.DeleteCarrier = {
  methodName: "DeleteCarrier",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.DeleteCarrierRequest,
  responseType: courierapi_pb.DeleteCarrierReply
};

Courierapi.ToggleCarrier = {
  methodName: "ToggleCarrier",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.ToggleCarrierRequest,
  responseType: courierapi_pb.ToggleCarrierReply
};

Courierapi.ListCarriers = {
  methodName: "ListCarriers",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.ListCarriersRequest,
  responseType: courierapi_pb.ListCarriersReply
};

Courierapi.GetServices = {
  methodName: "GetServices",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.GetServicesRequest,
  responseType: courierapi_pb.GetServicesReply
};

Courierapi.SetCarrierServices = {
  methodName: "SetCarrierServices",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.SetCarrierServicesRequest,
  responseType: courierapi_pb.SetCarrierServicesReply
};

Courierapi.CreateManifest = {
  methodName: "CreateManifest",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.CreateManifestRequest,
  responseType: courierapi_pb.CreateManifestReply
};

Courierapi.AddLabel = {
  methodName: "AddLabel",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.CreateShipmentReq,
  responseType: courierapi_pb.CreateShipmentReply
};

Courierapi.CreateBatchLabel = {
  methodName: "CreateBatchLabel",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.CreateBatchLabelRequest,
  responseType: courierapi_pb.CreateBatchLabelReply
};

Courierapi.ListBatches = {
  methodName: "ListBatches",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.ListBatchesReq,
  responseType: courierapi_pb.ListBatchesReply
};

Courierapi.ListBatchShipments = {
  methodName: "ListBatchShipments",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.ListBatchShipmentsReq,
  responseType: courierapi_pb.ListBatchShipmentsReply
};

Courierapi.BatchCount = {
  methodName: "BatchCount",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.BatchCountReq,
  responseType: courierapi_pb.BatchCountReply
};

Courierapi.BatchShipmentsCount = {
  methodName: "BatchShipmentsCount",
  service: Courierapi,
  requestStream: false,
  responseStream: false,
  requestType: courierapi_pb.BatchShipmentCountReq,
  responseType: courierapi_pb.BatchShipmentCountReply
};

exports.Courierapi = Courierapi;

function CourierapiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CourierapiClient.prototype.createLabel = function createLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.CreateLabel, {
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

CourierapiClient.prototype.getShipment = function getShipment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.GetShipment, {
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

CourierapiClient.prototype.cancelShipment = function cancelShipment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.CancelShipment, {
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

CourierapiClient.prototype.createCompany = function createCompany(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.CreateCompany, {
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

CourierapiClient.prototype.deleteCompany = function deleteCompany(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.DeleteCompany, {
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

CourierapiClient.prototype.createCarrier = function createCarrier(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.CreateCarrier, {
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

CourierapiClient.prototype.changeCarrierCutoffTime = function changeCarrierCutoffTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.ChangeCarrierCutoffTime, {
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

CourierapiClient.prototype.deleteCarrier = function deleteCarrier(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.DeleteCarrier, {
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

CourierapiClient.prototype.toggleCarrier = function toggleCarrier(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.ToggleCarrier, {
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

CourierapiClient.prototype.listCarriers = function listCarriers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.ListCarriers, {
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

CourierapiClient.prototype.getServices = function getServices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.GetServices, {
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

CourierapiClient.prototype.setCarrierServices = function setCarrierServices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.SetCarrierServices, {
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

CourierapiClient.prototype.createManifest = function createManifest(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.CreateManifest, {
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

CourierapiClient.prototype.addLabel = function addLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.AddLabel, {
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

CourierapiClient.prototype.createBatchLabel = function createBatchLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.CreateBatchLabel, {
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

CourierapiClient.prototype.listBatches = function listBatches(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.ListBatches, {
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

CourierapiClient.prototype.listBatchShipments = function listBatchShipments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.ListBatchShipments, {
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

CourierapiClient.prototype.batchCount = function batchCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.BatchCount, {
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

CourierapiClient.prototype.batchShipmentsCount = function batchShipmentsCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Courierapi.BatchShipmentsCount, {
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

exports.CourierapiClient = CourierapiClient;

var Internal = (function () {
  function Internal() {}
  Internal.serviceName = "courierapi.Internal";
  return Internal;
}());

exports.Internal = Internal;

function InternalClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

exports.InternalClient = InternalClient;

