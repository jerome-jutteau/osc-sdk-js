"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * 3DS OUTSCALE API
 * Welcome to the OUTSCALE API documentation.<br /><br />  The OUTSCALE API enables you to manage your resources in the OUTSCALE Cloud. This documentation describes the different actions available along with code examples.<br /><br />  Note that the OUTSCALE Cloud is compatible with Amazon Web Services (AWS) APIs, but some resources have different names in AWS than in the OUTSCALE API. You can find a list of the differences [here](https://docs.outscale.com/en/userguide/OUTSCALE-APIs-Reference.html).<br /><br />  You can also manage your resources using the [Cockpit](https://docs.outscale.com/en/userguide/About-Cockpit.html) web interface.
 *
 * The version of the OpenAPI document: 1.18
 * Contact: support@outscale.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var runtime_1 = require("../runtime");
var ModelResponseContext_1 = require("./ModelResponseContext");
function LinkRouteTableResponseFromJSON(json) {
    return LinkRouteTableResponseFromJSONTyped(json, false);
}
exports.LinkRouteTableResponseFromJSON = LinkRouteTableResponseFromJSON;
function LinkRouteTableResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'linkRouteTableId': !runtime_1.exists(json, 'LinkRouteTableId') ? undefined : json['LinkRouteTableId'],
        'responseContext': !runtime_1.exists(json, 'ResponseContext') ? undefined : ModelResponseContext_1.ModelResponseContextFromJSON(json['ResponseContext']),
    };
}
exports.LinkRouteTableResponseFromJSONTyped = LinkRouteTableResponseFromJSONTyped;
function LinkRouteTableResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'LinkRouteTableId': value.linkRouteTableId,
        'ResponseContext': ModelResponseContext_1.ModelResponseContextToJSON(value.responseContext),
    };
}
exports.LinkRouteTableResponseToJSON = LinkRouteTableResponseToJSON;
