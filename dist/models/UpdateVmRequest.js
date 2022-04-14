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
import { exists } from '../runtime';
import { BlockDeviceMappingVmUpdateFromJSON, BlockDeviceMappingVmUpdateToJSON, } from './BlockDeviceMappingVmUpdate';
/**
* @export
* @enum {string}
*/
export var UpdateVmRequestPerformanceEnum;
(function (UpdateVmRequestPerformanceEnum) {
    UpdateVmRequestPerformanceEnum["Medium"] = "medium";
    UpdateVmRequestPerformanceEnum["High"] = "high";
    UpdateVmRequestPerformanceEnum["Highest"] = "highest";
})(UpdateVmRequestPerformanceEnum || (UpdateVmRequestPerformanceEnum = {}));
export function UpdateVmRequestFromJSON(json) {
    return UpdateVmRequestFromJSONTyped(json, false);
}
export function UpdateVmRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockDeviceMappings': !exists(json, 'BlockDeviceMappings') ? undefined : (json['BlockDeviceMappings'].map(BlockDeviceMappingVmUpdateFromJSON)),
        'bsuOptimized': !exists(json, 'BsuOptimized') ? undefined : json['BsuOptimized'],
        'deletionProtection': !exists(json, 'DeletionProtection') ? undefined : json['DeletionProtection'],
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'isSourceDestChecked': !exists(json, 'IsSourceDestChecked') ? undefined : json['IsSourceDestChecked'],
        'keypairName': !exists(json, 'KeypairName') ? undefined : json['KeypairName'],
        'performance': !exists(json, 'Performance') ? undefined : json['Performance'],
        'securityGroupIds': !exists(json, 'SecurityGroupIds') ? undefined : json['SecurityGroupIds'],
        'userData': !exists(json, 'UserData') ? undefined : json['UserData'],
        'vmId': json['VmId'],
        'vmInitiatedShutdownBehavior': !exists(json, 'VmInitiatedShutdownBehavior') ? undefined : json['VmInitiatedShutdownBehavior'],
        'vmType': !exists(json, 'VmType') ? undefined : json['VmType'],
    };
}
export function UpdateVmRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'BlockDeviceMappings': value.blockDeviceMappings === undefined ? undefined : (value.blockDeviceMappings.map(BlockDeviceMappingVmUpdateToJSON)),
        'BsuOptimized': value.bsuOptimized,
        'DeletionProtection': value.deletionProtection,
        'DryRun': value.dryRun,
        'IsSourceDestChecked': value.isSourceDestChecked,
        'KeypairName': value.keypairName,
        'Performance': value.performance,
        'SecurityGroupIds': value.securityGroupIds,
        'UserData': value.userData,
        'VmId': value.vmId,
        'VmInitiatedShutdownBehavior': value.vmInitiatedShutdownBehavior,
        'VmType': value.vmType,
    };
}
