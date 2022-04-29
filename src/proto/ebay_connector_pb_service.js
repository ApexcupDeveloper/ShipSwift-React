// package: ebay_connector
// file: ebay_connector.proto

var ebay_connector_pb = require("./ebay_connector_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EbayConnector = (function () {
  function EbayConnector() {}
  EbayConnector.serviceName = "ebay_connector.EbayConnector";
  return EbayConnector;
}());

EbayConnector.AddStore = {
  methodName: "AddStore",
  service: EbayConnector,
  requestStream: false,
  responseStream: false,
  requestType: ebay_connector_pb.AddStoreReq,
  responseType: ebay_connector_pb.AddStoreReply
};

exports.EbayConnector = EbayConnector;

function EbayConnectorClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EbayConnectorClient.prototype.addStore = function addStore(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EbayConnector.AddStore, {
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

exports.EbayConnectorClient = EbayConnectorClient;

