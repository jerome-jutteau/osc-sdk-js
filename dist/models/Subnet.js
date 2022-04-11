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
var ResourceTag_1 = require("./ResourceTag");
function SubnetFromJSON(json) {
    return SubnetFromJSONTyped(json, false);
}
exports.SubnetFromJSON = SubnetFromJSON;
function SubnetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'availableIpsCount': !runtime_1.exists(json, 'AvailableIpsCount') ? undefined : json['AvailableIpsCount'],
        'ipRange': !runtime_1.exists(json, 'IpRange') ? undefined : json['IpRange'],
        'mapPublicIpOnLaunch': !runtime_1.exists(json, 'MapPublicIpOnLaunch') ? undefined : json['MapPublicIpOnLaunch'],
        'netId': !runtime_1.exists(json, 'NetId') ? undefined : json['NetId'],
        'state': !runtime_1.exists(json, 'State') ? undefined : json['State'],
        'subnetId': !runtime_1.exists(json, 'SubnetId') ? undefined : json['SubnetId'],
        'subregionName': !runtime_1.exists(json, 'SubregionName') ? undefined : json['SubregionName'],
        'tags': !runtime_1.exists(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTag_1.ResourceTagFromJSON)),
    };
}
exports.SubnetFromJSONTyped = SubnetFromJSONTyped;
function SubnetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AvailableIpsCount': value.availableIpsCount,
        'IpRange': value.ipRange,
        'MapPublicIpOnLaunch': value.mapPublicIpOnLaunch,
        'NetId': value.netId,
        'State': value.state,
        'SubnetId': value.subnetId,
        'SubregionName': value.subregionName,
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTag_1.ResourceTagToJSON)),
    };
}
exports.SubnetToJSON = SubnetToJSON;
