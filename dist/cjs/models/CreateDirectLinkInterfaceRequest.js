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
exports.CreateDirectLinkInterfaceRequestToJSON = exports.CreateDirectLinkInterfaceRequestFromJSONTyped = exports.CreateDirectLinkInterfaceRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
const DirectLinkInterface_1 = require("./DirectLinkInterface");
function CreateDirectLinkInterfaceRequestFromJSON(json) {
    return CreateDirectLinkInterfaceRequestFromJSONTyped(json, false);
}
exports.CreateDirectLinkInterfaceRequestFromJSON = CreateDirectLinkInterfaceRequestFromJSON;
function CreateDirectLinkInterfaceRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'directLinkId': json['DirectLinkId'],
        'directLinkInterface': DirectLinkInterface_1.DirectLinkInterfaceFromJSON(json['DirectLinkInterface']),
        'dryRun': !runtime_1.exists(json, 'DryRun') ? undefined : json['DryRun'],
    };
}
exports.CreateDirectLinkInterfaceRequestFromJSONTyped = CreateDirectLinkInterfaceRequestFromJSONTyped;
function CreateDirectLinkInterfaceRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DirectLinkId': value.directLinkId,
        'DirectLinkInterface': DirectLinkInterface_1.DirectLinkInterfaceToJSON(value.directLinkInterface),
        'DryRun': value.dryRun,
    };
}
exports.CreateDirectLinkInterfaceRequestToJSON = CreateDirectLinkInterfaceRequestToJSON;
