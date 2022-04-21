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
exports.FlexibleGpuToJSON = exports.FlexibleGpuFromJSONTyped = exports.FlexibleGpuFromJSON = void 0;
const runtime_1 = require("../runtime");
function FlexibleGpuFromJSON(json) {
    return FlexibleGpuFromJSONTyped(json, false);
}
exports.FlexibleGpuFromJSON = FlexibleGpuFromJSON;
function FlexibleGpuFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'deleteOnVmDeletion': !(0, runtime_1.exists)(json, 'DeleteOnVmDeletion') ? undefined : json['DeleteOnVmDeletion'],
        'flexibleGpuId': !(0, runtime_1.exists)(json, 'FlexibleGpuId') ? undefined : json['FlexibleGpuId'],
        'generation': !(0, runtime_1.exists)(json, 'Generation') ? undefined : json['Generation'],
        'modelName': !(0, runtime_1.exists)(json, 'ModelName') ? undefined : json['ModelName'],
        'state': !(0, runtime_1.exists)(json, 'State') ? undefined : json['State'],
        'subregionName': !(0, runtime_1.exists)(json, 'SubregionName') ? undefined : json['SubregionName'],
        'vmId': !(0, runtime_1.exists)(json, 'VmId') ? undefined : json['VmId'],
    };
}
exports.FlexibleGpuFromJSONTyped = FlexibleGpuFromJSONTyped;
function FlexibleGpuToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DeleteOnVmDeletion': value.deleteOnVmDeletion,
        'FlexibleGpuId': value.flexibleGpuId,
        'Generation': value.generation,
        'ModelName': value.modelName,
        'State': value.state,
        'SubregionName': value.subregionName,
        'VmId': value.vmId,
    };
}
exports.FlexibleGpuToJSON = FlexibleGpuToJSON;
