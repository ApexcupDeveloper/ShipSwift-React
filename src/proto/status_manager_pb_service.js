// package: statusmanager
// file: status_manager.proto

var status_manager_pb = require("./status_manager_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var StatusManager = (function () {
  function StatusManager() {}
  StatusManager.serviceName = "statusmanager.StatusManager";
  return StatusManager;
}());

StatusManager.GetStatus = {
  methodName: "GetStatus",
  service: StatusManager,
  requestStream: false,
  responseStream: false,
  requestType: status_manager_pb.StatusReq,
  responseType: status_manager_pb.StatusReply
};

exports.StatusManager = StatusManager;

function StatusManagerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

StatusManagerClient.prototype.getStatus = function getStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StatusManager.GetStatus, {
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

exports.StatusManagerClient = StatusManagerClient;

