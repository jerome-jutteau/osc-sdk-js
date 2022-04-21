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
exports.CreateImageRequestToJSON = exports.CreateImageRequestFromJSONTyped = exports.CreateImageRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
const BlockDeviceMappingImage_1 = require("./BlockDeviceMappingImage");
function CreateImageRequestFromJSON(json) {
    return CreateImageRequestFromJSONTyped(json, false);
}
exports.CreateImageRequestFromJSON = CreateImageRequestFromJSON;
function CreateImageRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'architecture': !(0, runtime_1.exists)(json, 'Architecture') ? undefined : json['Architecture'],
        'blockDeviceMappings': !(0, runtime_1.exists)(json, 'BlockDeviceMappings') ? undefined : (json['BlockDeviceMappings'].map(BlockDeviceMappingImage_1.BlockDeviceMappingImageFromJSON)),
        'description': !(0, runtime_1.exists)(json, 'Description') ? undefined : json['Description'],
        'dryRun': !(0, runtime_1.exists)(json, 'DryRun') ? undefined : json['DryRun'],
        'fileLocation': !(0, runtime_1.exists)(json, 'FileLocation') ? undefined : json['FileLocation'],
        'imageName': !(0, runtime_1.exists)(json, 'ImageName') ? undefined : json['ImageName'],
        'noReboot': !(0, runtime_1.exists)(json, 'NoReboot') ? undefined : json['NoReboot'],
        'rootDeviceName': !(0, runtime_1.exists)(json, 'RootDeviceName') ? undefined : json['RootDeviceName'],
        'sourceImageId': !(0, runtime_1.exists)(json, 'SourceImageId') ? undefined : json['SourceImageId'],
        'sourceRegionName': !(0, runtime_1.exists)(json, 'SourceRegionName') ? undefined : json['SourceRegionName'],
        'vmId': !(0, runtime_1.exists)(json, 'VmId') ? undefined : json['VmId'],
    };
}
exports.CreateImageRequestFromJSONTyped = CreateImageRequestFromJSONTyped;
function CreateImageRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Architecture': value.architecture,
        'BlockDeviceMappings': value.blockDeviceMappings === undefined ? undefined : (value.blockDeviceMappings.map(BlockDeviceMappingImage_1.BlockDeviceMappingImageToJSON)),
        'Description': value.description,
        'DryRun': value.dryRun,
        'FileLocation': value.fileLocation,
        'ImageName': value.imageName,
        'NoReboot': value.noReboot,
        'RootDeviceName': value.rootDeviceName,
        'SourceImageId': value.sourceImageId,
        'SourceRegionName': value.sourceRegionName,
        'VmId': value.vmId,
    };
}
exports.CreateImageRequestToJSON = CreateImageRequestToJSON;
