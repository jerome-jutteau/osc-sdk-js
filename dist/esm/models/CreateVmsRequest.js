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
import { exists } from '../runtime';
import { BlockDeviceMappingVmCreationFromJSON, BlockDeviceMappingVmCreationToJSON, } from './BlockDeviceMappingVmCreation';
import { NicForVmCreationFromJSON, NicForVmCreationToJSON, } from './NicForVmCreation';
import { PlacementFromJSON, PlacementToJSON, } from './Placement';
/**
 * @export
 */
export const CreateVmsRequestPerformanceEnum = {
    Medium: 'medium',
    High: 'high',
    Highest: 'highest'
};
export function CreateVmsRequestFromJSON(json) {
    return CreateVmsRequestFromJSONTyped(json, false);
}
export function CreateVmsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockDeviceMappings': !exists(json, 'BlockDeviceMappings') ? undefined : (json['BlockDeviceMappings'].map(BlockDeviceMappingVmCreationFromJSON)),
        'bootOnCreation': !exists(json, 'BootOnCreation') ? undefined : json['BootOnCreation'],
        'bsuOptimized': !exists(json, 'BsuOptimized') ? undefined : json['BsuOptimized'],
        'clientToken': !exists(json, 'ClientToken') ? undefined : json['ClientToken'],
        'deletionProtection': !exists(json, 'DeletionProtection') ? undefined : json['DeletionProtection'],
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'imageId': json['ImageId'],
        'keypairName': !exists(json, 'KeypairName') ? undefined : json['KeypairName'],
        'maxVmsCount': !exists(json, 'MaxVmsCount') ? undefined : json['MaxVmsCount'],
        'minVmsCount': !exists(json, 'MinVmsCount') ? undefined : json['MinVmsCount'],
        'nics': !exists(json, 'Nics') ? undefined : (json['Nics'].map(NicForVmCreationFromJSON)),
        'performance': !exists(json, 'Performance') ? undefined : json['Performance'],
        'placement': !exists(json, 'Placement') ? undefined : PlacementFromJSON(json['Placement']),
        'privateIps': !exists(json, 'PrivateIps') ? undefined : json['PrivateIps'],
        'securityGroupIds': !exists(json, 'SecurityGroupIds') ? undefined : json['SecurityGroupIds'],
        'securityGroups': !exists(json, 'SecurityGroups') ? undefined : json['SecurityGroups'],
        'subnetId': !exists(json, 'SubnetId') ? undefined : json['SubnetId'],
        'userData': !exists(json, 'UserData') ? undefined : json['UserData'],
        'vmInitiatedShutdownBehavior': !exists(json, 'VmInitiatedShutdownBehavior') ? undefined : json['VmInitiatedShutdownBehavior'],
        'vmType': !exists(json, 'VmType') ? undefined : json['VmType'],
    };
}
export function CreateVmsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'BlockDeviceMappings': value.blockDeviceMappings === undefined ? undefined : (value.blockDeviceMappings.map(BlockDeviceMappingVmCreationToJSON)),
        'BootOnCreation': value.bootOnCreation,
        'BsuOptimized': value.bsuOptimized,
        'ClientToken': value.clientToken,
        'DeletionProtection': value.deletionProtection,
        'DryRun': value.dryRun,
        'ImageId': value.imageId,
        'KeypairName': value.keypairName,
        'MaxVmsCount': value.maxVmsCount,
        'MinVmsCount': value.minVmsCount,
        'Nics': value.nics === undefined ? undefined : (value.nics.map(NicForVmCreationToJSON)),
        'Performance': value.performance,
        'Placement': PlacementToJSON(value.placement),
        'PrivateIps': value.privateIps,
        'SecurityGroupIds': value.securityGroupIds,
        'SecurityGroups': value.securityGroups,
        'SubnetId': value.subnetId,
        'UserData': value.userData,
        'VmInitiatedShutdownBehavior': value.vmInitiatedShutdownBehavior,
        'VmType': value.vmType,
    };
}
