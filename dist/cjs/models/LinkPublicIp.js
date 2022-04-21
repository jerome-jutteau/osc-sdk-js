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
exports.LinkPublicIpToJSON = exports.LinkPublicIpFromJSONTyped = exports.LinkPublicIpFromJSON = void 0;
const runtime_1 = require("../runtime");
function LinkPublicIpFromJSON(json) {
    return LinkPublicIpFromJSONTyped(json, false);
}
exports.LinkPublicIpFromJSON = LinkPublicIpFromJSON;
function LinkPublicIpFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'linkPublicIpId': !(0, runtime_1.exists)(json, 'LinkPublicIpId') ? undefined : json['LinkPublicIpId'],
        'publicDnsName': !(0, runtime_1.exists)(json, 'PublicDnsName') ? undefined : json['PublicDnsName'],
        'publicIp': !(0, runtime_1.exists)(json, 'PublicIp') ? undefined : json['PublicIp'],
        'publicIpAccountId': !(0, runtime_1.exists)(json, 'PublicIpAccountId') ? undefined : json['PublicIpAccountId'],
        'publicIpId': !(0, runtime_1.exists)(json, 'PublicIpId') ? undefined : json['PublicIpId'],
    };
}
exports.LinkPublicIpFromJSONTyped = LinkPublicIpFromJSONTyped;
function LinkPublicIpToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'LinkPublicIpId': value.linkPublicIpId,
        'PublicDnsName': value.publicDnsName,
        'PublicIp': value.publicIp,
        'PublicIpAccountId': value.publicIpAccountId,
        'PublicIpId': value.publicIpId,
    };
}
exports.LinkPublicIpToJSON = LinkPublicIpToJSON;
