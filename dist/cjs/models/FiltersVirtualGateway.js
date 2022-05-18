"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * 3DS OUTSCALE API
 * Welcome to the OUTSCALE API documentation.<br /><br />  The OUTSCALE API enables you to manage your resources in the OUTSCALE Cloud. This documentation describes the different actions available along with code examples.<br /><br />  Note that the OUTSCALE Cloud is compatible with Amazon Web Services (AWS) APIs, but some resources have different names in AWS than in the OUTSCALE API. You can find a list of the differences [here](https://docs.outscale.com/en/userguide/OUTSCALE-APIs-Reference.html).<br /><br />  You can also manage your resources using the [Cockpit](https://docs.outscale.com/en/userguide/About-Cockpit.html) web interface.
 *
 * The version of the OpenAPI document: 1.19
 * Contact: support@outscale.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltersVirtualGatewayToJSON = exports.FiltersVirtualGatewayFromJSONTyped = exports.FiltersVirtualGatewayFromJSON = void 0;
const runtime_1 = require("../runtime");
function FiltersVirtualGatewayFromJSON(json) {
    return FiltersVirtualGatewayFromJSONTyped(json, false);
}
exports.FiltersVirtualGatewayFromJSON = FiltersVirtualGatewayFromJSON;
function FiltersVirtualGatewayFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'connectionTypes': !runtime_1.exists(json, 'ConnectionTypes') ? undefined : json['ConnectionTypes'],
        'linkNetIds': !runtime_1.exists(json, 'LinkNetIds') ? undefined : json['LinkNetIds'],
        'linkStates': !runtime_1.exists(json, 'LinkStates') ? undefined : json['LinkStates'],
        'states': !runtime_1.exists(json, 'States') ? undefined : json['States'],
        'tagKeys': !runtime_1.exists(json, 'TagKeys') ? undefined : json['TagKeys'],
        'tagValues': !runtime_1.exists(json, 'TagValues') ? undefined : json['TagValues'],
        'tags': !runtime_1.exists(json, 'Tags') ? undefined : json['Tags'],
        'virtualGatewayIds': !runtime_1.exists(json, 'VirtualGatewayIds') ? undefined : json['VirtualGatewayIds'],
    };
}
exports.FiltersVirtualGatewayFromJSONTyped = FiltersVirtualGatewayFromJSONTyped;
function FiltersVirtualGatewayToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ConnectionTypes': value.connectionTypes,
        'LinkNetIds': value.linkNetIds,
        'LinkStates': value.linkStates,
        'States': value.states,
        'TagKeys': value.tagKeys,
        'TagValues': value.tagValues,
        'Tags': value.tags,
        'VirtualGatewayIds': value.virtualGatewayIds,
    };
}
exports.FiltersVirtualGatewayToJSON = FiltersVirtualGatewayToJSON;