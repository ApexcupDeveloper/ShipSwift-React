// package: usermanager
// file: user_manager.proto

var user_manager_pb = require("./user_manager_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UserManager = (function () {
  function UserManager() {}
  UserManager.serviceName = "usermanager.UserManager";
  return UserManager;
}());

UserManager.AddUser = {
  methodName: "AddUser",
  service: UserManager,
  requestStream: false,
  responseStream: false,
  requestType: user_manager_pb.AddUserReq,
  responseType: user_manager_pb.AddUserReply
};

UserManager.EditUser = {
  methodName: "EditUser",
  service: UserManager,
  requestStream: false,
  responseStream: false,
  requestType: user_manager_pb.EditUserReq,
  responseType: user_manager_pb.EditUserReply
};

UserManager.DeleteUser = {
  methodName: "DeleteUser",
  service: UserManager,
  requestStream: false,
  responseStream: false,
  requestType: user_manager_pb.DeleteUserReq,
  responseType: user_manager_pb.DeleteUserReply
};

UserManager.EnableUser = {
  methodName: "EnableUser",
  service: UserManager,
  requestStream: false,
  responseStream: false,
  requestType: user_manager_pb.EnableUserReq,
  responseType: user_manager_pb.EnableUserReply
};

UserManager.GetUsers = {
  methodName: "GetUsers",
  service: UserManager,
  requestStream: false,
  responseStream: false,
  requestType: user_manager_pb.GetUsersReq,
  responseType: user_manager_pb.GetUsersReply
};

UserManager.AddRole = {
  methodName: "AddRole",
  service: UserManager,
  requestStream: false,
  responseStream: false,
  requestType: user_manager_pb.CreateRoleReq,
  responseType: user_manager_pb.CreateRoleReply
};

UserManager.EditRole = {
  methodName: "EditRole",
  service: UserManager,
  requestStream: false,
  responseStream: false,
  requestType: user_manager_pb.EditRoleReq,
  responseType: user_manager_pb.EditRoleReply
};

UserManager.DeleteRole = {
  methodName: "DeleteRole",
  service: UserManager,
  requestStream: false,
  responseStream: false,
  requestType: user_manager_pb.DeleteRoleReq,
  responseType: user_manager_pb.DeleteRoleReply
};

UserManager.GetRoles = {
  methodName: "GetRoles",
  service: UserManager,
  requestStream: false,
  responseStream: false,
  requestType: user_manager_pb.GetRolesReq,
  responseType: user_manager_pb.GetRolesReply
};

exports.UserManager = UserManager;

function UserManagerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UserManagerClient.prototype.addUser = function addUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserManager.AddUser, {
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

UserManagerClient.prototype.editUser = function editUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserManager.EditUser, {
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

UserManagerClient.prototype.deleteUser = function deleteUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserManager.DeleteUser, {
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

UserManagerClient.prototype.enableUser = function enableUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserManager.EnableUser, {
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

UserManagerClient.prototype.getUsers = function getUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserManager.GetUsers, {
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

UserManagerClient.prototype.addRole = function addRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserManager.AddRole, {
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

UserManagerClient.prototype.editRole = function editRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserManager.EditRole, {
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

UserManagerClient.prototype.deleteRole = function deleteRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserManager.DeleteRole, {
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

UserManagerClient.prototype.getRoles = function getRoles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserManager.GetRoles, {
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

exports.UserManagerClient = UserManagerClient;

var Internal = (function () {
  function Internal() {}
  Internal.serviceName = "usermanager.Internal";
  return Internal;
}());

Internal.IntAddUserStore = {
  methodName: "IntAddUserStore",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: user_manager_pb.IntAddUserStoreReq,
  responseType: user_manager_pb.IntAddUserStoreReply
};

Internal.IntDeleteUserStore = {
  methodName: "IntDeleteUserStore",
  service: Internal,
  requestStream: false,
  responseStream: false,
  requestType: user_manager_pb.IntDeleteUserStoreReq,
  responseType: user_manager_pb.IntDeleteUserStoreReply
};

exports.Internal = Internal;

function InternalClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InternalClient.prototype.intAddUserStore = function intAddUserStore(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntAddUserStore, {
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

InternalClient.prototype.intDeleteUserStore = function intDeleteUserStore(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Internal.IntDeleteUserStore, {
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

