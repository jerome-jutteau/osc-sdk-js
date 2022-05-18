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
exports.LinkVolumeRequestToJSON = exports.LinkVolumeRequestFromJSONTyped = exports.LinkVolumeRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
function LinkVolumeRequestFromJSON(json) {
    return LinkVolumeRequestFromJSONTyped(json, false);
}
exports.LinkVolumeRequestFromJSON = LinkVolumeRequestFromJSON;
function LinkVolumeRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'deviceName': json['DeviceName'],
        'dryRun': !runtime_1.exists(json, 'DryRun') ? undefined : json['DryRun'],
        'vmId': json['VmId'],
        'volumeId': json['VolumeId'],
    };
}
exports.LinkVolumeRequestFromJSONTyped = LinkVolumeRequestFromJSONTyped;
function LinkVolumeRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DeviceName': value.deviceName,
        'DryRun': value.dryRun,
        'VmId': value.vmId,
        'VolumeId': value.volumeId,
    };
}
exports.LinkVolumeRequestToJSON = LinkVolumeRequestToJSON;
