// source: company_manager.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.companymanager.AddCardReply', null, global);
goog.exportSymbol('proto.companymanager.AddCardRequest', null, global);
goog.exportSymbol('proto.companymanager.AddCompanyReply', null, global);
goog.exportSymbol('proto.companymanager.AddStoreReply', null, global);
goog.exportSymbol('proto.companymanager.AddStoreRequest', null, global);
goog.exportSymbol('proto.companymanager.AddWarehouseReply', null, global);
goog.exportSymbol('proto.companymanager.AddWarehouseRequest', null, global);
goog.exportSymbol('proto.companymanager.BillingAddress', null, global);
goog.exportSymbol('proto.companymanager.BillingInfoReply', null, global);
goog.exportSymbol('proto.companymanager.BillingInfoRequest', null, global);
goog.exportSymbol('proto.companymanager.BillingInvoiceReply', null, global);
goog.exportSymbol('proto.companymanager.BillingInvoiceReq', null, global);
goog.exportSymbol('proto.companymanager.Card', null, global);
goog.exportSymbol('proto.companymanager.CompanyInfo', null, global);
goog.exportSymbol('proto.companymanager.CurrentSubscription', null, global);
goog.exportSymbol('proto.companymanager.DeleteCardReply', null, global);
goog.exportSymbol('proto.companymanager.DeleteCardRequest', null, global);
goog.exportSymbol('proto.companymanager.DeleteCompanyReply', null, global);
goog.exportSymbol('proto.companymanager.DeleteCompanyRequest', null, global);
goog.exportSymbol('proto.companymanager.DeleteStoreReply', null, global);
goog.exportSymbol('proto.companymanager.DeleteStoreRequest', null, global);
goog.exportSymbol('proto.companymanager.DeleteWarehouseReply', null, global);
goog.exportSymbol('proto.companymanager.DeleteWarehouseRequest', null, global);
goog.exportSymbol('proto.companymanager.EditCompanyReply', null, global);
goog.exportSymbol('proto.companymanager.EditCompanyRequest', null, global);
goog.exportSymbol('proto.companymanager.EditStoreReply', null, global);
goog.exportSymbol('proto.companymanager.EditStoreRequest', null, global);
goog.exportSymbol('proto.companymanager.EditWarehouseReply', null, global);
goog.exportSymbol('proto.companymanager.EditWarehouseRequest', null, global);
goog.exportSymbol('proto.companymanager.EnableDisableStoreReply', null, global);
goog.exportSymbol('proto.companymanager.EnableDisableStoreRequest', null, global);
goog.exportSymbol('proto.companymanager.EtsyAuthTokenReply', null, global);
goog.exportSymbol('proto.companymanager.EtsyAuthTokenRequest', null, global);
goog.exportSymbol('proto.companymanager.GetAllStoresReply', null, global);
goog.exportSymbol('proto.companymanager.GetAllStoresRequest', null, global);
goog.exportSymbol('proto.companymanager.GetCompanyReply', null, global);
goog.exportSymbol('proto.companymanager.GetCompanyRequest', null, global);
goog.exportSymbol('proto.companymanager.GetStoreKeyReply', null, global);
goog.exportSymbol('proto.companymanager.GetStoreKeyRequest', null, global);
goog.exportSymbol('proto.companymanager.GetStoreTypeReply', null, global);
goog.exportSymbol('proto.companymanager.GetStoreTypeRequest', null, global);
goog.exportSymbol('proto.companymanager.IntAllStoreListReply', null, global);
goog.exportSymbol('proto.companymanager.IntAllStoreListReq', null, global);
goog.exportSymbol('proto.companymanager.IntCreateInvoiceReply', null, global);
goog.exportSymbol('proto.companymanager.IntCreateInvoiceRequest', null, global);
goog.exportSymbol('proto.companymanager.IntDeleteCardReply', null, global);
goog.exportSymbol('proto.companymanager.IntDeleteCardRequest', null, global);
goog.exportSymbol('proto.companymanager.IntGetStoreInfoBulkReply', null, global);
goog.exportSymbol('proto.companymanager.IntGetStoreInfoBulkReq', null, global);
goog.exportSymbol('proto.companymanager.IntGetStoresToPollForOrdersReply', null, global);
goog.exportSymbol('proto.companymanager.IntGetStoresToPollForOrdersRequest', null, global);
goog.exportSymbol('proto.companymanager.IntGetStoresToPollForProductsReply', null, global);
goog.exportSymbol('proto.companymanager.IntGetStoresToPollForProductsRequest', null, global);
goog.exportSymbol('proto.companymanager.IntUpdateCompanyOrderCountReply', null, global);
goog.exportSymbol('proto.companymanager.IntUpdateCompanyOrderCountReq', null, global);
goog.exportSymbol('proto.companymanager.IntUpdateCompanyUserCountReply', null, global);
goog.exportSymbol('proto.companymanager.IntUpdateCompanyUserCountReq', null, global);
goog.exportSymbol('proto.companymanager.IntUpdateInvoiceReply', null, global);
goog.exportSymbol('proto.companymanager.IntUpdateInvoiceRequest', null, global);
goog.exportSymbol('proto.companymanager.Invoice', null, global);
goog.exportSymbol('proto.companymanager.ListWarehousesReply', null, global);
goog.exportSymbol('proto.companymanager.ListWarehousesRequest', null, global);
goog.exportSymbol('proto.companymanager.Product', null, global);
goog.exportSymbol('proto.companymanager.ResetStoreOrdersLastPolledReply', null, global);
goog.exportSymbol('proto.companymanager.ResetStoreOrdersLastPolledRequest', null, global);
goog.exportSymbol('proto.companymanager.ResetStoreProductsLastPolledReply', null, global);
goog.exportSymbol('proto.companymanager.ResetStoreProductsLastPolledRequest', null, global);
goog.exportSymbol('proto.companymanager.SetDefaultCardReply', null, global);
goog.exportSymbol('proto.companymanager.SetDefaultCardRequest', null, global);
goog.exportSymbol('proto.companymanager.SetShopifyAccessTokenReply', null, global);
goog.exportSymbol('proto.companymanager.SetShopifyAccessTokenRequest', null, global);
goog.exportSymbol('proto.companymanager.ShopifyCredentials', null, global);
goog.exportSymbol('proto.companymanager.ShopifyWareHouse', null, global);
goog.exportSymbol('proto.companymanager.StoreInfo', null, global);
goog.exportSymbol('proto.companymanager.StoreParams', null, global);
goog.exportSymbol('proto.companymanager.StoresCountReply', null, global);
goog.exportSymbol('proto.companymanager.StoresCountRequest', null, global);
goog.exportSymbol('proto.companymanager.SubscriptionAddReply', null, global);
goog.exportSymbol('proto.companymanager.SubscriptionAddRequest', null, global);
goog.exportSymbol('proto.companymanager.SubscriptionDeleteReply', null, global);
goog.exportSymbol('proto.companymanager.SubscriptionDeleteRequest', null, global);
goog.exportSymbol('proto.companymanager.SubscriptionUpdateReply', null, global);
goog.exportSymbol('proto.companymanager.SubscriptionUpdateRequest', null, global);
goog.exportSymbol('proto.companymanager.UpdateBillingAddressReply', null, global);
goog.exportSymbol('proto.companymanager.UpdateBillingAddressRequest', null, global);
goog.exportSymbol('proto.companymanager.UpdateCardReply', null, global);
goog.exportSymbol('proto.companymanager.UpdateCardRequest', null, global);
goog.exportSymbol('proto.companymanager.UpdateCompanyBillingAddressReply', null, global);
goog.exportSymbol('proto.companymanager.UpdateCompanyBillingAddressRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.CompanyInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.CompanyInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.CompanyInfo.displayName = 'proto.companymanager.CompanyInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.AddCompanyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.AddCompanyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.AddCompanyReply.displayName = 'proto.companymanager.AddCompanyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.EditCompanyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.EditCompanyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.EditCompanyRequest.displayName = 'proto.companymanager.EditCompanyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.EditCompanyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.EditCompanyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.EditCompanyReply.displayName = 'proto.companymanager.EditCompanyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.DeleteCompanyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.DeleteCompanyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.DeleteCompanyRequest.displayName = 'proto.companymanager.DeleteCompanyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.DeleteCompanyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.DeleteCompanyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.DeleteCompanyReply.displayName = 'proto.companymanager.DeleteCompanyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.GetCompanyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.GetCompanyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.GetCompanyRequest.displayName = 'proto.companymanager.GetCompanyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.GetCompanyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.GetCompanyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.GetCompanyReply.displayName = 'proto.companymanager.GetCompanyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.AddWarehouseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.AddWarehouseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.AddWarehouseRequest.displayName = 'proto.companymanager.AddWarehouseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.AddWarehouseReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.AddWarehouseReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.AddWarehouseReply.displayName = 'proto.companymanager.AddWarehouseReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.EditWarehouseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.EditWarehouseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.EditWarehouseRequest.displayName = 'proto.companymanager.EditWarehouseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.EditWarehouseReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.EditWarehouseReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.EditWarehouseReply.displayName = 'proto.companymanager.EditWarehouseReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.DeleteWarehouseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.DeleteWarehouseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.DeleteWarehouseRequest.displayName = 'proto.companymanager.DeleteWarehouseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.DeleteWarehouseReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.DeleteWarehouseReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.DeleteWarehouseReply.displayName = 'proto.companymanager.DeleteWarehouseReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.ListWarehousesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.ListWarehousesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.ListWarehousesRequest.displayName = 'proto.companymanager.ListWarehousesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.ListWarehousesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.companymanager.ListWarehousesReply.repeatedFields_, null);
};
goog.inherits(proto.companymanager.ListWarehousesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.ListWarehousesReply.displayName = 'proto.companymanager.ListWarehousesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.AddStoreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.AddStoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.AddStoreRequest.displayName = 'proto.companymanager.AddStoreRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.StoreParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.StoreParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.StoreParams.displayName = 'proto.companymanager.StoreParams';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.AddStoreReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.AddStoreReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.AddStoreReply.displayName = 'proto.companymanager.AddStoreReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.EditStoreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.EditStoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.EditStoreRequest.displayName = 'proto.companymanager.EditStoreRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.EditStoreReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.EditStoreReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.EditStoreReply.displayName = 'proto.companymanager.EditStoreReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.DeleteStoreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.DeleteStoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.DeleteStoreRequest.displayName = 'proto.companymanager.DeleteStoreRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.DeleteStoreReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.DeleteStoreReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.DeleteStoreReply.displayName = 'proto.companymanager.DeleteStoreReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.EnableDisableStoreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.EnableDisableStoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.EnableDisableStoreRequest.displayName = 'proto.companymanager.EnableDisableStoreRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.EnableDisableStoreReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.EnableDisableStoreReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.EnableDisableStoreReply.displayName = 'proto.companymanager.EnableDisableStoreReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntGetStoresToPollForOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.IntGetStoresToPollForOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntGetStoresToPollForOrdersRequest.displayName = 'proto.companymanager.IntGetStoresToPollForOrdersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntGetStoresToPollForOrdersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.companymanager.IntGetStoresToPollForOrdersReply.repeatedFields_, null);
};
goog.inherits(proto.companymanager.IntGetStoresToPollForOrdersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntGetStoresToPollForOrdersReply.displayName = 'proto.companymanager.IntGetStoresToPollForOrdersReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntGetStoresToPollForProductsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.IntGetStoresToPollForProductsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntGetStoresToPollForProductsRequest.displayName = 'proto.companymanager.IntGetStoresToPollForProductsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntGetStoresToPollForProductsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.companymanager.IntGetStoresToPollForProductsReply.repeatedFields_, null);
};
goog.inherits(proto.companymanager.IntGetStoresToPollForProductsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntGetStoresToPollForProductsReply.displayName = 'proto.companymanager.IntGetStoresToPollForProductsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.StoreInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.StoreInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.StoreInfo.displayName = 'proto.companymanager.StoreInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.GetAllStoresRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.GetAllStoresRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.GetAllStoresRequest.displayName = 'proto.companymanager.GetAllStoresRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.GetAllStoresReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.companymanager.GetAllStoresReply.repeatedFields_, null);
};
goog.inherits(proto.companymanager.GetAllStoresReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.GetAllStoresReply.displayName = 'proto.companymanager.GetAllStoresReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.StoresCountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.StoresCountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.StoresCountRequest.displayName = 'proto.companymanager.StoresCountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.StoresCountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.StoresCountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.StoresCountReply.displayName = 'proto.companymanager.StoresCountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.GetStoreKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.GetStoreKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.GetStoreKeyRequest.displayName = 'proto.companymanager.GetStoreKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.GetStoreKeyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.GetStoreKeyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.GetStoreKeyReply.displayName = 'proto.companymanager.GetStoreKeyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.ShopifyCredentials = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.ShopifyCredentials, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.ShopifyCredentials.displayName = 'proto.companymanager.ShopifyCredentials';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.SetShopifyAccessTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.SetShopifyAccessTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.SetShopifyAccessTokenRequest.displayName = 'proto.companymanager.SetShopifyAccessTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.SetShopifyAccessTokenReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.SetShopifyAccessTokenReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.SetShopifyAccessTokenReply.displayName = 'proto.companymanager.SetShopifyAccessTokenReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.GetStoreTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.GetStoreTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.GetStoreTypeRequest.displayName = 'proto.companymanager.GetStoreTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.GetStoreTypeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.GetStoreTypeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.GetStoreTypeReply.displayName = 'proto.companymanager.GetStoreTypeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.ResetStoreOrdersLastPolledRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.ResetStoreOrdersLastPolledRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.ResetStoreOrdersLastPolledRequest.displayName = 'proto.companymanager.ResetStoreOrdersLastPolledRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.ResetStoreOrdersLastPolledReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.ResetStoreOrdersLastPolledReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.ResetStoreOrdersLastPolledReply.displayName = 'proto.companymanager.ResetStoreOrdersLastPolledReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.ResetStoreProductsLastPolledRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.ResetStoreProductsLastPolledRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.ResetStoreProductsLastPolledRequest.displayName = 'proto.companymanager.ResetStoreProductsLastPolledRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.ResetStoreProductsLastPolledReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.ResetStoreProductsLastPolledReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.ResetStoreProductsLastPolledReply.displayName = 'proto.companymanager.ResetStoreProductsLastPolledReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.EtsyAuthTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.EtsyAuthTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.EtsyAuthTokenRequest.displayName = 'proto.companymanager.EtsyAuthTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.EtsyAuthTokenReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.EtsyAuthTokenReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.EtsyAuthTokenReply.displayName = 'proto.companymanager.EtsyAuthTokenReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.BillingInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.BillingInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.BillingInfoRequest.displayName = 'proto.companymanager.BillingInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.BillingInfoReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.companymanager.BillingInfoReply.repeatedFields_, null);
};
goog.inherits(proto.companymanager.BillingInfoReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.BillingInfoReply.displayName = 'proto.companymanager.BillingInfoReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.BillingAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.BillingAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.BillingAddress.displayName = 'proto.companymanager.BillingAddress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.CurrentSubscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.companymanager.CurrentSubscription.repeatedFields_, null);
};
goog.inherits(proto.companymanager.CurrentSubscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.CurrentSubscription.displayName = 'proto.companymanager.CurrentSubscription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.Product = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.Product, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.Product.displayName = 'proto.companymanager.Product';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.Card = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.Card, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.Card.displayName = 'proto.companymanager.Card';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.SubscriptionUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.SubscriptionUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.SubscriptionUpdateRequest.displayName = 'proto.companymanager.SubscriptionUpdateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.SubscriptionUpdateReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.SubscriptionUpdateReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.SubscriptionUpdateReply.displayName = 'proto.companymanager.SubscriptionUpdateReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.SubscriptionAddRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.SubscriptionAddRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.SubscriptionAddRequest.displayName = 'proto.companymanager.SubscriptionAddRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.SubscriptionAddReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.SubscriptionAddReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.SubscriptionAddReply.displayName = 'proto.companymanager.SubscriptionAddReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.SubscriptionDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.SubscriptionDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.SubscriptionDeleteRequest.displayName = 'proto.companymanager.SubscriptionDeleteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.SubscriptionDeleteReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.SubscriptionDeleteReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.SubscriptionDeleteReply.displayName = 'proto.companymanager.SubscriptionDeleteReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.UpdateBillingAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.UpdateBillingAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.UpdateBillingAddressRequest.displayName = 'proto.companymanager.UpdateBillingAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.UpdateBillingAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.UpdateBillingAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.UpdateBillingAddressReply.displayName = 'proto.companymanager.UpdateBillingAddressReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.AddCardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.AddCardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.AddCardRequest.displayName = 'proto.companymanager.AddCardRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.AddCardReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.AddCardReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.AddCardReply.displayName = 'proto.companymanager.AddCardReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.UpdateCardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.UpdateCardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.UpdateCardRequest.displayName = 'proto.companymanager.UpdateCardRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.UpdateCardReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.UpdateCardReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.UpdateCardReply.displayName = 'proto.companymanager.UpdateCardReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntDeleteCardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.IntDeleteCardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntDeleteCardRequest.displayName = 'proto.companymanager.IntDeleteCardRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntDeleteCardReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.IntDeleteCardReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntDeleteCardReply.displayName = 'proto.companymanager.IntDeleteCardReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.UpdateCompanyBillingAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.UpdateCompanyBillingAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.UpdateCompanyBillingAddressRequest.displayName = 'proto.companymanager.UpdateCompanyBillingAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.UpdateCompanyBillingAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.UpdateCompanyBillingAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.UpdateCompanyBillingAddressReply.displayName = 'proto.companymanager.UpdateCompanyBillingAddressReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.SetDefaultCardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.SetDefaultCardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.SetDefaultCardRequest.displayName = 'proto.companymanager.SetDefaultCardRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.SetDefaultCardReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.SetDefaultCardReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.SetDefaultCardReply.displayName = 'proto.companymanager.SetDefaultCardReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntCreateInvoiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.IntCreateInvoiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntCreateInvoiceRequest.displayName = 'proto.companymanager.IntCreateInvoiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntCreateInvoiceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.IntCreateInvoiceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntCreateInvoiceReply.displayName = 'proto.companymanager.IntCreateInvoiceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntUpdateInvoiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.IntUpdateInvoiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntUpdateInvoiceRequest.displayName = 'proto.companymanager.IntUpdateInvoiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntUpdateInvoiceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.IntUpdateInvoiceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntUpdateInvoiceReply.displayName = 'proto.companymanager.IntUpdateInvoiceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.BillingInvoiceReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.BillingInvoiceReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.BillingInvoiceReq.displayName = 'proto.companymanager.BillingInvoiceReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.BillingInvoiceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.companymanager.BillingInvoiceReply.repeatedFields_, null);
};
goog.inherits(proto.companymanager.BillingInvoiceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.BillingInvoiceReply.displayName = 'proto.companymanager.BillingInvoiceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.Invoice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.Invoice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.Invoice.displayName = 'proto.companymanager.Invoice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.DeleteCardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.DeleteCardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.DeleteCardRequest.displayName = 'proto.companymanager.DeleteCardRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.DeleteCardReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.DeleteCardReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.DeleteCardReply.displayName = 'proto.companymanager.DeleteCardReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntAllStoreListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.IntAllStoreListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntAllStoreListReq.displayName = 'proto.companymanager.IntAllStoreListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntAllStoreListReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.companymanager.IntAllStoreListReply.repeatedFields_, null);
};
goog.inherits(proto.companymanager.IntAllStoreListReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntAllStoreListReply.displayName = 'proto.companymanager.IntAllStoreListReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntUpdateCompanyUserCountReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.IntUpdateCompanyUserCountReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntUpdateCompanyUserCountReq.displayName = 'proto.companymanager.IntUpdateCompanyUserCountReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntUpdateCompanyUserCountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.IntUpdateCompanyUserCountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntUpdateCompanyUserCountReply.displayName = 'proto.companymanager.IntUpdateCompanyUserCountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntUpdateCompanyOrderCountReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.IntUpdateCompanyOrderCountReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntUpdateCompanyOrderCountReq.displayName = 'proto.companymanager.IntUpdateCompanyOrderCountReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntUpdateCompanyOrderCountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.IntUpdateCompanyOrderCountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntUpdateCompanyOrderCountReply.displayName = 'proto.companymanager.IntUpdateCompanyOrderCountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntGetStoreInfoBulkReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.companymanager.IntGetStoreInfoBulkReq.repeatedFields_, null);
};
goog.inherits(proto.companymanager.IntGetStoreInfoBulkReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntGetStoreInfoBulkReq.displayName = 'proto.companymanager.IntGetStoreInfoBulkReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.IntGetStoreInfoBulkReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.companymanager.IntGetStoreInfoBulkReply.repeatedFields_, null);
};
goog.inherits(proto.companymanager.IntGetStoreInfoBulkReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.IntGetStoreInfoBulkReply.displayName = 'proto.companymanager.IntGetStoreInfoBulkReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.companymanager.ShopifyWareHouse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.companymanager.ShopifyWareHouse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.companymanager.ShopifyWareHouse.displayName = 'proto.companymanager.ShopifyWareHouse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.CompanyInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.CompanyInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.CompanyInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.CompanyInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    logoUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    vatNumber: jspb.Message.getFieldWithDefault(msg, 4, ""),
    eoriNumber: jspb.Message.getFieldWithDefault(msg, 5, ""),
    defaultCurrency: jspb.Message.getFieldWithDefault(msg, 6, ""),
    purchaseOrderPrefix: jspb.Message.getFieldWithDefault(msg, 7, ""),
    weightUnit: jspb.Message.getFieldWithDefault(msg, 8, ""),
    dimensionUnit: jspb.Message.getFieldWithDefault(msg, 9, ""),
    invoiceNote: jspb.Message.getFieldWithDefault(msg, 10, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 11, ""),
    address1: jspb.Message.getFieldWithDefault(msg, 12, ""),
    address2: jspb.Message.getFieldWithDefault(msg, 13, ""),
    address3: jspb.Message.getFieldWithDefault(msg, 14, ""),
    country: jspb.Message.getFieldWithDefault(msg, 15, ""),
    region: jspb.Message.getFieldWithDefault(msg, 16, ""),
    city: jspb.Message.getFieldWithDefault(msg, 17, ""),
    postcode: jspb.Message.getFieldWithDefault(msg, 18, ""),
    id: jspb.Message.getFieldWithDefault(msg, 19, ""),
    barcodeFormat: jspb.Message.getFieldWithDefault(msg, 20, ""),
    ioss: (f = msg.getIoss()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    userCount: jspb.Message.getFieldWithDefault(msg, 22, 0),
    importedOrderCount: jspb.Message.getFieldWithDefault(msg, 23, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.CompanyInfo}
 */
proto.companymanager.CompanyInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.CompanyInfo;
  return proto.companymanager.CompanyInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.CompanyInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.CompanyInfo}
 */
proto.companymanager.CompanyInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogoUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVatNumber(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEoriNumber(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultCurrency(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPurchaseOrderPrefix(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeightUnit(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDimensionUnit(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceNote(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress1(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress2(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress3(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostcode(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setBarcodeFormat(value);
      break;
    case 21:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setIoss(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserCount(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setImportedOrderCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.CompanyInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.CompanyInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.CompanyInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.CompanyInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLogoUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVatNumber();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEoriNumber();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDefaultCurrency();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPurchaseOrderPrefix();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getWeightUnit();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDimensionUnit();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getInvoiceNote();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getAddress1();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAddress2();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAddress3();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getPostcode();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getBarcodeFormat();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getIoss();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getUserCount();
  if (f !== 0) {
    writer.writeUint32(
      22,
      f
    );
  }
  f = message.getImportedOrderCount();
  if (f !== 0) {
    writer.writeUint32(
      23,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string logo_url = 3;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getLogoUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setLogoUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string vat_number = 4;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getVatNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setVatNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string eori_number = 5;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getEoriNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setEoriNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string default_currency = 6;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getDefaultCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setDefaultCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string purchase_order_prefix = 7;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getPurchaseOrderPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setPurchaseOrderPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string weight_unit = 8;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getWeightUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setWeightUnit = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string dimension_unit = 9;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getDimensionUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setDimensionUnit = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string invoice_note = 10;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getInvoiceNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setInvoiceNote = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string phone = 11;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string address1 = 12;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getAddress1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setAddress1 = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string address2 = 13;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getAddress2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setAddress2 = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string address3 = 14;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getAddress3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setAddress3 = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string country = 15;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string region = 16;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string city = 17;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string postcode = 18;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getPostcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setPostcode = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string id = 19;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string barcode_format = 20;
 * @return {string}
 */
proto.companymanager.CompanyInfo.prototype.getBarcodeFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setBarcodeFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional google.protobuf.StringValue ioss = 21;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.companymanager.CompanyInfo.prototype.getIoss = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 21));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.companymanager.CompanyInfo} returns this
*/
proto.companymanager.CompanyInfo.prototype.setIoss = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.clearIoss = function() {
  return this.setIoss(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.CompanyInfo.prototype.hasIoss = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional uint32 user_count = 22;
 * @return {number}
 */
proto.companymanager.CompanyInfo.prototype.getUserCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setUserCount = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional uint32 imported_order_count = 23;
 * @return {number}
 */
proto.companymanager.CompanyInfo.prototype.getImportedOrderCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.CompanyInfo} returns this
 */
proto.companymanager.CompanyInfo.prototype.setImportedOrderCount = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.AddCompanyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.AddCompanyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.AddCompanyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddCompanyReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.AddCompanyReply}
 */
proto.companymanager.AddCompanyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.AddCompanyReply;
  return proto.companymanager.AddCompanyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.AddCompanyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.AddCompanyReply}
 */
proto.companymanager.AddCompanyReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.AddCompanyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.AddCompanyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.AddCompanyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddCompanyReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.AddCompanyReply.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddCompanyReply} returns this
 */
proto.companymanager.AddCompanyReply.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.EditCompanyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.EditCompanyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.EditCompanyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EditCompanyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    companyInfo: (f = msg.getCompanyInfo()) && proto.companymanager.CompanyInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.EditCompanyRequest}
 */
proto.companymanager.EditCompanyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.EditCompanyRequest;
  return proto.companymanager.EditCompanyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.EditCompanyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.EditCompanyRequest}
 */
proto.companymanager.EditCompanyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 2:
      var value = new proto.companymanager.CompanyInfo;
      reader.readMessage(value,proto.companymanager.CompanyInfo.deserializeBinaryFromReader);
      msg.setCompanyInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.EditCompanyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.EditCompanyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.EditCompanyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EditCompanyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompanyInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.companymanager.CompanyInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.EditCompanyRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EditCompanyRequest} returns this
 */
proto.companymanager.EditCompanyRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CompanyInfo company_info = 2;
 * @return {?proto.companymanager.CompanyInfo}
 */
proto.companymanager.EditCompanyRequest.prototype.getCompanyInfo = function() {
  return /** @type{?proto.companymanager.CompanyInfo} */ (
    jspb.Message.getWrapperField(this, proto.companymanager.CompanyInfo, 2));
};


/**
 * @param {?proto.companymanager.CompanyInfo|undefined} value
 * @return {!proto.companymanager.EditCompanyRequest} returns this
*/
proto.companymanager.EditCompanyRequest.prototype.setCompanyInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.EditCompanyRequest} returns this
 */
proto.companymanager.EditCompanyRequest.prototype.clearCompanyInfo = function() {
  return this.setCompanyInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.EditCompanyRequest.prototype.hasCompanyInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.EditCompanyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.EditCompanyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.EditCompanyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EditCompanyReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.EditCompanyReply}
 */
proto.companymanager.EditCompanyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.EditCompanyReply;
  return proto.companymanager.EditCompanyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.EditCompanyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.EditCompanyReply}
 */
proto.companymanager.EditCompanyReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.EditCompanyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.EditCompanyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.EditCompanyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EditCompanyReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.DeleteCompanyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.DeleteCompanyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.DeleteCompanyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteCompanyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.DeleteCompanyRequest}
 */
proto.companymanager.DeleteCompanyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.DeleteCompanyRequest;
  return proto.companymanager.DeleteCompanyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.DeleteCompanyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.DeleteCompanyRequest}
 */
proto.companymanager.DeleteCompanyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.DeleteCompanyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.DeleteCompanyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.DeleteCompanyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteCompanyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.DeleteCompanyRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.DeleteCompanyRequest} returns this
 */
proto.companymanager.DeleteCompanyRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.DeleteCompanyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.DeleteCompanyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.DeleteCompanyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteCompanyReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.DeleteCompanyReply}
 */
proto.companymanager.DeleteCompanyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.DeleteCompanyReply;
  return proto.companymanager.DeleteCompanyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.DeleteCompanyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.DeleteCompanyReply}
 */
proto.companymanager.DeleteCompanyReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.DeleteCompanyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.DeleteCompanyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.DeleteCompanyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteCompanyReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.GetCompanyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.GetCompanyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.GetCompanyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetCompanyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.GetCompanyRequest}
 */
proto.companymanager.GetCompanyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.GetCompanyRequest;
  return proto.companymanager.GetCompanyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.GetCompanyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.GetCompanyRequest}
 */
proto.companymanager.GetCompanyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.GetCompanyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.GetCompanyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.GetCompanyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetCompanyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.GetCompanyRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.GetCompanyRequest} returns this
 */
proto.companymanager.GetCompanyRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.GetCompanyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.GetCompanyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.GetCompanyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetCompanyReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyInfo: (f = msg.getCompanyInfo()) && proto.companymanager.CompanyInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.GetCompanyReply}
 */
proto.companymanager.GetCompanyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.GetCompanyReply;
  return proto.companymanager.GetCompanyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.GetCompanyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.GetCompanyReply}
 */
proto.companymanager.GetCompanyReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.companymanager.CompanyInfo;
      reader.readMessage(value,proto.companymanager.CompanyInfo.deserializeBinaryFromReader);
      msg.setCompanyInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.GetCompanyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.GetCompanyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.GetCompanyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetCompanyReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.companymanager.CompanyInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional CompanyInfo company_info = 1;
 * @return {?proto.companymanager.CompanyInfo}
 */
proto.companymanager.GetCompanyReply.prototype.getCompanyInfo = function() {
  return /** @type{?proto.companymanager.CompanyInfo} */ (
    jspb.Message.getWrapperField(this, proto.companymanager.CompanyInfo, 1));
};


/**
 * @param {?proto.companymanager.CompanyInfo|undefined} value
 * @return {!proto.companymanager.GetCompanyReply} returns this
*/
proto.companymanager.GetCompanyReply.prototype.setCompanyInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.GetCompanyReply} returns this
 */
proto.companymanager.GetCompanyReply.prototype.clearCompanyInfo = function() {
  return this.setCompanyInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.GetCompanyReply.prototype.hasCompanyInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.AddWarehouseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.AddWarehouseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.AddWarehouseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddWarehouseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    warehouseInfo: (f = msg.getWarehouseInfo()) && proto.companymanager.CompanyInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.AddWarehouseRequest}
 */
proto.companymanager.AddWarehouseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.AddWarehouseRequest;
  return proto.companymanager.AddWarehouseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.AddWarehouseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.AddWarehouseRequest}
 */
proto.companymanager.AddWarehouseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 2:
      var value = new proto.companymanager.CompanyInfo;
      reader.readMessage(value,proto.companymanager.CompanyInfo.deserializeBinaryFromReader);
      msg.setWarehouseInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.AddWarehouseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.AddWarehouseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.AddWarehouseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddWarehouseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWarehouseInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.companymanager.CompanyInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.AddWarehouseRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddWarehouseRequest} returns this
 */
proto.companymanager.AddWarehouseRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CompanyInfo warehouse_info = 2;
 * @return {?proto.companymanager.CompanyInfo}
 */
proto.companymanager.AddWarehouseRequest.prototype.getWarehouseInfo = function() {
  return /** @type{?proto.companymanager.CompanyInfo} */ (
    jspb.Message.getWrapperField(this, proto.companymanager.CompanyInfo, 2));
};


/**
 * @param {?proto.companymanager.CompanyInfo|undefined} value
 * @return {!proto.companymanager.AddWarehouseRequest} returns this
*/
proto.companymanager.AddWarehouseRequest.prototype.setWarehouseInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.AddWarehouseRequest} returns this
 */
proto.companymanager.AddWarehouseRequest.prototype.clearWarehouseInfo = function() {
  return this.setWarehouseInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.AddWarehouseRequest.prototype.hasWarehouseInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.AddWarehouseReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.AddWarehouseReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.AddWarehouseReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddWarehouseReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.AddWarehouseReply}
 */
proto.companymanager.AddWarehouseReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.AddWarehouseReply;
  return proto.companymanager.AddWarehouseReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.AddWarehouseReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.AddWarehouseReply}
 */
proto.companymanager.AddWarehouseReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.AddWarehouseReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.AddWarehouseReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.AddWarehouseReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddWarehouseReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.EditWarehouseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.EditWarehouseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.EditWarehouseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EditWarehouseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    warehouseId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    warehouseInfo: (f = msg.getWarehouseInfo()) && proto.companymanager.CompanyInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.EditWarehouseRequest}
 */
proto.companymanager.EditWarehouseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.EditWarehouseRequest;
  return proto.companymanager.EditWarehouseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.EditWarehouseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.EditWarehouseRequest}
 */
proto.companymanager.EditWarehouseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseId(value);
      break;
    case 3:
      var value = new proto.companymanager.CompanyInfo;
      reader.readMessage(value,proto.companymanager.CompanyInfo.deserializeBinaryFromReader);
      msg.setWarehouseInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.EditWarehouseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.EditWarehouseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.EditWarehouseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EditWarehouseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWarehouseId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWarehouseInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.companymanager.CompanyInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.EditWarehouseRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EditWarehouseRequest} returns this
 */
proto.companymanager.EditWarehouseRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string warehouse_id = 2;
 * @return {string}
 */
proto.companymanager.EditWarehouseRequest.prototype.getWarehouseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EditWarehouseRequest} returns this
 */
proto.companymanager.EditWarehouseRequest.prototype.setWarehouseId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CompanyInfo warehouse_info = 3;
 * @return {?proto.companymanager.CompanyInfo}
 */
proto.companymanager.EditWarehouseRequest.prototype.getWarehouseInfo = function() {
  return /** @type{?proto.companymanager.CompanyInfo} */ (
    jspb.Message.getWrapperField(this, proto.companymanager.CompanyInfo, 3));
};


/**
 * @param {?proto.companymanager.CompanyInfo|undefined} value
 * @return {!proto.companymanager.EditWarehouseRequest} returns this
*/
proto.companymanager.EditWarehouseRequest.prototype.setWarehouseInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.EditWarehouseRequest} returns this
 */
proto.companymanager.EditWarehouseRequest.prototype.clearWarehouseInfo = function() {
  return this.setWarehouseInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.EditWarehouseRequest.prototype.hasWarehouseInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.EditWarehouseReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.EditWarehouseReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.EditWarehouseReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EditWarehouseReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.EditWarehouseReply}
 */
proto.companymanager.EditWarehouseReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.EditWarehouseReply;
  return proto.companymanager.EditWarehouseReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.EditWarehouseReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.EditWarehouseReply}
 */
proto.companymanager.EditWarehouseReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.EditWarehouseReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.EditWarehouseReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.EditWarehouseReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EditWarehouseReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.DeleteWarehouseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.DeleteWarehouseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.DeleteWarehouseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteWarehouseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    warehouseId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.DeleteWarehouseRequest}
 */
proto.companymanager.DeleteWarehouseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.DeleteWarehouseRequest;
  return proto.companymanager.DeleteWarehouseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.DeleteWarehouseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.DeleteWarehouseRequest}
 */
proto.companymanager.DeleteWarehouseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouseId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.DeleteWarehouseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.DeleteWarehouseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.DeleteWarehouseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteWarehouseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWarehouseId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.DeleteWarehouseRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.DeleteWarehouseRequest} returns this
 */
proto.companymanager.DeleteWarehouseRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string warehouse_id = 2;
 * @return {string}
 */
proto.companymanager.DeleteWarehouseRequest.prototype.getWarehouseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.DeleteWarehouseRequest} returns this
 */
proto.companymanager.DeleteWarehouseRequest.prototype.setWarehouseId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.DeleteWarehouseReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.DeleteWarehouseReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.DeleteWarehouseReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteWarehouseReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.DeleteWarehouseReply}
 */
proto.companymanager.DeleteWarehouseReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.DeleteWarehouseReply;
  return proto.companymanager.DeleteWarehouseReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.DeleteWarehouseReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.DeleteWarehouseReply}
 */
proto.companymanager.DeleteWarehouseReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.DeleteWarehouseReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.DeleteWarehouseReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.DeleteWarehouseReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteWarehouseReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.ListWarehousesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.ListWarehousesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.ListWarehousesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ListWarehousesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.ListWarehousesRequest}
 */
proto.companymanager.ListWarehousesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.ListWarehousesRequest;
  return proto.companymanager.ListWarehousesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.ListWarehousesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.ListWarehousesRequest}
 */
proto.companymanager.ListWarehousesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.ListWarehousesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.ListWarehousesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.ListWarehousesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ListWarehousesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.ListWarehousesRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.ListWarehousesRequest} returns this
 */
proto.companymanager.ListWarehousesRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.companymanager.ListWarehousesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.ListWarehousesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.ListWarehousesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.ListWarehousesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ListWarehousesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    warehousesList: jspb.Message.toObjectList(msg.getWarehousesList(),
    proto.companymanager.CompanyInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.ListWarehousesReply}
 */
proto.companymanager.ListWarehousesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.ListWarehousesReply;
  return proto.companymanager.ListWarehousesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.ListWarehousesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.ListWarehousesReply}
 */
proto.companymanager.ListWarehousesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.companymanager.CompanyInfo;
      reader.readMessage(value,proto.companymanager.CompanyInfo.deserializeBinaryFromReader);
      msg.addWarehouses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.ListWarehousesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.ListWarehousesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.ListWarehousesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ListWarehousesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWarehousesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.companymanager.CompanyInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CompanyInfo warehouses = 1;
 * @return {!Array<!proto.companymanager.CompanyInfo>}
 */
proto.companymanager.ListWarehousesReply.prototype.getWarehousesList = function() {
  return /** @type{!Array<!proto.companymanager.CompanyInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.companymanager.CompanyInfo, 1));
};


/**
 * @param {!Array<!proto.companymanager.CompanyInfo>} value
 * @return {!proto.companymanager.ListWarehousesReply} returns this
*/
proto.companymanager.ListWarehousesReply.prototype.setWarehousesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.companymanager.CompanyInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.companymanager.CompanyInfo}
 */
proto.companymanager.ListWarehousesReply.prototype.addWarehouses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.companymanager.CompanyInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.companymanager.ListWarehousesReply} returns this
 */
proto.companymanager.ListWarehousesReply.prototype.clearWarehousesList = function() {
  return this.setWarehousesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.AddStoreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.AddStoreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.AddStoreRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddStoreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    storeUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    parameters: (f = msg.getParameters()) && proto.companymanager.StoreParams.toObject(includeInstance, f),
    shortName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    iconColour: jspb.Message.getFieldWithDefault(msg, 7, ""),
    defaultDeliveryMethod: jspb.Message.getFieldWithDefault(msg, 8, ""),
    importAllOrders: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    storeCurrency: jspb.Message.getFieldWithDefault(msg, 10, ""),
    storeEmail: jspb.Message.getFieldWithDefault(msg, 11, ""),
    importAllProducts: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    shouldSkipIu: (f = msg.getShouldSkipIu()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.AddStoreRequest}
 */
proto.companymanager.AddStoreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.AddStoreRequest;
  return proto.companymanager.AddStoreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.AddStoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.AddStoreRequest}
 */
proto.companymanager.AddStoreRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreUrl(value);
      break;
    case 5:
      var value = new proto.companymanager.StoreParams;
      reader.readMessage(value,proto.companymanager.StoreParams.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconColour(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultDeliveryMethod(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setImportAllOrders(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreCurrency(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreEmail(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setImportAllProducts(value);
      break;
    case 13:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setShouldSkipIu(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.AddStoreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.AddStoreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.AddStoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddStoreRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStoreUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.companymanager.StoreParams.serializeBinaryToWriter
    );
  }
  f = message.getShortName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIconColour();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDefaultDeliveryMethod();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getImportAllOrders();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getStoreCurrency();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getStoreEmail();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getImportAllProducts();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getShouldSkipIu();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.companymanager.AddStoreRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddStoreRequest} returns this
 */
proto.companymanager.AddStoreRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.companymanager.AddStoreRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddStoreRequest} returns this
 */
proto.companymanager.AddStoreRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string company_id = 3;
 * @return {string}
 */
proto.companymanager.AddStoreRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddStoreRequest} returns this
 */
proto.companymanager.AddStoreRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string store_url = 4;
 * @return {string}
 */
proto.companymanager.AddStoreRequest.prototype.getStoreUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddStoreRequest} returns this
 */
proto.companymanager.AddStoreRequest.prototype.setStoreUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional StoreParams parameters = 5;
 * @return {?proto.companymanager.StoreParams}
 */
proto.companymanager.AddStoreRequest.prototype.getParameters = function() {
  return /** @type{?proto.companymanager.StoreParams} */ (
    jspb.Message.getWrapperField(this, proto.companymanager.StoreParams, 5));
};


/**
 * @param {?proto.companymanager.StoreParams|undefined} value
 * @return {!proto.companymanager.AddStoreRequest} returns this
*/
proto.companymanager.AddStoreRequest.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.AddStoreRequest} returns this
 */
proto.companymanager.AddStoreRequest.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.AddStoreRequest.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string short_name = 6;
 * @return {string}
 */
proto.companymanager.AddStoreRequest.prototype.getShortName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddStoreRequest} returns this
 */
proto.companymanager.AddStoreRequest.prototype.setShortName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string icon_colour = 7;
 * @return {string}
 */
proto.companymanager.AddStoreRequest.prototype.getIconColour = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddStoreRequest} returns this
 */
proto.companymanager.AddStoreRequest.prototype.setIconColour = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string default_delivery_method = 8;
 * @return {string}
 */
proto.companymanager.AddStoreRequest.prototype.getDefaultDeliveryMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddStoreRequest} returns this
 */
proto.companymanager.AddStoreRequest.prototype.setDefaultDeliveryMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool import_all_orders = 9;
 * @return {boolean}
 */
proto.companymanager.AddStoreRequest.prototype.getImportAllOrders = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.companymanager.AddStoreRequest} returns this
 */
proto.companymanager.AddStoreRequest.prototype.setImportAllOrders = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string store_currency = 10;
 * @return {string}
 */
proto.companymanager.AddStoreRequest.prototype.getStoreCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddStoreRequest} returns this
 */
proto.companymanager.AddStoreRequest.prototype.setStoreCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string store_email = 11;
 * @return {string}
 */
proto.companymanager.AddStoreRequest.prototype.getStoreEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddStoreRequest} returns this
 */
proto.companymanager.AddStoreRequest.prototype.setStoreEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool import_all_products = 12;
 * @return {boolean}
 */
proto.companymanager.AddStoreRequest.prototype.getImportAllProducts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.companymanager.AddStoreRequest} returns this
 */
proto.companymanager.AddStoreRequest.prototype.setImportAllProducts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional google.protobuf.BoolValue should_skip_iu = 13;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.companymanager.AddStoreRequest.prototype.getShouldSkipIu = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 13));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.companymanager.AddStoreRequest} returns this
*/
proto.companymanager.AddStoreRequest.prototype.setShouldSkipIu = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.AddStoreRequest} returns this
 */
proto.companymanager.AddStoreRequest.prototype.clearShouldSkipIu = function() {
  return this.setShouldSkipIu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.AddStoreRequest.prototype.hasShouldSkipIu = function() {
  return jspb.Message.getField(this, 13) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.StoreParams.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.StoreParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.StoreParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.StoreParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    bridgeUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
    storeRoot: jspb.Message.getFieldWithDefault(msg, 2, ""),
    validateVersion: jspb.Message.getFieldWithDefault(msg, 3, ""),
    storeKey: jspb.Message.getFieldWithDefault(msg, 4, ""),
    amazonSellerId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    amazonSpClientId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    amazonSpClientSecret: jspb.Message.getFieldWithDefault(msg, 7, ""),
    amazonSpAwsUserKeyId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    amazonSpAwsUserSecret: jspb.Message.getFieldWithDefault(msg, 9, ""),
    amazonSpAwsRegion: jspb.Message.getFieldWithDefault(msg, 10, ""),
    amazonSpAwsRoleArn: jspb.Message.getFieldWithDefault(msg, 11, ""),
    amazonSpRefreshToken: jspb.Message.getFieldWithDefault(msg, 12, ""),
    amazonSpApiEnvironment: jspb.Message.getFieldWithDefault(msg, 13, ""),
    ebayClientId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    ebayClientSecret: jspb.Message.getFieldWithDefault(msg, 15, ""),
    ebayRefreshToken: jspb.Message.getFieldWithDefault(msg, 16, ""),
    ebayEnvironment: jspb.Message.getFieldWithDefault(msg, 17, ""),
    ebaySiteId: jspb.Message.getFieldWithDefault(msg, 18, ""),
    squarespaceApiKey: jspb.Message.getFieldWithDefault(msg, 19, ""),
    bigcommerceapiClientId: jspb.Message.getFieldWithDefault(msg, 20, ""),
    bigcommerceapiAccessToken: jspb.Message.getFieldWithDefault(msg, 21, ""),
    bigcommerceapiContext: jspb.Message.getFieldWithDefault(msg, 22, ""),
    etsyKeystring: jspb.Message.getFieldWithDefault(msg, 23, ""),
    etsySharedSecret: jspb.Message.getFieldWithDefault(msg, 24, ""),
    etsyAccessToken: jspb.Message.getFieldWithDefault(msg, 25, ""),
    etsyTokenSecret: jspb.Message.getFieldWithDefault(msg, 26, ""),
    etsyAppAccessToken: jspb.Message.getFieldWithDefault(msg, 27, ""),
    etsyAppTokenSecret: jspb.Message.getFieldWithDefault(msg, 28, ""),
    etsyVerifier: jspb.Message.getFieldWithDefault(msg, 29, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.StoreParams}
 */
proto.companymanager.StoreParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.StoreParams;
  return proto.companymanager.StoreParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.StoreParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.StoreParams}
 */
proto.companymanager.StoreParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBridgeUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreRoot(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidateVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreKey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmazonSellerId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmazonSpClientId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmazonSpClientSecret(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmazonSpAwsUserKeyId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmazonSpAwsUserSecret(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmazonSpAwsRegion(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmazonSpAwsRoleArn(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmazonSpRefreshToken(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmazonSpApiEnvironment(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setEbayClientId(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setEbayClientSecret(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setEbayRefreshToken(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setEbayEnvironment(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setEbaySiteId(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setSquarespaceApiKey(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setBigcommerceapiClientId(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setBigcommerceapiAccessToken(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setBigcommerceapiContext(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtsyKeystring(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtsySharedSecret(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtsyAccessToken(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtsyTokenSecret(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtsyAppAccessToken(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtsyAppTokenSecret(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtsyVerifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.StoreParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.StoreParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.StoreParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.StoreParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBridgeUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStoreRoot();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValidateVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStoreKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAmazonSellerId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAmazonSpClientId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAmazonSpClientSecret();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAmazonSpAwsUserKeyId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAmazonSpAwsUserSecret();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getAmazonSpAwsRegion();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getAmazonSpAwsRoleArn();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getAmazonSpRefreshToken();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAmazonSpApiEnvironment();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getEbayClientId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getEbayClientSecret();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getEbayRefreshToken();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getEbayEnvironment();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getEbaySiteId();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getSquarespaceApiKey();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getBigcommerceapiClientId();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getBigcommerceapiAccessToken();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getBigcommerceapiContext();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getEtsyKeystring();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getEtsySharedSecret();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getEtsyAccessToken();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getEtsyTokenSecret();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getEtsyAppAccessToken();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getEtsyAppTokenSecret();
  if (f.length > 0) {
    writer.writeString(
      28,
      f
    );
  }
  f = message.getEtsyVerifier();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
};


/**
 * optional string bridge_url = 1;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getBridgeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setBridgeUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string store_root = 2;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getStoreRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setStoreRoot = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string validate_version = 3;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getValidateVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setValidateVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string store_key = 4;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getStoreKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setStoreKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string amazon_seller_id = 5;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getAmazonSellerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setAmazonSellerId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string amazon_sp_client_id = 6;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getAmazonSpClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setAmazonSpClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string amazon_sp_client_secret = 7;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getAmazonSpClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setAmazonSpClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string amazon_sp_aws_user_key_id = 8;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getAmazonSpAwsUserKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setAmazonSpAwsUserKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string amazon_sp_aws_user_secret = 9;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getAmazonSpAwsUserSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setAmazonSpAwsUserSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string amazon_sp_aws_region = 10;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getAmazonSpAwsRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setAmazonSpAwsRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string amazon_sp_aws_role_arn = 11;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getAmazonSpAwsRoleArn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setAmazonSpAwsRoleArn = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string amazon_sp_refresh_token = 12;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getAmazonSpRefreshToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setAmazonSpRefreshToken = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string amazon_sp_api_environment = 13;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getAmazonSpApiEnvironment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setAmazonSpApiEnvironment = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string ebay_client_id = 14;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getEbayClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setEbayClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string ebay_client_secret = 15;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getEbayClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setEbayClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string ebay_refresh_token = 16;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getEbayRefreshToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setEbayRefreshToken = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string ebay_environment = 17;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getEbayEnvironment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setEbayEnvironment = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string ebay_site_id = 18;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getEbaySiteId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setEbaySiteId = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string squarespace_api_key = 19;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getSquarespaceApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setSquarespaceApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string bigcommerceapi_client_id = 20;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getBigcommerceapiClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setBigcommerceapiClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string bigcommerceapi_access_token = 21;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getBigcommerceapiAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setBigcommerceapiAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string bigcommerceapi_context = 22;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getBigcommerceapiContext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setBigcommerceapiContext = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string etsy_keystring = 23;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getEtsyKeystring = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setEtsyKeystring = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string etsy_shared_secret = 24;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getEtsySharedSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setEtsySharedSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string etsy_access_token = 25;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getEtsyAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setEtsyAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string etsy_token_secret = 26;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getEtsyTokenSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setEtsyTokenSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string etsy_app_access_token = 27;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getEtsyAppAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setEtsyAppAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * optional string etsy_app_token_secret = 28;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getEtsyAppTokenSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 28, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setEtsyAppTokenSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 28, value);
};


/**
 * optional string etsy_verifier = 29;
 * @return {string}
 */
proto.companymanager.StoreParams.prototype.getEtsyVerifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreParams} returns this
 */
proto.companymanager.StoreParams.prototype.setEtsyVerifier = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.AddStoreReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.AddStoreReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.AddStoreReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddStoreReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    storeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.AddStoreReply}
 */
proto.companymanager.AddStoreReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.AddStoreReply;
  return proto.companymanager.AddStoreReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.AddStoreReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.AddStoreReply}
 */
proto.companymanager.AddStoreReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.AddStoreReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.AddStoreReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.AddStoreReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddStoreReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoreId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string store_id = 1;
 * @return {string}
 */
proto.companymanager.AddStoreReply.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddStoreReply} returns this
 */
proto.companymanager.AddStoreReply.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.EditStoreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.EditStoreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.EditStoreRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EditStoreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    storeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    parameters: (f = msg.getParameters()) && proto.companymanager.StoreParams.toObject(includeInstance, f),
    shortName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    iconColour: jspb.Message.getFieldWithDefault(msg, 7, ""),
    storeCurrency: jspb.Message.getFieldWithDefault(msg, 8, ""),
    storeEmail: jspb.Message.getFieldWithDefault(msg, 9, ""),
    shouldSkipIu: (f = msg.getShouldSkipIu()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.EditStoreRequest}
 */
proto.companymanager.EditStoreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.EditStoreRequest;
  return proto.companymanager.EditStoreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.EditStoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.EditStoreRequest}
 */
proto.companymanager.EditStoreRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 5:
      var value = new proto.companymanager.StoreParams;
      reader.readMessage(value,proto.companymanager.StoreParams.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconColour(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreCurrency(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreEmail(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setShouldSkipIu(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.EditStoreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.EditStoreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.EditStoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EditStoreRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoreId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.companymanager.StoreParams.serializeBinaryToWriter
    );
  }
  f = message.getShortName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIconColour();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStoreCurrency();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStoreEmail();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getShouldSkipIu();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string store_id = 1;
 * @return {string}
 */
proto.companymanager.EditStoreRequest.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EditStoreRequest} returns this
 */
proto.companymanager.EditStoreRequest.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.companymanager.EditStoreRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EditStoreRequest} returns this
 */
proto.companymanager.EditStoreRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.companymanager.EditStoreRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EditStoreRequest} returns this
 */
proto.companymanager.EditStoreRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string company_id = 4;
 * @return {string}
 */
proto.companymanager.EditStoreRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EditStoreRequest} returns this
 */
proto.companymanager.EditStoreRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional StoreParams parameters = 5;
 * @return {?proto.companymanager.StoreParams}
 */
proto.companymanager.EditStoreRequest.prototype.getParameters = function() {
  return /** @type{?proto.companymanager.StoreParams} */ (
    jspb.Message.getWrapperField(this, proto.companymanager.StoreParams, 5));
};


/**
 * @param {?proto.companymanager.StoreParams|undefined} value
 * @return {!proto.companymanager.EditStoreRequest} returns this
*/
proto.companymanager.EditStoreRequest.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.EditStoreRequest} returns this
 */
proto.companymanager.EditStoreRequest.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.EditStoreRequest.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string short_name = 6;
 * @return {string}
 */
proto.companymanager.EditStoreRequest.prototype.getShortName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EditStoreRequest} returns this
 */
proto.companymanager.EditStoreRequest.prototype.setShortName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string icon_colour = 7;
 * @return {string}
 */
proto.companymanager.EditStoreRequest.prototype.getIconColour = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EditStoreRequest} returns this
 */
proto.companymanager.EditStoreRequest.prototype.setIconColour = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string store_currency = 8;
 * @return {string}
 */
proto.companymanager.EditStoreRequest.prototype.getStoreCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EditStoreRequest} returns this
 */
proto.companymanager.EditStoreRequest.prototype.setStoreCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string store_email = 9;
 * @return {string}
 */
proto.companymanager.EditStoreRequest.prototype.getStoreEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EditStoreRequest} returns this
 */
proto.companymanager.EditStoreRequest.prototype.setStoreEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.BoolValue should_skip_iu = 10;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.companymanager.EditStoreRequest.prototype.getShouldSkipIu = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 10));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.companymanager.EditStoreRequest} returns this
*/
proto.companymanager.EditStoreRequest.prototype.setShouldSkipIu = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.EditStoreRequest} returns this
 */
proto.companymanager.EditStoreRequest.prototype.clearShouldSkipIu = function() {
  return this.setShouldSkipIu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.EditStoreRequest.prototype.hasShouldSkipIu = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.EditStoreReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.EditStoreReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.EditStoreReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EditStoreReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.EditStoreReply}
 */
proto.companymanager.EditStoreReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.EditStoreReply;
  return proto.companymanager.EditStoreReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.EditStoreReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.EditStoreReply}
 */
proto.companymanager.EditStoreReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.EditStoreReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.EditStoreReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.EditStoreReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EditStoreReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.DeleteStoreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.DeleteStoreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.DeleteStoreRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteStoreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    storeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.DeleteStoreRequest}
 */
proto.companymanager.DeleteStoreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.DeleteStoreRequest;
  return proto.companymanager.DeleteStoreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.DeleteStoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.DeleteStoreRequest}
 */
proto.companymanager.DeleteStoreRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.DeleteStoreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.DeleteStoreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.DeleteStoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteStoreRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoreId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string store_id = 1;
 * @return {string}
 */
proto.companymanager.DeleteStoreRequest.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.DeleteStoreRequest} returns this
 */
proto.companymanager.DeleteStoreRequest.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string company_id = 2;
 * @return {string}
 */
proto.companymanager.DeleteStoreRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.DeleteStoreRequest} returns this
 */
proto.companymanager.DeleteStoreRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.DeleteStoreReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.DeleteStoreReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.DeleteStoreReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteStoreReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.DeleteStoreReply}
 */
proto.companymanager.DeleteStoreReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.DeleteStoreReply;
  return proto.companymanager.DeleteStoreReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.DeleteStoreReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.DeleteStoreReply}
 */
proto.companymanager.DeleteStoreReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.DeleteStoreReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.DeleteStoreReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.DeleteStoreReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteStoreReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.EnableDisableStoreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.EnableDisableStoreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.EnableDisableStoreRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EnableDisableStoreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    storeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.EnableDisableStoreRequest}
 */
proto.companymanager.EnableDisableStoreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.EnableDisableStoreRequest;
  return proto.companymanager.EnableDisableStoreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.EnableDisableStoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.EnableDisableStoreRequest}
 */
proto.companymanager.EnableDisableStoreRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.EnableDisableStoreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.EnableDisableStoreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.EnableDisableStoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EnableDisableStoreRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoreId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string store_id = 1;
 * @return {string}
 */
proto.companymanager.EnableDisableStoreRequest.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EnableDisableStoreRequest} returns this
 */
proto.companymanager.EnableDisableStoreRequest.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string company_id = 2;
 * @return {string}
 */
proto.companymanager.EnableDisableStoreRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EnableDisableStoreRequest} returns this
 */
proto.companymanager.EnableDisableStoreRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.EnableDisableStoreReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.EnableDisableStoreReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.EnableDisableStoreReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EnableDisableStoreReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.EnableDisableStoreReply}
 */
proto.companymanager.EnableDisableStoreReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.EnableDisableStoreReply;
  return proto.companymanager.EnableDisableStoreReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.EnableDisableStoreReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.EnableDisableStoreReply}
 */
proto.companymanager.EnableDisableStoreReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.EnableDisableStoreReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.EnableDisableStoreReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.EnableDisableStoreReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EnableDisableStoreReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntGetStoresToPollForOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntGetStoresToPollForOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntGetStoresToPollForOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntGetStoresToPollForOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    notUpdatedInSeconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    batchSize: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntGetStoresToPollForOrdersRequest}
 */
proto.companymanager.IntGetStoresToPollForOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntGetStoresToPollForOrdersRequest;
  return proto.companymanager.IntGetStoresToPollForOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntGetStoresToPollForOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntGetStoresToPollForOrdersRequest}
 */
proto.companymanager.IntGetStoresToPollForOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNotUpdatedInSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBatchSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntGetStoresToPollForOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntGetStoresToPollForOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntGetStoresToPollForOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntGetStoresToPollForOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotUpdatedInSeconds();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 not_updated_in_seconds = 1;
 * @return {number}
 */
proto.companymanager.IntGetStoresToPollForOrdersRequest.prototype.getNotUpdatedInSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.IntGetStoresToPollForOrdersRequest} returns this
 */
proto.companymanager.IntGetStoresToPollForOrdersRequest.prototype.setNotUpdatedInSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 batch_size = 2;
 * @return {number}
 */
proto.companymanager.IntGetStoresToPollForOrdersRequest.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.IntGetStoresToPollForOrdersRequest} returns this
 */
proto.companymanager.IntGetStoresToPollForOrdersRequest.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.companymanager.IntGetStoresToPollForOrdersReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntGetStoresToPollForOrdersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntGetStoresToPollForOrdersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntGetStoresToPollForOrdersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntGetStoresToPollForOrdersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    storesList: jspb.Message.toObjectList(msg.getStoresList(),
    proto.companymanager.StoreInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntGetStoresToPollForOrdersReply}
 */
proto.companymanager.IntGetStoresToPollForOrdersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntGetStoresToPollForOrdersReply;
  return proto.companymanager.IntGetStoresToPollForOrdersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntGetStoresToPollForOrdersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntGetStoresToPollForOrdersReply}
 */
proto.companymanager.IntGetStoresToPollForOrdersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.companymanager.StoreInfo;
      reader.readMessage(value,proto.companymanager.StoreInfo.deserializeBinaryFromReader);
      msg.addStores(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntGetStoresToPollForOrdersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntGetStoresToPollForOrdersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntGetStoresToPollForOrdersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntGetStoresToPollForOrdersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.companymanager.StoreInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StoreInfo stores = 1;
 * @return {!Array<!proto.companymanager.StoreInfo>}
 */
proto.companymanager.IntGetStoresToPollForOrdersReply.prototype.getStoresList = function() {
  return /** @type{!Array<!proto.companymanager.StoreInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.companymanager.StoreInfo, 1));
};


/**
 * @param {!Array<!proto.companymanager.StoreInfo>} value
 * @return {!proto.companymanager.IntGetStoresToPollForOrdersReply} returns this
*/
proto.companymanager.IntGetStoresToPollForOrdersReply.prototype.setStoresList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.companymanager.StoreInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.companymanager.StoreInfo}
 */
proto.companymanager.IntGetStoresToPollForOrdersReply.prototype.addStores = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.companymanager.StoreInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.companymanager.IntGetStoresToPollForOrdersReply} returns this
 */
proto.companymanager.IntGetStoresToPollForOrdersReply.prototype.clearStoresList = function() {
  return this.setStoresList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntGetStoresToPollForProductsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntGetStoresToPollForProductsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntGetStoresToPollForProductsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntGetStoresToPollForProductsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    notUpdatedInSeconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    batchSize: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntGetStoresToPollForProductsRequest}
 */
proto.companymanager.IntGetStoresToPollForProductsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntGetStoresToPollForProductsRequest;
  return proto.companymanager.IntGetStoresToPollForProductsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntGetStoresToPollForProductsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntGetStoresToPollForProductsRequest}
 */
proto.companymanager.IntGetStoresToPollForProductsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNotUpdatedInSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBatchSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntGetStoresToPollForProductsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntGetStoresToPollForProductsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntGetStoresToPollForProductsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntGetStoresToPollForProductsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotUpdatedInSeconds();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 not_updated_in_seconds = 1;
 * @return {number}
 */
proto.companymanager.IntGetStoresToPollForProductsRequest.prototype.getNotUpdatedInSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.IntGetStoresToPollForProductsRequest} returns this
 */
proto.companymanager.IntGetStoresToPollForProductsRequest.prototype.setNotUpdatedInSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 batch_size = 2;
 * @return {number}
 */
proto.companymanager.IntGetStoresToPollForProductsRequest.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.IntGetStoresToPollForProductsRequest} returns this
 */
proto.companymanager.IntGetStoresToPollForProductsRequest.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.companymanager.IntGetStoresToPollForProductsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntGetStoresToPollForProductsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntGetStoresToPollForProductsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntGetStoresToPollForProductsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntGetStoresToPollForProductsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    storesList: jspb.Message.toObjectList(msg.getStoresList(),
    proto.companymanager.StoreInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntGetStoresToPollForProductsReply}
 */
proto.companymanager.IntGetStoresToPollForProductsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntGetStoresToPollForProductsReply;
  return proto.companymanager.IntGetStoresToPollForProductsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntGetStoresToPollForProductsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntGetStoresToPollForProductsReply}
 */
proto.companymanager.IntGetStoresToPollForProductsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.companymanager.StoreInfo;
      reader.readMessage(value,proto.companymanager.StoreInfo.deserializeBinaryFromReader);
      msg.addStores(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntGetStoresToPollForProductsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntGetStoresToPollForProductsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntGetStoresToPollForProductsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntGetStoresToPollForProductsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.companymanager.StoreInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StoreInfo stores = 1;
 * @return {!Array<!proto.companymanager.StoreInfo>}
 */
proto.companymanager.IntGetStoresToPollForProductsReply.prototype.getStoresList = function() {
  return /** @type{!Array<!proto.companymanager.StoreInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.companymanager.StoreInfo, 1));
};


/**
 * @param {!Array<!proto.companymanager.StoreInfo>} value
 * @return {!proto.companymanager.IntGetStoresToPollForProductsReply} returns this
*/
proto.companymanager.IntGetStoresToPollForProductsReply.prototype.setStoresList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.companymanager.StoreInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.companymanager.StoreInfo}
 */
proto.companymanager.IntGetStoresToPollForProductsReply.prototype.addStores = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.companymanager.StoreInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.companymanager.IntGetStoresToPollForProductsReply} returns this
 */
proto.companymanager.IntGetStoresToPollForProductsReply.prototype.clearStoresList = function() {
  return this.setStoresList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.StoreInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.StoreInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.StoreInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.StoreInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    companyId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    api2cartStoreKey: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, ""),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    shortName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    iconColour: jspb.Message.getFieldWithDefault(msg, 8, ""),
    storeUrl: jspb.Message.getFieldWithDefault(msg, 9, ""),
    defaultDeliveryMethod: jspb.Message.getFieldWithDefault(msg, 10, ""),
    importAllOrders: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    storeCurrency: jspb.Message.getFieldWithDefault(msg, 12, ""),
    storeEmail: jspb.Message.getFieldWithDefault(msg, 13, ""),
    shopifyAccessToken: jspb.Message.getFieldWithDefault(msg, 14, ""),
    importAllProducts: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    shouldSkipIu: jspb.Message.getBooleanFieldWithDefault(msg, 17, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.StoreInfo}
 */
proto.companymanager.StoreInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.StoreInfo;
  return proto.companymanager.StoreInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.StoreInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.StoreInfo}
 */
proto.companymanager.StoreInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setApi2cartStoreKey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconColour(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreUrl(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultDeliveryMethod(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setImportAllOrders(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreCurrency(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreEmail(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setShopifyAccessToken(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setImportAllProducts(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShouldSkipIu(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.StoreInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.StoreInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.StoreInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.StoreInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApi2cartStoreKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getShortName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIconColour();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStoreUrl();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDefaultDeliveryMethod();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getImportAllOrders();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getStoreCurrency();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getStoreEmail();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getShopifyAccessToken();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getImportAllProducts();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getShouldSkipIu();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.companymanager.StoreInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.companymanager.StoreInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string company_id = 3;
 * @return {string}
 */
proto.companymanager.StoreInfo.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string api2cart_store_key = 4;
 * @return {string}
 */
proto.companymanager.StoreInfo.prototype.getApi2cartStoreKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setApi2cartStoreKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string type = 5;
 * @return {string}
 */
proto.companymanager.StoreInfo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool enabled = 6;
 * @return {boolean}
 */
proto.companymanager.StoreInfo.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string short_name = 7;
 * @return {string}
 */
proto.companymanager.StoreInfo.prototype.getShortName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setShortName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string icon_colour = 8;
 * @return {string}
 */
proto.companymanager.StoreInfo.prototype.getIconColour = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setIconColour = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string store_url = 9;
 * @return {string}
 */
proto.companymanager.StoreInfo.prototype.getStoreUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setStoreUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string default_delivery_method = 10;
 * @return {string}
 */
proto.companymanager.StoreInfo.prototype.getDefaultDeliveryMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setDefaultDeliveryMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bool import_all_orders = 11;
 * @return {boolean}
 */
proto.companymanager.StoreInfo.prototype.getImportAllOrders = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setImportAllOrders = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional string store_currency = 12;
 * @return {string}
 */
proto.companymanager.StoreInfo.prototype.getStoreCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setStoreCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string store_email = 13;
 * @return {string}
 */
proto.companymanager.StoreInfo.prototype.getStoreEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setStoreEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string shopify_access_token = 14;
 * @return {string}
 */
proto.companymanager.StoreInfo.prototype.getShopifyAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setShopifyAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bool import_all_products = 15;
 * @return {boolean}
 */
proto.companymanager.StoreInfo.prototype.getImportAllProducts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setImportAllProducts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.companymanager.StoreInfo.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.companymanager.StoreInfo} returns this
*/
proto.companymanager.StoreInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.StoreInfo.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool should_skip_iu = 17;
 * @return {boolean}
 */
proto.companymanager.StoreInfo.prototype.getShouldSkipIu = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.companymanager.StoreInfo} returns this
 */
proto.companymanager.StoreInfo.prototype.setShouldSkipIu = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.GetAllStoresRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.GetAllStoresRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.GetAllStoresRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetAllStoresRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    batchSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.GetAllStoresRequest}
 */
proto.companymanager.GetAllStoresRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.GetAllStoresRequest;
  return proto.companymanager.GetAllStoresRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.GetAllStoresRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.GetAllStoresRequest}
 */
proto.companymanager.GetAllStoresRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBatchSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.GetAllStoresRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.GetAllStoresRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.GetAllStoresRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetAllStoresRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.GetAllStoresRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.GetAllStoresRequest} returns this
 */
proto.companymanager.GetAllStoresRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 batch_size = 2;
 * @return {number}
 */
proto.companymanager.GetAllStoresRequest.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.GetAllStoresRequest} returns this
 */
proto.companymanager.GetAllStoresRequest.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 page = 3;
 * @return {number}
 */
proto.companymanager.GetAllStoresRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.GetAllStoresRequest} returns this
 */
proto.companymanager.GetAllStoresRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.companymanager.GetAllStoresReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.GetAllStoresReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.GetAllStoresReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.GetAllStoresReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetAllStoresReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    storesList: jspb.Message.toObjectList(msg.getStoresList(),
    proto.companymanager.StoreInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.GetAllStoresReply}
 */
proto.companymanager.GetAllStoresReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.GetAllStoresReply;
  return proto.companymanager.GetAllStoresReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.GetAllStoresReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.GetAllStoresReply}
 */
proto.companymanager.GetAllStoresReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.companymanager.StoreInfo;
      reader.readMessage(value,proto.companymanager.StoreInfo.deserializeBinaryFromReader);
      msg.addStores(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.GetAllStoresReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.GetAllStoresReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.GetAllStoresReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetAllStoresReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.companymanager.StoreInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StoreInfo stores = 1;
 * @return {!Array<!proto.companymanager.StoreInfo>}
 */
proto.companymanager.GetAllStoresReply.prototype.getStoresList = function() {
  return /** @type{!Array<!proto.companymanager.StoreInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.companymanager.StoreInfo, 1));
};


/**
 * @param {!Array<!proto.companymanager.StoreInfo>} value
 * @return {!proto.companymanager.GetAllStoresReply} returns this
*/
proto.companymanager.GetAllStoresReply.prototype.setStoresList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.companymanager.StoreInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.companymanager.StoreInfo}
 */
proto.companymanager.GetAllStoresReply.prototype.addStores = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.companymanager.StoreInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.companymanager.GetAllStoresReply} returns this
 */
proto.companymanager.GetAllStoresReply.prototype.clearStoresList = function() {
  return this.setStoresList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.StoresCountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.StoresCountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.StoresCountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.StoresCountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.StoresCountRequest}
 */
proto.companymanager.StoresCountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.StoresCountRequest;
  return proto.companymanager.StoresCountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.StoresCountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.StoresCountRequest}
 */
proto.companymanager.StoresCountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.StoresCountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.StoresCountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.StoresCountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.StoresCountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.StoresCountRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.StoresCountRequest} returns this
 */
proto.companymanager.StoresCountRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.StoresCountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.StoresCountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.StoresCountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.StoresCountReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.StoresCountReply}
 */
proto.companymanager.StoresCountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.StoresCountReply;
  return proto.companymanager.StoresCountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.StoresCountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.StoresCountReply}
 */
proto.companymanager.StoresCountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.StoresCountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.StoresCountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.StoresCountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.StoresCountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 count = 1;
 * @return {number}
 */
proto.companymanager.StoresCountReply.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.StoresCountReply} returns this
 */
proto.companymanager.StoresCountReply.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.GetStoreKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.GetStoreKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.GetStoreKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetStoreKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    storeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.GetStoreKeyRequest}
 */
proto.companymanager.GetStoreKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.GetStoreKeyRequest;
  return proto.companymanager.GetStoreKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.GetStoreKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.GetStoreKeyRequest}
 */
proto.companymanager.GetStoreKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.GetStoreKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.GetStoreKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.GetStoreKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetStoreKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoreId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string store_id = 1;
 * @return {string}
 */
proto.companymanager.GetStoreKeyRequest.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.GetStoreKeyRequest} returns this
 */
proto.companymanager.GetStoreKeyRequest.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.GetStoreKeyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.GetStoreKeyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.GetStoreKeyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetStoreKeyReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    api2cartStoreKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shopifyCredentials: (f = msg.getShopifyCredentials()) && proto.companymanager.ShopifyCredentials.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.GetStoreKeyReply}
 */
proto.companymanager.GetStoreKeyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.GetStoreKeyReply;
  return proto.companymanager.GetStoreKeyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.GetStoreKeyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.GetStoreKeyReply}
 */
proto.companymanager.GetStoreKeyReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApi2cartStoreKey(value);
      break;
    case 2:
      var value = new proto.companymanager.ShopifyCredentials;
      reader.readMessage(value,proto.companymanager.ShopifyCredentials.deserializeBinaryFromReader);
      msg.setShopifyCredentials(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.GetStoreKeyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.GetStoreKeyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.GetStoreKeyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetStoreKeyReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApi2cartStoreKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShopifyCredentials();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.companymanager.ShopifyCredentials.serializeBinaryToWriter
    );
  }
};


/**
 * optional string api2cart_store_key = 1;
 * @return {string}
 */
proto.companymanager.GetStoreKeyReply.prototype.getApi2cartStoreKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.GetStoreKeyReply} returns this
 */
proto.companymanager.GetStoreKeyReply.prototype.setApi2cartStoreKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ShopifyCredentials shopify_credentials = 2;
 * @return {?proto.companymanager.ShopifyCredentials}
 */
proto.companymanager.GetStoreKeyReply.prototype.getShopifyCredentials = function() {
  return /** @type{?proto.companymanager.ShopifyCredentials} */ (
    jspb.Message.getWrapperField(this, proto.companymanager.ShopifyCredentials, 2));
};


/**
 * @param {?proto.companymanager.ShopifyCredentials|undefined} value
 * @return {!proto.companymanager.GetStoreKeyReply} returns this
*/
proto.companymanager.GetStoreKeyReply.prototype.setShopifyCredentials = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.GetStoreKeyReply} returns this
 */
proto.companymanager.GetStoreKeyReply.prototype.clearShopifyCredentials = function() {
  return this.setShopifyCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.GetStoreKeyReply.prototype.hasShopifyCredentials = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.ShopifyCredentials.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.ShopifyCredentials.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.ShopifyCredentials} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ShopifyCredentials.toObject = function(includeInstance, msg) {
  var f, obj = {
    storeUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accessToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.ShopifyCredentials}
 */
proto.companymanager.ShopifyCredentials.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.ShopifyCredentials;
  return proto.companymanager.ShopifyCredentials.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.ShopifyCredentials} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.ShopifyCredentials}
 */
proto.companymanager.ShopifyCredentials.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.ShopifyCredentials.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.ShopifyCredentials.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.ShopifyCredentials} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ShopifyCredentials.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoreUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccessToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string store_url = 1;
 * @return {string}
 */
proto.companymanager.ShopifyCredentials.prototype.getStoreUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.ShopifyCredentials} returns this
 */
proto.companymanager.ShopifyCredentials.prototype.setStoreUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string access_token = 2;
 * @return {string}
 */
proto.companymanager.ShopifyCredentials.prototype.getAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.ShopifyCredentials} returns this
 */
proto.companymanager.ShopifyCredentials.prototype.setAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.SetShopifyAccessTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.SetShopifyAccessTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.SetShopifyAccessTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SetShopifyAccessTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    storeUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shopifyAccessToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.SetShopifyAccessTokenRequest}
 */
proto.companymanager.SetShopifyAccessTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.SetShopifyAccessTokenRequest;
  return proto.companymanager.SetShopifyAccessTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.SetShopifyAccessTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.SetShopifyAccessTokenRequest}
 */
proto.companymanager.SetShopifyAccessTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setShopifyAccessToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.SetShopifyAccessTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.SetShopifyAccessTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.SetShopifyAccessTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SetShopifyAccessTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoreUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShopifyAccessToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string store_url = 1;
 * @return {string}
 */
proto.companymanager.SetShopifyAccessTokenRequest.prototype.getStoreUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SetShopifyAccessTokenRequest} returns this
 */
proto.companymanager.SetShopifyAccessTokenRequest.prototype.setStoreUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string shopify_access_token = 2;
 * @return {string}
 */
proto.companymanager.SetShopifyAccessTokenRequest.prototype.getShopifyAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SetShopifyAccessTokenRequest} returns this
 */
proto.companymanager.SetShopifyAccessTokenRequest.prototype.setShopifyAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.SetShopifyAccessTokenReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.SetShopifyAccessTokenReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.SetShopifyAccessTokenReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SetShopifyAccessTokenReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.SetShopifyAccessTokenReply}
 */
proto.companymanager.SetShopifyAccessTokenReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.SetShopifyAccessTokenReply;
  return proto.companymanager.SetShopifyAccessTokenReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.SetShopifyAccessTokenReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.SetShopifyAccessTokenReply}
 */
proto.companymanager.SetShopifyAccessTokenReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.SetShopifyAccessTokenReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.SetShopifyAccessTokenReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.SetShopifyAccessTokenReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SetShopifyAccessTokenReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.GetStoreTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.GetStoreTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.GetStoreTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetStoreTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    storeId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.GetStoreTypeRequest}
 */
proto.companymanager.GetStoreTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.GetStoreTypeRequest;
  return proto.companymanager.GetStoreTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.GetStoreTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.GetStoreTypeRequest}
 */
proto.companymanager.GetStoreTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.GetStoreTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.GetStoreTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.GetStoreTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetStoreTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStoreId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.GetStoreTypeRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.GetStoreTypeRequest} returns this
 */
proto.companymanager.GetStoreTypeRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string store_id = 2;
 * @return {string}
 */
proto.companymanager.GetStoreTypeRequest.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.GetStoreTypeRequest} returns this
 */
proto.companymanager.GetStoreTypeRequest.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.GetStoreTypeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.GetStoreTypeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.GetStoreTypeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetStoreTypeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.GetStoreTypeReply}
 */
proto.companymanager.GetStoreTypeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.GetStoreTypeReply;
  return proto.companymanager.GetStoreTypeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.GetStoreTypeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.GetStoreTypeReply}
 */
proto.companymanager.GetStoreTypeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.GetStoreTypeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.GetStoreTypeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.GetStoreTypeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.GetStoreTypeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.companymanager.GetStoreTypeReply.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.GetStoreTypeReply} returns this
 */
proto.companymanager.GetStoreTypeReply.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.ResetStoreOrdersLastPolledRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.ResetStoreOrdersLastPolledRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.ResetStoreOrdersLastPolledRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ResetStoreOrdersLastPolledRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    storeId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.ResetStoreOrdersLastPolledRequest}
 */
proto.companymanager.ResetStoreOrdersLastPolledRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.ResetStoreOrdersLastPolledRequest;
  return proto.companymanager.ResetStoreOrdersLastPolledRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.ResetStoreOrdersLastPolledRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.ResetStoreOrdersLastPolledRequest}
 */
proto.companymanager.ResetStoreOrdersLastPolledRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.ResetStoreOrdersLastPolledRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.ResetStoreOrdersLastPolledRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.ResetStoreOrdersLastPolledRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ResetStoreOrdersLastPolledRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStoreId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.ResetStoreOrdersLastPolledRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.ResetStoreOrdersLastPolledRequest} returns this
 */
proto.companymanager.ResetStoreOrdersLastPolledRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string store_id = 2;
 * @return {string}
 */
proto.companymanager.ResetStoreOrdersLastPolledRequest.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.ResetStoreOrdersLastPolledRequest} returns this
 */
proto.companymanager.ResetStoreOrdersLastPolledRequest.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.ResetStoreOrdersLastPolledReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.ResetStoreOrdersLastPolledReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.ResetStoreOrdersLastPolledReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ResetStoreOrdersLastPolledReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.ResetStoreOrdersLastPolledReply}
 */
proto.companymanager.ResetStoreOrdersLastPolledReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.ResetStoreOrdersLastPolledReply;
  return proto.companymanager.ResetStoreOrdersLastPolledReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.ResetStoreOrdersLastPolledReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.ResetStoreOrdersLastPolledReply}
 */
proto.companymanager.ResetStoreOrdersLastPolledReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.ResetStoreOrdersLastPolledReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.ResetStoreOrdersLastPolledReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.ResetStoreOrdersLastPolledReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ResetStoreOrdersLastPolledReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.ResetStoreProductsLastPolledRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.ResetStoreProductsLastPolledRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.ResetStoreProductsLastPolledRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ResetStoreProductsLastPolledRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    storeId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.ResetStoreProductsLastPolledRequest}
 */
proto.companymanager.ResetStoreProductsLastPolledRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.ResetStoreProductsLastPolledRequest;
  return proto.companymanager.ResetStoreProductsLastPolledRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.ResetStoreProductsLastPolledRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.ResetStoreProductsLastPolledRequest}
 */
proto.companymanager.ResetStoreProductsLastPolledRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.ResetStoreProductsLastPolledRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.ResetStoreProductsLastPolledRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.ResetStoreProductsLastPolledRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ResetStoreProductsLastPolledRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStoreId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.ResetStoreProductsLastPolledRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.ResetStoreProductsLastPolledRequest} returns this
 */
proto.companymanager.ResetStoreProductsLastPolledRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string store_id = 2;
 * @return {string}
 */
proto.companymanager.ResetStoreProductsLastPolledRequest.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.ResetStoreProductsLastPolledRequest} returns this
 */
proto.companymanager.ResetStoreProductsLastPolledRequest.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.ResetStoreProductsLastPolledReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.ResetStoreProductsLastPolledReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.ResetStoreProductsLastPolledReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ResetStoreProductsLastPolledReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.ResetStoreProductsLastPolledReply}
 */
proto.companymanager.ResetStoreProductsLastPolledReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.ResetStoreProductsLastPolledReply;
  return proto.companymanager.ResetStoreProductsLastPolledReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.ResetStoreProductsLastPolledReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.ResetStoreProductsLastPolledReply}
 */
proto.companymanager.ResetStoreProductsLastPolledReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.ResetStoreProductsLastPolledReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.ResetStoreProductsLastPolledReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.ResetStoreProductsLastPolledReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ResetStoreProductsLastPolledReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.EtsyAuthTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.EtsyAuthTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.EtsyAuthTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EtsyAuthTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.EtsyAuthTokenRequest}
 */
proto.companymanager.EtsyAuthTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.EtsyAuthTokenRequest;
  return proto.companymanager.EtsyAuthTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.EtsyAuthTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.EtsyAuthTokenRequest}
 */
proto.companymanager.EtsyAuthTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.EtsyAuthTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.EtsyAuthTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.EtsyAuthTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EtsyAuthTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.EtsyAuthTokenReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.EtsyAuthTokenReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.EtsyAuthTokenReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EtsyAuthTokenReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    loginUrl: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.EtsyAuthTokenReply}
 */
proto.companymanager.EtsyAuthTokenReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.EtsyAuthTokenReply;
  return proto.companymanager.EtsyAuthTokenReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.EtsyAuthTokenReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.EtsyAuthTokenReply}
 */
proto.companymanager.EtsyAuthTokenReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoginUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.EtsyAuthTokenReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.EtsyAuthTokenReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.EtsyAuthTokenReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.EtsyAuthTokenReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoginUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string login_url = 1;
 * @return {string}
 */
proto.companymanager.EtsyAuthTokenReply.prototype.getLoginUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.EtsyAuthTokenReply} returns this
 */
proto.companymanager.EtsyAuthTokenReply.prototype.setLoginUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.BillingInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.BillingInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.BillingInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.BillingInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.BillingInfoRequest}
 */
proto.companymanager.BillingInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.BillingInfoRequest;
  return proto.companymanager.BillingInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.BillingInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.BillingInfoRequest}
 */
proto.companymanager.BillingInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.BillingInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.BillingInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.BillingInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.BillingInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.BillingInfoRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.BillingInfoRequest} returns this
 */
proto.companymanager.BillingInfoRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.companymanager.BillingInfoReply.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.BillingInfoReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.BillingInfoReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.BillingInfoReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.BillingInfoReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stripeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    billingAddress: (f = msg.getBillingAddress()) && proto.companymanager.BillingAddress.toObject(includeInstance, f),
    cardsList: jspb.Message.toObjectList(msg.getCardsList(),
    proto.companymanager.Card.toObject, includeInstance),
    currentSubscription: (f = msg.getCurrentSubscription()) && proto.companymanager.CurrentSubscription.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.BillingInfoReply}
 */
proto.companymanager.BillingInfoReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.BillingInfoReply;
  return proto.companymanager.BillingInfoReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.BillingInfoReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.BillingInfoReply}
 */
proto.companymanager.BillingInfoReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStripeId(value);
      break;
    case 3:
      var value = new proto.companymanager.BillingAddress;
      reader.readMessage(value,proto.companymanager.BillingAddress.deserializeBinaryFromReader);
      msg.setBillingAddress(value);
      break;
    case 4:
      var value = new proto.companymanager.Card;
      reader.readMessage(value,proto.companymanager.Card.deserializeBinaryFromReader);
      msg.addCards(value);
      break;
    case 5:
      var value = new proto.companymanager.CurrentSubscription;
      reader.readMessage(value,proto.companymanager.CurrentSubscription.deserializeBinaryFromReader);
      msg.setCurrentSubscription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.BillingInfoReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.BillingInfoReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.BillingInfoReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.BillingInfoReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStripeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBillingAddress();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.companymanager.BillingAddress.serializeBinaryToWriter
    );
  }
  f = message.getCardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.companymanager.Card.serializeBinaryToWriter
    );
  }
  f = message.getCurrentSubscription();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.companymanager.CurrentSubscription.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.companymanager.BillingInfoReply.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.BillingInfoReply} returns this
 */
proto.companymanager.BillingInfoReply.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stripe_id = 2;
 * @return {string}
 */
proto.companymanager.BillingInfoReply.prototype.getStripeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.BillingInfoReply} returns this
 */
proto.companymanager.BillingInfoReply.prototype.setStripeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional BillingAddress billing_address = 3;
 * @return {?proto.companymanager.BillingAddress}
 */
proto.companymanager.BillingInfoReply.prototype.getBillingAddress = function() {
  return /** @type{?proto.companymanager.BillingAddress} */ (
    jspb.Message.getWrapperField(this, proto.companymanager.BillingAddress, 3));
};


/**
 * @param {?proto.companymanager.BillingAddress|undefined} value
 * @return {!proto.companymanager.BillingInfoReply} returns this
*/
proto.companymanager.BillingInfoReply.prototype.setBillingAddress = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.BillingInfoReply} returns this
 */
proto.companymanager.BillingInfoReply.prototype.clearBillingAddress = function() {
  return this.setBillingAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.BillingInfoReply.prototype.hasBillingAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Card cards = 4;
 * @return {!Array<!proto.companymanager.Card>}
 */
proto.companymanager.BillingInfoReply.prototype.getCardsList = function() {
  return /** @type{!Array<!proto.companymanager.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.companymanager.Card, 4));
};


/**
 * @param {!Array<!proto.companymanager.Card>} value
 * @return {!proto.companymanager.BillingInfoReply} returns this
*/
proto.companymanager.BillingInfoReply.prototype.setCardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.companymanager.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.companymanager.Card}
 */
proto.companymanager.BillingInfoReply.prototype.addCards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.companymanager.Card, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.companymanager.BillingInfoReply} returns this
 */
proto.companymanager.BillingInfoReply.prototype.clearCardsList = function() {
  return this.setCardsList([]);
};


/**
 * optional CurrentSubscription current_subscription = 5;
 * @return {?proto.companymanager.CurrentSubscription}
 */
proto.companymanager.BillingInfoReply.prototype.getCurrentSubscription = function() {
  return /** @type{?proto.companymanager.CurrentSubscription} */ (
    jspb.Message.getWrapperField(this, proto.companymanager.CurrentSubscription, 5));
};


/**
 * @param {?proto.companymanager.CurrentSubscription|undefined} value
 * @return {!proto.companymanager.BillingInfoReply} returns this
*/
proto.companymanager.BillingInfoReply.prototype.setCurrentSubscription = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.BillingInfoReply} returns this
 */
proto.companymanager.BillingInfoReply.prototype.clearCurrentSubscription = function() {
  return this.setCurrentSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.BillingInfoReply.prototype.hasCurrentSubscription = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.BillingAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.BillingAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.BillingAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.BillingAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    line1: jspb.Message.getFieldWithDefault(msg, 1, ""),
    line2: jspb.Message.getFieldWithDefault(msg, 2, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    state: jspb.Message.getFieldWithDefault(msg, 4, ""),
    city: jspb.Message.getFieldWithDefault(msg, 5, ""),
    country: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.BillingAddress}
 */
proto.companymanager.BillingAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.BillingAddress;
  return proto.companymanager.BillingAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.BillingAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.BillingAddress}
 */
proto.companymanager.BillingAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLine1(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLine2(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.BillingAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.BillingAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.BillingAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.BillingAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLine1();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLine2();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string line1 = 1;
 * @return {string}
 */
proto.companymanager.BillingAddress.prototype.getLine1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.BillingAddress} returns this
 */
proto.companymanager.BillingAddress.prototype.setLine1 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string line2 = 2;
 * @return {string}
 */
proto.companymanager.BillingAddress.prototype.getLine2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.BillingAddress} returns this
 */
proto.companymanager.BillingAddress.prototype.setLine2 = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string postal_code = 3;
 * @return {string}
 */
proto.companymanager.BillingAddress.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.BillingAddress} returns this
 */
proto.companymanager.BillingAddress.prototype.setPostalCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string state = 4;
 * @return {string}
 */
proto.companymanager.BillingAddress.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.BillingAddress} returns this
 */
proto.companymanager.BillingAddress.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string city = 5;
 * @return {string}
 */
proto.companymanager.BillingAddress.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.BillingAddress} returns this
 */
proto.companymanager.BillingAddress.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string country = 6;
 * @return {string}
 */
proto.companymanager.BillingAddress.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.BillingAddress} returns this
 */
proto.companymanager.BillingAddress.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.companymanager.CurrentSubscription.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.CurrentSubscription.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.CurrentSubscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.CurrentSubscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.CurrentSubscription.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    interval: jspb.Message.getFieldWithDefault(msg, 5, ""),
    currency: jspb.Message.getFieldWithDefault(msg, 6, ""),
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    proto.companymanager.Product.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.CurrentSubscription}
 */
proto.companymanager.CurrentSubscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.CurrentSubscription;
  return proto.companymanager.CurrentSubscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.CurrentSubscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.CurrentSubscription}
 */
proto.companymanager.CurrentSubscription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAmount(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInterval(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 7:
      var value = new proto.companymanager.Product;
      reader.readMessage(value,proto.companymanager.Product.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.CurrentSubscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.CurrentSubscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.CurrentSubscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.CurrentSubscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInterval();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.companymanager.Product.serializeBinaryToWriter
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.companymanager.CurrentSubscription.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CurrentSubscription} returns this
 */
proto.companymanager.CurrentSubscription.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float amount = 2;
 * @return {number}
 */
proto.companymanager.CurrentSubscription.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.CurrentSubscription} returns this
 */
proto.companymanager.CurrentSubscription.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.companymanager.CurrentSubscription.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.companymanager.CurrentSubscription} returns this
*/
proto.companymanager.CurrentSubscription.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.CurrentSubscription} returns this
 */
proto.companymanager.CurrentSubscription.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.CurrentSubscription.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string interval = 5;
 * @return {string}
 */
proto.companymanager.CurrentSubscription.prototype.getInterval = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CurrentSubscription} returns this
 */
proto.companymanager.CurrentSubscription.prototype.setInterval = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string currency = 6;
 * @return {string}
 */
proto.companymanager.CurrentSubscription.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.CurrentSubscription} returns this
 */
proto.companymanager.CurrentSubscription.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated Product products = 7;
 * @return {!Array<!proto.companymanager.Product>}
 */
proto.companymanager.CurrentSubscription.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.companymanager.Product>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.companymanager.Product, 7));
};


/**
 * @param {!Array<!proto.companymanager.Product>} value
 * @return {!proto.companymanager.CurrentSubscription} returns this
*/
proto.companymanager.CurrentSubscription.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.companymanager.Product=} opt_value
 * @param {number=} opt_index
 * @return {!proto.companymanager.Product}
 */
proto.companymanager.CurrentSubscription.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.companymanager.Product, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.companymanager.CurrentSubscription} returns this
 */
proto.companymanager.CurrentSubscription.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.Product.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.Product.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.Product} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.Product.toObject = function(includeInstance, msg) {
  var f, obj = {
    productId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.Product}
 */
proto.companymanager.Product.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.Product;
  return proto.companymanager.Product.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.Product} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.Product}
 */
proto.companymanager.Product.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.Product.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.Product.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.Product} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.Product.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string product_id = 1;
 * @return {string}
 */
proto.companymanager.Product.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.Product} returns this
 */
proto.companymanager.Product.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.companymanager.Product.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.Product} returns this
 */
proto.companymanager.Product.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 quantity = 3;
 * @return {number}
 */
proto.companymanager.Product.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.Product} returns this
 */
proto.companymanager.Product.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.Card.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.Card.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.Card} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.Card.toObject = function(includeInstance, msg) {
  var f, obj = {
    stripeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    brand: jspb.Message.getFieldWithDefault(msg, 2, ""),
    last4Digit: jspb.Message.getFieldWithDefault(msg, 3, ""),
    expiryMonth: jspb.Message.getFieldWithDefault(msg, 4, ""),
    expiryYear: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isDefault: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.Card}
 */
proto.companymanager.Card.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.Card;
  return proto.companymanager.Card.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.Card} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.Card}
 */
proto.companymanager.Card.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStripeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLast4Digit(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpiryMonth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExpiryYear(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefault(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.Card.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.Card.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.Card} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.Card.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStripeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLast4Digit();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExpiryMonth();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExpiryYear();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getIsDefault();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string stripe_id = 1;
 * @return {string}
 */
proto.companymanager.Card.prototype.getStripeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.Card} returns this
 */
proto.companymanager.Card.prototype.setStripeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string brand = 2;
 * @return {string}
 */
proto.companymanager.Card.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.Card} returns this
 */
proto.companymanager.Card.prototype.setBrand = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_4_digit = 3;
 * @return {string}
 */
proto.companymanager.Card.prototype.getLast4Digit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.Card} returns this
 */
proto.companymanager.Card.prototype.setLast4Digit = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string expiry_month = 4;
 * @return {string}
 */
proto.companymanager.Card.prototype.getExpiryMonth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.Card} returns this
 */
proto.companymanager.Card.prototype.setExpiryMonth = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 expiry_year = 5;
 * @return {number}
 */
proto.companymanager.Card.prototype.getExpiryYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.Card} returns this
 */
proto.companymanager.Card.prototype.setExpiryYear = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool is_default = 6;
 * @return {boolean}
 */
proto.companymanager.Card.prototype.getIsDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.companymanager.Card} returns this
 */
proto.companymanager.Card.prototype.setIsDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.SubscriptionUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.SubscriptionUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SubscriptionUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subscriptionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    status: jspb.Message.getFieldWithDefault(msg, 4, ""),
    interval: jspb.Message.getFieldWithDefault(msg, 6, ""),
    currency: jspb.Message.getFieldWithDefault(msg, 7, ""),
    products: msg.getProducts_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.SubscriptionUpdateRequest}
 */
proto.companymanager.SubscriptionUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.SubscriptionUpdateRequest;
  return proto.companymanager.SubscriptionUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.SubscriptionUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.SubscriptionUpdateRequest}
 */
proto.companymanager.SubscriptionUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setInterval(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProducts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.SubscriptionUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.SubscriptionUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SubscriptionUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInterval();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getProducts_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SubscriptionUpdateRequest} returns this
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subscription_id = 2;
 * @return {string}
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SubscriptionUpdateRequest} returns this
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float amount = 3;
 * @return {number}
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.SubscriptionUpdateRequest} returns this
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string status = 4;
 * @return {string}
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SubscriptionUpdateRequest} returns this
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string interval = 6;
 * @return {string}
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.getInterval = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SubscriptionUpdateRequest} returns this
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.setInterval = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string currency = 7;
 * @return {string}
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SubscriptionUpdateRequest} returns this
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bytes products = 8;
 * @return {!(string|Uint8Array)}
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.getProducts = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes products = 8;
 * This is a type-conversion wrapper around `getProducts()`
 * @return {string}
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.getProducts_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProducts()));
};


/**
 * optional bytes products = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProducts()`
 * @return {!Uint8Array}
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.getProducts_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProducts()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.companymanager.SubscriptionUpdateRequest} returns this
 */
proto.companymanager.SubscriptionUpdateRequest.prototype.setProducts = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.SubscriptionUpdateReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.SubscriptionUpdateReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.SubscriptionUpdateReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SubscriptionUpdateReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.SubscriptionUpdateReply}
 */
proto.companymanager.SubscriptionUpdateReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.SubscriptionUpdateReply;
  return proto.companymanager.SubscriptionUpdateReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.SubscriptionUpdateReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.SubscriptionUpdateReply}
 */
proto.companymanager.SubscriptionUpdateReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.SubscriptionUpdateReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.SubscriptionUpdateReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.SubscriptionUpdateReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SubscriptionUpdateReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.SubscriptionAddRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.SubscriptionAddRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.SubscriptionAddRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SubscriptionAddRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subscriptionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    status: jspb.Message.getFieldWithDefault(msg, 4, ""),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    interval: jspb.Message.getFieldWithDefault(msg, 7, ""),
    currency: jspb.Message.getFieldWithDefault(msg, 8, ""),
    invoiceId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    products: msg.getProducts_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.SubscriptionAddRequest}
 */
proto.companymanager.SubscriptionAddRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.SubscriptionAddRequest;
  return proto.companymanager.SubscriptionAddRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.SubscriptionAddRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.SubscriptionAddRequest}
 */
proto.companymanager.SubscriptionAddRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setInterval(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceId(value);
      break;
    case 10:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProducts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.SubscriptionAddRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.SubscriptionAddRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.SubscriptionAddRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SubscriptionAddRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInterval();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getInvoiceId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getProducts_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      10,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.companymanager.SubscriptionAddRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SubscriptionAddRequest} returns this
 */
proto.companymanager.SubscriptionAddRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subscription_id = 2;
 * @return {string}
 */
proto.companymanager.SubscriptionAddRequest.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SubscriptionAddRequest} returns this
 */
proto.companymanager.SubscriptionAddRequest.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float amount = 3;
 * @return {number}
 */
proto.companymanager.SubscriptionAddRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.SubscriptionAddRequest} returns this
 */
proto.companymanager.SubscriptionAddRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string status = 4;
 * @return {string}
 */
proto.companymanager.SubscriptionAddRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SubscriptionAddRequest} returns this
 */
proto.companymanager.SubscriptionAddRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.companymanager.SubscriptionAddRequest.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.companymanager.SubscriptionAddRequest} returns this
*/
proto.companymanager.SubscriptionAddRequest.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.SubscriptionAddRequest} returns this
 */
proto.companymanager.SubscriptionAddRequest.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.SubscriptionAddRequest.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string interval = 7;
 * @return {string}
 */
proto.companymanager.SubscriptionAddRequest.prototype.getInterval = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SubscriptionAddRequest} returns this
 */
proto.companymanager.SubscriptionAddRequest.prototype.setInterval = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string currency = 8;
 * @return {string}
 */
proto.companymanager.SubscriptionAddRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SubscriptionAddRequest} returns this
 */
proto.companymanager.SubscriptionAddRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string invoice_id = 9;
 * @return {string}
 */
proto.companymanager.SubscriptionAddRequest.prototype.getInvoiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SubscriptionAddRequest} returns this
 */
proto.companymanager.SubscriptionAddRequest.prototype.setInvoiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bytes products = 10;
 * @return {!(string|Uint8Array)}
 */
proto.companymanager.SubscriptionAddRequest.prototype.getProducts = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * optional bytes products = 10;
 * This is a type-conversion wrapper around `getProducts()`
 * @return {string}
 */
proto.companymanager.SubscriptionAddRequest.prototype.getProducts_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProducts()));
};


/**
 * optional bytes products = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProducts()`
 * @return {!Uint8Array}
 */
proto.companymanager.SubscriptionAddRequest.prototype.getProducts_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProducts()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.companymanager.SubscriptionAddRequest} returns this
 */
proto.companymanager.SubscriptionAddRequest.prototype.setProducts = function(value) {
  return jspb.Message.setProto3BytesField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.SubscriptionAddReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.SubscriptionAddReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.SubscriptionAddReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SubscriptionAddReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.SubscriptionAddReply}
 */
proto.companymanager.SubscriptionAddReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.SubscriptionAddReply;
  return proto.companymanager.SubscriptionAddReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.SubscriptionAddReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.SubscriptionAddReply}
 */
proto.companymanager.SubscriptionAddReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.SubscriptionAddReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.SubscriptionAddReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.SubscriptionAddReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SubscriptionAddReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.SubscriptionDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.SubscriptionDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.SubscriptionDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SubscriptionDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscriptionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.SubscriptionDeleteRequest}
 */
proto.companymanager.SubscriptionDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.SubscriptionDeleteRequest;
  return proto.companymanager.SubscriptionDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.SubscriptionDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.SubscriptionDeleteRequest}
 */
proto.companymanager.SubscriptionDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.SubscriptionDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.SubscriptionDeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.SubscriptionDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SubscriptionDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string subscription_id = 1;
 * @return {string}
 */
proto.companymanager.SubscriptionDeleteRequest.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SubscriptionDeleteRequest} returns this
 */
proto.companymanager.SubscriptionDeleteRequest.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.SubscriptionDeleteReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.SubscriptionDeleteReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.SubscriptionDeleteReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SubscriptionDeleteReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.SubscriptionDeleteReply}
 */
proto.companymanager.SubscriptionDeleteReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.SubscriptionDeleteReply;
  return proto.companymanager.SubscriptionDeleteReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.SubscriptionDeleteReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.SubscriptionDeleteReply}
 */
proto.companymanager.SubscriptionDeleteReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.SubscriptionDeleteReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.SubscriptionDeleteReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.SubscriptionDeleteReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SubscriptionDeleteReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.UpdateBillingAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.UpdateBillingAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.UpdateBillingAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    line1: jspb.Message.getFieldWithDefault(msg, 2, ""),
    line2: jspb.Message.getFieldWithDefault(msg, 3, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    state: jspb.Message.getFieldWithDefault(msg, 5, ""),
    city: jspb.Message.getFieldWithDefault(msg, 6, ""),
    country: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.UpdateBillingAddressRequest}
 */
proto.companymanager.UpdateBillingAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.UpdateBillingAddressRequest;
  return proto.companymanager.UpdateBillingAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.UpdateBillingAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.UpdateBillingAddressRequest}
 */
proto.companymanager.UpdateBillingAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLine1(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLine2(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.UpdateBillingAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.UpdateBillingAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.UpdateBillingAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLine1();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLine2();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateBillingAddressRequest} returns this
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string line1 = 2;
 * @return {string}
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.getLine1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateBillingAddressRequest} returns this
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.setLine1 = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string line2 = 3;
 * @return {string}
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.getLine2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateBillingAddressRequest} returns this
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.setLine2 = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string postal_code = 4;
 * @return {string}
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateBillingAddressRequest} returns this
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.setPostalCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string state = 5;
 * @return {string}
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateBillingAddressRequest} returns this
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string city = 6;
 * @return {string}
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateBillingAddressRequest} returns this
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string country = 7;
 * @return {string}
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateBillingAddressRequest} returns this
 */
proto.companymanager.UpdateBillingAddressRequest.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.UpdateBillingAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.UpdateBillingAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.UpdateBillingAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.UpdateBillingAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.UpdateBillingAddressReply}
 */
proto.companymanager.UpdateBillingAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.UpdateBillingAddressReply;
  return proto.companymanager.UpdateBillingAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.UpdateBillingAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.UpdateBillingAddressReply}
 */
proto.companymanager.UpdateBillingAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.UpdateBillingAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.UpdateBillingAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.UpdateBillingAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.UpdateBillingAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.AddCardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.AddCardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.AddCardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddCardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stripeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    brand: jspb.Message.getFieldWithDefault(msg, 3, ""),
    last4Digit: jspb.Message.getFieldWithDefault(msg, 4, ""),
    expiryMonth: jspb.Message.getFieldWithDefault(msg, 5, 0),
    expiryYear: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.AddCardRequest}
 */
proto.companymanager.AddCardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.AddCardRequest;
  return proto.companymanager.AddCardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.AddCardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.AddCardRequest}
 */
proto.companymanager.AddCardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStripeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLast4Digit(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExpiryMonth(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExpiryYear(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.AddCardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.AddCardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.AddCardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddCardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStripeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLast4Digit();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExpiryMonth();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getExpiryYear();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.companymanager.AddCardRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddCardRequest} returns this
 */
proto.companymanager.AddCardRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stripe_id = 2;
 * @return {string}
 */
proto.companymanager.AddCardRequest.prototype.getStripeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddCardRequest} returns this
 */
proto.companymanager.AddCardRequest.prototype.setStripeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string brand = 3;
 * @return {string}
 */
proto.companymanager.AddCardRequest.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddCardRequest} returns this
 */
proto.companymanager.AddCardRequest.prototype.setBrand = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_4_digit = 4;
 * @return {string}
 */
proto.companymanager.AddCardRequest.prototype.getLast4Digit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.AddCardRequest} returns this
 */
proto.companymanager.AddCardRequest.prototype.setLast4Digit = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 expiry_month = 5;
 * @return {number}
 */
proto.companymanager.AddCardRequest.prototype.getExpiryMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.AddCardRequest} returns this
 */
proto.companymanager.AddCardRequest.prototype.setExpiryMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 expiry_year = 6;
 * @return {number}
 */
proto.companymanager.AddCardRequest.prototype.getExpiryYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.AddCardRequest} returns this
 */
proto.companymanager.AddCardRequest.prototype.setExpiryYear = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.AddCardReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.AddCardReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.AddCardReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddCardReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.AddCardReply}
 */
proto.companymanager.AddCardReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.AddCardReply;
  return proto.companymanager.AddCardReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.AddCardReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.AddCardReply}
 */
proto.companymanager.AddCardReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.AddCardReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.AddCardReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.AddCardReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.AddCardReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.UpdateCardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.UpdateCardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.UpdateCardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.UpdateCardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stripeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    brand: jspb.Message.getFieldWithDefault(msg, 3, ""),
    last4Digit: jspb.Message.getFieldWithDefault(msg, 4, ""),
    expiryMonth: jspb.Message.getFieldWithDefault(msg, 5, 0),
    expiryYear: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.UpdateCardRequest}
 */
proto.companymanager.UpdateCardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.UpdateCardRequest;
  return proto.companymanager.UpdateCardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.UpdateCardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.UpdateCardRequest}
 */
proto.companymanager.UpdateCardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStripeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLast4Digit(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExpiryMonth(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExpiryYear(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.UpdateCardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.UpdateCardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.UpdateCardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.UpdateCardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStripeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLast4Digit();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExpiryMonth();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getExpiryYear();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.companymanager.UpdateCardRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateCardRequest} returns this
 */
proto.companymanager.UpdateCardRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stripe_id = 2;
 * @return {string}
 */
proto.companymanager.UpdateCardRequest.prototype.getStripeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateCardRequest} returns this
 */
proto.companymanager.UpdateCardRequest.prototype.setStripeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string brand = 3;
 * @return {string}
 */
proto.companymanager.UpdateCardRequest.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateCardRequest} returns this
 */
proto.companymanager.UpdateCardRequest.prototype.setBrand = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_4_digit = 4;
 * @return {string}
 */
proto.companymanager.UpdateCardRequest.prototype.getLast4Digit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateCardRequest} returns this
 */
proto.companymanager.UpdateCardRequest.prototype.setLast4Digit = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 expiry_month = 5;
 * @return {number}
 */
proto.companymanager.UpdateCardRequest.prototype.getExpiryMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.UpdateCardRequest} returns this
 */
proto.companymanager.UpdateCardRequest.prototype.setExpiryMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 expiry_year = 6;
 * @return {number}
 */
proto.companymanager.UpdateCardRequest.prototype.getExpiryYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.UpdateCardRequest} returns this
 */
proto.companymanager.UpdateCardRequest.prototype.setExpiryYear = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.UpdateCardReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.UpdateCardReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.UpdateCardReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.UpdateCardReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.UpdateCardReply}
 */
proto.companymanager.UpdateCardReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.UpdateCardReply;
  return proto.companymanager.UpdateCardReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.UpdateCardReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.UpdateCardReply}
 */
proto.companymanager.UpdateCardReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.UpdateCardReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.UpdateCardReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.UpdateCardReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.UpdateCardReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntDeleteCardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntDeleteCardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntDeleteCardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntDeleteCardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stripeCardId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntDeleteCardRequest}
 */
proto.companymanager.IntDeleteCardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntDeleteCardRequest;
  return proto.companymanager.IntDeleteCardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntDeleteCardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntDeleteCardRequest}
 */
proto.companymanager.IntDeleteCardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStripeCardId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntDeleteCardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntDeleteCardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntDeleteCardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntDeleteCardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStripeCardId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string stripe_card_id = 1;
 * @return {string}
 */
proto.companymanager.IntDeleteCardRequest.prototype.getStripeCardId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntDeleteCardRequest} returns this
 */
proto.companymanager.IntDeleteCardRequest.prototype.setStripeCardId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntDeleteCardReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntDeleteCardReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntDeleteCardReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntDeleteCardReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntDeleteCardReply}
 */
proto.companymanager.IntDeleteCardReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntDeleteCardReply;
  return proto.companymanager.IntDeleteCardReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntDeleteCardReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntDeleteCardReply}
 */
proto.companymanager.IntDeleteCardReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntDeleteCardReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntDeleteCardReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntDeleteCardReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntDeleteCardReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.UpdateCompanyBillingAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.UpdateCompanyBillingAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    line1: jspb.Message.getFieldWithDefault(msg, 2, ""),
    line2: jspb.Message.getFieldWithDefault(msg, 3, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    state: jspb.Message.getFieldWithDefault(msg, 5, ""),
    city: jspb.Message.getFieldWithDefault(msg, 6, ""),
    country: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.UpdateCompanyBillingAddressRequest}
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.UpdateCompanyBillingAddressRequest;
  return proto.companymanager.UpdateCompanyBillingAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.UpdateCompanyBillingAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.UpdateCompanyBillingAddressRequest}
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLine1(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLine2(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.UpdateCompanyBillingAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.UpdateCompanyBillingAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLine1();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLine2();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateCompanyBillingAddressRequest} returns this
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string line1 = 2;
 * @return {string}
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.getLine1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateCompanyBillingAddressRequest} returns this
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.setLine1 = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string line2 = 3;
 * @return {string}
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.getLine2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateCompanyBillingAddressRequest} returns this
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.setLine2 = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string postal_code = 4;
 * @return {string}
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateCompanyBillingAddressRequest} returns this
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.setPostalCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string state = 5;
 * @return {string}
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateCompanyBillingAddressRequest} returns this
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string city = 6;
 * @return {string}
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateCompanyBillingAddressRequest} returns this
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string country = 7;
 * @return {string}
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.UpdateCompanyBillingAddressRequest} returns this
 */
proto.companymanager.UpdateCompanyBillingAddressRequest.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.UpdateCompanyBillingAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.UpdateCompanyBillingAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.UpdateCompanyBillingAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.UpdateCompanyBillingAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.UpdateCompanyBillingAddressReply}
 */
proto.companymanager.UpdateCompanyBillingAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.UpdateCompanyBillingAddressReply;
  return proto.companymanager.UpdateCompanyBillingAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.UpdateCompanyBillingAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.UpdateCompanyBillingAddressReply}
 */
proto.companymanager.UpdateCompanyBillingAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.UpdateCompanyBillingAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.UpdateCompanyBillingAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.UpdateCompanyBillingAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.UpdateCompanyBillingAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.SetDefaultCardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.SetDefaultCardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.SetDefaultCardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SetDefaultCardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cardId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.SetDefaultCardRequest}
 */
proto.companymanager.SetDefaultCardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.SetDefaultCardRequest;
  return proto.companymanager.SetDefaultCardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.SetDefaultCardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.SetDefaultCardRequest}
 */
proto.companymanager.SetDefaultCardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCardId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.SetDefaultCardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.SetDefaultCardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.SetDefaultCardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SetDefaultCardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCardId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.SetDefaultCardRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SetDefaultCardRequest} returns this
 */
proto.companymanager.SetDefaultCardRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string card_id = 2;
 * @return {string}
 */
proto.companymanager.SetDefaultCardRequest.prototype.getCardId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.SetDefaultCardRequest} returns this
 */
proto.companymanager.SetDefaultCardRequest.prototype.setCardId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.SetDefaultCardReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.SetDefaultCardReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.SetDefaultCardReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SetDefaultCardReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.SetDefaultCardReply}
 */
proto.companymanager.SetDefaultCardReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.SetDefaultCardReply;
  return proto.companymanager.SetDefaultCardReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.SetDefaultCardReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.SetDefaultCardReply}
 */
proto.companymanager.SetDefaultCardReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.SetDefaultCardReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.SetDefaultCardReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.SetDefaultCardReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.SetDefaultCardReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntCreateInvoiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntCreateInvoiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntCreateInvoiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntCreateInvoiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stripeCustomerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    invoiceStripeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, ""),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntCreateInvoiceRequest}
 */
proto.companymanager.IntCreateInvoiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntCreateInvoiceRequest;
  return proto.companymanager.IntCreateInvoiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntCreateInvoiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntCreateInvoiceRequest}
 */
proto.companymanager.IntCreateInvoiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStripeCustomerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceStripeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntCreateInvoiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntCreateInvoiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntCreateInvoiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntCreateInvoiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStripeCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInvoiceStripeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string stripe_customer_id = 1;
 * @return {string}
 */
proto.companymanager.IntCreateInvoiceRequest.prototype.getStripeCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntCreateInvoiceRequest} returns this
 */
proto.companymanager.IntCreateInvoiceRequest.prototype.setStripeCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string invoice_stripe_id = 2;
 * @return {string}
 */
proto.companymanager.IntCreateInvoiceRequest.prototype.getInvoiceStripeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntCreateInvoiceRequest} returns this
 */
proto.companymanager.IntCreateInvoiceRequest.prototype.setInvoiceStripeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.companymanager.IntCreateInvoiceRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntCreateInvoiceRequest} returns this
 */
proto.companymanager.IntCreateInvoiceRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.companymanager.IntCreateInvoiceRequest.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.companymanager.IntCreateInvoiceRequest} returns this
*/
proto.companymanager.IntCreateInvoiceRequest.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.IntCreateInvoiceRequest} returns this
 */
proto.companymanager.IntCreateInvoiceRequest.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.IntCreateInvoiceRequest.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntCreateInvoiceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntCreateInvoiceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntCreateInvoiceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntCreateInvoiceReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntCreateInvoiceReply}
 */
proto.companymanager.IntCreateInvoiceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntCreateInvoiceReply;
  return proto.companymanager.IntCreateInvoiceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntCreateInvoiceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntCreateInvoiceReply}
 */
proto.companymanager.IntCreateInvoiceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntCreateInvoiceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntCreateInvoiceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntCreateInvoiceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntCreateInvoiceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntUpdateInvoiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntUpdateInvoiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntUpdateInvoiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    invoiceStripeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    invoiceNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    total: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    status: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pdfUrl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    paymentType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    subscriptionId: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntUpdateInvoiceRequest}
 */
proto.companymanager.IntUpdateInvoiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntUpdateInvoiceRequest;
  return proto.companymanager.IntUpdateInvoiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntUpdateInvoiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntUpdateInvoiceRequest}
 */
proto.companymanager.IntUpdateInvoiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceStripeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTotal(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPdfUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntUpdateInvoiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntUpdateInvoiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntUpdateInvoiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvoiceStripeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInvoiceNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPdfUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPaymentType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string invoice_stripe_id = 1;
 * @return {string}
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.getInvoiceStripeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntUpdateInvoiceRequest} returns this
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.setInvoiceStripeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string invoice_number = 2;
 * @return {string}
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.getInvoiceNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntUpdateInvoiceRequest} returns this
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.setInvoiceNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float total = 3;
 * @return {number}
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.IntUpdateInvoiceRequest} returns this
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.setTotal = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string status = 4;
 * @return {string}
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntUpdateInvoiceRequest} returns this
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string pdf_url = 5;
 * @return {string}
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.getPdfUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntUpdateInvoiceRequest} returns this
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.setPdfUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string payment_type = 6;
 * @return {string}
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.getPaymentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntUpdateInvoiceRequest} returns this
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.setPaymentType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string customer_id = 7;
 * @return {string}
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntUpdateInvoiceRequest} returns this
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string subscription_id = 8;
 * @return {string}
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntUpdateInvoiceRequest} returns this
 */
proto.companymanager.IntUpdateInvoiceRequest.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntUpdateInvoiceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntUpdateInvoiceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntUpdateInvoiceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntUpdateInvoiceReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntUpdateInvoiceReply}
 */
proto.companymanager.IntUpdateInvoiceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntUpdateInvoiceReply;
  return proto.companymanager.IntUpdateInvoiceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntUpdateInvoiceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntUpdateInvoiceReply}
 */
proto.companymanager.IntUpdateInvoiceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntUpdateInvoiceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntUpdateInvoiceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntUpdateInvoiceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntUpdateInvoiceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.BillingInvoiceReq.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.BillingInvoiceReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.BillingInvoiceReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.BillingInvoiceReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.BillingInvoiceReq}
 */
proto.companymanager.BillingInvoiceReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.BillingInvoiceReq;
  return proto.companymanager.BillingInvoiceReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.BillingInvoiceReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.BillingInvoiceReq}
 */
proto.companymanager.BillingInvoiceReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.BillingInvoiceReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.BillingInvoiceReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.BillingInvoiceReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.BillingInvoiceReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.BillingInvoiceReq.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.BillingInvoiceReq} returns this
 */
proto.companymanager.BillingInvoiceReq.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.companymanager.BillingInvoiceReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.BillingInvoiceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.BillingInvoiceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.BillingInvoiceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.BillingInvoiceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    invoicesList: jspb.Message.toObjectList(msg.getInvoicesList(),
    proto.companymanager.Invoice.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.BillingInvoiceReply}
 */
proto.companymanager.BillingInvoiceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.BillingInvoiceReply;
  return proto.companymanager.BillingInvoiceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.BillingInvoiceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.BillingInvoiceReply}
 */
proto.companymanager.BillingInvoiceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.companymanager.Invoice;
      reader.readMessage(value,proto.companymanager.Invoice.deserializeBinaryFromReader);
      msg.addInvoices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.BillingInvoiceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.BillingInvoiceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.BillingInvoiceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.BillingInvoiceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvoicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.companymanager.Invoice.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Invoice invoices = 1;
 * @return {!Array<!proto.companymanager.Invoice>}
 */
proto.companymanager.BillingInvoiceReply.prototype.getInvoicesList = function() {
  return /** @type{!Array<!proto.companymanager.Invoice>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.companymanager.Invoice, 1));
};


/**
 * @param {!Array<!proto.companymanager.Invoice>} value
 * @return {!proto.companymanager.BillingInvoiceReply} returns this
*/
proto.companymanager.BillingInvoiceReply.prototype.setInvoicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.companymanager.Invoice=} opt_value
 * @param {number=} opt_index
 * @return {!proto.companymanager.Invoice}
 */
proto.companymanager.BillingInvoiceReply.prototype.addInvoices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.companymanager.Invoice, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.companymanager.BillingInvoiceReply} returns this
 */
proto.companymanager.BillingInvoiceReply.prototype.clearInvoicesList = function() {
  return this.setInvoicesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.Invoice.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.Invoice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.Invoice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.Invoice.toObject = function(includeInstance, msg) {
  var f, obj = {
    invoiceNumber: jspb.Message.getFieldWithDefault(msg, 1, ""),
    total: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    status: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pdfUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    paymentType: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.Invoice}
 */
proto.companymanager.Invoice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.Invoice;
  return proto.companymanager.Invoice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.Invoice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.Invoice}
 */
proto.companymanager.Invoice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceNumber(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTotal(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPdfUrl(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.Invoice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.Invoice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.Invoice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.Invoice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvoiceNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPdfUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPaymentType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string invoice_number = 1;
 * @return {string}
 */
proto.companymanager.Invoice.prototype.getInvoiceNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.Invoice} returns this
 */
proto.companymanager.Invoice.prototype.setInvoiceNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float total = 2;
 * @return {number}
 */
proto.companymanager.Invoice.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.Invoice} returns this
 */
proto.companymanager.Invoice.prototype.setTotal = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.companymanager.Invoice.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.Invoice} returns this
 */
proto.companymanager.Invoice.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string pdf_url = 4;
 * @return {string}
 */
proto.companymanager.Invoice.prototype.getPdfUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.Invoice} returns this
 */
proto.companymanager.Invoice.prototype.setPdfUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.companymanager.Invoice.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.companymanager.Invoice} returns this
*/
proto.companymanager.Invoice.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.companymanager.Invoice} returns this
 */
proto.companymanager.Invoice.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.companymanager.Invoice.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string payment_type = 6;
 * @return {string}
 */
proto.companymanager.Invoice.prototype.getPaymentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.Invoice} returns this
 */
proto.companymanager.Invoice.prototype.setPaymentType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.DeleteCardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.DeleteCardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.DeleteCardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteCardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cardId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.DeleteCardRequest}
 */
proto.companymanager.DeleteCardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.DeleteCardRequest;
  return proto.companymanager.DeleteCardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.DeleteCardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.DeleteCardRequest}
 */
proto.companymanager.DeleteCardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCardId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.DeleteCardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.DeleteCardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.DeleteCardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteCardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCardId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.DeleteCardRequest.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.DeleteCardRequest} returns this
 */
proto.companymanager.DeleteCardRequest.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string card_id = 2;
 * @return {string}
 */
proto.companymanager.DeleteCardRequest.prototype.getCardId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.DeleteCardRequest} returns this
 */
proto.companymanager.DeleteCardRequest.prototype.setCardId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.DeleteCardReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.DeleteCardReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.DeleteCardReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteCardReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.DeleteCardReply}
 */
proto.companymanager.DeleteCardReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.DeleteCardReply;
  return proto.companymanager.DeleteCardReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.DeleteCardReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.DeleteCardReply}
 */
proto.companymanager.DeleteCardReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.DeleteCardReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.DeleteCardReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.DeleteCardReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.DeleteCardReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntAllStoreListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntAllStoreListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntAllStoreListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntAllStoreListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntAllStoreListReq}
 */
proto.companymanager.IntAllStoreListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntAllStoreListReq;
  return proto.companymanager.IntAllStoreListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntAllStoreListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntAllStoreListReq}
 */
proto.companymanager.IntAllStoreListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntAllStoreListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntAllStoreListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntAllStoreListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntAllStoreListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.IntAllStoreListReq.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntAllStoreListReq} returns this
 */
proto.companymanager.IntAllStoreListReq.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.companymanager.IntAllStoreListReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntAllStoreListReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntAllStoreListReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntAllStoreListReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntAllStoreListReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    storesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntAllStoreListReply}
 */
proto.companymanager.IntAllStoreListReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntAllStoreListReply;
  return proto.companymanager.IntAllStoreListReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntAllStoreListReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntAllStoreListReply}
 */
proto.companymanager.IntAllStoreListReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addStores(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntAllStoreListReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntAllStoreListReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntAllStoreListReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntAllStoreListReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoresList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string stores = 1;
 * @return {!Array<string>}
 */
proto.companymanager.IntAllStoreListReply.prototype.getStoresList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.companymanager.IntAllStoreListReply} returns this
 */
proto.companymanager.IntAllStoreListReply.prototype.setStoresList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.companymanager.IntAllStoreListReply} returns this
 */
proto.companymanager.IntAllStoreListReply.prototype.addStores = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.companymanager.IntAllStoreListReply} returns this
 */
proto.companymanager.IntAllStoreListReply.prototype.clearStoresList = function() {
  return this.setStoresList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntUpdateCompanyUserCountReq.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntUpdateCompanyUserCountReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntUpdateCompanyUserCountReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntUpdateCompanyUserCountReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    add: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntUpdateCompanyUserCountReq}
 */
proto.companymanager.IntUpdateCompanyUserCountReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntUpdateCompanyUserCountReq;
  return proto.companymanager.IntUpdateCompanyUserCountReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntUpdateCompanyUserCountReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntUpdateCompanyUserCountReq}
 */
proto.companymanager.IntUpdateCompanyUserCountReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAdd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntUpdateCompanyUserCountReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntUpdateCompanyUserCountReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntUpdateCompanyUserCountReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntUpdateCompanyUserCountReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAdd();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.IntUpdateCompanyUserCountReq.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntUpdateCompanyUserCountReq} returns this
 */
proto.companymanager.IntUpdateCompanyUserCountReq.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool add = 2;
 * @return {boolean}
 */
proto.companymanager.IntUpdateCompanyUserCountReq.prototype.getAdd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.companymanager.IntUpdateCompanyUserCountReq} returns this
 */
proto.companymanager.IntUpdateCompanyUserCountReq.prototype.setAdd = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntUpdateCompanyUserCountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntUpdateCompanyUserCountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntUpdateCompanyUserCountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntUpdateCompanyUserCountReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntUpdateCompanyUserCountReply}
 */
proto.companymanager.IntUpdateCompanyUserCountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntUpdateCompanyUserCountReply;
  return proto.companymanager.IntUpdateCompanyUserCountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntUpdateCompanyUserCountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntUpdateCompanyUserCountReply}
 */
proto.companymanager.IntUpdateCompanyUserCountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntUpdateCompanyUserCountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntUpdateCompanyUserCountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntUpdateCompanyUserCountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntUpdateCompanyUserCountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntUpdateCompanyOrderCountReq.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntUpdateCompanyOrderCountReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntUpdateCompanyOrderCountReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntUpdateCompanyOrderCountReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    storeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orderCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntUpdateCompanyOrderCountReq}
 */
proto.companymanager.IntUpdateCompanyOrderCountReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntUpdateCompanyOrderCountReq;
  return proto.companymanager.IntUpdateCompanyOrderCountReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntUpdateCompanyOrderCountReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntUpdateCompanyOrderCountReq}
 */
proto.companymanager.IntUpdateCompanyOrderCountReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrderCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntUpdateCompanyOrderCountReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntUpdateCompanyOrderCountReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntUpdateCompanyOrderCountReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntUpdateCompanyOrderCountReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoreId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrderCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string store_id = 1;
 * @return {string}
 */
proto.companymanager.IntUpdateCompanyOrderCountReq.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.IntUpdateCompanyOrderCountReq} returns this
 */
proto.companymanager.IntUpdateCompanyOrderCountReq.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 order_count = 2;
 * @return {number}
 */
proto.companymanager.IntUpdateCompanyOrderCountReq.prototype.getOrderCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.IntUpdateCompanyOrderCountReq} returns this
 */
proto.companymanager.IntUpdateCompanyOrderCountReq.prototype.setOrderCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntUpdateCompanyOrderCountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntUpdateCompanyOrderCountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntUpdateCompanyOrderCountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntUpdateCompanyOrderCountReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntUpdateCompanyOrderCountReply}
 */
proto.companymanager.IntUpdateCompanyOrderCountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntUpdateCompanyOrderCountReply;
  return proto.companymanager.IntUpdateCompanyOrderCountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntUpdateCompanyOrderCountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntUpdateCompanyOrderCountReply}
 */
proto.companymanager.IntUpdateCompanyOrderCountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntUpdateCompanyOrderCountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntUpdateCompanyOrderCountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntUpdateCompanyOrderCountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntUpdateCompanyOrderCountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.companymanager.IntGetStoreInfoBulkReq.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntGetStoreInfoBulkReq.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntGetStoreInfoBulkReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntGetStoreInfoBulkReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntGetStoreInfoBulkReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    storeIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntGetStoreInfoBulkReq}
 */
proto.companymanager.IntGetStoreInfoBulkReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntGetStoreInfoBulkReq;
  return proto.companymanager.IntGetStoreInfoBulkReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntGetStoreInfoBulkReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntGetStoreInfoBulkReq}
 */
proto.companymanager.IntGetStoreInfoBulkReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addStoreIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntGetStoreInfoBulkReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntGetStoreInfoBulkReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntGetStoreInfoBulkReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntGetStoreInfoBulkReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoreIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string store_ids = 1;
 * @return {!Array<string>}
 */
proto.companymanager.IntGetStoreInfoBulkReq.prototype.getStoreIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.companymanager.IntGetStoreInfoBulkReq} returns this
 */
proto.companymanager.IntGetStoreInfoBulkReq.prototype.setStoreIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.companymanager.IntGetStoreInfoBulkReq} returns this
 */
proto.companymanager.IntGetStoreInfoBulkReq.prototype.addStoreIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.companymanager.IntGetStoreInfoBulkReq} returns this
 */
proto.companymanager.IntGetStoreInfoBulkReq.prototype.clearStoreIdsList = function() {
  return this.setStoreIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.companymanager.IntGetStoreInfoBulkReply.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.IntGetStoreInfoBulkReply.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.IntGetStoreInfoBulkReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.IntGetStoreInfoBulkReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntGetStoreInfoBulkReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    storesList: jspb.Message.toObjectList(msg.getStoresList(),
    proto.companymanager.StoreInfo.toObject, includeInstance),
    locationsList: jspb.Message.toObjectList(msg.getLocationsList(),
    proto.companymanager.ShopifyWareHouse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.IntGetStoreInfoBulkReply}
 */
proto.companymanager.IntGetStoreInfoBulkReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.IntGetStoreInfoBulkReply;
  return proto.companymanager.IntGetStoreInfoBulkReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.IntGetStoreInfoBulkReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.IntGetStoreInfoBulkReply}
 */
proto.companymanager.IntGetStoreInfoBulkReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.companymanager.StoreInfo;
      reader.readMessage(value,proto.companymanager.StoreInfo.deserializeBinaryFromReader);
      msg.addStores(value);
      break;
    case 2:
      var value = new proto.companymanager.ShopifyWareHouse;
      reader.readMessage(value,proto.companymanager.ShopifyWareHouse.deserializeBinaryFromReader);
      msg.addLocations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.IntGetStoreInfoBulkReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.IntGetStoreInfoBulkReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.IntGetStoreInfoBulkReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.IntGetStoreInfoBulkReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.companymanager.StoreInfo.serializeBinaryToWriter
    );
  }
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.companymanager.ShopifyWareHouse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StoreInfo stores = 1;
 * @return {!Array<!proto.companymanager.StoreInfo>}
 */
proto.companymanager.IntGetStoreInfoBulkReply.prototype.getStoresList = function() {
  return /** @type{!Array<!proto.companymanager.StoreInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.companymanager.StoreInfo, 1));
};


/**
 * @param {!Array<!proto.companymanager.StoreInfo>} value
 * @return {!proto.companymanager.IntGetStoreInfoBulkReply} returns this
*/
proto.companymanager.IntGetStoreInfoBulkReply.prototype.setStoresList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.companymanager.StoreInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.companymanager.StoreInfo}
 */
proto.companymanager.IntGetStoreInfoBulkReply.prototype.addStores = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.companymanager.StoreInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.companymanager.IntGetStoreInfoBulkReply} returns this
 */
proto.companymanager.IntGetStoreInfoBulkReply.prototype.clearStoresList = function() {
  return this.setStoresList([]);
};


/**
 * repeated ShopifyWareHouse locations = 2;
 * @return {!Array<!proto.companymanager.ShopifyWareHouse>}
 */
proto.companymanager.IntGetStoreInfoBulkReply.prototype.getLocationsList = function() {
  return /** @type{!Array<!proto.companymanager.ShopifyWareHouse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.companymanager.ShopifyWareHouse, 2));
};


/**
 * @param {!Array<!proto.companymanager.ShopifyWareHouse>} value
 * @return {!proto.companymanager.IntGetStoreInfoBulkReply} returns this
*/
proto.companymanager.IntGetStoreInfoBulkReply.prototype.setLocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.companymanager.ShopifyWareHouse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.companymanager.ShopifyWareHouse}
 */
proto.companymanager.IntGetStoreInfoBulkReply.prototype.addLocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.companymanager.ShopifyWareHouse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.companymanager.IntGetStoreInfoBulkReply} returns this
 */
proto.companymanager.IntGetStoreInfoBulkReply.prototype.clearLocationsList = function() {
  return this.setLocationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.companymanager.ShopifyWareHouse.prototype.toObject = function(opt_includeInstance) {
  return proto.companymanager.ShopifyWareHouse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.companymanager.ShopifyWareHouse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ShopifyWareHouse.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shopifyLocationId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.companymanager.ShopifyWareHouse}
 */
proto.companymanager.ShopifyWareHouse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.companymanager.ShopifyWareHouse;
  return proto.companymanager.ShopifyWareHouse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.companymanager.ShopifyWareHouse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.companymanager.ShopifyWareHouse}
 */
proto.companymanager.ShopifyWareHouse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setShopifyLocationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.companymanager.ShopifyWareHouse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.companymanager.ShopifyWareHouse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.companymanager.ShopifyWareHouse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.companymanager.ShopifyWareHouse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShopifyLocationId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string company_id = 1;
 * @return {string}
 */
proto.companymanager.ShopifyWareHouse.prototype.getCompanyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.companymanager.ShopifyWareHouse} returns this
 */
proto.companymanager.ShopifyWareHouse.prototype.setCompanyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 shopify_location_id = 2;
 * @return {number}
 */
proto.companymanager.ShopifyWareHouse.prototype.getShopifyLocationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.companymanager.ShopifyWareHouse} returns this
 */
proto.companymanager.ShopifyWareHouse.prototype.setShopifyLocationId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.companymanager);
