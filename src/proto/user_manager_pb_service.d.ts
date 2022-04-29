// package: usermanager
// file: user_manager.proto

import * as user_manager_pb from "./user_manager_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UserManagerAddUser = {
  readonly methodName: string;
  readonly service: typeof UserManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_manager_pb.AddUserReq;
  readonly responseType: typeof user_manager_pb.AddUserReply;
};

type UserManagerEditUser = {
  readonly methodName: string;
  readonly service: typeof UserManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_manager_pb.EditUserReq;
  readonly responseType: typeof user_manager_pb.EditUserReply;
};

type UserManagerDeleteUser = {
  readonly methodName: string;
  readonly service: typeof UserManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_manager_pb.DeleteUserReq;
  readonly responseType: typeof user_manager_pb.DeleteUserReply;
};

type UserManagerEnableUser = {
  readonly methodName: string;
  readonly service: typeof UserManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_manager_pb.EnableUserReq;
  readonly responseType: typeof user_manager_pb.EnableUserReply;
};

type UserManagerGetUsers = {
  readonly methodName: string;
  readonly service: typeof UserManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_manager_pb.GetUsersReq;
  readonly responseType: typeof user_manager_pb.GetUsersReply;
};

type UserManagerAddRole = {
  readonly methodName: string;
  readonly service: typeof UserManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_manager_pb.CreateRoleReq;
  readonly responseType: typeof user_manager_pb.CreateRoleReply;
};

type UserManagerEditRole = {
  readonly methodName: string;
  readonly service: typeof UserManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_manager_pb.EditRoleReq;
  readonly responseType: typeof user_manager_pb.EditRoleReply;
};

type UserManagerDeleteRole = {
  readonly methodName: string;
  readonly service: typeof UserManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_manager_pb.DeleteRoleReq;
  readonly responseType: typeof user_manager_pb.DeleteRoleReply;
};

type UserManagerGetRoles = {
  readonly methodName: string;
  readonly service: typeof UserManager;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_manager_pb.GetRolesReq;
  readonly responseType: typeof user_manager_pb.GetRolesReply;
};

export class UserManager {
  static readonly serviceName: string;
  static readonly AddUser: UserManagerAddUser;
  static readonly EditUser: UserManagerEditUser;
  static readonly DeleteUser: UserManagerDeleteUser;
  static readonly EnableUser: UserManagerEnableUser;
  static readonly GetUsers: UserManagerGetUsers;
  static readonly AddRole: UserManagerAddRole;
  static readonly EditRole: UserManagerEditRole;
  static readonly DeleteRole: UserManagerDeleteRole;
  static readonly GetRoles: UserManagerGetRoles;
}

type InternalIntAddUserStore = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_manager_pb.IntAddUserStoreReq;
  readonly responseType: typeof user_manager_pb.IntAddUserStoreReply;
};

type InternalIntDeleteUserStore = {
  readonly methodName: string;
  readonly service: typeof Internal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_manager_pb.IntDeleteUserStoreReq;
  readonly responseType: typeof user_manager_pb.IntDeleteUserStoreReply;
};

export class Internal {
  static readonly serviceName: string;
  static readonly IntAddUserStore: InternalIntAddUserStore;
  static readonly IntDeleteUserStore: InternalIntDeleteUserStore;
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

export class UserManagerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  addUser(
    requestMessage: user_manager_pb.AddUserReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.AddUserReply|null) => void
  ): UnaryResponse;
  addUser(
    requestMessage: user_manager_pb.AddUserReq,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.AddUserReply|null) => void
  ): UnaryResponse;
  editUser(
    requestMessage: user_manager_pb.EditUserReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.EditUserReply|null) => void
  ): UnaryResponse;
  editUser(
    requestMessage: user_manager_pb.EditUserReq,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.EditUserReply|null) => void
  ): UnaryResponse;
  deleteUser(
    requestMessage: user_manager_pb.DeleteUserReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.DeleteUserReply|null) => void
  ): UnaryResponse;
  deleteUser(
    requestMessage: user_manager_pb.DeleteUserReq,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.DeleteUserReply|null) => void
  ): UnaryResponse;
  enableUser(
    requestMessage: user_manager_pb.EnableUserReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.EnableUserReply|null) => void
  ): UnaryResponse;
  enableUser(
    requestMessage: user_manager_pb.EnableUserReq,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.EnableUserReply|null) => void
  ): UnaryResponse;
  getUsers(
    requestMessage: user_manager_pb.GetUsersReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.GetUsersReply|null) => void
  ): UnaryResponse;
  getUsers(
    requestMessage: user_manager_pb.GetUsersReq,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.GetUsersReply|null) => void
  ): UnaryResponse;
  addRole(
    requestMessage: user_manager_pb.CreateRoleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.CreateRoleReply|null) => void
  ): UnaryResponse;
  addRole(
    requestMessage: user_manager_pb.CreateRoleReq,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.CreateRoleReply|null) => void
  ): UnaryResponse;
  editRole(
    requestMessage: user_manager_pb.EditRoleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.EditRoleReply|null) => void
  ): UnaryResponse;
  editRole(
    requestMessage: user_manager_pb.EditRoleReq,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.EditRoleReply|null) => void
  ): UnaryResponse;
  deleteRole(
    requestMessage: user_manager_pb.DeleteRoleReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.DeleteRoleReply|null) => void
  ): UnaryResponse;
  deleteRole(
    requestMessage: user_manager_pb.DeleteRoleReq,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.DeleteRoleReply|null) => void
  ): UnaryResponse;
  getRoles(
    requestMessage: user_manager_pb.GetRolesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.GetRolesReply|null) => void
  ): UnaryResponse;
  getRoles(
    requestMessage: user_manager_pb.GetRolesReq,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.GetRolesReply|null) => void
  ): UnaryResponse;
}

export class InternalClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  intAddUserStore(
    requestMessage: user_manager_pb.IntAddUserStoreReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.IntAddUserStoreReply|null) => void
  ): UnaryResponse;
  intAddUserStore(
    requestMessage: user_manager_pb.IntAddUserStoreReq,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.IntAddUserStoreReply|null) => void
  ): UnaryResponse;
  intDeleteUserStore(
    requestMessage: user_manager_pb.IntDeleteUserStoreReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.IntDeleteUserStoreReply|null) => void
  ): UnaryResponse;
  intDeleteUserStore(
    requestMessage: user_manager_pb.IntDeleteUserStoreReq,
    callback: (error: ServiceError|null, responseMessage: user_manager_pb.IntDeleteUserStoreReply|null) => void
  ): UnaryResponse;
}

