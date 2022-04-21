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
exports.PrivateIpLightForVmToJSON = exports.PrivateIpLightForVmFromJSONTyped = exports.PrivateIpLightForVmFromJSON = void 0;
const runtime_1 = require("../runtime");
const LinkPublicIpLightForVm_1 = require("./LinkPublicIpLightForVm");
function PrivateIpLightForVmFromJSON(json) {
    return PrivateIpLightForVmFromJSONTyped(json, false);
}
exports.PrivateIpLightForVmFromJSON = PrivateIpLightForVmFromJSON;
function PrivateIpLightForVmFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'isPrimary': !(0, runtime_1.exists)(json, 'IsPrimary') ? undefined : json['IsPrimary'],
        'linkPublicIp': !(0, runtime_1.exists)(json, 'LinkPublicIp') ? undefined : (0, LinkPublicIpLightForVm_1.LinkPublicIpLightForVmFromJSON)(json['LinkPublicIp']),
        'privateDnsName': !(0, runtime_1.exists)(json, 'PrivateDnsName') ? undefined : json['PrivateDnsName'],
        'privateIp': !(0, runtime_1.exists)(json, 'PrivateIp') ? undefined : json['PrivateIp'],
    };
}
exports.PrivateIpLightForVmFromJSONTyped = PrivateIpLightForVmFromJSONTyped;
function PrivateIpLightForVmToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'IsPrimary': value.isPrimary,
        'LinkPublicIp': (0, LinkPublicIpLightForVm_1.LinkPublicIpLightForVmToJSON)(value.linkPublicIp),
        'PrivateDnsName': value.privateDnsName,
        'PrivateIp': value.privateIp,
    };
}
exports.PrivateIpLightForVmToJSON = PrivateIpLightForVmToJSON;
