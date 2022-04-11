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
function LinkPublicIpRequestFromJSON(json) {
    return LinkPublicIpRequestFromJSONTyped(json, false);
}
exports.LinkPublicIpRequestFromJSON = LinkPublicIpRequestFromJSON;
function LinkPublicIpRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowRelink': !runtime_1.exists(json, 'AllowRelink') ? undefined : json['AllowRelink'],
        'dryRun': !runtime_1.exists(json, 'DryRun') ? undefined : json['DryRun'],
        'nicId': !runtime_1.exists(json, 'NicId') ? undefined : json['NicId'],
        'privateIp': !runtime_1.exists(json, 'PrivateIp') ? undefined : json['PrivateIp'],
        'publicIp': !runtime_1.exists(json, 'PublicIp') ? undefined : json['PublicIp'],
        'publicIpId': !runtime_1.exists(json, 'PublicIpId') ? undefined : json['PublicIpId'],
        'vmId': !runtime_1.exists(json, 'VmId') ? undefined : json['VmId'],
    };
}
exports.LinkPublicIpRequestFromJSONTyped = LinkPublicIpRequestFromJSONTyped;
function LinkPublicIpRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AllowRelink': value.allowRelink,
        'DryRun': value.dryRun,
        'NicId': value.nicId,
        'PrivateIp': value.privateIp,
        'PublicIp': value.publicIp,
        'PublicIpId': value.publicIpId,
        'VmId': value.vmId,
    };
}
exports.LinkPublicIpRequestToJSON = LinkPublicIpRequestToJSON;
