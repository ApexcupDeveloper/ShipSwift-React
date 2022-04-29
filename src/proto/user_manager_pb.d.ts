// package: usermanager
// file: user_manager.proto

import * as jspb from "google-protobuf";

export class AddUserReq extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getCompanyId(): string;
  setCompanyId(value: string): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  getIsOwner(): boolean;
  setIsOwner(value: boolean): void;

  getRole(): string;
  setRole(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserReq): AddUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserReq;
  static deserializeBinaryFromReader(message: AddUserReq, reader: jspb.BinaryReader): AddUserReq;
}

export namespace AddUserReq {
  export type AsObject = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    companyId: string,
    timeZone: string,
    isOwner: boolean,
    role: string,
  }
}

export class AddUserReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserReply): AddUserReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserReply;
  static deserializeBinaryFromReader(message: AddUserReply, reader: jspb.BinaryReader): AddUserReply;
}

export namespace AddUserReply {
  export type AsObject = {
  }
}

export class EditUserReq extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  getCompanyId(): string;
  setCompanyId(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: EditUserReq): EditUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditUserReq;
  static deserializeBinaryFromReader(message: EditUserReq, reader: jspb.BinaryReader): EditUserReq;
}

export namespace EditUserReq {
  export type AsObject = {
    userId: string,
    firstName: string,
    lastName: string,
    email: string,
    timeZone: string,
    companyId: string,
    role: string,
  }
}

export class EditUserReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: EditUserReply): EditUserReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditUserReply;
  static deserializeBinaryFromReader(message: EditUserReply, reader: jspb.BinaryReader): EditUserReply;
}

export namespace EditUserReply {
  export type AsObject = {
  }
}

export class DeleteUserReq extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserReq): DeleteUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserReq;
  static deserializeBinaryFromReader(message: DeleteUserReq, reader: jspb.BinaryReader): DeleteUserReq;
}

export namespace DeleteUserReq {
  export type AsObject = {
    userId: string,
    companyId: string,
  }
}

export class DeleteUserReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserReply): DeleteUserReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserReply;
  static deserializeBinaryFromReader(message: DeleteUserReply, reader: jspb.BinaryReader): DeleteUserReply;
}

export namespace DeleteUserReply {
  export type AsObject = {
  }
}

export class EnableUserReq extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getCompanyId(): string;
  setCompanyId(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnableUserReq): EnableUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableUserReq;
  static deserializeBinaryFromReader(message: EnableUserReq, reader: jspb.BinaryReader): EnableUserReq;
}

export namespace EnableUserReq {
  export type AsObject = {
    userId: string,
    companyId: string,
    enabled: boolean,
  }
}

export class EnableUserReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: EnableUserReply): EnableUserReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableUserReply;
  static deserializeBinaryFromReader(message: EnableUserReply, reader: jspb.BinaryReader): EnableUserReply;
}

export namespace EnableUserReply {
  export type AsObject = {
  }
}

export class GetUsersReq extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersReq): GetUsersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersReq;
  static deserializeBinaryFromReader(message: GetUsersReq, reader: jspb.BinaryReader): GetUsersReq;
}

export namespace GetUsersReq {
  export type AsObject = {
    companyId: string,
  }
}

export class GetUsersReply extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): void;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersReply): GetUsersReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersReply;
  static deserializeBinaryFromReader(message: GetUsersReply, reader: jspb.BinaryReader): GetUsersReply;
}

export namespace GetUsersReply {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): Role | undefined;
  setRole(value?: Role): void;

  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    firstName: string,
    lastName: string,
    timeZone: string,
    email: string,
    role?: Role.AsObject,
    status: boolean,
  }
}

export class Role extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    name: string,
    id: string,
  }
}

export class IntAddUserStoreReq extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntAddUserStoreReq.AsObject;
  static toObject(includeInstance: boolean, msg: IntAddUserStoreReq): IntAddUserStoreReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntAddUserStoreReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntAddUserStoreReq;
  static deserializeBinaryFromReader(message: IntAddUserStoreReq, reader: jspb.BinaryReader): IntAddUserStoreReq;
}

export namespace IntAddUserStoreReq {
  export type AsObject = {
    companyId: string,
    storeId: string,
  }
}

export class IntAddUserStoreReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntAddUserStoreReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntAddUserStoreReply): IntAddUserStoreReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntAddUserStoreReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntAddUserStoreReply;
  static deserializeBinaryFromReader(message: IntAddUserStoreReply, reader: jspb.BinaryReader): IntAddUserStoreReply;
}

export namespace IntAddUserStoreReply {
  export type AsObject = {
  }
}

export class IntDeleteUserStoreReq extends jspb.Message {
  getCompanyId(): string;
  setCompanyId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntDeleteUserStoreReq.AsObject;
  static toObject(includeInstance: boolean, msg: IntDeleteUserStoreReq): IntDeleteUserStoreReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntDeleteUserStoreReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntDeleteUserStoreReq;
  static deserializeBinaryFromReader(message: IntDeleteUserStoreReq, reader: jspb.BinaryReader): IntDeleteUserStoreReq;
}

export namespace IntDeleteUserStoreReq {
  export type AsObject = {
    companyId: string,
    storeId: string,
  }
}

export class IntDeleteUserStoreReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntDeleteUserStoreReply.AsObject;
  static toObject(includeInstance: boolean, msg: IntDeleteUserStoreReply): IntDeleteUserStoreReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntDeleteUserStoreReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntDeleteUserStoreReply;
  static deserializeBinaryFromReader(message: IntDeleteUserStoreReply, reader: jspb.BinaryReader): IntDeleteUserStoreReply;
}

export namespace IntDeleteUserStoreReply {
  export type AsObject = {
  }
}

export class GetRolesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRolesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetRolesReq): GetRolesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRolesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRolesReq;
  static deserializeBinaryFromReader(message: GetRolesReq, reader: jspb.BinaryReader): GetRolesReq;
}

export namespace GetRolesReq {
  export type AsObject = {
  }
}

export class GetRolesReply extends jspb.Message {
  clearRolesList(): void;
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): void;
  addRoles(value?: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRolesReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetRolesReply): GetRolesReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRolesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRolesReply;
  static deserializeBinaryFromReader(message: GetRolesReply, reader: jspb.BinaryReader): GetRolesReply;
}

export namespace GetRolesReply {
  export type AsObject = {
    rolesList: Array<Role.AsObject>,
  }
}

export class EditRoleReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditRoleReq.AsObject;
  static toObject(includeInstance: boolean, msg: EditRoleReq): EditRoleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditRoleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditRoleReq;
  static deserializeBinaryFromReader(message: EditRoleReq, reader: jspb.BinaryReader): EditRoleReq;
}

export namespace EditRoleReq {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class EditRoleReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditRoleReply.AsObject;
  static toObject(includeInstance: boolean, msg: EditRoleReply): EditRoleReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditRoleReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditRoleReply;
  static deserializeBinaryFromReader(message: EditRoleReply, reader: jspb.BinaryReader): EditRoleReply;
}

export namespace EditRoleReply {
  export type AsObject = {
  }
}

export class CreateRoleReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoleReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoleReq): CreateRoleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRoleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoleReq;
  static deserializeBinaryFromReader(message: CreateRoleReq, reader: jspb.BinaryReader): CreateRoleReq;
}

export namespace CreateRoleReq {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class CreateRoleReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoleReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoleReply): CreateRoleReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRoleReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoleReply;
  static deserializeBinaryFromReader(message: CreateRoleReply, reader: jspb.BinaryReader): CreateRoleReply;
}

export namespace CreateRoleReply {
  export type AsObject = {
  }
}

export class DeleteRoleReq extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoleReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoleReq): DeleteRoleReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRoleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoleReq;
  static deserializeBinaryFromReader(message: DeleteRoleReq, reader: jspb.BinaryReader): DeleteRoleReq;
}

export namespace DeleteRoleReq {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRoleReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoleReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoleReply): DeleteRoleReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRoleReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoleReply;
  static deserializeBinaryFromReader(message: DeleteRoleReply, reader: jspb.BinaryReader): DeleteRoleReply;
}

export namespace DeleteRoleReply {
  export type AsObject = {
  }
}

