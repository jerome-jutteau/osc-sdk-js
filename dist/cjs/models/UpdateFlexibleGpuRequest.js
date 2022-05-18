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
exports.UpdateFlexibleGpuRequestToJSON = exports.UpdateFlexibleGpuRequestFromJSONTyped = exports.UpdateFlexibleGpuRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
function UpdateFlexibleGpuRequestFromJSON(json) {
    return UpdateFlexibleGpuRequestFromJSONTyped(json, false);
}
exports.UpdateFlexibleGpuRequestFromJSON = UpdateFlexibleGpuRequestFromJSON;
function UpdateFlexibleGpuRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'deleteOnVmDeletion': !runtime_1.exists(json, 'DeleteOnVmDeletion') ? undefined : json['DeleteOnVmDeletion'],
        'dryRun': !runtime_1.exists(json, 'DryRun') ? undefined : json['DryRun'],
        'flexibleGpuId': json['FlexibleGpuId'],
    };
}
exports.UpdateFlexibleGpuRequestFromJSONTyped = UpdateFlexibleGpuRequestFromJSONTyped;
function UpdateFlexibleGpuRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DeleteOnVmDeletion': value.deleteOnVmDeletion,
        'DryRun': value.dryRun,
        'FlexibleGpuId': value.flexibleGpuId,
    };
}
exports.UpdateFlexibleGpuRequestToJSON = UpdateFlexibleGpuRequestToJSON;
