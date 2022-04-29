// package: companymanager
// file: company_manager.proto

var company_manager_pb = require("./company_manager_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CompanyManager = (function () {
  function CompanyManager() {}
  CompanyManager.serviceName = "companymanager.CompanyManager";
  return CompanyManager;
}());

CompanyManager.AddCompany = {
  methodName: "AddCompany",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.CompanyInfo,
  responseType: company_manager_pb.AddCompanyReply
};

CompanyManager.EditCompany = {
  methodName: "EditCompany",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.EditCompanyRequest,
  responseType: company_manager_pb.EditCompanyReply
};

CompanyManager.DeleteCompany = {
  methodName: "DeleteCompany",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.DeleteCompanyRequest,
  responseType: company_manager_pb.DeleteCompanyReply
};

CompanyManager.GetCompany = {
  methodName: "GetCompany",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.GetCompanyRequest,
  responseType: company_manager_pb.GetCompanyReply
};

CompanyManager.AddWarehouse = {
  methodName: "AddWarehouse",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.AddWarehouseRequest,
  responseType: company_manager_pb.AddWarehouseReply
};

CompanyManager.EditWarehouse = {
  methodName: "EditWarehouse",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.EditWarehouseRequest,
  responseType: company_manager_pb.EditWarehouseReply
};

CompanyManager.DeleteWarehouse = {
  methodName: "DeleteWarehouse",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.DeleteWarehouseRequest,
  responseType: company_manager_pb.DeleteWarehouseReply
};

CompanyManager.ListWarehouses = {
  methodName: "ListWarehouses",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.ListWarehousesRequest,
  responseType: company_manager_pb.ListWarehousesReply
};

CompanyManager.AddStore = {
  methodName: "AddStore",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.AddStoreRequest,
  responseType: company_manager_pb.AddStoreReply
};

CompanyManager.EditStore = {
  methodName: "EditStore",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.EditStoreRequest,
  responseType: company_manager_pb.EditStoreReply
};

CompanyManager.DeleteStore = {
  methodName: "DeleteStore",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.DeleteStoreRequest,
  responseType: company_manager_pb.DeleteStoreReply
};

CompanyManager.EnableStore = {
  methodName: "EnableStore",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.EnableDisableStoreRequest,
  responseType: company_manager_pb.EnableDisableStoreReply
};

CompanyManager.DisableStore = {
  methodName: "DisableStore",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.EnableDisableStoreRequest,
  responseType: company_manager_pb.EnableDisableStoreReply
};

CompanyManager.ResetStoreOrdersLastPolled = {
  methodName: "ResetStoreOrdersLastPolled",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.ResetStoreOrdersLastPolledRequest,
  responseType: company_manager_pb.ResetStoreOrdersLastPolledReply
};

CompanyManager.ResetStoreProductsLastPolled = {
  methodName: "ResetStoreProductsLastPolled",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.ResetStoreProductsLastPolledRequest,
  responseType: company_manager_pb.ResetStoreProductsLastPolledReply
};

CompanyManager.GetAllStores = {
  methodName: "GetAllStores",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.GetAllStoresRequest,
  responseType: company_manager_pb.GetAllStoresReply
};

CompanyManager.StoresCount = {
  methodName: "StoresCount",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.StoresCountRequest,
  responseType: company_manager_pb.StoresCountReply
};

CompanyManager.GetStoreType = {
  methodName: "GetStoreType",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.GetStoreTypeRequest,
  responseType: company_manager_pb.GetStoreTypeReply
};

CompanyManager.GetEtsyAuthToken = {
  methodName: "GetEtsyAuthToken",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.EtsyAuthTokenRequest,
  responseType: company_manager_pb.EtsyAuthTokenReply
};

CompanyManager.GetBillingInfo = {
  methodName: "GetBillingInfo",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.BillingInfoRequest,
  responseType: company_manager_pb.BillingInfoReply
};

CompanyManager.SetDefaultCard = {
  methodName: "SetDefaultCard",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.SetDefaultCardRequest,
  responseType: company_manager_pb.SetDefaultCardReply
};

CompanyManager.UpdateBillingAddress = {
  methodName: "UpdateBillingAddress",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.UpdateCompanyBillingAddressRequest,
  responseType: company_manager_pb.UpdateCompanyBillingAddressReply
};

CompanyManager.GetBillingInvoices = {
  methodName: "GetBillingInvoices",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.BillingInvoiceReq,
  responseType: company_manager_pb.BillingInvoiceReply
};

CompanyManager.DeleteCard = {
  methodName: "DeleteCard",
  service: CompanyManager,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.DeleteCardRequest,
  responseType: company_manager_pb.DeleteCardReply
};

exports.CompanyManager = CompanyManager;

function CompanyManagerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CompanyManagerClient.prototype.addCompany = function addCompany(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.AddCompany, {
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

CompanyManagerClient.prototype.editCompany = function editCompany(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.EditCompany, {
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

CompanyManagerClient.prototype.deleteCompany = function deleteCompany(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.DeleteCompany, {
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

CompanyManagerClient.prototype.getCompany = function getCompany(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.GetCompany, {
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

CompanyManagerClient.prototype.addWarehouse = function addWarehouse(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.AddWarehouse, {
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

CompanyManagerClient.prototype.editWarehouse = function editWarehouse(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.EditWarehouse, {
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

CompanyManagerClient.prototype.deleteWarehouse = function deleteWarehouse(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.DeleteWarehouse, {
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

CompanyManagerClient.prototype.listWarehouses = function listWarehouses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.ListWarehouses, {
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

CompanyManagerClient.prototype.addStore = function addStore(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.AddStore, {
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

CompanyManagerClient.prototype.editStore = function editStore(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.EditStore, {
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

CompanyManagerClient.prototype.deleteStore = function deleteStore(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.DeleteStore, {
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

CompanyManagerClient.prototype.enableStore = function enableStore(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.EnableStore, {
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

CompanyManagerClient.prototype.disableStore = function disableStore(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.DisableStore, {
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

CompanyManagerClient.prototype.resetStoreOrdersLastPolled = function resetStoreOrdersLastPolled(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.ResetStoreOrdersLastPolled, {
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

CompanyManagerClient.prototype.resetStoreProductsLastPolled = function resetStoreProductsLastPolled(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.ResetStoreProductsLastPolled, {
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

CompanyManagerClient.prototype.getAllStores = function getAllStores(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.GetAllStores, {
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

CompanyManagerClient.prototype.storesCount = function storesCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.StoresCount, {
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

CompanyManagerClient.prototype.getStoreType = function getStoreType(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.GetStoreType, {
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

CompanyManagerClient.prototype.getEtsyAuthToken = function getEtsyAuthToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.GetEtsyAuthToken, {
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

CompanyManagerClient.prototype.getBillingInfo = function getBillingInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.GetBillingInfo, {
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

CompanyManagerClient.prototype.setDefaultCard = function setDefaultCard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.SetDefaultCard, {
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

CompanyManagerClient.prototype.updateBillingAddress = function updateBillingAddress(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.UpdateBillingAddress, {
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

CompanyManagerClient.prototype.getBillingInvoices = function getBillingInvoices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.GetBillingInvoices, {
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

CompanyManagerClient.prototype.deleteCard = function deleteCard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CompanyManager.DeleteCard, {
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

exports.CompanyManagerClient = CompanyManagerClient;

var Internal = (function () {
  function Internal() {}
  Internal.serviceName = "companymanager.Internal";
  return Internal;
}());

Internal.IntGetStoresToPollForOrders = {
  methodName: "IntGetStoresToPollForOrders",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.IntGetStoresToPollForOrdersRequest,
  responseType: company_manager_pb.IntGetStoresToPollForOrdersReply
};

Internal.IntGetStoresToPollForProducts = {
  methodName: "IntGetStoresToPollForProducts",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.IntGetStoresToPollForProductsRequest,
  responseType: company_manager_pb.IntGetStoresToPollForProductsReply
};

Internal.IntGetStoreKey = {
  methodName: "IntGetStoreKey",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.GetStoreKeyRequest,
  responseType: company_manager_pb.GetStoreKeyReply
};

Internal.IntGetStoreType = {
  methodName: "IntGetStoreType",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.GetStoreTypeRequest,
  responseType: company_manager_pb.GetStoreTypeReply
};

Internal.IntSetShopifyAccessToken = {
  methodName: "IntSetShopifyAccessToken",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.SetShopifyAccessTokenRequest,
  responseType: company_manager_pb.SetShopifyAccessTokenReply
};

Internal.IntAllStoreList = {
  methodName: "IntAllStoreList",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.IntAllStoreListReq,
  responseType: company_manager_pb.IntAllStoreListReply
};

Internal.IntGetStoreInfoBulk = {
  methodName: "IntGetStoreInfoBulk",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.IntGetStoreInfoBulkReq,
  responseType: company_manager_pb.IntGetStoreInfoBulkReply
};

Internal.IntUpdateSubscription = {
  methodName: "IntUpdateSubscription",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.SubscriptionUpdateRequest,
  responseType: company_manager_pb.SubscriptionUpdateReply
};

Internal.IntAddSubscription = {
  methodName: "IntAddSubscription",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.SubscriptionAddRequest,
  responseType: company_manager_pb.SubscriptionAddReply
};

Internal.IntDeleteSubscription = {
  methodName: "IntDeleteSubscription",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.SubscriptionDeleteRequest,
  responseType: company_manager_pb.SubscriptionDeleteReply
};

Internal.IntAddCard = {
  methodName: "IntAddCard",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.AddCardRequest,
  responseType: company_manager_pb.AddCardReply
};

Internal.IntUpdateCard = {
  methodName: "IntUpdateCard",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.UpdateCardRequest,
  responseType: company_manager_pb.UpdateCardReply
};

Internal.IntDeleteCard = {
  methodName: "IntDeleteCard",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.IntDeleteCardRequest,
  responseType: company_manager_pb.IntDeleteCardReply
};

Internal.IntUpdateBillingAddress = {
  methodName: "IntUpdateBillingAddress",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.UpdateBillingAddressRequest,
  responseType: company_manager_pb.UpdateBillingAddressReply
};

Internal.IntAddInvoice = {
  methodName: "IntAddInvoice",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.IntCreateInvoiceRequest,
  responseType: company_manager_pb.IntCreateInvoiceReply
};

Internal.IntUpdateInvoice = {
  methodName: "IntUpdateInvoice",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.IntUpdateInvoiceRequest,
  responseType: company_manager_pb.IntUpdateInvoiceReply
};

Internal.IntUpdateCompanyUserCount = {
  methodName: "IntUpdateCompanyUserCount",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.IntUpdateCompanyUserCountReq,
  responseType: company_manager_pb.IntUpdateCompanyUserCountReply
};

Internal.IntUpdateCompanyOrderCount = {
  methodName: "IntUpdateCompanyOrderCount",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: company_manager_pb.IntUpdateCompanyOrderCountReq,
  responseType: company_manager_pb.IntUpdateCompanyOrderCountReply
};

exports.Internal = Internal;

function InternalClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InternalClient.prototype.intGetStoresToPollForOrders = function intGetStoresToPollForOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntGetStoresToPollForOrders, {
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

InternalClient.prototype.intGetStoresToPollForProducts = function intGetStoresToPollForProducts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntGetStoresToPollForProducts, {
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

InternalClient.prototype.intGetStoreKey = function intGetStoreKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntGetStoreKey, {
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

InternalClient.prototype.intGetStoreType = function intGetStoreType(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntGetStoreType, {
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

InternalClient.prototype.intSetShopifyAccessToken = function intSetShopifyAccessToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntSetShopifyAccessToken, {
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

InternalClient.prototype.intAllStoreList = function intAllStoreList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntAllStoreList, {
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

InternalClient.prototype.intGetStoreInfoBulk = function intGetStoreInfoBulk(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntGetStoreInfoBulk, {
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

InternalClient.prototype.intUpdateSubscription = function intUpdateSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntUpdateSubscription, {
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

InternalClient.prototype.intAddSubscription = function intAddSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntAddSubscription, {
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

InternalClient.prototype.intDeleteSubscription = function intDeleteSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntDeleteSubscription, {
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

InternalClient.prototype.intAddCard = function intAddCard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntAddCard, {
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

InternalClient.prototype.intUpdateCard = function intUpdateCard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntUpdateCard, {
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

InternalClient.prototype.intDeleteCard = function intDeleteCard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntDeleteCard, {
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

InternalClient.prototype.intUpdateBillingAddress = function intUpdateBillingAddress(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntUpdateBillingAddress, {
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

InternalClient.prototype.intAddInvoice = function intAddInvoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntAddInvoice, {
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

InternalClient.prototype.intUpdateInvoice = function intUpdateInvoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntUpdateInvoice, {
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

InternalClient.prototype.intUpdateCompanyUserCount = function intUpdateCompanyUserCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntUpdateCompanyUserCount, {
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

InternalClient.prototype.intUpdateCompanyOrderCount = function intUpdateCompanyOrderCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntUpdateCompanyOrderCount, {
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

